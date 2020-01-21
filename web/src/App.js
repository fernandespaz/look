import React, {useState} from 'react';

import './global.css';
import './App.css';

function App() {
return (
  <div id="app">
    <aside>
   <strong>Cadastrar</strong>
   <form>

     <div className="input-block" >
     <label htmlFor="github_username " >Usuário do Github</label>
     <input name = "github_username" id="github_username" required ></input>
     </div>

     <div className="input-block" >
     <label htmlFor="techs " >Tecnologias</label>
     <input name = "techs" id="techs" required ></input>
     </div>

     <div className="input-group">

     <label htmlFor="latitude" >Latitude</label>
     <input name = "latitude" id="latitude" required ></input>
     </div>

     <div className="input-group">
     <label htmlFor="longitude" >Longitude</label>
     <input name = "longitude" id="longitude" required ></input>
     </div> 
      
      <button type = "submit">Salva</button>

   </form>
    </aside>
    <main>

    </main>
  </div>
 );
}

export default App;
