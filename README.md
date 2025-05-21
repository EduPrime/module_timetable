# Timetable Module 🕒🚀

**Welcome!**  
Your new _Timetable Module_ is here to make life in the EduPrime ecosystem a breeze. Built with Ionic + Vue.js and packed with AI magic, you'll never miss a class again.

## ⚙️ Features

- **Schedule Management:** View and tweak weekly class timetables in a snap.
- **AI Assistance:** Chat with the AI for smart rescheduling suggestions.
- **Responsive UI:** Clean, mobile-first design powered by Ionic and Vue.

## 🚀 Getting Started

1. **Clone** the main project and install dependencies:
   ```bash
   git clone --recurse-submodules https://github.com/EduPrime/app.git -b schedule-poc
   cd app
   npm install
 

2. **Initialize & update** all modules by running our custom script:

   ```bash
   bun update-submodules.ts
   ```
3. **Install** and **serve** the Timetable module independently:

   ```bash
   cd src/modules/timetable
   npm install
   npm run serve
   ```

## 🔧 Working with the Module

* Test standalone:

  ```bash
  cd modules/timetable && npm run serve
  ```
* To **update** the submodule:

  ```bash
  cd modules/timetable
  git pull origin main
  cd ../..
  git add modules/timetable
  git commit -m "Update Timetable Module to latest"
  ```
* Make changes directly in `modules/timetable`, commit & push there, then bump the ref in the main project.

## 🛠️ Project Generation

This was whipped up with the EduPrime Generator—your shortcut to modern school tools.

## 🧩 Módulo Arquitetura

The project manages "modules" in a clean, automated way, integrating them seamlessly with Vite and Vue Router:

1. **Organization**

   * Each functional domain (e.g., `ged`, `institution`, `school-management`, etc.) lives under `src/modules/`.
   * A module can include its own components, services, views, `routes.ts`, and an entry point `index.ts`.
   * Git submodules are used for modules needing separate versioning and reuse.

2. **Automatic Module Loading (Vite + Vue)**

   In `src/main.ts`:

   ```ts
   const modules = import.meta.glob('./modules/*/index.ts', { eager: true })
   for (const path in modules) {
     const mod: any = modules[path]
     if (mod.default?.install) app.use(mod.default)
   }
   ```

   This pattern lets each module register its components or plugins globally if needed.

3. **Dynamic Module Routes**

   In `src/router/index.ts`:

   ```ts
   const moduleRoutes = import.meta.glob('../modules/**/routes.ts', { eager: true })
   const dynamicRoutes: CustomRouteRecordRaw[] = []
   for (const path in moduleRoutes) {
     dynamicRoutes.push(...moduleRoutes[path].default)
   }
   ```

   Each module defines its own routes, automatically aggregated by the main router.

4. **Custom Vite Plugin**

   A `vite-plugin-routes.ts` can generate a virtual file containing all module routes, further simplifying integration.

5. **Git Submodules**

   Modules that are separate repos appear as submodules in `.gitmodules`, enabling decoupled development and independent version control.

## 🤝 Contributing

Open issues or PRs in the timetable repo. All feedback and improvements are welcome!

## 📜 License

MIT © EduPrime

---

Hermes Alves 😎

