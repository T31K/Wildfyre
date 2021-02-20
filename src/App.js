import logo from './logo.svg';
import './App.css';

import OpenApp from "react-open-app"
function App() {
  return (
    <div className="App">
      <OpenApp
      href="https://mycoolappwebsite.com"
      android="whatever deep link you need on Android"
      ios="instagram://user?username=teikmunwong">
        Test
      </OpenApp>
    <h1>test</h1>
    </div>
  );
}

export default App;
