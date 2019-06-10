import React from 'react';
import '../App.css'
  class Image extends React.Component {
   render() 
    {return (
      
        
          <img className="image"
           
            src={this.props.Url}
            alt={this.props.name}
          />
       
       
     
    );
  }
  
  }

  
  

  export default Image;