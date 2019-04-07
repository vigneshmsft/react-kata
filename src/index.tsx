import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HotelApiClient from './services/HotelApiClient';
import AppViewModel from './viewModels/AppViewModel';
import { initializeIcons } from '@uifabric/icons';

// Register icons and pull the fonts from the default SharePoint CDN:
initializeIcons();

const hotelsApiClient = new HotelApiClient();
const appViewModel = new AppViewModel(hotelsApiClient);
ReactDOM.render(<App appViewModel={appViewModel} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
