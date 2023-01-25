import { RootState } from "../store";

export const selectPostsPreview = (state: RootState) => state.postsPreviewReducer;
