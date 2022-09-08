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
				startTransition lets you mark updates in the provided callback as
				transitions.
			</p>
			<p>
				Can cause content flashes, if the completion is too fast - like on this
				page!
			</p>
			<div>
				{isPending && <p>Loading...</p>}
				<button onClick={handleClick}>Count: {count}</button>
			</div>
		</Layout>
	);
}
