const toggleSwitch = document.getElementById("themeSwitch");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches) {
    toggleSwitch.checked = true;
    document.body.classList.toggle("dark");
}
// Listen for a change on switch
toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked == true){
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } 
    else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
});


// Tabs
function openTab(evt, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


let expandedIndex = null; // Track the expanded index, initially none

function toggleExpand(index) {
  const destinations = document.querySelectorAll('.project');

  destinations.forEach((destination, i) => {
    if (i === index) {
      destination.style.width = '500px'; // Expand the clicked/hovered destination
    } else {
      destination.style.width = '250px'; // Collapse all others
    }
  });

  // Update the expandedIndex
  expandedIndex = index;
}

// Event listener for hover
function addHoverEffect() {
  const destinations = document.querySelectorAll('.project');
  destinations.forEach((destination, index) => {
    destination.addEventListener('mouseenter', () => toggleExpand(index));
    destination.addEventListener('click', () => toggleExpand(index)); // Allow click to expand
  });
}

// Ensure no expanded element on page load (optional)
document.addEventListener('DOMContentLoaded', () => {
  toggleExpand(0); // Optionally expand the first destination on load
  addHoverEffect();
});