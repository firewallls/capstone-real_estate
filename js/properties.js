const propertiesData = [
  {
    id: 1,
    type: "For Sale",
    price: "₹ 1.2 Cr",
    title: "3 BHK Apartment in Hiranandani",
    location: "Powai, Mumbai",
    bedrooms: 3,
    bathrooms: 3,
    area: "1650 sq.ft.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    type: "For Rent",
    price: "₹ 45,000 / month",
    title: "2 BHK Fully Furnished Apartment",
    location: "Koramangala, Bangalore",
    bedrooms: 2,
    bathrooms: 2,
    area: "1100 sq.ft.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    type: "For Sale",
    price: "₹ 85 Lakhs",
    title: "2 BHK Independent House",
    location: "Gachibowli, Hyderabad",
    bedrooms: 2,
    bathrooms: 2,
    area: "1400 sq.ft.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 4,
    type: "For Rent",
    price: "₹ 60,000 / month",
    title: "3 BHK Luxury Apartment",
    location: "Gurugram, Delhi NCR",
    bedrooms: 3,
    bathrooms: 3,
    area: "1800 sq.ft.",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    type: "For Sale",
    price: "₹ 2.5 Cr",
    title: "4 BHK Luxury Villa",
    location: "Juhu, Mumbai",
    bedrooms: 4,
    bathrooms: 4,
    area: "3200 sq.ft.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 6,
    type: "For Rent",
    price: "₹ 35,000 / month",
    title: "1 BHK Furnished Apartment",
    location: "Nungambakkam, Chennai",
    bedrooms: 1,
    bathrooms: 1,
    area: "800 sq.ft.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80"
  },
  {
    id: 7,
    type: "For Sale",
    price: "₹ 65 Lakhs",
    title: "2 BHK Resale Apartment",
    location: "Kharadi, Pune",
    bedrooms: 2,
    bathrooms: 2,
    area: "1050 sq.ft.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 8,
    type: "For Rent",
    price: "₹ 25,000 / month",
    title: "1 RK Studio Apartment",
    location: "Dwarka, Delhi",
    bedrooms: 1,
    bathrooms: 1,
    area: "500 sq.ft.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const additionalProperties = [
  {
    id: 9,
    type: "For Sale",
    price: "₹ 3.8 Cr",
    title: "5 BHK Penthouse with Private Terrace",
    location: "Banjara Hills, Hyderabad",
    bedrooms: 5,
    bathrooms: 5,
    area: "4500 sq.ft.",
    image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 10,
    type: "For Rent",
    price: "₹ 80,000 / month",
    title: "3 BHK Serviced Apartment",
    location: "Bandra West, Mumbai",
    bedrooms: 3,
    bathrooms: 3,
    area: "2000 sq.ft.",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f003f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 11,
    type: "For Sale",
    price: "₹ 1.5 Cr",
    title: "3 BHK Under Construction Apartment",
    location: "Electronic City, Bangalore",
    bedrooms: 3,
    bathrooms: 3,
    area: "1450 sq.ft.",
    image: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 12,
    type: "For Rent",
    price: "₹ 18,000 / month",
    title: "Single Room in PG Accommodation",
    location: "HSR Layout, Bangalore",
    bedrooms: 1,
    bathrooms: 1,
    area: "200 sq.ft.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  }
];

function getAllProperties() {
  return [...propertiesData, ...additionalProperties];
}

function getPropertiesByType(type) {
  const allProperties = getAllProperties();
  return allProperties.filter(property =>
    property.type.toLowerCase().includes(type.toLowerCase())
  );
}

function getPropertiesByLocation(location) {
  const allProperties = getAllProperties();
  return allProperties.filter(property =>
    property.location.toLowerCase().includes(location.toLowerCase())
  );
}

function getPropertiesInPriceRange(minPrice, maxPrice) {
  const allProperties = getAllProperties();
  return allProperties.filter(property => {
    const priceStr = property.price.replace(/[^0-9.]/g, '');
    const price = parseFloat(priceStr);

    let actualPrice = price;
    if (property.price.includes('Cr')) {
      actualPrice = price * 100;
    }

    return actualPrice >= minPrice && actualPrice <= maxPrice;
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    propertiesData,
    additionalProperties,
    getAllProperties,
    getPropertiesByType,
    getPropertiesByLocation,
    getPropertiesInPriceRange
  };
}
