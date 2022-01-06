import React, {useContext} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Signup from './components/Signup';
import {UserContext} from './context/UserContext';

function App() {
  
  const {userState} = useContext(UserContext);

  return (
    <Router>
        <div className="App">
          {userState.logged === true ?
            <div>Logged</div> :
            <Signup/> 
          }
        </div>
    </Router>
  );
}

export default App;
