// Get references to theme toggle buttons and icons from the DOM
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

// Set the initial theme based on saved preference in localStorage
if (currentTheme === "dark") {
  setDarkMode();
} else {
  setLightMode();
}

// Add click event listeners to toggle buttons for switching themes
if (btn) {
  btn.addEventListener("click", setTheme);
}

if (btn2) {
  btn2.addEventListener("click", setTheme);
}

// Toggle the current theme between light and dark
function setTheme() {
  const currentTheme = document.body.getAttribute("theme");
  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

// Apply dark theme and update images/icons accordingly
function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");
  updateImages('dark');
}

// Apply light theme and update images/icons accordingly
function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");
  updateImages('light');
}

// Update all theme-dependent images and icons
function updateImages(mode) {
  themeIcons.forEach((icon) => {
    const picture = icon.closest('picture');
    if (picture) {
      updatePictureSources(picture, mode);
    } else {
      icon.src = icon.getAttribute(`src-${mode}`);
    }
  });
}

// Update <picture> element sources for theme-specific images
function updatePictureSources(picture, mode) {
  picture.querySelectorAll('source').forEach((source) => {
    const srcLight = source.getAttribute('src-light');
    const srcDark = source.getAttribute('src-dark');
    
    if (srcLight && srcDark) {
      source.srcset = mode === 'dark' ? srcDark : srcLight;
    } else {
      console.warn('Missing src-light or src-dark attribute on source:', source);
    }
  });

  const img = picture.querySelector('img');
  if (img) {
    const imgSrc = img.getAttribute(`src-${mode}`);
    if (imgSrc) {
      img.src = imgSrc;
    } else {
      console.warn('Missing src-light or src-dark attribute on img:', img);
    }
  }
}

// Render obfuscated email in contact section to protect against bots 
window.addEventListener("DOMContentLoaded", () => {
  const emailContainer = document.getElementById("email");

  if (emailContainer) {
    const user = "hi";
    const domain = "byaxel.dev";
    const email = `${user}@${domain}`;
    emailContainer.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  }
});