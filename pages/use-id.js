import React, { useId } from 'react';
import Layout from '../components/layout';

export default function Id() {
	const id = useId();

	return (
		<Layout>
			<h1>useId</h1>
			<p>
				useId is a hook for generating unique IDs that are stable across the
				server and client, while avoiding hydration mismatches.
			</p>
			<p>
				useId generates a string that includes the : token. This helps ensure
				that the token is unique, but is not supported in CSS selectors or APIs
				like querySelectorAll.
			</p>
			<p>Unique ID: {id}</p>
		</Layout>
	);
}
