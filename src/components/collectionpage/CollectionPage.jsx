import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../collectionitem/CollectionItem";

import { selectCollection } from "../../redux/shop/shop-selectors";

import "./collection.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

// ownProps gives us all the props we're recieving on our CollectionPage component, most importantly route for match
const mapStateToProps = (state, ownProps) => ({
  // necessary because this selector needs a part of the state depending on URL parameter
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
