// CLICKABLE CARDS
const contentMain = document.querySelector(".content-main");

const webCard        = document.querySelector('.service-card[data-service="web"]');
const cloudCard      = document.querySelector('.service-card[data-service="cloud"]');
const mobileCard     = document.querySelector('.service-card[data-service="mobile"]');
const fulltimeCard   = document.querySelector('.service-card[data-service="fulltime"]');
const internshipCard = document.querySelector('.service-card[data-service="internship"]');

const webFocus         = document.getElementById("web-focus");
const webFocusInner    = document.getElementById("web-focus-inner");
const cloudFocus       = document.getElementById("cloud-focus");
const cloudFocusInner  = document.getElementById("cloud-focus-inner");
const mobileFocus      = document.getElementById("mobile-focus");
const mobileFocusInner = document.getElementById("mobile-focus-inner");
const fulltimeFocus    = document.getElementById("fulltime-focus");
const fulltimeFocusInner = document.getElementById("fulltime-focus-inner");
const internshipFocus  = document.getElementById("internship-focus");
const internshipFocusInner = document.getElementById("internship-focus-inner");

function hideAllFocus() {
  webFocus.classList.add("hidden");
  cloudFocus.classList.add("hidden");
  mobileFocus.classList.add("hidden");
  fulltimeFocus.classList.add("hidden");
  internshipFocus.classList.add("hidden");
  contentMain.classList.remove("page-dimmed");
}

function openFocus(section) {
  hideAllFocus();
  section.classList.remove("hidden");
  contentMain.classList.add("page-dimmed");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Service & Job card clicks
webCard.addEventListener("click", () => openFocus(webFocus));
cloudCard.addEventListener("click", () => openFocus(cloudFocus));
mobileCard.addEventListener("click", () => openFocus(mobileFocus));
fulltimeCard.addEventListener("click", () => openFocus(fulltimeFocus));
internshipCard.addEventListener("click", () => openFocus(internshipFocus));

// Close focus strips on outside click
document.addEventListener("click", (event) => {
  if (
    webFocus.classList.contains("hidden") &&
    cloudFocus.classList.contains("hidden") &&
    mobileFocus.classList.contains("hidden") &&
    fulltimeFocus.classList.contains("hidden") &&
    internshipFocus.classList.contains("hidden")
  ) return;

  if (
    webFocusInner?.contains(event.target)    ||
    cloudFocusInner?.contains(event.target)  ||
    mobileFocusInner?.contains(event.target) ||
    fulltimeFocusInner?.contains(event.target) ||
    internshipFocusInner?.contains(event.target) ||
    webCard?.contains(event.target)          ||
    cloudCard?.contains(event.target)        ||
    mobileCard?.contains(event.target)       ||
    fulltimeCard?.contains(event.target)     ||
    internshipCard?.contains(event.target)
  ) return;

  hideAllFocus();
});

// SIDEBAR TOGGLE + AUTO-CLOSE
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebarToggle.classList.toggle("open");
  sidebar.classList.toggle("sidebar-open");
});

// AUTO-CLOSE SIDEBAR ON SCROLL
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (sidebar.classList.contains('sidebar-open')) {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      sidebarToggle.click();
    }, 100);
  }
}, { passive: true });

// AUTO-CLOSE SIDEBAR ON OUTSIDE CLICK
document.addEventListener('click', (event) => {
  if (sidebar.classList.contains('sidebar-open') && 
      !sidebar.contains(event.target) && 
      !sidebarToggle.contains(event.target)) {
    sidebarToggle.click();
  }
});

// ESCAPE KEY CLOSES SIDEBAR
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && sidebar.classList.contains('sidebar-open')) {
    sidebarToggle.click();
  }
});
// AUTO CLOSE SIDEBAR
window.addEventListener('scroll', () => {
  document.querySelector('.sidebar').classList.remove('sidebar-open');
  document.querySelector('.sidebar-toggle').classList.remove('open');
});

document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('.sidebar-toggle');
  if (sidebar.classList.contains('sidebar-open') && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
    sidebar.classList.remove('sidebar-open');
    toggle.classList.remove('open');
  }
});
// AUTO CLOSE SIDEBAR
document.addEventListener('click', function(e) {
  var sidebar = document.querySelector('.sidebar');
  var toggle = document.querySelector('.sidebar-toggle');
  if (sidebar.classList.contains('sidebar-open') && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
    sidebar.classList.remove('sidebar-open');
    toggle.classList.remove('open');
  }
});

window.addEventListener('scroll', function() {
  var sidebar = document.querySelector('.sidebar');
  if (sidebar.classList.contains('sidebar-open')) {
    sidebar.classList.remove('sidebar-open');
    document.querySelector('.sidebar-toggle').classList.remove('open');
  }
});
