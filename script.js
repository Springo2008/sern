// Toggle between showing and hiding the navigation menu links when user clicks hamburger icon
function functionBurger() {
  const x = document.getElementById("myLinks");
  if (x.classList.contains("show")) {
    x.classList.remove("show");
  } else {
    x.classList.add("show");
  }
}
const homeLink = document.getElementById('homeButton');
homeLink.addEventListener('click', function() {
    
    window.location.href = "index.html"; 
})
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
            
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);