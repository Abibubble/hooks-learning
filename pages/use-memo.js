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
				I don&apos;t understand how this works. Looks like it hides some data to
				display later? Maybe similar to an accordion, but more flexible?
			</p>
			<p>
				useMemo should be used as a performance optimization, not relied on as a
				semantic guarantee.
			</p>
			<p>
				In the future, React may choose to forget some previously memoized
				values and recalculate them on next render, e.g. to free memory for
				offscreen components.
			</p>
			<p>
				Write your code so that it still works without useMemo — and then add it
				to optimize performance.
			</p>
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
