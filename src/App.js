// src/App.js
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';


class App extends Component {
  state = {
    events: [],
    locations: [],
    seletedLocation: 'all',
    numberOfEvents: 32
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, this.state.numberOfEvents), locations: extractLocations(events) }); //CHECK
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents(number) {
    this.setState({
      numberOfEvents: number,
    })
  }



  updateEvents = (location, inputNumber) => {
    const { eventCount, seletedLocation } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
        const eventsToShow = locationEvents.slice(0, eventCount);
        this.setState({
          events: eventsToShow,
          seletedLocation: location,
          numberOfEvents: this.state.numberOfEvents //remove?
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents = (seletedLocation === 'all') ?
          events :
          events.filter((event) => event.location === seletedLocation);
        const eventsToShow = locationEvents.slice(0, inputNumber);
        this.setState({
          events: eventsToShow,
          numberOfEvents: inputNumber //change to evenCount?
        });
      })
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Hang out</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
      </div>
    );
  }
}

export default App;