# Technical Specifications and Design Guidelines
## Project: Personal Blog / Digital Magazine (Santiago)

---

### 1. Summary of the Creative Vision
The blog does not aim to be a traditional informational or editorial site. Santiago conceives the project from an aesthetic and artistic perspective ("if it were a painting, it would be unhangable -> unhung / unhung -> something erratic").

The visual identity will be inspired by reference publications such as **3AM, JotDown, Interview, and Vulture**, combining a distinctive typographic direction, a contrasting color palette, and an immersive reading experience.

---

### 2. Visual Identity and Design System

#### Typography
* **General Text / Body:** All in pure black (`#000000`).

* **UI & Navigation:** Grotesque-style typography for the navigation bar, sidebar elements, and interface elements.

* **General Content Body:** *Helvetica* (or clean sans-serif alternatives).

* **Article Details:** *Serif* typography to emphasize the editorial and essay-like nature of the article.

#### Color Palette
* **Navigation / Header / Sidebar:**

* Yellow: `#D4A017`

* Quarry Brown: `#C4A882`
* **Reading Area / Article:**

* Base Gray Background: `#E8E4DC`

* Accents (Center Mosaic Style): Red `#9B2A2A`

---

### 3. Architecture and Frontend (Page Structure)

* **Main Navbar:**

* Links: `Home`, `About`, `Contact`.

* Functional keyword search.

* Stylized with *Grotesque* typography and yellow/brown accents.

* **Home Page:**

* Features a "Feed" of "Pieces" (entries/articles).

* Each piece includes its technical data sheet, either visible or highlighted.

* **Piece/Article View:**

* Sidebar visible exclusively within each piece.

* Filtering options and chronological order (newest to oldest).

* Button to share a direct link via **WhatsApp**.

* Interaction/comments section: Redirection or seamless integration to a short post on **Instagram**.

* **Footer:**

* Copyright information and design credits.

---

### 4. Technical Scope and Infrastructure (Cost $0 USD)

#### Publication Model and Role
* **Sole Author:** Santiago is the sole creator and administrator of the content.

* **Simplified Authentication:** Access the editing interface via a secure link or *magic token* without the need for complex user management.

#### Content Editor (CMS)
* **Writing Experience:** Write directly in the browser with **auto-save** functionality and real-time preview (*live preview*) of the visual result before publishing.

* **Image Management:** A maximum of 1 to 2 images per post. Processing and implementation of automatic conversion to **.WebP** format for optimized file size and speed.

#### Hosting Infrastructure
* **Hosting and Infrastructure:** Vercel (Hobby Plan / Free) with static page generation (Jamstack).

* **Recommended Headless CMS:** Sanity.io (Free Plan) for its native support for real-time preview, simple authentication, and automatic image optimization.

---

### 5. Next Steps
1. Final approval of the specification file by Santiago.

2. Definition of the frontend framework (e.g., Next.js / Astro) to implement the rendering engine and font support.

3. Configuration of the schema in Sanity.io with the editor fields and optimization rules for `.webp`.

4. Layout of the design system (Colors `#D4A017`, `#C4A882`, `#E8E4DC`, `#9B2A2A` and typographic hierarchy).