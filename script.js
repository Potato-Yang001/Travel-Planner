/*
In a module file:
Create an object storing country info with emoji and fun fact
Write a function that accepts a country string and returns the info object
Export this function

In script.js :
Import the function from the module
Write a showDestination() function that:
Reads the selected country from the dropdown
Gets the travel data
Updates the result container with emoji + fact
Register the function to the window so it works on click
*/

import { getcountryInfo } from './country.js';

function showDestination() {
  // 1. Get the selected country from the dropdown           value = can be "japan" / "italy" / "brazil"
  const country = document.getElementById('countrySelect').value;
  // 2. Get the travel data for that country
  const data = getcountryInfo(country); // getcountryInfo(country) = call function from country.js and passing to data
  // 3. Update the result container
  const infoResult = document.getElementById('travelInfo');

  if (data) {
    infoResult.innerHTML = `${data.emoji} ${data.fact}`;
  }
}

window.showDestination = showDestination;
