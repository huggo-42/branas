import AccountService from "../src/AccountService";

// test("Should create a passenger", async function() {
//     // given
//     const input = {
//         name: "John Doe",
//         email: `john.doe${Math.random()}@gmail.com`,
//         cpf: "80383795001",
//         isPassenger: true
//
//     };
//     // when
//     const accountService = new AccountService();
//     // normaly in integration tests we use input and output
//     const output = await accountService.signup(input);
//     // then
//     expect(output.accountId).toBeDefined();
// });
//
// test("Should get a passenger", async function() {
//     // given
//     const input = {
//         name: "John Doe",
//         email: `john.doe${Math.random()}@gmail.com`,
//         cpf: "80383795001",
//         isPassenger: true
//
//     };
//     // when
//     const accountService = new AccountService();
//     // normaly in integration tests we use input and output
//     const output = await accountService.signup(input);
//     // then
//     const account = await accountService.getAccount(output.accountId);
//
//     // this is beautiful because it's testing DB with INPUT
//     expect(account.account_id).toBeDefined();
//     expect(account.name).toBe(input.name);
//     expect(account.email).toBe(input.email);
//     expect(account.cpf).toBe(input.cpf);
// });
//
// test("Validate CPF", async function() {
//     // given
//     const input = {
//         name: "John Doe",
//         email: `john.doe${Math.random()}@gmail.com`,
//         // change the cpf last 2 digits to 00
//         cpf: "80383795000",
//         isPassenger: true
//
//     };
//     // when
//     const accountService = new AccountService();
//     // then
//     await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid CPF"));
// });
//
// test("Validate NAME", async function() {
//     // given
//     const input = {
//         name: "John",
//         email: `john.doe${Math.random()}@gmail.com`,
//         cpf: "80383795001",
//         isPassenger: true
//
//     };
//     // when
//     const accountService = new AccountService();
//     // then
//     await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid NAME"));
// });
//
// test("Validate email", async function() {
//     // given
//     const input = {
//         name: "John Doe",
//         email: `john.doe${Math.random()}@`,
//         cpf: "80383795001",
//         isPassenger: true
//
//     };
//     // when
//     const accountService = new AccountService();
//     // then
//     await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid EMAIL"));
// });
//
// test("Should create a driver", async function() {
//     // given
//     const input = {
//         name: "John Doe",
//         email: `john.doe${Math.random()}@gmail.com`,
//         cpf: "80383795001",
//         carPlate: "AAA9999",
//         isDriver: true
//
//     };
//     // when
//     const accountService = new AccountService();
//     const output = await accountService.signup(input);
//     // then
//     expect(output.accountId).toBeDefined();
// });
//
// test("Should not create driver using a invalid car plate", async function() {
//     // given
//     const input = {
//         name: "John Doe",
//         email: `john.doe${Math.random()}@gmail.com`,
//         cpf: "80383795001",
//         // invalid plate (remove last digit)
//         carPlate: "AAA999",
//         isDriver: true
//
//     };
//     // when
//     const accountService = new AccountService();
//     // then
//     await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid plate"));
// });
//
//
//









test("Deve criar um passageiro", async function() {
    const input = {
        name: "John Doe",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "95818705552",
        isPassenger: true
    }
    const accountService = new AccountService();
    const output = await accountService.signup(input);
    const account = await accountService.getAccount(output.accountId);
    console.log(account);
    expect(account.account_id).toBeDefined();
    expect(account.name).toBe(input.name);
    expect(account.email).toBe(input.email);
    expect(account.cpf).toBe(input.cpf);
});

test("Não deve criar um passageiro com cpf inválido", async function() {
    const input = {
        name: "John Doe",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "95818705500",
        isPassenger: true
    }
    const accountService = new AccountService();
    await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid cpf"));
});

test("Não deve criar um passageiro com name inválido", async function() {
    const input = {
        name: "John",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "95818705552",
        isPassenger: true
    }
    const accountService = new AccountService();
    await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid name"));
});

test("Não deve criar um passageiro com email inválido", async function() {
    const input = {
        name: "John Doe",
        email: `john.doe${Math.random()}@`,
        cpf: "95818705552",
        isPassenger: true
    }
    const accountService = new AccountService();
    await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid email"));
});

test("Não deve criar um passageiro com conta existente", async function() {
    const input = {
        name: "John Doe",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "95818705552",
        isPassenger: true
    }
    const accountService = new AccountService();
    await accountService.signup(input)
    await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Account already exists"));
});

test("Deve criar um motorista", async function() {
    const input = {
        name: "John Doe",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "95818705552",
        carPlate: "AAA9999",
        isDriver: true
    }
    const accountService = new AccountService();
    const output = await accountService.signup(input);
    expect(output.accountId).toBeDefined();
});

test("Não deve criar um motorista com place do carro inválida", async function() {
    const input = {
        name: "John Doe",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "95818705552",
        carPlate: "AAA999",
        isDriver: true
    }
    const accountService = new AccountService();
    await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid plate"));
});
