import React from 'react';
import Image from './Image';
import naymar from './naymar.jpg';
import ProgressBar from './ProgressBar'
class  Lasset extends React.Component {
   
  render() 
   { const a1 ={  width: 190,
    height: 10,
    'background-color': 'rgb(214, 129, 31)'
}
const a2 ={  width: 150,
    height: 10,
    'background-color': 'rgb(214, 129, 31)'
}
const a3 ={  width: 200,
    height: 10,
    'background-color': 'rgb(214, 129, 31)'
}
const a4 ={  width: 170,
    height: 10,
    'background-color': 'rgb(214, 129, 31)'
}

       return (
    <div className="Lasset">
       <div className="nomLasset">
        <h4>Rabeh Chiheb</h4>
        <h6>software Engineering Studiant</h6>
       </div>

     <div className="image"> <Image Url={naymar}></Image> </div>
     
     <div className="Lassetdiv">
           Informations
    </div>
    <div className="nomLasset">
         <p>
             Adresse : 
             Rue beb khadhra tunis 1075 beb souika 
         </p>
         <p>
             phone :
             26037015 
         </p>
         <p>
             Email :
             chiheb.rabeh1920@gmail.com
         </p>
    </div>
    <div className="Lassetdiv">
              Compétences
    </div>

   <ProgressBar stt={a1} txt = {"css"}></ProgressBar>
   <ProgressBar stt={a2} txt = {"PHP"}></ProgressBar>
   <ProgressBar stt={a3}  txt = {"JAVA"}></ProgressBar>
   <ProgressBar stt={a4}  txt = {"C++"}></ProgressBar>
 </div>
   
  );
}
}
export default Lasset;
