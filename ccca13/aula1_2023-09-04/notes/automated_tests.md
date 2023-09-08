# Automated tests
> are the only way to guarantee the code works and will keep on working

## NOTE: we can still have manual tests
- Manual tests are important, mainly for user acceptance
- but they have to be additional
- they do not guarantee code regression

## Why many people get frustated when starting with tests
- writing tests require **discipline** 

---

# Automated test
- Given a set of entries, the output must be the one we expect

1. Given/Arrange: define the necessary information to execute the behavior to be tested
2. When/Act: execute the behavior
3. Then/Assert: verify what happened after the execution, compare return with expected return

---

# Automated test types
- E2E (end to end) -> from a page to the db
- Integration -> service, use case, api
    - considers wider an context
- Unit -> per unit 
    - test smallers part of the code

# Unit tests
> https://martinfowler.com/bliki/UnitTest.html
- blazingly fast
    - because here there's no interaction with external resources, such as database, api, file system

# Integration tests
> https://martinfowler.com/bliki/IntegrationTest.html
- test components from multiple layers
    - can envolve external resources
(mock, stub)

# E2E tests
- replicate the final user environment
