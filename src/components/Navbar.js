import React from 'react';
import { Link } from 'react-router-dom';
import '../static/navbar.css';

class Navbar extends React.Component {
	renderNavbar() {
		const dot = window.location.href.indexOf('/food/1') === -1 ? './' : '../';

		return (
			<div id="navbar">
				<nav className="navbar navbar-collapse navbar-expand-sm navbar-light">
					<div className="navbar-brand">
						<Link to="/food/1">
							<img src={`${dot}assets/vl-logo.png`} className="navbar-logo" alt="Virtual Labs" />
						</Link>
					</div>

					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto links">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									HOME
								</Link>
								&nbsp; &nbsp;
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									ABOUT
								</Link>
								&nbsp; &nbsp;
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									CONTACT
								</Link>
								&nbsp; &nbsp;
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}

	render() {
		return this.renderNavbar();
	}
}

export default Navbar;
