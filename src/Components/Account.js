import { Container, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../Actions/UserActions";
import Paragraf from "./ReusableComponets/Paragraf";

const Account = ()=>{
    const dispatch = useDispatch()
    const usersInfo = useSelector((state)=>{
        return state.users.data
    })

    useEffect(()=>{
         dispatch(getUserInfo())
    },[])
    
    return (
        <>
        <main>
            <div>
                <Container maxWidth="sm" className="heading">
                    <Typography variant="h4" align="center" gutterBottom>
                        Name - {usersInfo.username}
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom>
                        Email - {usersInfo.email}
                    </Typography>
                    {/* <Paragraf name="ID" title= {usersInfo._id}/>
                    <Paragraf name="Username" title= {usersInfo.username}/>
                    <Paragraf name="Email" title= {usersInfo.email}/> */}
                </Container>
            </div>
        </main>
            
        </>  
    )
}

export default Account