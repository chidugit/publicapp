import React, {useContext, useState} from "react";
import {Meteor} from "meteor/meteor";
//import {UserDispatch} from "../store/userStore";
import {Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper, withStyles} from "@material-ui/core";
import {AccountCircle, Visibility, VisibilityOff} from "@material-ui/icons";
import styles from "../styles/styles";
import {USER} from "../store/enums";

const LoginPage1 = props => {
    const {classes} = props;
    //states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    //context
    //const userDispatch = useContext(UserDispatch);
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
    return (
        <Paper className={classes.root}>
            <form onSubmit={handleSubmit} className={classes.containerColumn}>
                <FormControl className={classes.textField}>
                    <InputLabel htmlFor="adornment-email">Email</InputLabel>
                    <Input
                        id="adornment-email"
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="Email" disabled>
                                    <AccountCircle/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={classes.textField}>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleSubmit}
                    className={classes.textField}
                >
                    Login
                </Button>
            </form>
        </Paper>
    );
};
export default withStyles(styles)(LoginPage1);
