import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom"

import Login from "./Login";
import Account from "./Account";
import Home from "./Home"
import Register from "./RegisterComponents/Register";
import NotesContainor from "./NotesComponents/NotesContainor";
import ProtectedRoute from "../ProtectedRoute";

import { AppBar, CssBaseline, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";

const useStyle = makeStyles({           // CSS code
    root: {
        flexGrow: 1,
        marginTop: "5px",
        marginBottom: "5px",
    },
    linkStyle: {
        color: "#fafafa",
        textDecoration: "none"
    }
})

const UserAuthoContainer = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const classes = useStyle()

    const userLoggedStatus = () => {
        const toggle = !loggedIn
        setLoggedIn(toggle)
    }

    useEffect(() => {
        localStorage.getItem("token") && userLoggedStatus()
    }, [])

    const logoutMsg = () => {
        swal("Great", "you Have Successfully logged out!!", "success");
    }

    return (
        <div>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h2" component="div" className={classes.root}> User Auth </Typography>
                    <Button color="inherit">
                        <Link to="/" className={classes.linkStyle}> Home </Link>
                    </Button>
                    {loggedIn ? (
                        <>
                            <Button color="inherit">
                                <Link to="/account" className={classes.linkStyle}> Account </Link>
                            </Button>
                            <Button>
                                <Link to="/notes" className={classes.linkStyle}> My notes </Link>
                            </Button>
                            <Button>
                                <Link to="/" onClick={() => {
                                    localStorage.clear()
                                    userLoggedStatus()
                                    logoutMsg()
                                }} className={classes.linkStyle}> Logout </Link>
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button>
                                <Link to="/register" className={classes.linkStyle}> Register </Link>
                            </Button>
                            <Button>
                                <Link to="/login" className={classes.linkStyle}> Login </Link>
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Route path="/register" component={Register} exact />
            <Route path="/" component={Home} exact />
            <Route path="/login" render={(props) => {
                return <Login {...props} userLoggedStatus={userLoggedStatus} />
            }} exact />
            <ProtectedRoute path="/account" component={Account} auth={loggedIn} />
            <ProtectedRoute path="/notes" component={NotesContainor} auth={loggedIn} />
        </div>
    )
}

export default UserAuthoContainer