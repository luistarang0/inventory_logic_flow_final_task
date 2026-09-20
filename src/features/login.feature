Feature: Login

Scenario: As a user I should be able to open "Inventory" page
  Given I open ”Login” page
  When I click "Sign Up" button
  Then I should be on "Sign Up" page
  And I should see "Sign Up Form"

Examples:
  | Username | Password |
  | standard_user   | secret_sauce |