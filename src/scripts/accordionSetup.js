function accordionSetup() {
    const accordionMenus = document.querySelectorAll(".accordion");
    accordionMenus.forEach((accordionMenu) => {
      const accordionButton = accordionMenu.querySelector(".accordion__button");
      const accordionChevron = accordionMenu.querySelector(".accordion__chevron");
      const accordionContent = accordionMenu.querySelector(".accordion__content");
  
      if (accordionButton && accordionContent && accordionChevron) {
        accordionButton.addEventListener("click", (event) => {
          if (!accordionMenu.classList.contains("active")) {
            accordionMenu.classList.add("active");
            accordionButton.setAttribute("aria-expanded", "true");

            accordionContent.classList.remove("hidden");
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            accordionChevron.classList.add("rotate-180");
          } else {
            accordionMenu.classList.remove("active");
            accordionButton.setAttribute("aria-expanded", "false");
            
            accordionContent.style.maxHeight = "0px";
            accordionChevron.classList.remove("rotate-180");
            setTimeout(() => {
              accordionContent.classList.add("hidden");
            }, 300);
          }
          event.preventDefault();
          return false;
        });
      }
    });
  }
  
 
  accordionSetup();
  
  // Ejecutar después de la navegación de transiciones de vista
  document.addEventListener("astro:after-swap", accordionSetup);
  