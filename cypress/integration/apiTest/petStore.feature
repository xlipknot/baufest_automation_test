Feature: Pet Store Web Service

    Test the web services for pet store by adding, consulting elements

    Scenario: Add a pet
        Given I add a pet successfully
        Then I fail adding a pet

    Scenario: Get a pet
        Given I get a pet successfully
        Then I fail getting a pet

    Scenario: Update a pet
        Given I update a pet successfully
        Then I fail updating a pet