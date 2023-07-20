import { useState } from "react";

const UserLoginComponent = () =>{
    const[users] = useState([{username:'bibhu'},{username:'vishal'},{username:'john'}])
    const[usermsg,setUserMsg] = useState('')
    const[isvalid,setIsValid] = useState(false);
    const[pwdmessage,setPwdMessage] = useState('')
    const[regExp] = useState(/(?=.*[A-Z])\w{4,10}/)

    const VerifyUserName = (e) =>{
        for(let user of users){
            if(user.username===e.target.value){
                setUserMsg("User Name already Taken! Try Another")
                setIsValid(true);
                break;
            }else{
                setUserMsg("User Name Available")
                setIsValid(false);
            }
        }
    }

    const HandleUserMsg = (e) =>{
        for(let user of users){
            if(user.username===e.target.value){
                setUserMsg("User Name already Taken! Try Another")
                break;
            }else{
                setUserMsg("");
            }
        }
    }

    const VerifyPassword = (e) => {
        if(e.target.value.match(regExp)){
            setPwdMessage('Strong Password')
        }else if(e.target.value.length<4){
            setPwdMessage('Poor Password')
        }else{
            setPwdMessage('Weak Password')
        }
    }

    return(
        <>
            <div className="container-fluid">
            <h1>Rigister User</h1>
            <dl>
                <dt>User Name</dt>
                <dd><input onKeyUp={VerifyUserName} onBlur={HandleUserMsg} type="text" className="form-control w-25" /></dd>
                <dd className={(isvalid===true)?'text-danger':'text-success'}>{usermsg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyUp={VerifyPassword} className="form-control w-25" /></dd>
                <dd>{pwdmessage}</dd>
            </dl>

            </div>
        </>
    )
}
export default UserLoginComponent;