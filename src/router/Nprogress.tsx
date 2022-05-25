import React from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

interface IProps {}
export default class Nprogress extends React.Component {
	constructor(props: IProps) {
		super(props);
		// console.log(0);
		nprogress.start();
	}
	// componentWillMount() {
	//   console.log(1);
	// }
	// componentDidMount() {
	//   console.log(2);
	// }
	componentWillUnmount() {
		nprogress.done();
	}
	render() {
		return <React.Fragment></React.Fragment>;
	}
}
