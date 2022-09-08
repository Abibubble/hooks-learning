import React, { Component } from 'react';
import { ThemeContext } from '../pages/use-context';

export default class ClassContext extends Component {
	themeStyles(dark) {
		return {
			backgroundColor: dark ? '#333' : '#CCC',
			color: dark ? '#ccc' : '#333',
			padding: '8px',
			width: '400px',
			margin: '8px auto',
		};
	}

	render() {
		return (
			<ThemeContext.Consumer>
				{(darkTheme) => {
					return (
						<div style={this.themeStyles(darkTheme)}>
							<p>Class-based theme</p>
							<p>{'export default class ClassContext extends Component'}</p>
							<p>
								{
									"themeStyles(dark) { return { backgroundColor: dark ? '#333' : '#CCC', color: dark ? '#ccc' : '#333', padding: '8px', width: '400px', margin: '8px auto', }; }"
								}
							</p>
							<p>
								{
									'<ThemeContext.Consumer> {(darkTheme) => { return ( <div  style={this.themeStyles(darkTheme)}> <p>Class-based theme</p> </div> ); }} </ThemeContext.Consumer>'
								}
							</p>
						</div>
					);
				}}
			</ThemeContext.Consumer>
		);
	}
}
