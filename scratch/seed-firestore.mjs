import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9Ql9xdzxVYpEwlMt89shfz1C1tj5VPcg",
  authDomain: "young-engineers-c8a13.firebaseapp.com",
  projectId: "young-engineers-c8a13",
  storageBucket: "young-engineers-c8a13.firebasestorage.app",
  messagingSenderId: "767781023870",
  appId: "1:767781023870:web:57ff58253caa0bce90282f",
  measurementId: "G-VT2VRNNP5V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DEFAULT_CLASSES = [
  {
    id: "class-1",
    title: "Bricks Challenge: Motorized Machines",
    program: "Bricks Challenge",
    ageGroup: "7-10",
    ageLabel: "2nd to 4th Grade",
    location: "Booksin Elementary, San Jose",
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
    program: "Galileo Technic",
    ageGroup: "7-10",
    ageLabel: "3rd to 5th Grade",
    location: "Union Elementary, San Jose",
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
    program: "Algo Play",
    ageGroup: "4-6",
    ageLabel: "Pre-K to 1st Grade",
    location: "Lincoln Elementary, San Jose",
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
    program: "Robo Toys",
    ageGroup: "10-14",
    ageLabel: "5th to 8th Grade",
    location: "Willow Glen Middle, San Jose",
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

async function seed() {
  console.log("Seeding Firestore databases...");
  
  // Seed Classes
  for (const cls of DEFAULT_CLASSES) {
    await setDoc(doc(db, "classes", cls.id), cls);
    console.log(` - Class seeded: ${cls.id}`);
  }
  
  // Seed Enrollments
  for (const enroll of DEFAULT_ENROLLMENTS) {
    await setDoc(doc(db, "enrollments", enroll.id), enroll);
    console.log(` - Enrollment seeded: ${enroll.id}`);
  }
  
  // Seed Inquiries
  for (const inq of DEFAULT_INQUIRIES) {
    await setDoc(doc(db, "inquiries", inq.id), inq);
    console.log(` - Inquiry seeded: ${inq.id}`);
  }
  
  console.log("Firestore seeding completed successfully!");
  process.exit(0);
}

seed().catch(err => {
  console.error("Seeding failed: ", err);
  process.exit(1);
});
