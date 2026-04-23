# Nazwa Portfolio Website

A modern, dark-themed portfolio website built with React, Vite, and Tailwind CSS.

## Adding Your Photos

### Hero Image
To add your photo to the hero section:

1. **Save your photo** as `hero-image.jpg` in the `src/assets/` folder
2. **Uncomment the import line** at the top of `src/NazwaPortfolio.jsx`:
   ```javascript
   // Change this:
   // import heroImage from './assets/hero-image.jpg';
   
   // To this:
   import heroImage from './assets/hero-image.jpg';
   ```

3. **Replace the placeholder** with the actual image:
   ```javascript
   // Replace the placeholder div with:
   <img 

### Project Website Image
To add the website screenshot for the Lenteng Agung project:

1. **Save your screenshot** as `lenteng-agung-website.png` in the `src/assets/` folder
2. **Uncomment the import line** at the top of `src/NazwaPortfolio.jsx`:
   ```javascript
   // Change this:
   // import lentengAgungWebsite from './assets/lenteng-agung-website.png';
   
   // To this:
   import lentengAgungWebsite from './assets/lenteng-agung-website.png';
   ```

3. **Replace the placeholder** with the actual image:
   ```javascript
   // Replace the placeholder div with:
   <img 
     src={lentengAgungWebsite} 
     alt="Kelurahan Lenteng Agung Website - Public Service Platform with AI Chatbot" 
     className="h-full w-full object-cover rounded-[1.4rem]"
   />
   ```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Features

- ✅ Fully responsive design
- ✅ Dark theme with gradient effects
- ✅ Functional navigation buttons
- ✅ LinkedIn and GitHub integration
- ✅ Smooth scrolling
- ✅ Contact section with email/phone links
