import './App.css';
import {Route } from 'react-router-dom'
import IssueCheckComp from './component/IssueCheckComp';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component ={IssueCheckComp}></Route>
      <Route exact path="/detail" component ={IssueCheckComp}></Route>
    </div>
  );
}

export default App;
