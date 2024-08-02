import React from "react";
import ReactDOM from "react-dom/client";
// import {CardModule} from 'remoteApp/Card'
// import useStore from 'remoteApp/store'
import "./index.scss";
import { Card } from 'remoteApp/Card'
import { Cardtwo } from 'remotetwoApp/Cardtwo'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host-one</div>
    <div>Framework: react</div>
    <Card/>
    <Cardtwo/>
  </div>
);
ReactDOM.createRoot( document.getElementById("app")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
