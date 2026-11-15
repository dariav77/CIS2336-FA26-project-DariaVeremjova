 const links = document.getElementsByName("menuItem");

  // 2. Loop through each element and attach the event
  links.forEach((link) => {
    link.addEventListener("mouseover", function () {
      this.style.color = "black";
      this.style.fontSize = "24px";
    });

    // Optional: reset on mouseout
    link.addEventListener("mouseout", function () {
      this.style.color = "";
      this.style.fontSize = "14px";
    });
  });