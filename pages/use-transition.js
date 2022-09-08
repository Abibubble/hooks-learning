import React, { useTransition, useState } from 'react';
import Layout from '../components/layout';

export default function Transition() {
	const [isPending, startTransition] = useTransition();
	const [count, setCount] = useState(0);

	function handleClick() {
		startTransition(() => {
			setCount((c) => c + 1);
		});
	}

	return (
		<Layout>
			<h1>useTransition</h1>
			<p>
				Returns a stateful value for the pending state of the transition, and a
				function to start it.
			</p>
			<p>
				<code>startTransition</code> lets you mark updates in the provided
				callback as transitions.
			</p>
			<p>
				Can cause content flashes if the completion is too fast - like on this
				page!
			</p>
			<p>
				On this page, when you click the button, text appears saying
				'Loading...'
			</p>
			<p>
				However, because the page loads so quickly, this just appears as a quick
				flash below the button
			</p>
			<p>
				As a result, <code>useTransition</code> is best used:
				<ul>
					<li>
						When you know that the content rendering is guaranteed to take a
						long time
					</li>
					<li>When you can set a delay on the conetnt rendering</li>
					<li>
						When you can only display it if rendering time is longer than a
						certain amount
					</li>
				</ul>
			</p>
			<p>
				<code>{'const [isPending, startTransition] = useTransition();'}</code>
			</p>
			<h2>Example</h2>
			<div>
				<button onClick={handleClick}>Count: {count}</button>
				{isPending && <p>Loading...</p>}
			</div>
		</Layout>
	);
}
