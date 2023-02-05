Feature: Edit Profile and Logout functionality
    Scenario: Profile and Edit Profile
    Given Go to the url "https://demo.guru99.com/insurance/v1/index.php"
    When User enter username and password to login
    Then Click on the login button to logging in
    When User click on Profile menu
    When User click on Edit Profile menu
    Then User Select the Title "Captain"
    Then Enter Firstname in the input field
    Then Enter Surname in the Surname input field
    Then Enter Phone Number in the Phone input field
    Then Select date, month and year from the Date of Birth
    Then Select Licence Period
    Then Select Occupation from the dropdown
    Then Add Street Address
    Then Add City in the input field
    Then Add Country in the Country input field
    Then Enter Post code in the input field
    Then Click on Update User
    Then Click on logout button