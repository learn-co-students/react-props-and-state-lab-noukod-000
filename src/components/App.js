import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

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

  changeFilters = event => {
      this.setState({
        ...this.state.filters, type :event.value
      })
  }


  onFindPetsClick = () => {
    let url

    if (this.state.filters.type !== "all"){
      url = `/api/pets?type=${this.state.filters.type}`
    } else {
      url = '/api/pets'
    }
    fetch(url)
    .then(resp => resp.json())
    .then(pets => {
      this.setState({pets})
    })
  }
  
  onAdoptPet = (id) => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true} : p
    })
    this.setState({pets})
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
                <Filters onChangeType={this.changeFilters} onFindPetsClick={this.onFindPetsClick}/>
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
