const fs = require('fs');
const path = require('path');

// Mock browser environment
const domElements = {};
function mockElement(id, tagName = 'div') {
  return {
    id,
    tagName: tagName.toUpperCase(),
    value: '',
    children: [],
    options: [],
    style: {},
    disabled: false,
    textContent: '',
    classList: {
      add: () => {},
      remove: () => {},
      toggle: () => {},
      contains: () => false
    },
    appendChild(child) {
      this.children.push(child);
      if (this.tagName === 'SELECT') {
        this.options.push(child);
      }
    },
    removeChild(child) {
      const idx = this.children.indexOf(child);
      if (idx !== -1) this.children.splice(idx, 1);
      const optIdx = this.options.indexOf(child);
      if (optIdx !== -1) this.options.splice(optIdx, 1);
    },
    get firstChild() {
      return this.children[0] || null;
    },
    set innerHTML(val) {
      this.children = [];
      this.options = [];
    },
    addEventListener() {},
    setAttribute() {},
    getAttribute() { return null; }
  };
}

global.document = {
  getElementById(id) {
    if (!domElements[id]) {
      const tag = id.includes('select') ? 'select' : (id.includes('btn') ? 'button' : 'div');
      domElements[id] = mockElement(id, tag);
    }
    return domElements[id];
  },
  createElement(tag) {
    return mockElement('', tag);
  },
  querySelectorAll() { return []; },
  removeEventListener() {},
  addEventListener() {}
};

global.navigator = { standalone: false };
global.window = {
  location: { search: '?book=global_success_1' },
  navigator: { standalone: false },
  matchMedia: () => ({ matches: false }),
  speechSynthesis: {
    cancel() {},
    getVoices() { return []; },
    speak() {}
  },
  AudioContext: function() {
    return {
      state: 'running',
      resume: () => Promise.resolve(),
      createBufferSource: () => ({ connect() {}, start() {} }),
      destination: {}
    };
  },
  webkitAudioContext: function() {
    return {
      state: 'running',
      resume: () => Promise.resolve(),
      createBufferSource: () => ({ connect() {}, start() {} }),
      destination: {}
    };
  },
  addEventListener() {},
  removeEventListener() {}
};
global.localStorage = {
  getItem() { return null; },
  setItem() {},
  removeItem() {}
};
global.Image = function() { return { src: '', onload: null }; };
global.Audio = function() {
  return {
    play: () => Promise.resolve(),
    pause: () => {},
    addEventListener: () => {}
  };
};

// Base path
const baseDir = path.resolve(__dirname, '..');
const booksDataPath = path.join(baseDir, 'lab', 'data', 'books-data.js');
const viewerHtmlPath = path.join(baseDir, 'lab', 'viewer.html');

// Load books-data.js
eval(fs.readFileSync(booksDataPath, 'utf8'));

// Extract and evaluate script from viewer.html
const html = fs.readFileSync(viewerHtmlPath, 'utf8');
const scriptMatch = html.match(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/i);
if (!scriptMatch) {
  console.error("FATAL: Main script not found in lab/viewer.html");
  process.exit(1);
}

const scriptCode = scriptMatch[1]
  .replace('let currentIndex = 0;', 'global.currentIndex = 0; var currentIndex = 0;')
  .replace('let lessons = [];', 'global.lessons = []; var lessons = [];');
eval(scriptCode);

// Start testing
console.log("=== RUNNING GLOBAL SUCCESS VIEWER INTEGRATION TEST ===");

// 1. Initialize viewer
initBookViewer();

const unitSel = document.getElementById('unit-select');
const lessonSel = document.getElementById('lesson-select');
const pUnitBtn = document.getElementById('prev-unit-btn');
const nUnitBtn = document.getElementById('next-unit-btn');
const pBtn = document.getElementById('prev-btn');
const nBtn = document.getElementById('next-btn');

console.log("1. Initial state at Lesson 1 (index 0):");
console.log("   - unitSelect options:", unitSel.options.map(o => o.textContent));
console.log("   - unitSelect value:", unitSel.value);
console.log("   - lessonSelect options count:", lessonSel.options.length);
console.log("   - lessonSelect options:", lessonSel.options.map(o => o.textContent));
console.log("   - prevBtn disabled:", pBtn.disabled);
console.log("   - nextBtn disabled:", nBtn.disabled);

if (unitSel.value !== 'Unit 1') throw new Error(`Expected Unit 1, got ${unitSel.value}`);
if (lessonSel.options.length !== 3) throw new Error(`Expected 3 lessons in Unit 1, got ${lessonSel.options.length}`);
if (!pBtn.disabled) throw new Error("Expected prevBtn to be disabled at Lesson 1");
if (nBtn.disabled) throw new Error("Expected nextBtn to be enabled at Lesson 1");

// Verify Lesson 1 hotspots
const l1 = lessons[0];
console.log("   - Lesson 1 tracks count:", l1.tracks.length);
console.log("   - Lesson 1 hotspots count:", l1.hotspots.length);
if (l1.tracks.length !== 1) throw new Error(`Expected 1 track in Lesson 1, got ${l1.tracks.length}`);
if (l1.hotspots.length !== 7) throw new Error(`Expected 7 hotspots in Lesson 1, got ${l1.hotspots.length}`);

// 2. Step forward to Lesson 2 (index 1)
stepLesson(1);
console.log("2. After stepLesson(1) to Lesson 2 (index 1):");
console.log("   - currentIndex:", currentIndex);
console.log("   - lessonSelect value:", lessonSel.value);
console.log("   - prevBtn disabled:", pBtn.disabled);
console.log("   - nextBtn disabled:", nBtn.disabled);
if (currentIndex !== 1) throw new Error(`Expected currentIndex 1, got ${currentIndex}`);
if (pBtn.disabled) throw new Error("Expected prevBtn to be enabled at Lesson 2");
if (nBtn.disabled) throw new Error("Expected nextBtn to be enabled at Lesson 2");

// Verify Lesson 2 hotspots (Track 3, Track 4, no cheat quiz)
const l2 = lessons[1];
console.log("   - Lesson 2 tracks count:", l2.tracks.length);
console.log("   - Lesson 2 hotspots count:", l2.hotspots.length);
if (l2.tracks.length !== 2) throw new Error(`Expected 2 tracks in Lesson 2, got ${l2.tracks.length}`);
if (l2.hotspots.length !== 2) throw new Error(`Expected 2 hotspots in Lesson 2, got ${l2.hotspots.length}`);
const cheatHotspots = l2.hotspots.filter(h => h.type === 'quiz' || h.answer);
if (cheatHotspots.length > 0) throw new Error("Pedagogical violation: Found cheat quiz hotspots in Lesson 2");

// 3. Step forward to Lesson 3 (index 2)
stepLesson(1);
console.log("3. After stepLesson(1) to Lesson 3 (index 2):");
console.log("   - currentIndex:", currentIndex);
console.log("   - lessonSelect value:", lessonSel.value);
console.log("   - prevBtn disabled:", pBtn.disabled);
console.log("   - nextBtn disabled:", nBtn.disabled);
if (currentIndex !== 2) throw new Error(`Expected currentIndex 2, got ${currentIndex}`);
if (pBtn.disabled) throw new Error("Expected prevBtn to be enabled at Lesson 3");
if (!nBtn.disabled) throw new Error("Expected nextBtn to be disabled at last lesson");

// Verify Lesson 3 hotspots (Track 5, Track 6)
const l3 = lessons[2];
console.log("   - Lesson 3 tracks count:", l3.tracks.length);
console.log("   - Lesson 3 hotspots count:", l3.hotspots.length);
if (l3.tracks.length !== 2) throw new Error(`Expected 2 tracks in Lesson 3, got ${l3.tracks.length}`);

// 4. Step backward to Lesson 1
stepLesson(-1); // Lesson 2
stepLesson(-1); // Lesson 1
console.log("4. After stepping back to Lesson 1:");
console.log("   - currentIndex:", currentIndex);
if (currentIndex !== 0) throw new Error(`Expected currentIndex 0, got ${currentIndex}`);
if (!pBtn.disabled) throw new Error("Expected prevBtn to be disabled at Lesson 1");

console.log("\n>>> ALL TESTS PASSED (100%)! Global Success two-tier navigation and Unit 1 calibrated data are fully verified! <<<");
