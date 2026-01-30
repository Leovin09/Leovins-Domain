// Smooth scrolling
const lenis = new Lenis({
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Cursor glow follow
const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  gsap.to(glow, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.4,
    ease: "power3.out"
  });
});

// Hero intro animation
gsap.from(".hero-title", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero-subtitle", {
  y: 50,
  opacity: 0,
  delay: 0.3,
  duration: 1,
});

// Scroll reveals
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});

// Animated changing text
const words = ["interactive", "beautiful", "playful", "immersive"];
let index = 0;
const text = document.querySelector(".changing-text");

if (text) {
  setInterval(() => {
    index = (index + 1) % words.length;
    gsap.to(text, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        text.textContent = words[index];
        gsap.to(text, { opacity: 1, duration: 0.3 });
      }
    });
  }, 2000);
}


console.log("👀 Curious dev detected. You’re my kind of person.");

gsap.from(".site-logo", {
  opacity: 0,
  y: -20,
  duration: 1,
  ease: "power3.out"
});

const siteLogo = document.querySelector(".site-logo");

if (siteLogo) {
  siteLogo.addEventListener("click", () => {
    lenis.scrollTo(0);
  });
}




// 3D tilt cards
VanillaTilt.init(document.querySelectorAll(".project-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});


// Photo story scroll animations
gsap.utils.toArray(".photo-item").forEach(item => {
  gsap.from(item.querySelector("img"), {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
    },
    x: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  gsap.from(item.querySelector(".photo-text"), {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
    },
    x: 80,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out"
  });
});

const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("menuOverlay");

function openMenu() {
  hamburger.classList.add("active");
  sideMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  hamburger.classList.remove("active");
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

hamburger.addEventListener("click", () => {
  sideMenu.classList.contains("active") ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

// Close menu on link click + smooth scroll
document.querySelectorAll(".side-menu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("href");
    closeMenu();

    // Lenis scroll
    lenis.scrollTo(target, {
      offset: -80,
      duration: 1.1,
      easing: t => 1 - Math.pow(1 - t, 3)
    });
  });
});


gsap.utils.toArray(".experience-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.04, duration: 0.25, ease: "power2.out" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.25, ease: "power2.out" });
  });
});

function updateFooterTime() {
  const timeEl = document.getElementById("live-time");
  const dateEl = document.getElementById("live-date");

  const now = new Date();

  // Format time hh:mm:ss
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Format date e.g Monday, Jan 29, 2026
  const options = { weekday: "long", year: "numeric", month: "short", day: "numeric" };
  const dateString = now.toLocaleDateString(undefined, options);

  timeEl.textContent = timeString;
  dateEl.textContent = dateString;
}

// Update every second
setInterval(updateFooterTime, 1000);
updateFooterTime();


lucide.createIcons();


// DATA ANALYTICS DASHBOARD (Sample Data Visualization)

const ticketCtx = document.getElementById('ticketChart');
const slaCtx = document.getElementById('slaChart');
const rootCtx = document.getElementById('rootCauseChart');

if (ticketCtx && slaCtx && rootCtx) {
  new Chart(ticketCtx, {
  type: 'bar',
  data: {
    labels: ['Hardware', 'Software', 'Network', 'User Error'],
    datasets: [{
      label: 'Tickets',
      data: [42, 58, 25, 35],
      backgroundColor: '#6c5ce7'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});


  new Chart(slaCtx, {
    type: 'doughnut',
    data: {
      labels: ['Met SLA', 'Missed SLA'],
      datasets: [{
        data: [92, 8],
        backgroundColor: ['#00b894', '#d63031']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
  

  new Chart(rootCtx, {
    type: 'pie',
    data: {
      labels: ['System Config', 'Outdated Software', 'User Training'],
      datasets: [{
        data: [40, 30, 30],
        backgroundColor: ['#0984e3', '#fdcb6e', '#e17055']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}


