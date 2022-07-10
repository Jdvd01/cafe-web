import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Cafe-logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md col-md-8 col-sm-12">
			<div className="container-fluid">

				<Link className="navbar-brand" to="/" >
					<img className="logo" src={logo} />
				</Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span><i className="fas fa-bars"></i></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="" className="nav-link">Menu</Link>
						</li>
						<li className="nav-item">
							<Link to="" className="nav-link">Sobre nosotros</Link>
						</li>
						<li className="nav-item">
							<Link to="" className="nav-link">Contacto</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
