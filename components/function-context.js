import React, { useContext } from 'react';
import { ThemeContext } from '../pages/use-context';

export default function FunctionContext() {
	const darkTheme = useContext(ThemeContext);

	const themeStyles = {
		backgroundColor: darkTheme ? '#333' : '#CCC',
		color: darkTheme ? '#ccc' : '#333',
		padding: '8px',
		width: '400px',
		margin: '8px auto',
	};

	return (
		<div style={themeStyles}>
			<p>Function-based theme</p>
			<p>{'const darkTheme = useContext(ThemeContext);'}</p>
			<p>
				{
					"const themeStyles = { backgroundColor: darkTheme ? '#333' : '#CCC', color: darkTheme ? '#ccc' : '#333', padding: '8px', width: '200px', height: '100px', margin: '8px auto', };"
				}
			</p>
		</div>
	);
}
