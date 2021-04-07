import './App.css';
import { Carousel } from './Components/Carousel';
import { CarouselData } from './Components/CarouselData';
import { Text } from './Components/text';
import { Button } from './Components/Button';
import { Hamburger } from './Components/Hamburger'
import { WhiteButton } from './Components/WhiteButton';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import speaker1 from './Assets/medium17@2x.png';
import speaker2 from './Assets/medium27@2x.png';
import click from './Assets/Click.png';



function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/pricing">
          <Pricing />
        </Route>

      </Switch>
    </Router>
  )

}

export default App;

function Home() {
  return(
    <div>
    <div className="full-container">
      <Hamburger/>
      <Text/>
      <Button/>
      <Carousel slides={CarouselData}/>
    </div>    
    <div className="full-container" style={{ backgroundColor: "#D34848" }}>
      <Hamburger/>
      <p className="red-main-text">SUPERIOR SOUND</p>
      <p className="red-secondary-text">Experience live versions of your <br></br> facourite songs.</p>
      <img src={speaker1} className="red-image-1" style={{cursor:{click}}}></img>
      <img src={speaker2} className="red-image-2"></img>
    </div>
    </div>
  )
}

function Pricing() {
  return(
    <div>
      <p>This is the pricing page</p>
      <p>(By the way, although I havn't quite finished the project by the due date I definitely plan to keep working on it.) </p>
      <p>(Maybe I can show you a clean finished product by the interview phase ;) )</p>
      <Link to="/">Back</Link>
    </div>
  )
}