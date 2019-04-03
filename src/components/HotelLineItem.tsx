import React from 'react';
import HotelComponentProps from './HotelComponentProps';
import _ from 'lodash';

function HotelLineItem(props: HotelComponentProps) {
  return (
    <div>
      <span>
        {props.hotel.name} {props.hotel.starRating}
      </span>
    </div>
  );
}

export default HotelLineItem;
