import {Status} from "../../@types";

export interface PostsPreviewSliceState {
  posts: Post[];
  status: Status
}

export type Post = {
  _id: object;
  title: string;
  link: string;
  image: string;
  text: string;
  viewsCount: number;
};
