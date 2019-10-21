import React from "react";
import PlaceItem from './place-item.jsx';

export default function Places({placesList}) {
  return (
    placesList.map((placeName, index) =>
      <PlaceItem
        key = {index}
        id = {index}
        name = {placeName}
      />
    )
  );
}
