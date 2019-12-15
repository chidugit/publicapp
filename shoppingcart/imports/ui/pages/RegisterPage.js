import React, {useContext, useState} from "react";
import {Accounts} from "meteor/accounts-base";
import {UserDispatch} from "../store/userStore";
import {Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper, withStyles} from "@material-ui/core";
import {AccountCircle, Visibility, VisibilityOff} from "@material-ui/icons";
import styles from "../styles/styles";
import {USER} from "../store/enums";

const RegisterPage = ({props}) => {
    const {classes} = props;
    //states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    //context
    const userDispatch = useContext(UserDispatch);

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 4) {
            //   return this.setState({
            //     error: "Password must be at least 8 characters long"
            //   });
            return;
        }

        Accounts.createUser({email, password}, err => {
            if (err) {
                console.log(err);
            } else {
                alert("user created");
                userDispatch({type: USER.USER_REGISTER});
            }
        });
    };

    return (
        <Paper className={classes.root}>
            <form
                noValidate
                onSubmit={handleSubmit}
                className={classes.containerColumn}
            >
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
                    Register
                </Button>
            </form>
        </Paper>
    );
};

export default withStyles(styles)(RegisterPage);
