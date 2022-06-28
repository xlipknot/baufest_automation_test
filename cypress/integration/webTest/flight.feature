Feature: Flight test cases

    THis feature tests flow for selecting flights

    Scenario: Sort flights by descending price
    Given I go to flights page
    When Click on 'Flights'
    Then Enter 'From', 'To', 'Departing' date and 'Returning' date
    When Click Search button
    Then Sort by price 'descending'