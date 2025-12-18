# Blueprint Component Library — Add New Component Prompt

You are assisting with development on the **Blueprint Component Library**, a monorepo that contains:

1. A **ShadCN-based React component library**
2. A **web application** built using that same library, which serves as:
   - Component documentation
   - API reference
   - Interactive (no-code) playground

This project intentionally excludes brand-specific styling (fonts, colors).  
Your responsibility is to preserve **clean, consistent structure, spacing, sizing, and conventions** across all components.

---

## 🎯 Objective

Add a **new reusable UI component** to the Blueprint Component Library in a way that:

- Aligns with existing component conventions
- Minimally diverges from ShadCN defaults
- Matches the provided **Figma design**
- Includes full documentation and API reference in the web app
- Passes linting, build, and CI checks

---

## 🧠 High-Level Rules

- This is a **single project**: the component library and documentation site evolve together.
- Prefer **minimal changes** to ShadCN components — modify only what is necessary.
- Follow existing patterns in:
  - File structure
  - Naming conventions
  - Props and variants
  - Tailwind usage
- **Do not add unnecessary comments.**  
  Code should be self-explanatory through clear structure, naming, and composition.  
  Add comments **only** when explaining non-obvious logic or intentional deviations.
- Assume future developers (and AI tools) will extend this library — optimize for clarity and consistency.

---

## ✅ Step-by-Step Instructions

### 1. Branch Setup

- Pull the latest `main` branch.
- Create a **new feature branch** named descriptively (e.g. `component/button-group`).

---

### 2. Install Base Component

- Use the ShadCN CLI to install the base component.
- Do **not** reimplement components from scratch.
- Verify the generated files match expected ShadCN output.

---

### 3. Review Figma Design

- Open the corresponding component design in **Figma**.
- Identify:
  - Required variants
  - Sizing differences
  - Spacing, padding, and alignment changes
- Confirm which aspects are **structural** (must be implemented) vs **visual examples** (documentation-only).

---

### 4. Implement the Component

- Modify the ShadCN base component **minimally** to match Figma:
  - Adjust spacing, sizes, layout
  - Add or refine variants if required
- Avoid introducing:
  - Brand colors
  - Fonts
  - Project-specific assumptions
- Ensure props and variants are intuitive and consistent with existing components.

---

### 5. Add Documentation Page

- Create a new documentation route at: `/library/<component-name>`

- This page must include:
- Overview
- Usage examples
- Variant descriptions
- Props / API reference
- Accessibility notes (if applicable)

⚠️ **Important:**  
The structure and content of this page are defined in the prompt: `@COMPONENT_DOC.md`

Use that document as a foundational template for the contents of the documentation.

---

### 6. Validate Integration

- Ensure the component:
  - Is properly exported from the library
  - Renders correctly in the documentation site
  - Matches documented usage examples

---

### 7. Code Quality Checks

- Review all changes for:
  - Consistency with existing components
  - Dead code or unnecessary complexity
- Run linting and formatting.
- Fix any warnings or errors.

---

### 8. Build & CI Readiness

- Ensure the project builds locally without errors.
- Confirm the change will pass CI:
  - Type checks
  - Linting
  - Build verification

---

### 9. Push Changes

- Push the branch to GitHub.
- Do **not** merge into `main`.
- Ensure the branch is ready for review.

---

## 📌 Final Notes

- This component library prioritizes **long-term maintainability** over speed.
- Assume this component will be reused across many future Blueprint projects.
- If unsure, **follow existing patterns** rather than inventing new ones.

Your goal is to make this component feel like it has always belonged in the library.
