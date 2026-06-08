/**
 * Southwest San Jose Young Engineers Portal
 * Core Application Logic (Router, State, Forms, Custom Interactions)
 */

import { db } from "./firebase-config.js";
import { collection, getDocs, doc, setDoc, addDoc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore";

// ==========================================================================
// 1. Data Models & Local Storage Persistence
// ==========================================================================

const SHOWCASE_MODELS = [
  {
    title: "Motorized Seesaw",
    program: "Bricks Challenge",
    age: "Ages 7-10",
    topic: "Gears & Motion",
    desc: "An interactive seesaw demonstrating reciprocal motion, torque, and structural load balancing. Students learn how gear reduction allows a small motor to lift heavier loads at a slower speed.",
    concept: "Gear ratios, Speed vs. Torque reduction",
    difficulty: "Beginner to Intermediate",
    img: "assets/model_1.jpg",
    badgeColor: "red"
  },
  {
    title: "Mechanical Pulley Swing",
    program: "Galileo Technic",
    age: "Ages 7-10",
    topic: "Belts & Pulley",
    desc: "An advanced playground swing build demonstrating transmission of rotary energy via belts and pulleys. Students analyze friction, belt slippage, and centripetal forces as the swing oscillates.",
    concept: "Pulley systems, Friction & Tension",
    difficulty: "Intermediate",
    img: "assets/model_2.jpg",
    badgeColor: "blue"
  },
  {
    title: "Walking Dino Robot",
    program: "Robo Toys",
    age: "Ages 10-14",
    topic: "Worm Gears & Linkages",
    desc: "A bi-pedal walking dinosaur robot utilizing worm gear mechanisms and leg linkages to turn rotational motor speed into step movements. Students learn about walking patterns and mechanical logic.",
    concept: "Worm gears, Multi-joint Linkages",
    difficulty: "Advanced",
    img: "assets/model_3.jpg",
    badgeColor: "teal"
  },
  {
    title: "Spinning Drum Washer",
    program: "Algo Play",
    age: "Ages 4-6",
    topic: "Rotary Transmission",
    desc: "A fun motorized washing machine drum model. Early builders learn mechanical sequencing, frame support structure, and basic motor connectivity, ensuring physical understanding of centrifugal force.",
    concept: "Rotary motion, Frame load support",
    difficulty: "Early Starter (Ages 4-6)",
    img: "assets/model_4.jpg",
    badgeColor: "yellow"
  },
  {
    title: "Motorized Conveyor Belt",
    program: "Bricks Challenge",
    age: "Ages 7-10",
    topic: "Gears & Conveyors",
    desc: "A miniature sorting conveyor belt showing how gears translate rotational motion into linear conveyor travel. Students study speed regulation, belt tension, and cargo friction.",
    concept: "Rotational-to-linear conversion, Cargo friction",
    difficulty: "Intermediate",
    img: "assets/model_5.jpg",
    badgeColor: "red"
  },
  {
    title: "Fire Truck Character Robot",
    program: "Algo Play",
    age: "Ages 4-6",
    topic: "Basic Coding & Vehicles",
    desc: "A cheerful fire truck chassis that teaches young kids how wheels translate motor power into locomotion. Students practice basic direction controls and mechanical frame support.",
    concept: "Axles, Wheel locomotion, Vehicle frame support",
    difficulty: "Early Starter (Ages 4-6)",
    img: "assets/model_6.jpg",
    badgeColor: "yellow"
  },
  {
    title: "Mechanical Ferris Wheel",
    program: "Galileo Technic",
    age: "Ages 7-10",
    topic: "Linkages & Orbit",
    desc: "An elaborate orbiting ride linkage illustrating circular motion and dual-axis rotation. Students construct gear systems to spin the structure while maintaining carriage vertical alignment.",
    concept: "Epicyclic gearing, Structural load balancing",
    difficulty: "Advanced",
    img: "assets/model_7.jpg",
    badgeColor: "blue"
  },
  {
    title: "Basketball Shooter Robot",
    program: "Robo Toys",
    age: "Ages 10-14",
    topic: "Sensors & Actuators",
    desc: "An interactive robot that detects objects and launches a small ball into a basket hoop. Students code trigger mechanisms using ultrasonic sensors and mechanical lever arms.",
    concept: "Ultrasonic sensors, Lever arm velocity",
    difficulty: "Advanced",
    img: "assets/model_8.jpg",
    badgeColor: "teal"
  }
];

const DEFAULT_CLASSES = [
  {
    id: "class-1",
    title: "Bricks Challenge: Motorized Machines",
    provider_id: "ep-1",
    program_id: "prog-bricks",
    program: "Bricks Challenge",
    school_year: "2026-2027",
    season: "Fall",
    start_date: "2026-09-03",
    end_date: "2026-11-05",
    number_of_sessions: 10,
    ageGroup: "7-10",
    ageLabel: "2nd to 4th Grade",
    location: "Room 12",
    dayOfWeek: "Thursdays",
    time: "4:00 PM - 5:15 PM",
    price: 260,
    spotsTotal: 16,
    spotsRemaining: 14,
    accent: "red",
    description: "Introduces mechanical engineering concepts. Students build motorized models like wind turbines and cranes while learning about gear ratios and torque.",
    image: "assets/bricks_challenge.png"
  },
  {
    id: "class-2",
    title: "Galileo Technic: Kinematics & Speed",
    provider_id: "ep-1",
    program_id: "prog-galileo",
    program: "Galileo Technic",
    school_year: "2026-2027",
    season: "Fall",
    start_date: "2026-09-07",
    end_date: "2026-11-09",
    number_of_sessions: 10,
    ageGroup: "7-10",
    ageLabel: "3rd to 5th Grade",
    location: "Library",
    dayOfWeek: "Mondays",
    time: "3:45 PM - 5:00 PM",
    price: 280,
    spotsTotal: 10,
    spotsRemaining: 7,
    accent: "teal",
    description: "Explores complex transmissions, differential gearboxes, and speed reduction systems. Promotes critical thinking and analytical design.",
    image: "assets/galileo_technic.jpg"
  },
  {
    id: "class-3",
    title: "Algo Play: Creative Coding",
    provider_id: "ep-1",
    program_id: "prog-algo",
    program: "Algo Play",
    school_year: "2026-2027",
    season: "Fall",
    start_date: "2026-09-01",
    end_date: "2026-11-03",
    number_of_sessions: 10,
    ageGroup: "4-6",
    ageLabel: "Pre-K to 1st Grade",
    location: "Kindergarten Room",
    dayOfWeek: "Tuesdays",
    time: "3:30 PM - 4:45 PM",
    price: 240,
    spotsTotal: 12,
    spotsRemaining: 9,
    accent: "blue",
    description: "Young learners explore algorithmic thinking, sequencing, and basic problem-solving through tactile, screen-free Lego blocks.",
    image: "assets/algo_play.png"
  },
  {
    id: "class-4",
    title: "Robo Toys: Smart Coding & Sensors",
    provider_id: "ep-1",
    program_id: "prog-robo",
    program: "Robo Toys",
    school_year: "2026-2027",
    season: "Fall",
    start_date: "2026-09-02",
    end_date: "2026-11-04",
    number_of_sessions: 10,
    ageGroup: "10-14",
    ageLabel: "5th to 8th Grade",
    location: "Science Lab",
    dayOfWeek: "Wednesdays",
    time: "4:15 PM - 5:30 PM",
    price: 290,
    spotsTotal: 12,
    spotsRemaining: 12,
    accent: "yellow",
    description: "Advanced program combining brick building with dynamic sensor controls. Students code their models using drag-and-drop programming.",
    image: "assets/robo_toys.png"
  }
];

const DEFAULT_ENROLLMENTS = [
  {
    id: "enroll-1",
    classId: "class-3",
    classTitle: "Algo Play: Creative Coding",
    studentName: "Leo Carter",
    studentAge: 5,
    school: "Lincoln Elementary",
    grade: "Kindergarten",
    parentName: "Sarah Carter",
    parentEmail: "sarah.c@example.com",
    parentPhone: "(408) 555-0192",
    notes: "Enjoys dinosaur models. Please assist with smaller pins."
  },
  {
    id: "enroll-2",
    classId: "class-2",
    classTitle: "Galileo Technic: Kinematics & Speed",
    studentName: "Emily Zhao",
    studentAge: 9,
    school: "Union Elementary",
    grade: "4th Grade",
    parentName: "Ken Zhao",
    parentEmail: "ken.zhao@example.com",
    parentPhone: "(408) 555-0238",
    notes: "Has done some Scratch programming before."
  },
  {
    id: "enroll-3",
    classId: "class-2",
    classTitle: "Galileo Technic: Kinematics & Speed",
    studentName: "Aiden Martinez",
    studentAge: 8,
    school: "Union Elementary",
    grade: "3rd Grade",
    parentName: "Sofia Martinez",
    parentEmail: "sofia.m@example.com",
    parentPhone: "(408) 555-0144",
    notes: ""
  }
];

// Helper functions for state
let cachedClasses = [];
let cachedEnrollments = [];
let cachedInquiries = [];
let cachedPrograms = [];
let cachedEducationProviders = [];
let cachedEmployees = [];

const DEFAULT_PROGRAMS = [
  { id: "prog-bricks", name: "Bricks Challenge", ageRange: "Ages 7-10", accent: "red", image: "assets/lego_challenge.png", description: "Young learners explore algorithmic thinking, sequencing, and basic problem-solving through tactile, screen-free Lego blocks." },
  { id: "prog-galileo", name: "Galileo Technic", ageRange: "Ages 10-14", accent: "blue", image: "assets/big_builders.png", description: "Advanced mechanical engineering concepts and physics using advanced technical Lego parts." },
  { id: "prog-algo", name: "Algo Play", ageRange: "Ages 4-6", accent: "teal", image: "assets/algo_play.png", description: "Introduction to algorithmic thinking and tangible coding for our youngest engineers." },
  { id: "prog-robo", name: "Robo Toys", ageRange: "Ages 10-14", accent: "yellow", image: "assets/robo_toys.png", description: "Advanced program combining brick building with dynamic sensor controls using drag-and-drop programming." }
];

const DEFAULT_EMPLOYEES = [
  {
    id: "emp-1",
    name: "Alex Johnson",
    role: "instructor",
    email: "alex@example.com",
    phone: "(408) 555-0101",
    start_date: "2026-01-15",
    description: "Lead robotics instructor with 5 years of experience in STEM education.",
    created_at: new Date().toISOString()
  },
  {
    id: "emp-2",
    name: "Mia Patel",
    role: "helper",
    email: "mia@example.com",
    phone: "(408) 555-0102",
    start_date: "2026-03-01",
    description: "Classroom helper studying engineering at SJSU.",
    created_at: new Date().toISOString()
  }
];

const DEFAULT_EDUCATION_PROVIDERS = [
  {
    id: "ep-1",
    name: "Lincoln Elementary",
    provider_type: "school",
    website: "https://lincoln.sjusd.org",
    address: "555 Lincoln Ave, San Jose, CA 95125",
    phone: "(408) 555-1000",
    contact_name: "Principal Smith",
    contact_email: "psmith@sjusd.org",
    contact_phone: "(408) 555-1001",
    description: "Public elementary school in the San Jose Unified School District.",
    created_at: new Date().toISOString()
  }
];

async function syncFromFirestore() {
  const classesSnap = await getDocs(collection(db, "classes"));
  cachedClasses = classesSnap.docs.map(doc => doc.data());
  cachedClasses.sort((a, b) => a.id.localeCompare(b.id));

  const enrollmentsSnap = await getDocs(collection(db, "enrollments"));
  cachedEnrollments = enrollmentsSnap.docs.map(doc => doc.data());
  cachedEnrollments.sort((a, b) => b.id.localeCompare(a.id));

  const inquiriesQuery = query(collection(db, "inquiries"), orderBy("timestamp", "desc"));
  const inquiriesSnap = await getDocs(inquiriesQuery);
  cachedInquiries = inquiriesSnap.docs.map(doc => doc.data());

  const programsSnap = await getDocs(collection(db, "programs"));
  cachedPrograms = programsSnap.docs.map(doc => doc.data());
  
  if (cachedPrograms.length === 0) {
    cachedPrograms = [...DEFAULT_PROGRAMS];
    for (const prog of DEFAULT_PROGRAMS) {
      await setDoc(doc(db, "programs", prog.id), prog);
    }
  }

  const epSnap = await getDocs(collection(db, "education_providers"));
  cachedEducationProviders = epSnap.docs.map(doc => doc.data());
  
  if (cachedEducationProviders.length === 0) {
    cachedEducationProviders = [...DEFAULT_EDUCATION_PROVIDERS];
    for (const ep of DEFAULT_EDUCATION_PROVIDERS) {
      await setDoc(doc(db, "education_providers", ep.id), ep);
    }
  }

  const empSnap = await getDocs(collection(db, "employees"));
  cachedEmployees = empSnap.docs.map(doc => doc.data());
  
  if (cachedEmployees.length === 0) {
    cachedEmployees = [...DEFAULT_EMPLOYEES];
    for (const emp of DEFAULT_EMPLOYEES) {
      await setDoc(doc(db, "employees", emp.id), emp);
    }
  }

  // Dynamically update footer programs list
  const footerList = document.getElementById("footer-programs-list");
  if (footerList && cachedPrograms.length > 0) {
    footerList.innerHTML = cachedPrograms.map(p => {
      const ageFilter = p.ageRange.replace("Ages ", "");
      return `<li><a href="#/classes?filter=${ageFilter}">${p.name} (${p.ageRange})</a></li>`;
    }).join("");
  }
}

function getPrograms() {
  return cachedPrograms;
}

function getEducationProviders() {
  return cachedEducationProviders;
}

function getEmployees() {
  return cachedEmployees;
}

function getClasses() {
  return cachedClasses;
}

async function saveClasses(classes) {
  const deletedClasses = cachedClasses.filter(oldCls => !classes.some(newCls => newCls.id === oldCls.id));
  cachedClasses = classes;
  for (const cls of deletedClasses) {
    try {
      await deleteDoc(doc(db, "classes", cls.id));
    } catch (e) {
      console.error(e);
    }
  }
  for (const cls of classes) {
    try {
      await setDoc(doc(db, "classes", cls.id), cls);
    } catch (e) {
      console.error(e);
    }
  }
}

function getEnrollments() {
  return cachedEnrollments;
}

async function saveEnrollments(enrollments) {
  const deletedEnrollments = cachedEnrollments.filter(oldEnr => !enrollments.some(newEnr => newEnr.id === oldEnr.id));
  cachedEnrollments = enrollments;
  for (const enr of deletedEnrollments) {
    try {
      await deleteDoc(doc(db, "enrollments", enr.id));
    } catch (e) {
      console.error(e);
    }
  }
  for (const enr of enrollments) {
    try {
      await setDoc(doc(db, "enrollments", enr.id), enr);
    } catch (e) {
      console.error(e);
    }
  }
}

const DEFAULT_INQUIRIES = [
  {
    id: "inquiry-1",
    name: "Principal Davies",
    email: "davies.p@union.k12.ca.us",
    phone: "(408) 555-4321",
    subject: "After-school robotics program request for Lincoln Elementary",
    message: "Hello, we are interested in starting a Bricks Challenge after-school club for our 2nd and 3rd graders on campus. Do you have availability for Friday afternoons in the Fall semester? We typically have 15-20 students interested.",
    status: "received",
    timestamp: "2026-05-20T10:30:00Z"
  },
  {
    id: "inquiry-2",
    name: "Marcus Aurelius",
    email: "marcus.a@example.com",
    phone: "(408) 555-8765",
    subject: "Birthday party package inquiry",
    message: "Hi! My son's 8th birthday is in July. Can you share the pricing details for hosting a motorized Lego party at our home in Southwest San Jose? There will be about 12 children.",
    status: "reviewed",
    timestamp: "2026-05-19T14:15:00Z"
  },
  {
    id: "inquiry-3",
    name: "Helena Smith",
    email: "hsmith@goldenagesenior.org",
    phone: "(408) 555-0987",
    subject: "Golden Age Wellness workshop request",
    message: "We would love to organize a trial session of your Golden Age motor-skills workshop for our residents. Could you send us the requirements for table space and electricity?",
    status: "responded",
    timestamp: "2026-05-18T09:00:00Z"
  }
];

function getInquiries() {
  return cachedInquiries;
}

async function saveInquiries(inquiries) {
  const deletedInquiries = cachedInquiries.filter(oldInq => !inquiries.some(newInq => newInq.id === oldInq.id));
  cachedInquiries = inquiries;
  for (const inq of deletedInquiries) {
    try {
      await deleteDoc(doc(db, "inquiries", inq.id));
    } catch (e) {
      console.error(e);
    }
  }
  for (const inq of inquiries) {
    try {
      await setDoc(doc(db, "inquiries", inq.id), inq);
    } catch (e) {
      console.error(e);
    }
  }
}

async function resetDatabase() {
  const viewport = document.getElementById("app-viewport");
  if (viewport) {
    viewport.innerHTML = `
      <div class="loader-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; gap: 1.5rem;">
        <div class="loader-brick">
          <div class="loader-stud loader-stud-1"></div>
          <div class="loader-stud loader-stud-2"></div>
          <div class="loader-stud loader-stud-3"></div>
          <div class="loader-stud loader-stud-4"></div>
        </div>
        <p style="font-family: var(--font-family); color: var(--text-secondary); font-weight: 500; font-size: 1.1rem; letter-spacing: 0.5px;">Resetting Lego Database to defaults...</p>
      </div>
    `;
  }

  try {
    const classesSnap = await getDocs(collection(db, "classes"));
    for (const d of classesSnap.docs) {
      await deleteDoc(doc(db, "classes", d.id));
    }
    const enrollSnap = await getDocs(collection(db, "enrollments"));
    for (const d of enrollSnap.docs) {
      await deleteDoc(doc(db, "enrollments", d.id));
    }
    const inqSnap = await getDocs(collection(db, "inquiries"));
    for (const d of inqSnap.docs) {
      await deleteDoc(doc(db, "inquiries", d.id));
    }

    for (const cls of DEFAULT_CLASSES) {
      await setDoc(doc(db, "classes", cls.id), cls);
    }
    for (const enroll of DEFAULT_ENROLLMENTS) {
      await setDoc(doc(db, "enrollments", enroll.id), enroll);
    }
    for (const inq of DEFAULT_INQUIRIES) {
      await setDoc(doc(db, "inquiries", inq.id), inq);
    }

    alert("Database successfully reset to defaults!");
    await syncFromFirestore();
  } catch (error) {
    console.error("Error resetting database:", error);
    alert("Error resetting database. Please check console for details.");
  }

  window.location.reload();
}

// Global active view state
let currentView = "home";
let isAdminAuthenticated = sessionStorage.getItem("ye_admin_auth") === "true";

// ==========================================================================
// 2. Hash Router
// ==========================================================================

function handleRouting() {
  const hash = window.location.hash || "#/home";
  
  // Close mobile nav menu if open
  const navLinks = document.getElementById("nav-links");
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }

  // Parse path & query params
  const hashParts = hash.split("?");
  const route = hashParts[0];
  const queryStr = hashParts[1] || "";
  
  // Convert query string to object
  const queryParams = {};
  if (queryStr) {
    queryStr.split("&").forEach(param => {
      const [key, val] = param.split("=");
      queryParams[decodeURIComponent(key)] = decodeURIComponent(val || "");
    });
  }

  // Update navigation active states
  document.querySelectorAll(".nav-item").forEach(link => {
    const dataPath = link.getAttribute("data-path");
    if (route.includes(dataPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  const viewport = document.getElementById("app-viewport");
  viewport.innerHTML = ""; // Clear viewport

  // Route Dispatcher
  if (route === "#/home") {
    currentView = "home";
    renderHome(viewport);
  } else if (route === "#/about") {
    currentView = "about";
    renderAbout(viewport);
  } else if (route === "#/classes") {
    currentView = "classes";
    renderClasses(viewport, queryParams);
  } else if (route === "#/faq") {
    currentView = "faq";
    renderFaq(viewport);
  } else if (route === "#/admin") {
    currentView = "admin";
    renderAdmin(viewport);
  } else if (route === "#/enroll") {
    currentView = "enroll";
    renderEnroll(viewport, queryParams);
  } else {
    // Fallback to home
    window.location.hash = "#/home";
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

// Mobile Hamburger Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

// Logo Click Navigation
document.getElementById("nav-logo").addEventListener("click", () => {
  window.location.hash = "#/home";
});

// Listen to Hash Changes
window.addEventListener("hashchange", handleRouting);
window.addEventListener("DOMContentLoaded", async () => {
  // Show loading indicator
  const viewport = document.getElementById("app-viewport");
  if (viewport) {
    viewport.innerHTML = `
      <div class="loader-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; gap: 1.5rem;">
        <div class="loader-brick">
          <div class="loader-stud loader-stud-1"></div>
          <div class="loader-stud loader-stud-2"></div>
          <div class="loader-stud loader-stud-3"></div>
          <div class="loader-stud loader-stud-4"></div>
        </div>
        <p style="font-family: var(--font-family); color: var(--text-secondary); font-weight: 500; font-size: 1.1rem; letter-spacing: 0.5px;">Assembling Lego Database...</p>
      </div>
    `;
  }
  
  try {
    await syncFromFirestore();
  } catch (error) {
    console.error("Error syncing from Firestore:", error);
  }
  handleRouting();
});


// ==========================================================================
// 3. Render Views
// ==========================================================================

// --- Home Page ---
function renderHome(container) {
  container.innerHTML = `
    <div class="page-view">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span>Now Enrolling for Summer Camps & Fall 2026</span>
          </div>
          <h1 class="hero-title">Building Tomorrow's <br><span class="color">Engineers & Creators</span></h1>
          <p class="hero-desc">Interactive, hands-on Lego Robotics classes that transform complex engineering and science concepts into fun, playable experiments for kids ages 4 to 14.</p>
          <div class="hero-actions">
            <a href="#/classes" class="btn btn-primary">Explore Classes <i class="fa-solid fa-arrow-right"></i></a>
            <a href="#/faq" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div class="hero-media">
          <div class="hero-media-wrapper">
            <img src="assets/lego_robotics_banner.png" alt="Lego Robotics Robot Concept">
          </div>
          <!-- Floating glass card -->
          <div class="glass-panel hero-floating-card">
            <div class="floating-icon"><i class="fa-solid fa-gears" style="color: var(--lego-teal);"></i></div>
            <div class="floating-info">
              <h4>Lincoln Elementary</h4>
              <p>Next class starts Tuesday</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section (Bento Box style) -->
      <section class="stats-container">
        <div class="glass-panel stat-card blue">
          <div class="stat-number">30k+</div>
          <div class="stat-label">Happy Students Globally</div>
        </div>
        <div class="glass-panel stat-card red">
          <div class="stat-number">15+</div>
          <div class="stat-label">Local Schools Served</div>
        </div>
        <div class="glass-panel stat-card yellow">
          <div class="stat-number">120+</div>
          <div class="stat-label">Robotics Models Built</div>
        </div>
        <div class="glass-panel stat-card teal">
          <div class="stat-number">4.9★</div>
          <div class="stat-label">Parent Satisfaction Rating</div>
        </div>
      </section>

      <!-- Program Overview -->
      <section class="programs-section">
        <div class="section-header">
          <span class="section-tag">Learning Pathways</span>
          <h2 class="section-title">Designed for Every Age & Stage</h2>
          <p class="section-subtitle">We grow with your child. Our multi-stage programs build structural concepts, mechanics, block programming, and mechanical theory.</p>
        </div>
        
        <div class="programs-grid">
          <!-- Program 1: Bricks Challenge -->
          <div class="glass-panel program-card red">
            <div class="program-img-wrapper">
              <img src="assets/bricks_challenge.png" alt="Bricks Challenge Program Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Ages 7 - 10</span>
              <h3>Bricks Challenge</h3>
              <p>Introduces mechanics, classical physics, and structural design using LEGO® building bricks. Students construct motorized machinery and analyze gear ratios.</p>
              <a href="#/classes?filter=7-10" class="btn btn-secondary" style="margin-top: 1rem;">View Classes</a>
            </div>
          </div>

          <!-- Program 2: Galileo Technic -->
          <div class="glass-panel program-card teal">
            <div class="program-img-wrapper">
              <img src="assets/galileo_technic.jpg" alt="Galileo Technic Program Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Ages 7 - 10</span>
              <h3>Galileo Technic</h3>
              <p>Explores advanced machinery, kinematics, double gearing, differential gearboxes, and automated mechanics. Focuses on real-world industrial physics.</p>
              <a href="#/classes?filter=7-10" class="btn btn-secondary" style="margin-top: 1rem;">View Classes</a>
            </div>
          </div>

          <!-- Program 3: Algo Play -->
          <div class="glass-panel program-card blue">
            <div class="program-img-wrapper">
              <img src="assets/algo_play.png" alt="Algo Play Program Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Ages 4 - 6</span>
              <h3>Algo Play</h3>
              <p>Tactile and visual introduction to algorithmic thinking and code sequencing. Young children design and solve tasks using logic bricks.</p>
              <a href="#/classes?filter=4-6" class="btn btn-secondary" style="margin-top: 1rem;">View Classes</a>
            </div>
          </div>

          <!-- Program 4: Robo Toys -->
          <div class="glass-panel program-card yellow">
            <div class="program-img-wrapper">
              <img src="assets/robo_toys.png" alt="Robo Toys Program Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Ages 10 - 14</span>
              <h3>Robo Toys</h3>
              <p>Combines robotics construction with intuitive block coding. Children program autonomous vehicles and mechanical systems using sensors.</p>
              <a href="#/classes?filter=10-14" class="btn btn-secondary" style="margin-top: 1rem;">View Classes</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Model Showcase Section -->
      <section style="max-width: 1200px; margin: 0 auto 6rem auto; padding: 0 1.5rem;">
        <div class="section-header" style="margin-bottom: 3rem; text-align: center;">
          <span class="section-tag" style="color: var(--lego-teal);">Hands-on Creations</span>
          <h2 class="section-title">What Our Students Build</h2>
          <p class="section-subtitle">Real motorized and programmed Lego models built by students in classes to learn engineering and logic concepts.</p>
        </div>

        <div class="glass-panel showcase-carousel-container" style="position: relative; overflow: hidden; padding: 2.5rem; display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: center; min-height: 480px;">
          <!-- Left side: Image Showcase -->
          <div class="showcase-media-wrapper" style="position: relative; border-radius: 12px; overflow: hidden; aspect-ratio: 1; border: 1px solid var(--glass-border); background: #ffffff; box-shadow: var(--shadow-sm); display: flex; align-items: center; justify-content: center;">
            <img id="showcase-img" src="assets/model_1.jpg" alt="Model Build" style="max-width: 90%; max-height: 90%; object-fit: contain; transition: opacity 0.3s ease, transform 0.3s ease;">
            
            <button id="showcase-prev" class="showcase-btnprev" aria-label="Previous Model">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button id="showcase-next" class="showcase-btnnext" aria-label="Next Model">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <!-- Right side: Content Details -->
          <div class="showcase-content-wrapper" style="display: flex; flex-direction: column; gap: 1.5rem; justify-content: center; height: 100%;">
            <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
              <span id="showcase-level" class="showcase-badge" style="background: rgba(255, 68, 68, 0.1); color: var(--lego-red); border: 1px solid rgba(255, 68, 68, 0.2);">Bricks Challenge</span>
              <span id="showcase-topic" class="showcase-badge" style="background: rgba(0, 180, 216, 0.1); color: var(--lego-blue); border: 1px solid rgba(0, 180, 216, 0.2);">Gears & Motion</span>
            </div>
            
            <h3 id="showcase-title" style="font-size: 2rem; color: var(--text-primary); font-family: var(--font-heading); font-weight: 800; line-height: 1.2; margin: 0;">Motorized Seesaw</h3>
            <p id="showcase-desc" style="color: var(--text-secondary); line-height: 1.7; font-size: 1.05rem; margin: 0;">An interactive seesaw demonstrating reciprocal motion, torque, and structural load balancing. Students learn how gear reduction allows a small motor to lift heavier loads at a slower speed.</p>
            
            <div style="border-top: 1px solid var(--glass-border); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary); font-size: 0.95rem;">
                <i class="fa-solid fa-gear" style="color: var(--lego-teal); width: 20px;"></i>
                <span id="showcase-concept"><strong>Core Engineering Concept:</strong> Gear ratios, Speed vs. Torque reduction</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary); font-size: 0.95rem;">
                <i class="fa-solid fa-microchip" style="color: var(--lego-red); width: 20px;"></i>
                <span id="showcase-tech"><strong>Difficulty Level:</strong> Beginner to Intermediate</span>
              </div>
            </div>

            <!-- Dots Indicator / Controls bottom -->
            <div style="display: flex; gap: 0.5rem; margin-top: 1rem;" id="showcase-dots">
              ${SHOWCASE_MODELS.map((_, idx) => `
                <span class="showcase-dot${idx === 0 ? ' active' : ''}" data-index="${idx}"></span>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- Target Audiences / Formats Overview -->
      <section class="programs-section" style="padding-top: 0;">
        <div class="section-header">
          <span class="section-tag">Programs for Everyone</span>
          <h2 class="section-title">STEM Opportunities for All Occasions</h2>
          <p class="section-subtitle">We bring the joy of engineering and hands-on coding to various formats, ages, and community spaces across Southwest San Jose.</p>
        </div>
        
        <div class="programs-grid">
          <!-- Audience 1: Summer & Winter Camps -->
          <div class="glass-panel program-card blue">
            <div class="program-img-wrapper">
              <img src="assets/camp.png" alt="Young Engineers Camps Logo">
            </div>
            <div class="program-content">
              <span class="program-age">All Ages</span>
              <h3>Summer & Winter Camps</h3>
              <p>Engaging full-day and half-day holiday programs filled with design challenges, collaborative building, and dynamic science experiments.</p>
              <a href="#/classes?search=Camp" class="btn btn-secondary" style="margin-top: 1rem;">View Camps</a>
            </div>
          </div>

          <!-- Audience 2: Birthday Parties -->
          <div class="glass-panel program-card red">
            <div class="program-img-wrapper">
              <img src="assets/birthday.png" alt="Birthday Parties Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Custom Age Groups</span>
              <h3>Birthday Parties</h3>
              <p>Unforgettable motorized Lego-themed birthday celebrations. We bring the fun directly to you with customizable model builds and robotics activities.</p>
              <a href="#/faq" class="btn btn-secondary" style="margin-top: 1rem;">Inquire Party</a>
            </div>
          </div>

          <!-- Audience 3: School Build Up -->
          <div class="glass-panel program-card yellow">
            <div class="program-img-wrapper">
              <img src="assets/build_up.png" alt="Build Up Enrichment Logo">
            </div>
            <div class="program-content">
              <span class="program-age">School Programs</span>
              <h3>Build Up Enrichment</h3>
              <p>Partner workshops, specialized extracurricular modules, and school events designed to supplement STEM curricula with engineering labs.</p>
              <a href="#/classes" class="btn btn-secondary" style="margin-top: 1rem;">Explore Modules</a>
            </div>
          </div>

          <!-- Audience 4: Golden Age -->
          <div class="glass-panel program-card teal">
            <div class="program-img-wrapper">
              <img src="assets/golden_age.png" alt="Golden Age Program Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Seniors (65+)</span>
              <h3>Golden Age Wellness</h3>
              <p>Unique cognitive fitness and motor-skills program utilizing motorized Lego models. Fosters community connection and mental dexterity.</p>
              <a href="#/faq" class="btn btn-secondary" style="margin-top: 1rem;">Learn More</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;

  // Bind Showcase Carousel Event Listeners
  let currentModelIndex = 0;
  
  const imgEl = document.getElementById("showcase-img");
  const titleEl = document.getElementById("showcase-title");
  const descEl = document.getElementById("showcase-desc");
  const conceptEl = document.getElementById("showcase-concept");
  const techEl = document.getElementById("showcase-tech");
  const levelEl = document.getElementById("showcase-level");
  const topicEl = document.getElementById("showcase-topic");
  const prevBtn = document.getElementById("showcase-prev");
  const nextBtn = document.getElementById("showcase-next");
  const dotsContainer = document.getElementById("showcase-dots");

  function updateShowcase(index) {
    currentModelIndex = index;
    const model = SHOWCASE_MODELS[index];
    
    // Apply temporary fade transition
    imgEl.style.opacity = "0";
    imgEl.style.transform = "scale(0.95)";
    
    setTimeout(() => {
      imgEl.src = model.img;
      imgEl.alt = model.title;
      titleEl.textContent = model.title;
      descEl.textContent = model.desc;
      conceptEl.innerHTML = `<strong>Core Engineering Concept:</strong> ${model.concept}`;
      techEl.innerHTML = `<strong>Difficulty Level:</strong> ${model.difficulty}`;
      levelEl.textContent = model.program;
      topicEl.textContent = model.topic;
      
      // Update badge styling
      levelEl.className = "showcase-badge";
      if (model.badgeColor === "red") {
        levelEl.style.background = "rgba(255, 68, 68, 0.1)";
        levelEl.style.color = "var(--lego-red)";
        levelEl.style.borderColor = "rgba(255, 68, 68, 0.2)";
      } else if (model.badgeColor === "blue") {
        levelEl.style.background = "rgba(0, 180, 216, 0.1)";
        levelEl.style.color = "var(--lego-blue)";
        levelEl.style.borderColor = "rgba(0, 180, 216, 0.2)";
      } else if (model.badgeColor === "teal") {
        levelEl.style.background = "rgba(0, 200, 180, 0.1)";
        levelEl.style.color = "var(--lego-teal)";
        levelEl.style.borderColor = "rgba(0, 200, 180, 0.2)";
      } else if (model.badgeColor === "yellow") {
        levelEl.style.background = "rgba(255, 193, 7, 0.1)";
        levelEl.style.color = "var(--lego-yellow)";
        levelEl.style.borderColor = "rgba(255, 193, 7, 0.2)";
      }

      // Update active dot
      const dots = dotsContainer.querySelectorAll(".showcase-dot");
      dots.forEach((dot, dIdx) => {
        if (dIdx === index) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });

      imgEl.style.opacity = "1";
      imgEl.style.transform = "scale(1)";
    }, 200);
  }

  if (prevBtn && nextBtn && dotsContainer) {
    prevBtn.addEventListener("click", () => {
      let idx = currentModelIndex - 1;
      if (idx < 0) idx = SHOWCASE_MODELS.length - 1;
      updateShowcase(idx);
    });

    nextBtn.addEventListener("click", () => {
      let idx = currentModelIndex + 1;
      if (idx >= SHOWCASE_MODELS.length) idx = 0;
      updateShowcase(idx);
    });

    dotsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("showcase-dot")) {
        const idx = parseInt(e.target.getAttribute("data-index"), 10);
        updateShowcase(idx);
      }
    });

    // Auto rotate every 8 seconds
    const intervalId = setInterval(() => {
      // Check if carousel still exists in document (prevent memory leaks)
      if (!document.getElementById("showcase-img")) {
        clearInterval(intervalId);
        return;
      }
      let idx = currentModelIndex + 1;
      if (idx >= SHOWCASE_MODELS.length) idx = 0;
      updateShowcase(idx);
    }, 8000);
  }
}

// --- Classes Directory ---
function renderClasses(container, queryParams) {
  const classes = getClasses();
  const activeFilter = queryParams.filter || "all";
  const searchQuery = (queryParams.search || "").toLowerCase();

  // Filter classes
  const filteredClasses = classes.filter(cls => {
    const matchesFilter = activeFilter === "all" || cls.ageGroup === activeFilter;
    const matchesSearch = !searchQuery || 
      cls.title.toLowerCase().includes(searchQuery) ||
      cls.location.toLowerCase().includes(searchQuery) ||
      cls.program.toLowerCase().includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  // Render Skeleton
  container.innerHTML = `
    <div class="page-view classes-container">
      <div class="section-header">
        <span class="section-tag">Robotics Directory</span>
        <h2 class="section-title">Explore Active Lego Classes</h2>
        <p class="section-subtitle">Enroll directly in after-school programs, weekend workshops, and summer camps hosted at local elementary schools.</p>
      </div>

      <!-- Interactive Filters & Search -->
      <div class="glass-panel filter-bar">
        <div class="filter-group">
          <button class="filter-btn ${activeFilter === "all" ? "active" : ""}" data-val="all">All Ages</button>
          <button class="filter-btn ${activeFilter === "4-6" ? "active" : ""}" data-val="4-6">Ages 4-6</button>
          <button class="filter-btn ${activeFilter === "7-10" ? "active" : ""}" data-val="7-10">Ages 7-10</button>
          <button class="filter-btn ${activeFilter === "10-14" ? "active" : ""}" data-val="10-14">Ages 10-14</button>
        </div>
        <div class="search-input-wrapper">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" class="search-input" id="class-search" placeholder="Search schools, programs..." value="${queryParams.search || ""}">
        </div>
      </div>

      <!-- Classes Grid -->
      <div class="classes-grid" id="classes-list-grid">
        ${renderClassCards(filteredClasses)}
      </div>
    </div>
  `;

  // Bind filter events
  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const val = e.target.getAttribute("data-val");
      queryParams.filter = val;
      updateClassUrl(queryParams);
    });
  });

  // Bind search keyup (debounced or simple keyup)
  const searchInput = container.querySelector("#class-search");
  searchInput.addEventListener("input", (e) => {
    queryParams.search = e.target.value;
    updateClassUrl(queryParams);
  });
}

function renderClassCards(classList) {
  if (classList.length === 0) {
    return `
      <div class="no-classes-found glass-panel">
        <i class="fa-regular fa-calendar-times" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem; display: block;"></i>
        <h3>No classes matching your search or filters</h3>
        <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try selecting "All Ages" or expanding your search term.</p>
      </div>
    `;
  }

  return classList.map(cls => {
    let spotsLabel = `${cls.spotsRemaining} spots left`;
    let spotsClass = "";
    if (cls.spotsRemaining === 0) {
      spotsLabel = "Class Full";
      spotsClass = "full";
    } else if (cls.spotsRemaining <= 3) {
      spotsLabel = `Only ${cls.spotsRemaining} left!`;
      spotsClass = "limited";
    }

    // Resolve provider
    const providers = getEducationProviders();
    const provider = providers.find(p => p.id === cls.provider_id);
    const providerName = provider ? provider.name : "";
    const displayLocation = providerName ? `${providerName} - ${cls.location}` : cls.location;

    // Resolve dates
    let datesDisplay = "";
    if (cls.season && cls.start_date && cls.end_date) {
      const startObj = new Date(cls.start_date);
      const endObj = new Date(cls.end_date);
      // Account for timezone offset to prevent off-by-one day issues locally
      startObj.setMinutes(startObj.getMinutes() + startObj.getTimezoneOffset());
      endObj.setMinutes(endObj.getMinutes() + endObj.getTimezoneOffset());
      
      const start = startObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      const end = endObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      datesDisplay = `<div class="class-detail-item">
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>${cls.school_year || ''} ${cls.season} Term: ${start} - ${end} (${cls.number_of_sessions || '?'} sessions)</span>
                      </div>`;
    }

    return `
      <div class="glass-panel class-card ${cls.accent}">
        <div class="class-card-accent"></div>
        <div class="class-card-body">
          <span class="class-tag">${cls.program} (Ages ${cls.ageGroup})</span>
          <h3 class="class-title">${cls.title}</h3>
          <p class="class-desc">${cls.description}</p>
          
          <div class="class-details">
            <div class="class-detail-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>${displayLocation}</span>
            </div>
            ${datesDisplay}
            <div class="class-detail-item">
              <i class="fa-solid fa-clock"></i>
              <span>${cls.dayOfWeek}, ${cls.time}</span>
            </div>
            <div class="class-detail-item">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>Grade Level: ${cls.ageLabel}</span>
            </div>
          </div>

          <div class="class-footer">
            <div class="class-price">
              <span class="amount">$${cls.price}</span>
              <span class="lbl">Tuition (Full Term)</span>
            </div>
            <span class="class-spots ${spotsClass}">${spotsLabel}</span>
          </div>

          ${cls.spotsRemaining > 0 
            ? `<a href="#/enroll?classId=${cls.id}" class="btn btn-primary btn-enroll-card">Enroll Child <i class="fa-solid fa-user-plus"></i></a>` 
            : `<button class="btn btn-secondary btn-enroll-card" disabled>Waiting List Only</button>`
          }
        </div>
      </div>
    `;
  }).join("");
}

function updateClassUrl(queryParams) {
  const parts = [];
  if (queryParams.filter && queryParams.filter !== "all") parts.push(`filter=${queryParams.filter}`);
  if (queryParams.search) parts.push(`search=${encodeURIComponent(queryParams.search)}`);
  
  const queryStr = parts.join("&");
  window.location.hash = `#/classes${queryStr ? "?" + queryStr : ""}`;
}


// --- Enrollment Page (Multi-step Wizard) ---
let enrollmentStepState = {
  currentStep: 1,
  selectedClass: null,
  formData: {}
};

function renderEnroll(container, queryParams) {
  const classes = getClasses();
  const targetClassId = queryParams.classId;
  const targetClass = classes.find(c => c.id === targetClassId);

  // If no class selected, redirect or render error
  if (!targetClass) {
    container.innerHTML = `
      <div class="page-view enroll-container" style="text-align: center; padding: 6rem 2rem;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: var(--lego-red); margin-bottom: 1rem;"></i>
        <h2>No Class Selected</h2>
        <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">To enroll, please choose a class from the Robotics Classes directory.</p>
        <a href="#/classes" class="btn btn-primary">Browse Classes <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    `;
    return;
  }

  // Initialize or reset state for new class
  if (!enrollmentStepState.selectedClass || enrollmentStepState.selectedClass.id !== targetClass.id) {
    enrollmentStepState = {
      currentStep: 1,
      selectedClass: targetClass,
      formData: {
        parentFirstName: "",
        parentLastName: "",
        parentEmail: "",
        parentPhone: "",
        studentFirstName: "",
        studentLastName: "",
        studentAge: "",
        studentSchool: targetClass.location.split(",")[0],
        studentGrade: "",
        medicalNotes: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvv: ""
      }
    };
  }

  renderStep(container);
}

function renderStep(container) {
  const state = enrollmentStepState;
  const cls = state.selectedClass;

  container.innerHTML = `
    <div class="page-view enroll-container">
      <div class="enroll-header">
        <h2>Secure Class Registration</h2>
        <p>Register your child for <strong>${cls.title}</strong></p>
      </div>

      <!-- Step Progress Bar -->
      <div class="progress-steps">
        <div class="step-indicator ${state.currentStep === 1 ? 'active' : ''} ${state.currentStep > 1 ? 'completed' : ''}">
          <div class="step-number">${state.currentStep > 1 ? '<i class="fa-solid fa-check"></i>' : '1'}</div>
          <span class="step-label">Parent Details</span>
        </div>
        <div class="step-indicator ${state.currentStep === 2 ? 'active' : ''} ${state.currentStep > 2 ? 'completed' : ''}">
          <div class="step-number">${state.currentStep > 2 ? '<i class="fa-solid fa-check"></i>' : '2'}</div>
          <span class="step-label">Student Details</span>
        </div>
        <div class="step-indicator ${state.currentStep === 3 ? 'active' : ''}">
          <div class="step-number">3</div>
          <span class="step-label">Secure Checkout</span>
        </div>
      </div>

      <!-- Selected Class Summary Header -->
      <div class="selected-class-banner">
        <div class="selected-class-info">
          <h4>${cls.title}</h4>
          <p><i class="fa-solid fa-school"></i> ${cls.location} &nbsp;|&nbsp; <i class="fa-solid fa-calendar"></i> ${cls.dayOfWeek}, ${cls.time}</p>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 1.15rem; font-weight: 700; color: var(--lego-blue); font-family: var(--font-heading);">$${cls.price}</span>
        </div>
      </div>

      <!-- Form Wizard Card -->
      <form class="glass-panel form-card" id="enrollment-wizard-form" novalidate>
        
        <!-- STEP 1: Parent Info -->
        <div class="form-step-content ${state.currentStep === 1 ? 'active' : ''}">
          <h3 class="form-step-title">Parent / Guardian Information</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="parentFirstName">First Name *</label>
              <input type="text" class="form-control" id="parentFirstName" value="${state.formData.parentFirstName}" required placeholder="John">
              <span class="field-error">First name is required</span>
            </div>
            <div class="form-group">
              <label for="parentLastName">Last Name *</label>
              <input type="text" class="form-control" id="parentLastName" value="${state.formData.parentLastName}" required placeholder="Doe">
              <span class="field-error">Last name is required</span>
            </div>
            <div class="form-group">
              <label for="parentEmail">Email Address *</label>
              <input type="email" class="form-control" id="parentEmail" value="${state.formData.parentEmail}" required placeholder="john.doe@example.com">
              <span class="field-error">Provide a valid email address</span>
            </div>
            <div class="form-group">
              <label for="parentPhone">Phone Number *</label>
              <input type="tel" class="form-control" id="parentPhone" value="${state.formData.parentPhone}" required placeholder="(408) 555-0199">
              <span class="field-error">Phone number is required</span>
            </div>
          </div>
        </div>

        <!-- STEP 2: Student Info -->
        <div class="form-step-content ${state.currentStep === 2 ? 'active' : ''}">
          <h3 class="form-step-title">Student Information</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="studentFirstName">Student First Name *</label>
              <input type="text" class="form-control" id="studentFirstName" value="${state.formData.studentFirstName}" required placeholder="Jane">
              <span class="field-error">Student first name is required</span>
            </div>
            <div class="form-group">
              <label for="studentLastName">Student Last Name *</label>
              <input type="text" class="form-control" id="studentLastName" value="${state.formData.studentLastName}" required placeholder="Doe">
              <span class="field-error">Student last name is required</span>
            </div>
            <div class="form-group">
              <label for="studentAge">Student Age *</label>
              <input type="number" class="form-control" id="studentAge" value="${state.formData.studentAge}" required min="4" max="15" placeholder="8">
              <span class="field-error">Age must be between 4 and 15</span>
            </div>
            <div class="form-group">
              <label for="studentGrade">Current Grade Level *</label>
              <select class="form-control" id="studentGrade" required>
                <option value="" disabled ${state.formData.studentGrade === "" ? "selected" : ""}>Select Grade</option>
                <option value="Pre-K" ${state.formData.studentGrade === "Pre-K" ? "selected" : ""}>Pre-K</option>
                <option value="Kindergarten" ${state.formData.studentGrade === "Kindergarten" ? "selected" : ""}>Kindergarten</option>
                <option value="1st Grade" ${state.formData.studentGrade === "1st Grade" ? "selected" : ""}>1st Grade</option>
                <option value="2nd Grade" ${state.formData.studentGrade === "2nd Grade" ? "selected" : ""}>2nd Grade</option>
                <option value="3rd Grade" ${state.formData.studentGrade === "3rd Grade" ? "selected" : ""}>3rd Grade</option>
                <option value="4th Grade" ${state.formData.studentGrade === "4th Grade" ? "selected" : ""}>4th Grade</option>
                <option value="5th Grade" ${state.formData.studentGrade === "5th Grade" ? "selected" : ""}>5th Grade</option>
                <option value="6th-8th Grade" ${state.formData.studentGrade === "6th-8th Grade" ? "selected" : ""}>6th-8th Grade</option>
              </select>
              <span class="field-error">Grade level is required</span>
            </div>
            <div class="form-group">
              <label for="studentSchool">School Name *</label>
              <input type="text" class="form-control" id="studentSchool" value="${state.formData.studentSchool}" required placeholder="Lincoln Elementary">
              <span class="field-error">School name is required</span>
            </div>
            <div class="form-group">
              <label for="medicalNotes">Allergies / Special Instructions</label>
              <input type="text" class="form-control" id="medicalNotes" value="${state.formData.medicalNotes}" placeholder="None or details...">
            </div>
          </div>
        </div>

        <!-- STEP 3: Simulated Checkout -->
        <div class="form-step-content ${state.currentStep === 3 ? 'active' : ''}">
          <h3 class="form-step-title">Secure Billing Checkout</h3>
          
          <div class="checkout-total">
            Total Term Tuition: <span>$${cls.price}.00</span>
          </div>

          <div class="form-grid">
            <div class="form-group col-span-2">
              <div style="display:flex; justify-content: space-between; align-items:center;">
                <label for="cardNumber">Credit Card Number *</label>
                <div class="card-logo-icons">
                  <i class="fa-brands fa-cc-visa"></i>
                  <i class="fa-brands fa-cc-mastercard"></i>
                  <i class="fa-brands fa-cc-amex"></i>
                </div>
              </div>
              <input type="text" class="form-control" id="cardNumber" value="${state.formData.cardNumber}" required placeholder="4111 2222 3333 4444" pattern="^[0-9\\s]{13,19}$">
              <span class="field-error">Provide a valid card number</span>
            </div>
            
            <div class="form-group">
              <label for="cardExpiry">Expiration Date *</label>
              <input type="text" class="form-control" id="cardExpiry" value="${state.formData.cardExpiry}" required placeholder="MM/YY" pattern="^(0[1-9]|1[0-2])\\/?([0-9]{2})$">
              <span class="field-error">Provide MM/YY</span>
            </div>
            
            <div class="form-group">
              <label for="cardCvv">CVV/Security Code *</label>
              <input type="password" class="form-control" id="cardCvv" value="${state.formData.cardCvv}" required placeholder="3-4 digits" pattern="^[0-9]{3,4}$">
              <span class="field-error">Provide 3-4 digits CVV</span>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap: 0.5rem; margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-secondary);">
            <i class="fa-solid fa-lock" style="color: var(--lego-teal);"></i>
            <span>256-bit SSL Encrypted transaction simulator. No real money will be charged.</span>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="form-actions">
          ${state.currentStep > 1 
            ? `<button type="button" class="btn btn-secondary" id="wizard-back-btn"><i class="fa-solid fa-arrow-left"></i> Back</button>` 
            : `<div></div>` // Spacer
          }
          
          ${state.currentStep < 3 
            ? `<button type="button" class="btn btn-primary" id="wizard-next-btn">Continue <i class="fa-solid fa-arrow-right"></i></button>` 
            : `<button type="submit" class="btn btn-accent" id="wizard-submit-btn">Complete Enrollment <i class="fa-solid fa-check"></i></button>`
          }
        </div>
      </form>
    </div>
  `;

  // Bind Actions
  const form = container.querySelector("#enrollment-wizard-form");
  
  if (container.querySelector("#wizard-next-btn")) {
    container.querySelector("#wizard-next-btn").addEventListener("click", () => {
      if (validateStepFields(container, state.currentStep)) {
        saveStepInputs(container, state.currentStep);
        state.currentStep += 1;
        renderStep(container);
      }
    });
  }

  if (container.querySelector("#wizard-back-btn")) {
    container.querySelector("#wizard-back-btn").addEventListener("click", () => {
      saveStepInputs(container, state.currentStep);
      state.currentStep -= 1;
      renderStep(container);
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (validateStepFields(container, 3)) {
      saveStepInputs(container, 3);
      
      const submitBtn = form.querySelector("#wizard-submit-btn");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Processing... <i class="fa-solid fa-spinner fa-spin"></i>`;
      }
      
      await processEnrollmentCompletion(container);
    }
  });
}

function saveStepInputs(container, step) {
  const state = enrollmentStepState;
  if (step === 1) {
    state.formData.parentFirstName = container.querySelector("#parentFirstName").value.trim();
    state.formData.parentLastName = container.querySelector("#parentLastName").value.trim();
    state.formData.parentEmail = container.querySelector("#parentEmail").value.trim();
    state.formData.parentPhone = container.querySelector("#parentPhone").value.trim();
  } else if (step === 2) {
    state.formData.studentFirstName = container.querySelector("#studentFirstName").value.trim();
    state.formData.studentLastName = container.querySelector("#studentLastName").value.trim();
    state.formData.studentAge = container.querySelector("#studentAge").value.trim();
    state.formData.studentGrade = container.querySelector("#studentGrade").value;
    state.formData.studentSchool = container.querySelector("#studentSchool").value.trim();
    state.formData.medicalNotes = container.querySelector("#medicalNotes").value.trim();
  } else if (step === 3) {
    state.formData.cardNumber = container.querySelector("#cardNumber").value.trim();
    state.formData.cardExpiry = container.querySelector("#cardExpiry").value.trim();
    state.formData.cardCvv = container.querySelector("#cardCvv").value.trim();
  }
}

function validateStepFields(container, step) {
  let isValid = true;

  const checkRequired = (id) => {
    const el = container.querySelector("#" + id);
    const grp = el.closest(".form-group");
    if (!el.value.trim()) {
      grp.classList.add("has-error");
      isValid = false;
    } else {
      grp.classList.remove("has-error");
    }
  };

  if (step === 1) {
    checkRequired("parentFirstName");
    checkRequired("parentLastName");
    
    // Email specific validation
    const emailEl = container.querySelector("#parentEmail");
    const emailGrp = emailEl.closest(".form-group");
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(emailEl.value.trim())) {
      emailGrp.classList.add("has-error");
      isValid = false;
    } else {
      emailGrp.classList.remove("has-error");
    }

    checkRequired("parentPhone");
  } else if (step === 2) {
    checkRequired("studentFirstName");
    checkRequired("studentLastName");
    
    // Age specific validation
    const ageEl = container.querySelector("#studentAge");
    const ageGrp = ageEl.closest(".form-group");
    const ageVal = parseInt(ageEl.value);
    if (isNaN(ageVal) || ageVal < 4 || ageVal > 15) {
      ageGrp.classList.add("has-error");
      isValid = false;
    } else {
      ageGrp.classList.remove("has-error");
    }

    checkRequired("studentGrade");
    checkRequired("studentSchool");
  } else if (step === 3) {
    // Card checks using pattern matching
    const cardEl = container.querySelector("#cardNumber");
    const cardGrp = cardEl.closest(".form-group");
    if (!new RegExp(cardEl.pattern).test(cardEl.value.replace(/\s+/g, ""))) {
      cardGrp.classList.add("has-error");
      isValid = false;
    } else {
      cardGrp.classList.remove("has-error");
    }

    const expiryEl = container.querySelector("#cardExpiry");
    const expiryGrp = expiryEl.closest(".form-group");
    if (!new RegExp(expiryEl.pattern).test(expiryEl.value.trim())) {
      expiryGrp.classList.add("has-error");
      isValid = false;
    } else {
      expiryGrp.classList.remove("has-error");
    }

    const cvvEl = container.querySelector("#cardCvv");
    const cvvGrp = cvvEl.closest(".form-group");
    if (!new RegExp(cvvEl.pattern).test(cvvEl.value.trim())) {
      cvvGrp.classList.add("has-error");
      isValid = false;
    } else {
      cvvGrp.classList.remove("has-error");
    }
  }

  return isValid;
}

async function processEnrollmentCompletion(container) {
  const state = enrollmentStepState;
  const classes = getClasses();
  const enrollments = getEnrollments();

  // Deduct remaining spot
  const clsIndex = classes.findIndex(c => c.id === state.selectedClass.id);
  if (clsIndex !== -1 && classes[clsIndex].spotsRemaining > 0) {
    classes[clsIndex].spotsRemaining -= 1;
    await saveClasses(classes);
  }

  // Create enrollment record
  const studentFullName = `${state.formData.studentFirstName} ${state.formData.studentLastName}`;
  const parentFullName = `${state.formData.parentFirstName} ${state.formData.parentLastName}`;
  
  const newEnrollment = {
    id: "enroll-" + Date.now(),
    classId: state.selectedClass.id,
    classTitle: state.selectedClass.title,
    studentName: studentFullName,
    studentAge: parseInt(state.formData.studentAge),
    school: state.formData.studentSchool,
    grade: state.formData.studentGrade,
    parentName: parentFullName,
    parentEmail: state.formData.parentEmail,
    parentPhone: state.formData.parentPhone,
    notes: state.formData.medicalNotes
  };

  enrollments.push(newEnrollment);
  await saveEnrollments(enrollments);

  // Render Success screen
  container.innerHTML = `
    <div class="page-view enroll-container">
      <div class="glass-panel success-screen">
        <div class="success-icon">
          <i class="fa-solid fa-check"></i>
        </div>
        <h2 class="success-title">Enrollment Completed!</h2>
        <p class="success-desc">We've sent a registration confirmation email to <strong>${state.formData.parentEmail}</strong>. Welcome to Southwest San Jose Young Engineers!</p>
        
        <div class="receipt-card">
          <div class="receipt-title">Registration Summary</div>
          <div class="receipt-row">
            <span>Student:</span>
            <strong>${studentFullName}</strong>
          </div>
          <div class="receipt-row">
            <span>Class:</span>
            <strong>${state.selectedClass.title}</strong>
          </div>
          <div class="receipt-row">
            <span>School / Location:</span>
            <strong>${state.selectedClass.location}</strong>
          </div>
          <div class="receipt-row">
            <span>Time:</span>
            <strong>${state.selectedClass.dayOfWeek}, ${state.selectedClass.time}</strong>
          </div>
          <div class="receipt-row total">
            <span>Amount Paid:</span>
            <strong>$${state.selectedClass.price}.00</strong>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap: 1rem;">
          <a href="#/classes" class="btn btn-primary">Browse Other Classes</a>
          <a href="#/home" class="btn btn-secondary">Return Home</a>
        </div>
      </div>
    </div>
  `;

  // Trigger Custom Confetti Simulation!
  startConfetti();

  // Reset state
  enrollmentStepState = {
    currentStep: 1,
    selectedClass: null,
    formData: {}
  };
}


// --- Admin Panel Dashboard ---
let activeRosterClassId = null;
let activeAdminTab = "classes";
let adminClassFilterCenter = "all";
let adminClassFilterYear = "all";
let adminClassFilterProgram = "all";
let editingClassId = null;
let editingProviderId = null;
let editingEmployeeId = null;
let activeInquiryId = null;

function renderAdmin(viewport) {
  if (!isAdminAuthenticated) {
    renderAdminLogin(viewport);
  } else {
    renderAdminDashboard(viewport);
  }
}

function renderAdminLogin(container) {
  container.innerHTML = `
    <div class="page-view">
      <div class="glass-panel admin-auth-panel">
        <div class="admin-auth-icon">
          <i class="fa-solid fa-lock"></i>
        </div>
        <h2 style="margin-bottom: 0.5rem;">Instructor Portal</h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 0.9rem;">Sign in to define classes, view student rosters, and manage enrollments.</p>
        
        <form id="admin-login-form" novalidate style="display:flex; flex-direction:column; gap:1.25rem; text-align:left;">
          <div class="form-group">
            <label for="admin-pass">Instructor Password *</label>
            <input type="password" class="form-control" id="admin-pass" required placeholder="Enter admin password">
            <span class="field-error">Incorrect password. Please try again.</span>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">Sign In <i class="fa-solid fa-sign-in-alt"></i></button>
        </form>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:1.5rem;">For demo evaluation, the password is: <code style="color: var(--lego-yellow);">admin</code></p>
      </div>
    </div>
  `;

  const form = container.querySelector("#admin-login-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const passInput = container.querySelector("#admin-pass");
    const grp = passInput.closest(".form-group");
    
    if (passInput.value === "admin") {
      grp.classList.remove("has-error");
      isAdminAuthenticated = true;
      sessionStorage.setItem("ye_admin_auth", "true");
      renderAdminDashboard(container);
    } else {
      grp.classList.add("has-error");
    }
  });
}

function renderAdminDashboard(container) {
  const classes = getClasses();
  const enrollments = getEnrollments();
  const inquiries = getInquiries();

  // Pick first class as active roster if not set
  if (!activeRosterClassId && classes.length > 0) {
    activeRosterClassId = classes[0].id;
  }

  // Pick first inquiry as active if not set
  if (!activeInquiryId && inquiries.length > 0) {
    activeInquiryId = inquiries[0].id;
  }

  // Prepare active view layout
  let activeLayoutHtml = "";
  if (activeAdminTab === "classes") {
    activeLayoutHtml = `
      <div class="admin-layout">
        <!-- LEFT: Classes & Class Creation -->
        <div style="display:flex; flex-direction:column; gap:2rem;">
          
          <!-- Defined Classes List -->
          <div class="glass-panel" style="padding: 1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:1rem;">
              <h3 class="admin-panel-title" style="margin:0;"><i class="fa-solid fa-list-check"></i> Defined Classes</h3>
              <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                <select class="form-control" id="filter-center" style="width:auto; padding:0.25rem 0.5rem; font-size:0.85rem; height:auto;">
                  <option value="all">All Centers</option>
                  ${getEducationProviders().map(p => `<option value="${p.id}" ${adminClassFilterCenter === p.id ? 'selected' : ''}>${p.name}</option>`).join('')}
                </select>
                <select class="form-control" id="filter-year" style="width:auto; padding:0.25rem 0.5rem; font-size:0.85rem; height:auto;">
                  <option value="all">All Years</option>
                  ${[...new Set(classes.map(c => c.school_year).filter(Boolean))].map(y => `<option value="${y}" ${adminClassFilterYear === y ? 'selected' : ''}>${y}</option>`).join('')}
                </select>
                <select class="form-control" id="filter-program" style="width:auto; padding:0.25rem 0.5rem; font-size:0.85rem; height:auto;">
                  <option value="all">All Programs</option>
                  ${getPrograms().map(p => `<option value="${p.id}" ${adminClassFilterProgram === p.id ? 'selected' : ''}>${p.name}</option>`).join('')}
                </select>
              </div>
            </div>
            <div class="admin-classes-list">
              ${classes.filter(c => {
                if (adminClassFilterCenter !== "all" && c.provider_id !== adminClassFilterCenter) return false;
                if (adminClassFilterYear !== "all" && c.school_year !== adminClassFilterYear) return false;
                if (adminClassFilterProgram !== "all" && c.program_id !== adminClassFilterProgram) return false;
                return true;
              }).map(c => {
                const providers = getEducationProviders();
                const provider = providers.find(p => p.id === c.provider_id);
                const providerName = provider ? provider.name : "Unknown Education Center";
                let dateStr = c.dayOfWeek;
                if (c.season && c.start_date && c.end_date) {
                  const s = new Date(c.start_date); s.setMinutes(s.getMinutes() + s.getTimezoneOffset());
                  const e = new Date(c.end_date); e.setMinutes(e.getMinutes() + e.getTimezoneOffset());
                  dateStr = `${c.school_year || ''} ${c.season}: ${s.toLocaleDateString(undefined, {month:'short', day:'numeric'})} - ${e.toLocaleDateString(undefined, {month:'short', day:'numeric'})} (${c.dayOfWeek})`;
                }
                return `
                <div class="admin-class-row ${c.id === activeRosterClassId ? 'active' : ''}" data-id="${c.id}">
                  <div class="admin-class-meta">
                    <h4>${c.title}</h4>
                    <p><i class="fa-solid fa-school"></i> ${providerName} - ${(c.location || "").split(',')[0]} &nbsp;|&nbsp; <i class="fa-solid fa-calendar"></i> ${dateStr}</p>
                    ${c.instructor_id ? `<p style="font-size: 0.75rem; color: var(--text-muted); margin: 0.2rem 0 0 0;"><i class="fa-solid fa-chalkboard-user"></i> Instructor: ${getEmployees().find(e => e.id === c.instructor_id)?.name || 'Unknown'}</p>` : ''}
                  </div>
                  <div class="admin-class-action" style="display:flex; align-items:center; gap:0.5rem;">
                    <span class="roster-stat-tag">${enrollments.filter(e => e.classId === c.id).length} Enrolled</span>
                    <button class="btn btn-secondary btn-sm edit-class-btn" data-id="${c.id}" style="padding:0.25rem 0.5rem;" title="Edit Class"><i class="fa-solid fa-pen"></i></button>
                  </div>
                </div>
                `;
              }).join("")}
            </div>
          </div>

          <!-- Add Class Form -->
          <div class="glass-panel add-class-form">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem;">
              <h3 class="admin-panel-title" style="margin:0;"><i class="fa-solid ${editingClassId ? 'fa-pen-to-square' : 'fa-folder-plus'}"></i> ${editingClassId ? 'Edit Class' : 'Define New Class'}</h3>
              ${editingClassId ? `<button class="btn btn-secondary btn-sm" id="cancel-edit-class" style="padding:0.25rem 0.75rem; font-size:0.8rem;">Cancel Edit</button>` : ''}
            </div>
            <form id="create-class-form" style="display:flex; flex-direction:column; gap:1.25rem;">
              <div class="form-group">
                <label for="new-title">Class Title *</label>
                <input type="text" class="form-control" id="new-title" required placeholder="e.g. Lego Challenge: Basic Mechanisms">
              </div>
              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label for="new-provider">Education Center *</label>
                <select class="form-control" id="new-provider" required>
                  ${getEducationProviders().map((p, idx) => `<option value="${p.id}" ${idx === 0 ? "selected" : ""}>${p.name}</option>`).join("")}
                </select>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-year">School Year</label>
                  <input type="text" class="form-control" id="new-year" list="year-options" placeholder="e.g. 2026-2027 (Optional)">
                  <datalist id="year-options">
                    <option value="2025-2026">
                    <option value="2026-2027">
                    <option value="2027-2028">
                  </datalist>
                </div>
                <div class="form-group">
                  <label for="new-season">Season *</label>
                  <select class="form-control" id="new-season" required>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                  </select>
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-program">Program Pathway *</label>
                  <select class="form-control" id="new-program" required>
                    ${getPrograms().map((p, idx) => `<option value="${p.id}" ${idx === 0 ? "selected" : ""}>${p.name}</option>`).join("")}
                  </select>
                </div>
                <div class="form-group">
                  <label for="new-age">Age Range *</label>
                  <select class="form-control" id="new-age" required>
                    <option value="4-6">Ages 4-6</option>
                    <option value="7-10" selected>Ages 7-10</option>
                    <option value="10-14">Ages 10-14</option>
                  </select>
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-start">Start Date *</label>
                  <input type="date" class="form-control" id="new-start" required>
                </div>
                <div class="form-group">
                  <label for="new-end">End Date *</label>
                  <input type="date" class="form-control" id="new-end" required>
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-day">Day of Week *</label>
                  <select class="form-control" id="new-day" required>
                    <option value="Mondays">Mondays</option>
                    <option value="Tuesdays">Tuesdays</option>
                    <option value="Wednesdays">Wednesdays</option>
                    <option value="Thursdays">Thursdays</option>
                    <option value="Fridays">Fridays</option>
                    <option value="Saturdays">Saturdays</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="new-time">Class Time *</label>
                  <input type="text" class="form-control" id="new-time" required placeholder="e.g. 3:30 PM - 4:45 PM">
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-location">Specific Room / Location *</label>
                  <input type="text" class="form-control" id="new-location" required placeholder="e.g. Library, Room 12">
                </div>
                <div class="form-group">
                  <label for="new-sessions">Number of Sessions *</label>
                  <input type="number" class="form-control" id="new-sessions" required min="1" max="50" value="10">
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-price">Tuition Fee ($) *</label>
                  <input type="number" class="form-control" id="new-price" required min="100" max="500" value="250">
                </div>
                <div class="form-group">
                  <label for="new-spots">Total Spots *</label>
                  <input type="number" class="form-control" id="new-spots" required min="5" max="30" value="12">
                </div>
              </div>
              <div class="form-group">
                <label for="new-desc">Class Description *</label>
                <textarea class="form-control" id="new-desc" rows="3" required placeholder="Provide a brief summary of learning topics..." style="resize:vertical; min-height:80px;"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">${editingClassId ? 'Save Changes' : 'Create Class'} <i class="fa-solid ${editingClassId ? 'fa-save' : 'fa-plus'}"></i></button>
            </form>
          </div>

        </div>

        <!-- RIGHT: Student Roster Renders -->
        <div class="glass-panel roster-card" id="admin-roster-section">
          ${renderRosterSection(activeRosterClassId)}
        </div>
      </div>
    `;
  } else if (activeAdminTab === "inquiries") {
    activeLayoutHtml = `
      <div class="admin-layout">
        <!-- LEFT: Inquiries List -->
        <div class="glass-panel" style="padding: 1.5rem; height: fit-content; display:flex; flex-direction:column; gap:1rem;">
          <h3 class="admin-panel-title"><i class="fa-solid fa-inbox"></i> Client Inquiries</h3>
          <div class="admin-classes-list" style="max-height: 600px; overflow-y: auto; display:flex; flex-direction:column; gap:0.75rem;">
            ${inquiries.length === 0 ? `
              <div style="text-align:center; padding: 3rem 1.5rem; color: var(--text-secondary);">
                <i class="fa-solid fa-envelope-open" style="font-size: 2.5rem; opacity: 0.35; margin-bottom: 0.75rem; color: var(--lego-blue);"></i>
                <p style="margin:0; font-size:0.9rem;">No inquiries received yet.</p>
              </div>
            ` : inquiries.map(inq => {
              let statusBadgeColor = "var(--lego-blue)";
              let statusBg = "rgba(0, 150, 255, 0.1)";
              if (inq.status === "reviewed") {
                statusBadgeColor = "var(--lego-yellow)";
                statusBg = "rgba(255, 193, 7, 0.1)";
              } else if (inq.status === "responded") {
                statusBadgeColor = "var(--lego-teal)";
                statusBg = "rgba(0, 200, 180, 0.1)";
              } else if (inq.status === "archived") {
                statusBadgeColor = "var(--text-muted)";
                statusBg = "rgba(100, 116, 139, 0.1)";
              }
              
              const timeString = new Date(inq.timestamp).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              });

              return `
                <div class="admin-class-row inquiry-row ${inq.id === activeInquiryId ? 'active' : ''}" data-id="${inq.id}">
                  <div class="admin-class-meta" style="width:100%;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.25rem; gap:0.5rem;">
                      <h4 style="margin:0; font-size:0.95rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${inq.name}</h4>
                      <span style="font-size:0.75rem; color:var(--text-secondary); white-space:nowrap;">${timeString}</span>
                    </div>
                    <p style="font-weight: 500; color: var(--text-primary); margin: 0 0 0.5rem 0; font-size: 0.85rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${inq.subject}</p>
                    <span class="roster-stat-tag" style="background:${statusBg}; color:${statusBadgeColor}; border-color:${statusBadgeColor}33; text-transform: capitalize; padding:0.15rem 0.5rem; font-size:0.7rem; border-radius:50px; display: inline-block;">${inq.status}</span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- RIGHT: Inquiry Detail View -->
        <div class="glass-panel roster-card" id="admin-inquiry-detail-section">
          ${renderInquiryDetailSection(activeInquiryId)}
        </div>
      </div>
    `;
  } else if (activeAdminTab === "providers") {
    const providers = getEducationProviders();
    activeLayoutHtml = `
      <div class="admin-layout">
        <!-- LEFT: Providers List -->
        <div class="glass-panel" style="padding: 1.5rem; height: fit-content; display:flex; flex-direction:column; gap:1rem;">
          <h3 class="admin-panel-title"><i class="fa-solid fa-school-flag"></i> Education Centers</h3>
          <div class="admin-classes-list" style="max-height: 600px; overflow-y: auto; display:flex; flex-direction:column; gap:0.75rem;">
            ${providers.length === 0 ? `
              <div style="text-align:center; padding: 3rem 1.5rem; color: var(--text-secondary);">
                <i class="fa-solid fa-school" style="font-size: 2.5rem; opacity: 0.35; margin-bottom: 0.75rem; color: var(--lego-blue);"></i>
                <p style="margin:0; font-size:0.9rem;">No education centers added yet.</p>
              </div>
            ` : providers.map(p => `
              <div class="admin-class-row inquiry-row" style="cursor:default;">
                <div class="admin-class-meta" style="width:100%; display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.25rem; gap:0.5rem;">
                      <h4 style="margin:0; font-size:0.95rem;">${p.name}</h4>
                      <span style="font-size:0.75rem; color:var(--text-secondary); white-space:nowrap; text-transform: capitalize;">${(p.provider_type || "").replace('_', ' ')}</span>
                    </div>
                    <p style="font-weight: 500; color: var(--text-primary); margin: 0 0 0.5rem 0; font-size: 0.85rem;">${p.address}</p>
                  </div>
                  <button class="btn btn-secondary btn-sm edit-provider-btn" data-id="${p.id}" style="padding:0.25rem 0.5rem;"><i class="fa-solid fa-pen"></i></button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- RIGHT: Add Provider Form -->
        <div class="glass-panel add-class-form">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem;">
            <h3 class="admin-panel-title" style="margin:0;"><i class="fa-solid ${editingProviderId ? 'fa-pen-to-square' : 'fa-plus'}"></i> ${editingProviderId ? 'Edit Education Center' : 'Add New Education Center'}</h3>
            ${editingProviderId ? `<button class="btn btn-secondary btn-sm" id="cancel-edit-provider" style="padding:0.25rem 0.75rem; font-size:0.8rem;">Cancel</button>` : ''}
          </div>
          <form id="create-provider-form" style="display:flex; flex-direction:column; gap:1.25rem;">
            <div class="form-group">
              <label for="new-prov-name">Education Center Name *</label>
              <input type="text" class="form-control" id="new-prov-name" required placeholder="e.g. Lincoln Elementary">
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label for="new-prov-type">Type *</label>
                <select class="form-control" id="new-prov-type" required>
                  <option value="school">School</option>
                  <option value="charter_school">Charter School</option>
                  <option value="preschool">Preschool</option>
                  <option value="daycare">Daycare</option>
                  <option value="tutoring_center">Tutoring Center</option>
                  <option value="after_school_program">After School Program</option>
                  <option value="summer_camp">Summer Camp</option>
                  <option value="music_school">Music School</option>
                  <option value="sports_academy">Sports Academy</option>
                  <option value="community_program">Community Program</option>
                  <option value="online_school">Online School</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="new-prov-phone">Main Phone *</label>
                <input type="text" class="form-control" id="new-prov-phone" required placeholder="(408) 555-1234">
              </div>
            </div>
            <div class="form-group">
              <label for="new-prov-address">Full Address *</label>
              <input type="text" class="form-control" id="new-prov-address" required placeholder="123 Main St, San Jose, CA">
            </div>
            <div class="form-group">
              <label for="new-prov-website">Website URL *</label>
              <input type="url" class="form-control" id="new-prov-website" required placeholder="https://example.com">
            </div>
            <hr style="border: 0; border-top: 1px solid var(--glass-border); margin: 0.5rem 0;">
            <h4 style="margin:0; font-size:0.95rem;">Point of Contact</h4>
            <div class="form-grid">
              <div class="form-group">
                <label for="new-prov-cname">Contact Name *</label>
                <input type="text" class="form-control" id="new-prov-cname" required placeholder="Jane Doe">
              </div>
              <div class="form-group">
                <label for="new-prov-cphone">Contact Phone *</label>
                <input type="text" class="form-control" id="new-prov-cphone" required placeholder="(408) 555-9876">
              </div>
            </div>
            <div class="form-group">
              <label for="new-prov-cemail">Contact Email *</label>
              <input type="email" class="form-control" id="new-prov-cemail" required placeholder="jane@example.com">
            </div>
            <div class="form-group">
              <label for="new-prov-desc">Description *</label>
              <textarea class="form-control" id="new-prov-desc" rows="2" required style="resize:vertical; min-height:60px;"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;">${editingProviderId ? 'Save Changes' : 'Add Education Center'} <i class="fa-solid ${editingProviderId ? 'fa-save' : 'fa-plus'}"></i></button>
          </form>
        </div>
      </div>
    `;
  } else if (activeAdminTab === "employees") {
    const employees = getEmployees();
    activeLayoutHtml = `
      <div class="admin-layout">
        <!-- LEFT: Employees List -->
        <div class="glass-panel" style="padding: 1.5rem; height: fit-content; display:flex; flex-direction:column; gap:1rem;">
          <h3 class="admin-panel-title"><i class="fa-solid fa-user-tie"></i> Employees</h3>
          <div class="admin-classes-list" style="max-height: 600px; overflow-y: auto; display:flex; flex-direction:column; gap:0.75rem;">
            ${employees.length === 0 ? `
              <div style="text-align:center; padding: 3rem 1.5rem; color: var(--text-secondary);">
                <i class="fa-solid fa-users" style="font-size: 2.5rem; opacity: 0.35; margin-bottom: 0.75rem; color: var(--lego-blue);"></i>
                <p style="margin:0; font-size:0.9rem;">No employees added yet.</p>
              </div>
            ` : employees.map(emp => `
              <div class="admin-class-row inquiry-row" style="cursor:default;">
                <div class="admin-class-meta" style="width:100%; display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <div style="display:flex; justify-content:flex-start; align-items:center; margin-bottom: 0.25rem; gap:0.5rem;">
                      <h4 style="margin:0; font-size:0.95rem;">${emp.name}</h4>
                      <span style="font-size:0.75rem; color:var(--text-secondary); white-space:nowrap; text-transform: capitalize; background: var(--bg-secondary); padding: 0.1rem 0.4rem; border-radius: 4px;">${(emp.role || 'other').replace('_', ' ')}</span>
                    </div>
                    <p style="font-weight: 500; color: var(--text-primary); margin: 0 0 0.5rem 0; font-size: 0.85rem;"><i class="fa-solid fa-envelope"></i> ${emp.email} &nbsp;|&nbsp; <i class="fa-solid fa-phone"></i> ${emp.phone}</p>
                    ${emp.start_date ? `<p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">Started: ${emp.start_date}</p>` : ''}
                  </div>
                  <button class="btn btn-secondary btn-sm edit-employee-btn" data-id="${emp.id}" style="padding:0.25rem 0.5rem;"><i class="fa-solid fa-pen"></i></button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- RIGHT: Add/Edit Employee Form -->
        <div class="glass-panel add-class-form">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem;">
            <h3 class="admin-panel-title" style="margin:0;"><i class="fa-solid ${editingEmployeeId ? 'fa-pen-to-square' : 'fa-user-plus'}"></i> ${editingEmployeeId ? 'Edit Employee' : 'Add New Employee'}</h3>
            ${editingEmployeeId ? `<button class="btn btn-secondary btn-sm" id="cancel-edit-employee" style="padding:0.25rem 0.75rem; font-size:0.8rem;">Cancel</button>` : ''}
          </div>
          <form id="create-employee-form" style="display:flex; flex-direction:column; gap:1.25rem;">
            <div class="form-group">
              <label for="new-emp-name">Full Name *</label>
              <input type="text" class="form-control" id="new-emp-name" required placeholder="e.g. John Doe">
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label for="new-emp-role">Role *</label>
                <select class="form-control" id="new-emp-role" required>
                  <option value="instructor">Instructor</option>
                  <option value="helper">Helper</option>
                  <option value="marketing">Marketing</option>
                  <option value="admin">Admin</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="new-emp-start">Start Date</label>
                <input type="date" class="form-control" id="new-emp-start">
              </div>
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label for="new-emp-phone">Phone *</label>
                <input type="text" class="form-control" id="new-emp-phone" required placeholder="(408) 555-0101">
              </div>
              <div class="form-group">
                <label for="new-emp-email">Email *</label>
                <input type="email" class="form-control" id="new-emp-email" required placeholder="john@example.com">
              </div>
            </div>
            <div class="form-group">
              <label for="new-emp-desc">Description / Notes</label>
              <textarea class="form-control" id="new-emp-desc" rows="2" style="resize:vertical; min-height:60px;" placeholder="Optional notes..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;">${editingEmployeeId ? 'Save Changes' : 'Add Employee'} <i class="fa-solid ${editingEmployeeId ? 'fa-save' : 'fa-plus'}"></i></button>
          </form>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="page-view admin-container" style="display: flex; gap: 2rem; align-items: flex-start; max-width: 1400px; margin: 0 auto; padding: 2rem;">
      
      <!-- Sidebar Navigation -->
      <div class="admin-sidebar glass-panel" style="flex: 0 0 260px; padding: 1.5rem; display:flex; flex-direction:column; gap: 0.75rem; height: calc(100vh - 120px); position: sticky; top: 100px;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--text-primary); border-bottom: 1px solid var(--glass-border); padding-bottom: 0.75rem;"><i class="fa-solid fa-gauge"></i> Admin Menu</h3>
        
        <button class="tab-btn ${activeAdminTab === 'classes' ? 'active' : ''}" id="admin-tab-classes" style="text-align:left; background: ${activeAdminTab === 'classes' ? 'var(--bg-secondary)' : 'transparent'}; border: 1px solid ${activeAdminTab === 'classes' ? 'var(--glass-border)' : 'transparent'}; color: ${activeAdminTab === 'classes' ? 'var(--lego-blue)' : 'var(--text-muted)'}; font-size:0.95rem; font-weight:700; cursor:pointer; padding:0.75rem 1rem; border-radius:8px; display:flex; align-items:center; gap:0.75rem; transition: all 0.3s;">
          <i class="fa-solid fa-graduation-cap" style="width: 20px;"></i> Class Rosters
        </button>
        <button class="tab-btn ${activeAdminTab === 'inquiries' ? 'active' : ''}" id="admin-tab-inquiries" style="text-align:left; background: ${activeAdminTab === 'inquiries' ? 'var(--bg-secondary)' : 'transparent'}; border: 1px solid ${activeAdminTab === 'inquiries' ? 'var(--glass-border)' : 'transparent'}; color: ${activeAdminTab === 'inquiries' ? 'var(--lego-blue)' : 'var(--text-muted)'}; font-size:0.95rem; font-weight:700; cursor:pointer; padding:0.75rem 1rem; border-radius:8px; display:flex; align-items:center; gap:0.75rem; transition: all 0.3s;">
          <i class="fa-solid fa-envelope-open-text" style="width: 20px;"></i> Client Inquiries
          ${inquiries.filter(i => i.status === 'received').length > 0 ? `<span style="background:var(--lego-red); color:white; font-size:0.7rem; padding:0.1rem 0.4rem; border-radius:10px; margin-left:auto;">${inquiries.filter(i => i.status === 'received').length}</span>` : ''}
        </button>
        <button class="tab-btn ${activeAdminTab === 'providers' ? 'active' : ''}" id="admin-tab-providers" style="text-align:left; background: ${activeAdminTab === 'providers' ? 'var(--bg-secondary)' : 'transparent'}; border: 1px solid ${activeAdminTab === 'providers' ? 'var(--glass-border)' : 'transparent'}; color: ${activeAdminTab === 'providers' ? 'var(--lego-blue)' : 'var(--text-muted)'}; font-size:0.95rem; font-weight:700; cursor:pointer; padding:0.75rem 1rem; border-radius:8px; display:flex; align-items:center; gap:0.75rem; transition: all 0.3s;">
          <i class="fa-solid fa-school-flag" style="width: 20px;"></i> Education Centers
        </button>
        <button class="tab-btn ${activeAdminTab === 'employees' ? 'active' : ''}" id="admin-tab-employees" style="text-align:left; background: ${activeAdminTab === 'employees' ? 'var(--bg-secondary)' : 'transparent'}; border: 1px solid ${activeAdminTab === 'employees' ? 'var(--glass-border)' : 'transparent'}; color: ${activeAdminTab === 'employees' ? 'var(--lego-blue)' : 'var(--text-muted)'}; font-size:0.95rem; font-weight:700; cursor:pointer; padding:0.75rem 1rem; border-radius:8px; display:flex; align-items:center; gap:0.75rem; transition: all 0.3s;">
          <i class="fa-solid fa-user-tie" style="width: 20px;"></i> Employees
        </button>

        <div style="flex-grow: 1;"></div>
        
        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          <button class="btn btn-secondary" id="admin-reset-db" title="Restore default classes and test roster" style="width:100%; justify-content:center; padding: 0.5rem;"><i class="fa-solid fa-rotate-left"></i> Reset Demo</button>
          <button class="btn btn-secondary" id="admin-logout-btn" style="width:100%; justify-content:center; padding: 0.5rem;"><i class="fa-solid fa-sign-out-alt"></i> Logout</button>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="admin-main-wrapper" style="flex: 1; min-width: 0;">
        <div class="admin-header" style="margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:flex-end;">
          <div>
            <span class="section-tag">Management Console</span>
            <h2 style="margin: 0.5rem 0 0 0;">Robotics Instructor Dashboard</h2>
          </div>
        </div>

        <div id="admin-main-layout">
          ${activeLayoutHtml}
        </div>
      </div>
    </div>
  `;

  // Bind Tab Switching Events
  const tabClassesBtn = container.querySelector("#admin-tab-classes");
  const tabInquiriesBtn = container.querySelector("#admin-tab-inquiries");
  const tabProvidersBtn = container.querySelector("#admin-tab-providers");
  const tabEmployeesBtn = container.querySelector("#admin-tab-employees");

  if (tabClassesBtn) {
    tabClassesBtn.addEventListener("click", () => {
      activeAdminTab = "classes";
      renderAdminDashboard(container);
    });
  }

  if (tabInquiriesBtn) {
    tabInquiriesBtn.addEventListener("click", () => {
      activeAdminTab = "inquiries";
      renderAdminDashboard(container);
    });
  }

  if (tabProvidersBtn) {
    tabProvidersBtn.addEventListener("click", () => {
      activeAdminTab = "providers";
      renderAdminDashboard(container);
    });
  }

  if (tabEmployeesBtn) {
    tabEmployeesBtn.addEventListener("click", () => {
      activeAdminTab = "employees";
      renderAdminDashboard(container);
    });
  }

  // Bind Reset & Logout Button Actions
  container.querySelector("#admin-reset-db").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset the demo database? This will revert all classes, rosters, and inquiries to defaults.")) {
      resetDatabase();
    }
  });

  container.querySelector("#admin-logout-btn").addEventListener("click", () => {
    isAdminAuthenticated = false;
    sessionStorage.removeItem("ye_admin_auth");
    renderAdmin(container);
  });

  if (activeAdminTab === "classes") {
    // Bind filters
    const filterCenter = container.querySelector("#filter-center");
    const filterYear = container.querySelector("#filter-year");
    const filterProgram = container.querySelector("#filter-program");
    if (filterCenter) filterCenter.addEventListener("change", (e) => { adminClassFilterCenter = e.target.value; renderAdminDashboard(container); });
    if (filterYear) filterYear.addEventListener("change", (e) => { adminClassFilterYear = e.target.value; renderAdminDashboard(container); });
    if (filterProgram) filterProgram.addEventListener("change", (e) => { adminClassFilterProgram = e.target.value; renderAdminDashboard(container); });

    // Bind Edit Class buttons in the list
    container.querySelectorAll(".edit-class-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent row click from triggering
        editingClassId = btn.getAttribute("data-id");
        renderAdminDashboard(container);
      });
    });

    // Fill edit form if editing
    if (editingClassId) {
      const classes = getClasses();
      const cls = classes.find(c => c.id === editingClassId);
      if (cls) {
        const elTitle = container.querySelector("#new-title"); if(elTitle) elTitle.value = cls.title || "";
        const elProvider = container.querySelector("#new-provider"); if(elProvider) elProvider.value = cls.provider_id || "";
        const elYear = container.querySelector("#new-year"); if(elYear) elYear.value = cls.school_year || "";
        const elSeason = container.querySelector("#new-season"); if(elSeason) elSeason.value = cls.season || "Fall";
        const elProgram = container.querySelector("#new-program"); if(elProgram) elProgram.value = cls.program_id || "";
        const elAge = container.querySelector("#new-age"); if(elAge) elAge.value = cls.ageGroup || "7-10";
        const elStart = container.querySelector("#new-start"); if(elStart) elStart.value = cls.start_date || "";
        const elEnd = container.querySelector("#new-end"); if(elEnd) elEnd.value = cls.end_date || "";
        const elSessions = container.querySelector("#new-sessions"); if(elSessions) elSessions.value = cls.number_of_sessions || 10;
        const elLocation = container.querySelector("#new-location"); if(elLocation) elLocation.value = cls.location || "";
        const elDay = container.querySelector("#new-day"); if(elDay) elDay.value = cls.dayOfWeek || "Mondays";
        const elTime = container.querySelector("#new-time"); if(elTime) elTime.value = cls.time || "";
        const elPrice = container.querySelector("#new-price"); if(elPrice) elPrice.value = cls.price || 200;
        const elSpots = container.querySelector("#new-spots"); if(elSpots) elSpots.value = cls.spotsTotal || 15;
        const elDesc = container.querySelector("#new-desc"); if(elDesc) elDesc.value = cls.description || "";
      }
    }
    
    // Bind Cancel Edit
    const cancelEditClassBtn = container.querySelector("#cancel-edit-class");
    if (cancelEditClassBtn) {
      cancelEditClassBtn.addEventListener("click", () => {
        editingClassId = null;
        renderAdminDashboard(container);
      });
    }

    // Bind Class Select Row Click
    container.querySelectorAll(".admin-class-row").forEach(row => {
      row.addEventListener("click", () => {
        activeRosterClassId = row.getAttribute("data-id");
        
        // Update active styling
        container.querySelectorAll(".admin-class-row").forEach(r => r.classList.remove("active"));
        row.classList.add("active");
        
        // Re-render roster column
        const rosterSect = container.querySelector("#admin-roster-section");
        if(rosterSect) rosterSect.innerHTML = renderRosterSection(activeRosterClassId);
      });
    });

    // Bind Create Class Form Submit Action
    const addForm = container.querySelector("#create-class-form");
    if (addForm) {
      addForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const submitBtn = addForm.querySelector("button[type='submit']");
        const originalText = submitBtn ? submitBtn.innerHTML : "";
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `Creating... <i class="fa-solid fa-spinner fa-spin"></i>`;
        }
        
        const classes = getClasses();
        const titleVal = container.querySelector("#new-title").value.trim();
        const providerVal = container.querySelector("#new-provider").value;
        const yearVal = container.querySelector("#new-year").value;
        const seasonVal = container.querySelector("#new-season").value;
        const progVal = container.querySelector("#new-program").value;
        const ageVal = container.querySelector("#new-age").value;
        const startVal = container.querySelector("#new-start").value;
        const endVal = container.querySelector("#new-end").value;
        const sessionsVal = parseInt(container.querySelector("#new-sessions").value);
        const locVal = container.querySelector("#new-location").value.trim();
        const dayVal = container.querySelector("#new-day").value;
        const timeVal = container.querySelector("#new-time").value.trim();
        const priceVal = parseInt(container.querySelector("#new-price").value);
        const spotsVal = parseInt(container.querySelector("#new-spots").value);
        const descVal = container.querySelector("#new-desc").value.trim();

        // Map color accents and details based on dynamic program choice
        const programs = getPrograms();
        const selectedProg = programs.find(p => p.id === progVal);
        const programName = selectedProg ? selectedProg.name : progVal;
        const accent = selectedProg ? selectedProg.accent : "blue";
        const image = selectedProg ? selectedProg.image : "assets/lego_challenge.png";

        let newClass;
        if (editingClassId) {
          newClass = classes.find(c => c.id === editingClassId);
          if (newClass) {
            newClass.title = titleVal;
            newClass.provider_id = providerVal;
            newClass.school_year = yearVal;
            newClass.season = seasonVal;
            newClass.program_id = progVal;
            newClass.program = programName;
            newClass.start_date = startVal;
            newClass.end_date = endVal;
            newClass.number_of_sessions = sessionsVal;
            newClass.ageGroup = ageVal;
            newClass.ageLabel = ageVal === "4-6" ? "Pre-K to 1st Grade" : (ageVal === "7-10" ? "2nd to 5th Grade" : "5th to 8th Grade");
            newClass.location = locVal;
            newClass.dayOfWeek = dayVal;
            newClass.time = timeVal;
            newClass.price = priceVal;
            newClass.spotsTotal = spotsVal;
            newClass.accent = accent;
            newClass.description = descVal;
            newClass.image = image;
          }
        } else {
          newClass = {
            id: "class-" + Date.now(),
            title: titleVal,
            provider_id: providerVal,
            school_year: yearVal,
            season: seasonVal,
            program_id: progVal,
            program: programName,
            start_date: startVal,
            end_date: endVal,
            number_of_sessions: sessionsVal,
            ageGroup: ageVal,
            ageLabel: ageVal === "4-6" ? "Pre-K to 1st Grade" : (ageVal === "7-10" ? "2nd to 5th Grade" : "5th to 8th Grade"),
            location: locVal,
            dayOfWeek: dayVal,
            time: timeVal,
            price: priceVal,
            spotsTotal: spotsVal,
            spotsRemaining: spotsVal,
            accent: accent,
            description: descVal,
            image: image
          };
          classes.push(newClass);
        }

        await saveClasses(classes);

        alert(editingClassId ? "Class updated successfully!" : "New Lego robotics class added successfully!");
        
        activeRosterClassId = newClass.id;
        editingClassId = null;
        renderAdminDashboard(container);
      });
    }
  } else if (activeAdminTab === "inquiries") {
    // Bind Inquiry Row Click
    container.querySelectorAll(".inquiry-row").forEach(row => {
      row.addEventListener("click", () => {
        activeInquiryId = row.getAttribute("data-id");
        
        container.querySelectorAll(".inquiry-row").forEach(r => r.classList.remove("active"));
        row.classList.add("active");
        
        container.querySelector("#admin-inquiry-detail-section").innerHTML = renderInquiryDetailSection(activeInquiryId);
        bindInquiryDetailEvents();
      });
    });

    // Initial binding for details currently rendered
    bindInquiryDetailEvents();
  } else if (activeAdminTab === "providers") {
    if (editingProviderId) {
      const providers = getEducationProviders();
      const p = providers.find(x => x.id === editingProviderId);
      if (p) {
        container.querySelector("#new-prov-name").value = p.name || "";
        container.querySelector("#new-prov-type").value = p.provider_type || "school";
        container.querySelector("#new-prov-phone").value = p.phone || "";
        container.querySelector("#new-prov-address").value = p.address || "";
        container.querySelector("#new-prov-website").value = p.website || "";
        container.querySelector("#new-prov-cname").value = p.contact_name || "";
        container.querySelector("#new-prov-cphone").value = p.contact_phone || "";
        container.querySelector("#new-prov-cemail").value = p.contact_email || "";
        container.querySelector("#new-prov-desc").value = p.description || "";
      }
    }

    const cancelProvBtn = container.querySelector("#cancel-edit-provider");
    if (cancelProvBtn) cancelProvBtn.addEventListener("click", () => { editingProviderId = null; renderAdminDashboard(container); });

    container.querySelectorAll(".edit-provider-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        editingProviderId = btn.getAttribute("data-id");
        renderAdminDashboard(container);
      });
    });

    const provForm = container.querySelector("#create-provider-form");
    if (provForm) {
      provForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const submitBtn = provForm.querySelector("button[type='submit']");
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `Saving... <i class="fa-solid fa-spinner fa-spin"></i>`;
        }

        const newProvider = {
          id: editingProviderId || ("ep-" + Date.now()),
          name: container.querySelector("#new-prov-name").value.trim(),
          provider_type: container.querySelector("#new-prov-type").value,
          phone: container.querySelector("#new-prov-phone").value.trim(),
          address: container.querySelector("#new-prov-address").value.trim(),
          website: container.querySelector("#new-prov-website").value.trim(),
          contact_name: container.querySelector("#new-prov-cname").value.trim(),
          contact_phone: container.querySelector("#new-prov-cphone").value.trim(),
          contact_email: container.querySelector("#new-prov-cemail").value.trim(),
          description: container.querySelector("#new-prov-desc").value.trim(),
          created_at: editingProviderId ? undefined : new Date().toISOString()
        };

        const providers = getEducationProviders();
        if (!editingProviderId) {
          providers.push(newProvider);
        } else {
          const idx = providers.findIndex(x => x.id === editingProviderId);
          if (idx !== -1) {
            newProvider.created_at = providers[idx].created_at;
            providers[idx] = newProvider;
          }
        }
        
        try {
          await setDoc(doc(db, "education_providers", newProvider.id), newProvider, { merge: true });
          alert(editingProviderId ? "Education center updated successfully!" : "New education center added successfully!");
          editingProviderId = null;
        } catch (err) {
          console.error(err);
          alert("Error saving education center. Please check permissions.");
        }
        
        renderAdminDashboard(container);
      });
    }
  } else if (activeAdminTab === "employees") {
    if (editingEmployeeId) {
      const employees = getEmployees();
      const e = employees.find(x => x.id === editingEmployeeId);
      if (e) {
        container.querySelector("#new-emp-name").value = e.name || "";
        container.querySelector("#new-emp-role").value = e.role || "instructor";
        container.querySelector("#new-emp-start").value = e.start_date || "";
        container.querySelector("#new-emp-phone").value = e.phone || "";
        container.querySelector("#new-emp-email").value = e.email || "";
        container.querySelector("#new-emp-desc").value = e.description || "";
      }
    }

    const cancelEmpBtn = container.querySelector("#cancel-edit-employee");
    if (cancelEmpBtn) cancelEmpBtn.addEventListener("click", () => { editingEmployeeId = null; renderAdminDashboard(container); });

    container.querySelectorAll(".edit-employee-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        editingEmployeeId = btn.getAttribute("data-id");
        renderAdminDashboard(container);
      });
    });

    const empForm = container.querySelector("#create-employee-form");
    if (empForm) {
      empForm.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        
        const submitBtn = empForm.querySelector("button[type='submit']");
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `Saving... <i class="fa-solid fa-spinner fa-spin"></i>`;
        }

        const newEmp = {
          id: editingEmployeeId || ("emp-" + Date.now()),
          name: container.querySelector("#new-emp-name").value.trim(),
          role: container.querySelector("#new-emp-role").value,
          start_date: container.querySelector("#new-emp-start").value,
          phone: container.querySelector("#new-emp-phone").value.trim(),
          email: container.querySelector("#new-emp-email").value.trim(),
          description: container.querySelector("#new-emp-desc").value.trim(),
          created_at: editingEmployeeId ? undefined : new Date().toISOString()
        };

        const employees = getEmployees();
        if (!editingEmployeeId) {
          employees.push(newEmp);
        } else {
          const idx = employees.findIndex(x => x.id === editingEmployeeId);
          if (idx !== -1) {
            newEmp.created_at = employees[idx].created_at;
            employees[idx] = newEmp;
          }
        }
        
        try {
          await setDoc(doc(db, "employees", newEmp.id), newEmp, { merge: true });
          alert(editingEmployeeId ? "Employee updated successfully!" : "New employee added successfully!");
          editingEmployeeId = null;
        } catch (err) {
          console.error(err);
          alert("Error saving employee. Please check permissions.");
        }
        
        renderAdminDashboard(container);
      });
    }
  }

  function bindInquiryDetailEvents() {
    const statusSelect = container.querySelector("#inq-status-select");
    const deleteBtn = container.querySelector("#inq-delete-btn");
    const replyForm = container.querySelector("#inquiry-reply-form");

    if (statusSelect) {
      statusSelect.addEventListener("change", async (e) => {
        const id = statusSelect.getAttribute("data-id");
        const newStatus = e.target.value;
        
        const inquiries = getInquiries();
        const inq = inquiries.find(i => i.id === id);
        if (inq) {
          statusSelect.disabled = true;
          inq.status = newStatus;
          await saveInquiries(inquiries);
          statusSelect.disabled = false;
          
          // Re-render dashboard to update statuses on list view
          renderAdminDashboard(container);
        }
      });
    }

    if (replyForm) {
      replyForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const replyTextVal = container.querySelector("#inq-reply-message").value.trim();
        const id = activeInquiryId;
        
        const inquiries = getInquiries();
        const inq = inquiries.find(i => i.id === id);
        if (inq) {
          const submitBtn = replyForm.querySelector("button[type='submit']");
          const originalText = submitBtn ? submitBtn.innerHTML : "";
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `Sending... <i class="fa-solid fa-spinner fa-spin"></i>`;
          }

          inq.status = "responded";
          inq.replyText = replyTextVal;
          inq.replyTimestamp = new Date().toISOString();
          await saveInquiries(inquiries);
          
          try {
            await addDoc(collection(db, "mail"), {
              to: inq.email,
              message: {
                subject: "Re: " + inq.subject,
                html: `
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h2 style="color: #ef4444;">Response to your inquiry</h2>
                    <p>Hi ${inq.name},</p>
                    <p>${replyTextVal.replace(/\n/g, '<br>')}</p>
                    <br>
                    <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00c8b4;">
                      <p style="margin: 0; color: #666; font-size: 0.9em;"><strong>Original Message:</strong><br>${inq.message.replace(/\n/g, '<br>')}</p>
                    </div>
                    <p>Best regards,<br><strong>The Young Engineers Team</strong></p>
                  </div>
                `
              }
            });
          } catch (err) {
            console.error("Failed to send email:", err);
          }
          
          alert(`Response successfully sent inline to ${inq.name} (${inq.email})!`);
          
          // Re-render dashboard to show reply section and updated status badge
          renderAdminDashboard(container);
        }
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener("click", async () => {
        const id = deleteBtn.getAttribute("data-id");
        if (confirm("Are you sure you want to permanently delete this inquiry?")) {
          const originalText = deleteBtn.innerHTML;
          deleteBtn.disabled = true;
          deleteBtn.innerHTML = `Deleting... <i class="fa-solid fa-trash fa-spin"></i>`;

          let inquiries = getInquiries();
          inquiries = inquiries.filter(i => i.id !== id);
          await saveInquiries(inquiries);
          
          // Reset active selection if deleted active one
          if (activeInquiryId === id) {
            activeInquiryId = inquiries.length > 0 ? inquiries[0].id : null;
          }
          
          // Re-render dashboard
          renderAdminDashboard(container);
        }
      });
    }
  }
}

function renderRosterSection(classId) {
  const classes = getClasses();
  const enrollments = getEnrollments();
  const cls = classes.find(c => c.id === classId);

  if (!cls) {
    return `<div class="roster-empty-state"><i class="fa-solid fa-magnifying-glass"></i><p>Select a class to view rosters</p></div>`;
  }

  const roster = enrollments.filter(e => e.classId === classId);

  return `
    <div class="roster-header">
      <div style="flex:1;">
        <h3 style="font-size: 1.3rem;">Class Student Roster</h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem;">Roster for: <strong>${cls.title}</strong></p>
        ${cls.instructor_id ? `<p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 0.25rem;"><i class="fa-solid fa-chalkboard-user"></i> Instructor: ${getEmployees().find(e => e.id === cls.instructor_id)?.name || 'Unknown'} &nbsp;|&nbsp; Helper: ${cls.helper_id ? (getEmployees().find(e => e.id === cls.helper_id)?.name || 'Unknown') : 'None'}</p>` : ''}
      </div>
      <div class="roster-stats">
        <span class="roster-stat-tag">${roster.length} Enrolled</span>
        <span class="roster-stat-tag spots">${cls.spotsRemaining} spots left</span>
      </div>
    </div>

    ${roster.length === 0 
      ? `
        <div class="roster-empty-state">
          <i class="fa-solid fa-users-slash"></i>
          <h3>No Student Registrations Yet</h3>
          <p style="color: var(--text-secondary); margin-top: 0.5rem;">Classes created manually start with 0 student enrollments. Navigate to 'Classes' and complete a checkout to see records update here.</p>
        </div>
      `
      : `
        <div class="roster-table-container">
          <table class="roster-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Age / Grade</th>
                <th>Parent Info</th>
                <th>Medical/Notes</th>
              </tr>
            </thead>
            <tbody>
              ${roster.map(r => `
                <tr>
                  <td>
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">${r.studentName}</strong>
                    <div style="font-size:0.75rem; color: var(--text-muted);">${r.school}</div>
                  </td>
                  <td>
                    <div>${r.studentAge} years old</div>
                    <div style="font-size:0.75rem; color: var(--text-muted);">${r.grade}</div>
                  </td>
                  <td>
                    <div><strong>${r.parentName}</strong></div>
                    <div style="font-size:0.75rem; color: var(--text-secondary);"><i class="fa-solid fa-envelope"></i> ${r.parentEmail}</div>
                    <div style="font-size:0.75rem; color: var(--text-secondary);"><i class="fa-solid fa-phone"></i> ${r.parentPhone}</div>
                  </td>
                  <td>
                    <span style="font-size:0.8rem; color:${r.notes ? 'var(--lego-yellow)' : 'var(--text-muted)'};">
                      ${r.notes || 'None'}
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `
    }
  `;
}

function renderInquiryDetailSection(inquiryId) {
  const inquiries = getInquiries();
  const inq = inquiries.find(i => i.id === inquiryId);
  if (!inq) {
    return `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding: 4rem 1.5rem; color: var(--text-secondary); height: 100%;">
        <i class="fa-solid fa-envelope-open" style="font-size: 3.5rem; margin-bottom: 1.25rem; opacity: 0.35; color: var(--lego-blue);"></i>
        <h3 style="font-size:1.25rem; color:var(--text-primary); font-family: var(--font-heading);">No Inquiry Selected</h3>
        <p style="font-size:0.9rem; margin-top:0.5rem; max-width:280px; line-height:1.5;">Select a client inquiry from the sidebar list to inspect details and respond.</p>
      </div>
    `;
  }

  const timeString = new Date(inq.timestamp).toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  let replySectionHtml = "";
  if (inq.replyText) {
    const replyTimeString = new Date(inq.replyTimestamp).toLocaleString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    replySectionHtml = `
      <div style="border-top:1px solid var(--glass-border); padding-top:1.25rem; margin-top:0.5rem;">
        <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; color: var(--lego-teal); display: block; margin-bottom: 0.5rem;"><i class="fa-solid fa-circle-check"></i> Sent Response</span>
        <div class="glass-panel" style="padding: 1.25rem; background: rgba(0, 200, 180, 0.025); border-color: rgba(0, 200, 180, 0.15); border-radius: 8px; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary); white-space: pre-wrap; word-break: break-word; margin-bottom:0.75rem;">${inq.replyText}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.35rem;">
            <i class="fa-solid fa-clock"></i> Sent on ${replyTimeString}
          </div>
          <button class="btn btn-secondary btn-sm" id="inq-delete-btn" data-id="${inq.id}" style="color:var(--lego-red); border-color:rgba(255, 68, 68, 0.15); display:inline-flex; align-items:center; gap:0.35rem;"><i class="fa-solid fa-trash"></i> Delete Inquiry</button>
        </div>
      </div>
    `;
  } else {
    replySectionHtml = `
      <div style="border-top:1px solid var(--glass-border); padding-top:1.25rem; margin-top:0.5rem;" id="inq-reply-compose-container">
        <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 0.5rem;">Compose Inline Response</span>
        <form id="inquiry-reply-form" style="display:flex; flex-direction:column; gap:0.75rem;">
          <textarea class="form-control" id="inq-reply-message" rows="3" required placeholder="Type your email response to ${inq.name} here..." style="resize:vertical; min-height:80px; font-size:0.95rem;"></textarea>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center;">
            <button type="submit" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; gap:0.35rem;"><i class="fa-solid fa-paper-plane"></i> Send Reply</button>
            <a href="mailto:${inq.email}?subject=RE: ${encodeURIComponent(inq.subject)}" class="btn btn-secondary btn-sm" style="display:inline-flex; align-items:center; gap:0.35rem;"><i class="fa-solid fa-external-link"></i> External App</a>
            <button type="button" class="btn btn-secondary btn-sm" id="inq-delete-btn" data-id="${inq.id}" style="color:var(--lego-red); border-color:rgba(255, 68, 68, 0.15); margin-left:auto; display:inline-flex; align-items:center; gap:0.35rem;"><i class="fa-solid fa-trash"></i> Delete</button>
          </div>
        </form>
      </div>
    `;
  }

  return `
    <div class="roster-header" style="border-bottom: 1px solid var(--glass-border); padding-bottom: 1.25rem; margin-bottom: 1.5rem; display:flex; justify-content:space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
      <div>
        <h3 style="font-size: 1.3rem; margin:0;">${inq.name}</h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem; display:flex; flex-wrap:wrap; gap:0.75rem;">
          <span><i class="fa-solid fa-envelope"></i> <a href="mailto:${inq.email}" style="color: var(--lego-blue); font-weight:600; text-decoration:none;">${inq.email}</a></span>
          ${inq.phone ? `<span><i class="fa-solid fa-phone"></i> <a href="tel:${inq.phone}" style="color: var(--lego-blue); font-weight:600; text-decoration:none;">${inq.phone}</a></span>` : ''}
        </p>
      </div>
      <div style="min-width: 130px;">
        <span style="font-size: 0.725rem; font-weight:700; text-transform:uppercase; color:var(--text-secondary); display:block; margin-bottom:0.25rem;">Update Status</span>
        <select class="form-control" id="inq-status-select" data-id="${inq.id}" style="padding: 0.25rem 1.5rem 0.25rem 0.5rem; font-size: 0.85rem; border-radius: 6px; width:100%; height:32px; background-color: var(--bg-secondary); border-color: var(--glass-border); color: var(--text-primary); font-weight:600; cursor: pointer;">
          <option value="received" ${inq.status === 'received' ? 'selected' : ''}>Received</option>
          <option value="reviewed" ${inq.status === 'reviewed' ? 'selected' : ''}>Reviewed</option>
          <option value="responded" ${inq.status === 'responded' ? 'selected' : ''}>Responded</option>
          <option value="archived" ${inq.status === 'archived' ? 'selected' : ''}>Archived</option>
        </select>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <div>
        <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 0.25rem;">Subject</span>
        <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); line-height: 1.4;">${inq.subject}</div>
      </div>

      <div>
        <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Message Body</span>
        <div class="glass-panel" style="padding: 1.25rem; background: rgba(0, 0, 0, 0.015); border-color: rgba(0, 0, 0, 0.04); border-radius: 8px; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary); white-space: pre-wrap; word-break: break-word;">${inq.message}</div>
      </div>

      <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem; display: flex; align-items: center; gap: 0.35rem;">
        <i class="fa-solid fa-clock"></i> Sent on ${timeString}
      </div>

      ${replySectionHtml}
    </div>
  `;
}

// --- About Us View ---
function renderAbout(viewport) {
  viewport.innerHTML = `
    <div class="page-view animate-fade-in">
      <!-- Hero Section -->
      <section class="hero-section" style="padding: 4rem 1rem 3rem 1rem; text-align: center;">
        <span class="section-tag" style="margin-bottom: 1rem; display: inline-block;">Who We Are</span>
        <h1 class="hero-title" style="font-size: 2.75rem; margin-bottom: 1.5rem;">About Young Engineers Southwest San Jose</h1>
        <p class="hero-subtitle" style="max-width: 800px; margin: 0 auto; color: var(--text-secondary);">We teach children STEM and robotics principles through hands-on play. By designing and building motorized models using Lego® bricks, children understand complex physics and engineering rules while having fun.</p>
      </section>

      <!-- Mission & Philosophy Section -->
      <section class="classes-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1200px; margin: 0 auto 5rem auto; padding: 0 1.5rem;">
        <div class="glass-panel" style="padding: 3rem; display: flex; flex-direction: column; justify-content: center;">
          <span class="section-tag" style="margin-bottom: 0.5rem;">Our Mission</span>
          <h2 class="section-title" style="font-size: 2rem; margin-bottom: 1.5rem; text-align: left;">Preparing Children for a Changing World</h2>
          <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">At Young Engineers Southwest San Jose, we believe that education should be engaging, intuitive, and experiential. Through our specialized enrichment programs, students develop critical 21st-century skills: critical thinking, problem-solving, spatial awareness, and creative engineering.</p>
          <p style="color: var(--text-secondary); line-height: 1.8;">Our courses are designed around the EDUTAINMENT methodology, seamlessly blending structured engineering theory with open-ended play to ensure students retain and apply what they build.</p>
        </div>
        <div class="glass-panel" style="padding: 3rem; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, rgba(255, 68, 68, 0.05), rgba(0, 180, 216, 0.05)); border-color: rgba(255, 255, 255, 0.5);">
          <span class="section-tag" style="margin-bottom: 0.5rem; color: var(--lego-teal);">Hands-On Learning</span>
          <h2 class="section-title" style="font-size: 2rem; margin-bottom: 1.5rem; text-align: left;">STEM & Robotics Enrichment</h2>
          <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1.25rem;">
            <li style="display: flex; gap: 1rem; align-items: flex-start; color: var(--text-secondary); line-height: 1.5;">
              <i class="fa-solid fa-circle-check" style="color: var(--lego-teal); font-size: 1.2rem; margin-top: 0.1rem;"></i>
              <span><strong>Scientific Principles:</strong> Understanding gears, transmissions, speed reduction, and structural stability.</span>
            </li>
            <li style="display: flex; gap: 1rem; align-items: flex-start; color: var(--text-secondary); line-height: 1.5;">
              <i class="fa-solid fa-circle-check" style="color: var(--lego-teal); font-size: 1.2rem; margin-top: 0.1rem;"></i>
              <span><strong>Computational Thinking:</strong> Algorithmic logic and coding fundamentals.</span>
            </li>
            <li style="display: flex; gap: 1rem; align-items: flex-start; color: var(--text-secondary); line-height: 1.5;">
              <i class="fa-solid fa-circle-check" style="color: var(--lego-teal); font-size: 1.2rem; margin-top: 0.1rem;"></i>
              <span><strong>Dexterity & Focus:</strong> Improving fine motor skills, focus, and logical planning.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Recognition Section (Moved here from home screen) -->
      <section class="glass-panel" style="max-width: 1200px; margin: 0 auto 5rem auto; padding: 4rem 3rem; text-align: center; background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4));">
        <span class="section-tag" style="margin-bottom: 1rem; display: inline-block; color: var(--lego-red);">Accreditation</span>
        <h2 class="section-title" style="font-size: 2.25rem; margin-bottom: 1rem;">Officially Recognized Globally</h2>
        <p class="section-subtitle" style="max-width: 750px; margin: 0 auto 3rem auto; color: var(--text-secondary);">Our curriculum is certified and recognized by leading educational boards and institutions globally, ensuring a scientifically structured program of the highest international caliber.</p>
        <div style="display: flex; justify-content: center; align-items: center; width: 100%; margin-bottom: 2rem;">
          <img src="assets/recognition.png" alt="Officially recognized by the EU Commission and Harvard Graduate School of Education" style="max-height: 120px; width: auto; max-width: 100%; object-fit: contain;">
        </div>
        <p style="max-width: 650px; margin: 0 auto; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
          Young Engineers enrichment programs are reviewed, recognized, and certified by the <strong>European Union Commission</strong> and the <strong>Harvard Graduate School of Education</strong>. This guarantees a safe, structured, and pedagogically sound framework for your child's STEM development.
        </p>
      </section>
    </div>
  `;
}

// --- FAQ & Contact View ---
function renderFaq(viewport) {
  viewport.innerHTML = `
    <div class="page-view">
      
      <!-- FAQ Section -->
      <section class="faq-container">
        <div class="section-header" style="padding-top:2rem; margin-bottom:2rem;">
          <span class="section-tag">Common Inquiries</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">Got questions about scheduling, age limits, structure, or makeup sessions? Find answers below.</p>
        </div>

        <div class="faq-grid">
          <div class="glass-panel faq-item active">
            <div class="faq-question">
              <span>Are these classes hosted after schools end?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>Yes! We work directly with schools in Southwest San Jose to offer enrichment programs. Classes take place directly on school campuses inside designated classrooms or science labs immediately after school dismissal. Our instructors meet kids on campus.</p>
            </div>
          </div>

          <div class="glass-panel faq-item">
            <div class="faq-question">
              <span>What is the instructor-to-student ratio?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>We maintain an excellent ratio of 1:8 or 1:10 depending on the age group. This ensures that every child receives individualized attention, troubleshooting assistance with their motorized gears, and personal coding help.</p>
            </div>
          </div>

          <div class="glass-panel faq-item">
            <div class="faq-question">
              <span>Do kids get to keep the Lego models they build?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>Because we use highly specialized kits containing electric motors, battery packs, and gears, the kits are reused for educational exercises. Children do not take them home, but we photograph and take videos of every student's working machines, which we send to parents after each session!</p>
            </div>
          </div>

          <div class="glass-panel faq-item">
            <div class="faq-question">
              <span>How do make-up lessons work?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>If your child misses an after-school class due to illness or travel, you can contact us to schedule a make-up session in another school where the same class runs during that week, or get a credit toward our holiday workshops.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <section class="contact-section">
        <div class="contact-info">
          <div>
            <span class="section-tag" style="display:block; margin-bottom: 0.5rem;">Connect With Us</span>
            <h2 style="font-size:2.25rem;">Have Questions? <br>Send us a Message</h2>
            <p style="color:var(--text-secondary); margin-top:0.75rem;">If you are a school principal interested in initiating a new STEM program, or a parent needing assistance, get in touch.</p>
          </div>

          <div class="glass-panel contact-card">
            <div class="contact-card-icon"><i class="fa-solid fa-envelope"></i></div>
            <div class="contact-card-details">
              <h4>Email Us Directly</h4>
              <p>southwestsanjose@youngengineers.org</p>
            </div>
          </div>

          <div class="glass-panel contact-card">
            <div class="contact-card-icon"><i class="fa-solid fa-phone"></i></div>
            <div class="contact-card-details">
              <h4>Call or Text Info Line</h4>
              <p>(408) 555-0182 (Mon-Fri, 9am - 5pm)</p>
            </div>
          </div>
        </div>

        <div class="glass-panel contact-form-panel">
          <form id="contact-inquiry-form" style="display:flex; flex-direction:column; gap:1.25rem;">
            <div class="form-grid">
              <div class="form-group">
                <label for="contact-name">Your Name *</label>
                <input type="text" class="form-control" id="contact-name" required placeholder="John Doe">
              </div>
              <div class="form-group">
                <label for="contact-email">Email Address *</label>
                <input type="email" class="form-control" id="contact-email" required placeholder="john@example.com">
              </div>
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label for="contact-phone">Phone Number (Optional)</label>
                <input type="tel" class="form-control" id="contact-phone" placeholder="e.g. (408) 555-0182">
              </div>
              <div class="form-group">
                <label for="contact-subject">Subject *</label>
                <input type="text" class="form-control" id="contact-subject" required placeholder="e.g. Inquiry about Lincoln Elementary camp">
              </div>
            </div>
            <div class="form-group">
              <label for="contact-message">Message *</label>
              <textarea class="form-control" id="contact-message" rows="4" required placeholder="Describe your question or school partnership interest..." style="resize:vertical; min-height:100px;"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="align-self:flex-start;">Send Inquiry <i class="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      </section>

    </div>
  `;

  // Bind Collapsible FAQ handlers
  viewport.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      // Toggle current item
      const isActive = item.classList.contains("active");
      
      // Close others
      viewport.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
      
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Bind Contact Inquiry Form submission
  const contactForm = viewport.querySelector("#contact-inquiry-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const nameVal = viewport.querySelector("#contact-name").value.trim();
      const emailVal = viewport.querySelector("#contact-email").value.trim();
      const phoneVal = viewport.querySelector("#contact-phone").value.trim();
      const subjectVal = viewport.querySelector("#contact-subject").value.trim();
      const messageVal = viewport.querySelector("#contact-message").value.trim();
      
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn ? submitBtn.innerHTML : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending... <i class="fa-solid fa-spinner fa-spin"></i>`;
      }
      
      const inquiries = getInquiries();
      const newInquiry = {
        id: "inquiry-" + Date.now(),
        name: nameVal,
        email: emailVal,
        phone: phoneVal || null,
        subject: subjectVal,
        message: messageVal,
        status: "received",
        timestamp: new Date().toISOString()
      };
      
      inquiries.unshift(newInquiry);
      await saveInquiries(inquiries);
      
      try {
        await addDoc(collection(db, "mail"), {
          to: emailVal,
          message: {
            subject: "Thank you for contacting Southwest San Jose Young Engineers!",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                <h2 style="color: #ef4444;">We've received your inquiry!</h2>
                <p>Hi ${nameVal},</p>
                <p>Thank you for reaching out to Southwest San Jose Young Engineers! This is an automated confirmation that we have successfully received your message.</p>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00c8b4;">
                  <p style="margin: 0;"><strong>Your Message:</strong><br>${messageVal.replace(/\n/g, '<br>')}</p>
                </div>
                <p>One of our instructors will review your request and get back to you within 24 hours.</p>
                <br>
                <p>Best regards,<br><strong>The Young Engineers Team</strong></p>
              </div>
            `
          }
        });
      } catch (err) {
        console.error("Failed to queue auto-reply email:", err);
      }
      
      alert("Thank you! Your message has been sent to Southwest San Jose Young Engineers. We'll reply within 24 hours.");
      contactForm.reset();
      
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }
}


// ==========================================================================
// 4. Custom Particle Confetti Simulation (Confetti physics canvas)
// ==========================================================================

let confettiActive = false;

function startConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;

  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");
  
  // Resize canvas to cover viewport
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const colors = [
    "hsl(354, 85%, 56%)",  // Lego Red
    "hsl(210, 100%, 52%)", // Lego Blue
    "hsl(43, 96%, 56%)",   // Lego Yellow
    "hsl(174, 86%, 45%)",  // Lego Teal
    "hsl(265, 83%, 64%)"   // Lego Purple
  ];

  const particles = [];
  confettiActive = true;

  // Initialize particles
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height + 20, // Spawn from bottom center
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 15,
      speedY: -(Math.random() * 15 + 15), // shoot upwards
      gravity: 0.4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    });
  }

  let framesRemaining = 240; // ~4 seconds animation duration

  function animate() {
    if (!confettiActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.speedY += p.gravity;
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      // Draw particle as a tiny lego rect
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      
      // Optional: draw small lego stud pattern on top of particles for rich detail
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillRect(-p.size / 4, -p.size / 4, p.size / 2, p.size / 2);
      ctx.restore();
    });

    framesRemaining--;
    if (framesRemaining > 0) {
      requestAnimationFrame(animate);
    } else {
      confettiActive = false;
      canvas.style.display = "none";
      window.removeEventListener("resize", resizeCanvas);
    }
  }

  animate();
}
