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
