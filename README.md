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

**Skill Shoot** is a modern, responsive learning / course landing project built with **Next.js 15 (app router)** and **Tailwind CSS**. It includes a **basic landing page** layout with header, footer, and multiple sections:

* **Header**: Logo, Navigation (Home, Course, Subscribe, About, Testimoni)
* **Banner**: Hero section with CTA
* **Offers**: Highlighted offers or deals
* **Exist**: Features or why choose us
* **Popular SkillShoot**: Highlight popular courses or skills
* **Improve**: Benefits or skill improvement info
* **Subscribe Page**: Newsletter or subscription plans
* **Footer**: Contact info, social links, copyright

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

* Fully responsive landing page
* Hero banner with CTA buttons
* Offers and popular course sections
* Improve section showcasing benefits
* Testimonial carousel with Swiper
* Active/inactive card visual states
* Custom 404 page styled with project color palette
* Accessible and keyboard-friendly navigation

---

## 📁 Project Structure (example)

```
root/
├─ app/
│  ├─ layout.js
│  ├─ page.js
│  ├─ not-found.js
│  └─ components/
│     ├─ Banner.jsx
│     ├─ Company.jsx
│     ├─ Offers.jsx
│     ├─ Exist.jsx
│     ├─ PopularSkillShoot.jsx
│     ├─ Improve.jsx
│     ├─ Subscribe.jsx
│     ├─ Header.jsx
│     └─ Footer.jsx
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
git clone https://github.com/SojiburAsif/Skill-Shoot-Project/

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

* Use Tailwind arbitrary values for widths and paddings if you need custom sizes (e.g., `w-[420px]`, `p-22`).
* Place static images in `/public` for proper loading.
* Swiper navigation and pagination are fully configured for desktop and mobile.

---

## 🛫 Deploy to Vercel

1. Go to [https://vercel.com/](https://vercel.com/) and sign in.
2. Import your GitHub repository → Vercel will auto-detect Next.js
3. Configure env variables if needed and click Deploy
4. Live URL: `https://skill-shoot-project.vercel.app`

---


![Homepage](./public/screenshot-home.png)
![Reviews](./public/screenshot-reviews.png)
```

---

## 🤝 Contributing

PRs are welcome:

1. Fork the repo
2. Create a branch `feat/short-description`
3. Commit changes with descriptive messages
4. Make a PR to `main`

---

## 📬 Contact

Created by **Sojibur Rahman Asif** — feel free to reach out via GitHub profile.

---

## ⚖️ License

This project is open-source under the **MIT License**.

---

*Generated README for Skill Shoot — update screenshots, repo URL, and components list as you develop further.*
