import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";
import { addItem, removeItem } from "./actions/";

const App = props => {
  const removeItem = item => {
    // dispatch an action here to remove an item
    props.removeItem(item);
  };

  const addItem = item => {
    // dispatch an action here to add an item
    props.addItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeItem={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures
          addItem={addItem}
          features={props.car.features}
          store={props.store}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(App);
