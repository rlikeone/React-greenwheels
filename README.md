Background information

We are thinking of porting the car search functionality as a standalone component that can be used by third parties (as well as our own applications). The API to fetch the locations is public and does not always require authentication.

We don’t expect you to deliver a finished application, this would be unfair. This assessment will be used to determine your coding style, see approaches you use and verify your decisions. The max time we expect you to spend on this assessment is 4 hours.

Prerequisites

React application with SSR
Webpack config, not using RCA
State should be handled with redux store
Cars should be displayed on the map using google maps API. The actual implementation of the google maps falls outside the scope of this assessment, but the data should be prepared to be consumed by google maps API.
Prepare the API request for retrieving a car based on user input (i.e. searching for a location). The actual implementation falls outside the scope of this assessment.
The styling itself is not important but the setup for styling of a standalone component is.
Unit tests and documentation should be part of the component (One is enough as an example).
Error handling should be thought of.

Task description

Fetch all locations from our public API
https://rest.greenwheels.com/api/cities
https://rest.greenwheels.com/api/cities/%7BAAAAAAAAAAAAAAACAAAAAA==%7D/locations
https://rest.greenwheels.com/api/cities/%7BAAAAAAAAAAAAAAACAAAAAA==%7D/locations/cars

Make these locations visible in a list per city and make sure the user can distinct:
· Location Address
· Car model
· License plate
· Car State
