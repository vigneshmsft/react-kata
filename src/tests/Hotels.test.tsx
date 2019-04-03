import Hotels from '../models/Hotels';
import * as _ from 'lodash';

const hotelOne = {
  name: 'hotelOne',
  starRating: 5,
  facilities: ['car park', 'gym', 'pool']
};

const hotelTwo = {
  name: 'hotelTwo',
  starRating: 4,
  facilities: ['car park', 'pool']
};
const hotelThree = {
  name: 'hotelTwo',
  starRating: 4,
  facilities: ['car park', 'pool']
};
const hotelList = [hotelOne, hotelTwo, hotelThree];

describe('models.Hotels when given Hotel[]', () => {
  it('Hotels created successfully', () => {
    let hotels = new Hotels(hotelList);
    expect(hotels).not.toBe(null);
  });

  it('all() returns original Hotel[]', () => {
    let hotels = new Hotels(hotelList);
    expect(hotels.all().length).toBe(hotelList.length);
  });
});

describe('models.Hotels withFacilities(facilities:string[])', () => {
  let hotels = new Hotels(hotelList);
  
  it('given known facility returns only hotels with those facilities', () => {
    let hotelWithFacilities = hotels.withFacilities(['car park']);
    
    let hasCarPark = true;
    _.forEach(hotelWithFacilities, hotel => hasCarPark && _.includes(hotel.facilities, 'car park'));
    expect(hasCarPark).toBe(true);
  });

  it('given known facility check does not return hotel without those facilities', () => {
    let hotelWithFacilities = hotels.withFacilities(['car park']);
    
    expect(_.includes(hotelWithFacilities, hotelThree)).toBe(false);
  });

  it('given unknown facility returns all available hotels', () => {
    expect(hotels.withFacilities(['spa'])).toBe(hotels.all().length);
  });
});
