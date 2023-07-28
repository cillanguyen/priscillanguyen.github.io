document.addEventListener('DOMContentLoaded', function () {
  const headerTitle = document.querySelector('.header-title');
  const header = document.querySelector('#header');

  function createLines() {
    const beforeLine = document.createElement('div');
    beforeLine.classList.add('line');
    headerTitle.appendChild(beforeLine);

    const afterLine = document.createElement('div');
    afterLine.classList.add('line');
    headerTitle.appendChild(afterLine);

    return [beforeLine, afterLine];
  }

  function updateLinesPosition() {
    const headerTitleRect = headerTitle.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();
    const leftPosition = Math.max(headerTitleRect.left - headerRect.left, 0);
    const rightPosition = Math.max(headerRect.right - headerTitleRect.right, 0);
    const [beforeLine, afterLine] = createLines();

    beforeLine.style.left = `${leftPosition + 10}px`;
    afterLine.style.right = `${headerRect.right - headerTitleRect.right + 10}px`;
  }

  // Update lines position when the page loads and when it's scrolled
  updateLinesPosition();
  window.addEventListener('scroll', updateLinesPosition);

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