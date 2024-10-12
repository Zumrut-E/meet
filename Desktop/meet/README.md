User Stories:

Feature 2: Show/Hide Event Details
Scenario 1:
As a user, I should be able to see events collapsed by default,
so that I can focus on the main event listings without distraction.

Scenario 2:
As a user, I should be able to expand an event,
so that I can view detailed information about the event.

Scenario 3:
As a user, I should be able to collapse an expanded event,
so that I can hide the details and return to the event list.

Feature 3: Specify Number of Events
Scenario 1:
As a user, I should be able to see 32 events by default if I haven’t specified a number,
so that I can browse a reasonable number of events without manually setting it.

Scenario 2:
As a user, I should be able to change the number of events displayed,
so that I can view more or fewer events based on my preference.

Feature 4: Use the App When Offline
Scenario 1:
As a user, I should be able to see cached data when there’s no internet connection,
so that I can still browse previously loaded events offline.

Scenario 2:
As a user, I should be able to see an error message when I change search settings (city, number of events) while offline,
so that I understand why new data cannot be displayed.

Feature 5: Add an App Shortcut to the Home Screen
Scenario 1:
As a user, I should be able to install the meet app as a shortcut on my device’s home screen,
so that I can quickly access the app without going through the browser.

Feature 6: Display Charts Visualizing Event Details
Scenario 1:
As a user, I should be able to see a chart displaying the number of upcoming events in each city,
so that I can easily visualize and compare event availability across different cities.

Gherkin's (“Given-When-Then”) syntax (Testing)

Feature 1: Filter Events By City

Scenario 1: When the user hasn’t searched for a city, show upcoming events from all cities

Given the user is on the event page without searching for a specific city,
When the page loads,
Then the user should see a list of upcoming events from all cities.

Scenario 2: User should see a list of suggestions when they search for a city

Given the user is searching for a city in the search bar,
When the user types in the search field,
Then a list of city suggestions matching the input should be displayed.

Scenario 3: User can select a city from the suggested list

Given the user is viewing city suggestions in the search bar,
When the user clicks on a city from the suggested list,
Then the event list should update to show upcoming events from the selected city.

Feature 2: Show/Hide Event Details

Scenario 1: An event element is collapsed by default

Given the user is viewing the event list,
When the page loads,
Then all event elements should be collapsed by default.

Scenario 2: User can expand an event to see details

Given the user is viewing the event list,
When the user clicks on an event,
Then the event should expand to display the event details.

Scenario 3: User can collapse an event to hide details

Given the user has expanded an event to see details,
When the user clicks on the event again,
Then the event should collapse, hiding the event details.

Feature 3: Specify Number of Events

Scenario 1: When the user hasn’t specified a number, 32 events are shown by default

Given the user has not specified the number of events to display,
When the page loads,
Then 32 events should be displayed by default.

Scenario 2: User can change the number of events displayed

Given the user is viewing the event list,
When the user specifies a different number of events to display,
Then the list should update to show the specified number of events.

Feature 4: Use the App When Offline

Scenario 1: Show cached data when there’s no internet connection

Given the user has previously accessed event data and is now offline,
When the user opens the app,
Then the cached event data should be displayed.

Scenario 2: Show error when user changes search settings (city, number of events)

Given the user is offline,
When the user attempts to change search settings (e.g., city or number of events),
Then an error message should appear explaining that new data cannot be fetched due to lack of internet.

Feature 5: Add an App Shortcut to the Home Screen

Scenario 1: User can install the meet app as a shortcut on their device home screen

Given the user is using the app on a supported device,
When the user chooses to add the app to the home screen from the browser,
Then the app should be installed as a shortcut on the device’s home screen.

Feature 6: Display Charts Visualizing Event Details

Scenario 1: Show a chart with the number of upcoming events in each city

Given the user is viewing event data for multiple cities,
When the user navigates to the event chart section,
Then a chart should be displayed showing the number of upcoming events in each city.
