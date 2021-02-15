import React, { useState, useEffect } from 'react'
import Note from './Note'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'

function App(props) {
  const [loginstatus, setloginStatus] = useState(false)
  const togglestatus = () => {
    setloginStatus(!loginstatus)
  }
  const logout = () => {
    const result = window.confirm('are you sure')
    if (result) {
      localStorage.removeItem('token')
      setloginStatus(false)
    }
  }

  return (
    <div>

      {/* <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid"> */}

      {/* <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav> */}


      {loginstatus ? <div>
        <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">

          <ul class="navbar-nav ">
            <li class="nav-item text-white">
              <Link to="/">Home</Link>{'/'}

            </li>
            <li className="nav-item">
              <Link to="/account">Account</Link>{'/'}

            </li>
            {/* <Link to="/">Home</Link>{'/'}
          <Link to="/account">Account</Link>{'/'} */}
            <li>
              <Link to="/notes">Notes</Link>{'/'}
            </li>

            <Link onClick={logout}>Log out</Link>

          </ul>

        </nav>

        {/* <Link to="/">Home</Link>{'/'}
        <Link to="/account">Account</Link>{'/'}
        <Link to="/notes">Notes</Link>{'/'}
        <button onClick={logout}>Log out</button> */}


        <Route path="/account" component={Account}></Route>

        <Route path="/notes" component={Note}></Route>
      </div>


        : <div>

          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/">Home</Link>{'/'}

              </li>
              <li className="nav-item">
                <Link to="/register">Register</Link>{'/'}
              </li>
              <li className="nav-item">

                <Link to="/login">Login</Link>{'/'}

              </li>
            </ul>

            {/* <Link to="/login">Login</Link>{'/'} */}


          </nav>

          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register}></Route>
          <Route path="/login" render={(props) => {
            return <Login togglestatus={togglestatus} {...props} />
          }}></Route>



        </div>

      }
    </div>

  )
}
export default App;

