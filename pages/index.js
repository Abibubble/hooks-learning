import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<p>
				A Hook is a special function that lets you “hook into” React features.
			</p>
			<p>
				Use it when you need to add state to a function, rather than converting
				your function to a class.
			</p>
			<p>
				There is no <code>this</code> in function components, which means we
				can&apos;t use classes.
			</p>
			<p>
				To import a hook, use the syntax shown below, replacing{' '}
				<code>useHook</code> with the hook you want to import.
			</p>
			<p>
				<code>{'import { useHook } from "react";'}</code>
			</p>
			<a href="https://reactjs.org/docs/hooks-reference.html">
				Hooks info from React
			</a>
		</Layout>
	);
}
