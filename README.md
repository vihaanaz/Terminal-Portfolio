# Terminal Portfolio Website - Vihaan's Fork

![Terminal Portfolio Website](https://user-images.githubusercontent.com/53733092/194220661-e2ff8b4c-f64a-4b64-a836-c52fae6bbcda.png)

![ts](https://badgen.net/badge/Built%20With/TypeScript/blue?style=flat-square)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)

## 🔥 About This Fork

This is a **forked and customized version** of the original terminal portfolio template created by [Sat Naing](https://github.com/satnaing/terminal-portfolio). 

**Why this fork exists:**
- The original project has not been receiving regular updates
- I (Vihaan) am currently learning fullstack development and wanted to practice with this template
- This fork serves as both a learning exercise and a maintained version for others to use
- Feel free to use this template for your own portfolio projects!

**Original Creator:** [Sat Naing](https://satnaing.dev) - Full credit goes to the original developer for creating this amazing terminal portfolio concept.

---

A terminal-style portfolio website developed with React, TypeScript and Styled-Components. Multiple themes supported and keyboard shortcuts can be used for some functionalities.

## 🚀 Quick Start - Customize This Template

**Want to make this your own portfolio? It's super easy!**

### Step 1: Edit the Configuration File
Open `src/config/portfolio.config.ts` and update:
- **Personal info**: Your name, title, description
- **Projects**: Replace with your own projects
- **ASCII art**: Generate custom name art at [patorjk.com](https://patorjk.com/software/taag/)

### Step 2: Update Contact Info
- **Social links**: Edit `src/components/commands/Socials.tsx`
- **Email**: Edit `src/components/commands/Email.tsx`
- **Education**: Edit `src/components/commands/Education.tsx`

### Step 3: Customize Assets
- Replace favicon and images in the `public/` folder
- Update `package.json` with your details

### Step 4: Deploy
- Set `portfolio.isTemplate = false` in the config
- Add your repository URL to `portfolio.yourRepo`
- Deploy to Netlify, Vercel, or GitHub Pages

**That's it! You now have your own terminal portfolio! 🎉**

---

Blog Post: https://satnaing.dev/blog/posts/how-do-i-develop-my-terminal-portfolio-website-with-react

## Features

- Responsive Design 📱💻
- Multiple themes 🎨
- Autocomplete feature ✨ (TAB | Ctrl + i)
- Go previous and next command ⬆️⬇️
- View command history 📖
- PWA and Offline Support 🔥
- Well-tested ✅

## Tech Stack

**Frontend** - [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [Styled-Components](https://styled-components.com/)  
**UI/UX** - [Figma](https://figma.com/)  
**State Management** - [ContextAPI](https://reactjs.org/docs/context.html)  
**Testing** - [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/)  
**Deployment** - [Netlify](https://app.netlify.com/)

## Multiple Themes

Currently, this website supports 6 themes. Type `themes` in the terminal for more info.
![terminal-portfolio-themes](https://user-images.githubusercontent.com/53733092/194221801-94f1c28b-4865-4b7f-a73e-d41132519bea.png)

## Lighthouse Score

<p align="center">
<img width="710" alt="Sat Naing Terminal Lighthouse Score" src="public/lighthouse-result.svg">
</p>

## Running Locally

Clone this forked project

```bash
git clone [your-fork-url-here]
```

Go to the project directory

```bash
cd terminal-portfolio
```

Remove remote origin (if you want to make it your own)

```bash
git remote remove origin
```

Install dependencies

```bash
npm install
```

> **Windows Users**: If you get PowerShell execution policy errors, check [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for detailed setup help!

Start the server

```bash
npm run dev
```

## Inspiration and Credits

Here are some inspiration for this kind of terminal website. Only some features and functionalities are inspired by these following websites. All codes are written on my own.

- [term m4tt72](https://term.m4tt72.com/)
- [Forrest](https://fkcodes.com/)

## Authors

**Current Maintainer (Fork):**
- Vihaan - Learning fullstack development

**Original Creator:**
- [@satnaing](https://satnaing.dev) - Created the original terminal portfolio template

---

**Note:** This is a learning project and fork. All credit for the original concept and implementation goes to Sat Naing. This fork exists to provide a maintained version and to serve as a practice project for fullstack development learning.
