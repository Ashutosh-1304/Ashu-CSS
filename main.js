// ==========================================
// 2. PLAYGROUND INTERACTION LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const Ashu = new AshuEngine();
  const draggables = document.querySelectorAll(".draggable-class");
  const targetBox = document.getElementById("target-box");
  const appliedList = document.getElementById("applied-list");
  const resetBtn = document.getElementById("reset-btn");

  // Setup Draggables
  draggables.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.getAttribute("data-class"));
    });
  });

  // Setup Drop Zone
  targetBox.addEventListener("dragover", (e) => e.preventDefault());

  targetBox.addEventListener("dragenter", (e) => {
    e.preventDefault();
    targetBox.classList.add("drag-over");
  });

  targetBox.addEventListener("dragleave", () =>
    targetBox.classList.remove("drag-over"),
  );

  targetBox.addEventListener("drop", (e) => {
    e.preventDefault();
    targetBox.classList.remove("drag-over");

    const droppedClass = e.dataTransfer.getData("text/plain");

    if (droppedClass) {
      // Apply the style via the engine
      const success = Ashu.applyStyle(targetBox, droppedClass);

      // If the engine recognized the rule, update the text label
      if (success) {
        // Check if class is already in the list to avoid duplicates
        if (!appliedList.innerText.includes(droppedClass)) {
          appliedList.innerText += `${droppedClass}\n`;
        }
      }
    }
  });

  // Reset Box
  resetBtn.addEventListener("click", () => {
    targetBox.removeAttribute("style");
    appliedList.innerText = "";
  });
});