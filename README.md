# Young Engineers Portal - Southwest San Jose

An interactive, responsive Single-Page Application (SPA) for Lego Robotics & STEM class registration and enrollment management, built for **Young Engineers Southwest San Jose**.

This portal connects local schools and community centers in Southwest San Jose with premium hands-on STEM curriculum. It integrates a custom frontend application with Google Firebase Services to manage course lists, registrations, contact inquiries, and administrative logistics.

---

## 🚀 Key Features

* **Custom SPA Router**: A lightweight, hash-based client-side router (`#/home`, `#/classes`, `#/about`, `#/faq`, `#/admin`, `#/enroll`) that ensures instant page transitions and zero-refresh navigation.
* **Premium Glassmorphic Design**: Modern, vibrant CSS system utilizing HSL variables, fluid gradients, responsive Bento grids, micro-animations, custom loader animations (designed like a bouncing Lego brick), and celebratory checkout confetti.
* **Firebase Firestore Integration**: Real-time cloud persistence for class schedules, student enrollments, inquiries, educational programs, and employees.
* **Dynamic Enrollment & Validation**: Automatically handles registration form validations, monitors remaining seat counts dynamically, and saves registrations safely to the database.
* **Interactive Model Showcase**: A responsive carousel showing actual student builds (e.g., Motorized Seesaw, pully swings, dinosaur walking robots) alongside their physical concepts and engineering descriptions.
* **Instructor / Admin Portal**: An integrated management panel secured by a local session lock allowing teachers and coordinators to:
  * Monitor total enrollments and remaining spots.
  * View parent details and special notes.
  * Oversee school contact and birthday party inquiries.
  * Track active employees and educational providers.
  * Instantly seed or reset the database back to default records.

---

## 🛠️ Technology Stack

* **Frontend**: HTML5, Vanilla CSS3 (Custom properties, grid systems, flexbox), ES6+ JavaScript modules.
* **Build Tooling**: [Vite](https://vitejs.dev/) for quick HMR development and optimized production bundling.
* **Backend Platform**: [Firebase (v12 SDK)](https://firebase.google.com/):
  * **Firestore Database**: NoSQL document storage for all dynamic data.
  * **Firebase Hosting**: High-speed static web hosting.
* **Testing & Mocks**: [jsdom](https://github.com/jsdom/jsdom) for simulating browser environments in headless node test scripts.

---

## 📁 Repository Structure

```text
├── .firebase/             # Local Firebase cache directory
├── .firebaserc            # Firebase project association config
├── assets/                # Images, icons, and logo assets
├── firebase-config.js     # Firebase client SDK initialization & credentials
├── firebase.json          # Firebase rules and hosting configurations
├── firestore.rules        # Security rules for Cloud Firestore collections
├── index.html             # Main entry point template & SEO meta-tags
├── app.js                 # Router, rendering logic, data management & interactions
├── styles.css             # Main styling system, layout & animations
├── package.json           # Scripts, Vite tooling & dependencies configuration
├── test.js                # JSDOM-based local CLI runtime test script
└── README.md              # Project documentation (this file)
```

---

## 🔌 Database & Collection Models

The portal queries and updates six collections in Cloud Firestore:

1. **`classes`**: Schedule, timing, school year, age groups, pricing, total spots, and remaining spaces.
2. **`enrollments`**: Student names, ages, grades, school names, parent details (phone, email), and helper notes.
3. **`inquiries`**: School partnership inquiries, workshop requests, birthday parties, and review status.
4. **`programs`**: Course frameworks (e.g., *Bricks Challenge*, *Galileo Technic*, *Algo Play*, *Robo Toys*).
5. **`employees`**: Active teaching assistants, credentials, start dates, and role assignments.
6. **`education_providers`**: School sites (like Lincoln Elementary) and community partners.

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (LTS recommended).

### 1. Installation
Clone the repository and install the Vite bundler dependencies:
```bash
npm install
```

### 2. Local Development
Spin up the Vite development server locally:
```bash
npm run dev
```
Open the local URL (usually `http://localhost:5173`) in your browser.

### 3. Running Headless Tests
Run the simulated JSDOM testing script to verify view rendering, class listing logic, and database seed interactions:
```bash
node test.js
```

### 4. Build for Production
Bundle the minified and optimized assets for production:
```bash
npm run build
```

---

## 🌐 Deployment

This application is ready to deploy on **Firebase Hosting**. 

1. Ensure the [Firebase CLI](https://firebase.google.com/docs/cli) is installed.
2. Log in and deploy the app:
   ```bash
   npx firebase-tools deploy
   ```
