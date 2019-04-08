import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pet from './Pet'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  //update type of pet
  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = (petID) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petID ? {...pet, isAdopted: true} : pet;
    })
    this.setState({
      pets: pets
    })
  }

//fetches correct array of pets depending on type chosen
//data in lines 48-49 is the list of pets
  onFindPetsClick = () => {
    let indexUrl = '/api/pets'

    if (this.state.filters.type !== 'all') {
      indexUrl += `?type=${this.state.filters.type}`
    }

    fetch(indexUrl)
      .then(response => response.json())
      .then(data => this.setState({
        pets: data,
        ...this.state.filters
    }))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
