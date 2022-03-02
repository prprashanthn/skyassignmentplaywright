Feature: Sky search Bar and Editorial screen

  # This feature will allow user to search and show the results that are determined by editorial, as well 
#as generic searches

Scenario:
Given User is on Home Page
When  User search "sky" in the search bar
Then  User should be displayed with the editorial section