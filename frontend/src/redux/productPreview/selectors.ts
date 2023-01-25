import { RootState } from "../store";

export const selectProductsPreview = (state: RootState) => state.productPreviewReducer;
