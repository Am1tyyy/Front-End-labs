function toggleAccordion(element) {
  const header = element;
  const content = header.nextElementSibling;

  document.querySelectorAll(".accordion-header").forEach((item) => {
    if (item !== header) {
      item.classList.remove("active");
      item.nextElementSibling.style.display = "none";
    }
  });

  const isOpen = content.style.display === "block";
  if (isOpen) {
    content.style.display = "none";
    header.classList.remove("active");
  } else {
    content.style.display = "block";
    header.classList.add("active");
  }
}
function toggleMenu() {
  const menu = document.querySelector('.navbar-menu');
  menu.classList.toggle('active');
}
