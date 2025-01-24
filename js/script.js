document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY) { 
      navbar.classList.add("scrolled"); //this line adds the class "scrolled" to the navbar when the page is scrolled
    } else {
      navbar.classList.remove("scrolled"); //this line removes the class "scrolled" from the navbar when the page is not scrolled
    }
  });

  
  const button = document.querySelector(".navbar-toggler");
  button.addEventListener("click", function () { //this line listens for a click on the page
    const navButton = document.querySelector(".navbar"); //this line selects the navbar
        navButton.classList.add("clicked"); //this line adds the class "clicked" to the navbar when the page is clicked
    
  });

  