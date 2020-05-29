import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';


function Button() {

  const [value, setValue] = useState('')

  /*useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });*/

  return (
      <div className="App">
        <header className="App-header">
          <input type="text" placeholder={'Ecrire ici'} onChange={e => setValue(e.target.value)}/>

          <input id={'result'} type="text" value={value}/>

        </header>
      </div>
  );

}

export default Button;
