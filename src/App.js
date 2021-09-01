import React, { Component, Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Movies from "./components/movies"
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Customers from './components/customer';
import Navbar from './components/navBar'
import './App.css'
import movieFrom from './components/movieFrom';

export class App extends Component {

  render() {
    return (
      <Fragment>
        <Navbar />
        <main className="containter p-5">
          <Switch>
            <Route path="/movie/:id" component={movieFrom} />
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </Fragment>
    )
  }
}

export default App
