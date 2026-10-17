/* ============================================================
   GLOBAL SUCCESS 1 — INTERACTIVE COURSEBOOK DATA (data.js)
   Tập trung 100% vào sách Global Success 1 (Bộ GD&ĐT)
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
      pages: [7, 8, 9], // file page_007, page_008, page_009
      lexicon: [
        'w.bb', 'w.book', 'w.ball', 'w.bike', 'w.bill', 'w.ba',
        'c.chant_u1', 's.hi_bill', 's.hi_ba', 's.bye_bill', 's.bye_ba', 'song.u1'
      ]
    },
    {
      id: 'u2',
      name: 'Unit 2',
      title: 'In the dining room',
      color: '#f59e0b',
      pages: [10, 11, 12], // file page_010, page_011, page_012
      lexicon: [
        'w.cc', 'w.cake', 'w.car', 'w.cat', 'w.cup',
        'c.chant_u2', 's.i_have_a_car', 's.i_have_a_cat', 'song.u2'
      ]
    },
    {
      id: 'u3',
      name: 'Unit 3',
      title: 'At the street market',
      color: '#12b39a',
      pages: [15, 16, 17], // file page_015, page_016, page_017
      lexicon: [
        'w.aa', 'w.apple', 'w.bag', 'w.can', 'w.hat',
        'c.chant_u3', 's.this_is_my_bag', 's.this_is_my_hat', 'song.u3'
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
      type: 'chant', text: 'C, c, cake. A cake, a cake. C, c, a cake.', sayAs: 'C, c, cake. A cake, a cake. C, c, a cake.',
      ipa: '/siː siː keɪk/', vi: 'Bài vè âm C', emoji: '🎶', unit: 'u2'
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
      type: 'song', text: 'A cake and a cup. A car and a cat.', sayAs: 'A cake and a cup. A car and a cat.',
      ipa: '/ə keɪk ænd ə kʌp.../', vi: 'Bài hát Unit 2', emoji: '🎵', unit: 'u2'
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
      type: 'chant', text: 'A, a, apple. An apple, an apple. A, a, an apple.', sayAs: 'A, a, apple. An apple, an apple. A, a, an apple.',
      ipa: '/eɪ eɪ ˈæpl/', vi: 'Bài vè âm A', emoji: '🎶', unit: 'u3'
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
      type: 'song', text: 'An apple, a bag, a can and a hat.', sayAs: 'An apple, a bag, a can and a hat.',
      ipa: '/æn ˈæpl ə bæɡ.../', vi: 'Bài hát Unit 3', emoji: '🎵', unit: 'u3'
    }
  },

  /* Tọa độ điểm loa chuẩn định vị sẵn cho Unit 1, Unit 2, Unit 3 */
  hotspots: {
    /* Trang 7: Unit 1 Lesson 1 */
    '7': [
      { id: 'hs_u1_b', x: 84.8, y: 32.5, ref: 'w.bb', kind: 'sound' },
      { id: 'hs_u1_book', x: 37.0, y: 70.0, ref: 'w.book', kind: 'word' },
      { id: 'hs_u1_ball', x: 63.5, y: 51.5, ref: 'w.ball', kind: 'word' },
      { id: 'hs_u1_bill', x: 70.0, y: 63.8, ref: 'w.bill', kind: 'word' },
      { id: 'hs_u1_ba', x: 50.0, y: 58.0, ref: 'w.ba', kind: 'word' },
      { id: 'hs_u1_bike', x: 79.0, y: 73.2, ref: 'w.bike', kind: 'word' }
    ],
    /* Trang 8: Unit 1 Lesson 2 */
    '8': [
      { id: 'hs_u1_c_ball', x: 53.0, y: 28.5, ref: 'c.chant_u1', kind: 'sentence' },
      { id: 'hs_u1_c_book', x: 75.0, y: 28.5, ref: 'w.book', kind: 'word' },
      { id: 'hs_u1_c_bike', x: 65.0, y: 37.0, ref: 'w.bike', kind: 'word' }
    ],
    /* Trang 9: Unit 1 Lesson 3 */
    '9': [
      { id: 'hs_u1_s_bill', x: 38.0, y: 31.0, ref: 's.hi_bill', kind: 'sentence' },
      { id: 'hs_u1_s_bye', x: 63.0, y: 31.0, ref: 's.bye_bill', kind: 'sentence' },
      { id: 'hs_u1_song', x: 30.0, y: 82.0, ref: 'song.u1', kind: 'sentence' }
    ],

    /* Trang 10: Unit 2 Lesson 1 */
    '10': [
      { id: 'hs_u2_c', x: 84.5, y: 32.5, ref: 'w.cc', kind: 'sound' },
      { id: 'hs_u2_cake', x: 42.0, y: 65.0, ref: 'w.cake', kind: 'word' },
      { id: 'hs_u2_car', x: 75.0, y: 72.0, ref: 'w.car', kind: 'word' },
      { id: 'hs_u2_cat', x: 28.0, y: 78.0, ref: 'w.cat', kind: 'word' },
      { id: 'hs_u2_cup', x: 60.0, y: 62.0, ref: 'w.cup', kind: 'word' }
    ],
    /* Trang 11: Unit 2 Lesson 2 */
    '11': [
      { id: 'hs_u2_chant', x: 65.0, y: 30.0, ref: 'c.chant_u2', kind: 'sentence' }
    ],
    /* Trang 12: Unit 2 Lesson 3 */
    '12': [
      { id: 'hs_u2_s_car', x: 45.0, y: 32.0, ref: 's.i_have_a_car', kind: 'sentence' },
      { id: 'hs_u2_song', x: 35.0, y: 82.0, ref: 'song.u2', kind: 'sentence' }
    ],

    /* Trang 15: Unit 3 Lesson 1 */
    '15': [
      { id: 'hs_u3_a', x: 84.5, y: 32.5, ref: 'w.aa', kind: 'sound' },
      { id: 'hs_u3_apple', x: 38.0, y: 62.0, ref: 'w.apple', kind: 'word' },
      { id: 'hs_u3_bag', x: 68.0, y: 68.0, ref: 'w.bag', kind: 'word' },
      { id: 'hs_u3_can', x: 52.0, y: 74.0, ref: 'w.can', kind: 'word' },
      { id: 'hs_u3_hat', x: 78.0, y: 55.0, ref: 'w.hat', kind: 'word' }
    ],
    /* Trang 16: Unit 3 Lesson 2 */
    '16': [
      { id: 'hs_u3_chant', x: 65.0, y: 30.0, ref: 'c.chant_u3', kind: 'sentence' }
    ],
    /* Trang 17: Unit 3 Lesson 3 */
    '17': [
      { id: 'hs_u3_s_bag', x: 45.0, y: 32.0, ref: 's.this_is_my_bag', kind: 'sentence' },
      { id: 'hs_u3_song', x: 35.0, y: 82.0, ref: 'song.u3', kind: 'sentence' }
    ]
  }
};
