import HotelApiClient from '../services/HotelApiClient';

describe('HotelApiClient when given hotelList.json getAllHotels', () => {
  let hotelApiClient = new HotelApiClient();

  it('response is not null', async () => {
    expect.assertions(1);
    let allHotels = await hotelApiClient.getAllHotels();
    expect(allHotels).not.toBeNull();
  });

  it('response array has all hotels', async () => {
    expect.assertions(1);
    let allHotels = await hotelApiClient.getAllHotels();
    expect(allHotels.length).toEqual(4);
  });
});
