# Animated-Storybook

#  Animated Storybook SPA

Welcome to **Animated Storybook**, a Single Page Application (SPA) that lets users browse, read, and interact with a collection of animated stories! This app is built using HTML, CSS, and JavaScript, and communicates with a mock API via `json-server`.

---

## Features

- * View a list of story titles
- * Click to view detailed story content with title, author, and animated visuals
- * Add a new story using a form
- * Edit existing stories directly in the detail view
- * Delete stories from the list and API
- * SPA behavior — no page reloads
- * Uses array methods like `forEach` and `map` for rendering and updates
- * Interactivity through multiple event listeners (click, submit, etc.)

---

##  Live Demo

> _Run this project locally with the instructions below._

---

##  File Structure

```
animated-storybook/
├── index.html
├── css/
│   └── styles.css
├── src/
│   └── index.js
└── db.json
```

---

##  Requirements

- Node.js (v18 or higher recommended)
- npm
- [json-server](https://www.npmjs.com/package/json-server)
- Live Server (VS Code extension or any live server)

---

##  Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/animated-storybook.git
   cd animated-storybook
   ```

2. **Install json-server**
   ```bash
   npm install -g json-server
   ```

3. **Start the mock API**
   ```bash
   json-server --watch db.json
   ```

4. **Run the frontend**
   - Open `index.html` in Live Server **OR**
   ```bash
   live-server
   ```

5. Navigate to `http://127.0.0.1:5500` or the port shown by Live Server.

---

##  User Stories (MVP)

- **As a reader**, I want to see all available story titles so that I can choose which one to read.
- **As a reader**, I want to click a story and view its full details so that I can enjoy reading it.
- **As a contributor**, I want to submit a new story so that others can enjoy my content.

---

##  Advanced Features

-  Edit story content (title and body)
-  Delete a story from the list
-  Automatically show the first story on page load
-  Dark mode toggle *(Stretch Goal Idea)*

---

##  Technical Highlights

- Uses `fetch()` to interact with the `json-server` RESTful API.
- DOM is dynamically updated using `createElement`, `appendChild`, and `innerHTML`.
- Multiple event listeners:
  - `click` for selecting and deleting stories
  - `submit` for creating and editing stories
  - `change` for possible future features (e.g. theme toggle)
- Organized and DRY JavaScript code using modular functions

---

##  Example JSON Format (`db.json`)

```json
{
  "stories": [
    {
      "id": 1,
      "title": "The Magic Forest",
      "author": "Jane Doe",
      "content": "Once upon a time, in a forest that sparkled with magic...",
      "image": "https://example.com/forest.png"
    }
  ]
}
```

---

##  Future Ideas

- Add login functionality
- Save favorite stories using localStorage
- Theme switching (dark/light mode)
- Sound/music integration for each story

---

##  Author

**Jared Kiprop**  
Student at Moringa School — SDF-FT14AP1  
[GitHub Profile](https://github.com/jrd-k)

