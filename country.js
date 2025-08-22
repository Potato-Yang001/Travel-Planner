const countryInfo = {
  Japan: {
    emoji: '😁',
    fact: 'Tokyo DisneySea is a unique Disney theme park located in Japan',
  },

  Italy: {
    emoji: '😲',
    fact: 'Italy is the country with the most UNESCO World Heritage sites',
  },

  Brazil: {
    emoji: '🍵',
    fact: 'Brazil is the largest coffee producer in the world',
  },
};
// If a country name is given, return that country's data
export function getcountryInfo(country) {
  return countryInfo[country];
}

/* This function returns the entire object
export function getcountryInfo() {
  return countryInfo[];
} */
