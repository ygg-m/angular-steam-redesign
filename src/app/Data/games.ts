import { GameTypes } from '../types/game';

export const games: GameTypes[] = [
  {
    store_name: 'Sekiro™: Shadows Die Twice - GOTY Edition',
    description:
      'Carve your own path to vengeance in the adventure from developer FromSoftware. Take Revenge. Restore Your Honor. Kill Ingeniously.',
    current_price: 29.99,
    full_price: 59.99,
    store_genres: ['Souls-like', 'Difficult', 'Action', 'Singleplayer'],
    web_assets: {
      capsule_616x353: '../../assets/games/Sekiro/capsule_616x353.jpg',
    },
    Assets: {
      screenshots: [
        '../../../../../../assets/games/sekiro_01.jpg',
        '../../../../../../assets/games/sekiro_02.jpg',
        '../../../../../../assets/games/sekiro_03.jpg',
        '../../../../../../assets/games/sekiro_04.jpg',
      ],
    },
  },
  {
    store_name: 'Street Fighter™ 6',
    description:
      "Here comes Capcom's newest challenger! Street Fighter™ 6 launches worldwide on June 2nd, 2023 and represents the next evolution of the Street Fighter™ series! Street Fighter 6 spans three distinct game modes, including World Tour, Fighting Ground and Battle Hub.",
    current_price: 39.59,
    full_price: 59.99,
    discount_date: new Date('2024-04-22'),
    store_genres: ['2D Fighter', 'Fighting', 'Character Customization', '3D'],
    web_assets: {
      capsule_616x353: '../../assets/games/StreetFighter6/capsule_616x353.jpg',
    },
    Assets: {
      screenshots: [
        '../../../../../../assets/games/StreetFighter6/ss_00.jpg',
        '../../../../../../assets/games/StreetFighter6/ss_01.jpg',
        '../../../../../../assets/games/StreetFighter6/ss_02.jpg',
        '../../../../../../assets/games/StreetFighter6/ss_03.jpg',
      ],
    },
  },
  {
    store_name: 'Hollow Knight',
    description:
      'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
    current_price: 14.99,
    full_price: 14.99,
    store_genres: ['Metroidvania', 'Souls-like', 'Platformer', '2D', 'Indie'],
    web_assets: {
      capsule_616x353: '../../assets/games/HollowKnight/capsule_616x353.jpg',
    },
    Assets: {
      screenshots: [
        '../../../../../../assets/games/HollowKnight/ss_00.jpg',
        '../../../../../../assets/games/HollowKnight/ss_01.jpg',
        '../../../../../../assets/games/HollowKnight/ss_02.jpg',
        '../../../../../../assets/games/HollowKnight/ss_03.jpg',
      ],
    },
  },
];
