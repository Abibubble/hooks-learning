import React, { useRef, useState } from 'react';
import Layout from '../components/layout';
import CustomInput from '../components/custom-input';

export default function ImperativeHandle() {
	const [value, setValue] = useState('red');
	const inputRef = useRef();

	return (
		<Layout>
			<h1>useImperativeHandle</h1>
			<p>
				Nope, this is still beyond me. Absolutely no idea what this is talking
				about.
			</p>
			<CustomInput
				ref={inputRef}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<br />
			<button onClick={() => inputRef.current.focus()}>Focus</button>
		</Layout>
	);
}
