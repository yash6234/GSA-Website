# Gandhinagar Sports Academy (GSA)
## React + Tailwind – Production Website Development Guide

---

## 1. Project Overview

This project is to **design and build a production‑ready website** for **Gandhinagar Sports Academy (GSA)**.

- 🔗 **Reference website (study only, DO NOT copy):** https://www.gandhinagarsportsacademy.com/
- 🎯 Goal: Build a **better, cleaner, more modern** version with improved UX and structure
- ❌ Not a WordPress‑style drag‑and‑drop site
- ✅ Fully custom, developer‑crafted UI

### Target Users
- Parents (decision‑makers)
- Students / Athletes

Design and content decisions should always prioritize **clarity, trust, and ease of enquiry**.

---

## 2. Tech Stack

- **Framework:** React.js (Vite or CRA)
- **Language:** JavaScript (preferred)
- **Styling:** Tailwind CSS
- **Icons:** SVG icons or Lucide / Heroicons
- **Forms:** Client‑side only (no backend)

---

## 3. Scope (Only These Pages)

### ✅ Pages to Build

1. **Home**
2. **About Academy**
   - Mentors / Coaches statements
   - Academy timeline
3. **Programs / Sports**
4. **Admissions / Enquiry** (Form only)
5. **Contact**

❌ No login, dashboards, or admin panels

---

## 4. Design & UX Expectations

### Core Principles

- 📱 **Mobile‑first design**
- 🧼 Clean, minimal, sports‑focused UI
- 🧠 Clear information hierarchy
- ⚡ Fast and lightweight
- 🎯 CTA‑driven (Enquiry focused)

### Visual Direction

- Strong typography
- Sports‑inspired color palette
- Large sections, breathing space
- Real images (training, students, grounds)
- No heavy gradients or gimmicks

---

## 5. Layout Guidelines

### Max Width Strategy

```tsx
<div className="max-w-7xl mx-auto px-4">
  {/* Page Content */}
</div>
```

- Content should stay centered
- Avoid full‑width text blocks
- Use whitespace properly

---

## 6. Page‑wise Content Structure

---

### 6.1 Home Page

#### Sections (Suggested Order)

1. **Hero Section**
   - Academy tagline
   - Short mission statement
   - Primary CTA: *Enquire Now*

2. **Why Choose GSA**
   - Certified coaches
   - Safe training environment
   - Age‑wise programs

3. **Sports Offered**
   - Cricket
   - Football
   - Athletics
   - Badminton (example)

4. **Training Philosophy**
   - Discipline
   - Fitness
   - Skill development

5. **Testimonials**
   - Parents / Students feedback

6. **Call to Action**
   - Admissions open

---

### 6.2 About Academy

#### Sections

1. **Academy Story**
   - Why GSA was started
   - Vision and mission

2. **Mentors / Coaches Statements**
   - Coach photo
   - Name + role
   - Short philosophy statement

3. **Academy Timeline**

```text
2018 – Academy Founded
2019 – First district‑level wins
2021 – Infrastructure expansion
2023 – State‑level recognition
```

---

### 6.3 Programs / Sports

#### Structure

- Each sport as a **card / section**
- Include:
  - Sport name
  - Age group
  - Training frequency
  - Skill level (Beginner / Advanced)

Example:

```text
Cricket Training
Age: 7–18 years
Schedule: 5 days/week
Focus: Technique, match practice, fitness
```

---

### 6.4 Admissions / Enquiry

#### Enquiry Form Fields

- Student Name
- Age
- Sport Interested In
- Parent Name
- Phone Number
- Email
- Message

⚠️ No backend required

- Validate inputs
- Show success message on submit

---

### 6.5 Contact Page

#### Content

- Academy address
- Phone number
- Email
- Google Map embed
- Working hours

---

## 7. Component Structure (Suggested)

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Timeline.tsx
│   │   ├── Programs.tsx
│   │   └── Testimonials.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Input.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Programs.tsx
│   ├── Admissions.tsx
│   └── Contact.tsx
└── index.css
```

---

## 8. Tailwind Styling Rules

### ✅ DO

- Utility‑first classes
- Responsive prefixes
- Consistent spacing (`py-16`, `gap-8`)

### ❌ DON’T

- Inline CSS
- Random spacing values
- Over‑styled animations

---

## 9. Improvements Over Existing Website

- Better mobile experience
- Clear CTAs
- Cleaner typography
- Reduced clutter
- Structured content flow
- Faster loading

---

## 10. Quality Checklist

- [ ] Mobile‑first layout
- [ ] Clean component structure
- [ ] No lorem ipsum
- [ ] Readable code
- [ ] Tailwind used properly
- [ ] Custom‑built look
- [ ] Parent‑friendly UX

---

## 11. Final Note

This project is **not about copying a website**.

It’s about:
- Understanding users
- Thinking like a product developer
- Delivering a clean, trustworthy sports academy website

If the site looks like a WordPress template ❌ — it has failed.

If it looks **custom, clear, and purposeful** ✅ — success.

