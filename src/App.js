import React, { Component } from 'react'
import './App.css'
import Movies from "./components/movies"

export class App extends Component {

  render() {
    return (
      <div>
        <main className="containter">
          <Movies />
        </main>
      </div>
    )
  }
}

export default App
