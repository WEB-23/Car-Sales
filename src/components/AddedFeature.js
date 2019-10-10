import React from "react";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeItem(props.store)} className="button">
        X
      </button>
      {props.store.name}
    </li>
  );
};

export default AddedFeature;
