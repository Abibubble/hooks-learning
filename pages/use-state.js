import Layout from '../components/layout';
import React, { useState } from 'react';

export default function State() {
	// The only value we pass in is the initial state
	const [count, setCount] = useState(0);

	return (
		<Layout>
			<h1>useState</h1>
			<p>It declares a “state variable”.</p>
			<p>
				useState is a new way to use the same capabilities that this.state
				provides in a class.
			</p>
			<p>
				Normally, variables disappear when the function exits but state
				variables are preserved by React.
			</p>
			<p>This is how you initiate useState:</p>
			<p>
				<code>const [count, setCount] = useState(0);</code>
			</p>
			<p>The destructured array as shown above provides two things:</p>
			<ul>
				<li>
					<code>count</code> refers to the variable that is being updated.
				</li>
				<li>
					<code>setCount</code> is the function that we call to update the
					variable.
				</li>
			</ul>
			<p>We pass in the initial state in the component.</p>
			<p>
				Best practice is to have the variable named as &apos;something&apos;,
				then the function to be called &apos;setSomething&apos;.
			</p>
			<p>This can then be called within your component or page.</p>
			<p>Here&apos;s an example of this:</p>
			<p>
				<code>
					{'<button onClick={() => setCount(count + 1)}>Click me</button>'}
				</code>
			</p>

			<h2>Example</h2>
			<button onClick={() => setCount(count + 1)}>Click me</button>

			<p>You clicked {count} times</p>
		</Layout>
	);
}
