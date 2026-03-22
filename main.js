
// PLAYGROUND LOGIC

document.addEventListener("DOMContentLoaded", () => {
  const Ashu = new AshuEngine();
  const draggables = document.querySelectorAll(".draggable-class");
  const targetBox = document.getElementById("target-box");
  const appliedList = document.getElementById("applied-list");
  const resetBtn = document.getElementById("reset-btn");
  draggables.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.getAttribute("data-class"));
    });
  });

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
      const success = Ashu.applyStyle(targetBox, droppedClass);
      if (success) {
        if (!appliedList.innerText.includes(droppedClass)) {
          appliedList.innerText += `${droppedClass}\n`;
        }
      }
    }
  });
  resetBtn.addEventListener("click", () => {
    targetBox.removeAttribute("style");
    appliedList.innerText = "";
  });
});