import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import classes from "./header.module.scss";


const Header = props => {
	const data = useStaticQuery(graphql`
      query {
          site{
              siteMetadata{
                  title
              }
          }
      }`);
	return (
		<header className={ classes.header }>
			<h1>{data.site.siteMetadata.title}</h1>
			<nav className={ classes.nav }>
				<ul className={ classes.navList }>
					<li className={ classes.navItem }><Link to="/" activeClassName={ classes.activeItem }>Home</Link></li>
					<li className={ classes.navItem }><Link to="/about" activeClassName={ classes.activeItem }>About</Link></li>
					<li className={ classes.navItem }><Link to="/contacts" activeClassName={ classes.activeItem }>Contacts</Link></li>
					<li className={ classes.navItem }><Link to="/blog" activeClassName={ classes.activeItem }>Blog</Link></li>
				</ul>
			</nav>
		</header>
	);
};

Header.propTypes = {};

export default Header;
