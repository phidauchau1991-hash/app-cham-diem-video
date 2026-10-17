/* ============================================================
   GLOBAL SUCCESS 1 — INTERACTIVE COURSEBOOK LOGIC (app.js)
   Kiến trúc: Store (localStorage) + Speech (Web Speech API) + Viewer + Modal + Admin Pin
   ============================================================ */

(() => {
  'use strict';

  const DATA = window.COURSEBOOK_DATA;
  if (!DATA) {
    console.error('[GS1] Không tìm thấy dữ liệu data.js');
    return;
  }

  /* --- 1. LOCAL STORAGE STORE CHO HOTSPOTS --- */
  const Store = (() => {
    const STORAGE_KEY = 'gs1_hotspots_v3';
    let cache = null;

    function getMap() {
      if (cache) return cache;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          cache = JSON.parse(raw);
          return cache;
        }
      } catch (e) {
        console.warn('Lỗi đọc localStorage:', e);
      }
      cache = JSON.parse(JSON.stringify(DATA.hotspots || {}));
      return cache;
    }

    function save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
      } catch (e) {
        console.warn('Lỗi lưu localStorage:', e);
      }
    }

    return {
      forPage(pageNum) {
        const map = getMap();
        return map[String(pageNum)] || [];
      },
      add(pageNum, hotspot) {
        const map = getMap();
        const key = String(pageNum);
        if (!map[key]) map[key] = [];
        map[key].push(hotspot);
        save();
      },
      remove(pageNum, hotspotId) {
        const map = getMap();
        const key = String(pageNum);
        if (map[key]) {
          map[key] = map[key].filter(h => h.id !== hotspotId);
          save();
        }
      },
      exportJSON() {
        return JSON.stringify(getMap(), null, 2);
      },
      reset() {
        cache = JSON.parse(JSON.stringify(DATA.hotspots || {}));
        save();
      }
    };
  })();

  /* --- 2. WEB SPEECH API (GIỌNG ĐỌC BẢN XỨ US/UK CHUẨN) --- */
  const Speech = (() => {
    const synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
    let preferredVoice = null;
    let voices = [];

    function selectBestVoice() {
      if (!synth) return;
      voices = synth.getVoices() || [];

      // Chấm điểm ưu tiên: Natural/Google US > Samantha/Jenny > bất kỳ en-US / en-GB
      const score = (v) => {
        let s = 0;
        const name = (v.name || '').toLowerCase();
        const lang = (v.lang || '').toLowerCase();

        if (lang.includes('en-us')) s += 25;
        else if (lang.includes('en-gb')) s += 20;
        else if (lang.startsWith('en')) s += 10;
        else return -100;

        if (/natural|neural|online|enhanced/i.test(name)) s += 50;
        if (/google\s+(us|uk)/i.test(name)) s += 40;
        if (/samantha|jenny|guy|aria|ava/i.test(name)) s += 30;
        if (/microsoft/i.test(name)) s += 15;

        return s;
      };

      const ranked = voices.filter(v => score(v) > 0).sort((a, b) => score(b) - score(a));
      preferredVoice = ranked.length ? ranked[0] : null;
    }

    if (synth) {
      selectBestVoice();
      if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = selectBestVoice;
      }
      setTimeout(selectBestVoice, 500);
      setTimeout(selectBestVoice, 1500);
    }

    return {
      speak(text, onStart, onEnd) {
        if (!synth || !text) {
          if (onEnd) onEnd();
          return;
        }

        try { synth.cancel(); } catch (e) {}

        const utterance = new SpeechSynthesisUtterance(text);
        if (preferredVoice) {
          utterance.voice = preferredVoice;
          utterance.lang = preferredVoice.lang;
        } else {
          utterance.lang = 'en-US';
        }

        // Tốc độ 0.8x cực kỳ chuẩn cho học sinh lớp 1
        utterance.rate = 0.8;
        utterance.pitch = 1.05;

        if (onStart) utterance.onstart = onStart;
        utterance.onend = utterance.onerror = () => {
          if (onEnd) onEnd();
        };

        synth.speak(utterance);
      },
      stop() {
        if (synth) {
          try { synth.cancel(); } catch (e) {}
        }
      }
    };
  })();

  /* --- 2b. SOUND FX SYNTHESIZER (WEB AUDIO API — KHÔNG CẦN TẢI FILE) --- */
  const SoundFX = (() => {
    let ctx = null;
    function getCtx() {
      if (!ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) ctx = new AudioCtx();
      }
      if (ctx && ctx.state === 'suspended') {
        ctx.resume();
      }
      return ctx;
    }

    return {
      playDing() {
        const c = getCtx();
        if (!c) return;
        const now = c.currentTime;
        [1318.51, 1567.98].forEach((freq, idx) => {
          const osc = c.createOscillator();
          const gain = c.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.18, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
          osc.connect(gain);
          gain.connect(c.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.38);
        });
      },
      playBuzzer() {
        const c = getCtx();
        if (!c) return;
        const now = c.currentTime;
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(180, now + 0.22);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(now);
        osc.stop(now + 0.24);
      },
      playFanfare() {
        const c = getCtx();
        if (!c) return;
        const now = c.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
          const osc = c.createOscillator();
          const gain = c.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + i * 0.12);
          const dur = (i === notes.length - 1) ? 0.6 : 0.2;
          gain.gain.setValueAtTime(0.2, now + i * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + dur);
          osc.connect(gain);
          gain.connect(c.destination);
          osc.start(now + i * 0.12);
          osc.stop(now + i * 0.12 + dur + 0.05);
        });
      }
    };
  })();

  /* --- 3. DOM ELEMENTS --- */
  const pageImg = document.getElementById('book-page-img');
  const hotspotOverlay = document.getElementById('hotspot-overlay');
  const pageWrapper = document.getElementById('book-page-wrapper');
  const pagePill = document.getElementById('page-pill');
  const unitDropdown = document.getElementById('unit-dropdown');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnAdminToggle = document.getElementById('btn-admin-toggle');
  const adminToolbar = document.getElementById('admin-toolbar');
  const appContainer = document.getElementById('app-container');

  // Modal Thẻ Từ Vựng
  const vocabModal = document.getElementById('vocab-modal');
  const modalEmoji = document.getElementById('modal-emoji');
  const modalWord = document.getElementById('modal-word');
  const modalIpa = document.getElementById('modal-ipa');
  const modalVi = document.getElementById('modal-vi');
  const btnReplay = document.getElementById('btn-replay-audio');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const modalBackdrop = document.getElementById('vocab-modal-backdrop');

  // Modal Luyện Tập & Game
  const btnPracticeGame = document.getElementById('btn-practice-game');
  const quizModal = document.getElementById('quiz-modal');
  const quizModalBackdrop = document.getElementById('quiz-modal-backdrop');
  const btnCloseQuiz = document.getElementById('btn-close-quiz');
  const quizBadgeUnit = document.getElementById('quiz-badge-unit');
  const quizCounter = document.getElementById('quiz-counter');
  const quizStarCount = document.getElementById('quiz-star-count');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const quizQuestionPanel = document.getElementById('quiz-question-panel');
  const quizResultPanel = document.getElementById('quiz-result-panel');
  const btnQuizAudio = document.getElementById('btn-quiz-audio');
  const quizPromptText = document.getElementById('quiz-prompt-text');
  const quizOptionsGrid = document.getElementById('quiz-options-grid');
  const quizFeedbackBar = document.getElementById('quiz-feedback-bar');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackText = document.getElementById('feedback-text');
  const btnReplayQuiz = document.getElementById('btn-replay-quiz');
  const btnFinishQuiz = document.getElementById('btn-finish-quiz');
  const resultCorrectCount = document.getElementById('result-correct-count');
  const resultTotalCount = document.getElementById('result-total-count');
  const resultStarsStars = document.getElementById('result-stars-stars');

  // Pin Dialog
  const pinDialog = document.getElementById('pin-dialog');
  const pinCoordsBadge = document.getElementById('pin-coords-badge');
  const pinVocabSelect = document.getElementById('pin-vocab-select');
  const btnSavePin = document.getElementById('btn-save-pin');
  const btnCancelPin = document.getElementById('btn-cancel-pin');
  const btnExportJson = document.getElementById('btn-export-json');
  const toastMsg = document.getElementById('toast-msg');

  /* --- 4. STATE --- */
  let currentPage = 7; // Mặc định mở ngay Unit 1 Lesson 1 (Trang 7)
  let isAdminMode = false;
  let draftPin = null;
  let currentActiveLex = null;

  /* --- 5. RENDER FUNCTIONS --- */
  function getPadPage(pageNum) {
    return String(pageNum).padStart(3, '0');
  }

  function loadPage(pageNum) {
    currentPage = pageNum;
    const padStr = getPadPage(pageNum);
    pageImg.src = `${DATA.meta.imageDir}page_${padStr}.webp`;
    pagePill.textContent = `Trang ${pageNum} / ${DATA.meta.pageCount}`;

    // Cập nhật Unit dropdown theo trang hiện tại
    const currentUnit = DATA.units.find(u => u.pages.includes(pageNum));
    if (currentUnit) {
      unitDropdown.value = currentUnit.id;
    }

    // Nút điều hướng
    btnPrev.disabled = (currentPage <= 1);
    btnNext.disabled = (currentPage >= DATA.meta.pageCount);

    renderHotspots();
  }

  function renderHotspots() {
    hotspotOverlay.innerHTML = '';
    const hotspots = Store.forPage(currentPage);

    hotspots.forEach(hs => {
      const lex = DATA.lexicon[hs.ref] || { text: hs.ref, vi: '', emoji: '🔊' };

      const marker = document.createElement('div');
      marker.className = 'hotspot-marker';
      marker.style.setProperty('--x', `${hs.x}%`);
      marker.style.setProperty('--y', `${hs.y}%`);
      marker.setAttribute('title', lex.text);

      marker.innerHTML = `
        <span class="hotspot-ripple"></span>
        <span class="hotspot-badge">
          <i class="fa-solid fa-volume-high"></i>
        </span>
      `;

      if (isAdminMode) {
        const delBtn = document.createElement('span');
        delBtn.className = 'hs-delete-btn';
        delBtn.innerHTML = '×';
        delBtn.onclick = (e) => {
          e.stopPropagation();
          Store.remove(currentPage, hs.id);
          renderHotspots();
          showToast('Đã xóa điểm ghim');
        };
        marker.appendChild(delBtn);
      } else {
        marker.onclick = (e) => {
          e.stopPropagation();
          openVocabModal(lex, marker);
        };
      }

      hotspotOverlay.appendChild(marker);
    });
  }

  /* --- 6. MODAL INTERACTION --- */
  function openVocabModal(lex, markerEl) {
    currentActiveLex = lex;
    modalEmoji.textContent = lex.emoji || '🔊';
    modalWord.textContent = lex.text;
    modalIpa.textContent = lex.ipa || '';
    modalVi.textContent = lex.vi || '';

    vocabModal.hidden = false;

    if (markerEl) markerEl.classList.add('is-playing');
    playModalAudio();
  }

  function closeModal() {
    vocabModal.hidden = true;
    Speech.stop();
    document.querySelectorAll('.hotspot-marker.is-playing').forEach(el => {
      el.classList.remove('is-playing');
    });
  }

  function playModalAudio() {
    if (!currentActiveLex) return;
    btnReplay.classList.add('is-speaking');
    Speech.speak(
      currentActiveLex.sayAs || currentActiveLex.text,
      null,
      () => btnReplay.classList.remove('is-speaking')
    );
  }

  /* --- 7. ADMIN PIN TOOL --- */
  function populateAdminVocabSelect() {
    pinVocabSelect.innerHTML = '';
    DATA.units.forEach(unit => {
      const group = document.createElement('optgroup');
      group.label = `${unit.name}: ${unit.title}`;

      unit.lexicon.forEach(refId => {
        const l = DATA.lexicon[refId];
        if (l) {
          const opt = document.createElement('option');
          opt.value = refId;
          opt.textContent = `${l.emoji || ''} ${l.text} (${l.vi})`;
          group.appendChild(opt);
        }
      });
      pinVocabSelect.appendChild(group);
    });
  }

  function handlePageClick(e) {
    if (!isAdminMode) return;
    if (e.target.closest('.hs-delete-btn')) return;

    const rect = pageWrapper.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const cleanX = Math.round(x * 10) / 10;
    const cleanY = Math.round(y * 10) / 10;

    draftPin = { x: cleanX, y: cleanY };
    pinCoordsBadge.textContent = `Tọa độ: X: ${cleanX}% · Y: ${cleanY}% (Trang ${currentPage})`;
    pinDialog.hidden = false;
  }

  function saveDraftPin() {
    if (!draftPin) return;
    const selectedRef = pinVocabSelect.value;
    if (!selectedRef) return;

    const newHs = {
      id: 'hs_' + Date.now(),
      x: draftPin.x,
      y: draftPin.y,
      ref: selectedRef,
      kind: 'word'
    };

    Store.add(currentPage, newHs);
    renderHotspots();
    pinDialog.hidden = true;
    draftPin = null;

    const lex = DATA.lexicon[selectedRef];
    showToast(`Đã ghim: ${lex ? lex.text : selectedRef}`);
  }

  function showToast(msg) {
    toastMsg.textContent = msg;
    toastMsg.classList.add('show');
    setTimeout(() => toastMsg.classList.remove('show'), 2200);
  }

  /* --- 8. EVENT LISTENERS --- */
  btnPrev.onclick = () => {
    if (currentPage > 1) loadPage(currentPage - 1);
  };

  btnNext.onclick = () => {
    if (currentPage < DATA.meta.pageCount) loadPage(currentPage + 1);
  };

  unitDropdown.onchange = (e) => {
    const selectedUnitId = e.target.value;
    const targetUnit = DATA.units.find(u => u.id === selectedUnitId);
    if (targetUnit && targetUnit.pages.length) {
      loadPage(targetUnit.pages[0]);
    }
  };

  btnAdminToggle.onclick = () => {
    isAdminMode = !isAdminMode;
    appContainer.classList.toggle('is-admin', isAdminMode);
    btnAdminToggle.classList.toggle('active', isAdminMode);
    adminToolbar.hidden = !isAdminMode;
    btnAdminToggle.innerHTML = isAdminMode 
      ? '<i class="fa-solid fa-lock-open"></i> Đang mở Admin' 
      : '<i class="fa-solid fa-pen-ruler"></i> Ghim điểm (Admin)';
    renderHotspots();
    showToast(isAdminMode ? 'Chế độ ghim điểm: BẬT' : 'Chế độ ghim điểm: TẮT');
  };

  pageWrapper.onclick = handlePageClick;

  btnSavePin.onclick = saveDraftPin;
  btnCancelPin.onclick = () => {
    pinDialog.hidden = true;
    draftPin = null;
  };

  btnExportJson.onclick = () => {
    const jsonStr = Store.exportJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `global_success_1_hotspots.json`;
    a.click();
    showToast('Đã tải xuống file JSON tọa độ');
  };

  /* --- 7b. QUIZ & PRACTICE GAME CONTROLLER --- */
  let currentQuizUnit = null;
  let currentQuestions = [];
  let currentQIndex = 0;
  let currentStars = 0;
  let quizLocked = false;

  function openQuiz() {
    // Tìm unit tương ứng với trang đang học
    const u = DATA.units.find(unit => unit.pages.includes(currentPage)) || DATA.units[0];
    currentQuizUnit = u;
    currentQuestions = (u.quiz && u.quiz.length) ? u.quiz : (DATA.units[0].quiz || []);
    currentQIndex = 0;
    currentStars = 0;
    quizLocked = false;

    quizBadgeUnit.textContent = `🎮 ${u.name} Practice`;
    quizStarCount.textContent = '0';
    quizQuestionPanel.hidden = false;
    quizResultPanel.hidden = true;
    quizModal.hidden = false;

    renderQuizQuestion();
  }

  function closeQuiz() {
    quizModal.hidden = true;
    Speech.stop();
  }

  function renderQuizQuestion() {
    if (currentQIndex >= currentQuestions.length) {
      showQuizResults();
      return;
    }

    const q = currentQuestions[currentQIndex];
    quizLocked = false;
    quizFeedbackBar.hidden = true;
    quizFeedbackBar.className = 'quiz-feedback-bar';

    quizCounter.textContent = `Câu ${currentQIndex + 1}/${currentQuestions.length}`;
    const percent = ((currentQIndex) / currentQuestions.length) * 100;
    quizProgressFill.style.width = `${percent}%`;

    quizPromptText.textContent = q.prompt;

    // Render 4 options
    quizOptionsGrid.innerHTML = '';
    q.options.forEach(optRef => {
      const lex = DATA.lexicon[optRef] || { text: optRef, vi: '', emoji: '✨' };
      const card = document.createElement('div');
      card.className = 'quiz-card-option';
      card.innerHTML = `
        <span class="opt-emoji">${lex.emoji || '✨'}</span>
        <span class="opt-text">${lex.text}</span>
        <span class="opt-vi">${lex.vi || ''}</span>
      `;
      card.onclick = () => handleOptionSelected(optRef, card, q);
      quizOptionsGrid.appendChild(card);
    });

    // Tự động phát âm câu hỏi sau 300ms
    setTimeout(() => {
      playQuizPromptAudio();
    }, 300);
  }

  function playQuizPromptAudio() {
    if (!currentQuestions.length || currentQIndex >= currentQuestions.length) return;
    const q = currentQuestions[currentQIndex];
    btnQuizAudio.classList.add('is-speaking');
    Speech.speak(q.audio, null, () => {
      btnQuizAudio.classList.remove('is-speaking');
    });
  }

  function handleOptionSelected(selectedRef, cardEl, q) {
    if (quizLocked) return;

    if (selectedRef === q.correct) {
      quizLocked = true;
      cardEl.classList.add('is-correct');
      SoundFX.playDing();
      currentStars++;
      quizStarCount.textContent = currentStars;

      feedbackIcon.textContent = '🎉';
      feedbackText.textContent = 'Đúng rồi! Bé giỏi quá!';
      quizFeedbackBar.className = 'quiz-feedback-bar success';
      quizFeedbackBar.hidden = false;

      // Disable các thẻ còn lại
      document.querySelectorAll('.quiz-card-option').forEach(c => {
        if (c !== cardEl) c.classList.add('disabled');
      });

      setTimeout(() => {
        currentQIndex++;
        renderQuizQuestion();
      }, 1300);
    } else {
      quizLocked = true;
      cardEl.classList.add('is-wrong');
      SoundFX.playBuzzer();

      feedbackIcon.textContent = '💡';
      feedbackText.textContent = 'Chưa đúng rồi! Bé hãy bấm loa nghe lại nhé!';
      quizFeedbackBar.className = 'quiz-feedback-bar retry';
      quizFeedbackBar.hidden = false;

      setTimeout(() => {
        cardEl.classList.remove('is-wrong');
        quizLocked = false;
      }, 900);
    }
  }

  function showQuizResults() {
    quizProgressFill.style.width = '100%';
    quizQuestionPanel.hidden = true;
    quizResultPanel.hidden = false;
    SoundFX.playFanfare();

    resultCorrectCount.textContent = currentStars;
    resultTotalCount.textContent = currentQuestions.length;

    let starsStr = '';
    for (let i = 0; i < currentStars; i++) starsStr += '⭐';
    resultStarsStars.textContent = starsStr || '👍';
  }

  // Modal events
  btnCloseModal.onclick = closeModal;
  modalBackdrop.onclick = closeModal;
  btnReplay.onclick = playModalAudio;

  // Quiz events
  btnPracticeGame.onclick = openQuiz;
  btnCloseQuiz.onclick = closeQuiz;
  quizModalBackdrop.onclick = closeQuiz;
  btnQuizAudio.onclick = playQuizPromptAudio;
  btnReplayQuiz.onclick = openQuiz;
  btnFinishQuiz.onclick = closeQuiz;

  // Hỗ trợ phím tắt bàn phím
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeQuiz();
    }
    if (e.key === 'ArrowLeft' && !btnPrev.disabled && quizModal.hidden) btnPrev.click();
    if (e.key === 'ArrowRight' && !btnNext.disabled && quizModal.hidden) btnNext.click();
  });

  // Khởi tạo
  populateAdminVocabSelect();
  loadPage(7); // Mở trang 7 (Unit 1 Lesson 1)
})();
