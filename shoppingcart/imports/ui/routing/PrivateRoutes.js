import React from "react";
import {Redirect, Route} from "react-router-dom";

const PrivateRoutes = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) =>
                Meteor.userId() ? (children) : (
                    <Redirect to={{
                        pathname: "/signin",
                        state: {from: location}
                    }}
                    />
                )
            }
        />
    );
};
export default PrivateRoutes;
