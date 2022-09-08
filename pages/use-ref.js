import React, { useRef } from 'react';
import Layout from '../components/layout';

export default function Ref() {
	const inputEl = useRef(null);
	const onButtonClick = () => {
		// `current` points to the mounted text input element
		inputEl.current.focus();
	};

	return (
		<Layout>
			<h1>useRef</h1>
			<p>
				useRef is like a box that can hold a mutable value in its .current
				property.
			</p>
			<p>Refs are used primarily as a way to access the DOM.</p>
			<p>
				If you pass a ref object to React with <code>{'ref={myRef}'}</code>,
				React will set its .current property to the corresponding DOM node
				whenever that node changes.
			</p>
			<p>useRef() creates a plain JavaScript object.</p>
			<p>
				The only difference between <code>useRef()</code> and creating a{' '}
				<code>{'{current: ...}'}</code> object yourself is that useRef will give
				you the same ref object on every render.
			</p>
			<p>
				useRef doesn&apos;t notify you when its content changes, and
				doesn&apos;t trigger a re-render.
			</p>
			<p>
				In this example, we&apos;re initially setting the input element variable
				(<code>inputEl</code>) to be
				<code>null</code>.
			</p>
			<p>
				<code>{'const inputEl = useRef(null);'}</code>
			</p>
			<p>
				The hook then looks through the DOM for <code>{'ref={inputEl}'}</code>,
				and updates that variable to reference that element.
			</p>
			<p>
				<code>{'<input ref={inputEl} type="text" />'}</code>
			</p>
			<p>
				Then we use the button to do something with that element (in this case,
				focus on it).
			</p>
			<p>
				<code>{'const onButtonClick = () => {inputEl.current.focus();};'}</code>
			</p>
			<p>
				<code>
					{'<button onClick={onButtonClick}>Focus on the input</button>'}
				</code>
			</p>
			<h2>Example</h2>
			<input ref={inputEl} type="text" />
			<br />
			<br />
			<button onClick={onButtonClick}>Focus on the input</button>
		</Layout>
	);
}
