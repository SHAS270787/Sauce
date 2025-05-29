Feature: Complete purchase on Sauce Demo

  Scenario: Add a product and finish checkout
    Given I am on the Sauce Demo login page
    When I login with "standard_user" and "secret_sauce"
    And I add the backpack to the cart
    And I go to the cart and checkout
    And I enter my name "Shas", "Kumar", and postcode "TN2 5FN"
    And I place the order
    Then I should be returned to products page
