import * as request from 'superagent';
import Hotel from '../models/Hotel';


export default class HotelApiClient {
  //TODO: Ideally this should come in from a config file.
  private ApiBaseUrl: string = 'http://localhost:3000';

  public getAllHotels(): PromiseLike<Hotel[]> {
      return request.get(`${this.ApiBaseUrl}/hotelList.json`)
      .then(res => <Hotel[]> JSON.parse(res.text));
  }
}