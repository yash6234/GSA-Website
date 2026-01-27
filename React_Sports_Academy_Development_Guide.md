
# Sports Academy Website - React Development Guide

## Table of Contents
1. Project Overview
2. Technology Stack
3. Project Structure
4. Layout & Styling Guidelines
5. Component Development Standards
6. Client-Side Rendering Guidelines
7. Common Patterns & Best Practices
8. Implementation Checklist

---

## Project Overview

This is a **Client-Side Rendered (CSR)** React application for a Sports Academy platform.
The application follows a strict **1335px max-width** constraint with all content centered.

### Key Features
- React 18+ (Vite recommended)
- JavaScript
- Tailwind CSS
- Fully responsive design

---

## Technology Stack

- Framework: React 18
- Build Tool: Vite
- Styling: Tailwind CSS
- State Management: Context API / Zustand

---

## Project Structure

src/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── features/
│   └── ui/
├── pages/
│   ├── Home.jsx
│   ├── Programs.jsx
│   ├── AICoach.jsx
│   └── Contact.jsx
├── services/
│   └── aiService.js
├── constants/
├── context/
├── hooks/
├── App.jsx
├── main.jsx
└── index.css

---

## Layout & Styling Guidelines

### Max-Width Rule (1335px)

All sections must follow this structure:

<section className="py-20">
  <div className="max-w-[1335px] mx-auto w-full px-4">
    Content
  </div>
</section>

❌ Never use hardcoded widths like 1431px or rem-based fixed widths.

---

## Component Development Standards

### Functional Components Only

const Section = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1335px] mx-auto px-4">
        Content
      </div>
    </section>
  );
};

export default Section;

---

## Client-Side Rendering Guidelines

- React runs fully on the client
- Browser APIs like window and document are allowed
- API calls should be inside useEffect

Example:

useEffect(() => {
  fetchData();
}, []);

---

## AI Integration Example

services/aiService.js

import axios from "axios";

export const getAIResponse = async (message) => {
  const res = await axios.post("https://api.openai.com/v1/chat/completions", {
    model: "gpt-4",
    messages: [{ role: "user", content: message }],
  }, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    }
  });

  return res.data.choices[0].message.content;
};

---

## Horizontal Scroll Pattern

"use client"

const ScrollList = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="flex gap-8 overflow-x-auto scrollbar-hide">
      Cards
    </div>
  );
};

---

## Styling Rules

- Tailwind CSS only
- Global styles in index.css
- No inline font-family usage
- Responsive utilities required

---

## Implementation Checklist

- Max-width respected
- No hardcoded widths
- Tailwind only styling
- Responsive tested
- Clean component structure
- AI keys stored in .env

---

## Environment Variables

VITE_OPENAI_API_KEY=your_key_here

Never commit this file.

---

## Final Notes

- Keep components reusable
- Avoid over-engineering
- Follow consistent patterns
- Production-ready code only

