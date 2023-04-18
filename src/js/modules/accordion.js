export default function accordion() {
  if (document.querySelectorAll('.accordion-item')) {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header");
      const content = item.querySelector(".accordion-content");
      const arrow = header.querySelector(".arrow");

      header.addEventListener("click", () => {
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            otherItem.querySelector(".accordion-content").style.maxHeight = null;
            otherItem.querySelector(".arrow").classList.remove("arrow--active");
          }
        });

        item.classList.toggle("active");
        arrow.classList.toggle("arrow--active");

        if (item.classList.contains("active")) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  }
}
