// Dark / light mode
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2"); // Nuevo botón para alternar el tema
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

// Set the initial theme based on localStorage
if (currentTheme === "dark") {
  setDarkMode();
} else {
  setLightMode();
}

// Add event listeners for theme toggle
if (btn) {
  btn.addEventListener("click", setTheme);
}

if (btn2) {
  btn2.addEventListener("click", setTheme); // Añadido evento para el nuevo botón, si existe
}

// Function to toggle between light and dark themes
function setTheme() {
  const currentTheme = document.body.getAttribute("theme");
  
  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

// Function to set dark mode
function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  // Update images inside <picture> and simple images
  updateImages('dark');
}

// Function to set light mode
function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  // Update images inside <picture> and simple images
  updateImages('light');
}

// Function to update images
function updateImages(mode) {
  themeIcons.forEach((icon) => {
    const picture = icon.closest('picture');
    if (picture) {
      // Update sources for <picture> elements
      updatePictureSources(picture, mode);
    } else {
      // Update src for simple images
      icon.src = icon.getAttribute(`src-${mode}`);
    }
  });
}

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