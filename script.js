document.addEventListener('DOMContentLoaded', function () {
  const headerTitle = document.querySelector('.header-title');
  const header = document.querySelector('#header');

  // New event listener for .app-skills-exp-item elements
  const appSkillsItems = document.querySelectorAll(".app-skills-exp-item");

  appSkillsItems.forEach((item) => {
    const tooltipText = item.getAttribute("data-tooltip");

    if (tooltipText) {
      item.addEventListener("mouseover", () => {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.innerText = tooltipText;
        item.appendChild(tooltip); // Append the tooltip to the .app-skills-exp-item

        item.addEventListener("mouseout", () => {
          item.removeChild(tooltip); // Remove the tooltip when the mouse leaves the .app-skills-exp-item
        });
      });
    }
  });
});