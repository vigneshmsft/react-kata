import Hotel from '../models/Hotel';
import Hotels from '../models/Hotels';
import HotelApiClient from '../services/hotelApiClient';

export default class AppViewModel {
  private readonly hotelApiClient: HotelApiClient;
  private hotels: Hotels;

  constructor(hotelApiClient: HotelApiClient) {
    this.hotelApiClient = hotelApiClient;
  }

  public async getAllHotels() : PromiseLike<Hotel[]> {
    if (this.hotels == undefined) {
      this.hotels = new Hotels(await this.hotelApiClient.getAllHotels());
    }
    return this.hotels.all();
  }
}
