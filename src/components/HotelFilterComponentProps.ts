import { HotelFilterType } from "../models/HotelFilterType";

export default interface HotelFilterComponentProps {
  options: string[];
  filterType: HotelFilterType;
  onSelectedOptionsChanged: (options: string[]) => void
}
