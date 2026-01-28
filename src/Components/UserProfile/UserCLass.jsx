import React, {Component} from "react";

// Class based component
export default class UserProfile extends Component {
  
    constructor(props){
        super(props)
        
        console.log(props);
        

    }
   
    
    render(){

        const {name} = this.props
        return(
            <>
            <h1>{name}</h1>
            </>
        )
    }
    

}
