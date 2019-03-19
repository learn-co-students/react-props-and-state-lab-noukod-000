import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component{

  constructor(props){
    super(props)
  }


   render(){
    const { pets }=this.props;
    return (
      <div className="ui cards">
        {pets.map((pet,index)=><Pet key={index} onAdoptPet={this.props.onAdoptPet} pet={pet}/>)}
      </div>
      )
   }
   
}

export default PetBrowser
