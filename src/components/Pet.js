import React from 'react'

const Pet = (props) => {
  return (
    <div className="card">
      <div className="content">
        <a className="header">
          {props.pet.gender === "female" ? "♀" : "♂"}
          {props.pet.name}
        </a>
        <div className="meta">
          <span className="date">{props.pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {props.pet.age}</p>
          <p>Weight: {props.pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {props.pet.isAdopted ?
          (<button className="ui disabled button">Already adopted</button>) :
          (<button className="ui primary button" onClick={() => props.onAdoptPet(props.pet.id)}>Adopt pet</button>)
        }
      </div>
    </div>
  )
}

export default Pet
