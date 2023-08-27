import { Fragment } from 'react';
import {Routes,Route} from 'react-router-dom';
import Main from './Main';
import Intro from './Intro';


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Intro />} />
          <Route path="/game" element={<Main />} />
      </Routes>
    </Fragment>
  );
}

export default App;
