import React from 'react'
import Home from './components/Home';

// import Main from "./components/Main";
import NavBar from "./components/NavBar";
import PageNotFound from './components/PageNotFound';
// import Routing from './Routing';
// npm i react-router-dom
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
    return (
        <>
            {/* <div>``````````````````````````````````````````````````````</div>
        <div>App</div> */}
            <NavBar></NavBar>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>

                <Redirect from="/"  exact to="/home" >
                </Redirect>

                <Route>
                    <PageNotFound></PageNotFound>
                </Route>
            </Switch>
            {/* <div>``````````````````````````````````````````````````````</div> */}
        </>
        // <Routing></Routing>
    )
}

export default App;