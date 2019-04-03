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
  }

  render() {
    const hotels = this.state.hotels;
    return (
      <div className="App">
        <header className="App-header">
          {_.map(hotels, this.renderHotel)}
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
