Feature: Inventory

Scenario: Prices should be sorted 
    When I select "Price (low to high)" from the Sort Price dropdown from the header
    Then Prices should be sorted

Scenario: Cart badge should update number of items
    When I click the "Add Item" button on the "First Item" "Item Card" 
    And I click the "Add Item" button on the "Second Item" "Item Card"
    Then The "Cart Badge" should "be equal to" "2"
    When I click the "Remove" button on the "Second Item" "Item Card"
    Then The "Cart Badge" should "be equal to" "1"
