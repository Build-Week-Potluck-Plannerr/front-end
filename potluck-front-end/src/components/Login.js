import React, { useState } from 'react'

const initValues = {
  username: '',
  password: ''
}

function Login() {
  const [loginValues, setLoginValues] = useState(initValues);

  const handleLoginChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value })
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          value={loginValues.username}
          name='username'
          onChange={handleLoginChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          id='password'
          value={loginValues.password}
          name='password'
          onChange={handleLoginChange}
        />
        <div><button>Login</button></div>
      </form>
    </div>
  )
}

export default Login
