import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Hellopage from './Hellopage';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/pg1" component={Hellopage} />
    </Switch>
)

export default Main;