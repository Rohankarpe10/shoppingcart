//to render navigation bar

import React, { Component } from 'react';
import { Link } from "react-router-dom"; 

class Navbar extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            product : JSON.parse(localStorage.getItem('product')),
            isLoggedIn : JSON.parse(localStorage.getItem('isLoggedIn'))
            }; 
    }

    render() 
    {
        return (
            
                <nav className="navbar fixed-top navbar-dark bg-primary">
                <h5><span className="navbar-text text-white big text-uppercase mr-4"></span> Online Shopping </h5>
                <Link to="/register"><span className="navbar-text text-white big text-uppercase mr-4 right">Sign Up </span></Link>
                <Link to="/login"><span className="navbar-text text-white big text-uppercase mr-4 right">Login </span></Link>
                <Link to="/"><span className="navbar-text text-white big text-uppercase mr-4 right">Home</span></Link>
                <Link to="/cart"><span className="navbar-text text-white big text-uppercase mr-4 right">🛒Cart </span></Link>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit} >
                    <span className="navbar-text text-white small text-uppercase mr-3"></span>
                    <input 
                        name="productname" 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={this.handleChange} />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}
export default Navbar;