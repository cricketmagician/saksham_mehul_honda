/* ============================================
   SAKSHAM HONDA SHOWROOM
   Cinematic Mobile-First JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Bike Data ---- */

  const defaultColors = [
    { name: 'Red', hex: '#E53935', filter: 'hue-rotate(0deg) saturate(1.2)' },
    { name: 'Blue', hex: '#1E88E5', filter: 'hue-rotate(220deg) saturate(1.5)' },
    { name: 'Black', hex: '#212121', filter: 'grayscale(100%) brightness(0.7)' },
    { name: 'Grey', hex: '#757575', filter: 'grayscale(100%) brightness(1.2)' },
    { name: 'Green', hex: '#43A047', filter: 'hue-rotate(100deg) saturate(1.1)' }
  ];

  const bikeData = {
    cbr: {
      name: 'CBR 250R',
      tagline: 'Born to race. Built for the street.',
      price: '₹2,12,000',
      image: 'images/cbr.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '249cc' },
        { label: 'Max Power', value: '26.5 PS @ 8500 rpm' },
        { label: 'Max Torque', value: '22.9 Nm @ 7000 rpm' },
        { label: 'Top Speed', value: '145km/h' },
        { label: 'Mileage', value: '35kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    hornet: {
      name: 'Hornet 2.0',
      tagline: 'Own the streets with bold aggression.',
      price: '₹1,40,000',
      image: 'images/hornet.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '184.4cc' },
        { label: 'Max Power', value: '17.26 PS @ 8500 rpm' },
        { label: 'Max Torque', value: '16.1 Nm @ 6000 rpm' },
        { label: 'Top Speed', value: '128km/h' },
        { label: 'Mileage', value: '40kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    unicorn: {
      name: 'Unicorn',
      tagline: 'Refined. Reliable. Rides forever.',
      price: '₹1,10,000',
      image: 'images/unicorn.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '162.7cc' },
        { label: 'Max Power', value: '12.9 PS @ 7500 rpm' },
        { label: 'Max Torque', value: '14 Nm @ 5500 rpm' },
        { label: 'Top Speed', value: '112km/h' },
        { label: 'Mileage', value: '55kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    shine: {
      name: 'Shine 125',
      tagline: 'Everyday reliability redefined.',
      price: '₹80,000',
      image: 'images/shine.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '123.9cc' },
        { label: 'Max Power', value: '10.74 PS @ 7500 rpm' },
        { label: 'Max Torque', value: '11 Nm @ 6000 rpm' },
        { label: 'Top Speed', value: '100km/h' },
        { label: 'Mileage', value: '65kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    sp125: {
      name: 'SP125',
      tagline: 'Beyond Advanced.',
      price: '₹86,000',
      image: 'images/shine.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '123.94cc' },
        { label: 'Max Power', value: '10.8 PS @ 7500 rpm' },
        { label: 'Max Torque', value: '10.9 Nm @ 6000 rpm' },
        { label: 'Top Speed', value: '100km/h' },
        { label: 'Mileage', value: '60kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    livo: {
      name: 'Livo',
      tagline: 'Time to Live.',
      price: '₹78,000',
      image: 'images/shine.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '109.51cc' },
        { label: 'Max Power', value: '8.7 PS @ 7500 rpm' },
        { label: 'Max Torque', value: '9.3 Nm @ 5500 rpm' },
        { label: 'Top Speed', value: '85km/h' },
        { label: 'Mileage', value: '60kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    sp160: {
      name: 'SP160',
      tagline: 'Play It Bold.',
      price: '₹1,18,000',
      image: 'images/unicorn.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '162.71cc' },
        { label: 'Max Power', value: '13.4 PS @ 7500 rpm' },
        { label: 'Max Torque', value: '14.5 Nm @ 5500 rpm' },
        { label: 'Top Speed', value: '110km/h' },
        { label: 'Mileage', value: '45kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    nx200: {
      name: 'NX200',
      tagline: 'Explore Life with every ride.',
      price: '₹1,48,000',
      image: 'images/hornet.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '184.4cc' },
        { label: 'Max Power', value: '17.26 PS @ 8500 rpm' },
        { label: 'Max Torque', value: '16.1 Nm @ 6000 rpm' },
        { label: 'Top Speed', value: '130km/h' },
        { label: 'Mileage', value: '40kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    cb125: {
      name: 'CB125 Hornet',
      tagline: 'Raw street presence.',
      price: '₹95,000',
      image: 'images/hornet.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '124.9cc' },
        { label: 'Max Power', value: '15.6 PS @ 10000 rpm' },
        { label: 'Max Torque', value: '11.1 Nm @ 8000 rpm' },
        { label: 'Top Speed', value: '105km/h' },
        { label: 'Mileage', value: '50kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    activa: {
      name: 'Activa 6G',
      tagline: 'India\'s favourite scooter.',
      price: '₹75,000',
      image: 'images/activa.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '109.51cc' },
        { label: 'Max Power', value: '7.79 PS @ 8000 rpm' },
        { label: 'Max Torque', value: '8.84 Nm @ 5500 rpm' },
        { label: 'Top Speed', value: '85km/h' },
        { label: 'Mileage', value: '60kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    dio: {
      name: 'Dio',
      tagline: 'Keep Motooing.',
      price: '₹70,000',
      image: 'images/activa.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '109.51cc' },
        { label: 'Max Power', value: '7.76 PS @ 8000 rpm' },
        { label: 'Max Torque', value: '9 Nm @ 4750 rpm' },
        { label: 'Top Speed', value: '83km/h' },
        { label: 'Mileage', value: '55kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    dio125: {
      name: 'Dio 125',
      tagline: 'Swagger on the go.',
      price: '₹83,000',
      image: 'images/activa.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '123.97cc' },
        { label: 'Max Power', value: '8.28 PS @ 6250 rpm' },
        { label: 'Max Torque', value: '10.4 Nm @ 5000 rpm' },
        { label: 'Top Speed', value: '90km/h' },
        { label: 'Mileage', value: '50kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
    activa125: {
      name: 'Activa 125',
      tagline: 'Power meets style.',
      price: '₹82,000',
      image: 'images/activa.png',
      colors: defaultColors,
      specs: [
        { label: 'Engine', value: '124cc' },
        { label: 'Max Power', value: '8.3 PS @ 6250 rpm' },
        { label: 'Max Torque', value: '10.4 Nm @ 5000 rpm' },
        { label: 'Top Speed', value: '90km/h' },
        { label: 'Mileage', value: '50kmpl' },
        { label: 'Technology', value: 'PGM-FI' }
      ]
    },
  };

  /* =========================================
     1.  CINEMATIC SCROLL REVEAL (Intersection Observer)
     ========================================= */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve to keep the element visible after reveal
        // For a more dynamic feel, we keep observing but don't toggle back right away
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => {
    // Reset delays if on mobile to avoid long waits, or keep for staggered effect
    revealObserver.observe(el);
  });

  /* =========================================
     2.  CATEGORY FILTERING (CC)
     ========================================= */
  const filterBtns = document.querySelectorAll('.cat-btn');
  const bikeCards = document.querySelectorAll('.bike-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      bikeCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-cc') === filterValue || (filterValue === 'scooter' && card.getAttribute('data-cc') === 'scooter')) {
          card.style.display = 'flex';
          // Small staggered animation reset
          card.classList.remove('visible');
          setTimeout(() => card.classList.add('visible'), 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Placeholder removed - consolidated below

  /* =========================================
     3.  GLASSMORPHIC NAVBAR LOGIC
     ========================================= */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* =========================================
     3.  MOBILE MENU
     ========================================= */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle.addEventListener('click', () => {
    const isEditing = mobileMenu.classList.contains('open');
    if (isEditing) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      menuToggle.querySelectorAll('span')[0].style.transform = 'translateY(0) rotate(0)';
      menuToggle.querySelectorAll('span')[1].style.transform = 'translateY(0) rotate(0)';
      menuToggle.querySelectorAll('span')[0].style.opacity = '1';
    } else {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
      menuToggle.querySelectorAll('span')[0].style.transform = 'translateY(3px) rotate(45deg)';
      menuToggle.querySelectorAll('span')[1].style.transform = 'translateY(-3px) rotate(-45deg)';
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      menuToggle.querySelectorAll('span')[0].style.transform = 'translateY(0) rotate(0)';
      menuToggle.querySelectorAll('span')[1].style.transform = 'translateY(0) rotate(0)';
    });
  });

  /* =========================================
     4.  SMOOTH SCROLLING
     ========================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* =========================================
     5.  BIKE DETAIL MODAL (SPRING SLIDE UP)
     ========================================= */
  const overlay = document.getElementById('bikeDetailOverlay');
  const detail = document.getElementById('bikeDetail');
  const detailCloseBtn = document.getElementById('detailCloseBtn');
  const galleryTrack = document.getElementById('galleryTrack');
  const galleryDots = document.getElementById('galleryDots');
  const detailInfo = document.getElementById('detailInfo');

  let currentSlide = 0;
  let totalSlides = 0;
  let touchStartX = 0;

  // Global selector for color dots to avoid re-binding issues
  window.selectColor = function (idx, bikeKey) {
    const bike = bikeData[bikeKey];
    if (!bike) return;

    document.querySelectorAll('.color-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });

    const activeFilter = bike.colors[idx].filter;
    document.querySelectorAll('.detail-gallery-slide img').forEach(img => {
      img.style.filter = activeFilter;
    });
  };

  function openDetail(bikeKey) {
    const bike = bikeData[bikeKey];
    if (!bike) {
      console.error(`Bike data not found for key: ${bikeKey}`);
      return;
    }

    const angles = ['Pro View', 'Side Profile'];
    const defaultFilter = bike.colors[0].filter;

    galleryTrack.innerHTML = angles.map((angle, i) => `
      <div class="detail-gallery-slide">
        <img src="${bike.image}" alt="${bike.name} ${angle}" style="transform: scaleX(${i === 1 ? -1 : 1}); transition: filter 0.4s ease; filter: ${defaultFilter};">
      </div>
    `).join('');

    totalSlides = angles.length;
    currentSlide = 0;
    galleryTrack.style.transform = 'translateX(0)';

    galleryDots.innerHTML = angles.map((_, i) =>
      `<span class="gallery-dot${i === 0 ? ' active' : ''}" data-idx="${i}"></span>`
    ).join('');

    galleryDots.querySelectorAll('.gallery-dot').forEach(dot => {
      dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.idx)));
    });

    const colorDotsHtml = bike.colors.map((c, i) => `
        <div class="color-dot ${i === 0 ? 'active' : ''}" 
             style="background-color: ${c.hex}" 
             title="${c.name}"
             onclick="selectColor(${i}, '${bikeKey}')"></div>
    `).join('');

    detailInfo.innerHTML = `
      <h2 class="detail-name">${bike.name}</h2>
      <div class="color-options">${colorDotsHtml}</div>
      <p class="detail-tagline">${bike.tagline}</p>
      <p class="detail-price">${bike.price} <small>Estimated Base</small></p>
      <div class="detail-specs">
        ${bike.specs.map(s => `
          <div class="detail-spec-card">
            <p class="detail-spec-value">${s.value}</p>
            <p class="detail-spec-label">${s.label}</p>
          </div>
        `).join('')}
      </div>
      <div class="detail-actions">
        <a href="#test-ride" class="btn-block-primary" onclick="closeDetailAndScroll()">
          Configure & Experience
        </a>
      </div>
    `;

    overlay.classList.add('open');
    detail.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDetail() {
    overlay.classList.remove('open');
    detail.classList.remove('open');
    document.body.style.overflow = '';
  }

  window.closeDetailAndScroll = function () {
    closeDetail();
    const target = document.querySelector('#test-ride');
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  function goToSlide(idx) {
    currentSlide = idx;
    galleryTrack.style.transform = `translateX(-${idx * 100}%)`;
    galleryDots.querySelectorAll('.gallery-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  }

  // Touch swipe
  const detailGallery = document.querySelector('.detail-gallery');
  if (detailGallery) {
    detailGallery.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    detailGallery.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentSlide < totalSlides - 1) goToSlide(currentSlide + 1);
        else if (diff < 0 && currentSlide > 0) goToSlide(currentSlide - 1);
      }
    }, { passive: true });
  }

  detailCloseBtn.addEventListener('click', closeDetail);
  overlay.addEventListener('click', closeDetail);

  // Event Delegation for Bike Cards
  const bikesGrid = document.getElementById('bikesGrid');
  if (bikesGrid) {
    bikesGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.bike-card');
      if (card) {
        const bikeKey = card.dataset.bike;
        openDetail(bikeKey);
      }
    });
  }

  /* =========================================
     6.  EMI CALCULATOR (PRO SLIDERS)
     ========================================= */
  const priceSlider = document.getElementById('priceSlider');
  const downSlider = document.getElementById('downSlider');
  const tenureSlider = document.getElementById('tenureSlider');
  const priceValue = document.getElementById('priceValue');
  const downValue = document.getElementById('downValue');
  const tenureValue = document.getElementById('tenureValue');
  const emiResult = document.getElementById('emiResult');

  function fmt(n) { return '₹' + n.toLocaleString('en-IN'); }

  function calcEMI() {
    const P = parseInt(priceSlider.value) - parseInt(downSlider.value);
    const n = parseInt(tenureSlider.value);
    const r = 9.5 / 12 / 100;
    if (P <= 0) { emiResult.innerHTML = '₹0'; return; }
    const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    emiResult.innerHTML = `${fmt(emi)}`;
  }

  function syncSliders() {
    priceValue.textContent = fmt(parseInt(priceSlider.value));
    downValue.textContent = fmt(parseInt(downSlider.value));
    tenureValue.textContent = tenureSlider.value + ' months';
    downSlider.max = priceSlider.value;
    if (parseInt(downSlider.value) > parseInt(priceSlider.value)) {
      downSlider.value = priceSlider.value;
      downValue.textContent = fmt(parseInt(downSlider.value));
    }
    calcEMI();
  }

  [priceSlider, downSlider, tenureSlider].forEach(s => s.addEventListener('input', syncSliders));
  syncSliders();

  /* =========================================
     7.  TEST RIDE FORM (Premium Feedback & Backend)
     ========================================= */
  const testRideForm = document.getElementById('testRideForm');
  if (testRideForm) {
    const dateInput = document.getElementById('trDate');
    if (dateInput) dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);

    testRideForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const phone = document.getElementById('trPhone').value;
      if (!/^[0-9]{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }

      const btn = testRideForm.querySelector('.form-submit');
      const originalText = btn.textContent;

      btn.textContent = 'Confirming...';
      btn.disabled = true;

      const formData = {
        name: document.getElementById('trName').value,
        phone: phone,
        bike: document.getElementById('trBike').value,
        date: document.getElementById('trDate').value
      };

      try {
        // Use relative path for Vercel deployment
        const response = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          btn.textContent = 'Booking Confirmed ✓';
          btn.style.background = '#34C759'; // Apple Green
          testRideForm.reset();
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = 'var(--black)';
            btn.disabled = false;
          }, 4000);
        } else {
          const error = await response.json();
          alert(`Error: ${error.error || 'Something went wrong'}`);
          btn.textContent = originalText;
          btn.disabled = false;
        }
      } catch (err) {
        console.error('Submission error:', err);
        alert('Could not connect to the server. Please try again later.');
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }

});
