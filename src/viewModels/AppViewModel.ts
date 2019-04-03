import Hotels from '../models/Hotels';
import HotelApiClient from '../services/HotelApiClient';

export default class AppViewModel {
  private readonly hotelApiClient: HotelApiClient;
  private hotels: Hotels | undefined = undefined;
  private onHotelsResultChanged: Function;

  constructor(hotelApiClient: HotelApiClient) {
    this.hotelApiClient = hotelApiClient;
    this.onHotelsResultChanged = () => {};
  }

  public async getAllHotels() {
    if (this.hotels == undefined) {
      this.hotels = new Hotels(await this.hotelApiClient.getAllHotels());
    }
    return this.hotels!.all();
  }

  public applyFacilitiesFilter(facilities: string[]){
    let hotels = this.hotels!.withFacilities(facilities);
    this.onHotelsResultChanged(hotels);
    return hotels;
  }

  public registerOnHotelResultChanged(onHotelsResultChanged: Function){
    this.onHotelsResultChanged = onHotelsResultChanged;
  }
}
