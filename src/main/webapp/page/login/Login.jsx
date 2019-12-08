import React from 'react';

const Login = ({user, setUsername, setPassword, login}) => <form>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
               onChange={value => setUsername(value)}/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your credentials with anyone
            else.</small>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"
               onChange={value => setPassword(value)}/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={() => login(user)}>Submit</button>
</form>;

export default Login;
