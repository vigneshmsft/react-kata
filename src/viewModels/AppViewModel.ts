import Hotel from '../models/Hotel';
import Hotels from '../models/Hotels';
import HotelApiClient from '../services/hotelApiClient';

export default class AppViewModel {
  private readonly hotelApiClient: HotelApiClient;

  constructor(hotelApiClient: HotelApiClient) {
    this.hotelApiClient = hotelApiClient;
  }

  public getAllHotels() : PromiseLike<Hotel[]> {
    return Promise.resolve([{name:'', starRating: 0, facilities:[]}]);
  }
}
