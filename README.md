# 🚀 Ashu CSS Engine & Style Playground

A lightweight, utility-first CSS engine built entirely from scratch using Vanilla JavaScript. Instead of writing traditional CSS, you use utility classes (like `ashu-bg-coral` or `ashu-flex-col`), and the engine dynamically parses and applies them directly to the DOM.

This project includes an **Interactive Drag-and-Drop Style Playground** to demonstrate the engine's capabilities in real-time.

## ✨ Features

* **Zero Dependencies:** Built entirely with plain HTML, CSS, and Vanilla JavaScript.
* **Utility-First:** Mimics the behavior of modern frameworks like Tailwind CSS or UnoCSS.
* **Highly Extensible:** Uses a Dictionary Pattern, making it incredibly easy to add new CSS rules.
* **Auto-Cleanup:** Removes parsed utility classes from the DOM after applying styles to keep the markup clean.
* **Interactive Playground:** A drag-and-drop interface to test styles dynamically without writing code.

---

## 🧠 How the Engine Works (The Logic)

The core `AshuEngine` acts as a real-time translator between your HTML classes and the browser's native inline styles. Here is the step-by-step pipeline:

### 1. The DOM Hunt (Scanning)
To ensure high performance, the engine avoids scanning every single node on the page. Instead, it uses `document.querySelectorAll('[class*="ashu-"]')` to specifically target elements that contain our engine's classes.

### 2. The Filter 
Once the elements are selected, the engine iterates through their class lists. It acts as a filter, ignoring standard classes (like `card-container`) and only processing classes that start with the strict prefix: `ashu-`.

### 3. The Parser (String Splitting)
When the engine finds a valid class like `ashu-bg-coral`, it breaks it down:
* **Strips the prefix:** Removes `ashu-`, leaving `bg-coral`.
* **Finds the separator:** Splits the string at the first hyphen (`-`). 
* Everything before the hyphen becomes the **property** (`bg`), and everything after becomes the **value** (`coral`).

### 4. The Dictionary Pattern (The Magic Rulebook)
Instead of relying on massive, hard-to-maintain `switch` statements, the engine uses a Dictionary Pattern object (`this.rules`). 
* The engine takes the parsed property (`bg`) and looks it up in the dictionary.
* It finds the corresponding arrow function: `(el, val) => el.style.backgroundColor = val`.
* The element and the value are passed into the function, instantly applying the style. 
* *Note: This makes scaling the engine effortless. Adding a new utility just requires adding one line to the dictionary.*

### 5. The Cleanup (Garbage Collection)
After the inline style is successfully applied, the engine removes the original `ashu-*` class from the element's class list. This keeps the DOM inspector clean and prevents the engine from redundantly re-parsing classes if it runs multiple times.

---

## 🚀 Getting Started

Since this project has no build steps or dependencies, running it is instantaneous.

1. Clone the repository:
   ```bash
   git clone [https://github.com/Ashutosh-1304/Ashu-CSS.git](https://github.com/Ashutosh-1304/Ashu-CSS.git)

2. Navigate to the project directory.

3. Open index.html directly in any modern web browser.

🛠️ Adding Custom Rules

Want to add your own utility? Just open the JavaScript file and add a new key-value pair to the this.rules dictionary inside the AshuEngine constructor.

JavaScript
this.rules = {
  // Existing rules...
  'p': (el, val) => el.style.padding = `${val}px`,
  
  // Add your custom rule here!
  // Example: ashu-blur-5
  'blur': (el, val) => el.style.filter = `blur(${val}px)`, 
};
🎮 Using the Playground

Open index.html.

Look at the Class Palette on the left side of the screen.

Click and drag any utility class block (e.g., ashu-rounded-100).

Drop it into the dashed Target Box on the right.

Watch the engine parse the class and apply the style instantly!

🤝 Contributing
Feel free to fork this project and add your own wild utilities, responsive breakpoints, or hover states! Pull requests are always welcome.