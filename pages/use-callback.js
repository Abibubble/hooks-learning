import { useCallback, useState } from 'react';
import Layout from '../components/layout';
import Child from '../components/child';

export default function CallBackTutorial() {
	const [toggle, setToggle] = useState(false);
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
			<div className="App">
				<Child returnComment={returnComment} />

				<button
					onClick={() => {
						setToggle(!toggle);
					}}
				>
					{' '}
					Toggle
				</button>
				{toggle && <h1>Toggled</h1>}
			</div>
		</Layout>
	);
}
