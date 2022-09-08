import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';

export default function Effect() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `${count} clicks`;
	});

	return (
		<Layout>
			<h1>useEffect</h1>
			<p>useEffect lets you perform side effects in function components.</p>
			<p>
				Sometimes, we want to run some additional code after React has updated
				the DOM.
			</p>
			<p>
				This hook tells React that your component needs to do something after
				render.
			</p>
			<p>
				This runs asyncronously, so it won&apos;t block the DOM loading, but it
				can cause some errors as a result.
			</p>
			<p>
				Network requests, manual DOM mutations, and logging are common examples
				of effects that don&apos;t require a cleanup.
			</p>
			<p>
				Previously, this is what <code>componentDidMount</code>,{' '}
				<code>componentDidUpdate</code> and the like were used for.
			</p>
			<p>
				React will remember the function you passed, and call it later after
				performing the DOM updates.
			</p>
			<p>
				It runs both after the first render and after every update, making it
				good for API calls.
			</p>
			<p>
				This example follows on from the{' '}
				<a href="use-state">useState example</a>.
			</p>
			<p>
				In addition to the count that useState gave us, we&apos;re now also
				updating the DOM.
			</p>
			<p>
				<code>{'useEffect(() => {document.title = `${count} clicks`;});'}</code>
			</p>
			<p>
				Worth bearing in mind that while the examples from above don&apos;t
				require cleanup, some examples do, in order to avoid security issues.
			</p>
			<p>
				An example that would require cleanup is a subscription to an external
				API.
			</p>
			<p>
				I need to look into this &apos;cleanup&apos; more to understand it
				fully.
			</p>

			<h2>Example</h2>
			<p>You clicked {count} times! Look at the title in your tab bar, too.</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click
			</button>
		</Layout>
	);
}
