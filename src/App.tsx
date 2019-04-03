import React, { Component } from 'react';
import './App.css';
import AppComponentProps from './AppComponentProps';
import AppState from './AppState';
import AppViewModel from './viewModels/AppViewModel';
import Hotel from './models/Hotel';
import HotelLineItem from './components/HotelLineItem';
import _ from 'lodash';

class App extends React.Component<AppComponentProps, AppState> {
  
  private readonly viewModel: AppViewModel;
  constructor(props: AppComponentProps) {
    super(props);
    this.viewModel = props.appViewModel;
    this.initialiseState();
  }

  private initialiseState() {
    this.state = {hotels:[], facilitiesFilter:[]}
    this.viewModel.getAllHotels().then(hotels => this.setState({hotels}));
    this.viewModel.registerOnHotelResultChanged((hotels : Hotel[]) => this.setState({hotels}));
  }

  private onFacilitiesFilterChange(filterText: string){
    let facilitiesFilter = _.split(filterText, ',');
    this.setState({facilitiesFilter})
  }

  render() {
    const hotels = this.state.hotels;
    const filter = this.state.facilitiesFilter;
    return (
      <div className="App">
        <header className="App-header">
          {_.map(hotels, this.renderHotel)}
          <label>Filter Facilities</label>
          <input type="text" value={filter} onChange={txt => this.onFacilitiesFilterChange(txt.target.value)}></input>
          <button onClick={() => this.viewModel.applyFacilitiesFilter(filter)}>Apply Filter</button>
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
