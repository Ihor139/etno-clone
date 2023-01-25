import { RootState } from "../store";

export const selectSearchTerm = (state: RootState) => state.searchReducer.value;
export const selectSearchResult = (state: RootState) =>
  state.searchReducer.result;
export const selectSearchStatus = (state: RootState) =>
  state.searchReducer.status;
