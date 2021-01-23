//import logo from './logo.svg';
import './App.css';
import ContactForm from './ContactForm';
import React from 'react';
 import Tabs from "./components/Tabs"; 
import "./App.css";
import radiobuttons from "./myradio_button"

function App() {
  return (
    <div className="App">                 
       
        <h1>Welcome to PRA BRMS Self Service Portal</h1>
     <Tabs> 
       <div label="Rules Repository"> 
         See ya all rules under PRA domain, <em>Rules Repository</em>! 
       </div> 
       <div label="Rules InfraStucture"> 
         Estimate cost of rules, <em>Rules InfraStucture</em>! 
         <radiobuttons />
       </div> 
       <div label="Rules Reporting"> 
         Nothing to see here, this tab is <em>Analtycis of Rule</em>!
         
         Send Analtycis to user email id <em>User Details</em> 
         
         <ContactForm />  
       </div> 
     </Tabs> 
                
    </div>
    

  );
 
}

export default App;

