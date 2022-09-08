import React, { useDebugValue } from 'react';
import Layout from '../components/layout';

export default function DebugValue() {
	return (
		<Layout>
			<h1>useDebugValue</h1>
			<p>
				useDebugValue can be used to display a label for custom hooks in React
				DevTools.
			</p>
		</Layout>
	);
}
