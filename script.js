// Saniya Firdaush - Modern Portfolio Scripts

document.addEventListener('DOMContentLoaded', () => {
  initTypingAnimation();
  initTerminal();
  initPlayground();
  initContactForm();
  initMobileMenu();
  initNavigationScroll();
  initSectionAnimations();
});

/* ==========================================
   1. Typing Animation (Hero Subtitle)
   ========================================== */
function initTypingAnimation() {
  const typingText = document.getElementById('typing-text');
  const titles = [
    "Google Student Ambassador",
    "Delhi University CS Student",
    "Tech Enthusiast & Learner",
    "Aspiring AI/ML Developer",
    "GeeksforGeeks Campus Mantri",
    "AWS Student Builder Campus Leader",
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      typingText.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingText.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      // Pause at full word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================
   2. Interactive Terminal Console
   ========================================== */
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalCursor = document.getElementById('terminal-cursor');
  const terminalBody = document.getElementById('terminal-body');
  
  if (!terminalInput || !terminalCursor || !terminalBody) return;

  // Move cursor as user types
  terminalInput.addEventListener('input', updateCursorPosition);
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.value.trim();
      executeCommand(command);
      terminalInput.value = '';
      updateCursorPosition();
    }
  });

  // Keep focus on input when clicking terminal
  const terminalContainer = document.getElementById('terminal-container');
  terminalContainer.addEventListener('click', () => {
    terminalInput.focus();
  });

  function updateCursorPosition() {
    const charWidth = 8.2; // Monospace font character width
    const textLength = terminalInput.value.length;
    terminalCursor.style.left = `${textLength * charWidth}px`;
  }

  // Pre-configured commands database
  const commands = {
    help: () => `
Available commands:
  <span class="neon-text-violet">about</span>        - Get Saniya's developer profile and bio
  <span class="neon-text-violet">skills</span>       - Print her technical and soft skills
  <span class="neon-text-violet">experience</span>   - Print her professional and volunteer work
  <span class="neon-text-violet">education</span>    - Display her academic details
  <span class="neon-text-violet">achievements</span> - Print summit accomplishments and certifications
  <span class="neon-text-violet">projects</span>     - List featured GitHub repositories and descriptions
  <span class="neon-text-violet">playground</span>   - Learn about the interactive AI/ML simulator
  <span class="neon-text-violet">contact</span>      - Output Saniya's professional links and socials
  <span class="neon-text-violet">clear</span>        - Clear terminal logs
  <span class="neon-text-violet">help</span>         - Display this list
`,
    about: () => `
<span class="terminal-output-accent">Name:</span> Saniya Firdaush
<span class="terminal-output-accent">Role:</span> B.Sc. Computer Science Student & Google Gemini Student Ambassador
<span class="terminal-output-accent">Description:</span> An ambitious fresher with a positive attitude and a strong desire to
build a successful career. Open to learning new skills, hosting seminars, and taking
on responsibilities to grow professionally.
`,
    skills: () => `
<span class="terminal-output-accent">--- TECH & SOFT SKILLS ---</span>
  <span class="neon-text-cyan">Technical:</span>     Web Development, Python, MySQL, Tailwind CSS, LaTeX, Video/Canva Editing, MS Office
  <span class="neon-text-cyan">Soft Skills:</span>   Project Management, Critical Thinking, Teamwork, Communication, Leadership, Adaptability
  <span class="neon-text-cyan">Languages:</span>     English (Fluent), Hindi (Fluent)
`,
    experience: () => `
<span class="terminal-output-accent">--- PROFESSIONAL EXPERIENCE ---</span>
  1. <span class="neon-text-emerald">Student Ambassador</span> @ Google Gemini [2025 - Present]
     - Collaborate with college societies, organize workshops, and run seminars/webinars to promote AI tools.
  2. <span class="neon-text-emerald">Recruiter Assistant</span> @ Bhutani Infra, INTERNOVA 2.0 [2026]
     - Assisted recruiters from Bhutani Infra during the INTERNOVA 2.0 Annual Internship Fair of Kalindi College.
  3. <span class="neon-text-emerald">Team Coordinator</span> @ Workex'25, Kryptus [2025]
     - Coordinated with Unstop Company team during the Kalindi College placement cell annual fair.
  4. <span class="neon-text-emerald">Volunteer</span> @ Lehren '25, Kalindi College [2025]
     - Assisted in organizing the annual cultural fest.
`,
    education: () => `
<span class="terminal-output-accent">--- EDUCATION ---</span>
  <span class="neon-text-cyan">Delhi University (2024 - 2027)</span>
  - Bachelor of Science (Honours) in Computer Science
  - Coursework: Programming principles, web engineering, database systems, data structures, algorithms.
`,
    achievements: () => `
<span class="terminal-output-accent">--- ACHIEVEMENTS & CERTIFICATIONS ---</span>
  - Represented Google Gemini at AI Impact Summit 2026 as a Student Ambassador.
  - 1st Rank in Photography competition organised by ECO CLUB of Vivekananda College (2025).
  - Achieved 3rd rank in Inter-college Debate Competition "AI in Education: Boon or Bane" (SATTVA CS Society, 2024).
  - <span class="neon-text-cyan">Credentials:</span> Tailwind CSS (Devtown), Geo-data sharing & Cyber Security (ISRO), AI (Devtown).
`,
    projects: () => `
<span class="terminal-output-accent">--- FEATURED REPOSITORIES ---</span>
  1. <span class="neon-text-emerald">ProdigyAI</span> [React / TypeScript / Gemini API]
     - Intelligent productivity companion dashboard with chat automation.
  2. <span class="neon-text-emerald">Prompt-a-thon</span> [Python / JavaScript / Scikit-Learn]
     - Glucose monitoring simulator and blood sugar spike curve predictor.
  3. <span class="neon-text-emerald">Carbonfootprint</span> [JavaScript / CSS Grid / NLP]
     - EcoAI analyzer containing emissions calculator and recommendation engine.
`,
    playground: () => `
<span class="terminal-output-accent">--- AI/ML PLAYGROUND ---</span>
Check out the <span class="neon-text-cyan">#playground</span> section of the page!
It features two custom-designed models you can adjust:
  - <span class="neon-text-violet">Blood Glucose Predictor:</span> Runs curve regression simulation of glucose spikes.
  - <span class="neon-text-violet">EcoAI Footprint Calculator:</span> Predicts carbon footprint impact based on lifestyle.
`,
    contact: () => `
<span class="terminal-output-accent">--- PROFESSIONAL CONNECTIONS ---</span>
  - <span class="neon-text-cyan">LinkedIn:</span> <a href="https://www.linkedin.com/SaniyaFirdaush" target="_blank" style="color: #06b6d4; text-decoration: underline;">linkedin.com/SaniyaFirdaush</a>
  - <span class="neon-text-cyan">GitHub:</span>   <a href="https://github.com/SaniyaFirdaush05" target="_blank" style="color: #06b6d4; text-decoration: underline;">github.com/SaniyaFirdaush05</a>
  - <span class="neon-text-cyan">Email:</span>    saniyafirdau@gmail.com
`
  };

  function executeCommand(cmdText) {
    const trimmed = cmdText.toLowerCase();
    
    // Create prompt echo line
    const echoLine = document.createElement('div');
    echoLine.className = 'terminal-line';
    echoLine.innerHTML = `<span class="terminal-prompt">guest@saniya-firdaush:~$</span> ${cmdText}`;
    
    // Insert echo before the input line
    const inputLine = terminalBody.querySelector('.terminal-input-line');
    terminalBody.insertBefore(echoLine, inputLine);

    if (trimmed === '') {
      return;
    }

    const outputLine = document.createElement('div');
    outputLine.className = 'terminal-line terminal-output';

    if (trimmed === 'clear') {
      // Clear all lines except input line
      const lines = terminalBody.querySelectorAll('.terminal-line');
      lines.forEach(line => {
        if (line !== inputLine) {
          line.remove();
        }
      });
      return;
    }

    if (commands[trimmed]) {
      outputLine.innerHTML = commands[trimmed]();
    } else {
      outputLine.innerHTML = `<span class="terminal-output-error">Command not found: "${cmdText}". Type "help" for a list of commands.</span>`;
    }

    terminalBody.insertBefore(outputLine, inputLine);
    
    // Auto-scroll terminal body
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

/* ==========================================
   3. AI/ML Playground (Tabs & Simulations)
   ========================================== */
function initPlayground() {
  const tabs = document.querySelectorAll('.playground-tab');
  const panels = document.querySelectorAll('.widget-panel');
  const visTitle = document.getElementById('vis-title');
  
  // Tab Switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const selectedTab = tab.getAttribute('data-tab');
      document.getElementById(`${selectedTab}-panel`).classList.add('active');

      if (selectedTab === 'glucose') {
        visTitle.textContent = 'GLUCOSE_REGRESSION_MODEL v1.2';
        document.getElementById('vis-title').style.color = 'var(--accent-emerald)';
        updateGlucoseVisualization();
      } else {
        visTitle.textContent = 'ECO_NLP_CARBON_CALCULATOR v0.9';
        document.getElementById('vis-title').style.color = 'var(--accent-cyan)';
        updateCarbonVisualization();
      }
    });
  });

  // Glucose Slider inputs
  const carbSlider = document.getElementById('carb-slider');
  const carbVal = document.getElementById('carb-val');
  const insulinSlider = document.getElementById('insulin-slider');
  const insulinVal = document.getElementById('insulin-val');

  if (carbSlider && insulinSlider) {
    carbSlider.addEventListener('input', (e) => {
      carbVal.textContent = e.target.value;
      updateGlucoseVisualization();
    });
    
    insulinSlider.addEventListener('input', (e) => {
      insulinVal.textContent = e.target.value;
      updateGlucoseVisualization();
    });
  }

  // Carbon Slider inputs
  const vehicleSlider = document.getElementById('vehicle-slider');
  const vehicleVal = document.getElementById('vehicle-val');
  const dietSlider = document.getElementById('diet-slider');
  const dietVal = document.getElementById('diet-val');

  if (vehicleSlider && dietSlider) {
    vehicleSlider.addEventListener('input', (e) => {
      vehicleVal.textContent = e.target.value;
      updateCarbonVisualization();
    });
    
    dietSlider.addEventListener('input', (e) => {
      dietVal.textContent = parseFloat(e.target.value).toFixed(1);
      updateCarbonVisualization();
    });
  }

  // Initial render
  updateGlucoseVisualization();

  function updateGlucoseVisualization() {
    const carb = parseInt(carbSlider.value);
    const delay = parseInt(insulinSlider.value);

    // Calculate metrics
    const peakGlucose = Math.round(85 + (carb * 0.95) - (delay * 0.35));
    const peakTime = Math.round(45 + delay + (carb * 0.1));
    
    let status = 'NORMAL';
    let statusClass = 'neon-text-emerald';
    if (peakGlucose >= 180) {
      status = 'HIGH SPIKE';
      statusClass = 'neon-text-rose';
    } else if (peakGlucose >= 140) {
      status = 'ELEVATED';
      statusClass = 'neon-text-cyan';
    }

    // Update labels
    document.getElementById('metric-label-1').textContent = 'Estimated Peak';
    document.getElementById('metric-val-1').textContent = `${peakGlucose} mg/dL`;
    document.getElementById('metric-label-2').textContent = 'Peak Time';
    document.getElementById('metric-val-2').textContent = `${peakTime} mins`;
    document.getElementById('metric-label-3').textContent = 'Glycemic Risk';
    
    const statusVal = document.getElementById('metric-val-3');
    statusVal.textContent = status;
    statusVal.className = `metric-val ${statusClass}`;

    // Render SVG Glucose Curve
    // Scale inputs to fit SVG box: width 400, height 200.
    // Basal level is y=150.
    // Peak y matches peakGlucose: map 70-220 to y=170 to y=30.
    const basalY = 150;
    const minGluc = 70;
    const maxGluc = 220;
    const peakY = basalY - ((peakGlucose - minGluc) / (maxGluc - minGluc)) * 120;
    
    // Peak x matches peakTime: map 30-160 to x=60 to x=340.
    const peakX = 60 + ((peakTime - 30) / 130) * 280;

    const path = document.getElementById('vis-curve');
    const area = document.getElementById('vis-curve-area');
    const peakPoint = document.getElementById('vis-peak-point');
    const peakLine = document.getElementById('vis-peak-line');

    if (path && area && peakPoint && peakLine) {
      // Draw smooth Bezier curve: start (0,150), peak (peakX, peakY), end (400,150)
      // Control points for cubic bezier to make it look like a physiological glucose curve.
      const cp1x = peakX * 0.6;
      const cp1y = basalY - (basalY - peakY) * 0.1;
      const cp2x = peakX - (peakX * 0.15);
      const cp2y = peakY;
      
      const cp3x = peakX + (400 - peakX) * 0.25;
      const cp3y = peakY;
      const cp4x = 400;
      const cp4y = basalY;

      const d = `M 0,150 C ${cp1x},${cp1y} ${cp2x},${cp2y} ${peakX},${peakY} C ${cp3x},${cp3y} ${cp4x},${cp4y} 400,150`;
      path.setAttribute('d', d);
      
      const dArea = `${d} L 400,180 L 0,180 Z`;
      area.setAttribute('d', dArea);

      // Update peak highlight indicators
      peakPoint.setAttribute('cx', peakX);
      peakPoint.setAttribute('cy', peakY);
      peakPoint.setAttribute('fill', 'var(--accent-cyan)');
      
      peakLine.setAttribute('x1', peakX);
      peakLine.setAttribute('y1', peakY);
      peakLine.setAttribute('x2', peakX);
      peakLine.setAttribute('y2', 180);
    }
  }

  function updateCarbonVisualization() {
    const commute = parseInt(vehicleSlider.value);
    const diet = parseFloat(dietSlider.value);

    // Calculate metrics
    const vehicleCO2 = commute * 52 * 0.18; // approx 0.18 kg CO2 per km
    const dietCO2 = diet * 1000; // base diet impact factor
    const totalCO2 = Math.round(vehicleCO2 + dietCO2);
    
    // Average European/US standard is ~6500 kg
    const percentage = Math.min(Math.round((totalCO2 / 6000) * 100), 100);
    
    let rating = 'ECO FRIENDLY';
    let ratingClass = 'neon-text-emerald';
    if (totalCO2 > 3500) {
      rating = 'HIGH EMITTER';
      ratingClass = 'neon-text-rose';
    } else if (totalCO2 > 2000) {
      rating = 'MODERATE';
      ratingClass = 'neon-text-cyan';
    }

    // Update labels
    document.getElementById('metric-label-1').textContent = 'Annual CO₂';
    document.getElementById('metric-val-1').textContent = `${(totalCO2 / 1000).toFixed(2)} tons`;
    document.getElementById('metric-label-2').textContent = 'Avg Comparison';
    document.getElementById('metric-val-2').textContent = `${percentage}% of standard`;
    document.getElementById('metric-label-3').textContent = 'Eco Status';
    
    const ratingVal = document.getElementById('metric-val-3');
    ratingVal.textContent = rating;
    ratingVal.className = `metric-val ${ratingClass}`;

    // Render SVG Carbon breakdown bars
    const path = document.getElementById('vis-curve');
    const area = document.getElementById('vis-curve-area');
    const peakPoint = document.getElementById('vis-peak-point');
    const peakLine = document.getElementById('vis-peak-line');

    if (path && area && peakPoint && peakLine) {
      // For carbon, render a beautiful progress representation
      // We will render two stepped bar structures using paths
      const vHeight = (vehicleCO2 / 5000) * 120; // max scale 5000kg
      const dHeight = (dietCO2 / 5000) * 120;
      
      const vY = 150 - vHeight;
      const dY = 150 - dHeight;

      // Draw standard line bars representation
      const d = `M 80,150 L 80,${vY} M 280,150 L 280,${dY}`;
      path.setAttribute('d', d);
      
      // Blank out area fill (set opacity to 0) or draw box areas
      const dArea = `M 50,150 L 50,${vY} L 110,${vY} L 110,150 Z M 250,150 L 250,${dY} L 310,${dY} L 310,150 Z`;
      area.setAttribute('d', dArea);

      // Place indicator at the higher emissions bar
      const maxValY = Math.min(vY, dY);
      const maxX = vY < dY ? 80 : 280;

      peakPoint.setAttribute('cx', maxX);
      peakPoint.setAttribute('cy', maxValY);
      peakPoint.setAttribute('fill', 'var(--accent-violet)');
      
      peakLine.setAttribute('x1', maxX);
      peakLine.setAttribute('y1', maxValY);
      peakLine.setAttribute('x2', maxX);
      peakLine.setAttribute('y2', 150);
    }
  }
}

/* ==========================================
   4. Contact Form Handler
   ========================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!contactForm || !submitBtn) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      alert('Please complete all fields before sending your message.');
      return;
    }

    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'sending_payload...';
    submitBtn.disabled = true;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your message right now.');
      }

      submitBtn.textContent = 'success_sent!';
      submitBtn.style.borderColor = 'var(--accent-emerald)';
      submitBtn.style.color = 'var(--accent-emerald)';
      alert('Message sent! I will receive it by email shortly.');

      contactForm.reset();
    } catch (error) {
      submitBtn.textContent = 'send_failed!';
      submitBtn.style.borderColor = 'var(--accent-rose)';
      submitBtn.style.color = 'var(--accent-rose)';
      alert(error.message || 'Unable to send the message. Please try again later.');
    } finally {
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.borderColor = '';
        submitBtn.style.color = '';
      }, 3000);
    }
  });
}

/* ==========================================
   5. Mobile Menu Toggle
   ========================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'rgba(3, 0, 20, 0.95)';
      navLinks.style.borderBottom = 'var(--border-glow)';
      navLinks.style.padding = '1.5rem';
      navLinks.style.gap = '1.5rem';
    }
  });

  // Close mobile menu when a link is clicked
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
      }
    });
  });
}

/* ==========================================
   6. Navigation Active States on Scroll
   ========================================== */
function initNavigationScroll() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // adjustment for header height
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

function initSectionAnimations() {
  const sections = document.querySelectorAll('.section-animate');

  if (!('IntersectionObserver' in window)) {
    sections.forEach(section => section.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18,
  });

  sections.forEach(section => observer.observe(section));
}
