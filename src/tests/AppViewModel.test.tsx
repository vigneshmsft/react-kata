import AppViewModel from '../viewModels/AppViewModel';
import HotelApiClient from '../services/HotelApiClient';

describe('viewModels.AppViewModel', () => {
  let hotelApiClient = new HotelApiClient();
  
  it('created successfully', () => {
    expect(new AppViewModel(hotelApiClient)).not.toBeNull();
  });

  it('getAllHotels() returns all hotels in hotelList',  async () => {
    expect.assertions(1);
    let appViewModel = new AppViewModel(hotelApiClient);
    let hotels = await appViewModel.getAllHotels()
    expect(hotels.length).toEqual(4);
  });

});
