export interface newsTypes {
  title: string;
  description: string;
  image?: string;
  gameId: number;
}

const path = '../../assets/news/';

export const news: newsTypes[] = [
  {
    title: 'Fireside Cup',
    image: `${path}440.png`,
    description:
      'The North American TF2 Competitive offseason is kicking off with a bang! Fireside is hosting the Fireside Cup, a $600 (with potential to increase via fundraising), two week cup featuring the best North American sixes players in the region. Not to mention, some of the best teams like Like A G6 will be participating! There is one kicker to this cup though: apart from the traditional sixes composition of two scouts, two soldiers, one demoman, and one medic, only one off-class can be on the field at any time.',
    gameId: 440,
  },
  {
    title: 'Steam Awards are here!',
    description:
      'We have received incredible support from all of our fans since the launch and we are truly grateful and incredibly humbled to see appreciation from players all over the world. If you have enjoyed your experience consider nominating Sekiro™: Shadows Die Twice for a Steam Award so that others may share in this journey. We sincerely thank you.',
    gameId: 814380,
  },
  {
    title: 'Scheduled Maintenance for May 6~7, 2024',
    description:
      'Greetings, Saviors! We would like to announce the details of our weekly maintenance. Make sure to check below for the maintenance schedule and patch notes. [KST] 10:00 to 15:00 (May 7, 2024), [EST] 20:00 to 01:00 (May 6~7, 2024), [CET] 03:00 to 08:00 (May 7, 2024), [SGT] 09:00 to 14:00 (May 7, 2024), [BRT] 22:00 to 03:00 (May 6~7, 2024)',
    gameId: 372000,
  },
  {
    title: 'Cross-platform Cloud Saves',
    description: `Soon we'll be making some changes in order to support cross-platform cloud saves between Windows, MacOS, and Linux (including the Steam Deck)! This is planned to occur on Monday, 15th of August at 05:00 (UTC).`,
    gameId: 367520,
  },
  {
    title: 'CD Projekt Red Unveils Cyberpunk 2078 Expansion Plans',
    image: `${path}1091500.png`,
    description: `We're proud to announce that Cyberpunk 2077 has been awarded during the 20th British Academy Game Awards: BAFTA Award for Evolving Game - for Cyberpunk 2077's development team for their excellence in ongoing developer support. We're deeply grateful for this choice and deeply humbled by the continuous support the game has been receiving. Thank you!`,
    gameId: 1091500,
  },
  {
    title: `May 1 is JP's Birthday!`,
    image: `${path}1364780.png`,
    description: `We're running a special event to celebrate JP's birthday!
      - A gift of 1000 Drive Tickets
      - Increased Kudos for JP
      - A JP-only tournament
      
      Let's head into the Battle Hub and celebrate JP's birthday!`,
    gameId: 1364780,
  },
];
