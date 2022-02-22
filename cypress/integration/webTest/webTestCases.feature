Feature: Web test cases

    THis feature tests the user creation, login/logout, add product and verify it in the cart

    Scenario: Create user
        Given I go to demoblaze site
        When I click on "SignUp" menu
        Then I enter username and password for "SignUp"
        And I click on "SignUp" button
        And I verify user is created

    Scenario: Login and logout user
        Given I go to demoblaze site
        When I click on "LogIn" menu
        Then I enter username and password for "LogIn"
        And I click on "LogIn" button
        And I verify the user is "LoggedIn"
        Then I click on "LogOut" menu
        And I verify the user is "LoggedOut"

    Scenario: Add a laptop to the cart
        Given I go to demoblaze site
        When I filter by "Laptops"
        Then I pick the first element
        Then I add it to the cart
        When I click on "Cart" menu
        And I verify the product was added
