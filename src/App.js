import React from 'react';
import './App.css';
import  Lasset from './Components/Lasset';
import  DivExp from './Components/DivExp';
function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body className="App-body">
<Lasset>

</Lasset>
<div>
        <p>
        Développeur logiciels ayant une solide formation technique 
        et une expérience dans le développement et la maintenance de système financière,
         maîtrise les langages de programmation les plus courants comme Java JEE, C++, C## ….
        </p>
        <div className="exprience">
          <h6>Exprience</h6>
        </div>
       <DivExp annee={"Du 01/03/2018 – Aujourd’hui:"} poste={"Manager Partner Software --- Développeur informatique"}
        dsc={"Contribution aux développements et la mise en place de système «Global Banking (UniPost) » au sein de la Poste Tunisienne. "}></DivExp>
<DivExp annee={"Du 01/02/2016 - 30/05/2016"} poste={"Stage fin d’études dans la société SAPHIR CONSULT."}
        dsc={"Création, conception et développement d’une application web « Gestion des"+
        "projets »avec asp.net MVC 5."}></DivExp>
 
        <div className="exprience">
          <h6>FORMATIONS ET DIPLOMES</h6>
        </div>
        <DivExp annee={"15/7/2018"} poste={"Certificat CIFODECOM Java | EOS Education"}></DivExp>
        <DivExp annee={"2015/2016"} poste={"Diplôme en informatique de gestion ISG-Tunis"}></DivExp>
        <DivExp annee={"15/7/2018"} poste={"Baccalauréat économie-gestion"}></DivExp>
        <div className="exprience">
          <h6>Compétences Informatiques</h6>
        </div>
        <DivExp annee={"web"} poste={"JSP, JSF, Web Service, ASP.net/ASP.net MVC, HTML, XHTML, PHP,JavaScript, JSON, XML, Bootsrap, CSS"}></DivExp>
       
        
</div>




      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
