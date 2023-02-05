Feature: Request a Quotation with valid credentials

    Scenario: Request Quotation
    Given Go to the url "https://demo.guru99.com/insurance/v1/index.php"
    When User enter username and password to login
    Then Click on the login button to logging in
    Then Click on new quote menu
    Then Select Breakdowncover to save Quotation "No cover"
    Then Select window screen repair option as no
    Then Enter incidents to save Quotation "Mirror Damage"
    Then Enter Registeration details "AP77VV3322"
    Then Enter Annual Milage details "1400"
    Then Enter Estimated Value of incident "5000"
    Then Park vehicle in the area "Private property"
    Then select start policy
	Then Click on Save quoation button
    Then Get incident Number