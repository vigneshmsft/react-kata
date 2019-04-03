import Hotels from '../models/Hotels';
import HotelApiClient from '../services/HotelApiClient';

export default class AppViewModel {
  private readonly hotelApiClient: HotelApiClient;
  private hotels: Hotels;

  constructor(hotelApiClient: HotelApiClient) {
    this.hotelApiClient = hotelApiClient;
  }

  public async getAllHotels() {
    if (this.hotels == undefined) {
      this.hotels = new Hotels(await this.hotelApiClient.getAllHotels());
    }
    return this.hotels.all();
  }
}
