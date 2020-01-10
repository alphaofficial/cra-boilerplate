import React from 'react';
import { Route } from "react-router-dom";
import HomePage from './pages/Homepage'
import AboutPage from './pages/About';


//pages
const home = () => (
  <HomePage />
);
const about = () => (
  <AboutPage />
);


//main routes
function App() {
  
  return (
    <React.Fragment>
      <Route exact path="/" component={home} />
      <Route exact path="/about" component={about} />
    </React.Fragment>
  );
}

export default App;
