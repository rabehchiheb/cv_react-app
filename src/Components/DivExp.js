import React from 'react';
import Image from './Image';
import naymar from './naymar.jpg';
import ProgressBar from './ProgressBar'
class  DivExp extends React.Component {
   
  render() 
   {return (
    <div className="DivExp">
        <div className="nosset">
        <h4>{this.props.annee}</h4>
        </div>
     
       <div className="nosset">
        <p>{this.props.poste}
            </p> 
       <p> {this.props.dsc}</p>
       </div>

     
 </div>
   
  );
}
}
export default DivExp;
