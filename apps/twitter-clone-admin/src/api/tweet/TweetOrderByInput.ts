import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
