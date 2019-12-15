import React, {useEffect, useState} from "react";
import {Meteor} from "meteor/meteor";
import {withStyles} from "@material-ui/core";
import styles from "../styles/styles";

const HomePage = props => {
    const [someState, setSomeState] = useState("some state");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        //console.log("I just mounted!");
        Meteor.call("productsFind", (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    }, []);
    return <div>Home</div>;
};
export default withStyles(styles)(HomePage);
