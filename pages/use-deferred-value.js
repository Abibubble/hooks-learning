import React from 'react';
import Layout from '../components/layout';

export default function DeferredValue() {
	return (
		<Layout>
			<h1>useDeferredValue</h1>
			<p>
				<code>useDeferredValue()</code> does the same thing as{' '}
				<code>useTransition()</code>, making a slow interface faster.
			</p>
			<p>
				<code>useDeferredValue()</code> is useful when the value comes “from
				above” and you don&apos;t have control over the corresponding{' '}
				<code>setState</code> call.
			</p>
			<p>
				If you do not have access to the state updating code (if a third-party
				library handles it), then you should use <code>useDeferredValue()</code>{' '}
				instead of <code>useTransition()</code>.
			</p>
			<p>
				<code>useTransition()</code> wraps the state updating code, whereas{' '}
				<code>useDeferredValue()</code> wraps a value affected by the state
				change.
			</p>
			<h2>Example</h2>
			<p>
				<code>{'const deferredProducts = useDeferredValue(products);'}</code>
			</p>
			<p>
				<code>
					{'{deferredProducts.map((product) => (<li>{product}</li>))}'}
				</code>
			</p>
		</Layout>
	);
}
