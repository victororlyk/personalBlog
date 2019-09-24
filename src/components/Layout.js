import React from "react";


import Header from "./Header";
import Footer from "./Footer";
import classes from "./layout.module.scss";

const Layout = ({ children }) => (
	<div className={ classes.container }>
		<div className={ classes.content }>
			<Header />
			{children}
		</div>
		<Footer />
	</div>
);

Layout.propTypes = {};

export default Layout;
