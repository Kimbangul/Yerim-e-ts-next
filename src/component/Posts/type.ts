// PARAM type
export type PostListPropsType = {
  title: string,
  short_description: string,
  released_at: string,
  url_slug: string,
  thumbnail: string,
  tags?:string[],

  // headline?: string;
  // date?: string;
  // href?: string;
  // tags?: string[];
  // context?: string;
};

export type PostReqParamType = {
  id: string;
  count: number;
}