
# Nutritionist Website

This is a modern and responsive website designed for nutritionists, offering valuable nutritional content and recipes. This project is built with [Astro](https://astro.build/), utilizing **React** components and styled with **Tailwind CSS**. It includes a continuous integration/continuous deployment (CI/CD) workflow template, ensuring smooth deployment and updates.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)


## Features

- **Astro Framework**: Static site generation with Astro.
- **React Components**: Use of React for dynamic, reusable components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **CI/CD Workflow**: Integrated continuous integration and continuous deployment using GitHub Actions.
- **Environment Variables**: Configurable variables for different environments.
- **WhatsApp Messaging**: Configured to send messages directly via WhatsApp for quick and easy communication.
- **EmailJS Integration**: EmailJS has been integrated for the functionality of sending messages from the contact form. Setting up .env variables is necessary for EmailJS integration. Please ensure to create an account on EmailJS and configure the required variables in the .env file. Refer to the EmailJS documentation for detailed instructions https://www.emailjs.com/docs/sdk/installation/.
- **Spam Protection with reCAPTCHA**: Implemented Google reCAPTCHA to prevent spam and ensure that form submissions are made by real users.


## Project Structure

The project is organized as follows:
```bash
    astroAnggifitProject/
    ├── assets/              # Static assets like images, etc.
    ├── components/          # Reusable React components
    │   ├── AboutPage/
    │   ├── Homepage/
    │   ├── Nutrirecetas/
    │   └── CommonComponents.astro
    ├── layouts/             # Layout components for pages
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro      # Homepage of the website
    │   ├── about.astro      # About page
    │   ├── nutrirecetas.astro      # Recipes page
    │   └── nutrirecetas/    # Markdown files for recipes
    │       ├── receta1.md
    │       └── receta2.md
    │   └── tags/    
    ├── scripts/             # Utility scripts for the project
    │   └── script.js
    ├── data.json            # JSON file containing nutritional data
    ├── .env                 # Environment variables (not included in version control)
    ├── astro.config.mjs     # Astro configuration file
    ├── tailwind.config.js   # Tailwind CSS configuration file
    ├── package.json         # Project metadata and dependencies
    └── README.md            # Project documentation
```

Astro looks for .astro or .md files in the src/pages/ directory. Each page is exposed as a route based on its file name.

There's nothing special about src/components/, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the public/ directory.
    
## Setup Instructions

### Prerequisites

- **Node.js** (version 18.x or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anggifit/astroAnggifitProject.git
   cd astroAnggifitProject

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
4. Open your browser and visit http://localhost:4321 to view the site
## Environment Variables

Before running the application, make sure to correctly configure the environment variables in the .env file (provided in the emailjs account settings https://www.emailjs.com/docs/examples/reactjs/ )

### Whatsapp number
```bash
   PUBLIC_WHATSAPP_NUMBER
```
### Emailjs
```bash
   PUBLIC_KEY

   PUBLIC_EMAIL_SERVICE_ID

   PUBLIC_TEMPLATE_ID
```
### Recaptcha

```bash
   PUBLIC_RECAPTCHA_SITE_KEY
```
## Authors

- [@anggifit]( https://github.com/anggifit)

## Contributing

Contributions are welcome! Please follow these steps:
   1. Fork the repository.

   2. Create a new branch 
      git checkout -b feature/your-feature-name.
   3. Make your changes.
   4. Commit your changes (git commit -m 'Add some feature').
   5. Push to the branch (git push origin feature/your-feature-name).
   6. Open a Pull Request.
