Feature: By using incident number retrive quotation number
    Scenario: Retrive Quotation
    Given Go to the url "https://demo.guru99.com/insurance/v1/index.php"
    When User enter username and password to login
    Then Click on the login button to logging in
    Then Click on retrieve quote menu
    Then Validate the Quotation