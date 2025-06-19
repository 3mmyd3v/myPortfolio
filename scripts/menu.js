
  // const hamburger = document.getElementById("menuIconstyle");
  // const menuContainer = document.querySelector(".menuContainer");
  // const closeICon = document.getElementById("closeIcon");

  
  // hamburger.addEventListener('click', () => {
  //   hamburger.classList.toggle("nonactive");
  //   closeICon.classList.toggle("active");

  //   menuContainer.classList.toggle("active");
  // });


  // closeICon.addEventListener("click", () => {
  //   hamburger.classList.toggle("active");
  //   closeICon.classList.toggle("nonactive");

  //   menuContainer.classList.toggle("nonactive");
  // });


  // const hamburger = document.getElementById("menuIconstyle");
  // const menuContainer = document.querySelector(".menuContainer");
  // const closeIcon = document.getElementById("closeIcon");

  // // Open menu
  // hamburger.addEventListener("click", () => {
  //   menuContainer.classList.add("active");
  //   hamburger.style.display = "none";
  //   closeIcon.style.display = "block";
  // });

  // // Close menu
  // closeIcon.addEventListener("click", () => {
  //   menuContainer.classList.remove("active");
  //   hamburger.style.display = "block";
  //   closeIcon.style.display = "none";
  // });

  const hamburger = document.getElementById("menuIconstyle");
  const menuContainer = document.querySelector(".menuContainer");
  const closeIcon = document.getElementById("closeIcon");

  // Open menu
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent this from triggering the document click
    menuContainer.classList.add("active");
    hamburger.style.display = "none";
    closeIcon.style.display = "block";
  });

  // Close menu
  function closeMenu() {
    menuContainer.classList.remove("active");
    hamburger.style.display = "block";
    closeIcon.style.display = "none";
  }

  // Close when clicking anywhere — including inside menuContainer
  document.addEventListener("click", function () {
    if (menuContainer.classList.contains("active")) {
      closeMenu();
    }
  });

  // Close when clicking the close icon
  closeIcon.addEventListener("click", function () {
    closeMenu();
  });
  