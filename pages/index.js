import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<p>
				A Hook is a special function that lets you “hook into” React features.
				Use it when you need to add state to a function, rather than converting
				your function to a class. There is no &apos;this&apos; in function
				components, which means we can&apos;t use classes.
			</p>
			<a href="https://reactjs.org/docs/hooks-reference.html">
				Hooks info from React
			</a>
		</Layout>
	);
}
