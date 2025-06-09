/* menu*/
const menubtn =document.querySelector('.menu-btn')
const navlinks =document.querySelector('.nav-link')
menubtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
}) 

// List of all Indian states
const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// Data structure for states and cities with detailed information
const indiaData = {
    "Bihar": {
        "Patna": {
            description: "The capital city of Bihar, known for its rich historical heritage and cultural significance.",
            historicalSignificance: "Patna, formerly known as Pataliputra, was the capital of the Mauryan Empire and has been a center of power for various dynasties. It's one of the oldest continuously inhabited places in the world, with a history dating back to 600 BCE.",
            touristAttractions: [
                "Golghar - A massive granary built in 1786",
                "Patna Museum - Houses artifacts from the Mauryan and Gupta periods",
                "Takht Sri Patna Sahib - One of the five Takhts of Sikhism",
                "Mahavir Mandir - Famous temple dedicated to Lord Hanuman",
                "Gandhi Maidan - Historic ground where Mahatma Gandhi held meetings"
            ],
            localCuisine: [
                {
                    name: "Litti Chokha",
                    description: "Traditional Bihari dish made of wheat and sattu with roasted vegetables. It's a must-try as it represents the authentic taste of Bihar."
                },
                {
                    name: "Khaja",
                    description: "A sweet delicacy made of refined wheat flour, sugar, and ghee. It's a specialty of Patna and has been prepared for centuries."
                },
                {
                    name: "Chana Ghugni",
                    description: "A spicy curry made with black chickpeas, typically served with poori. It's a popular street food in Patna."
                }
            ],
            hotels: [
                "Hotel Maurya Patna",
                "Lemon Tree Premier",
                "Hotel Chanakya",
                "The Panache"
            ],
            restaurants: [
                "Pind Balluchi",
                "Bansi Vihar",
                "Gharana",
                "Punjabi Dhaba"
            ]
        },
        "Bodh Gaya": {
            description: "A UNESCO World Heritage Site and one of the most important Buddhist pilgrimage sites.",
            historicalSignificance: "Bodh Gaya is where Gautama Buddha attained enlightenment under the Bodhi tree. The Mahabodhi Temple, built in the 3rd century BCE, marks this sacred spot and is one of the oldest brick structures in India.",
            touristAttractions: [
                "Mahabodhi Temple - The main temple complex",
                "Bodhi Tree - The descendant of the original tree under which Buddha attained enlightenment",
                "Great Buddha Statue - 80-foot tall statue of Buddha",
                "Various Buddhist monasteries from different countries",
                "Archaeological Museum"
            ],
            localCuisine: [
                {
                    name: "Buddha Bowl",
                    description: "A healthy bowl of rice, vegetables, and protein, inspired by Buddhist principles of mindful eating."
                },
                {
                    name: "Tibetan Thukpa",
                    description: "A hearty noodle soup that's popular in the region due to the Tibetan influence."
                },
                {
                    name: "Momos",
                    description: "Steamed dumplings filled with vegetables or meat, a favorite among visitors."
                }
            ],
            hotels: [
                "Royal Residency",
                "Hotel Sujata",
                "Bodhgaya Regency Hotel",
                "Root Institute Guest House"
            ],
            restaurants: [
                "Fujia Green",
                "Be Happy Cafe",
                "Mohammad Restaurant",
                "Tibetan Kitchen"
            ]
        }
    },
    "Andhra Pradesh": {
        "Visakhapatnam": {
            description: "Known as the City of Destiny, famous for its beaches and port.",
            hotels: ["Taj Gateway", "Four Points by Sheraton", "The Park", "Novotel"],
            restaurants: ["Sea Inn", "Dharani", "Zaffran", "The Square"]
        },
        "Tirupati": {
            description: "Famous for the Venkateswara Temple and religious tourism.",
            hotels: ["Fortune Select Grand Ridge", "Hotel Bliss", "Hotel Bhimas", "Hotel Mayura"],
            restaurants: ["Punjabi Dhaba", "Sri Venkateswara", "Spice Garden", "Royal Spice"]
        }
    },
    "Rajasthan": {
        "Jaipur": {
            description: "Known as the Pink City, Jaipur is famous for its stunning palaces, forts, and rich cultural heritage.",
            hotels: ["Rambagh Palace", "The Oberoi Rajvilas", "ITC Rajputana", "Hilton Jaipur"],
            restaurants: ["1135 AD - Amber Fort", "Suvarna Mahal - Rambagh Palace", "Spice Court", "Cinnamon - Jai Mahal Palace"]
        },
        "Udaipur": {
            description: "The City of Lakes, known for its beautiful lakes, palaces, and romantic atmosphere.",
            hotels: ["The Oberoi Udaivilas", "Taj Lake Palace", "Leela Palace Udaipur", "Fateh Garh"],
            restaurants: ["Ambrai Ghat", "Raas Leela", "Upre by 1559 AD", "Jaiwana Haveli"]
        }
    },
    "Kerala": {
        "Kochi": {
            description: "A vibrant port city with a rich history, known for its Chinese fishing nets and spice trade.",
            hotels: ["Grand Hyatt Kochi", "Taj Malabar Resort", "Brunton Boatyard", "Le Meridien Kochi"],
            restaurants: ["Grand Hotel", "Kashi Art Cafe", "Fort House Restaurant", "Malabar Junction"]
        },
        "Munnar": {
            description: "Famous for its tea plantations, rolling hills, and cool climate.",
            hotels: ["Windermere Estate", "Fragrant Nature Munnar", "Tea Valley Resort", "The Leaf Munnar"],
            restaurants: ["Rapsy Restaurant", "Saravana Bhavan", "Sandalwood Restaurant", "Guru's Restaurant"]
        }
    },
    "Goa": {
        "Panaji": {
            description: "The capital city known for its Portuguese architecture and vibrant culture.",
            hotels: ["Taj Vivanta", "The Leela Goa", "Fort Aguada Beach Resort", "Alila Diwa Goa"],
            restaurants: ["Viva Panjim", "Ritz Classic", "Villa Blanche Bistro", "Black Sheep Bistro"]
        }
    },
    "Maharashtra": {
        "Mumbai": {
            description: "The financial capital of India, known for its vibrant culture and iconic landmarks.",
            hotels: ["Taj Mahal Palace", "The Oberoi", "ITC Maratha", "Four Seasons"],
            restaurants: ["Leopold Cafe", "Bademiya", "Trishna", "Bombay Canteen"]
        }
    },
    "Tamil Nadu": {
        "Chennai": {
            description: "Cultural capital of South India, known for its temples and beaches.",
            hotels: ["Taj Coromandel", "The Leela Palace", "ITC Grand Chola", "Park Hyatt"],
            restaurants: ["Murugan Idli Shop", "Ratna Cafe", "Peshawri", "Copper Chimney"]
        }
    }
};

// Function to populate state dropdown
function populateStateDropdown() {
    const stateSelect = document.getElementById('stateSelect');
    indianStates.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

// Function to populate city dropdown based on selected state
function populateCityDropdown(state) {
    const citySelect = document.getElementById('citySelect');
    citySelect.innerHTML = '<option value="">Select a City</option>';
    
    if (state && indiaData[state]) {
        citySelect.style.display = 'block';
        for (const city in indiaData[state]) {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        }
    } else {
        citySelect.style.display = 'none';
    }
}

// Function to display detailed city information
function displayCityInfo(cityData) {
    return `
        <div class="tourist-info">
            <h3>${cityData.description}</h3>
            
            <div class="historical-info">
                <h4>Historical Significance</h4>
                <p>${cityData.historicalSignificance}</p>
            </div>

            <div class="attractions-list">
                <h4>Must-Visit Places</h4>
                <ul>
                    ${cityData.touristAttractions.map(attraction => `<li>${attraction}</li>`).join('')}
                </ul>
            </div>

            <div class="food-info">
                <h4>Local Cuisine</h4>
                <ul>
                    ${cityData.localCuisine.map(food => `
                        <li>
                            <strong>${food.name}</strong>: ${food.description}
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="hotels-list">
                <h4>Popular Hotels</h4>
                <ul>
                    ${cityData.hotels.map(hotel => `<li>${hotel}</li>`).join('')}
                </ul>
            </div>

            <div class="restaurants-list">
                <h4>Popular Restaurants</h4>
                <ul>
                    ${cityData.restaurants.map(restaurant => `<li>${restaurant}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Function to search states and display results
function searchState() {
    const stateSelect = document.getElementById('stateSelect');
    const citySelect = document.getElementById('citySelect');
    const selectedState = stateSelect.value;
    const selectedCity = citySelect.value;
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    if (selectedState && selectedCity && indiaData[selectedState] && indiaData[selectedState][selectedCity]) {
        // Display detailed city information
        resultsDiv.innerHTML = displayCityInfo(indiaData[selectedState][selectedCity]);
    } else if (selectedState) {
        // Display state information
        displayStateResults(selectedState, resultsDiv);
    } else {
        resultsDiv.innerHTML = '<p>Please select a state to view information.</p>';
    }

    if (resultsDiv.innerHTML === '') {
        resultsDiv.innerHTML = '<p>No results found. Please select a another state or city.</p>';
    }
}

// Function to display results for a state
function displayStateResults(state, resultsDiv) {
    const stateDiv = document.createElement('div');
    stateDiv.className = 'state-section';
    stateDiv.innerHTML = `<h2>${state}</h2>`;

    if (indiaData[state]) {
        for (const city in indiaData[state]) {
            const cityData = indiaData[state][city];
            const cityCard = document.createElement('div');
            cityCard.className = 'city-card';
            cityCard.innerHTML = `
                <h3>${city}</h3>
                <p>${cityData.description}</p>
                <div class="hotels-list">
                    <h4>Popular Hotels:</h4>
                    <ul>
                        ${cityData.hotels.map(hotel => `<li>${hotel}</li>`).join('')}
                    </ul>
                </div>
                <div class="restaurants-list">
                    <h4>Popular Restaurants:</h4>
                    <ul>
                        ${cityData.restaurants.map(restaurant => `<li>${restaurant}</li>`).join('')}
                    </ul>
                </div>
            `;
            stateDiv.appendChild(cityCard);
        }
    } else {
        stateDiv.innerHTML += '<p>Information about this state is coming soon!</p>';
    }
    resultsDiv.appendChild(stateDiv);
}

// Add event listeners when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateStateDropdown();
    
    const searchBtn = document.querySelector('.search-btn');
    const stateSelect = document.getElementById('stateSelect');
    const citySelect = document.getElementById('citySelect');

    searchBtn.addEventListener('click', searchState);
    
    stateSelect.addEventListener('change', function() {
        populateCityDropdown(this.value);
        searchState();
    });
    
    citySelect.addEventListener('change', searchState);

    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-link a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}); 