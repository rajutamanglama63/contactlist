import './App.css';
import Navbar from './components/Navbar';
import DataPage from './pages/DataPage';

import {Switch, Route} from 'react-router-dom';
import ContactCreater from './pages/ContactCreater';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={DataPage} />
        <Route exact path='/create' component={ContactCreater} />
      </Switch>
    </div>
  );
}

export default App;
