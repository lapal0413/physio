import AppRouter from "./Router";
import {useState} from "react";
import {authService} from "../myFirebase";
function App() {
  const [isLoggedIn,setisLoggedIn] = useState(authService.currentUser);
  return (
    <AppRouter isLoggedIn={isLoggedIn}/>
  );
}

export default App;
