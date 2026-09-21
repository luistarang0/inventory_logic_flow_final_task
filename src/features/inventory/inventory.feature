Feature: Inventory

@UC-1
Scenario: Sorting prices from low to high 
  Given I open "login" page
  When I login as standard user
  And I select "Price (low to high)" from the Sort Price dropdown from the header
  Then Prices should be sorted from low to high

@UC-2
Scenario Outline: Adding and removing items updates cart badge
  When I add "<item1>" to the cart
  And I add "<item2>" to the cart
  Then The Cart Badge should "be equal to" "2"
  When I remove "<item1>" from the cart
  Then The Cart Badge should "be equal to" "1"

Examples:
      | item1                  | item2                    |
      | Sauce Labs Backpack     | Sauce Labs Bike Light      |