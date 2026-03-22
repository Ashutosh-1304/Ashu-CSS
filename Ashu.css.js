// Ashu CSS 
class AshuEngine {
  constructor() {
    this.prefix = "Ashu-";

    this.rules = {

      d: (el, val) => (el.style.display = val),
      flex: (el, val) => {
        if (val === "row") el.style.flexDirection = "row";
        if (val === "col") el.style.flexDirection = "column";
      },
      items: (el, val) => (el.style.alignItems = val),
      justify: (el, val) => (el.style.justifyContent = val),


      p: (el, val) => (el.style.padding = `${val}px`),
      m: (el, val) => (el.style.margin = `${val}px`),
      w: (el, val) => (el.style.width = `${val}px`),
      h: (el, val) => (el.style.height = `${val}px`),

      
      bg: (el, val) => {
        const colorMap = {
          coral: "#ff7f50",
          teal: "#14b8a6",
          slate: "#475569",
        };
        el.style.backgroundColor = colorMap[val] || val;
      },
      text: (el, val) => {
        if (["left", "center", "right"].includes(val)) el.style.textAlign = val;
        else el.style.color = val;
      },

      shadow: (el, val) => {
        if (val === "sm")
          el.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
        if (val === "md")
          el.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
        if (val === "lg")
          el.style.boxShadow =
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
      },
      opacity: (el, val) => (el.style.opacity = parseInt(val) / 100),

      
      border: (el, val) =>
        (el.style.border = val === "none" ? "none" : val.replace(/-/g, " ")),
      rounded: (el, val) =>
        (el.style.borderRadius = `${val}${val === "100" ? "%" : "px"}`),
    };
  }

  applyStyle(el, className) {
    if (!className.startsWith(this.prefix)) return false;

    const stripped = className.replace(this.prefix, "");
    const separatorIndex = stripped.indexOf("-");
    if (separatorIndex === -1) return false;

    const property = stripped.substring(0, separatorIndex);
    const value = stripped.substring(separatorIndex + 1);

    if (this.rules[property]) {
      this.rules[property](el, value);
      return true;
    }
    return false;
  }
}
