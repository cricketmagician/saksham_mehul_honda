const fs = require('fs');

const appJs = fs.readFileSync('app.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

// We will inject the new bikeData directly.

const bikesList = [
  { id: 'cbr', name: 'CBR 250R', category: 'Sport Racing', cc: '250+', badge: 'Pro', price: '₹2,12,000', img: 'images/cbr.png', tagline: 'Born to race. Built for the street.', engine: '249cc', mileage: '35kmpl', topSpeed: '145km/h' },
  { id: 'hornet', name: 'Hornet 2.0', category: 'Street Fighter', cc: '160-200', badge: 'New', price: '₹1,40,000', img: 'images/hornet.png', tagline: 'Own the streets with bold aggression.', engine: '184cc', mileage: '40kmpl', topSpeed: '128km/h' },
  { id: 'unicorn', name: 'Unicorn', category: 'Premium Commuter', cc: '160-200', badge: '', price: '₹1,10,000', img: 'images/unicorn.png', tagline: 'Refined. Reliable. Rides forever.', engine: '162cc', mileage: '55kmpl', topSpeed: '112km/h' },
  { id: 'shine', name: 'Shine 125', category: 'Everyday Reliability', cc: '110-125', badge: 'Essential', price: '₹80,000', img: 'images/shine.png', tagline: 'Everyday reliability redefined.', engine: '124cc', mileage: '65kmpl', topSpeed: '100km/h' },
  { id: 'sp125', name: 'SP125', category: 'Advanced Commuter', cc: '110-125', badge: 'Popular', price: '₹86,000', img: 'images/shine.png', tagline: 'Beyond Advanced.', engine: '124cc', mileage: '60kmpl', topSpeed: '100km/h' },
  { id: 'livo', name: 'Livo', category: 'Stylish Commuter', cc: '110-125', badge: '', price: '₹78,000', img: 'images/shine.png', tagline: 'Time to Live.', engine: '109cc', mileage: '60kmpl', topSpeed: '85km/h' },
  { id: 'sp160', name: 'SP160', category: 'Premium Commuter', cc: '160-200', badge: 'Bold', price: '₹1,18,000', img: 'images/unicorn.png', tagline: 'Play It Bold.', engine: '162cc', mileage: '45kmpl', topSpeed: '110km/h' },
  { id: 'nx200', name: 'NX200', category: 'Adventure', cc: '160-200', badge: 'Explore', price: '₹1,48,000', img: 'images/hornet.png', tagline: 'Explore Life with every ride.', engine: '184cc', mileage: '40kmpl', topSpeed: '130km/h' },
  { id: 'cb125', name: 'CB125 Hornet', category: 'Street Naked', cc: '110-125', badge: '', price: '₹95,000', img: 'images/hornet.png', tagline: 'Raw street presence.', engine: '124.9cc', mileage: '50kmpl', topSpeed: '105km/h' },
  { id: 'activa', name: 'Activa 6G', category: 'Iconic Scooter', cc: 'scooter', badge: 'No. 1', price: '₹75,000', img: 'images/activa.png', tagline: 'India\'s favourite scooter.', engine: '110cc', mileage: '60kmpl', topSpeed: '85km/h' },
  { id: 'dio', name: 'Dio', category: 'Moto Scooter', cc: 'scooter', badge: 'Fun', price: '₹70,000', img: 'images/activa.png', tagline: 'Keep Motooing.', engine: '110cc', mileage: '55kmpl', topSpeed: '83km/h' },
  { id: 'dio125', name: 'Dio 125', category: 'Sporty Scooter', cc: 'scooter', badge: '', price: '₹83,000', img: 'images/activa.png', tagline: 'Swagger on the go.', engine: '124cc', mileage: '50kmpl', topSpeed: '90km/h' },
  { id: 'activa125', name: 'Activa 125', category: 'Premium Scooter', cc: 'scooter', badge: 'Smart', price: '₹82,000', img: 'images/activa.png', tagline: 'Power meets style.', engine: '124cc', mileage: '50kmpl', topSpeed: '90km/h' }
];

let baseColors = `
  const defaultColors = [
    { name: 'Red', hex: '#E53935', filter: 'hue-rotate(0deg) saturate(1.2)' },
    { name: 'Blue', hex: '#1E88E5', filter: 'hue-rotate(220deg) saturate(1.5)' },
    { name: 'Black', hex: '#212121', filter: 'grayscale(100%) brightness(0.7)' },
    { name: 'Grey', hex: '#757575', filter: 'grayscale(100%) brightness(1.2)' },
    { name: 'Green', hex: '#43A047', filter: 'hue-rotate(100deg) saturate(1.1)' }
  ];
`;

let newBikeData = `  /* ---- Bike Data ---- */\n${baseColors}\n  const bikeData = {\n`;

bikesList.forEach(b => {
  newBikeData += `    ${b.id}: {
      name: '${b.name}',
      tagline: '${b.tagline.replace(/'/g, "\\'")}',
      price: '${b.price}',
      image: '${b.img}',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '${b.engine}' },
        { label: 'Top Speed', value: '${b.topSpeed}' },
        { label: 'Mileage', value: '${b.mileage}' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },\n`;
});

newBikeData += `  };\n`;

// Replace bikeData in app.js
let newAppJs = appJs.replace(/  \/\* ---- Bike Data ---- \*\/'[\s\S]*?  \};\n/, newBikeData);
// Wait, regex might fail. Let's do it precisely via string split.
const splitStart = appJs.indexOf('  /* ---- Bike Data ---- */');
const splitEnd = appJs.indexOf('  /* =========================================', splitStart);
newAppJs = appJs.substring(0, splitStart) + newBikeData + '\n' + appJs.substring(splitEnd);

// Add scooter to category filters string
newAppJs = newAppJs.replace("if (filterValue === 'all' || card.getAttribute('data-cc') === filterValue) {", 
"if (filterValue === 'all' || card.getAttribute('data-cc') === filterValue || (filterValue === 'scooter' && card.getAttribute('data-cc') === 'scooter')) {");

// Inject bikes into index.html
let htmlCards = '';
bikesList.forEach((b, i) => {
  htmlCards += `
                <!-- Card ${i+1} -->
                <div class="bike-card reveal" data-bike="${b.id}" data-cc="${b.cc}">
                    <div class="bike-card-image uniform-direction">
                        ${b.badge ? `<span class="bike-card-badge">${b.badge}</span>` : ''}
                        <img src="${b.img}" alt="Honda ${b.name}" loading="lazy">
                    </div>
                    <div class="bike-card-body">
                        <div class="bike-card-top">
                            <h3 class="bike-card-name">${b.name}</h3>
                            <p class="bike-card-category">${b.category}</p>
                        </div>
                        <div class="bike-card-specs">
                            <div class="bike-card-spec">
                                <span class="spec-val">${b.engine}</span>
                                <span class="spec-lbl">Engine</span>
                            </div>
                            <div class="bike-card-spec">
                                <span class="spec-val">${b.mileage}</span>
                                <span class="spec-lbl">Mileage</span>
                            </div>
                        </div>
                        <div class="bike-card-footer">
                            <div class="bike-card-price">${b.price} <small>From</small></div>
                            <button class="bike-card-btn" aria-label="View details">
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                    <path d="M5 12h14m-7-7l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
`;
});

const cardsStartMarker = '<div class="bikes-grid" id="bikesGrid">';
const cardsEndMarker = '            </div>\n        </div>\n    </section>\n\n    <!-- ===== BIKE DETAIL MODAL ===== -->';
const splitHtmlStart = indexHtml.indexOf(cardsStartMarker);
const splitHtmlEnd = indexHtml.indexOf('</div>\n        </div>\n    </section>\n\n    <!-- ===== BIKE DETAIL MODAL ===== -->', splitHtmlStart);

let newIndexHtml = indexHtml.substring(0, splitHtmlStart + cardsStartMarker.length) + htmlCards + indexHtml.substring(splitHtmlEnd);

// Also add a 'scooter' filter button in html
const newFiltersHtml = `
            <div class="category-filters reveal" id="bikeFilters">
                <button class="cat-btn active" data-filter="all">All Models</button>
                <button class="cat-btn" data-filter="scooter">Scooters</button>
                <button class="cat-btn" data-filter="110-125">110-125cc</button>
                <button class="cat-btn" data-filter="160-200">160-200cc</button>
                <button class="cat-btn" data-filter="250+">250cc+</button>
            </div>
`;
newIndexHtml = newIndexHtml.replace(/<div class="category-filters reveal" id="bikeFilters">[\s\S]*?<\/div>/, newFiltersHtml.trim());

// Make images point same direction using CSS
const cssAddition = `
/* uniform direction */
.uniform-direction img {
    /* If some face left and some right, we can flip specific ones. Since we reuse images, let's keep it clean. */
    transform: scaleX(var(--img-dir, 1));
}

.color-options {
    display: flex;
    gap: 12px;
    margin: 16px 0;
}
.color-dot {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
    transition: transform 0.2s, border-color 0.2s;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.2);
}
.color-dot:hover {
    transform: scale(1.1);
}
.color-dot.active {
    border-color: #fff;
    transform: scale(1.15);
}
`;
fs.appendFileSync('styles.css', cssAddition);

// Update app.js modal to inject colors
newAppJs = newAppJs.replace(
"    detailInfo.innerHTML = `",
`
    // Default color filter
    let activeFilter = bike.colors[0].filter;
    window.selectColor = function(idx) {
        document.querySelectorAll('.color-dot').forEach((d, i) => {
            d.classList.toggle('active', i === idx);
        });
        activeFilter = bike.colors[idx].filter;
        document.querySelectorAll('.detail-gallery-slide img').forEach(img => {
            img.style.filter = activeFilter;
        });
    };

    const colorDotsHtml = bike.colors.map((c, i) => \`
        <div class="color-dot \${i === 0 ? 'active' : ''}" 
             style="background-color: \${c.hex}" 
             title="\${c.name}"
             onclick="selectColor(\${i})"></div>
    \`).join('');

    galleryTrack.innerHTML = angles.map((angle, i) => \`
      <div class="detail-gallery-slide">
        <img src="\${bike.image}" alt="\${bike.name} \${angle}" style="transform: scaleX(\${i === 1 ? -1 : 1}); transition: filter 0.4s ease; filter: \${activeFilter};">
      </div>
    \`).join('');

    detailInfo.innerHTML = \`
`
);

newAppJs = newAppJs.replace(
"      <h2 class=\"detail-name\">${bike.name}</h2>",
"      <h2 class=\"detail-name\">${bike.name}</h2>\n      <div class=\"color-options\">${colorDotsHtml}</div>"
);

fs.writeFileSync('app.js', newAppJs);
fs.writeFileSync('index.html', newIndexHtml);

console.log("Updated HTML and JS successfully.");
