import React, {FC, useState} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header"
import {AppStateInterface, asyncActions} from "./store";


const App: FC<any> = (props: AppStateInterface) => {

    return (
        <div className="App">
            <Header>
                Header content
            </Header>
            <main>
                <div>
                    <button onClick={asyncActions.getAuthUserData}>get</button>
                </div>
                {props.auth.isAuth? <button onClick={asyncActions.logout}>logout</button> : <LoginForm/>}

                <div>
                    <h4>User data:</h4>
                    {props.auth.isAuth
                        ?  <><h3>login: {props.auth.login}</h3>
                        <h3>email: {props.auth.email}</h3>  </>
                        : <h3>User is not autorized</h3>}
                </div>


            </main>
            <footer>footer</footer>
        </div>
    );
}

export default App;

const LoginForm :FC<any> = (props: any) => {
    let [login, setLogin] = useState('' as string);
    let [password, setPassword] = useState('' as string);

    return (
        <form onSubmit={(e)=>{
                    e.preventDefault()
                    asyncActions.login(login, password)
                }}>
            <h3>Please sign in</h3>
            <div>
                <h5>login:</h5>
                <input type="text"
                       name={login}
                       onChange={(e) => {
                           setLogin(e.target.value)
                       }}
                       value={login}/>
            </div>
            <div>
                <h5>password:</h5>
                <input type="text"
                       name={password}
                       onChange={(e) => {
                           setPassword(e.target.value)
                       }}
                       value={password}/>
            </div>
            <button type={"submit"} >submit</button>
       </form>

    );
}