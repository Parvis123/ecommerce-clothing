import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  // map where string value goes to the  needed Id
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// this function grabs the parameters of the collection URL and matches them with the needed id number
// necessary because the current parameter is a string, not a number

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      // find collection.id matching the url paramater of our collection id map
      (collection) => collections.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
