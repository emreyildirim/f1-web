import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link}from "react-router-dom";
import '../styles/navbar.scss'
import Drivers from '../pages/Drivers';
import Constructor from '../pages/Constructor';
import Schedule from '../pages/Schedule';
import Results from '../pages/Results';
import Pole from '../pages/Pole';


const Navbar =() => {

    return(
        <Router>
            <div className="navbar" >
           
                <Link className="leaderboard" to="/Leaderboard"><span>Leaderboard</span></Link>
                <Link className="constructor" to="/Constructor"><span>Constructor</span></Link>
                <Link className="pole" to="/Pole"><span>Pole</span></Link>
                <Link className="schedule" to="/Schedule"><span>Schedule</span></Link>
                <Link className="results" to="/"><span>Results</span></Link>
            </div>
            <Switch>
                <Route path="/leaderboard" component={Drivers} />
                <Route path="/constructor" component={Constructor} />
                <Route path="/pole" component={Pole} />
                <Route path="/schedule" component={Schedule} />
                <Route exact path="/" component={Results} />
            </Switch>
        </Router>
    );
}

export default Navbar;