document.addEventListener('DOMContentLoaded', function() {
  initializeProperties();
  initializeDynamicContent();
  initializeNavigation();
  initializeEventListeners();
});

function initializeProperties() {
  const propertyListings = document.querySelector('.property-listings');
  if (!propertyListings) return;

  propertyListings.innerHTML = '';

  propertiesData.forEach(property => {
    const propertyCard = createPropertyCard(property);
    propertyListings.appendChild(propertyCard);
  });
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
    showPropertyDetails(property);
  });

  return card;
}

function showPropertyDetails(property) {
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
}

function initializeDynamicContent() {
  const heroParagraph = document.querySelector('.hero p');
  if (heroParagraph) {
    const propertyCount = Math.floor(Math.random() * 100000) + 50000;
    heroParagraph.innerHTML =
      `India's No. 1 Property Site. Search from <strong>${propertyCount.toLocaleString()}+</strong> properties for sale and rent.`;
  }

  const copyrightParagraph = document.querySelector('.copyright p');
  if (copyrightParagraph) {
    const currentYear = new Date().getFullYear();
    copyrightParagraph.innerHTML = copyrightParagraph.innerHTML.replace('2023', currentYear);
  }
}

function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      navLinks.forEach(a => {
        a.classList.remove('active');
      });

      this.classList.add('active');

      const pageTitle = this.textContent;
      document.title = `Magicbricks - ${pageTitle}`;
    });
  });
}

function initializeEventListeners() {
  const postPropertyBtn = document.querySelector('.post-property');
  if (postPropertyBtn) {
    postPropertyBtn.addEventListener('click', function() {
      alert('Redirecting to post property page...');
    });
  }

  const mainSearchBtn = document.querySelector('.search-bar button');
  const mainSearchInput = document.querySelector('.search-bar input');

  if (mainSearchBtn && mainSearchInput) {
    mainSearchBtn.addEventListener('click', handleMainSearch);
    mainSearchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleMainSearch();
      }
    });
  }

  const socialLinks = document.querySelectorAll('.social-links a');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });

    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  const propertyCards = document.querySelectorAll('.property-card');
  propertyCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });
}

function handleMainSearch() {
  const searchInput = document.querySelector('.search-bar input');
  const searchQuery = searchInput.value.trim();

  if (searchQuery !== '') {
    alert(`Searching for: "${searchQuery}"`);
  } else {
    searchInput.focus();
    searchInput.placeholder = 'Please enter a search term...';
  }
}
