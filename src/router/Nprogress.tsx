/**
 *	@name 实现loading
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

interface IProps {}
export default class Nprogress extends React.Component {
	constructor(props: IProps) {
		super(props);
		nprogress.start();
	}
	// componentWillMount() {
	// }
	// componentDidMount() {
	// }
	componentWillUnmount() {
		nprogress.done();
	}
	render() {
		return <React.Fragment></React.Fragment>;
	}
}
