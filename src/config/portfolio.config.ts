<<<<<<< HEAD
// ============================================================================
// PORTFOLIO CONFIGURATION
// ============================================================================
// Edit the values below to customize your portfolio
// This is the main configuration file - most customization can be done here!

export const portfolioConfig = {
  // ========================================
  // PERSONAL INFORMATION
  // ========================================
  personal: {
    name: "Vihaan", // Your name (appears in welcome banner and about section)
    title: "currently learning fullstack development", // Your current role/status
    location: "", // Your location (optional, leave empty to hide)
    description: [
      "I am passionate about building web applications and",
      "continuously improving my development skills through hands-on projects.",
      "Check out my skills, experience, and projects using the terminal commands!"
    ], // Array of description lines for about section
  },

  // ========================================
  // PORTFOLIO INFORMATION
  // ========================================
  portfolio: {
    version: "1.3.1 - Forked", // Portfolio version
    isTemplate: true, // Set to false once you've customized it
    originalRepo: "https://github.com/satnaing/terminal-portfolio", // Original template repo
    yourRepo: "", // Your portfolio repo (leave empty if not published yet)
  },

  // ========================================
  // PROJECTS SECTION
  // ========================================
  projects: [
    {
      id: 1,
      title: "Terminal Portfolio (This Site)",
      desc: "A customized terminal-style portfolio website built with React and TypeScript. Features custom configuration system for easy template usage.",
      url: "https://github.com/vihaan/terminal-portfolio",
    },
    {
      id: 2,
      title: "Task Manager App",
      desc: "A fullstack CRUD application with React frontend and Node.js backend. Features user authentication and real-time updates.",
      url: "https://github.com/vihaan/task-manager",
    },
    {
      id: 3,
      title: "Weather Dashboard", 
      desc: "A responsive weather application using OpenWeather API, built with vanilla JavaScript and modern CSS.",
      url: "https://github.com/vihaan/weather-dashboard",
    },
    {
      id: 4,
      title: "E-commerce Landing Page",
      desc: "A modern, responsive landing page built with HTML5, CSS3, and JavaScript. Features smooth animations and mobile-first design.",
      url: "https://github.com/vihaan/ecommerce-landing",
    },
    {
      id: 5,
      title: "Code Challenge Solutions",
      desc: "A collection of coding challenges and algorithms solved in JavaScript and Python. Daily practice repository.",
      url: "https://github.com/vihaan/coding-challenges",
    },
    {
      id: 6,
      title: "React Calculator",
      desc: "A scientific calculator built with React hooks and context API. Features advanced mathematical operations and history.",
      url: "https://github.com/vihaan/react-calculator",
    },
  ],

  // ========================================
  // WELCOME MESSAGE CUSTOMIZATION
  // ========================================
  welcome: {
    // ASCII art for your name - you can generate custom ASCII art at:
    // https://patorjk.com/software/taag/ (recommended font: "Slant")
    asciiArt: {
      desktop: `        
 _   _____ _                     
| | / /   (_)  _____ ____ _  ___ 
| |/ / /| | |/ / _ \`/ __ \`/ / _ \\
|___/_/ |_/_/ / /_/ / /_/ / / /_/  
         __/ /\\__,_/\\__,_/_/ /    
        /___/             /_/     
          `,
      mobile: `
 _   _____ _                     
| | / /   (_)  _____ ____ _  ___ 
| |/ / /| | |/ / _ \`/ __ \`/ / _ \\
|___/_/ |_/_/ / /_/ / /_/ / / /_/  
         __/ /\\__,_/\\__,_/_/ /    
        /___/             /_/     
 
          `
    },
    
    // Custom messages
    messages: {
      templateNotice: "This is a forked template for practice and learning. The original project by",
      templateCredit: "Sat Naing",
      templateUrl: "https://github.com/satnaing/terminal-portfolio",
      templateReason: "has not been updated recently, so I've forked it to maintain and improve it.",
      encouragement: "Feel free to use this template for your own portfolio! The source code is available."
    }
  },

  // ========================================
  // SOCIAL LINKS & CONTACT
  // ========================================
  // Note: Social links are configured in src/components/commands/Socials.tsx
  // Email is configured in src/components/commands/Email.tsx
  // You'll need to update those files directly for now
};

// ============================================================================
// TEMPLATE CUSTOMIZATION NOTES
// ============================================================================
/*
🎯 QUICK START CUSTOMIZATION:

1. Update personal information above
2. Replace projects with your own
3. Generate custom ASCII art for your name at https://patorjk.com/software/taag/
4. Update social links in src/components/commands/Socials.tsx
5. Update email in src/components/commands/Email.tsx
6. Set portfolio.isTemplate to false when done
7. Update portfolio.yourRepo with your repository URL

📁 OTHER FILES TO CUSTOMIZE:
- src/components/commands/Socials.tsx (social media links)
- src/components/commands/Email.tsx (contact email)
- src/components/commands/Education.tsx (education background)
- public/ folder (favicon, images, manifest)
- README.md (update with your information)

🎨 THEMES:
- Multiple themes available! Type 'themes' in terminal
- Theme system in src/components/styles/themes.ts

💡 TIP: Search for "TODO:" comments in the codebase for additional customization points!
*/
=======
// ============================================================================
// PORTFOLIO CONFIGURATION
// ============================================================================
// Edit the values below to customize your portfolio
// This is the main configuration file - most customization can be done here!

export const portfolioConfig = {
  // ========================================
  // PERSONAL INFORMATION
  // ========================================
  personal: {
    name: "Vihaan", // Your name (appears in welcome banner and about section)
    title: "currently learning fullstack development", // Your current role/status
    location: "", // Your location (optional, leave empty to hide)
    description: [
      "I am passionate about building web applications and",
      "continuously improving my development skills through hands-on projects.",
      "Check out my skills, experience, and projects using the terminal commands!"
    ], // Array of description lines for about section
  },

  // ========================================
  // PORTFOLIO INFORMATION
  // ========================================
  portfolio: {
    version: "1.3.1 - Forked", // Portfolio version
    isTemplate: true, // Set to false once you've customized it
    originalRepo: "https://github.com/satnaing/terminal-portfolio", // Original template repo
    yourRepo: "", // Your portfolio repo (leave empty if not published yet)
  },

  // ========================================
  // PROJECTS SECTION
  // ========================================
  projects: [
    {
      id: 1,
      title: "Terminal Portfolio (This Site)",
      desc: "A customized terminal-style portfolio website built with React and TypeScript. Features custom configuration system for easy template usage.",
      url: "https://github.com/vihaan/terminal-portfolio",
    },
    {
      id: 2,
      title: "Task Manager App",
      desc: "A fullstack CRUD application with React frontend and Node.js backend. Features user authentication and real-time updates.",
      url: "https://github.com/vihaan/task-manager",
    },
    {
      id: 3,
      title: "Weather Dashboard", 
      desc: "A responsive weather application using OpenWeather API, built with vanilla JavaScript and modern CSS.",
      url: "https://github.com/vihaan/weather-dashboard",
    },
    {
      id: 4,
      title: "E-commerce Landing Page",
      desc: "A modern, responsive landing page built with HTML5, CSS3, and JavaScript. Features smooth animations and mobile-first design.",
      url: "https://github.com/vihaan/ecommerce-landing",
    },
    {
      id: 5,
      title: "Code Challenge Solutions",
      desc: "A collection of coding challenges and algorithms solved in JavaScript and Python. Daily practice repository.",
      url: "https://github.com/vihaan/coding-challenges",
    },
    {
      id: 6,
      title: "React Calculator",
      desc: "A scientific calculator built with React hooks and context API. Features advanced mathematical operations and history.",
      url: "https://github.com/vihaan/react-calculator",
    },
  ],

  // ========================================
  // WELCOME MESSAGE CUSTOMIZATION
  // ========================================
  welcome: {
    // ASCII art for your name - you can generate custom ASCII art at:
    // https://patorjk.com/software/taag/ (recommended font: "Slant")
    asciiArt: {
      desktop: `        
 _   _____ _                     
| | / /   (_)  _____ ____ _  ___ 
| |/ / /| | |/ / _ \`/ __ \`/ / _ \\
|___/_/ |_/_/ / /_/ / /_/ / / /_/  
         __/ /\\__,_/\\__,_/_/ /    
        /___/             /_/     
          `,
      mobile: `
 _   _____ _                     
| | / /   (_)  _____ ____ _  ___ 
| |/ / /| | |/ / _ \`/ __ \`/ / _ \\
|___/_/ |_/_/ / /_/ / /_/ / / /_/  
         __/ /\\__,_/\\__,_/_/ /    
        /___/             /_/     
 
          `
    },
    
    // Custom messages
    messages: {
      templateNotice: "This is a forked template for practice and learning. The original project by",
      templateCredit: "Sat Naing",
      templateUrl: "https://github.com/satnaing/terminal-portfolio",
      templateReason: "has not been updated recently, so I've forked it to maintain and improve it.",
      encouragement: "Feel free to use this template for your own portfolio! The source code is available."
    }
  },

  // ========================================
  // SOCIAL LINKS & CONTACT
  // ========================================
  // Note: Social links are configured in src/components/commands/Socials.tsx
  // Email is configured in src/components/commands/Email.tsx
  // You'll need to update those files directly for now
};

// ============================================================================
// TEMPLATE CUSTOMIZATION NOTES
// ============================================================================
/*
🎯 QUICK START CUSTOMIZATION:

1. Update personal information above
2. Replace projects with your own
3. Generate custom ASCII art for your name at https://patorjk.com/software/taag/
4. Update social links in src/components/commands/Socials.tsx
5. Update email in src/components/commands/Email.tsx
6. Set portfolio.isTemplate to false when done
7. Update portfolio.yourRepo with your repository URL

📁 OTHER FILES TO CUSTOMIZE:
- src/components/commands/Socials.tsx (social media links)
- src/components/commands/Email.tsx (contact email)
- src/components/commands/Education.tsx (education background)
- public/ folder (favicon, images, manifest)
- README.md (update with your information)

🎨 THEMES:
- Multiple themes available! Type 'themes' in terminal
- Theme system in src/components/styles/themes.ts

💡 TIP: Search for "TODO:" comments in the codebase for additional customization points!
*/
>>>>>>> a22a5d5eecf2e572f313f84ed8878ea56704c8cb
