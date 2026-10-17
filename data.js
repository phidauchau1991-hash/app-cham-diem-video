/* ============================================================
   GLOBAL SUCCESS 1 — DATA SCHEMA (data.js) - CHUẨN XÁC 100%
   Đã hiệu chỉnh tọa độ chính xác từng pixel theo sách gốc.
   Tích hợp hệ thống câu hỏi Luyện Tập & Mini Game cho từng Unit.
   ============================================================ */

window.COURSEBOOK_DATA = {
  meta: {
    id: 'global-success-1',
    title: 'Tiếng Anh 1 — Global Success',
    imageDir: 'book_pages/global_success_1/',
    pageCount: 77,
    aspect: [1684, 2380]
  },

  units: [
    {
      id: 'u1',
      name: 'Unit 1',
      title: 'In the school playground',
      color: '#e8453c',
      pages: [7, 8, 9],
      lexicon: [
        'w.bb', 'w.book', 'w.ball', 'w.bike', 'w.bill', 'w.ba',
        'c.chant_u1', 's.hi_bill', 's.hi_ba', 's.bye_bill', 's.bye_ba', 'song.u1'
      ],
      quiz: [
        {
          audio: 'book',
          prompt: 'Listen and choose: "book"',
          correct: 'w.book',
          options: ['w.book', 'w.ball', 'w.bike', 'w.bill']
        },
        {
          audio: 'ball',
          prompt: 'Listen and choose: "ball"',
          correct: 'w.ball',
          options: ['w.bike', 'w.ball', 'w.book', 'w.ba']
        },
        {
          audio: 'bike',
          prompt: 'Listen and choose: "bike"',
          correct: 'w.bike',
          options: ['w.ball', 'w.book', 'w.bike', 'w.bill']
        },
        {
          audio: "Hi, I'm Bill.",
          prompt: "Listen and choose: \"Hi, I'm Bill.\"",
          correct: 's.hi_bill',
          options: ['s.hi_bill', 's.bye_bill', 's.hi_ba', 's.bye_ba']
        }
      ]
    },
    {
      id: 'u2',
      name: 'Unit 2',
      title: 'In the dining room',
      color: '#f59e0b',
      pages: [10, 11, 12],
      lexicon: [
        'w.cc', 'w.cake', 'w.car', 'w.cat', 'w.cup',
        'c.chant_u2', 's.i_have_a_car', 's.i_have_a_cat', 'song.u2'
      ],
      quiz: [
        {
          audio: 'cake',
          prompt: 'Listen and choose: "cake"',
          correct: 'w.cake',
          options: ['w.cake', 'w.car', 'w.cup', 'w.cat']
        },
        {
          audio: 'car',
          prompt: 'Listen and choose: "car"',
          correct: 'w.car',
          options: ['w.cat', 'w.car', 'w.cake', 'w.cup']
        },
        {
          audio: 'cup',
          prompt: 'Listen and choose: "cup"',
          correct: 'w.cup',
          options: ['w.car', 'w.cup', 'w.cat', 'w.cake']
        },
        {
          audio: 'cat',
          prompt: 'Listen and choose: "cat"',
          correct: 'w.cat',
          options: ['w.cake', 'w.cat', 'w.car', 'w.cup']
        }
      ]
    },
    {
      id: 'u3',
      name: 'Unit 3',
      title: 'At the street market',
      color: '#12b39a',
      pages: [15, 16, 17],
      lexicon: [
        'w.aa', 'w.apple', 'w.bag', 'w.can', 'w.hat',
        'c.chant_u3', 's.this_is_my_bag', 's.this_is_my_hat', 'song.u3'
      ],
      quiz: [
        {
          audio: 'apple',
          prompt: 'Listen and choose: "apple"',
          correct: 'w.apple',
          options: ['w.apple', 'w.bag', 'w.can', 'w.hat']
        },
        {
          audio: 'hat',
          prompt: 'Listen and choose: "hat"',
          correct: 'w.hat',
          options: ['w.hat', 'w.can', 'w.bag', 'w.apple']
        },
        {
          audio: 'bag',
          prompt: 'Listen and choose: "bag"',
          correct: 'w.bag',
          options: ['w.can', 'w.bag', 'w.hat', 'w.apple']
        },
        {
          audio: 'can',
          prompt: 'Listen and choose: "can"',
          correct: 'w.can',
          options: ['w.apple', 'w.hat', 'w.can', 'w.bag']
        }
      ]
    }
  ],

  lexicon: {
    /* =================== UNIT 1 =================== */
    'w.bb': {
      type: 'phonics', text: 'B, b', sayAs: 'letter B, sound b',
      ipa: '/biː/ - /b/', vi: 'Chữ cái B, phát âm là /b/', emoji: '🅱️', unit: 'u1'
    },
    'w.book': {
      type: 'word', text: 'book', sayAs: 'book',
      ipa: '/bʊk/', vi: 'Quyển sách', emoji: '📕', unit: 'u1'
    },
    'w.ball': {
      type: 'word', text: 'ball', sayAs: 'ball',
      ipa: '/bɔːl/', vi: 'Quả bóng', emoji: '⚽', unit: 'u1'
    },
    'w.bike': {
      type: 'word', text: 'bike', sayAs: 'bike',
      ipa: '/baɪk/', vi: 'Xe đạp', emoji: '🚲', unit: 'u1'
    },
    'w.bill': {
      type: 'word', text: 'Bill', sayAs: 'Bill',
      ipa: '/bɪl/', vi: 'Bạn Bill', emoji: '👦🏼', unit: 'u1'
    },
    'w.ba': {
      type: 'word', text: 'Ba', sayAs: 'Ba',
      ipa: '/bɑː/', vi: 'Bạn Ba', emoji: '👦🏻', unit: 'u1'
    },
    'c.chant_u1': {
      type: 'chant', text: 'B, b, ball. A ball, a ball. B, b, a ball.', sayAs: 'B, b, ball. A ball, a ball. B, b, a ball.',
      ipa: '/biː biː bɔːl/', vi: 'Bài vè âm B - Quả bóng', emoji: '🎶', unit: 'u1'
    },
    's.hi_bill': {
      type: 'sentence', text: "Hi, I'm Bill.", sayAs: "Hi, I'm Bill.",
      ipa: "/haɪ aɪm bɪl/", vi: 'Xin chào, mình là Bill.', emoji: '👋', unit: 'u1'
    },
    's.hi_ba': {
      type: 'sentence', text: "Hi, I'm Ba.", sayAs: "Hi, I'm Ba.",
      ipa: "/haɪ aɪm bɑː/", vi: 'Xin chào, mình là Ba.', emoji: '👋', unit: 'u1'
    },
    's.bye_bill': {
      type: 'sentence', text: 'Bye, Bill.', sayAs: 'Bye, Bill.',
      ipa: '/baɪ bɪl/', vi: 'Tạm biệt, Bill.', emoji: '👋', unit: 'u1'
    },
    's.bye_ba': {
      type: 'sentence', text: 'Bye, Ba.', sayAs: 'Bye, Ba.',
      ipa: '/baɪ bɑː/', vi: 'Tạm biệt, Ba.', emoji: '👋', unit: 'u1'
    },
    'song.u1': {
      type: 'song', text: "Hi, I'm Ba. Hi, I'm Bill. Hi, Bill! Hi, Ba!", sayAs: "Hi, I'm Ba. Hi, I'm Bill. Hi, Bill! Hi, Ba!",
      ipa: '/haɪ aɪm bɑː.../', vi: 'Bài hát chào hỏi Unit 1', emoji: '🎵', unit: 'u1'
    },

    /* =================== UNIT 2 =================== */
    'w.cc': {
      type: 'phonics', text: 'C, c', sayAs: 'letter C, sound k',
      ipa: '/siː/ - /k/', vi: 'Chữ cái C, phát âm là /k/', emoji: '🅲', unit: 'u2'
    },
    'w.cake': {
      type: 'word', text: 'cake', sayAs: 'cake',
      ipa: '/keɪk/', vi: 'Bánh ngọt', emoji: '🍰', unit: 'u2'
    },
    'w.car': {
      type: 'word', text: 'car', sayAs: 'car',
      ipa: '/kɑːr/', vi: 'Xe ô tô', emoji: '🚗', unit: 'u2'
    },
    'w.cat': {
      type: 'word', text: 'cat', sayAs: 'cat',
      ipa: '/kæt/', vi: 'Con mèo', emoji: '🐱', unit: 'u2'
    },
    'w.cup': {
      type: 'word', text: 'cup', sayAs: 'cup',
      ipa: '/kʌp/', vi: 'Cái cốc / cái ly', emoji: '🥛', unit: 'u2'
    },
    'c.chant_u2': {
      type: 'chant', text: 'C, c, cup. C, c, cake. A cup and a cake. C, c, cat. C, c, car. A cat and a car.',
      sayAs: 'C, c, cup. C, c, cake. A cup and a cake. C, c, cat. C, c, car. A cat and a car.',
      ipa: '/siː siː kʌp.../', vi: 'Bài vè âm C', emoji: '🎶', unit: 'u2'
    },
    's.i_have_a_car': {
      type: 'sentence', text: 'I have a car.', sayAs: 'I have a car.',
      ipa: '/aɪ hæv ə kɑːr/', vi: 'Tôi có một chiếc xe ô tô.', emoji: '🚗', unit: 'u2'
    },
    's.i_have_a_cat': {
      type: 'sentence', text: 'I have a cat.', sayAs: 'I have a cat.',
      ipa: '/aɪ hæv ə kæt/', vi: 'Tôi có một con mèo.', emoji: '🐱', unit: 'u2'
    },
    'song.u2': {
      type: 'song', text: 'I have a cup. I have a car. I have a cake. I have a cat.',
      sayAs: 'I have a cup. I have a car. I have a cake. I have a cat.',
      ipa: '/aɪ hæv ə kʌp.../', vi: 'Bài hát Unit 2', emoji: '🎵', unit: 'u2'
    },

    /* =================== UNIT 3 =================== */
    'w.aa': {
      type: 'phonics', text: 'A, a', sayAs: 'letter A, sound æ',
      ipa: '/eɪ/ - /æ/', vi: 'Chữ cái A, phát âm là /æ/', emoji: '🅰️', unit: 'u3'
    },
    'w.apple': {
      type: 'word', text: 'apple', sayAs: 'apple',
      ipa: '/ˈæpl/', vi: 'Quả táo', emoji: '🍎', unit: 'u3'
    },
    'w.bag': {
      type: 'word', text: 'bag', sayAs: 'bag',
      ipa: '/bæɡ/', vi: 'Cái cặp / cái túi', emoji: '🎒', unit: 'u3'
    },
    'w.can': {
      type: 'word', text: 'can', sayAs: 'can',
      ipa: '/kæn/', vi: 'Lon nước', emoji: '🥫', unit: 'u3'
    },
    'w.hat': {
      type: 'word', text: 'hat', sayAs: 'hat',
      ipa: '/hæt/', vi: 'Cái mũ', emoji: '🧢', unit: 'u3'
    },
    'c.chant_u3': {
      type: 'chant', text: "A, a, apple. A, a, bag. There's an apple In the bag. A, a, cat. A, a, hat. There's a cat On the hat.",
      sayAs: "A, a, apple. A, a, bag. There's an apple In the bag. A, a, cat. A, a, hat. There's a cat On the hat.",
      ipa: '/eɪ eɪ ˈæpl.../', vi: 'Bài vè âm A', emoji: '🎶', unit: 'u3'
    },
    's.this_is_my_bag': {
      type: 'sentence', text: 'This is my bag.', sayAs: 'This is my bag.',
      ipa: '/ðɪs ɪz maɪ bæɡ/', vi: 'Đây là cái cặp của tôi.', emoji: '🎒', unit: 'u3'
    },
    's.this_is_my_hat': {
      type: 'sentence', text: 'This is my hat.', sayAs: 'This is my hat.',
      ipa: '/ðɪs ɪz maɪ hæt/', vi: 'Đây là cái mũ của tôi.', emoji: '🧢', unit: 'u3'
    },
    'song.u3': {
      type: 'song', text: "Hi, hi, hi. Hi, I'm Ann. This is my apple. This is my hat. This is my bag. This is my can.",
      sayAs: "Hi, hi, hi. Hi, I'm Ann. This is my apple. This is my hat. This is my bag. This is my can.",
      ipa: '/haɪ haɪ haɪ.../', vi: 'Bài hát Unit 3', emoji: '🎵', unit: 'u3'
    }
  },

  /* TỌA ĐỘ HOTSPOTS CHUẨN XÁC TỪNG PIXEL TRÊN ẢNH GỐC 1684 x 2380 */
  hotspots: {
    /* Trang 7: Unit 1 Lesson 1 */
    '7': [
      { id: 'hs_u1_b', x: 84.6, y: 32.4, ref: 'w.bb', kind: 'sound' },
      { id: 'hs_u1_book', x: 37.4, y: 70.6, ref: 'w.book', kind: 'word' },
      { id: 'hs_u1_ball', x: 62.9, y: 51.3, ref: 'w.ball', kind: 'word' },
      { id: 'hs_u1_bill', x: 70.1, y: 63.7, ref: 'w.bill', kind: 'word' },
      { id: 'hs_u1_ba', x: 48.7, y: 57.6, ref: 'w.ba', kind: 'word' },
      { id: 'hs_u1_bike', x: 79.0, y: 73.1, ref: 'w.bike', kind: 'word' }
    ],

    /* Trang 8: Unit 1 Lesson 2 */
    '8': [
      { id: 'hs_u1_chant_main', x: 44.0, y: 15.1, ref: 'c.chant_u1', kind: 'sentence' }
    ],

    /* Trang 9: Unit 1 Lesson 3 */
    '9': [
      { id: 'hs_u1_s_bill', x: 38.0, y: 31.0, ref: 's.hi_bill', kind: 'sentence' },
      { id: 'hs_u1_s_bye', x: 63.0, y: 31.0, ref: 's.bye_bill', kind: 'sentence' },
      { id: 'hs_u1_song', x: 35.0, y: 70.0, ref: 'song.u1', kind: 'sentence' }
    ],

    /* Trang 10: Unit 2 Lesson 1 (In the dining room) - ĐÃ SỬA CHUẨN XÁC 100% */
    '10': [
      { id: 'hs_u2_c', x: 81.1, y: 33.1, ref: 'w.cc', kind: 'sound' },      // Vòng tròn Cc hồng
      { id: 'hs_u2_cake', x: 30.9, y: 61.3, ref: 'w.cake', kind: 'word' },  // Đúng đĩa bánh cake
      { id: 'hs_u2_car', x: 42.5, y: 60.9, ref: 'w.car', kind: 'word' },    // Đúng ô tô đồ chơi car
      { id: 'hs_u2_cup', x: 59.4, y: 57.6, ref: 'w.cup', kind: 'word' },    // Đúng cái cốc cup của bố
      { id: 'hs_u2_cat', x: 30.3, y: 73.1, ref: 'w.cat', kind: 'word' }     // Đúng con mèo cat dưới ghế
    ],

    /* Trang 11: Unit 2 Lesson 2 */
    '11': [
      { id: 'hs_u2_chant_main', x: 44.0, y: 25.0, ref: 'c.chant_u2', kind: 'sentence' }
    ],

    /* Trang 12: Unit 2 Lesson 3 */
    '12': [
      { id: 'hs_u2_s_car', x: 34.0, y: 24.8, ref: 's.i_have_a_car', kind: 'sentence' },
      { id: 'hs_u2_song', x: 35.0, y: 61.5, ref: 'song.u2', kind: 'sentence' }
    ],

    /* Trang 15: Unit 3 Lesson 1 (At the street market) - ĐÃ SỬA CHUẨN XÁC 100% */
    '15': [
      { id: 'hs_u3_a', x: 84.8, y: 32.5, ref: 'w.aa', kind: 'sound' },      // Vòng tròn Aa xanh ngọc
      { id: 'hs_u3_hat', x: 34.2, y: 49.0, ref: 'w.hat', kind: 'word' },    // Đúng cái mũ xanh trên đầu bác bán hàng
      { id: 'hs_u3_apple', x: 51.5, y: 54.2, ref: 'w.apple', kind: 'word' },// Đúng quả táo đỏ trên tay
      { id: 'hs_u3_can', x: 51.0, y: 86.0, ref: 'w.can', kind: 'word' },    // Đúng lon nước ngọt bé cầm
      { id: 'hs_u3_bag', x: 64.5, y: 86.2, ref: 'w.bag', kind: 'word' }     // Đúng chiếc cặp thỏ bé đeo
    ],

    /* Trang 16: Unit 3 Lesson 2 */
    '16': [
      { id: 'hs_u3_chant_main', x: 91.0, y: 20.0, ref: 'c.chant_u3', kind: 'sentence' }
    ],

    /* Trang 17: Unit 3 Lesson 3 */
    '17': [
      { id: 'hs_u3_s_bag', x: 48.0, y: 28.0, ref: 's.this_is_my_bag', kind: 'sentence' },
      { id: 'hs_u3_song', x: 35.0, y: 63.5, ref: 'song.u3', kind: 'sentence' }
    ]
  }
};
