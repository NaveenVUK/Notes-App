import React from "react";
import Heading from "./Components/ReusableComponets/Heading"
// import Heading from "./Components/React-Components/ReusableComponets/Heading";
// import UserAuthoContainer from "./Components/React-Components/UserAuthoContainer";
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
             <Typography variant="h2"> User Auth </Typography>
        </Toolbar>
      </AppBar>
      <UserAuthoContainer/>
    </div>
  )
}

export default App