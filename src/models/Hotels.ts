import Hotel from './Hotel';

export default class Hotels {
    readonly hotels: Hotel[];

    public constructor(hotels: Hotel[]) {
      this.hotels = hotels;
    }

    public all(): Hotel[]{
        return this.hotels;
    }
}