import React from 'react'

import Pet from './Pet'

const PetBrowser = (props) => {
  const petCards = props.pets.map((pet, index) => <Pet pet={pet} onAdoptPet={props.onAdoptPet} key={pet.id} />)
  return(
    <div className="ui cards">{petCards}</div>
  )
}

export default PetBrowser
