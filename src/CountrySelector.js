import React, { useState, useEffect } from 'react';
import './styles/CountrySelector.css';

function CountrySelector({ onSelect }) {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch list of countries
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const countryNames = data.map(country => country.name.common);
      countryNames.sort(); // Sort countries alphabetically
      setCountries(countryNames);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const handleSelect = (e) => {
    onSelect(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="country-selector">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select onChange={handleSelect}>
        {filteredCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelector;
