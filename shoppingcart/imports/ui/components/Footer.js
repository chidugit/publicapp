import React from "react";
import {Grid, Typography} from "@material-ui/core";
import classNames from "classnames"; //for conditionally including classNames, checkout link -https://www.npmjs.com/package/classnames
//Footer content
const footers = [{
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"]
},
    {
        title: "Features",
        description: [
            "Cool stuff",
            "Random feature",
            "Team feature",
            "Developer stuff",
            "Another one"
        ]
    },
    {
        title: "Resources",
        description: [
            "Resource",
            "Resource name",
            "Another resource",
            "Final resource"
        ]
    },
    {
        title: "Legal",
        description: ["Privacy policy", "Terms of use"]
    }
];
const Footer = ({props}) => {
    const {classes} = props;
    return (
        <> {
            /* Footer */}
            <footer className={classNames(classes.footer, classes.layout)}>
                <Grid container spacing={10} justify="space-evenly">
                    {footers.map(footer => (<Grid item xs key={footer.title}>
                            <Typography variant="h6"
                                        color="textPrimary"
                                        gutterBottom> {footer.title}
                            </Typography>
                            {footer.description.map(item => (
                                < Typography key={item}
                                             variant="subtitle1"
                                             color="textSecondary">
                                    {item}
                                </Typography>))
                            }
                        </Grid>
                    ))
                    }
                </Grid>
            </footer>
            {/* End footer */}
        </>
    );
};
export default Footer;