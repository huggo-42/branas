import AccountService from "../src/AccountService";
import RideService from "../src/RideService";

enum UserType {
    DRIVER,
    PASSANGER
}

const inputRideDefaultValues = {
    "fromLat": "1",
    "fromLong": "10",
    "toLat": "42",
    "toLong": "420"
}

var defaultAccountInputValues = {
    name: "John Doe",
    cpf: "95818705552"
}

async function createNewAccount(userType: UserType) {
    const inputAccount = userType === UserType.PASSANGER
        ? {
            ...defaultAccountInputValues,
            email: `john.doe${Math.random()}@gmail.com`,
            isPassenger: true
        }
        : {
            ...defaultAccountInputValues,
            email: `john.doe${Math.random()}@gmail.com`,
            isDriver: true,
            carPlate: "AAA1234"
        };
    const accountService = new AccountService();
    return await accountService.signup(inputAccount);
};

async function createNewRideAndAccount() {
    const account = await createNewAccount(UserType.PASSANGER);
    const rideService = new RideService();
    const inputRide = {
        "accountId": account.accountId,
        ...inputRideDefaultValues,
    };
    const ride = await rideService.newRide(inputRide);
    return { ride, account };
};

test("Should request a ride", async function() {
    const newRideAndAccount = await createNewRideAndAccount();
    const rideService = new RideService();
    const ride = await rideService.getRide(newRideAndAccount.ride.rideId);
    expect(ride.ride_id).toBeDefined();
    expect(ride.passenger_id).toBe(newRideAndAccount.account.accountId);
    expect(ride.from_lat).toBe(inputRideDefaultValues.fromLat);
    expect(ride.from_long).toBe(inputRideDefaultValues.fromLong);
    expect(ride.to_lat).toBe(inputRideDefaultValues.toLat);
    expect(ride.to_long).toBe(inputRideDefaultValues.toLong);
});

test("Can not request a ride if account is not a passenger", async function() {
    const input = await createNewAccount(UserType.DRIVER);
    const rideService = new RideService();
    await expect(() => rideService.newRide(input)).rejects.toThrow(new Error("Account is not a passenger"));
});

test("Can not create a ride if account already has a ride in progress", async function() {
    const newRideAndAccount = await createNewRideAndAccount();
    const input = {
        "accountId": newRideAndAccount.account.accountId,
        ...inputRideDefaultValues
    };
    const rideService = new RideService();
    await expect(() => rideService.newRide(input)).rejects.toThrow(new Error("Account already has a ride in progress"));
});

test("Should accept a ride", async function() {
    const newRideAndAccount = await createNewRideAndAccount();
    const newAccount = await createNewAccount(UserType.DRIVER);
    const input = {
        "accountId": newAccount.accountId,
        "rideId": newRideAndAccount.ride.rideId
    };
    const rideService = new RideService();
    expect(() => rideService.acceptRide(input)).toBeTruthy();
});

test("Should request all rides", async function() {
    const rideService = new RideService();
    const rides = await rideService.getRides();
    expect(rides.rides).toBeDefined();
});

test("Can not accept a ride if account is not driver", async function() {
    const newRideAndAccount = await createNewRideAndAccount();
    const newAccount = await createNewAccount(UserType.PASSANGER);
    const input = {
        "accountId": newAccount.accountId,
        "rideId": newRideAndAccount.ride.rideId
    };
    const rideService = new RideService();
    await expect(() => rideService.acceptRide(input)).rejects.toThrow(new Error("Account is not a driver"));
});

test("Can not accept ride if driver already has ride in progress", async function() {
    const newRideAndAccount = await createNewRideAndAccount();
    const newAccount = await createNewAccount(UserType.DRIVER);
    const input = {
        "accountId": newAccount.accountId,
        "rideId": newRideAndAccount.ride.rideId
    };
    const rideService = new RideService();
    await rideService.acceptRide(input);
    const newRideAndAccount2 = await createNewRideAndAccount();
    const input2 = {
        "accountId": newAccount.accountId,
        "rideId": newRideAndAccount2.ride.rideId
    };
    await expect(() => rideService.acceptRide(input2)).rejects.toThrow(new Error("Driver already has a ride in progress"));
});

test("Can not accept ride if ride status is not requested", async function() {
    const newRideAndAccount = await createNewRideAndAccount();
    const newAccount = await createNewAccount(UserType.DRIVER);
    const input = {
        "accountId": newAccount.accountId,
        "rideId": newRideAndAccount.ride.rideId
    };
    const rideService = new RideService();
    await rideService.acceptRide(input);
    await expect(() => rideService.acceptRide(input)).rejects.toThrow(new Error("Ride staus is not requested"));
});
