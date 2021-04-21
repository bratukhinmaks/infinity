export interface News {
  channelName: string;
  channelImage:	string;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedDate: string;
}

export interface GetNewsPayload {
  limit: number;
  channelId: string | number;
  page: number;
  keyword?: string;
}

export interface GetNewsResp {
  articles: News[];
  count: number;
}

export interface NewsState {
  news: News[];
  activeNewsChannelId: string | number;
  newsPaginationNumber: number;
  loading: boolean;
  areAllNewsLoaded: boolean;
  keyword: string;
}

export const initialState: NewsState = {
  news: [],
  activeNewsChannelId: null,
  newsPaginationNumber: 1,
  loading: false,
  areAllNewsLoaded: false,
  keyword: null,
};

export const featureKey = 'news';
