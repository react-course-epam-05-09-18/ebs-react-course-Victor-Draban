import React from 'react';
import styles from "./Footer.css";

export default () => (
	<footer className = { styles.footer }>
		<span className = { styles.copyright } >
				copyright {new Date().getFullYear()}
		</span>
	</footer>
);