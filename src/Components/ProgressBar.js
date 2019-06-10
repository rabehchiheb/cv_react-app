import React from 'react';

class  ProgressBar extends React.Component {
  render() 
   {return (
     <div>
        {this.props.txt}
        <div id="myProgress">
    <div  style={this.props.stt}></div>
  </div>
     </div>
    
  );
}
}
export default ProgressBar;
