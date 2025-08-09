# 🚀 Setup Instructions

The TypeScript errors you're seeing are because dependencies haven't been installed yet. Here's how to fix it:

## Option 1: Using PowerShell (Recommended for Windows)

1. **Open PowerShell as Administrator**
2. **Navigate to the project folder:**
   ```powershell
   cd "C:\Users\mrben\Downloads\terminal-portfolio-1.3.1\terminal-portfolio-1.3.1"
   ```

3. **Set execution policy temporarily:**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
   ```

4. **Install dependencies:**
   ```powershell
   npm install
   ```

## Option 2: Using Command Prompt

1. **Open Command Prompt**
2. **Navigate to the project folder:**
   ```cmd
   cd "C:\Users\mrben\Downloads\terminal-portfolio-1.3.1\terminal-portfolio-1.3.1"
   ```

3. **Install dependencies:**
   ```cmd
   npm install
   ```

## Option 3: Using Yarn (if you have it)

```bash
yarn install
```

## After Installation

Once dependencies are installed, you should see:
- ✅ A `node_modules` folder appears
- ✅ TypeScript errors disappear
- ✅ You can run `npm run dev` to start the development server

## Test the Setup

Run the development server:
```bash
npm run dev
```

Then open your browser to `http://localhost:5173` to see your portfolio!

## Common Issues

**If you get execution policy errors:**
- Run PowerShell as Administrator
- Use: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process`

**If npm is not recognized:**
- Make sure Node.js is installed: https://nodejs.org/
- Restart your terminal after installation

**If you prefer VS Code integrated terminal:**
- Open the project folder in VS Code
- Use Terminal → New Terminal
- Run `npm install`

---

The TypeScript errors in `tsconfig.json`, `vite.config.ts`, and `src/App.tsx` will resolve automatically once dependencies are installed! 🎉
