import AppViewModel from '../viewModels/AppViewModel';
import HotelApiClient from '../services/HotelApiClient';
import Hotels from '../models/Hotels';

describe('viewModels.AppViewModel', () => {
  let hotelApiClient = new HotelApiClient();

  it('created successfully', () => {
    expect(new AppViewModel(hotelApiClient)).not.toBeNull();
  });

  it('getAllHotels() returns all hotels in hotelList', async () => {
    expect.assertions(1);
    let appViewModel = new AppViewModel(hotelApiClient);
    let hotels = await appViewModel.getAllHotels();
    expect(hotels.length).toEqual(4);
  });

  it('applyFacilitiesFilter() returns calls Hotels.withFacilities()', async () => {
    expect.assertions(1);
    let appViewModel = new AppViewModel(hotelApiClient);

    let allHotels = await appViewModel.getAllHotels();
    var hotelsWithCarPark = appViewModel.applyFacilitiesFilter(['car park']);

    expect(hotelsWithCarPark).toEqual(
      new Hotels(allHotels).withFacilities(['car park'])
    );
  });

  it('registerOnHotelsChanged() registers callback to notify on HotelsChanged', () => {
    let appViewModel = new AppViewModel(hotelApiClient);
    appViewModel.registerOnHotelResultChanged(() => {});
    expect(true).toEqual(true);
  });

  it('applyFacilitiesFilter() raises HotelsResultChanged event', async () => {
    expect.assertions(1);
    let eventRaised = false;
    let appViewModel = new AppViewModel(hotelApiClient);
    appViewModel.registerOnHotelResultChanged((hotels) => {
      eventRaised = true;
    });

    await appViewModel.getAllHotels();
    appViewModel.applyFacilitiesFilter(['car park']);

    expect(eventRaised).toEqual(true);
  });
});
