import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import Layout from '../components/layout';

export default function Memo() {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/comments')
			.then((response) => {
				setData(response.data);
			});
	}, []);

	const findLongestName = (comments) => {
		if (!comments) return null;

		let longestName = '';
		for (let i = 0; i < comments.length; i++) {
			let currentName = comments[i].name;
			if (currentName.length > longestName.length) {
				longestName = currentName;
			}
		}

		console.log('THIS WAS COMPUTED');

		return longestName;
	};

	const getLongestName = useMemo(() => findLongestName(data), [toggle]);

	return (
		<Layout>
			<h1>useMemo</h1>
			<p>
				<code>useMemo</code> returns a memoized value.
			</p>
			<p>
				Think of memoization as caching a value so that it does not need to be
				recalculated.
			</p>
			<p>
				<code>useMemo</code> only runs when one of its dependencies update.
			</p>
			<p>
				<code>useMemo</code> should be used as a performance optimization, not
				relied on as a semantic guarantee.
			</p>
			<p>
				It can be used to keep expensive, resource intensive functions from
				needlessly running.
			</p>
			<p>
				In the future, React may choose to forget some previously memoized
				values and recalculate them on next render, e.g. to free memory for
				offscreen components.
			</p>
			<p>
				Write your code so that it still works without <code>useMemo</code> —
				and then add it to optimize performance.
			</p>
			<p>
				I definitely need to look more into this, I'm still not certain about
				syntax
			</p>
			<h2>Example</h2>
			<div className="App">
				<div> {getLongestName} </div>

				<button
					onClick={() => {
						setToggle(!toggle);
					}}
				>
					{' '}
					Toggle
				</button>
				{toggle && <h1> toggle </h1>}
			</div>
		</Layout>
	);
}
