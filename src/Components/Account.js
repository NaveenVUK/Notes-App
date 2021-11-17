import { TextField, Button, Grid, Paper, Avatar, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../Actions/UserActions";
import swal from "sweetalert";
import { AccountCircleRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    paperStyle: {
        padding: 20,
        height: "50vh",
        width: 680,
        margin: "20px auto",
        backgroundColor: "#ecd8d8"
    },
    avatarStyle: {
        backgroundColor: "green"
    },
    btnstyle: {
        margin: "18px 0px 8px 0px "
    },
    headingStyle: {
        marginBottom: 40,
    }
})

const Account = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const usersInfo = useSelector((state) => {
        return state.users.data
    })

    useEffect(() => {
        dispatch(getUserInfo())
    }, [])

    return (
        <div>
            <Grid>
                <Paper elevation={10} className={classes.paperStyle}>
                    <Grid align="center">
                        <Avatar className={classes.avatarStyle}><AccountCircleRounded /></Avatar>
                        <h2 className={classes.headingStyle}> Account Details </h2>
                    </Grid>
                    <Typography variant="h6" align="left" gutterBottom>
                        User_Id - {usersInfo._id}
                    </Typography>
                    <Typography variant="h6" align="left" gutterBottom>
                        Name - {usersInfo.username}
                    </Typography>
                    <Typography variant="h6" align="left" gutterBottom>
                        Email - {usersInfo.email}
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}

export default Account