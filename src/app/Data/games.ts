import { GameTypes } from '../types/game';

const path = '../../assets/games/';

function createCapsulePath(id: number): string {
  const capsulePath = `${path}${id}/capsule_616x353.jpg`;
  return capsulePath;
}

function createScreenshotPaths(id: number, NumOfImages: number): string[] {
  const screenshots: string[] = [];
  for (let i = 0; i <= NumOfImages; i++) {
    const ssID = i.toString().padStart(2, '0');
    const ssPath = `${path}${id}/ss_${ssID}.jpg`;
    screenshots.push(ssPath);
  }

  return screenshots;
}

export const gameInit = {
  store_name: '',
  app_ID: 0,
  description: '',
  current_price: 0,
  full_price: 0,
  store_genres: [],
  web_assets: {
    capsule_616x353: '',
  },
  Assets: {
    screenshots: [],
  },
};

export const gamesArray: GameTypes[] = [
  {
    store_name: 'Sekiro™: Shadows Die Twice - GOTY Edition',
    app_ID: 814380,
    description:
      'Carve your own path to vengeance in the adventure from developer FromSoftware. Take Revenge. Restore Your Honor. Kill Ingeniously.',
    current_price: 29.99,
    full_price: 59.99,
    store_genres: ['Souls-like', 'Difficult', 'Action', 'Singleplayer'],
    web_assets: {
      capsule_616x353: createCapsulePath(814380),
    },
    Assets: {
      screenshots: createScreenshotPaths(814380, 3),
    },
  },
  {
    store_name: 'Street Fighter™ 6',
    app_ID: 1364780,
    description:
      "Here comes Capcom's newest challenger! Street Fighter™ 6 launches worldwide on June 2nd, 2023 and represents the next evolution of the Street Fighter™ series! Street Fighter 6 spans three distinct game modes, including World Tour, Fighting Ground and Battle Hub.",
    current_price: 39.59,
    full_price: 59.99,
    discount_date: new Date('2024-04-22'),
    store_genres: ['2D Fighter', 'Fighting', 'Character Customization', '3D'],
    web_assets: {
      capsule_616x353: createCapsulePath(1364780),
    },
    Assets: {
      screenshots: createScreenshotPaths(1364780, 9),
    },
  },
  {
    store_name: 'Hollow Knight',
    app_ID: 367520,
    description:
      'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
    current_price: 4.99,
    full_price: 14.99,
    store_genres: ['Metroidvania', 'Souls-like', 'Platformer', '2D', 'Indie'],
    web_assets: {
      capsule_616x353: createCapsulePath(367520),
    },
    Assets: {
      screenshots: createScreenshotPaths(1364780, 4),
    },
  },
  {
    store_name: 'Cyberpunk 2077',
    app_ID: 1091500,
    description:
      'Become immersed in the neon-soaked dystopian future of Cyberpunk 2077. Take on the role of V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. Customize your cyberware and skillset, and explore the vast city of Night City.',
    current_price: 39.99,
    full_price: 39.99,
    store_genres: ['RPG', 'Open World', 'Action', 'Cyberpunk'],
    web_assets: {
      capsule_616x353: createCapsulePath(1091500),
    },
    Assets: {
      screenshots: createScreenshotPaths(1091500, 18),
    },
  },
  {
    store_name: 'The Witcher 3: Wild Hunt',
    app_ID: 292030,
    description:
      'Play as Geralt of Rivia, a highly skilled monster hunter, in the vast open world of The Witcher 3: Wild Hunt. Hunt down dangerous beasts, forge alliances, and make choices that will shape the fate of the Northern Realms.',
    current_price: 9.99,
    full_price: 39.99,
    store_genres: ['RPG', 'Open World', 'Action', 'Fantasy'],
    web_assets: {
      capsule_616x353: createCapsulePath(292030),
    },
    Assets: {
      screenshots: createScreenshotPaths(292030, 17),
    },
  },
  {
    store_name: 'Portal 2',
    app_ID: 620,
    description:
      'Continue the story of Chell and GLaDOS in Portal 2, the critically acclaimed puzzle-platformer from Valve. Explore new environments, solve mind-bending puzzles, and experience an unforgettable cooperative multiplayer mode.',
    current_price: 9.99,
    full_price: 9.99,
    store_genres: ['Puzzle', 'Co-op', 'First-Person', 'Comedy'],
    web_assets: {
      capsule_616x353: createCapsulePath(620),
    },
    Assets: {
      screenshots: createScreenshotPaths(620, 11),
    },
  },
  {
    store_name: 'Grand Theft Auto V',
    app_ID: 271590,
    description:
      'Experience the sprawling open-world of Los Santos in Grand Theft Auto V. Play as three distinct protagonists as they pursue their own criminal ambitions in this action-packed adventure.',
    current_price: 29.99,
    full_price: 29.99,
    store_genres: ['Open World', 'Action', 'Adventure', 'Crime'],
    web_assets: {
      capsule_616x353: '../../assets/games/271590/capsule_616x353.jpg',
    },
    Assets: {
      screenshots: createScreenshotPaths(814380, 14),
    },
  },
  {
    store_name: 'Red Dead Redemption 2',
    app_ID: 1174180,
    description:
      'Immerse yourself in the epic tale of outlaw Arthur Morgan in Red Dead Redemption 2. Explore the vast landscapes of the American West, engage in thrilling shootouts, and forge your own path in this gripping open-world adventure.',
    current_price: 49.99,
    full_price: 59.99,
    store_genres: ['Open World', 'Action', 'Adventure', 'Western'],
    web_assets: {
      capsule_616x353: createCapsulePath(1174180),
    },
    Assets: {
      screenshots: createScreenshotPaths(1174180, 4),
    },
  },
  {
    store_name: 'Team Fortress 2',
    app_ID: 440,
    description:
      'Nine distinct classes provide a broad range of tactical abilities and personalities. Constantly updated with new game modes, maps, equipment and, most importantly, hats!',
    current_price: 0,
    full_price: 0,
    store_genres: ['Free to Play', 'Hero Shooter', 'Multiplayer', 'FPS'],
    web_assets: {
      capsule_616x353: createCapsulePath(440),
    },
    Assets: {
      screenshots: createScreenshotPaths(440, 14),
    },
  },
  {
    store_name: 'Dota 2',
    app_ID: 570,
    description: `Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.`,
    current_price: 0,
    full_price: 0,
    store_genres: ['Free to Play', 'MOBA', 'Multiplayer', 'Strategy', 'PvP'],
    web_assets: {
      capsule_616x353: createCapsulePath(570),
    },
    Assets: {
      screenshots: createScreenshotPaths(570, 9),
    },
  },
  {
    store_name: 'Fallout: New Vegas',
    app_ID: 22380,
    description: `Welcome to Vegas. New Vegas. Enjoy your stay!`,
    current_price: 1.99,
    full_price: 9.99,
    store_genres: ['Open World', 'RPG', 'Post-apocalyptic', 'Singleplayer'],
    web_assets: {
      capsule_616x353: createCapsulePath(22380),
    },
    Assets: {
      screenshots: createScreenshotPaths(22380, 11),
    },
  },
  {
    store_name: 'Path of Exile',
    app_ID: 238960,
    description: `You are an Exile, struggling to survive on the dark continent of Wraeclast, as you fight to earn power that will allow you to exact your revenge against those who wronged you. Path of Exile is an online Action RPG set in a dark fantasy world. The game is completely free and will never be pay-to-win.`,
    current_price: 0.0,
    full_price: 0.0,
    store_genres: ['Free to Play', 'Dark Fantasy', 'Action RPG', 'Loot'],
    web_assets: {
      capsule_616x353: createCapsulePath(238960),
    },
    Assets: {
      screenshots: createScreenshotPaths(238960, 19),
    },
  },
  {
    store_name: 'Tree of Savior (English Ver.)',
    app_ID: 372000,
    description: `Tree of Savior(abbreviated as TOS thereafter) is an MMORPG in which you embark on a journey to search for the goddesses in the world of chaos. Fairy-tale like colors accompanied with beautiful graphics in TOS will have you reminiscing about precious moments all throughout the game.`,
    current_price: 0.0,
    full_price: 0.0,
    store_genres: ['MMORPG', 'RPG', 'Anime', 'Massively Multiplayer'],
    web_assets: {
      capsule_616x353: createCapsulePath(372000),
    },
    Assets: {
      screenshots: createScreenshotPaths(372000, 13),
    },
  },
  {
    store_name: `Baldur's Gate 3`,
    app_ID: 1086940,
    description: `Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.`,
    current_price: 59.99,
    full_price: 59.99,
    store_genres: ['RPG', 'Choices Matter', 'Character Customization'],
    web_assets: {
      capsule_616x353: createCapsulePath(1086940),
    },
    Assets: {
      screenshots: createScreenshotPaths(1086940, 18),
    },
  },
  {
    store_name: `GUILTY GEAR -STRIVE-`,
    app_ID: 1384160,
    description: `The cutting-edge 2D/3D hybrid graphics pioneered in the Guilty Gear series have been raised to the next level in “GUILTY GEAR -STRIVE-“. The new artistic direction and improved character animations will go beyond anything you’ve seen before in a fighting game!`,
    current_price: 59.99,
    full_price: 59.99,
    store_genres: ['Fighting', '2D Fighter', 'Great Soundtrack', 'Anime'],
    web_assets: {
      capsule_616x353: createCapsulePath(1384160),
    },
    Assets: {
      screenshots: createScreenshotPaths(1384160, 23),
    },
  },

  {
    store_name: `GUILTY GEAR XX ACCENT CORE PLUS R`,
    app_ID: 348550,
    description: `The cutting-edge 2D/3D hybrid graphics pioneered in the Guilty Gear series have been raised to the next level in “GUILTY GEAR -STRIVE-“. The new artistic direction and improved character animations will go beyond anything you’ve seen before in a fighting game!`,
    current_price: 2.99,
    full_price: 14.99,
    store_genres: ['Fighting', '2D Fighter', 'Great Soundtrack', 'Anime'],
    web_assets: {
      capsule_616x353: createCapsulePath(348550),
    },
    Assets: {
      screenshots: createScreenshotPaths(348550, 9),
    },
  },
  {
    store_name: `Overwatch 2`,
    app_ID: 2357570,
    description: `Overwatch 2 is a critically acclaimed, team-based shooter game set in an optimistic future with an evolving roster of heroes. Team up with friends and jump in today.`,
    current_price: 0.0,
    full_price: 0.0,
    store_genres: ['Hero Shooter', 'Free to Play', 'FPS', 'Multiplayer'],
    web_assets: {
      capsule_616x353: createCapsulePath(2357570),
    },
    Assets: {
      screenshots: createScreenshotPaths(2357570, 6),
    },
  },
];
