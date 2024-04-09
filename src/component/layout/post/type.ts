export interface PostViewPropType {
  list: PostItemPropType[];
  isLoading?: boolean;
}

export interface PostItemPropType {
  title: string;
  short_description: string;
  released_at: string;
  url_slug: string;
  thumbnail: string;
  tags?: string[];
  // getPostDate: (date: string) => string;
  // headline?: string;
  // date?: string;
  // href?: string;
  // tags?: string[];
  // context?: string;
}

export interface PostSkeletonPropType {
  id: string | number;
}
