import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary  static-top  gradient-custom-2 ">
  <div class="container">
    <a class="navbar-brand" href="#">
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" style={{width:60, height :60, marginRight:10
              }} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="/login">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard">Chat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signin">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}
