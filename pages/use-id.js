import React, { useId } from 'react';
import Layout from '../components/layout';

export default function Id() {
	const id = useId();
	const id2 = useId();

	return (
		<Layout>
			<h1>useId</h1>
			<p>
				<code>useId</code> is a hook for generating unique IDs that are stable
				across the server and client, while avoiding hydration mismatches.
			</p>
			<p>
				<code>useId</code> generates a string that includes the <code>:</code>{' '}
				token.
			</p>
			<p>
				This helps ensure that the token is unique, but is not supported in CSS
				selectors or APIs like querySelectorAll.
			</p>
			<p>
				<code>{'const id = useId();'}</code>
			</p>
			<p>
				<code>{'Unique ID: {id}'}</code>
			</p>

			<h2>Example</h2>
			<p>Unique ID: {id}</p>
			<p>Unique ID: {id2}</p>
		</Layout>
	);
}
