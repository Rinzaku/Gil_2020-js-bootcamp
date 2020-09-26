import React from 'react'
import authFunction from '../auth'
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {

    const history = useHistory()
    const location = useLocation()
    const {from} = location.state || {from: {pathname: "/"}}
    const login = () => {
      authFunction.authenticate(() => {
        history.replace(from)
      })
    }
    
    return (
      // <div>
      //   <h3>Login view</h3>
      //   <form>
      //     <div>
      //       <label>username</label>
      //       <input type="text" />
      //     </div>
      //     <div>
      //       <label>password</label>
      //       <input type="password" />
      //     </div>
      //     <button onClick={login}>Sigin</button>
      //   </form>
      // </div>
      <section>
        <div>
          <h3>Login view</h3>
        </div>
        <button onClick={login}>Signin</button>
      </section>
    )
}

export default Login