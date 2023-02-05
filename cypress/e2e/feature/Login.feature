Feature: Log into the Guru99 demo site with invalid credentials
    Scenario: Login with invalid credentials
        Given Go to the url "https://demo.guru99.com/insurance/v1/index.php"
        When User enter invalid username and password to login
        Then Click on the login button with invalid credentials
        Then Validate the user not logged in
    
    Scenario: Login with valid credentials
        Given Go to the url "https://demo.guru99.com/insurance/v1/index.php"
        When User enter username and password to login
        Then Click on the login button to logging in
        Then Validate the Login page to confirm the logging