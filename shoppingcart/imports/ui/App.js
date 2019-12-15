import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {history, PrivateRoutes} from "./routing";
//Import material-ui components
import {CssBaseline, withStyles} from "@material-ui/core";
import styles from "./styles/styles";
//CSS import
import "./styles/App.css";
//import components
import {Footer} from './components'
//import pages
import {TestPage, HomePage, LoginPage} from './pageViews'
import UserStore from "./store/userStore";

const App = (props) => {
// const routing = useHistory(); --> we cannot do this because react-router context isn't set in that component. Your <Router> sets the context. So you could use useHistory in a sub-component, but not in that one.
//explanation at - https://stackoverflow.com/questions/58220995/cannot-read-property-history-of-undefined-usehistory-hook-of-react-router-5
    const {classes} = props;
//states
    const [user, setUser] = useState(null); //check if user is logged onClick
//Private and public pages
    const publicPages = ["/", "/signin", "/register", "/markets"];
    const privatePages = ["/profile"];
    useEffect(() => {
        //console.log("component did mount");
        //console.dir(AmplifyTheme);
        getUserData();
    }, []);
    const getUserData = () => {
        Tracker.autorun(() => {
            Meteor.userId() ? setUser(Meteor.userId()) : setUser(null);
            //check if the user is not authenticated and tries to get into a private page
            onAuthChange(user); //or you can also pass Meteor.userId()
        });
    };
    const onAuthChange = (isAuthenticated) => {
        const pathname = history.location.pathname;
        const isPublicPage = publicPages.includes(pathname);
        const isPrivatePage = privatePages.includes(pathname);
        if (isPrivatePage && !isAuthenticated) {
            history.replace("/");
        }
    };
    return (
        <Router>
            <div> test</div>
            <UserStore>
                <h1>Welcome to Meteor!</h1>
                <TestPage/>
                <div className="app-container">
                    <Switch>
                        {/*<Route component={NotFound}/>*/}
                    </Switch>
                </div>
                <Footer props={props}/>
            </UserStore>
        </Router>
    );
};
export default withStyles(styles)(App);

