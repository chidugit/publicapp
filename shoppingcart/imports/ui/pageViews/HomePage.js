import React, {useEffect, useState} from "react";
import {Meteor} from "meteor/meteor";
import {withStyles} from "@material-ui/core";
import styles from "../styles/styles";

const HomePage = props => {
    const [someState, setSomeState] = useState("some state");
    const [products, setProducts] = useState([]);

    return <div>Home</div>;
};
export default withStyles(styles)(HomePage);
