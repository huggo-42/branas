import { Request, Response } from 'express';
import AccountService from './AccountService';
import express from 'express';
import RideService from './RideService';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.post('/signup', async (request: Request, response: Response) => {
    const accountService = new AccountService();
    var output = {};
    try {
        output = await accountService.signup(request.body);
    } catch (error) {
        return response.send(`${error}`);
    }
    return response.send(output);
});

app.get('/get-user', async (request: Request, response: Response) => {
    const accountService = new AccountService();
    try {
        const output = await accountService.getAccount(request.body.accountId);
        return response.send(output);
    } catch (error) {
        return response.send(`${error}`);
    }
});


app.post('/request-ride', async (request: Request, response: Response) => {
    const rideService = new RideService();
    try {
        const output = await rideService.newRide(request.body);
        return response.send(output);
    } catch (error) {
        return response.send(`${error}`);
    }
});

app.post('/accept-ride', async (request: Request, response: Response) => {
    const rideService = new RideService();
    try {
        const output = await rideService.acceptRide(request.body);
        return response.send(output);
    } catch (error) {
        return response.send(`${error}`);
    }
});

app.get('/get-ride', async (request: Request, response: Response) => {
    const rideService = new RideService();
    try {
        const output = await rideService.getRide(request.body.rideId);
        return response.send(output);
    } catch (error) {
        return response.send(`${error}`);
    }
});
