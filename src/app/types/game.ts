export interface Language {
  Interface: boolean;
  FullAudio: boolean;
  Subtitles: boolean;
  Achievements: boolean;
}

export interface GameTypes {
  // app_ID: number;
  // app_type: string;
  store_name: string;
  current_price: number;
  full_price: number;
  description: string;
  // developer: string[];
  // metacritic_name: string;
  // metacritic_score: number;
  // telease_state: string;
  // controller_support: string;
  // Publisher: string[];
  // SuportedSystems: string[];
  // ReleaseDate: Date;
  // PrimaryGenre: string;
  store_genres: string[];
  // ContentDescriptors: string[];
  // SupportedLanguages: {
  //   English: Language;
  //   French: Language;
  //   Italian: Language;
  //   German: Language;
  //   SpanishSpain: Language;
  //   Japanese: Language;
  //   Korean: Language;
  //   Polish: Language;
  //   Russian: Language;
  //   SimplifiedChinese: Language;
  //   Thai: Language;
  //   TraditionalChinese: Language;
  //   PortugueseBrazil: Language;
  // };
  Assets: {
    //   ClientIcon: string;
    //   ClientTga: string;
    //   Icon: string;
    //   Logo: string;
    //   Logo_Small: string;
    //   Small_Capsule: string;
    //   header_image: string;
    //   library_assets: {
    //     libreary_capsule: string;
    //     library_hero: string;
    //     library_logo: string;
    //     logo_position: {
    //       pinned_position: string;
    //       width_pct: number;
    //       height_pct: number;
    //     };
    screenshots: string[];
  };
  web_assets: {
    //     capsule_231x87: string;
    //     capsule_467x181: string;
    capsule_616x353: string;
    //     capsule_616x353_alt: string;
    //     header: string;
    //     hero_capsule: string;
    //     library_600x900: string;
    //     library_hero: string;
    //     logo: string;
    //     page_bg_raw: string;
  };
  // };
  // dlcs: [
  //   {
  //     app_ID: number;
  //     Name: string;
  //   }
  // ];
}

export const GameInitializer = {
  store_name: '',
  current_price: 0,
  full_price: 0,
  store_genres: [],
  description: '',
  web_assets: {
    capsule_616x353: '',
  },
  Assets: { screenshots: [] },
};
