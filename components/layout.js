import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Layout({ ...props }) {
	return (
		<>
			<Head>
				<title>React Hooks</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<nav className={styles.nav}>
					<ul>
						<li>
							<a href="/use-state">UseState</a>
						</li>
						<li>
							<a href="/use-effect">UseEffect</a>
						</li>
						<li>
							<a href="/use-ref">UseRef</a>
						</li>
						<li>
							<a href="/use-layout-effect">UseLayoutEffect</a>
						</li>
						<li>
							<a href="/use-context">UseContext</a>
						</li>
						<li>
							<a href="/use-reducer">UseReducer</a>
						</li>
						<li>
							<a href="/use-id">UseId</a>
						</li>
						<li>
							<a href="/use-transition">UseTransition</a>
						</li>
						<li>
							<a href="/use-debug-value">UseDebugValue</a>
						</li>
						<li>
							<a href="/use-deferred-value">UseDeferredValue</a>
						</li>
						<li>
							<a href="/use-memo">UseMemo</a>
						</li>
						<li>
							<a href="/use-imperative-handle">UseImperativeHandle</a>
						</li>
						<li>
							<a href="/use-callback">UseCallback</a>
						</li>
					</ul>
				</nav>
			</header>

			<main className={styles.main}>{props.children}</main>
		</>
	);
}
