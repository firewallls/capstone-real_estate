document.addEventListener('DOMContentLoaded', function() {
  initializeSearchTabs();
  initializeSearchFilters();
});

function initializeSearchTabs() {
  const optionTabs = document.querySelectorAll('.option-tab');
  const searchInput = document.querySelector('.search-bar input');

  optionTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      optionTabs.forEach(t => {
        t.classList.remove('active');
      });

      this.classList.add('active');

      const tabText = this.textContent;
      updateSearchPlaceholder(tabText, searchInput);

      updateSearchFilters(tabText);
    });
  });
}

// Update search placeholder based on tab
function updateSearchPlaceholder(tabText, searchInput) {
  if (!searchInput) return;

  const placeholders = {
    'Buy': 'Search properties for sale in your desired location',
    'Rent': 'Search properties for rent in your desired location',
    'PG': 'Search PG accommodations with amenities',
    'Commercial': 'Search commercial properties for office or retail'
  };

  searchInput.placeholder = placeholders[tabText] || 'Search for locality, landmark, project or builder';
}

function updateSearchFilters(tabText) {
  const propertyTypeSelect = document.getElementById('property-type');
  const budgetSelect = document.getElementById('budget');

  propertyTypeSelect.innerHTML = '';
  budgetSelect.innerHTML = '';

  const options = getFilterOptions(tabText);

  options.propertyTypes.forEach(type => {
    const option = document.createElement('option');
    option.value = type.value;
    option.textContent = type.label;
    propertyTypeSelect.appendChild(option);
  });

  options.budgets.forEach(budget => {
    const option = document.createElement('option');
    option.value = budget.value;
    option.textContent = budget.label;
    budgetSelect.appendChild(option);
  });
}

function getFilterOptions(tab) {
  const options = {
    propertyTypes: [],
    budgets: []
  };

  switch(tab) {
    case 'Buy':
      options.propertyTypes = [
        { value: 'apartment', label: 'Apartment' },
        { value: 'house', label: 'Independent House' },
        { value: 'villa', label: 'Villa' },
        { value: 'plot', label: 'Plot' },
        { value: 'penthouse', label: 'Penthouse' }
      ];
      options.budgets = [
        { value: 'under-50', label: 'Under ₹50 Lakhs' },
        { value: '50-100', label: '₹50 Lakhs - ₹1 Crore' },
        { value: '100-200', label: '₹1 Crore - ₹2 Crores' },
        { value: '200-500', label: '₹2 Crores - ₹5 Crores' },
        { value: 'above-500', label: 'Above ₹5 Crores' }
      ];
      break;

    case 'Rent':
      options.propertyTypes = [
        { value: 'apartment', label: 'Apartment' },
        { value: 'house', label: 'Independent House' },
        { value: 'villa', label: 'Villa' },
        { value: 'studio', label: 'Studio Apartment' },
        { value: 'flat', label: '1 RK/1 BHK' }
      ];
      options.budgets = [
        { value: 'under-10', label: 'Under ₹10,000' },
        { value: '10-20', label: '₹10,000 - ₹20,000' },
        { value: '20-40', label: '₹20,000 - ₹40,000' },
        { value: '40-80', label: '₹40,000 - ₹80,000' },
        { value: 'above-80', label: 'Above ₹80,000' }
      ];
      break;

    case 'PG':
      options.propertyTypes = [
        { value: 'boys', label: 'Boys PG' },
        { value: 'girls', label: 'Girls PG' },
        { value: 'co-living', label: 'Co-Living' },
        { value: 'single-room', label: 'Single Room' },
        { value: 'shared-room', label: 'Shared Room' }
      ];
      options.budgets = [
        { value: 'under-5', label: 'Under ₹5,000' },
        { value: '5-10', label: '₹5,000 - ₹10,000' },
        { value: '10-15', label: '₹10,000 - ₹15,000' },
        { value: '15-20', label: '₹15,000 - ₹20,000' },
        { value: 'above-20', label: 'Above ₹20,000' }
      ];
      break;

    case 'Commercial':
      options.propertyTypes = [
        { value: 'office', label: 'Office Space' },
        { value: 'retail', label: 'Retail Shop' },
        { value: 'warehouse', label: 'Warehouse' },
        { value: 'industrial', label: 'Industrial Space' },
        { value: 'co-working', label: 'Co-Working Space' }
      ];
      options.budgets = [
        { value: 'under-50k', label: 'Under ₹50,000/month' },
        { value: '50k-1l', label: '₹50,000 - ₹1 Lakh/month' },
        { value: '1l-2l', label: '₹1 Lakh - ₹2 Lakhs/month' },
        { value: '2l-5l', label: '₹2 Lakhs - ₹5 Lakhs/month' },
        { value: 'above-5l', label: 'Above ₹5 Lakhs/month' }
      ];
      break;

    default:
      options.propertyTypes = [
        { value: 'apartment', label: 'Apartment' },
        { value: 'house', label: 'Independent House' },
        { value: 'villa', label: 'Villa' },
        { value: 'plot', label: 'Plot' }
      ];
      options.budgets = [
        { value: 'under-50', label: 'Under ₹50 Lakhs' },
        { value: '50-100', label: '₹50 Lakhs - ₹1 Crore' },
        { value: '100-200', label: '₹1 Crore - ₹2 Crores' },
        { value: 'above-200', label: 'Above ₹2 Crores' }
      ];
  }

  return options;
}

function initializeSearchFilters() {
  const citySelect = document.getElementById('city');
  const localitySelect = document.getElementById('locality');

  if (citySelect && localitySelect) {
    citySelect.addEventListener('change', function() {
      updateLocalities(this.value, localitySelect);
    });
  }

  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }

  const filterInputs = document.querySelectorAll('.search-filters select, .search-filters input');
  filterInputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  });
}

function updateLocalities(city, localitySelect) {
  while (localitySelect.options.length > 1) {
    localitySelect.remove(1);
  }

  const localities = {
    'Mumbai': ['All Localities', 'Andheri', 'Bandra', 'Powai', 'Thane', 'Borivali', 'Chembur', 'Navi Mumbai'],
    'Delhi': ['All Localities', 'Dwarka', 'Rohini', 'Pitampura', 'Janakpuri', 'Vasant Kunj', 'Saket', 'Laxmi Nagar'],
    'Bangalore': ['All Localities', 'Koramangala', 'Indiranagar', 'Whitefield', 'Marathahalli', 'HSR Layout', 'Jayanagar', 'BTM Layout'],
    'Hyderabad': ['All Localities', 'Gachibowli', 'Madhapur', 'Kondapur', 'Hitech City', 'Banjara Hills', 'Jubilee Hills'],
    'Chennai': ['All Localities', 'Anna Nagar', 'T Nagar', 'Velachery', 'Adyar', 'OMR', 'Porur', 'Ambattur']
  };

  if (city !== 'Select City' && localities[city]) {
    localities[city].forEach((locality, index) => {
      const option = document.createElement('option');
      option.value = locality.toLowerCase().replace(/\s+/g, '-');
      option.textContent = locality;
      if (index === 0) {
        option.selected = true;
      }
      localitySelect.appendChild(option);
    });
  }
}

function performSearch() {
  const city = document.getElementById('city').value;
  const locality = document.getElementById('locality').value;
  const propertyType = document.getElementById('property-type').value;
  const budget = document.getElementById('budget').value;
  const activeTab = document.querySelector('.option-tab.active').textContent;

  if (city === 'Select City') {
    alert('Please select a city to search');
    document.getElementById('city').focus();
    return;
  }

  const searchQuery = {
    type: activeTab,
    city: city,
    locality: locality,
    propertyType: propertyType,
    budget: budget
  };

  displaySearchResults(searchQuery);
}

function displaySearchResults(searchQuery) {
  const propertyListings = document.querySelector('.property-listings');
  const sectionTitle = document.querySelector('.section-title');

  if (!propertyListings || !sectionTitle) return;

  propertyListings.innerHTML = '<div class="loading">Searching properties...</div>';

  setTimeout(() => {
    const filteredProperties = filterProperties(searchQuery);

    sectionTitle.textContent = `Search Results (${filteredProperties.length} properties found)`;

    if (filteredProperties.length > 0) {
      propertyListings.innerHTML = '';
      filteredProperties.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertyListings.appendChild(propertyCard);
      });
    } else {
      propertyListings.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search fa-2x"></i>
                    <h3>No properties found</h3>
                    <p>Try adjusting your search filters</p>
                </div>
            `;
    }
  }, 500);
}

function filterProperties(searchQuery) {
  const allProperties = propertiesData;

  return allProperties.filter(property => {
    if (!matchesTransactionType(property, searchQuery.type)) {
      return false;
    }

    if (!matchesCity(property, searchQuery.city)) {
      return false;
    }

    if (!matchesLocality(property, searchQuery.locality)) {
      return false;
    }

    if (!matchesPropertyType(property, searchQuery.propertyType)) {
      return false;
    }

    if (!matchesBudget(property, searchQuery.budget, searchQuery.type)) {
      return false;
    }

    return true;
  });
}

function matchesTransactionType(property, searchType) {
  const propertyType = property.type.toLowerCase();
  const searchTypeLower = searchType.toLowerCase();

  if (searchTypeLower === 'buy') {
    return propertyType.includes('sale');
  } else if (searchTypeLower === 'rent') {
    return propertyType.includes('rent');
  } else if (searchTypeLower === 'pg') {
    return property.title.toLowerCase().includes('pg') ||
      property.type.toLowerCase().includes('pg');
  } else if (searchTypeLower === 'commercial') {
    return property.title.toLowerCase().includes('commercial') ||
      property.type.toLowerCase().includes('commercial');
  }

  return true;
}

function matchesCity(property, city) {
  if (city === 'Select City') return true;

  const propertyLocation = property.location.toLowerCase();
  const searchCity = city.toLowerCase();

  return propertyLocation.includes(searchCity);
}

function matchesLocality(property, locality) {
  if (locality === 'Select Locality' || locality === 'all-localities') return true;

  const propertyLocation = property.location.toLowerCase();
  const searchLocality = locality.replace(/-/g, ' ').toLowerCase();

  return propertyLocation.includes(searchLocality);
}

function matchesPropertyType(property, propertyType) {
  if (!propertyType || propertyType === 'apartment') return true;

  const propertyTitle = property.title.toLowerCase();
  const searchPropertyType = propertyType.toLowerCase();

  const typeKeywords = {
    'house': ['house', 'independent'],
    'villa': ['villa'],
    'plot': ['plot'],
    'penthouse': ['penthouse'],
    'studio': ['studio'],
    'flat': ['1 rk', '1 bhk'],
    'boys': ['boys pg', 'boys'],
    'girls': ['girls pg', 'girls'],
    'co-living': ['co-living'],
    'single-room': ['single room'],
    'shared-room': ['shared room'],
    'office': ['office'],
    'retail': ['retail', 'shop'],
    'warehouse': ['warehouse'],
    'industrial': ['industrial'],
    'co-working': ['co-working']
  };

  if (typeKeywords[searchPropertyType]) {
    return typeKeywords[searchPropertyType].some(keyword =>
      propertyTitle.includes(keyword)
    );
  }

  return true;
}

function matchesBudget(property, budget, searchType) {
  if (budget === 'Select Budget') return true;

  const propertyPrice = extractPriceValue(property.price, searchType);

  const budgetRange = getBudgetRange(budget, searchType);

  return propertyPrice >= budgetRange.min && propertyPrice <= budgetRange.max;
}

function extractPriceValue(priceString, type) {
  const numericString = priceString.replace(/[^0-9.,]/g, '');

  if (!numericString) return 0;

  const price = parseFloat(numericString.replace(/,/g, ''));

  if (isNaN(price)) return 0;

  if (priceString.toLowerCase().includes('cr')) {
    return price * 10000000;
  } else if (priceString.toLowerCase().includes('lakh') ||
    priceString.toLowerCase().includes('lac') ||
    priceString.toLowerCase().includes('l')) {
    return price * 100000;
  }

  if (type.toLowerCase() === 'buy' && price < 100000) {
    return price * 100000;
  }

  return price;
}

function getBudgetRange(budgetString, type) {
  let min = 0;
  let max = Infinity;

  if (budgetString.includes('Under')) {
    max = extractBudgetValue(budgetString, type);
  } else if (budgetString.includes('Above')) {
    min = extractBudgetValue(budgetString, type);
  } else if (budgetString.includes('-')) {
    const [minStr, maxStr] = budgetString.split(' - ');
    min = extractBudgetValue(minStr, type);
    max = extractBudgetValue(maxStr, type);
  } else {
    const value = extractBudgetValue(budgetString, type);
    min = value;
    max = value;
  }

  return { min, max };
}

function extractBudgetValue(budgetStr, type) {
  const numericMatch = budgetStr.match(/[\d,]+(\.\d+)?/);
  if (!numericMatch) return 0;

  let value = parseFloat(numericMatch[0].replace(/,/g, ''));

  if (isNaN(value)) return 0;

  if (budgetStr.toLowerCase().includes('cr')) {
    value = value * 10000000;
  } else if (budgetStr.toLowerCase().includes('lakh') ||
    budgetStr.toLowerCase().includes('lac') ||
    budgetStr.toLowerCase().includes('l')) {
    value = value * 100000;
  } else if (budgetStr.toLowerCase().includes('k')) {
    value = value * 1000;
  }

  if (type.toLowerCase() === 'rent' && budgetStr.includes('/month')) {
  } else if (type.toLowerCase() === 'buy' && value < 1000000) {
    value = value * 100000;
  }

  return value;
}

function createPropertyCard(property) {
  const card = document.createElement('div');
  card.className = 'property-card';
  card.dataset.id = property.id;

  card.innerHTML = `
        <div class="property-image">
            <div class="property-type">${property.type}</div>
            <img src="${property.image}" alt="${property.title}">
        </div>
        <div class="property-details">
            <div class="property-price">${property.price}</div>
            <div class="property-title">${property.title}</div>
            <div class="property-location">
                <i class="fas fa-map-marker-alt"></i> ${property.location}
            </div>
            <div class="property-features">
                <span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                <span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                <span><i class="fas fa-layer-group"></i> ${property.area}</span>
            </div>
        </div>
    `;

  card.addEventListener('click', function() {
    const details = `
            Property: ${property.title}
            Price: ${property.price}
            Location: ${property.location}
            Type: ${property.type}
            Bedrooms: ${property.bedrooms}
            Bathrooms: ${property.bathrooms}
            Area: ${property.area}
        `;

    alert(`Property Details:\n\n${details}`);
  });

  return card;
}

function addLoadingStyles() {
  if (!document.querySelector('#search-loading-styles')) {
    const style = document.createElement('style');
    style.id = 'search-loading-styles';
    style.textContent = `
            .loading {
                text-align: center;
                padding: 40px;
                font-size: 18px;
                color: #666;
                grid-column: 1 / -1;
            }

            .no-results {
                text-align: center;
                padding: 60px 20px;
                grid-column: 1 / -1;
                color: #666;
            }

            .no-results i {
                color: #f26522;
                margin-bottom: 20px;
            }

            .no-results h3 {
                margin-bottom: 10px;
                color: #333;
            }
        `;
    document.head.appendChild(style);
  }
}

document.addEventListener('DOMContentLoaded', addLoadingStyles);
