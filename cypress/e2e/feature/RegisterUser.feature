Feature: Registeration of the user in Guru99 demo site


    Scenario: Create new User
    Given Go to the url "https://demo.guru99.com/insurance/v1/index.php"
    When User Click on the Register button
    Then Validate the Register Page
    When User Select the Title "Captain"
    Then Enter Firstname in the input field
    Then Enter Surname in the Surname input field
    Then Enter Phone Number in the Phone input field
    Then Select date, month and year from the Date of Birth
    Then Select Full or Provisional "Provisional"
    Then Select Licence Period
    Then Select Occupation from the dropdown
    Then Add Street Address
    Then Add City in the input field
    Then Add Country in the Country input field
    Then Enter Post code in the input field
    Then Add Email in the input field
    Then Add Password in the pwd input field
    Then Enter Enter confirm password in the confirm pwd field
    Then Click on the Create button
