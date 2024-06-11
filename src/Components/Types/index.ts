export type Genero = {
  id: number;
  name: string;
};

export type Games = {
  id: number;
  name: string;
  released: string;
  background_image: string;
  metacritic: number;
  rating: number
  reviews_text_count: string
  added: string
  playtime: number

  platforms: [
    {
      platform: {
        id: number;
        name: string;
      },
      released_at: string,
      requirements: {
        minimum: string
        recomnder: string
      }
    }
  ];
};

export type SearchForm = {
  search: string;
};

