# Skill Shoot

[Live Demo](https://skill-shoot-project.vercel.app/) • *Deployed on Vercel*

---

[![Deployment](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge\&logo=vercel)](https://skill-shoot-project.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square\&logo=next.js)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square\&logo=tailwindcss)](#)
[![Swiper](https://img.shields.io/badge/Swiper-Carousel-007ACC?style=flat-square)](#)
[![React Icons](https://img.shields.io/badge/React--Icons-20232A?style=flat-square\&logo=react)](#)

---

## 🚀 Project Overview

**Skill Shoot** is a modern, responsive learning / course landing project built with **Next.js 15 (app router)** and **Tailwind CSS**. It includes common landing-site features like a header with logo/title, navigation, testimonial carousel (Swiper), custom 404 page, and clean UI styling using a three-color palette.

**Live:** [https://skill-shoot-project.vercel.app/](https://skill-shoot-project.vercel.app/)

---

## 🎨 Color Palette

* Primary: `#245D51` (Deep Green)
* Accent: `#CB8461` (Warm Orange)
* Surface: `#F2E7DB` (Soft Cream)

---

## 🧩 Tech Stack

* **Next.js 15** (App Router)
* **React**
* **Tailwind CSS**
* **Swiper** (Carousel: Navigation / Pagination / Autoplay)
* **react-icons** (Fi, Ai used)
* **Vercel** (Deployment)

---

## ✨ Key Features

* Responsive landing pages and header with logo + title
* Testimonial carousel using **Swiper** with centered slides, autoplay, pagination and custom navigation
* Active/inactive card visual states (active card: white bg; inactive cards: transparent + reduced scale)
* Custom `app/not-found.js` (404) styled with the project color palette
* Accessible and keyboard-friendly controls

---

## 📁 Project Structure (example)

```
root/
├─ app/
│  ├─ layout.js
│  ├─ page.js
│  ├─ not-found.js
│  └─ components/
│     ├─ Header.js
│     └─ ReviewsSwiper.js
├─ public/
│  ├─ logo.png
│  └─ favicon.ico
├─ styles/
│  └─ globals.css
├─ package.json
└─ tailwind.config.js
```

---

## 💻 Run Locally

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn
```

3. **Start dev server**

```bash
npm run dev
# opens at http://localhost:3000
```

4. **Build for production**

```bash
npm run build
npm run start
```

---

## 🔧 Notes / Gotchas

* *Favicon & metadata:* Place `logo.png` or `favicon.ico` in `/public` and set `export const metadata = { icons: { icon: '/logo.png' } }` inside `app/layout.js`.
* *Tailwind custom sizes:* If you use custom sizes like `w-120` or `p-22`, prefer Tailwind arbitrary values (e.g. `w-[420px]`, `p-22` if configured) or add them in `tailwind.config.js`.
* *External image links:* If an external host blocks hotlinking, host images inside `/public` or use a reliable CDN.

---

## ✅ How to push README to GitHub (full process)

1. Create a GitHub repo (name it `skill-shoot` or similar).
2. If you don't already have a local repo, initialize:

```bash
git init
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. To update README:

```bash
# edit README.md locally
git add README.md
git commit -m "docs: add README"
git push
```

---

## 🛫 Deploy to Vercel (quick)

1. Go to [https://vercel.com/](https://vercel.com/) and sign in.
2. Import your GitHub repository -> Vercel will detect Next.js
3. Configure environment variables (if any) and click Deploy.
4. Your site will be available at `https://<project>.vercel.app` (or a custom domain).

---

## 📸 Screenshots / Demo

*Add some screenshots or an animated GIF here.*

```
![Homepage](./public/screenshot-home.png)
![Reviews](./public/screenshot-reviews.png)
```

---

## 🤝 Contributing

PRs are welcome. Please follow this flow:

1. Fork the repo
2. Create a branch `feat/short-description`
3. Commit small changes with clear messages
4. Make a pull request to `main` with a description

---

## 📬 Contact

Created by **Md Asif** — feel free to reach out via GitHub profile.

---

## ⚖️ License

This project is open-source and available under the **MIT License**.

---

*Generated README for Skill Shoot — customize screenshots, repo URL, and any env variables as needed.*
