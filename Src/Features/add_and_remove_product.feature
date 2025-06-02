Feature: Manage cart contents before checkout

  Scenario: Add two products and remove one before checkout
    Given I am on the Sauce Demo login page
    When I login with "standard_user" and "secret_sauce"
    And I add the backpack and bike light to the cart
    And I go to the cart
    And I remove the bike light from the cart
    Then the cart should show only 1 product remaining
