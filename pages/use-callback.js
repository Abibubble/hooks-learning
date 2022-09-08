import { useCallback, useState } from 'react';
import Layout from '../components/layout';
import Child from '../components/child';

export default function CallBackTutorial() {
	const [data, setData] = useState('Hello ');

	const returnComment = useCallback(
		(name) => {
			return data + name;
		},
		[data]
	);

	return (
		<Layout>
			<h1>useCallback</h1>
			<p>
				<code>useCallback</code> returns a memoized callback function.
			</p>
			<p>
				This allows us to isolate resource intensive functions so that they will
				not automatically run on every render.
			</p>
			<p>
				<code>useCallback</code> and <code>useMemo</code> are similar.
			</p>
			<p>
				The main difference is that <code>useMemo</code> returns a memoized
				value and <code>useCallback</code> returns a memoized function.
			</p>
			<p>
				It prevents a component from re-rendering unless its props have changed.
			</p>
			<h2>Example</h2>
			<Child returnComment={returnComment} />
		</Layout>
	);
}
