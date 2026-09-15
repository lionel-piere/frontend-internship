# frontend-internship

Frontend internship exercises at Tito Solutions

## Days 1-2 Exercise: Personal Profile Page

This repository contains the Days 1-2 exercise for the Tito Solutions Frontend Internship curriculum. The objective of this exercise is to build an approachable, accessible personal developer profile page using modern web standards, practice Git branching and pull request workflows, and set up a clean, maintainable project structure for mentor review.

---

## Technologies Used

- **React 18**: UI component library for building reusable interfaces.
- **TypeScript**: Static typing for data models and component props.
- **Vite 6**: Fast frontend development server and production bundler.
- **CSS (Vanilla)**: Clean, custom CSS with design tokens, responsive layouts, and accessibility focus states.
- **ESLint 9**: Code linting for code quality and React best practices.
- **Prettier**: Automated and consistent code formatting.

---

## Prerequisites

- **Node.js**: Version 18+ (tested on Node v24)
- **npm**: Version 9+ (tested on npm v11)
- **Git**: Configured with your developer credentials

---

## Installation & Setup

1. **Clone the repository and switch to the feature branch**:

   ```bash
   git clone https://github.com/lionel-piere/frontend-internship.git
   cd frontend-internship
   git checkout feat/personal-profile-page
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Runs TypeScript type checking (`tsc`) and compiles the production bundle into `dist/`.
- `npm run lint`: Runs ESLint to check for code quality and syntax issues across all source files.
- `npm run format`: Formats all source files with Prettier.
- `npm run format:check`: Verifies that all files conform to Prettier formatting guidelines.

---

## Project Structure

```
frontend-internship/
├── public/                 # Static assets
├── src/
│   ├── components/         # Modular, semantic React components
│   │   ├── Header.tsx      # Sticky navigation bar with avatar and section links
│   │   ├── Hero.tsx        # Hero section with introduction and CTA link
│   │   ├── About.tsx       # Background, education, and assignment context
│   │   ├── Skills.tsx      # Project exposure and learning goals
│   │   ├── ProjectCard.tsx # Reusable card component for selected projects
│   │   ├── Projects.tsx    # Grid displaying personal projects and prototypes
│   │   ├── Experience.tsx  # Volunteer and media production experience
│   │   ├── Education.tsx   # Academic background, certifications, and languages
│   │   └── Footer.tsx      # Accessible footer
│   ├── data/
│   │   └── profile.ts      # Typed profile data source (all content is stored here)
│   ├── styles/
│   │   └── index.css       # Design tokens, typography, layout, and responsive CSS
│   ├── App.tsx             # Main application layout assembler
│   └── main.tsx            # React application entry point
├── .gitignore              # Git ignore rules for node_modules, build outputs, and caches
├── .prettierignore         # Files ignored by Prettier
├── .prettierrc             # Prettier formatting rules
├── eslint.config.js        # ESLint flat configuration
├── index.html              # HTML entry point with metadata and Google Font link
├── package.json            # Project manifest, dependencies, and npm scripts
├── tsconfig.json           # Root TypeScript configuration
├── tsconfig.app.json       # Application TypeScript configuration
├── tsconfig.node.json      # Tooling/Vite TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## Where to Edit Profile Content

All personal profile information (name, role, about paragraphs, technical skills, projects, experience, certifications, and languages) is strictly decoupled from presentation components and stored in:

```
src/data/profile.ts
```

To update any text or add a new project, edit `src/data/profile.ts`. The TypeScript interface `ProfileData` ensures all fields remain type-safe and validated at build time.

---

## Mentor Review & Pull Request Flow

1. **Verify your local branch**:
   Ensure you are working on the feature branch:

   ```bash
   git branch --show-current
   # Expected: feat/personal-profile-page
   ```

2. **Run all quality checks**:

   ```bash
   npm run format:check
   npm run lint
   npm run build
   ```

3. **Stage, commit, and push changes**:

   ```bash
   git add .
   git commit -m "feat: implement personal profile page for Days 1-2 exercise"
   git push -u origin feat/personal-profile-page
   ```

4. **Submit Pull Request**:
   - Open GitHub and navigate to the repository.
   - Click **Compare & pull request** from `feat/personal-profile-page` into `main`.
   - Add a descriptive PR summary detailing the components built and verification results.
   - Request mentor review.
