# Worker Connect — Project Documentation PDF

Generate a single downloadable PDF documenting the Worker Connect project for academic/project submission.

## Contents

1. **Cover** — Project title, tagline, one-line description
2. **Project Overview** — Problem, solution, target users
3. **Tech Stack**
   - Frontend: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router, Lucide icons, PWA (vite-plugin-pwa)
   - Backend (planned): Lovable Cloud (Supabase) — Postgres, Auth, Storage
   - Tooling: ESLint, TanStack Query
4. **ER Diagram** — Entities: Worker, Employer, Skill, WorkerSkill, Job, Application, WorkHistory, Verification, Rating (rendered as image)
5. **Database Schema** — SQL CREATE TABLE statements for each entity with PK/FK, types, constraints
6. **Screen Navigation Flow** — Flow diagram of: Landing → Worker/Employer/About/Admin → sub-screens (rendered as image)
7. **Mockup Screens** — Screenshots/descriptions of: Home, Worker Dashboard, Employer Dashboard, Admin Dashboard, About

## Approach

- Use Python `reportlab` for the PDF
- Use `graphviz` (via Python) to render ER diagram and navigation flow as PNGs, embedded in PDF
- Output: `/mnt/documents/WorkerConnect_ProjectDoc.pdf`
- QA: convert PDF to images and visually inspect every page

No changes to project source code.
