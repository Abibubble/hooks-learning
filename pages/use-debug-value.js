import React, { useState, useDebugValue } from 'react';
import Layout from '../components/layout';

export default function DebugValue() {
	return (
		<Layout>
			<h1>useDebugValue</h1>
			<p>
				useDebugValue can be used to print out debug information in the console
				for custom hooks.
			</p>
			<p>
				<code>useDebugValue</code> can be thought of as a{' '}
				<code>console.log()</code> for React custom hooks.
			</p>
			<p>
				<code>useDebugEffect</code> cannot be rendered conditionally due to the
				Hooks rules preventing Hooks being called conditionally.
			</p>
			<p>
				Using <code>useDebugValue</code> heavily in production code might
				negatively impact the performance of your app.
			</p>
			<p>Don't leave it in your production code</p>
			<h2>Example code</h2>
			<p>
				<code>{'export default function useUser() {'}</code>
			</p>
			<p>
				<code>{'const [user, setUser] = useState(getUser());'}</code>
			</p>
			<p>
				<code>{'useDebugValue(user == null ? "No User" : user.name);'}</code>
			</p>
			<p>
				<code>{'return [user, setUser];'}</code>
			</p>
			<p>
				<code>{'}'}</code>
			</p>
		</Layout>
	);
}
