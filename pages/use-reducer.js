import React, { useReducer } from 'react';
import Layout from '../components/layout';

const initialState = { count: 0 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

export default function Reducer() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Layout>
			<h1>useReducer</h1>
			<p>An alternative to useState.</p>
			<p>
				Returns the current state paired with a dispatch method (similar to
				Redux).
			</p>
			<p>
				useReducer is usually preferable to useState when you have complex state
				logic that involves multiple sub-values or when the next state depends
				on the previous one.
			</p>
			<p>
				useReducer also lets you optimize performance for components that
				trigger deep updates.
			</p>
			<p>There are two different ways to initialize useReducer state.</p>
			<p>The simplest way is to pass the initial state as a second argument:</p>
			<p>
				{
					'const [state, dispatch] = useReducer(reducer, {count: initialCount});'
				}
			</p>
			<p>
				If you return the same value from a Reducer Hook as the current state,
				React will bail out without rendering the children or firing effects.
			</p>
			<p>Count: {state.count}</p>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
		</Layout>
	);
}
