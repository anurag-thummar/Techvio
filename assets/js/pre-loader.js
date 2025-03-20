window.addEventListener("load", function () {

  const content = document.getElementById("loaderSlide");
  content.style.display = "block";
  
  // Enable page scrolling
  document.body.style.overflow = "auto";

  // Hide the loaderSlide after a 1-second delay
  setTimeout(function() {
    document.getElementById("loaderSlide").style.display = "none";
  }, 2000); 
});



