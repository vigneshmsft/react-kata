import Hotels from '../models/Hotels';

describe('models.Hotels when given Hotel[]', () => {
  let hotelList = [
    {
      name: 'hotelOne',
      starRating: 5,
      facilities: ['car park', 'gym', 'pool']
    },
    { name: 'hotelTwo', starRating: 4, facilities: ['car park', 'pool'] },
    { name: 'hotelThree', starRating: 3, facilities: [''] }
  ];
  
  it('Hotels created successfully', () => {
    let hotels = new Hotels(hotelList);
    expect(hotels).not.toBe(null);
  });

  it('all() returns original Hotel[]', () => {
    let hotels = new Hotels(hotelList);
    expect(hotels.all().length).toBe(hotelList.length)
  });
});

describe('models.Hotels withFacilities(facilities:string[])', () => {
  it('given known facility returns only hotels with those facilities', () => {
    expect(false).toBe(true);
  });

  it('given unknown facility returns all available hotels', () => {
    expect(false).toBe(true);
  });
});
