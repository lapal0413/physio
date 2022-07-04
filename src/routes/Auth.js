import React from "react"
import {useState} from "react"


const Auth = () =>{ 
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const onChange = (event)=>{
        const {target:{name,value}} =event;
        if(name==="email"){
            setEmail(value);
        }else if(name==="password"){
            setPassword(value);
        }
       
    };
    const onSubmit = (event) =>{
        event.preventDefault();
    };
return (<div>
     <form onSubmit={onSubmit}>
         <input onChange = {onChange} name ="email" type ="text" placeholder="email" required value={email}/>
         <input onChange = {onChange} name ="password" type ="password" placeholder="password" required value={password}/>
         <input type ="submit" value="log in"/>
     </form>
     <div>
        <button>continue with google</button>
        <button>continue with github</button>
     </div>

</div>);
};
    
 export default Auth;