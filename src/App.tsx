import React from 'react';
import './App.css';
import AppComponentProps from './AppComponentProps';
import AppState from './AppState';
import AppViewModel from './viewModels/AppViewModel';
import Hotel from './models/Hotel';
import HotelLineItem from './components/HotelLineItem';
import HotelFilter from './components/HotelFilter';
import _ from 'lodash';
import { HotelFilterType } from './models/HotelFilterType';

class App extends React.Component<AppComponentProps, AppState> {
  
  private readonly viewModel: AppViewModel;
  constructor(props: AppComponentProps) {
    super(props);
    this.viewModel = props.appViewModel;
    this.initialiseState();
  }

  private initialiseState() {
    this.state = {hotels:[]}
    this.viewModel.getAllHotels().then(hotels => this.setState({hotels}));
    this.viewModel.registerOnHotelResultChanged((hotels : Hotel[]) => this.setState({hotels}));
  }

  render() {
    const hotels = this.state.hotels;
    let selectedOptions = ['']
    return (
      <div className="App">
        <header className="App-header">
          {_.map(hotels, this.renderHotel)}
          <label>Filter Facilities</label>
          <HotelFilter filterType={HotelFilterType.Facilities} 
          options={['car park', 'pool', 'gym']} 
          onSelectedOptionsChanged={ (options) => selectedOptions  = options}/>
          <button onClick={() => this.viewModel.applyFacilitiesFilter(selectedOptions)}>Apply Filter</button>
        </header>
      </div>
    );
  }

  renderHotel(hotel: Hotel) {
    return (
      <p>
        {console.log(hotel.name)}
        <HotelLineItem hotel={hotel} />
      </p>
    );
  }
}

export default App;
