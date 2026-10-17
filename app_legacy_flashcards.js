const LOCAL_DATASET = [
  // --- UNIT 1: In the school playground ---
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 1", category: "phonics", english: "B, b", vietnamese: "Chữ cái B, âm /b/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 1", category: "vocabulary", english: "book", vietnamese: "quyển sách", type: "vocabulary", image: "Global_Success_1/Unit1/book.png", phonics: "/bʊk/" },
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 1", category: "vocabulary", english: "ball", vietnamese: "quả bóng", type: "vocabulary", image: "Global_Success_1/Unit1/ball.png", phonics: "/bɔːl/" },
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 1", category: "vocabulary", english: "bike", vietnamese: "xe đạp", type: "vocabulary", image: "Global_Success_1/Unit1/bike.png", phonics: "/baɪk/" },
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 1", category: "vocabulary", english: "Bill", vietnamese: "bạn Bill", type: "vocabulary", image: "Global_Success_1/Unit1/bill.png", phonics: "/bɪl/" },
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 1", category: "vocabulary", english: "Ba", vietnamese: "bạn Ba", type: "vocabulary", image: "Global_Success_1/Unit1/ba.png", phonics: "/bɑː/" },

  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 2", category: "chant", english: "B, b, ball.\nA ball, a ball.\nB, b, a ball.", vietnamese: "B, b, quả bóng.\nMột quả bóng, một quả bóng.\nB, b, một quả bóng.", type: "chant", image: "Global_Success_1/Unit1/ball.png" },
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 2", category: "chant", english: "B, b, book.\nA book, a book.\nB, b, a book.", vietnamese: "B, b, quyển sách.\nMột quyển sách, một quyển sách.\nB, b, một quyển sách.", type: "chant", image: "Global_Success_1/Unit1/book.png" },
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 2", category: "chant", english: "B, b, bike.\nA bike, a bike.\nB, b, a bike.", vietnamese: "B, b, xe đạp.\nMột chiếc xe đạp, một chiếc xe đạp.\nB, b, một chiếc xe đạp.", type: "chant", image: "Global_Success_1/Unit1/bike.png" },

  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 3", category: "grammar", english: "Hi, I'm Bill.", vietnamese: "Xin chào, mình là Bill.", type: "grammar", image: "Global_Success_1/Unit1/bill.png" },
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 3", category: "grammar", english: "Hi, I'm Ba.", vietnamese: "Xin chào, mình là Ba.", type: "grammar", image: "Global_Success_1/Unit1/ba.png" },
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 3", category: "grammar", english: "Bye, Bill.", vietnamese: "Tạm biệt, Bill.", type: "grammar", image: "Global_Success_1/Unit1/bill.png" },

  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 3", category: "song", english: "Hi, I'm Bill.\nHi, I'm Ba.\nHi, Bill! Hi, Ba!", vietnamese: "Xin chào, mình là Bill.\nXin chào, mình là Ba.\nChào Bill! Chào Ba!", type: "song", image: "Global_Success_1/Unit1/bill.png" },
  { course: "Global Success 1", unit: "Unit 1", unitTitle: "In the school playground", lesson: "Lesson 3", category: "song", english: "Bye, Bill.\nBye, Ba.\nBye, Bill! Bye, Ba!", vietnamese: "Tạm biệt, Bill.\nTạm biệt, Ba.\nTạm biệt, Bill! Tạm biệt, Ba!", type: "song", image: "Global_Success_1/Unit1/ba.png" },

  // --- UNIT 2: In the dining room ---
  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 1", category: "phonics", english: "C, c", vietnamese: "Chữ cái C, âm /k/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 1", category: "vocabulary", english: "cake", vietnamese: "bánh ngọt", type: "vocabulary", image: "Global_Success_1/Unit2/cake.png", phonics: "/keɪk/" },
  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 1", category: "vocabulary", english: "car", vietnamese: "xe ô tô", type: "vocabulary", image: "Global_Success_1/Unit2/car.png", phonics: "/kɑːr/" },
  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 1", category: "vocabulary", english: "cat", vietnamese: "con mèo", type: "vocabulary", image: "Global_Success_1/Unit2/cat.png", phonics: "/kæt/" },
  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 1", category: "vocabulary", english: "cup", vietnamese: "cái cốc", type: "vocabulary", image: "Global_Success_1/Unit2/cup.png", phonics: "/kʌp/" },

  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 2", category: "chant", english: "C, c, a cup.\nC, c, a cake.\nA cup and a cake.", vietnamese: "C, c, cái cốc.\nC, c, cái bánh.\nMột cái cốc và một cái bánh.", type: "chant", image: "Global_Success_1/Unit2/cup.png" },
  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 2", category: "chant", english: "C, c, a cat.\nC, c, a car.\nA cat and a car.", vietnamese: "C, c, con mèo.\nC, c, xe ô tô.\nMột con mèo và một chiếc xe ô tô.", type: "chant", image: "Global_Success_1/Unit2/car.png" },

  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 3", category: "grammar", english: "I have a car.", vietnamese: "Mình có một chiếc xe ô tô.", type: "grammar", image: "Global_Success_1/Unit2/car.png" },
  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 3", category: "grammar", english: "I have a cake.", vietnamese: "Mình có một cái bánh.", type: "grammar", image: "Global_Success_1/Unit2/cake.png" },
  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 3", category: "grammar", english: "I have a cat.", vietnamese: "Mình có một con mèo.", type: "grammar", image: "Global_Success_1/Unit2/cat.png" },
  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 3", category: "grammar", english: "I have a cup.", vietnamese: "Mình có một cái cốc.", type: "grammar", image: "Global_Success_1/Unit2/cup.png" },

  { course: "Global Success 1", unit: "Unit 2", unitTitle: "In the dining room", lesson: "Lesson 3", category: "song", english: "I have a car.\nI have a cat.\nLook at my car!\nLook at my cat!", vietnamese: "Mình có một chiếc xe ô tô.\nMình có một con mèo.\nHãy nhìn xe ô tô của mình này!\nHãy nhìn con mèo của mình này!", type: "song", image: "Global_Success_1/Unit2/car.png" },

  // --- UNIT 3: At the street market ---
  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 1", category: "phonics", english: "A, a", vietnamese: "Chữ cái A, âm /æ/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 1", category: "vocabulary", english: "apple", vietnamese: "quả táo", type: "vocabulary", image: "Global_Success_1/Unit3/apple.png", phonics: "/ˈæp.əl/" },
  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 1", category: "vocabulary", english: "bag", vietnamese: "túi / cặp sách", type: "vocabulary", image: "Global_Success_1/Unit3/bag.png", phonics: "/bæɡ/" },
  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 1", category: "vocabulary", english: "can", vietnamese: "lon / hộp thiếc", type: "vocabulary", image: "Global_Success_1/Unit3/can.png", phonics: "/kæn/" },
  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 1", category: "vocabulary", english: "hat", vietnamese: "mũ / nón", type: "vocabulary", image: "Global_Success_1/Unit3/hat.png", phonics: "/hæt/" },

  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 2", category: "chant", english: "A, a, apple.\nA, a, bag.\nThere's an apple in the bag.", vietnamese: "A, a, quả táo.\nA, a, cái túi.\nCó một quả táo ở trong cái túi.", type: "chant", image: "Global_Success_1/Unit3/apple.png" },
  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 2", category: "chant", english: "A, a, can.\nA, a, hat.\nThere's a can on the hat.", vietnamese: "A, a, cái lon.\nA, a, cái mũ.\nCó một cái lon ở trên cái mũ.", type: "chant", image: "Global_Success_1/Unit3/can.png" },

  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 3", category: "grammar", english: "This is my bag.", vietnamese: "Đây là chiếc cặp của mình.", type: "grammar", image: "Global_Success_1/Unit3/bag.png" },
  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 3", category: "grammar", english: "This is my apple.", vietnamese: "Đây là quả táo của mình.", type: "grammar", image: "Global_Success_1/Unit3/apple.png" },
  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 3", category: "grammar", english: "This is my can.", vietnamese: "Đây là chiếc lon của mình.", type: "grammar", image: "Global_Success_1/Unit3/can.png" },
  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 3", category: "grammar", english: "This is my hat.", vietnamese: "Đây là chiếc mũ của mình.", type: "grammar", image: "Global_Success_1/Unit3/hat.png" },

  { course: "Global Success 1", unit: "Unit 3", unitTitle: "At the street market", lesson: "Lesson 3", category: "song", english: "An apple and a bag.\nThis is my apple.\nThis is my bag.", vietnamese: "Một quả táo và một chiếc túi.\nĐây là quả táo của mình.\nĐây là chiếc túi của mình.", type: "song", image: "Global_Success_1/Unit3/apple.png" },

  // --- UNIT 4: In the bedroom ---
  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 1", category: "phonics", english: "D, d", vietnamese: "Chữ cái D, âm /d/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 1", category: "vocabulary", english: "desk", vietnamese: "bàn học", type: "vocabulary", image: "Global_Success_1/Unit4/desk.png", phonics: "/desk/" },
  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 1", category: "vocabulary", english: "dog", vietnamese: "con chó", type: "vocabulary", image: "Global_Success_1/Unit4/dog.png", phonics: "/dɒɡ/" },
  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 1", category: "vocabulary", english: "door", vietnamese: "cửa ra vào", type: "vocabulary", image: "Global_Success_1/Unit4/door.png", phonics: "/dɔːr/" },
  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 1", category: "vocabulary", english: "duck", vietnamese: "con vịt", type: "vocabulary", image: "Global_Success_1/Unit4/duck.png", phonics: "/dʌk/" },

  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 2", category: "chant", english: "D, d, dog.\nD, d, desk.\nA dog on the desk.", vietnamese: "D, d, con chó.\nD, d, cái bàn.\nMột con chó ở trên cái bàn.", type: "chant", image: "Global_Success_1/Unit4/dog.png" },
  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 2", category: "chant", english: "D, d, duck.\nD, d, door.\nA duck near the door.", vietnamese: "D, d, con vịt.\nD, d, cánh cửa.\nMột con vịt ở gần cánh cửa.", type: "chant", image: "Global_Success_1/Unit4/duck.png" },

  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 3", category: "grammar", english: "This is a dog.", vietnamese: "Đây là một con chó.", type: "grammar", image: "Global_Success_1/Unit4/dog.png" },
  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 3", category: "grammar", english: "This is a desk.", vietnamese: "Đây là một cái bàn.", type: "grammar", image: "Global_Success_1/Unit4/desk.png" },
  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 3", category: "grammar", english: "This is a door.", vietnamese: "Đây là một cánh cửa.", type: "grammar", image: "Global_Success_1/Unit4/door.png" },
  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 3", category: "grammar", english: "This is a duck.", vietnamese: "Đây là một con vịt.", type: "grammar", image: "Global_Success_1/Unit4/duck.png" },

  { course: "Global Success 1", unit: "Unit 4", unitTitle: "In the bedroom", lesson: "Lesson 3", category: "song", english: "Look at the dog near the door.\nLook at the duck on the desk.", vietnamese: "Hãy nhìn con chó ở gần cánh cửa.\nHãy nhìn con vịt ở trên cái bàn.", type: "song", image: "Global_Success_1/Unit4/dog.png" },

  // --- REVIEW 1: Units 1-4 ---
  { course: "Global Success 1", unit: "Review 1", unitTitle: "Units 1 - 4 Summary", lesson: "Story Review", category: "grammar", english: "Hello! I'm Phil. What's your name?", vietnamese: "Xin chào! Mình là Phil. Bạn tên là gì?", type: "grammar", image: "Global_Success_1/Unit1/bill.png" },
  { course: "Global Success 1", unit: "Review 1", unitTitle: "Units 1 - 4 Summary", lesson: "Story Review", category: "grammar", english: "Hi, I'm Sue.", vietnamese: "Chào bạn, mình là Sue.", type: "grammar", image: "Global_Success_1/Unit7/girl.png" },
  { course: "Global Success 1", unit: "Review 1", unitTitle: "Units 1 - 4 Summary", lesson: "Story Review", category: "grammar", english: "I have a bag and a book.", vietnamese: "Mình có một chiếc cặp và một quyển sách.", type: "grammar", image: "Global_Success_1/Unit3/bag.png" },
  { course: "Global Success 1", unit: "Review 1", unitTitle: "Units 1 - 4 Summary", lesson: "Story Review", category: "grammar", english: "This is my dog.", vietnamese: "Đây là chú chó của mình.", type: "grammar", image: "Global_Success_1/Unit4/dog.png" },

  // --- UNIT 5: At the fish and chip shop ---
  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 1", category: "phonics", english: "I, i", vietnamese: "Chữ cái I, âm /ɪ/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 1", category: "vocabulary", english: "fish", vietnamese: "món cá / con cá", type: "vocabulary", image: "Global_Success_1/Unit5/fish.png", phonics: "/fɪʃ/" },
  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 1", category: "vocabulary", english: "chips", vietnamese: "khoai tây chiên", type: "vocabulary", image: "Global_Success_1/Unit5/chips.png", phonics: "/tʃɪps/" },
  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 1", category: "vocabulary", english: "milk", vietnamese: "sữa tươi", type: "vocabulary", image: "Global_Success_1/Unit5/milk.png", phonics: "/mɪlk/" },
  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 1", category: "vocabulary", english: "chicken", vietnamese: "thịt gà / con gà", type: "vocabulary", image: "Global_Success_1/Unit5/chicken.png", phonics: "/ˈtʃɪk.ɪn/" },

  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 2", category: "chant", english: "I, i, fish.\nI, i, chips.\nFish and chips.", vietnamese: "I, i, món cá.\nI, i, khoai tây chiên.\nMón cá và khoai tây chiên.", type: "chant", image: "Global_Success_1/Unit5/fish.png" },
  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 2", category: "chant", english: "I, i, milk.\nI, i, chicken.\nMilk and chicken.", vietnamese: "I, i, sữa tươi.\nI, i, món thịt gà.\nSữa tươi và món thịt gà.", type: "chant", image: "Global_Success_1/Unit5/milk.png" },

  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 3", category: "grammar", english: "I like milk.", vietnamese: "Mình thích sữa.", type: "grammar", image: "Global_Success_1/Unit5/milk.png" },
  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 3", category: "grammar", english: "I like chips.", vietnamese: "Mình thích khoai tây chiên.", type: "grammar", image: "Global_Success_1/Unit5/chips.png" },
  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 3", category: "grammar", english: "I like fish.", vietnamese: "Mình thích món cá.", type: "grammar", image: "Global_Success_1/Unit5/fish.png" },
  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 3", category: "grammar", english: "I like chicken.", vietnamese: "Mình thích món thịt gà.", type: "grammar", image: "Global_Success_1/Unit5/chicken.png" },

  { course: "Global Success 1", unit: "Unit 5", unitTitle: "At the fish and chip shop", lesson: "Lesson 3", category: "song", english: "I like fish and chips.\nI like milk and chicken.\nYummy, yummy, yummy!", vietnamese: "Mình thích món cá và khoai tây chiên.\nMình thích sữa tươi và món thịt gà.\nNgon quá, ngon quá, ngon quá!", type: "song", image: "Global_Success_1/Unit5/fish.png" },

  // --- UNIT 6: In the classroom ---
  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 1", category: "phonics", english: "E, e", vietnamese: "Chữ cái E, âm /e/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 1", category: "vocabulary", english: "bell", vietnamese: "cái chuông", type: "vocabulary", image: "Global_Success_1/Unit6/bell.png", phonics: "/bel/" },
  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 1", category: "vocabulary", english: "pen", vietnamese: "cái bút mực", type: "vocabulary", image: "Global_Success_1/Unit6/pen.png", phonics: "/pen/" },
  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 1", category: "vocabulary", english: "pencil", vietnamese: "cái bút chì", type: "vocabulary", image: "Global_Success_1/Unit6/pencil.png", phonics: "/ˈpen.səl/" },
  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 1", category: "vocabulary", english: "red", vietnamese: "màu đỏ", type: "vocabulary", image: "Global_Success_1/Unit6/red.png", phonics: "/red/" },

  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 2", category: "chant", english: "E, e, pen.\nA red pen.\nE, e, pencil.\nA red pencil.", vietnamese: "E, e, cái bút mực.\nMột cái bút mực màu đỏ.\nE, e, cái bút chì.\nMột cái bút chì màu đỏ.", type: "chant", image: "Global_Success_1/Unit6/pen.png" },
  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 2", category: "chant", english: "E, e, bell.\nA red bell.", vietnamese: "E, e, cái chuông.\nMột cái chuông màu đỏ.", type: "chant", image: "Global_Success_1/Unit6/bell.png" },

  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 3", category: "grammar", english: "It's a red pen.", vietnamese: "Đó là một cái bút mực màu đỏ.", type: "grammar", image: "Global_Success_1/Unit6/pen.png" },
  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 3", category: "grammar", english: "It's a red pencil.", vietnamese: "Đó là một cái bút chì màu đỏ.", type: "grammar", image: "Global_Success_1/Unit6/pencil.png" },
  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 3", category: "grammar", english: "It's a red bell.", vietnamese: "Đó là một cái chuông màu đỏ.", type: "grammar", image: "Global_Success_1/Unit6/bell.png" },

  { course: "Global Success 1", unit: "Unit 6", unitTitle: "In the classroom", lesson: "Lesson 3", category: "song", english: "Look! A pen and a pencil.\nIt's a red pen.\nIt's a red pencil.", vietnamese: "Nhìn kìa! Một cái bút mực và một cái bút chì.\nĐó là một cái bút mực màu đỏ.\nĐó là một cái bút chì màu đỏ.", type: "song", image: "Global_Success_1/Unit6/pen.png" },

  // --- UNIT 7: In the garden ---
  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 1", category: "phonics", english: "G, g", vietnamese: "Chữ cái G, âm /ɡ/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 1", category: "vocabulary", english: "garden", vietnamese: "khu vườn", type: "vocabulary", image: "Global_Success_1/Unit7/garden.png", phonics: "/ˈɡɑː.dən/" },
  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 1", category: "vocabulary", english: "gate", vietnamese: "cái cổng", type: "vocabulary", image: "Global_Success_1/Unit7/gate.png", phonics: "/ɡeɪt/" },
  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 1", category: "vocabulary", english: "girl", vietnamese: "cô bé", type: "vocabulary", image: "Global_Success_1/Unit7/girl.png", phonics: "/ɡɜːl/" },
  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 1", category: "vocabulary", english: "goat", vietnamese: "con dê", type: "vocabulary", image: "Global_Success_1/Unit7/goat.png", phonics: "/ɡəʊt/" },

  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 2", category: "chant", english: "G, g, garden.\nG, g, gate.\nA garden and a gate.", vietnamese: "G, g, khu vườn.\nG, g, cái cổng.\nMột khu vườn và một cái cổng.", type: "chant", image: "Global_Success_1/Unit7/garden.png" },
  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 2", category: "chant", english: "G, g, girl.\nG, g, goat.\nA girl and a goat.", vietnamese: "G, g, cô bé.\nG, g, con dê.\nMột cô bé và một con dê.", type: "chant", image: "Global_Success_1/Unit7/girl.png" },

  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 3", category: "grammar", english: "There's a garden.", vietnamese: "Có một khu vườn.", type: "grammar", image: "Global_Success_1/Unit7/garden.png" },
  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 3", category: "grammar", english: "There's a gate.", vietnamese: "Có một cái cổng.", type: "grammar", image: "Global_Success_1/Unit7/gate.png" },
  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 3", category: "grammar", english: "There's a girl.", vietnamese: "Có một cô bé.", type: "grammar", image: "Global_Success_1/Unit7/girl.png" },
  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 3", category: "grammar", english: "There's a goat.", vietnamese: "Có một con dê.", type: "grammar", image: "Global_Success_1/Unit7/goat.png" },

  { course: "Global Success 1", unit: "Unit 7", unitTitle: "In the garden", lesson: "Lesson 3", category: "song", english: "Look! There's a garden.\nThere's a gate.\nThere's a girl with a goat.", vietnamese: "Nhìn kìa! Có một khu vườn.\nCó một cái cổng.\nCó một cô bé cùng một con dê.", type: "song", image: "Global_Success_1/Unit7/garden.png" },

  // --- UNIT 8: In the park ---
  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 1", category: "phonics", english: "H, h", vietnamese: "Chữ cái H, âm /h/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 1", category: "vocabulary", english: "hair", vietnamese: "mái tóc", type: "vocabulary", image: "Global_Success_1/Unit8/hair.png", phonics: "/heər/" },
  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 1", category: "vocabulary", english: "hand", vietnamese: "bàn tay", type: "vocabulary", image: "Global_Success_1/Unit8/hand.png", phonics: "/hænd/" },
  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 1", category: "vocabulary", english: "head", vietnamese: "cái đầu", type: "vocabulary", image: "Global_Success_1/Unit8/head.png", phonics: "/hed/" },
  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 1", category: "vocabulary", english: "horse", vietnamese: "con ngựa", type: "vocabulary", image: "Global_Success_1/Unit8/horse.png", phonics: "/hɔːs/" },

  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 2", category: "chant", english: "H, h, hair.\nH, h, head.\nTouch your hair.\nTouch your head.", vietnamese: "H, h, mái tóc.\nH, h, cái đầu.\nHãy chạm vào mái tóc của bạn.\nHãy chạm vào cái đầu của bạn.", type: "chant", image: "Global_Success_1/Unit8/hair.png" },
  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 2", category: "chant", english: "H, h, hand.\nH, h, horse.\nTouch your hand.\nTouch your horse.", vietnamese: "H, h, bàn tay.\nH, h, con ngựa.\nHãy chạm vào bàn tay của bạn.\nHãy chạm vào con ngựa của bạn.", type: "chant", image: "Global_Success_1/Unit8/hand.png" },

  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 3", category: "grammar", english: "Touch your hair.", vietnamese: "Hãy chạm vào mái tóc của bạn.", type: "grammar", image: "Global_Success_1/Unit8/hair.png" },
  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 3", category: "grammar", english: "Touch your hand.", vietnamese: "Hãy chạm vào bàn tay của bạn.", type: "grammar", image: "Global_Success_1/Unit8/hand.png" },
  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 3", category: "grammar", english: "Touch your head.", vietnamese: "Hãy chạm vào cái đầu của bạn.", type: "grammar", image: "Global_Success_1/Unit8/head.png" },
  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 3", category: "grammar", english: "Touch your horse.", vietnamese: "Hãy chạm vào chú ngựa của bạn.", type: "grammar", image: "Global_Success_1/Unit8/horse.png" },

  { course: "Global Success 1", unit: "Unit 8", unitTitle: "In the park", lesson: "Lesson 3", category: "song", english: "Touch your head!\nTouch your hair!\nTouch your hand!\nGreat job!", vietnamese: "Hãy chạm vào đầu bạn!\nHãy chạm vào tóc bạn!\nHãy chạm vào tay bạn!\nLàm tốt lắm!", type: "song", image: "Global_Success_1/Unit8/head.png" },

  // --- REVIEW 2: Units 5-8 ---
  { course: "Global Success 1", unit: "Review 2", unitTitle: "Units 5 - 8 Summary", lesson: "Story Review", category: "grammar", english: "Look! There's a goat.", vietnamese: "Nhìn kìa! Có một con dê.", type: "grammar", image: "Global_Success_1/Unit7/goat.png" },
  { course: "Global Success 1", unit: "Review 2", unitTitle: "Units 5 - 8 Summary", lesson: "Story Review", category: "grammar", english: "Oh! Touch its head, Sue!", vietnamese: "Ôi! Hãy chạm vào đầu nó đi, Sue!", type: "grammar", image: "Global_Success_1/Unit8/head.png" },
  { course: "Global Success 1", unit: "Review 2", unitTitle: "Units 5 - 8 Summary", lesson: "Story Review", category: "grammar", english: "I like milk, Phil.", vietnamese: "Mình thích sữa tươi, Phil à.", type: "grammar", image: "Global_Success_1/Unit5/milk.png" },

  // --- UNIT 9: In the shop ---
  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 1", category: "phonics", english: "O, o", vietnamese: "Chữ cái O, âm /ɒ/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 1", category: "vocabulary", english: "clock", vietnamese: "đồng hồ treo tường", type: "vocabulary", image: "Global_Success_1/Unit9/clock.png", phonics: "/klɒk/" },
  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 1", category: "vocabulary", english: "lock", vietnamese: "ổ khóa", type: "vocabulary", image: "Global_Success_1/Unit9/lock.png", phonics: "/lɒk/" },
  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 1", category: "vocabulary", english: "mop", vietnamese: "cây lau nhà", type: "vocabulary", image: "Global_Success_1/Unit9/mop.png", phonics: "/mɒp/" },
  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 1", category: "vocabulary", english: "pot", vietnamese: "cái nồi", type: "vocabulary", image: "Global_Success_1/Unit9/pot.png", phonics: "/pɒt/" },

  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 2", category: "chant", english: "O, o, clock.\nO, o, lock.\nA clock and a lock.", vietnamese: "O, o, đồng hồ.\nO, o, ổ khóa.\nMột cái đồng hồ và một cái ổ khóa.", type: "chant", image: "Global_Success_1/Unit9/clock.png" },
  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 2", category: "chant", english: "O, o, mop.\nO, o, pot.\nA mop and a pot.", vietnamese: "O, o, cây lau nhà.\nO, o, cái nồi.\nMột cây lau nhà và một cái nồi.", type: "chant", image: "Global_Success_1/Unit9/mop.png" },

  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 3", category: "grammar", english: "How many clocks? Two.", vietnamese: "Có bao nhiêu cái đồng hồ? Có hai cái.", type: "grammar", image: "Global_Success_1/Unit9/clock.png" },
  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 3", category: "grammar", english: "How many locks? Two.", vietnamese: "Có bao nhiêu cái ổ khóa? Có hai cái.", type: "grammar", image: "Global_Success_1/Unit9/lock.png" },
  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 3", category: "grammar", english: "How many mops? Two.", vietnamese: "Có bao nhiêu cây lau nhà? Có hai cái.", type: "grammar", image: "Global_Success_1/Unit9/mop.png" },
  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 3", category: "grammar", english: "How many pots? Two.", vietnamese: "Có bao nhiêu cái nồi? Có hai cái.", type: "grammar", image: "Global_Success_1/Unit9/pot.png" },

  { course: "Global Success 1", unit: "Unit 9", unitTitle: "In the shop", lesson: "Lesson 3", category: "song", english: "In the shop.\nIn the shop.\nHow many clocks? Two clocks.\nHow many pots? Two pots.", vietnamese: "Ở trong cửa hàng.\nỞ trong cửa hàng.\nCó bao nhiêu cái đồng hồ? Hai cái đồng hồ.\nCó bao nhiêu cái nồi? Hai cái nồi.", type: "song", image: "Global_Success_1/Unit9/clock.png" },

  // --- UNIT 10: At the zoo ---
  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 1", category: "phonics", english: "M, m", vietnamese: "Chữ cái M, âm /m/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 1", category: "vocabulary", english: "mango", vietnamese: "quả xoài", type: "vocabulary", image: "Global_Success_1/Unit10/mango.png", phonics: "/ˈmæŋ.ɡəʊ/" },
  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 1", category: "vocabulary", english: "monkey", vietnamese: "con khỉ", type: "vocabulary", image: "Global_Success_1/Unit10/monkey.png", phonics: "/ˈmʌŋ.ki/" },
  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 1", category: "vocabulary", english: "mother", vietnamese: "mẹ", type: "vocabulary", image: "Global_Success_1/Unit10/mother.png", phonics: "/ˈmʌð.ər/" },
  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 1", category: "vocabulary", english: "mouse", vietnamese: "con chuột", type: "vocabulary", image: "Global_Success_1/Unit10/mouse.png", phonics: "/maʊs/" },

  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 2", category: "chant", english: "M, m, monkey.\nM, m, mango.\nA monkey with a mango.", vietnamese: "M, m, con khỉ.\nM, m, quả xoài.\nMột con khỉ với một quả xoài.", type: "chant", image: "Global_Success_1/Unit10/monkey.png" },
  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 2", category: "chant", english: "M, m, mother.\nM, m, mouse.\nA mother and a mouse.", vietnamese: "M, m, mẹ.\nM, m, con chuột.\nMột người mẹ và một con chuột.", type: "chant", image: "Global_Success_1/Unit10/mother.png" },

  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 3", category: "grammar", english: "That's a monkey.", vietnamese: "Kia là một con khỉ.", type: "grammar", image: "Global_Success_1/Unit10/monkey.png" },
  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 3", category: "grammar", english: "That's a mango.", vietnamese: "Kia là một quả xoài.", type: "grammar", image: "Global_Success_1/Unit10/mango.png" },
  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 3", category: "grammar", english: "That's a mother.", vietnamese: "Kia là người mẹ.", type: "grammar", image: "Global_Success_1/Unit10/mother.png" },
  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 3", category: "grammar", english: "That's a mouse.", vietnamese: "Kia là một con chuột.", type: "grammar", image: "Global_Success_1/Unit10/mouse.png" },

  { course: "Global Success 1", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 3", category: "song", english: "At the zoo.\nLook! That's a monkey.\nThat's a mouse.\nThat's a monkey with a mango.", vietnamese: "Ở sở thú.\nNhìn kìa! Kia là một con khỉ.\nKia là một con chuột.\nKia là một con khỉ cầm quả xoài.", type: "song", image: "Global_Success_1/Unit10/monkey.png" },

  // --- UNIT 11: At the bus stop ---
  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 1", category: "phonics", english: "U, u", vietnamese: "Chữ cái U, âm /ʌ/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 1", category: "vocabulary", english: "bus", vietnamese: "xe buýt", type: "vocabulary", image: "Global_Success_1/Unit11/bus.png", phonics: "/bʌs/" },
  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 1", category: "vocabulary", english: "run", vietnamese: "chạy", type: "vocabulary", image: "Global_Success_1/Unit11/run.png", phonics: "/rʌn/" },
  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 1", category: "vocabulary", english: "sun", vietnamese: "mặt trời", type: "vocabulary", image: "Global_Success_1/Unit11/sun.png", phonics: "/sʌn/" },
  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 1", category: "vocabulary", english: "truck", vietnamese: "xe tải", type: "vocabulary", image: "Global_Success_1/Unit11/truck.png", phonics: "/trʌk/" },

  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 2", category: "chant", english: "U, u, bus.\nU, u, truck.\nA bus and a truck.", vietnamese: "U, u, xe buýt.\nU, u, xe tải.\nMột chiếc xe buýt và một chiếc xe tải.", type: "chant", image: "Global_Success_1/Unit11/bus.png" },
  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 2", category: "chant", english: "U, u, sun.\nU, u, run.\nRunning in the sun.", vietnamese: "U, u, mặt trời.\nU, u, chạy.\nĐang chạy dưới ánh mặt trời.", type: "chant", image: "Global_Success_1/Unit11/run.png" },

  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 3", category: "grammar", english: "She's running.", vietnamese: "Cô ấy đang chạy.", type: "grammar", image: "Global_Success_1/Unit11/run.png" },
  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 3", category: "grammar", english: "He's running.", vietnamese: "Cậu ấy đang chạy.", type: "grammar", image: "Global_Success_1/Unit11/run.png" },
  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 3", category: "grammar", english: "She's on the bus.", vietnamese: "Cô ấy ở trên xe buýt.", type: "grammar", image: "Global_Success_1/Unit11/bus.png" },
  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 3", category: "grammar", english: "He's in the truck.", vietnamese: "Cậu ấy ở trong xe tải.", type: "grammar", image: "Global_Success_1/Unit11/truck.png" },

  { course: "Global Success 1", unit: "Unit 11", unitTitle: "At the bus stop", lesson: "Lesson 3", category: "song", english: "Look at the bus!\nShe's on the bus.\nLook at the truck!\nHe's in the truck.", vietnamese: "Hãy nhìn chiếc xe buýt!\nCô ấy ở trên xe buýt.\nHãy nhìn chiếc xe tải!\nCậu ấy ở trong xe tải.", type: "song", image: "Global_Success_1/Unit11/bus.png" },

  // --- UNIT 12: At the lake ---
  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 1", category: "phonics", english: "L, l", vietnamese: "Chữ cái L, âm /l/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 1", category: "vocabulary", english: "lake", vietnamese: "hồ nước", type: "vocabulary", image: "Global_Success_1/Unit12/lake.png", phonics: "/leɪk/" },
  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 1", category: "vocabulary", english: "leaf", vietnamese: "lá cây", type: "vocabulary", image: "Global_Success_1/Unit12/leaf.png", phonics: "/liːf/" },
  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 1", category: "vocabulary", english: "lemons", vietnamese: "những quả chanh vàng", type: "vocabulary", image: "Global_Success_1/Unit12/lemons.png", phonics: "/ˈlem.ənz/" },

  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 2", category: "chant", english: "L, l, lake.\nL, l, leaf.\nA lake and a leaf.", vietnamese: "L, l, hồ nước.\nL, l, chiếc lá.\nMột hồ nước và một chiếc lá.", type: "chant", image: "Global_Success_1/Unit12/lake.png" },
  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 2", category: "chant", english: "L, l, lemons.\nL, l, lemons.\nLook at the lemons.", vietnamese: "L, l, những quả chanh.\nL, l, những quả chanh.\nHãy nhìn vào những quả chanh vàng.", type: "chant", image: "Global_Success_1/Unit12/lemons.png" },

  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 3", category: "grammar", english: "Look at the lemons.", vietnamese: "Hãy nhìn vào những quả chanh vàng.", type: "grammar", image: "Global_Success_1/Unit12/lemons.png" },
  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 3", category: "grammar", english: "Look at the lake.", vietnamese: "Hãy nhìn vào hồ nước.", type: "grammar", image: "Global_Success_1/Unit12/lake.png" },
  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 3", category: "grammar", english: "Look at the leaf.", vietnamese: "Hãy nhìn vào chiếc lá.", type: "grammar", image: "Global_Success_1/Unit12/leaf.png" },

  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 3", category: "song", english: "Look at the lake.\nLook at the leaf.\nLook at the leaf on the lake.", vietnamese: "Hãy nhìn vào hồ nước.\nHãy nhìn vào chiếc lá.\nHãy nhìn vào chiếc lá ở trên hồ nước.", type: "song", image: "Global_Success_1/Unit12/lake.png" },
  { course: "Global Success 1", unit: "Unit 12", unitTitle: "At the lake", lesson: "Lesson 3", category: "song", english: "Look at the lake.\nLook at the lemons.\nLook at the lemons near the lake.", vietnamese: "Hãy nhìn vào hồ nước.\nHãy nhìn vào những quả chanh.\nHãy nhìn vào những quả chanh ở gần hồ nước.", type: "song", image: "Global_Success_1/Unit12/lemons.png" },

  // --- REVIEW 3: Units 9-12 ---
  { course: "Global Success 1", unit: "Review 3", unitTitle: "Units 9 - 12 Summary", lesson: "Story Review", category: "grammar", english: "Look at Mary!", vietnamese: "Hãy nhìn bạn Mary kìa!", type: "grammar", image: "Global_Success_1/Unit7/girl.png" },
  { course: "Global Success 1", unit: "Review 3", unitTitle: "Units 9 - 12 Summary", lesson: "Story Review", category: "grammar", english: "She's running.", vietnamese: "Cô ấy đang chạy.", type: "grammar", image: "Global_Success_1/Unit11/run.png" },
  { course: "Global Success 1", unit: "Review 3", unitTitle: "Units 9 - 12 Summary", lesson: "Story Review", category: "grammar", english: "And there's a mouse. It's running, too.", vietnamese: "Và có một chú chuột. Chú chuột cũng đang chạy.", type: "grammar", image: "Global_Success_1/Unit10/mouse.png" },
  { course: "Global Success 1", unit: "Review 3", unitTitle: "Units 9 - 12 Summary", lesson: "Story Review", category: "grammar", english: "Oh! Run, Phil!", vietnamese: "Ôi! Chạy nhanh lên, Phil!", type: "grammar", image: "Global_Success_1/Unit1/bill.png" },

  // --- UNIT 13: In the school canteen ---
  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 1", category: "phonics", english: "N, n", vietnamese: "Chữ cái N, âm /n/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 1", category: "vocabulary", english: "bananas", vietnamese: "những quả chuối", type: "vocabulary", image: "Global_Success_1/Unit13/bananas.png", phonics: "/bəˈnɑː.nəz/" },
  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 1", category: "vocabulary", english: "noodles", vietnamese: "mì / bún", type: "vocabulary", image: "Global_Success_1/Unit13/noodles.png", phonics: "/ˈnuː.dəlz/" },
  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 1", category: "vocabulary", english: "nuts", vietnamese: "các loại hạt", type: "vocabulary", image: "Global_Success_1/Unit13/nuts.png", phonics: "/nʌts/" },

  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 2", category: "chant", english: "N, n, noodles.\nN, n, nuts.\nNoodles and nuts.", vietnamese: "N, n, món mì.\nN, n, các loại hạt.\nMón mì và các loại hạt.", type: "chant", image: "Global_Success_1/Unit13/noodles.png" },
  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 2", category: "chant", english: "N, n, bananas.\nN, n, bananas.\nBananas, noodles and nuts.", vietnamese: "N, n, những quả chuối.\nN, n, những quả chuối.\nChuối, mì và các loại hạt.", type: "chant", image: "Global_Success_1/Unit13/bananas.png" },

  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 3", category: "grammar", english: "She's having noodles.", vietnamese: "Cô ấy đang ăn mì.", type: "grammar", image: "Global_Success_1/Unit13/noodles.png" },
  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 3", category: "grammar", english: "He's having bananas.", vietnamese: "Cậu ấy đang ăn chuối.", type: "grammar", image: "Global_Success_1/Unit13/bananas.png" },
  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 3", category: "grammar", english: "She's having nuts.", vietnamese: "Cô ấy đang ăn các loại hạt.", type: "grammar", image: "Global_Success_1/Unit13/nuts.png" },

  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 3", category: "song", english: "In the canteen.\nIn the canteen.\nLook! She's having noodles.", vietnamese: "Ở trong nhà ăn.\nỞ trong nhà ăn.\nHãy nhìn kìa! Cô ấy đang ăn mì.", type: "song", image: "Global_Success_1/Unit13/noodles.png" },
  { course: "Global Success 1", unit: "Unit 13", unitTitle: "In the school canteen", lesson: "Lesson 3", category: "song", english: "In the canteen.\nIn the canteen.\nLook! He's having bananas.", vietnamese: "Ở trong nhà ăn.\nỞ trong nhà ăn.\nHãy nhìn kìa! Cậu ấy đang ăn chuối.", type: "song", image: "Global_Success_1/Unit13/bananas.png" },

  // --- UNIT 14: In the toy shop ---
  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 1", category: "phonics", english: "T, t", vietnamese: "Chữ cái T, âm /t/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 1", category: "vocabulary", english: "teddy bear", vietnamese: "con gấu bông", type: "vocabulary", image: "Global_Success_1/Unit14/teddybear.png", phonics: "/ˈted.i bear/" },
  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 1", category: "vocabulary", english: "tiger", vietnamese: "con hổ", type: "vocabulary", image: "Global_Success_1/Unit14/tiger.png", phonics: "/ˈtaɪ.ɡər/" },
  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 1", category: "vocabulary", english: "top", vietnamese: "con xoay / con quay", type: "vocabulary", image: "Global_Success_1/Unit14/top.png", phonics: "/tɒp/" },
  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 1", category: "vocabulary", english: "turtle", vietnamese: "con rùa", type: "vocabulary", image: "Global_Success_1/Unit14/turtle.png", phonics: "/ˈtɜː.təl/" },

  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 2", category: "chant", english: "T, t, tiger.\nT, t, turtle.\nA tiger and a turtle.", vietnamese: "T, t, con hổ.\nT, t, con rùa.\nMột con hổ và một con rùa.", type: "chant", image: "Global_Success_1/Unit14/tiger.png" },
  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 2", category: "chant", english: "T, t, teddy bear.\nT, t, top.\nA teddy bear and a top.", vietnamese: "T, t, gấu bông.\nT, t, con quay.\nMột chú gấu bông và một con quay.", type: "chant", image: "Global_Success_1/Unit14/teddybear.png" },

  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 3", category: "grammar", english: "I can see a tiger.", vietnamese: "Mình có thể nhìn thấy một con hổ.", type: "grammar", image: "Global_Success_1/Unit14/tiger.png" },
  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 3", category: "grammar", english: "I can see a turtle.", vietnamese: "Mình có thể nhìn thấy một con rùa.", type: "grammar", image: "Global_Success_1/Unit14/turtle.png" },
  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 3", category: "grammar", english: "I can see a teddy bear.", vietnamese: "Mình có thể nhìn thấy một chú gấu bông.", type: "grammar", image: "Global_Success_1/Unit14/teddybear.png" },
  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 3", category: "grammar", english: "I can see a top.", vietnamese: "Mình có thể nhìn thấy một con quay.", type: "grammar", image: "Global_Success_1/Unit14/top.png" },

  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 3", category: "song", english: "In the toy shop.\nIn the toy shop.\nI can see a tiger.\nI can see a turtle.", vietnamese: "Ở trong cửa hàng đồ chơi.\nỞ trong cửa hàng đồ chơi.\nMình có thể nhìn thấy một con hổ.\nMình có thể nhìn thấy một con rùa.", type: "song", image: "Global_Success_1/Unit14/tiger.png" },
  { course: "Global Success 1", unit: "Unit 14", unitTitle: "In the toy shop", lesson: "Lesson 3", category: "song", english: "In the toy shop.\nIn the toy shop.\nI can see a teddy bear.\nI can see a top.", vietnamese: "Ở trong cửa hàng đồ chơi.\nỞ trong cửa hàng đồ chơi.\nMình có thể nhìn thấy một chú gấu bông.\nMình có thể nhìn thấy một con quay.", type: "song", image: "Global_Success_1/Unit14/teddybear.png" },

  // --- UNIT 15: At the football match ---
  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 1", category: "phonics", english: "F, f", vietnamese: "Chữ cái F, âm /f/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 1", category: "vocabulary", english: "face", vietnamese: "khuôn mặt", type: "vocabulary", image: "Global_Success_1/Unit15/face.png", phonics: "/feɪs/" },
  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 1", category: "vocabulary", english: "father", vietnamese: "bố / cha", type: "vocabulary", image: "Global_Success_1/Unit15/father.png", phonics: "/ˈfɑː.ðər/" },
  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 1", category: "vocabulary", english: "foot", vietnamese: "bàn chân", type: "vocabulary", image: "Global_Success_1/Unit15/foot.png", phonics: "/fʊt/" },
  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 1", category: "vocabulary", english: "football", vietnamese: "quả bóng đá", type: "vocabulary", image: "Global_Success_1/Unit15/football.png", phonics: "/ˈfʊt.bɔːl/" },

  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 2", category: "chant", english: "F, f, face.\nF, f, foot.\nTouch your face.\nTouch your foot.", vietnamese: "F, f, khuôn mặt.\nF, f, bàn chân.\nHãy chạm vào khuôn mặt của bạn.\nHãy chạm vào bàn chân của bạn.", type: "chant", image: "Global_Success_1/Unit15/face.png" },
  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 2", category: "chant", english: "F, f, father.\nF, f, football.\nPoint to your father.\nPoint to the football.", vietnamese: "F, f, người bố.\nF, f, quả bóng đá.\nHãy chỉ vào bố của bạn.\nHãy chỉ vào quả bóng đá.", type: "chant", image: "Global_Success_1/Unit15/father.png" },

  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 3", category: "grammar", english: "Point to your hand.", vietnamese: "Hãy chỉ vào bàn tay của bạn.", type: "grammar", image: "Global_Success_1/Unit8/hand.png" },
  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 3", category: "grammar", english: "Point to your face.", vietnamese: "Hãy chỉ vào khuôn mặt của bạn.", type: "grammar", image: "Global_Success_1/Unit15/face.png" },
  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 3", category: "grammar", english: "Point to your foot.", vietnamese: "Hãy chỉ vào bàn chân của bạn.", type: "grammar", image: "Global_Success_1/Unit15/foot.png" },
  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 3", category: "grammar", english: "Point to your father.", vietnamese: "Hãy chỉ vào bố của bạn.", type: "grammar", image: "Global_Success_1/Unit15/father.png" },

  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 3", category: "song", english: "Point to your face.\nPoint to your foot.\nTouch your face.\nTouch your foot.", vietnamese: "Hãy chỉ vào khuôn mặt của bạn.\nHãy chỉ vào bàn chân của bạn.\nHãy chạm vào khuôn mặt của bạn.\nHãy chạm vào bàn chân của bạn.", type: "song", image: "Global_Success_1/Unit15/face.png" },
  { course: "Global Success 1", unit: "Unit 15", unitTitle: "At the football match", lesson: "Lesson 3", category: "song", english: "Point to your father.\nPoint to the football.\nSay hello to your father.\nKick the football.", vietnamese: "Hãy chỉ vào bố của bạn.\nHãy chỉ vào quả bóng đá.\nHãy chào bố của bạn.\nHãy đá quả bóng.", type: "song", image: "Global_Success_1/Unit15/football.png" },

  // --- UNIT 16: At home ---
  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 1", category: "phonics", english: "W, w", vietnamese: "Chữ cái W, âm /w/", type: "phonics", image: "" },
  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 1", category: "vocabulary", english: "wash", vietnamese: "rửa / gội", type: "vocabulary", image: "Global_Success_1/Unit16/wash.png", phonics: "/wɒʃ/" },
  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 1", category: "vocabulary", english: "water", vietnamese: "nước sạch", type: "vocabulary", image: "Global_Success_1/Unit16/water.png", phonics: "/ˈwɔː.tər/" },
  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 1", category: "vocabulary", english: "window", vietnamese: "cửa sổ", type: "vocabulary", image: "Global_Success_1/Unit16/window.png", phonics: "/ˈwɪn.dəʊ/" },

  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 2", category: "chant", english: "W, w, wash.\nW, w, water.\nWashing with water.", vietnamese: "W, w, rửa.\nW, w, nước sạch.\nĐang rửa bằng nước.", type: "chant", image: "Global_Success_1/Unit16/wash.png" },
  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 2", category: "chant", english: "W, w, window.\nW, w, windows.\nLooking out of the window.", vietnamese: "W, w, cửa sổ.\nW, w, những chiếc cửa sổ.\nĐang nhìn ra ngoài cửa sổ.", type: "chant", image: "Global_Success_1/Unit16/window.png" },

  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 3", category: "grammar", english: "How many windows can you see? I can see six.", vietnamese: "Bạn có thể thấy bao nhiêu chiếc cửa sổ? Mình thấy sáu cái.", type: "grammar", image: "Global_Success_1/Unit16/window.png" },
  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 3", category: "grammar", english: "How many doors can you see? I can see six.", vietnamese: "Bạn có thể thấy bao nhiêu cánh cửa? Mình thấy sáu cái.", type: "grammar", image: "Global_Success_1/Unit4/door.png" },
  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 3", category: "grammar", english: "How many desks can you see? I can see six.", vietnamese: "Bạn có thể thấy bao nhiêu chiếc bàn? Mình thấy sáu cái.", type: "grammar", image: "Global_Success_1/Unit4/desk.png" },

  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 3", category: "song", english: "Wash your face with water.\nWash your hands with water.\nClean and happy at home.", vietnamese: "Rửa mặt bằng nước sạch.\nRửa tay bằng nước sạch.\nSạch sẽ và hạnh phúc ở nhà.", type: "song", image: "Global_Success_1/Unit16/wash.png" },
  { course: "Global Success 1", unit: "Unit 16", unitTitle: "At home", lesson: "Lesson 3", category: "song", english: "Look at the windows.\nOne, two, three, four, five, six.\nI can see six windows.", vietnamese: "Hãy nhìn những chiếc cửa sổ.\nMột, hai, ba, bốn, năm, sáu.\nMình có thể nhìn thấy sáu chiếc cửa sổ.", type: "song", image: "Global_Success_1/Unit16/window.png" },

  // --- REVIEW 4: Units 13-16 ---
  { course: "Global Success 1", unit: "Review 4", unitTitle: "Units 13 - 16 Summary", lesson: "Story Review", category: "grammar", english: "In the toy shop. Look! I can see a tiger.", vietnamese: "Ở cửa hàng đồ chơi. Nhìn kìa! Mình thấy một con hổ.", type: "grammar", image: "Global_Success_1/Unit14/tiger.png" },
  { course: "Global Success 1", unit: "Review 4", unitTitle: "Units 13 - 16 Summary", lesson: "Story Review", category: "grammar", english: "And I can see a turtle.", vietnamese: "Và mình có thể thấy một con rùa.", type: "grammar", image: "Global_Success_1/Unit14/turtle.png" },
  { course: "Global Success 1", unit: "Review 4", unitTitle: "Units 13 - 16 Summary", lesson: "Story Review", category: "grammar", english: "I can see a teddy bear. It's washing its face.", vietnamese: "Mình thấy một con gấu bông. Nó đang rửa mặt.", type: "grammar", image: "Global_Success_1/Unit14/teddybear.png" },
  { course: "Global Success 1", unit: "Review 4", unitTitle: "Units 13 - 16 Summary", lesson: "Story Review", category: "grammar", english: "Oh, Phil! It's a real bear!", vietnamese: "Ôi, Phil ơi! Đó là một con gấu thật đấy!", type: "grammar", image: "Global_Success_1/Unit1/bill.png" },
  // ==========================================
  // GLOBAL SUCCESS 2 - BATCH 1 (UNITS 1 - 4 & REVIEW 1)
  // ==========================================
  // UNIT 1: At my birthday party
  { course: "Global Success 2", unit: "Unit 1", unitTitle: "At my birthday party", lesson: "Lesson 1", category: "phonics", english: "P, p", vietnamese: "Âm P /p/", type: "phonics", image: "", phonics: "/p/" },
  { course: "Global Success 2", unit: "Unit 1", unitTitle: "At my birthday party", lesson: "Lesson 1", category: "vocabulary", english: "popcorn", vietnamese: "bỏng ngô / bắp rang bơ", type: "vocabulary", image: "popcorn.png", phonics: "/ˈpɒp.kɔːn/" },
  { course: "Global Success 2", unit: "Unit 1", unitTitle: "At my birthday party", lesson: "Lesson 1", category: "vocabulary", english: "pasta", vietnamese: "mỳ Ý / nui", type: "vocabulary", image: "pasta.png", phonics: "/ˈpæs.tə/" },
  { course: "Global Success 2", unit: "Unit 1", unitTitle: "At my birthday party", lesson: "Lesson 1", category: "vocabulary", english: "pizza", vietnamese: "bánh pizza", type: "vocabulary", image: "pizza.png", phonics: "/ˈpiːt.sə/" },
  { course: "Global Success 2", unit: "Unit 1", unitTitle: "At my birthday party", lesson: "Lesson 2", category: "chant", english: "P, p, pasta.\nP, p, pizza.\nP, p, popcorn.\nI like pasta.\nI like pizza.\nI like popcorn.\nYummy, yummy, yummy.", vietnamese: "P, p, mỳ Ý.\nP, p, bánh pizza.\nP, p, bỏng ngô.\nMình thích mỳ Ý.\nMình thích bánh pizza.\nMình thích bỏng ngô.\nNgon quá, ngon quá, ngon quá.", type: "chant", image: "popcorn.png" },
  { course: "Global Success 2", unit: "Unit 1", unitTitle: "At my birthday party", lesson: "Lesson 3", category: "grammar", english: "The popcorn is yummy.", vietnamese: "Bỏng ngô ngon quá.", type: "grammar", image: "popcorn.png" },
  { course: "Global Success 2", unit: "Unit 1", unitTitle: "At my birthday party", lesson: "Lesson 3", category: "grammar", english: "The pasta is yummy.", vietnamese: "Mỳ Ý ngon quá.", type: "grammar", image: "pasta.png" },
  { course: "Global Success 2", unit: "Unit 1", unitTitle: "At my birthday party", lesson: "Lesson 3", category: "grammar", english: "The pizza is yummy.", vietnamese: "Bánh pizza ngon quá.", type: "grammar", image: "pizza.png" },
  { course: "Global Success 2", unit: "Unit 1", unitTitle: "At my birthday party", lesson: "Lesson 3", category: "song", english: "It's my birthday party.\nI like pasta.\nThe pasta is yummy.\nI like pizza.\nThe pizza is yummy.\nI like popcorn.\nThe popcorn is yummy.", vietnamese: "Hôm nay là tiệc sinh nhật của mình.\nMình thích mỳ Ý.\nMỳ Ý ngon quá.\nMình thích bánh pizza.\nBánh pizza ngon quá.\nMình thích bỏng ngô.\nBỏng ngô ngon quá.", type: "song", image: "popcorn.png" },

  // UNIT 2: In the backyard
  { course: "Global Success 2", unit: "Unit 2", unitTitle: "In the backyard", lesson: "Lesson 1", category: "phonics", english: "K, k", vietnamese: "Âm K /k/", type: "phonics", image: "", phonics: "/k/" },
  { course: "Global Success 2", unit: "Unit 2", unitTitle: "In the backyard", lesson: "Lesson 1", category: "vocabulary", english: "kite", vietnamese: "cái diều", type: "vocabulary", image: "kite.png", phonics: "/kaɪt/" },
  { course: "Global Success 2", unit: "Unit 2", unitTitle: "In the backyard", lesson: "Lesson 1", category: "vocabulary", english: "bike", vietnamese: "xe đạp", type: "vocabulary", image: "Global_Success_1/Unit1/bike.png", phonics: "/baɪk/" },
  { course: "Global Success 2", unit: "Unit 2", unitTitle: "In the backyard", lesson: "Lesson 1", category: "vocabulary", english: "kitten", vietnamese: "mèo con", type: "vocabulary", image: "kitten.png", phonics: "/ˈkɪt.ən/" },
  { course: "Global Success 2", unit: "Unit 2", unitTitle: "In the backyard", lesson: "Lesson 2", category: "chant", english: "K, k, kite.\nHe's flying a kite.\nK, k, bike.\nHe's riding a bike.\nK, k, kitten.\nShe's playing with a kitten.", vietnamese: "K, k, cái diều.\nCậu ấy đang thả diều.\nK, k, xe đạp.\nCậu ấy đang đi xe đạp.\nK, k, mèo con.\nCô ấy đang chơi với chú mèo con.", type: "chant", image: "kite.png" },
  { course: "Global Success 2", unit: "Unit 2", unitTitle: "In the backyard", lesson: "Lesson 3", category: "grammar", english: "Is she flying a kite? Yes, she is.", vietnamese: "Cô ấy đang thả diều phải không? Đúng rồi.", type: "grammar", image: "kite.png" },
  { course: "Global Success 2", unit: "Unit 2", unitTitle: "In the backyard", lesson: "Lesson 3", category: "grammar", english: "Is he flying a kite? No, he isn't.", vietnamese: "Cậu ấy đang thả diều phải không? Không phải.", type: "grammar", image: "kite.png" },
  { course: "Global Success 2", unit: "Unit 2", unitTitle: "In the backyard", lesson: "Lesson 3", category: "grammar", english: "Is she playing with a kitten? Yes, she is.", vietnamese: "Cô ấy đang chơi với chú mèo con phải không? Đúng rồi.", type: "grammar", image: "kitten.png" },
  { course: "Global Success 2", unit: "Unit 2", unitTitle: "In the backyard", lesson: "Lesson 3", category: "grammar", english: "Is he riding a bike? Yes, he is.", vietnamese: "Cậu ấy đang đi xe đạp phải không? Đúng rồi.", type: "grammar", image: "Global_Success_1/Unit1/bike.png" },
  { course: "Global Success 2", unit: "Unit 2", unitTitle: "In the backyard", lesson: "Lesson 3", category: "song", english: "Where's Kate?\nShe's in the yard.\nIs she riding a bike?\nYes, she is. Yes, she is.\nWhere's Ken?\nHe's in the yard.\nIs he riding a bike?\nNo, he isn't. No, he isn't.", vietnamese: "Kate ở đâu?\nCô ấy ở trong sân.\nCô ấy đang đi xe đạp phải không?\nĐúng rồi. Đúng rồi.\nKen ở đâu?\nCậu ấy ở trong sân.\nCậu ấy đang đi xe đạp phải không?\nKhông phải. Không phải.", type: "song", image: "Global_Success_1/Unit1/bike.png" },

  // UNIT 3: At the seaside
  { course: "Global Success 2", unit: "Unit 3", unitTitle: "At the seaside", lesson: "Lesson 1", category: "phonics", english: "S, s", vietnamese: "Âm S /s/", type: "phonics", image: "", phonics: "/s/" },
  { course: "Global Success 2", unit: "Unit 3", unitTitle: "At the seaside", lesson: "Lesson 1", category: "vocabulary", english: "sail", vietnamese: "cánh buồm", type: "vocabulary", image: "sail.png", phonics: "/seɪl/" },
  { course: "Global Success 2", unit: "Unit 3", unitTitle: "At the seaside", lesson: "Lesson 1", category: "vocabulary", english: "sand", vietnamese: "bãi cát", type: "vocabulary", image: "sand.png", phonics: "/sænd/" },
  { course: "Global Success 2", unit: "Unit 3", unitTitle: "At the seaside", lesson: "Lesson 1", category: "vocabulary", english: "sea", vietnamese: "biển", type: "vocabulary", image: "sea.png", phonics: "/siː/" },
  { course: "Global Success 2", unit: "Unit 3", unitTitle: "At the seaside", lesson: "Lesson 2", category: "chant", english: "S, s, sea.\nS, s, sail.\nS, s, sand.\nI can see the sea.\nI can see the sail.\nI can see the sand\nAt the seaside.", vietnamese: "S, s, biển.\nS, s, cánh buồm.\nS, s, bãi cát.\nMình có thể nhìn thấy biển.\nMình có thể nhìn thấy cánh buồm.\nMình có thể nhìn thấy bãi cát\nỞ bãi biển.", type: "chant", image: "sea.png" },
  { course: "Global Success 2", unit: "Unit 3", unitTitle: "At the seaside", lesson: "Lesson 3", category: "grammar", english: "Let's look at the sea!", vietnamese: "Hãy nhìn vào biển kìa!", type: "grammar", image: "sea.png" },
  { course: "Global Success 2", unit: "Unit 3", unitTitle: "At the seaside", lesson: "Lesson 3", category: "grammar", english: "Let's look at the sail!", vietnamese: "Hãy nhìn vào cánh buồm kìa!", type: "grammar", image: "sail.png" },
  { course: "Global Success 2", unit: "Unit 3", unitTitle: "At the seaside", lesson: "Lesson 3", category: "grammar", english: "Let's look at the sand!", vietnamese: "Hãy nhìn vào bãi cát kìa!", type: "grammar", image: "sand.png" },
  { course: "Global Success 2", unit: "Unit 3", unitTitle: "At the seaside", lesson: "Lesson 3", category: "song", english: "It's Saturday.\nIt's a sunny day.\nWe're at the seaside.\nLet's look at the sail!\nIt's Sunday.\nIt's a sunny day.\nWe're at the seaside.\nLet's look at the sand!", vietnamese: "Hôm nay là Thứ Bảy.\nHôm nay là một ngày nắng đẹp.\nChúng mình đang ở bãi biển.\nHãy nhìn vào cánh buồm kìa!\nHôm nay là Chủ Nhật.\nHôm nay là một ngày nắng đẹp.\nChúng mình đang ở bãi biển.\nHãy nhìn vào bãi cát kìa!", type: "song", image: "sail.png" },

  // UNIT 4: In the countryside
  { course: "Global Success 2", unit: "Unit 4", unitTitle: "In the countryside", lesson: "Lesson 1", category: "phonics", english: "R, r", vietnamese: "Âm R /r/", type: "phonics", image: "", phonics: "/r/" },
  { course: "Global Success 2", unit: "Unit 4", unitTitle: "In the countryside", lesson: "Lesson 1", category: "vocabulary", english: "rainbow", vietnamese: "cầu vồng", type: "vocabulary", image: "rainbow.png", phonics: "/ˈreɪn.bəʊ/" },
  { course: "Global Success 2", unit: "Unit 4", unitTitle: "In the countryside", lesson: "Lesson 1", category: "vocabulary", english: "river", vietnamese: "dòng sông", type: "vocabulary", image: "river.png", phonics: "/ˈrɪv.ər/" },
  { course: "Global Success 2", unit: "Unit 4", unitTitle: "In the countryside", lesson: "Lesson 1", category: "vocabulary", english: "road", vietnamese: "con đường", type: "vocabulary", image: "road.png", phonics: "/rəʊd/" },
  { course: "Global Success 2", unit: "Unit 4", unitTitle: "In the countryside", lesson: "Lesson 2", category: "chant", english: "R, r, road.\nThere's a road.\nR, r, river.\nThere's a river.\nR, r, rainbow.\nThere's a rainbow.", vietnamese: "R, r, con đường.\nCó một con đường.\nR, r, dòng sông.\nCó một dòng sông.\nR, r, cầu vồng.\nCó một cầu vồng.", type: "chant", image: "rainbow.png" },
  { course: "Global Success 2", unit: "Unit 4", unitTitle: "In the countryside", lesson: "Lesson 3", category: "grammar", english: "What can you see? I can see a rainbow.", vietnamese: "Bạn có thể nhìn thấy gì? Mình có thể nhìn thấy một cầu vồng.", type: "grammar", image: "rainbow.png" },
  { course: "Global Success 2", unit: "Unit 4", unitTitle: "In the countryside", lesson: "Lesson 3", category: "grammar", english: "What can you see? I can see a river.", vietnamese: "Bạn có thể nhìn thấy gì? Mình có thể nhìn thấy một dòng sông.", type: "grammar", image: "river.png" },
  { course: "Global Success 2", unit: "Unit 4", unitTitle: "In the countryside", lesson: "Lesson 3", category: "grammar", english: "What can you see? I can see a road.", vietnamese: "Bạn có thể nhìn thấy gì? Mình có thể nhìn thấy một con đường.", type: "grammar", image: "road.png" },
  { course: "Global Success 2", unit: "Unit 4", unitTitle: "In the countryside", lesson: "Lesson 3", category: "song", english: "What can you see?\nI can see a rainbow.\nA rainbow in the sky.\nWhat can you see?\nI can see a river.\nA river near the road.", vietnamese: "Bạn có thể nhìn thấy gì?\nMình có thể nhìn thấy một cầu vồng.\nMột cầu vồng trên bầu trời.\nBạn có thể nhìn thấy gì?\nMình có thể nhìn thấy một dòng sông.\nMột dòng sông bên cạnh con đường.", type: "song", image: "rainbow.png" },

  // REVIEW 1: Units 1 - 4
  { course: "Global Success 2", unit: "Review 1", unitTitle: "Units 1 - 4 Summary", lesson: "Lesson 1", category: "grammar", english: "Hi! I'm Phonic Phil! ... and I'm Super Sue!", vietnamese: "Xin chào! Mình là Phil Âm Vị! ... và mình là Sue Siêu Cấp!", type: "grammar", image: "rainbow.png" },
  { course: "Global Success 2", unit: "Review 1", unitTitle: "Units 1 - 4 Summary", lesson: "Lesson 1", category: "grammar", english: "Look! Ba's flying a kite!", vietnamese: "Nhìn kìa! Ba đang thả diều!", type: "grammar", image: "kite.png" },
  { course: "Global Success 2", unit: "Review 1", unitTitle: "Units 1 - 4 Summary", lesson: "Lesson 1", category: "grammar", english: "Look! Ken's having a big pizza!", vietnamese: "Nhìn kìa! Ken đang ăn một cái bánh pizza lớn!", type: "grammar", image: "pizza.png" },
  { course: "Global Success 2", unit: "Review 1", unitTitle: "Units 1 - 4 Summary", lesson: "Lesson 1", category: "grammar", english: "Look! Kate's playing with a kitten!", vietnamese: "Nhìn kìa! Kate đang chơi với chú mèo con!", type: "grammar", image: "kitten.png" },
  { course: "Global Success 2", unit: "Review 1", unitTitle: "Units 1 - 4 Summary", lesson: "Lesson 1", category: "grammar", english: "Let's look at the sea! What can you see? I can see a rainbow.", vietnamese: "Hãy nhìn vào biển kìa! Bạn có thể thấy gì? Mình có thể thấy một cầu vồng.", type: "grammar", image: "sea.png" },

  // ==========================================
  // GLOBAL SUCCESS 2 - BATCH 2 (UNITS 5 - 8 & REVIEW 2)
  // ==========================================
  // UNIT 5: In the classroom
  { course: "Global Success 2", unit: "Unit 5", unitTitle: "In the classroom", lesson: "Lesson 1", category: "phonics", english: "Q, q", vietnamese: "Âm Q /kw/", type: "phonics", image: "", phonics: "/kw/" },
  { course: "Global Success 2", unit: "Unit 5", unitTitle: "In the classroom", lesson: "Lesson 1", category: "vocabulary", english: "question", vietnamese: "câu hỏi", type: "vocabulary", image: "Global_Success_2/Unit_5/question_g2_art.png", phonics: "/ˈkwes.tʃən/" },
  { course: "Global Success 2", unit: "Unit 5", unitTitle: "In the classroom", lesson: "Lesson 1", category: "vocabulary", english: "square", vietnamese: "hình vuông", type: "vocabulary", image: "Global_Success_2/Unit_5/square_g2_art.png", phonics: "/skweər/" },
  { course: "Global Success 2", unit: "Unit 5", unitTitle: "In the classroom", lesson: "Lesson 1", category: "vocabulary", english: "quiz", vietnamese: "câu đố", type: "vocabulary", image: "Global_Success_2/Unit_5/quiz_g2_art.png", phonics: "/kwɪz/" },
  { course: "Global Success 2", unit: "Unit 5", unitTitle: "In the classroom", lesson: "Lesson 2", category: "chant", english: "Q, q, square.\nQ, q, quiz.\nQ, q, question.", vietnamese: "Q, q, hình vuông.\nQ, q, câu đố.\nQ, q, câu hỏi.", type: "chant", image: "Global_Success_2/Unit_5/square_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 5", unitTitle: "In the classroom", lesson: "Lesson 3", category: "grammar", english: "What's she doing? She's colouring a square.", vietnamese: "Cô ấy đang làm gì? Cô ấy đang tô màu hình vuông.", type: "grammar", image: "Global_Success_2/Unit_5/square_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 5", unitTitle: "In the classroom", lesson: "Lesson 3", category: "grammar", english: "What's he doing? He's doing a quiz.", vietnamese: "Cậu ấy đang làm gì? Cậu ấy đang giải câu đố.", type: "grammar", image: "Global_Success_2/Unit_5/quiz_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 5", unitTitle: "In the classroom", lesson: "Lesson 3", category: "song", english: "What's she doing? She's answering a question. What's he doing? He's doing a quiz.", vietnamese: "Cô ấy đang làm gì? Cô ấy đang trả lời câu hỏi. Cậu ấy đang làm gì? Cậu ấy đang giải câu đố.", type: "song", image: "Global_Success_2/Unit_5/question_g2_art.png" },

  // UNIT 6: On the farm
  { course: "Global Success 2", unit: "Unit 6", unitTitle: "On the farm", lesson: "Lesson 1", category: "phonics", english: "X, x", vietnamese: "Âm X /ks/", type: "phonics", image: "", phonics: "/ks/" },
  { course: "Global Success 2", unit: "Unit 6", unitTitle: "On the farm", lesson: "Lesson 1", category: "vocabulary", english: "box", vietnamese: "cái hộp", type: "vocabulary", image: "Global_Success_2/Unit_6/box_g2_art.png", phonics: "/bɒks/" },
  { course: "Global Success 2", unit: "Unit 6", unitTitle: "On the farm", lesson: "Lesson 1", category: "vocabulary", english: "fox", vietnamese: "con cáo", type: "vocabulary", image: "Global_Success_2/Unit_6/fox_g2_art.png", phonics: "/fɒks/" },
  { course: "Global Success 2", unit: "Unit 6", unitTitle: "On the farm", lesson: "Lesson 1", category: "vocabulary", english: "ox", vietnamese: "con bò đực", type: "vocabulary", image: "Global_Success_2/Unit_6/ox_g2_art.png", phonics: "/ɒks/" },
  { course: "Global Success 2", unit: "Unit 6", unitTitle: "On the farm", lesson: "Lesson 2", category: "chant", english: "X, x, fox.\nX, x, box.\nX, x, ox.", vietnamese: "X, x, con cáo.\nX, x, cái hộp.\nX, x, con bò đực.", type: "chant", image: "Global_Success_2/Unit_6/fox_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 6", unitTitle: "On the farm", lesson: "Lesson 3", category: "grammar", english: "Is there a fox? Yes, there is.", vietnamese: "Có một con cáo ở đó phải không? Đúng vậy.", type: "grammar", image: "Global_Success_2/Unit_6/fox_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 6", unitTitle: "On the farm", lesson: "Lesson 3", category: "grammar", english: "Is there an ox? No, there isn't.", vietnamese: "Có một con bò đực ở đó phải không? Không phải.", type: "grammar", image: "Global_Success_2/Unit_6/ox_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 6", unitTitle: "On the farm", lesson: "Lesson 3", category: "song", english: "Is there a box? Yes, there is. Is there a fox? Yes, there is.", vietnamese: "Có một cái hộp ở đó phải không? Đúng vậy. Có một con cáo ở đó phải không? Đúng vậy.", type: "song", image: "Global_Success_2/Unit_6/box_g2_art.png" },

  // UNIT 7: In the kitchen
  { course: "Global Success 2", unit: "Unit 7", unitTitle: "In the kitchen", lesson: "Lesson 1", category: "phonics", english: "J, j", vietnamese: "Âm J /dʒ/", type: "phonics", image: "", phonics: "/dʒ/" },
  { course: "Global Success 2", unit: "Unit 7", unitTitle: "In the kitchen", lesson: "Lesson 1", category: "vocabulary", english: "jelly", vietnamese: "thạch", type: "vocabulary", image: "Global_Success_2/Unit_7/jelly_g2_art.png", phonics: "/ˈdʒel.i/" },
  { course: "Global Success 2", unit: "Unit 7", unitTitle: "In the kitchen", lesson: "Lesson 1", category: "vocabulary", english: "jam", vietnamese: "mứt", type: "vocabulary", image: "Global_Success_2/Unit_7/jam_g2_art.png", phonics: "/dʒæm/" },
  { course: "Global Success 2", unit: "Unit 7", unitTitle: "In the kitchen", lesson: "Lesson 1", category: "vocabulary", english: "juice", vietnamese: "nước ép", type: "vocabulary", image: "Global_Success_2/Unit_7/juice_g2_art.png", phonics: "/dʒuːs/" },
  { course: "Global Success 2", unit: "Unit 7", unitTitle: "In the kitchen", lesson: "Lesson 2", category: "chant", english: "J, j, jam. I like jam.\nJ, j, juice. I like juice.\nJ, j, jelly. I like jelly.", vietnamese: "J, j, mứt. Mình thích mứt.\nJ, j, nước ép. Mình thích nước ép.\nJ, j, thạch. Mình thích thạch.", type: "chant", image: "Global_Success_2/Unit_7/jam_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 7", unitTitle: "In the kitchen", lesson: "Lesson 3", category: "grammar", english: "Pass me the jam, please. Here you are.", vietnamese: "Làm ơn đưa cho mình mứt. Đây này.", type: "grammar", image: "Global_Success_2/Unit_7/jam_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 7", unitTitle: "In the kitchen", lesson: "Lesson 3", category: "grammar", english: "Pass me the juice, please. Here you are.", vietnamese: "Làm ơn đưa cho mình nước ép. Đây này.", type: "grammar", image: "Global_Success_2/Unit_7/juice_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 7", unitTitle: "In the kitchen", lesson: "Lesson 3", category: "song", english: "Jam, juice, jelly. Pass me the jam. Pass me the juice. Pass me the jelly. Here you are.", vietnamese: "Mứt, nước ép, thạch. Đưa cho mình mứt. Đưa cho mình nước ép. Đưa cho mình thạch. Đây này.", type: "song", image: "Global_Success_2/Unit_7/jelly_g2_art.png" },

  // UNIT 8: In the village
  { course: "Global Success 2", unit: "Unit 8", unitTitle: "In the village", lesson: "Lesson 1", category: "phonics", english: "V, v", vietnamese: "Âm V /v/", type: "phonics", image: "", phonics: "/v/" },
  { course: "Global Success 2", unit: "Unit 8", unitTitle: "In the village", lesson: "Lesson 1", category: "vocabulary", english: "village", vietnamese: "ngôi làng", type: "vocabulary", image: "Global_Success_2/Unit_8/village_g2_art.png", phonics: "/ˈvɪl.ɪdʒ/" },
  { course: "Global Success 2", unit: "Unit 8", unitTitle: "In the village", lesson: "Lesson 1", category: "vocabulary", english: "van", vietnamese: "xe tải nhỏ", type: "vocabulary", image: "Global_Success_2/Unit_8/van_g2_art.png", phonics: "/væn/" },
  { course: "Global Success 2", unit: "Unit 8", unitTitle: "In the village", lesson: "Lesson 1", category: "vocabulary", english: "volleyball", vietnamese: "bóng chuyền", type: "vocabulary", image: "Global_Success_2/Unit_8/volleyball_g2_art.png", phonics: "/ˈvɒl.i.bɔːl/" },
  { course: "Global Success 2", unit: "Unit 8", unitTitle: "In the village", lesson: "Lesson 2", category: "chant", english: "V, v, van. This is a van.\nV, v, village. This is a village.\nV, v, volleyball. This is a volleyball.", vietnamese: "V, v, xe tải nhỏ. Đây là một chiếc xe tải nhỏ.\nV, v, ngôi làng. Đây là một ngôi làng.\nV, v, bóng chuyền. Đây là một quả bóng chuyền.", type: "chant", image: "Global_Success_2/Unit_8/van_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 8", unitTitle: "In the village", lesson: "Lesson 3", category: "grammar", english: "Can you draw a van? Yes, I can.", vietnamese: "Bạn có thể vẽ một chiếc xe tải nhỏ không? Có, mình có thể.", type: "grammar", image: "Global_Success_2/Unit_8/van_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 8", unitTitle: "In the village", lesson: "Lesson 3", category: "grammar", english: "Can you draw a village? No, I can't.", vietnamese: "Bạn có thể vẽ một ngôi làng không? Không, mình không thể.", type: "grammar", image: "Global_Success_2/Unit_8/village_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 8", unitTitle: "In the village", lesson: "Lesson 3", category: "song", english: "Can you draw a van? Yes, I can. Can you draw a volleyball? Yes, I can. Can you draw a village? No, I can't.", vietnamese: "Bạn có thể vẽ một chiếc xe tải nhỏ không? Có, mình có thể. Bạn có thể vẽ một quả bóng chuyền không? Có, mình có thể. Bạn có thể vẽ một ngôi làng không? Không, mình không thể.", type: "song", image: "Global_Success_2/Unit_8/village_g2_art.png" },

  // REVIEW 2: Units 5 - 8
  { course: "Global Success 2", unit: "Review 2", unitTitle: "Units 5 - 8 Summary", lesson: "Lesson 1", category: "grammar", english: "What's she doing? She's colouring a square.", vietnamese: "Cô ấy đang làm gì? Cô ấy đang tô màu hình vuông.", type: "grammar", image: "Global_Success_2/Unit_5/square_g2_art.png" },
  { course: "Global Success 2", unit: "Review 2", unitTitle: "Units 5 - 8 Summary", lesson: "Lesson 1", category: "grammar", english: "Is there a fox? Yes, there is.", vietnamese: "Có một con cáo ở đó phải không? Đúng vậy.", type: "grammar", image: "Global_Success_2/Unit_6/fox_g2_art.png" },
  { course: "Global Success 2", unit: "Review 2", unitTitle: "Units 5 - 8 Summary", lesson: "Lesson 1", category: "grammar", english: "Pass me the jam, please. Here you are.", vietnamese: "Làm ơn đưa cho mình mứt. Đây này.", type: "grammar", image: "Global_Success_2/Unit_7/jam_g2_art.png" },
  { course: "Global Success 2", unit: "Review 2", unitTitle: "Units 5 - 8 Summary", lesson: "Lesson 1", category: "grammar", english: "Can you draw a village? No, I can't.", vietnamese: "Bạn có thể vẽ một ngôi làng không? Không, mình không thể.", type: "grammar", image: "Global_Success_2/Unit_8/village_g2_art.png" },

  // GLOBAL SUCCESS 2 - BATCH 3 (UNITS 9 - 12 & REVIEW 3)
  // --- UNIT 9: In the grocery store ---
  { course: "Global Success 2", unit: "Unit 9", unitTitle: "In the grocery store", lesson: "Lesson 1", category: "phonics", english: "Y, y", vietnamese: "Chữ cái Y, âm /j/", type: "phonics", image: "", phonics: "/j/" },
  { course: "Global Success 2", unit: "Unit 9", unitTitle: "In the grocery store", lesson: "Lesson 1", category: "vocabulary", english: "yams", vietnamese: "khoai mỡ", type: "vocabulary", image: "Global_Success_2/Unit_9/yams_g2_art.png", phonics: "/jæmz/" },
  { course: "Global Success 2", unit: "Unit 9", unitTitle: "In the grocery store", lesson: "Lesson 1", category: "vocabulary", english: "yogurt", vietnamese: "sữa chua", type: "vocabulary", image: "Global_Success_2/Unit_9/yogurt_g2_art.png", phonics: "/ˈjɒɡ.ət/" },
  { course: "Global Success 2", unit: "Unit 9", unitTitle: "In the grocery store", lesson: "Lesson 1", category: "vocabulary", english: "yo-yos", vietnamese: "đồ chơi yô-yô", type: "vocabulary", image: "Global_Success_2/Unit_9/yoyos_g2_art.png", phonics: "/ˈjəʊ.jəʊz/" },
  { course: "Global Success 2", unit: "Unit 9", unitTitle: "In the grocery store", lesson: "Lesson 2", category: "chant", english: "Y, y, yo-yos.\nCan you see the yo-yos?\nY, y, yams.\nCan you see the yams?\nY, y, yogurt.\nCan you see the yogurt?", vietnamese: "Y, y, yô-yô.\nBạn có thể nhìn thấy đồ chơi yô-yô không?\nY, y, khoai mỡ.\nBạn có thể nhìn thấy khoai mỡ không?\nY, y, sữa chua.\nBạn có thể nhìn thấy sữa chua không?", type: "chant", image: "Global_Success_2/Unit_9/yogurt_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 9", unitTitle: "In the grocery store", lesson: "Lesson 3", category: "grammar", english: "What do you want? I want some yams.", vietnamese: "Bạn muốn gì? Mình muốn một ít khoai mỡ.", type: "grammar", image: "Global_Success_2/Unit_9/yams_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 9", unitTitle: "In the grocery store", lesson: "Lesson 3", category: "song", english: "Yo-yos and yogurt.\nI want some yo-yos.\nI want some yogurt.\nYams and apples.\nMum wants some yams.\nMum wants some apples.", vietnamese: "Yô-yô và sữa chua.\nMình muốn đồ chơi yô-yô.\nMình muốn sữa chua.\nKhoai mỡ và những quả táo.\nMẹ muốn một ít khoai mỡ.\nMẹ muốn một ít những quả táo.", type: "song", image: "Global_Success_2/Unit_9/yams_g2_art.png" },

  // --- UNIT 10: At the zoo ---
  { course: "Global Success 2", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 1", category: "phonics", english: "Z, z", vietnamese: "Chữ cái Z, âm /z/", type: "phonics", image: "", phonics: "/z/" },
  { course: "Global Success 2", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 1", category: "vocabulary", english: "zoo", vietnamese: "sở thú", type: "vocabulary", image: "Global_Success_2/Unit_10/zoo_g2_art.png", phonics: "/zuː/" },
  { course: "Global Success 2", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 1", category: "vocabulary", english: "zebra", vietnamese: "ngựa vằn", type: "vocabulary", image: "Global_Success_2/Unit_10/zebra_g2_art.png", phonics: "/ˈzeb.rə/" },
  { course: "Global Success 2", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 1", category: "vocabulary", english: "zebu", vietnamese: "bò u", type: "vocabulary", image: "Global_Success_2/Unit_10/zebu_g2_art.png", phonics: "/ˈziː.buː/" },
  { course: "Global Success 2", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 2", category: "chant", english: "Z, z, zoo.\nWe're at the zoo.\nZ, z, zebra.\nThat's a zebra.\nZ, z, zebu.\nThat's a zebu.", vietnamese: "Z, z, sở thú.\nChúng ta đang ở sở thú.\nZ, z, con ngựa vằn.\nĐó là một con ngựa vằn.\nZ, z, con bò u.\nĐó là một con bò u.", type: "chant", image: "Global_Success_2/Unit_10/zoo_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 3", category: "grammar", english: "Do you like the zoo? Yes, I do.", vietnamese: "Bạn có thích sở thú không? Có, mình thích.", type: "grammar", image: "Global_Success_2/Unit_10/zoo_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 10", unitTitle: "At the zoo", lesson: "Lesson 3", category: "song", english: "We're at the zoo.\nDo you like the zebu?\nYes, I do. Yes, I do.\nWe're at the zoo.\nDo you like the zebra?\nYes, I do. Yes, I do.", vietnamese: "Chúng ta đang ở sở thú.\nBạn có thích con bò u không?\nCó, mình thích. Có, mình thích.\nChúng ta đang ở sở thú.\nBạn có thích con ngựa vằn không?\nCó, mình thích. Có, mình thích.", type: "song", image: "Global_Success_2/Unit_10/zebra_g2_art.png" },

  // --- UNIT 11: In the playground ---
  { course: "Global Success 2", unit: "Unit 11", unitTitle: "In the playground", lesson: "Lesson 1", category: "vocabulary", english: "sliding", vietnamese: "trượt (cầu trượt)", type: "vocabulary", image: "Global_Success_2/Unit_11/sliding_g2_art.png", phonics: "/ˈslaɪ.dɪŋ/" },
  { course: "Global Success 2", unit: "Unit 11", unitTitle: "In the playground", lesson: "Lesson 1", category: "vocabulary", english: "riding", vietnamese: "đạp xe", type: "vocabulary", image: "Global_Success_2/Unit_11/riding_g2_art.png", phonics: "/ˈraɪ.dɪŋ/" },
  { course: "Global Success 2", unit: "Unit 11", unitTitle: "In the playground", lesson: "Lesson 1", category: "vocabulary", english: "driving", vietnamese: "lái xe", type: "vocabulary", image: "Global_Success_2/Unit_11/driving_g2_art.png", phonics: "/ˈdraɪ.vɪŋ/" },
  { course: "Global Success 2", unit: "Unit 11", unitTitle: "In the playground", lesson: "Lesson 2", category: "chant", english: "Sliding.\nHe's sliding.\nRiding.\nShe's riding.\nDriving.\nHe's driving.", vietnamese: "Trượt.\nCậu ấy đang trượt.\nĐạp xe.\nCô ấy đang đạp xe.\nLái xe.\nCậu ấy đang lái xe.", type: "chant", image: "Global_Success_2/Unit_11/sliding_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 11", unitTitle: "In the playground", lesson: "Lesson 3", category: "grammar", english: "What's he doing? He's riding.", vietnamese: "Cậu ấy đang làm gì? Cậu ấy đang đạp xe.", type: "grammar", image: "Global_Success_2/Unit_11/riding_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 11", unitTitle: "In the playground", lesson: "Lesson 3", category: "song", english: "What's he doing?\nHe's driving.\nHe's driving in the playground.\nWhat's she doing?\nShe's sliding.\nShe's sliding in the playground.", vietnamese: "Cậu ấy đang làm gì?\nCậu ấy đang lái xe.\nCậu ấy đang lái xe trong sân chơi.\nCô ấy đang làm gì?\nCô ấy đang trượt.\nCô ấy đang trượt trong sân chơi.", type: "song", image: "Global_Success_2/Unit_11/driving_g2_art.png" },

  // --- UNIT 12: At the cafe ---
  { course: "Global Success 2", unit: "Unit 12", unitTitle: "At the cafe", lesson: "Lesson 1", category: "vocabulary", english: "table", vietnamese: "cái bàn", type: "vocabulary", image: "Global_Success_2/Unit_12/table_g2_art.png", phonics: "/ˈteɪ.bəl/" },
  { course: "Global Success 2", unit: "Unit 12", unitTitle: "At the cafe", lesson: "Lesson 1", category: "vocabulary", english: "cake", vietnamese: "cái bánh", type: "vocabulary", image: "Global_Success_2/Unit_12/cake_g2_art.png", phonics: "/keɪk/" },
  { course: "Global Success 2", unit: "Unit 12", unitTitle: "At the cafe", lesson: "Lesson 1", category: "vocabulary", english: "grapes", vietnamese: "những quả nho", type: "vocabulary", image: "Global_Success_2/Unit_12/grapes_g2_art.png", phonics: "/ɡreɪps/" },
  { course: "Global Success 2", unit: "Unit 12", unitTitle: "At the cafe", lesson: "Lesson 2", category: "chant", english: "Table. A table.\nThe table is brown.\nCake. A cake.\nThe cake is on the table.\nGrapes. Some grapes.\nThe grapes are on the table.", vietnamese: "Cái bàn. Một cái bàn.\nCái bàn màu nâu.\nBánh. Một cái bánh.\nCái bánh ở trên bàn.\nNho. Một vài quả nho.\nNhững quả nho ở trên bàn.", type: "chant", image: "Global_Success_2/Unit_12/table_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 12", unitTitle: "At the cafe", lesson: "Lesson 3", category: "grammar", english: "The cake is on the table.", vietnamese: "Cái bánh thì ở trên bàn.", type: "grammar", image: "Global_Success_2/Unit_12/cake_g2_art.png" },
  { course: "Global Success 2", unit: "Unit 12", unitTitle: "At the cafe", lesson: "Lesson 3", category: "song", english: "Look at the cake.\nThe cake is on the table.\nLook at the grapes.\nThe grapes are on the table.\nWe're having a cake.\nWe're having grapes.", vietnamese: "Nhìn cái bánh kìa.\nCái bánh ở trên bàn.\nNhìn những quả nho kìa.\nNhững quả nho ở trên bàn.\nChúng ta đang có một cái bánh.\nChúng ta đang có nho.", type: "song", image: "Global_Success_2/Unit_12/grapes_g2_art.png" },

  // --- REVIEW 3: Units 9 - 12 ---
  { course: "Global Success 2", unit: "Review 3", unitTitle: "Units 9 - 12 Summary", lesson: "Lesson 1", category: "grammar", english: "The cake is on the table. And the grapes are on the table, too.", vietnamese: "Cái bánh ở trên bàn. Và những quả nho cũng ở trên bàn.", type: "grammar", image: "Global_Success_2/Review_3/review3_g2_art.png" },
  { course: "Global Success 2", unit: "Review 3", unitTitle: "Units 9 - 12 Summary", lesson: "Lesson 1", category: "grammar", english: "Oh, Sue and Kate are here. They're riding bikes.", vietnamese: "Ồ, Sue và Kate ở đây. Họ đang đạp xe.", type: "grammar", image: "Global_Success_2/Review_3/review3_g2_art.png" }
];


// ==========================================
// 1. STATE MANAGEMENT & GLOBALS
// ==========================================
let currentDataset = [...LOCAL_DATASET];
let activeCourse = "Global Success 1";
let activeUnit = "Unit 1";
let activeLesson = "Lesson 1";
let activeCategory = "ALL";
let searchQuery = "";
let showVietnamese = true;
let ttsRate = 0.7;
let currentView = "flashcards";
let quizScore = 0;
let currentQuizQuestion = null;

// Map category raw keys to friendly Vietnamese display names
const CATEGORY_NAMES = {
  vocabulary: "Từ vựng",
  phonics: "Âm vị",
  chant: "Bài vè (Chant)",
  grammar: "Mẫu câu",
  song: "Bài hát"
};

// ==========================================
// 2. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderTreeAccordionMenu();
  loadContent("Global Success 1", "Unit 1", "Lesson 1", "ALL");
});

// ==========================================
// 3. CLEAN 4-TIER TREE MENU ENGINE (COURSE -> UNIT -> LESSON -> CATEGORY)
// ==========================================
function buildDataTree() {
  const tree = new Map();

  LOCAL_DATASET.forEach(row => {
    const course = row.course || "Global Success 1";
    const unit = row.unit || "Unit 1";
    const lesson = row.lesson || "Lesson 1";
    const category = row.category || "vocabulary";

    if (!tree.has(course)) tree.set(course, new Map());
    const unitsMap = tree.get(course);

    if (!unitsMap.has(unit)) unitsMap.set(unit, new Map());
    const lessonsMap = unitsMap.get(unit);

    if (!lessonsMap.has(lesson)) lessonsMap.set(lesson, new Set());
    lessonsMap.get(lesson).add(category);
  });

  return tree;
}

function renderTreeAccordionMenu() {
  const menuContainer = document.getElementById("accordion-menu");
  if (!menuContainer) return;

  const fragment = document.createDocumentFragment();

  buildDataTree().forEach((unitsMap, courseName) => {
    const unitListContainer = document.createElement("div");

    unitsMap.forEach((lessonsMap, unitName) => {
      const lessonListContainer = document.createElement("div");

      lessonsMap.forEach((categoriesSet, lessonName) => {
        const categoryListContainer = document.createElement("div");

        categoriesSet.forEach(catKey => {
          categoryListContainer.appendChild(createCategoryNode(courseName, unitName, lessonName, catKey));
        });

        // Level 3: Lesson Node
        const isDefaultLessonOpen = (unitName === "Unit 1" && lessonName === "Lesson 1");
        const lessonNode = createAccordionNode(lessonName, 3, categoryListContainer, () => {
          loadContent(courseName, unitName, lessonName, "ALL");
        }, isDefaultLessonOpen);

        lessonListContainer.appendChild(lessonNode);
      });

      // Level 2: Unit Node
      const isDefaultUnitOpen = (unitName === "Unit 1");
      const unitNode = createAccordionNode(unitName, 2, lessonListContainer, () => {
        loadContent(courseName, unitName, "ALL", "ALL");
      }, isDefaultUnitOpen);

      unitListContainer.appendChild(unitNode);
    });

    // Level 1: Course Node
    const courseNode = createAccordionNode(courseName, 1, unitListContainer, () => {
      loadContent(courseName, "ALL", "ALL", "ALL");
    }, true);

    fragment.appendChild(courseNode);
  });

  menuContainer.replaceChildren(fragment);
}

function createAccordionNode(label, level, childrenContainer, onClickHeader, isOpenByDefault = false) {
  const item = document.createElement("div");
  item.className = `tree-node level-${level}`;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "tree-trigger";
  button.setAttribute("aria-expanded", String(isOpenByDefault));

  const iconSpan = document.createElement("span");
  iconSpan.className = "tree-icon-indicator";

  const textSpan = document.createElement("span");
  textSpan.className = "tree-label-text";
  textSpan.textContent = label;

  button.append(iconSpan, textSpan);
  childrenContainer.className = `tree-children ${isOpenByDefault ? "is-open" : "is-closed"}`;

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const willOpen = childrenContainer.classList.contains("is-closed");
    childrenContainer.classList.toggle("is-closed", !willOpen);
    childrenContainer.classList.toggle("is-open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));

    if (onClickHeader) onClickHeader();
  });

  item.append(button, childrenContainer);
  return item;
}

function createCategoryNode(course, unit, lesson, catKey) {
  const wrapper = document.createElement("div");
  wrapper.className = "tree-node level-4";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "tree-cat-btn";
  const catDisplay = CATEGORY_NAMES[catKey.toLowerCase()] || catKey;
  button.innerHTML = `<i class="fa-solid fa-star text-gold"></i> <span>${catDisplay}</span>`;

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".tree-cat-btn").forEach(btn => btn.classList.remove("active-cat"));
    button.classList.add("active-cat");
    loadContent(course, unit, lesson, catKey);
  });

  wrapper.appendChild(button);
  return wrapper;
}

// ==========================================
// 4. CONTENT LOADING & WORKSPACE FILTERING
// ==========================================
function loadContent(course, unit, lesson, category) {
  activeCourse = course;
  activeUnit = unit;
  activeLesson = lesson;
  activeCategory = category;

  updateBreadcrumb();
  renderCards();
}

function updateBreadcrumb() {
  const lbl = document.getElementById("lbl-breadcrumb");
  if (!lbl) return;

  let pathText = `${activeCourse}`;
  if (activeUnit !== "ALL") pathText += ` • ${activeUnit}`;
  if (activeLesson !== "ALL") pathText += ` • ${activeLesson}`;
  if (activeCategory !== "ALL") {
    const catName = CATEGORY_NAMES[activeCategory.toLowerCase()] || activeCategory;
    pathText += ` • ${catName.toUpperCase()}`;
  }

  lbl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${pathText}`;
}

// ==========================================
// 5. RENDERING 3D FLIP FLASHCARDS & FALLBACK SVG ENGINE
// ==========================================
function renderCards() {
  const container = document.getElementById("card-container");
  if (!container) return;
  container.innerHTML = "";

  const filtered = LOCAL_DATASET.filter(item => {
    const matchCourse = (activeCourse === "ALL") || item.course === activeCourse;
    const matchUnit = (activeUnit === "ALL") || item.unit === activeUnit;
    const matchLesson = (activeLesson === "ALL") || item.lesson === activeLesson;
    const matchCat = (activeCategory === "ALL") || item.category.toLowerCase() === activeCategory.toLowerCase();
    const matchSearch = !searchQuery || 
      item.english.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.vietnamese.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCourse && matchUnit && matchLesson && matchCat && matchSearch;
  });

  const countLbl = document.getElementById("lbl-card-count");
  if (countLbl) {
    countLbl.innerHTML = `Đang hiển thị: <strong>${filtered.length}</strong> học liệu`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: #627485;">
        <i class="fa-solid fa-folder-open" style="font-size: 52px; margin-bottom: 14px; opacity: 0.4; color: #0D88C4;"></i>
        <h3 style="font-size: 16px; font-weight: 800; color: #1C2B36; margin-bottom: 6px;">Không Tìm Thấy Học Liệu Phù Hợp</h3>
        <p style="font-size: 13px;">Vui lòng thử chọn lại Unit, Tiết học hoặc từ khóa tìm kiếm khác.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((item) => {
    let imgSrc = "";
    if (item.image) {
      imgSrc = `images/${item.image}`;
    } else if (item.category === "vocabulary") {
      imgSrc = `images/${item.english.toLowerCase()}.png`;
    }

    const formattedEnglish = item.english.replace(/\n/g, '<br>');
    const formattedVietnamese = item.vietnamese.replace(/\n/g, '<br>');
    const isLongText = item.english.includes('\n') || item.english.length > 30;
    const hasMultilineClass = isLongText ? "has-multiline-text" : "";

    const card = document.createElement("div");
    card.className = `card-perspective ${hasMultilineClass}`;
    card.onclick = () => card.classList.toggle("flipped");

    const cleanKey = item.english.toLowerCase().replace(/[^a-z0-9]/g, "");

    card.innerHTML = `
      <div class="card-inner">
        <!-- CARD FRONT SIDE -->
        <div class="card-front">
          <div class="card-header-row">
            <span class="category-tag ${item.category.toLowerCase()}">${item.category}</span>
            <span class="unit-label-small">${item.unit} • ${item.lesson || ''}</span>
          </div>

          ${imgSrc ? `
            <div class="card-image-box">
              <img src="${imgSrc}" alt="${item.english}" onerror="this.outerHTML=getFallbackSvg('${cleanKey}')">
            </div>
          ` : `
            <div class="card-image-box">
              ${getFallbackSvg(cleanKey)}
            </div>
          `}

          <div>
            <div class="card-main-text">${formattedEnglish}</div>
            ${item.phonics ? `<div class="card-phonics">${item.phonics}</div>` : ''}
            ${showVietnamese ? `<div class="card-vietnamese">${formattedVietnamese}</div>` : ''}
          </div>

          <div class="card-footer-row">
            <button class="btn-speaker" title="Nghe đọc chuẩn tiếng Anh" onclick="speakEnglish(\`${item.english.replace(/`/g, '\`')}\`, event)">
              <i class="fa-solid fa-volume-high"></i>
            </button>
            <span class="btn-flip-hint"><i class="fa-solid fa-rotate"></i> Lật thẻ</span>
          </div>
        </div>

        <!-- CARD BACK SIDE -->
        <div class="card-back">
          <div class="card-header-row">
            <span class="category-tag ${item.category.toLowerCase()}">${item.category}</span>
            <span class="unit-label-small">${item.unit}</span>
          </div>

          <div style="margin: auto 0;">
            <div style="font-size: 24px; font-weight: 800; color: #059669; margin-bottom: 8px;">
              ${formattedVietnamese}
            </div>
            <div style="font-size: 16px; font-weight: 700; color: #1C2B36;">
              ${formattedEnglish}
            </div>
          </div>

          <div class="card-footer-row">
            <button class="btn-speaker" title="Nghe đọc lại" onclick="speakEnglish(\`${item.english.replace(/`/g, '\`')}\`, event)">
              <i class="fa-solid fa-volume-high"></i>
            </button>
            <span class="btn-flip-hint"><i class="fa-solid fa-rotate"></i> Lật lại</span>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function getFallbackSvg(cleanKey) {
  const svgs = {
        pp: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FCE7F3"/><text x="50" y="62" font-size="34" font-weight="900" fill="#BE185D" text-anchor="middle">P p</text></svg>`,
    kk: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FEF3C7"/><text x="50" y="62" font-size="34" font-weight="900" fill="#B45309" text-anchor="middle">K k</text></svg>`,
    ss: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#CCFBF1"/><text x="50" y="62" font-size="34" font-weight="900" fill="#0F766E" text-anchor="middle">S s</text></svg>`,
    rr: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#E0F2FE"/><text x="50" y="62" font-size="34" font-weight="900" fill="#0369A1" text-anchor="middle">R r</text></svg>`,
    bb: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#E0F2FE"/><text x="50" y="62" font-size="34" font-weight="900" fill="#0369A1" text-anchor="middle">B b</text></svg>`,
    cc: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FFF7ED"/><text x="50" y="62" font-size="34" font-weight="900" fill="#C2410C" text-anchor="middle">C c</text></svg>`,
    aa: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FEE2E2"/><text x="50" y="62" font-size="34" font-weight="900" fill="#B91C1C" text-anchor="middle">A a</text></svg>`,
    dd: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FEF3C7"/><text x="50" y="62" font-size="34" font-weight="900" fill="#B45309" text-anchor="middle">D d</text></svg>`,
    ii: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#F3E8FF"/><text x="50" y="62" font-size="34" font-weight="900" fill="#6B21A8" text-anchor="middle">I i</text></svg>`,
    ee: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FCE7F3"/><text x="50" y="62" font-size="34" font-weight="900" fill="#BE185D" text-anchor="middle">E e</text></svg>`,
    gg: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#DCFCE7"/><text x="50" y="62" font-size="34" font-weight="900" fill="#15803D" text-anchor="middle">G g</text></svg>`,
    hh: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#ECFDF5"/><text x="50" y="62" font-size="34" font-weight="900" fill="#047857" text-anchor="middle">H h</text></svg>`,
    oo: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FFEDD5"/><text x="50" y="62" font-size="34" font-weight="900" fill="#9A3412" text-anchor="middle">O o</text></svg>`,
    mm: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FCE7F3"/><text x="50" y="62" font-size="34" font-weight="900" fill="#9D174D" text-anchor="middle">M m</text></svg>`,
    uu: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FEF9C3"/><text x="50" y="62" font-size="34" font-weight="900" fill="#854D0E" text-anchor="middle">U u</text></svg>`,
    ll: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#CCFBF1"/><text x="50" y="62" font-size="34" font-weight="900" fill="#0F766E" text-anchor="middle">L l</text></svg>`,
    nn: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#E0F2FE"/><text x="50" y="62" font-size="34" font-weight="900" fill="#0369A1" text-anchor="middle">N n</text></svg>`,
    tt: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FCE4EC"/><text x="50" y="62" font-size="34" font-weight="900" fill="#BE185D" text-anchor="middle">T t</text></svg>`,
    ff: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#FEF3C7"/><text x="50" y="62" font-size="34" font-weight="900" fill="#B45309" text-anchor="middle">F f</text></svg>`,
    ww: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#DCFCE7"/><text x="50" y="62" font-size="34" font-weight="900" fill="#15803D" text-anchor="middle">W w</text></svg>`
  };

  if (svgs[cleanKey]) return svgs[cleanKey];
  return `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="44" fill="#E8F7FE"/><circle cx="50" cy="50" r="32" fill="#0D88C4"/><path d="M40 32 L68 50 L40 68 Z" fill="#FFCA29"/></svg>`;
}

// ==========================================
// 6. CATEGORY FILTER & SEARCH HANDLERS
// ==========================================
function filterCategory(cat) {
  activeCategory = cat;
  if (cat !== "ALL") {
    activeLesson = "ALL";
  }
  document.querySelectorAll(".category-pills .pill").forEach(pill => {
    pill.classList.remove("active");
  });
  if (event && event.target) {
    event.target.classList.add("active");
  }
  updateBreadcrumb();
  renderCards();
}

function onSearchInput() {
  searchQuery = document.getElementById("txt-search").value.trim();
  renderCards();
}

function toggleGlobalVietnamese() {
  showVietnamese = document.getElementById("chk-show-vietnamese").checked;
  renderCards();
}

// ==========================================
// 7. AUTO-PLAY & TTS SPEECH SYNTHESIS ENGINE
// ==========================================
function prepareSpeechText(rawText) {
  let processed = rawText;
  processed = processed.replace(/\bBa\b/g, "Bah");
  return processed;
}

function speakEnglish(rawText, event) {
  if (event) event.stopPropagation();

  if (!('speechSynthesis' in window)) {
    alert("Trình duyệt không hỗ trợ phát âm tự động.");
    return;
  }

  window.speechSynthesis.cancel();
  const selectedRate = parseFloat(document.getElementById("sel-tts-rate")?.value) || 0.7;
  const lines = rawText.split('\n').filter(l => l.trim().length > 0);

  if (lines.length > 1) {
    speakLinesSequentially(lines, 0, selectedRate);
  } else {
    const textToSpeak = prepareSpeechText(rawText);
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "en-US";
    utterance.rate = selectedRate;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(v => v.lang.includes("en-US") || v.lang.includes("en_US"));
    if (usVoice) utterance.voice = usVoice;

    window.speechSynthesis.speak(utterance);
  }
}

function speakLinesSequentially(lines, index, baseRate) {
  if (index >= lines.length) return;

  const lineText = prepareSpeechText(lines[index]);
  const utterance = new SpeechSynthesisUtterance(lineText);
  utterance.lang = "en-US";
  utterance.rate = baseRate * 0.9;
  utterance.pitch = 1.05;

  const voices = window.speechSynthesis.getVoices();
  const usVoice = voices.find(v => v.lang.includes("en-US") || v.lang.includes("en_US"));
  if (usVoice) utterance.voice = usVoice;

  utterance.onend = () => {
    setTimeout(() => {
      speakLinesSequentially(lines, index + 1, baseRate);
    }, 750);
  };

  window.speechSynthesis.speak(utterance);
}

function updateTTSSpeed() {
  ttsRate = parseFloat(document.getElementById("sel-tts-rate").value);
}

function playAutoSequence() {
  const filtered = LOCAL_DATASET.filter(item => {
    const matchCourse = (activeCourse === "ALL") || item.course === activeCourse;
    const matchUnit = (activeUnit === "ALL") || item.unit === activeUnit;
    const matchLesson = (activeLesson === "ALL") || item.lesson === activeLesson;
    const matchCat = (activeCategory === "ALL") || item.category.toLowerCase() === activeCategory.toLowerCase();
    return matchCourse && matchUnit && matchLesson && matchCat;
  });

  if (filtered.length === 0) return;

  let index = 0;
  function playNext() {
    if (index >= filtered.length) return;
    const item = filtered[index];
    speakEnglish(item.english);
    index += 1;
    setTimeout(playNext, 3800);
  }

  playNext();
}

// ==========================================
// 8. INTERACTIVE PRACTICE QUIZ ⭐
// ==========================================
function switchViewMode() {
  const flashcardsView = document.getElementById("view-flashcards");
  const quizView = document.getElementById("view-quiz");
  const btnText = document.getElementById("mode-btn-text");

  if (currentView === "flashcards") {
    currentView = "quiz";
    flashcardsView.classList.add("hidden");
    quizView.classList.remove("hidden");
    btnText.textContent = "Chế Độ Xem Thẻ";
    loadNextQuizQuestion();
  } else {
    currentView = "flashcards";
    quizView.classList.hidden = true;
    quizView.classList.add("hidden");
    flashcardsView.classList.remove("hidden");
    btnText.textContent = "Chế Độ Game Quiz ⭐";
  }
}

function loadNextQuizQuestion() {
  const vocabItems = LOCAL_DATASET.filter(i => i.category === "vocabulary" && i.image);
  if (vocabItems.length === 0) return;

  const target = vocabItems[Math.floor(Math.random() * vocabItems.length)];
  currentQuizQuestion = target;

  const otherOptions = vocabItems.filter(i => i.english !== target.english);
  const shuffledOthers = otherOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
  const options = [target, ...shuffledOthers].sort(() => 0.5 - Math.random());

  const quizBody = document.getElementById("quiz-card-body");
  quizBody.innerHTML = `
    <div class="quiz-image-box">
      <img src="images/${target.image}" alt="Quiz Image">
    </div>
    <div style="font-size: 15px; font-weight: 700; color: #627485; margin-bottom: 10px;">
      Hãy chọn từ tiếng Anh đúng với bức hình trên:
    </div>
    <div class="quiz-options-grid">
      ${options.map(opt => `
        <button class="btn-quiz-opt" onclick="checkQuizAnswer('${opt.english.replace(/'/g, "\'")}', this)">
          ${opt.english}
        </button>
      `).join('')}
    </div>
  `;
}

function checkQuizAnswer(selectedWord, btnElement) {
  if (!currentQuizQuestion) return;

  const isCorrect = (selectedWord === currentQuizQuestion.english);
  if (isCorrect) {
    btnElement.classList.add("correct");
    quizScore += 10;
    document.getElementById("quiz-score").textContent = quizScore;
    speakEnglish(currentQuizQuestion.english);
    setTimeout(loadNextQuizQuestion, 1500);
  } else {
    btnElement.classList.add("wrong");
  }
}
