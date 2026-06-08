const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { url: "http://localhost/" });
global.window = dom.window;
global.document = dom.window.document;
global.sessionStorage = dom.window.sessionStorage;
global.localStorage = dom.window.localStorage;
global.alert = console.log;
global.confirm = () => true;
global.location = dom.window.location;
global.history = dom.window.history;

// Mock Firebase
global.firebase = {
  initializeApp: () => ({}),
  auth: () => ({ onAuthStateChanged: (cb) => cb(null) }),
  firestore: () => ({})
};
global.getAuth = () => ({});
global.getFirestore = () => ({});
global.collection = () => ({});
global.getDocs = async () => ({ docs: [] });
global.doc = () => ({});
global.setDoc = async () => {};
global.deleteDoc = async () => {};
global.query = () => ({});
global.where = () => ({});
global.initializeApp = () => {};

// Execute the app
try {
  let code = fs.readFileSync('app.js', 'utf8');
  code = code.replace(/import\s+.*?from\s+['"].*?['"];?/g, '');
  eval(code);
  
  console.log("Initial load complete.");
  const container = document.getElementById("app-viewport");
  
  // mock activeAdminTab 
  global.isAdminAuthenticated = true;
  global.activeAdminTab = 'classes';
  
  console.log("Rendering classes tab initially");
  global.renderAdminDashboard(container);
  
  // Try clicking reset db
  const resetBtn = container.querySelector("#admin-reset-db");
  if (resetBtn) {
    console.log("Clicking reset db...");
    resetBtn.click();
  } else {
    console.log("No reset db button found.");
  }
  
  const empBtn = container.querySelector("#admin-tab-employees");
  if (empBtn) {
    console.log("Clicking employees tab...");
    empBtn.click();
  } else {
    console.log("No employees tab found.");
  }
  
} catch (e) {
  console.error("RUNTIME ERROR:", e);
}
