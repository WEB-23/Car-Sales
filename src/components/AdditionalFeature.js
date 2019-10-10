import React from "react";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addItem(props.store)} className="button">
        Add
      </button>
      {props.store.name} (+{props.store.price})
    </li>
  );
};

export default AdditionalFeature;
