Feature: Search with a route, 1 child and a vehicle

  Scenario: Search with a route, 1 child and a vehicle
    Given I navigate to the Direct Ferries homepage
    When I select the Dover route
    And I select 1 child
    And I select a vehicle
    And I click the Search button