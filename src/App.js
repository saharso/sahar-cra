import React, {Suspense, useRef, useEffect} from "react";
import { BrowserRouter, Router, Route, Switch, HashRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

function Main(){
    return <div><Link to="/another">go somewhere else</Link></div>
}
const Another = React.lazy(() => import('./Another.jsx'));
const Loader = ()=> <div>loading...</div>
function App() {
  return <>
    <BrowserRouter basename="/sahar-cra/">
      <Switch>
      <Route exact path="/" render={Main} />
      <Route path="/another" render={()=><Suspense fallback={<><Loader/></>}><Another/></Suspense>} />
      </Switch>
    </BrowserRouter>
  </>
};

export default App;