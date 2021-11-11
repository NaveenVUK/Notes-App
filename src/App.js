import React from "react";
import UserAuthoContainer from "./Components/UserAuthoContainer"
import {AppBar, CssBaseline, Toolbar, Typography} from "@material-ui/core"
import {PhotoCamera} from "@material-ui/icons"



const App = ()=>{


  return (
    <div>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera/>
             <Typography variant="h2"> New User Auth </Typography>
        </Toolbar>
      </AppBar>
      <UserAuthoContainer/>
    </div>
  )
}

export default App