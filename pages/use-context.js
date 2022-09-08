import React, { useContext, useState } from 'react';
import Layout from '../components/layout';
import ClassContext from '../components/class-context';
import FunctionContext from '../components/function-context';

export const ThemeContext = React.createContext();

export default function Context() {
	const [darkTheme, setDarkTheme] = useState(true);

	function toggleTheme() {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	}

	return (
		<Layout>
			<h1>useContext</h1>
			<p>
				Accepts a context object (the value returned from{' '}
				<code>React.createContext</code>) and returns the current context value
				for that context.
			</p>
			<p>
				The current context value is determined by the value prop of the nearest{' '}
				<code>{'<MyContext.Provider>'}</code> above the calling component in the
				tree.
			</p>
			<p>
				When the nearest {'<MyContext.Provider>'} above the component updates,
				this Hook will trigger a re-render with the latest context value passed
				to that MyContext provider.
			</p>
			<p>
				Context.Provider allows for a variable or prop to be passed into the{' '}
				<code>value</code> prop, enabling it to be used by all children without
				needing to pass it to them manually.
			</p>
			<p>
				A component calling <code>useContext</code> will always re-render when
				the context value changes.
			</p>
			<p>
				This is used in styled components!{' '}
				<a href="https://styled-components.com/docs/advanced">
					Look here for examples
				</a>
				.
			</p>
			<p>
				The class-based version and the function-based version have different
				syntax.
			</p>
			<p>
				The class-based version doesn&apos;t use <code>useContext</code>, and
				thus is more complex code (and more lines of code).
			</p>
			<p>
				The function-based version does use <code>useContext</code>, and is much
				cleaner code.
			</p>
			<h2>Example</h2>
			<ThemeContext.Provider value={darkTheme}>
				<button onClick={toggleTheme}>Toggle theme</button>
				<ClassContext />
				<FunctionContext />
			</ThemeContext.Provider>
		</Layout>
	);
}
