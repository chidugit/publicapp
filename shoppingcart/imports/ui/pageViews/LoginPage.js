import React, {useEffect, useState} from "react";
import {Meteor} from "meteor/meteor";
import {withStyles} from "@material-ui/core";
import styles from "../styles/styles";

const LoginPage = props => {
    const {classes} = props;
    //states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = () => {
        Meteor.loginWithPassword(email, password, err => {
            if (err) {
                console.log(err);
            } else {
                alert("user loggedin");
                //userDispatch({type: USER.USER_LOGIN});
            }
        });
    };
    return(<div>Login page</div>)
};

export default withStyles(styles)(LoginPage);