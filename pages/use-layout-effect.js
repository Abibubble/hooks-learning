import { useLayoutEffect, useState } from 'react';
import Layout from '../components/layout';

export default function LayoutEffect() {
	const [count, setCount] = useState(0);

	useLayoutEffect(() => {
		console.log(count);
	}, [count]);

	return (
		<Layout>
			<h1>useLayoutEffect</h1>
			<p>
				Almost identical to useEffect, but it fires synchronously after all DOM
				mutations.
			</p>
			<p>
				This has the same syntax as <code>useEffect</code>.
			</p>
			<p>Use this to read layout from the DOM and synchronously re-render.</p>
			<p>
				<code>useEffect</code> is better to avoid blocking visual updates, so
				try that first, and only use <code>useLayoutEffect</code> if{' '}
				<code>useEffect</code> doesn&apos;t work.
			</p>
			<p>
				This is an option for if window or document are needed, like in
				ShareButtons.
			</p>
			<p>
				<code>{'useLayoutEffect(() => {console.log(count);}, [count]);'}</code>
			</p>
			<p>
				If you&apos;re manipualting the DOM in a way that the user can see, you
				should use <code>useLayoutEffect</code>.
			</p>
			<p>
				If you&apos;re not manipulating the DOM, or if it&apos;s in a way that
				the user can&apos;t see, use <code>useEffect</code>
			</p>

			<h2>Example</h2>
			<button onClick={() => setCount((count) => count + 1)}>Increment</button>
			<p>You&apos;ve clicked {count} times!</p>
		</Layout>
	);
}
