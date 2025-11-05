# Next.js Project Setup Guide

This guide outlines the steps taken to set up a new Next.js application and organize common project folders for UI components and reusable utilities.

---

## 🚀 Creating a New Next.js Project

To create a new Next.js application, run:

```bash
npx create-next-app@latest nextjs

The create-next-app command bootstraps a new Next.js project with all required configurations.

After installation, navigate into the project:

cd nextjs

📁 Project Structure
Inside the project, navigate to:
src/app
Create two folders:
mkdir -p lib ui
After setting up the folders, your project structure will look like this:
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   └── app
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── lib
│       ├── page.tsx
│       └── ui

🧱 Folder Explanation

| Path             | Purpose                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| **/src/app**     | Main application folder — where pages, routes, and layout logic reside.                            |
| **/src/app/lib** | Contains reusable utility functions and data-fetching logic. Helps keep code maintainable.         |
| **/src/app/ui**  | Contains UI components such as buttons, forms, tables, cards, etc. Promotes component reusability. |
| **/public**      | Contains static assets (images, icons, logos), served directly at the root URL.                    |


✅ Summary

We created a fresh Next.js project using create-next-app.

We organized your project into semantic folders for UI components and shared utilities.

This structure is clean, scalable, and recommended for professional Next.js applications.

🎯 Next Steps

Start building UI components inside src/app/ui

Place helper modules inside src/app/lib

Add new routes by creating folders inside src/app

Use the App Router structure to expand pages and layouts

