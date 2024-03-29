import React from 'react'
import {Link} from 'react-router-dom';
import '../index.css'
export default function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-info bg-gradient">
    <div className="container-fluid">
      <Link className="navbar-brand " to="/"><h2 class="display-20 masthead-brand">Tharak Hegde</h2></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto" >
          <Link className="nav-link active masthead-brand" style={{margin: 10 + 'px'}} aria-current="page" to="/">Home</Link>
          <Link className="nav-link active masthead-brand" style={{margin: 10 + 'px'}} to="/projects">Projects</Link>
          <Link className="nav-link active masthead-brand" style={{margin: 10 + 'px'}} to="/contact">Contact</Link>

        </div>
      </div>
    </div>
  </nav></div>
  )
}
