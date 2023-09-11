import crypto from "crypto";
import pgp from "pg-promise";
import AccountService from "./AccountService";

enum RideStatus {
    REQUESTED = 'requested',
    ACCEPTED = 'accepted',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    CANCELED = 'canceled'
}

export default class RideService {

    constructor() {
    }

    async newRide(input: any) {
        const connection = pgp()("postgres://huggo:123456@localhost:5432/app");
        try {
            const rideId = crypto.randomUUID();
            const accountService = new AccountService();
            const fare = 0;
            const distance = 0;
            const date = new Date();
            const account = await accountService.getAccount(input.accountId);
            const [hasRideInProgress] = await connection.query("select count(*) from cccat13.ride where ride.passenger_id = $1 and ride.status <> $2;", [account.account_id, RideStatus.COMPLETED]);
            if (account.is_passenger !== true) throw new Error("Account is not a passenger");
            if (hasRideInProgress.count > 0) throw new Error("Account already has a ride in progress");
            await connection.query("insert into cccat13.ride (ride_id, passenger_id, status, fare, distance, from_lat, from_long, to_lat, to_long, date) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [rideId, input.accountId, RideStatus.REQUESTED, fare, distance, input.fromLat, input.fromLong, input.toLat, input.toLong, date]);
            return {
                rideId
            }
        } finally {
            await connection.$pool.end();
        }
    }

    async acceptRide(input: any) {
        const connection = pgp()("postgres://huggo:123456@localhost:5432/app");
        try {
            const accountService = new AccountService();
            const account = await accountService.getAccount(input.accountId);
            const ride = await this.getRide(input.rideId);
            if (account.is_driver !== true) throw new Error("Account is not a driver");
            if (ride.status !== RideStatus.REQUESTED) throw new Error("Ride staus is not requested");
            const [hasRideInProgress] = await connection.query("select count(*) from cccat13.ride where ride.driver_id = $1 and ride.status <> $2;", [account.account_id, RideStatus.COMPLETED]);
            if (hasRideInProgress.count > 0) throw new Error("Driver already has a ride in progress");
            await connection.query("update cccat13.ride SET status=$1,driver_id=$2 where ride.ride_id=$3;", [RideStatus.ACCEPTED, account.account_id, ride.ride_id]);
            return;
        } finally {
            await connection.$pool.end();
        }
    }

    async getRide(rideId: string) {
        const connection = pgp()("postgres://huggo:123456@localhost:5432/app");
        const [ride] = await connection.query("select * from cccat13.ride where ride_id = $1", [rideId]);
        await connection.$pool.end();
        return ride;
    }

    async getRides() {
        const connection = pgp()("postgres://huggo:123456@localhost:5432/app");
        const rides = await connection.query("select * from cccat13.ride where status = $1", RideStatus.REQUESTED);
        await connection.$pool.end();
        return { rides };
    }
}
