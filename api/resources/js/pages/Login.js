import axios from 'axios'
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let dispatch = useDispatch();

    const onEmailChanged = e => setEmail(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault();
        $("#login-form button")
          .attr("disabled", "disabled")
          .html(
            '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
          );

        dispatch(login(email , password));
        /*var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        axios
          .post("/api/login/", formData)
          .then(response => {
            console.log(response);
            return response;
          })
          .then(json => {
            if (json.data.success) {
              console.log("Login Successful!");

              let userData = {
                name: json.data.data.name,
                id: json.data.data.id,
                email: json.data.data.email,
                auth_token: json.data.data.auth_token,
                timestamp: new Date().toString()
              };

              dispatch(login(userData));

              localStorage["appState"] = JSON.stringify(appState);

            } else alert("Login Failed!");

            $("#login-form button")
              .removeAttr("disabled")
              .html("Login");
          })
          .catch(error => {
            alert(`An Error Occured! ${error}`);
            $("#login-form button")
              .removeAttr("disabled")
              .html("Login");
          });*/

  };

   return (
       <div className="container">
           <div className="row justify-content-center">
               <div className="col-md-8">
                   <div className="card">
                       <div className="card-header">Login</div>
                       <div className="card-body">
                           <form method="POST" onSubmit={ onSubmit.bind(this) } id="login-form" action="/login">
                               <div className="form-group row">
                                   <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                   <div className="col-md-6">
                                       <input id="email" type="email" onChange={onEmailChanged} className="form-control" value={email} name="email" required autoComplete="email" autoFocus />
                                           <span className="invalid-feedback" role="alert">
                                               <strong>Error Message</strong>
                                           </span>
                                   </div>
                               </div>
                               <div className="form-group row">
                                   <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                   <div className="col-md-6">
                                       <input onChange={onPasswordChanged} id="password" value={password} type="password" className="form-control " name="password" required autoComplete="current-password" />
                                           <span className="invalid-feedback" role="alert">
                                               <strong>$message </strong>
                                           </span>
                                   </div>
                               </div>
                               <div className="form-group row">
                                   <div className="col-md-6 offset-md-4">
                                       <div className="form-check">
                                           <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                                           <label className="form-check-label" htmlFor="remember">
                                               Remember Me
                                           </label>
                                       </div>
                                   </div>
                               </div>
                               <div className="form-group row mb-0">
                                   <div className="col-md-8 offset-md-4">
                                       <button type="submit" className="btn btn-primary">
                                           Login
                                       </button>
                                           <a className="btn btn-link" href="">
                                               Forgot Your Password
                                           </a>
                                   </div>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   )

}

export default Login
