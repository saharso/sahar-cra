import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';

function Main(){
    return <div><Link to="/another">go somewhere else</Link></div>
}
const Another = React.lazy(() => import('./Another.jsx'));
const Loader = ()=> <div>loading...</div>

function App() {
  return <>
  FOOT
  <Router>
    <Switch>
      <Route exact path="/" render={Main} />
      <Route path="/another" render={()=><Suspense fallback={<><Loader/></>}><Another/></Suspense>} />
    </Switch>
  </Router>
  </>
};

export default App;