import React from 'react';
import styles from "./Footer.css";

var footerContent = <span className = { styles.copyright } >
		    	copyright {new Date().getFullYear()}
		    </span>

export default () => (
	<footer className = { styles.footer }>
		{ footerContent }
	</footer>
);