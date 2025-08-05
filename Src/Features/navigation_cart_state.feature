# Feature: Navigation and Cart State Management

# Scenario: Validate navigation and cart state retention
#   Given I am on the Sauce Demo login page
#   When I login with "standard_user" and "secret_sauce"
#   And I add the backpack to the cart
#   Then the cart badge should show 1 item(s)
#   Then the local storage should contain the backpack item
#   And I go to the cart
#   And I navigate back to the product listing page
#   And I go to the cart again
#   Then I should see the backpack in the cart
