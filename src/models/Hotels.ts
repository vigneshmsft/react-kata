import Hotel from './Hotel';
import * as _ from 'lodash';

export default class Hotels {
  readonly hotels: Hotel[];

  public constructor(hotels: Hotel[]) {
    this.hotels = hotels;
  }

  public all(): Hotel[] {
    return this.hotels;
  }

  public withFacilities(facilitiesRequired: string[]): Hotel[] {
    let hotelsWithFacility = new Array<Hotel>();

    _.forEach(this.hotels, hotel => {
      if (
        _.some(hotel.facilities, facility =>
          _.includes(facilitiesRequired, facility)
        )
      ) {
        hotelsWithFacility.push(hotel);
      }
    });
    return _.isEmpty(hotelsWithFacility) ? this.hotels : hotelsWithFacility;
  }
}
