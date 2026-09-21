Feature: Inventory

@UC-1
Scenario: Sorting prices from low to high 
  Given I open "login" page
  When I login with user "standard_user" and password "secret_sauce"
  And I select "Price (low to high)" from the Sort Price dropdown from the header
  Then Prices should be sorted from low to high

@UC-2
Scenario Outline: Cart badge should update number of items
  When I click the "Add Item" button on the "First Item" "Item Card" 
  And I click the "Add Item" button on the "Second Item" "Item Card"
  Then The "Cart Badge" should "be equal to" "2"
  When I click the "Remove" button on the "Second Item" "Item Card"
  Then The "Cart Badge" should "be equal to" "1"
