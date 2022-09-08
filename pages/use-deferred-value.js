import React, { useDeferredValue, useMemo } from 'react';
import Layout from '../components/layout';

export default function DeferredValue() {
	return (
		<Layout>
			<h1>useDeferredValue</h1>
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
			<p>Not sure the syntax for this...</p>
		</Layout>
	);
}
