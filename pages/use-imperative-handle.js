import React, { useRef } from 'react';
import Layout from '../components/layout';
import Button from '../components/button';

export default function ImperativeHandle() {
	const buttonRef = useRef(null);

	return (
		<Layout>
			<h1>useImperativeHandle</h1>
			<p>
				Nope, this is still beyond me. Absolutely no idea what this is talking
				about.
			</p>
			<button
				onClick={() => {
					buttonRef.current.alterToggle();
				}}
			>
				Button From Parent
			</button>
			<Button ref={buttonRef} />
		</Layout>
	);
}
