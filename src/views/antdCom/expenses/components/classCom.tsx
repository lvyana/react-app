import { Button } from 'antd';
import React from 'react';

class ClassCom extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { a: 1, b: 'B' };
		this.handleClick = this.handleClick.bind(this);
		console.log('constructor');
	}
	static getDerivedStateFromProps(nextProps: any, newState: any) {
		console.log(nextProps, newState, 'getDerivedStateFormProps', this);
		return { a: 2, ...newState };
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	shouldComponentUpdate(nextProps: any, newState: any) {
		console.log(nextProps, newState, 'shouldComponentUpdate', this);
		// if (newState.a === this.state.a) {
		// 	return false;
		// }
		return true;
	}
	getSnapshotBeforeUpdate(prevProps: any, preState: any) {
		// 必须搭配 componentDidMount 使用
		console.log(prevProps, preState, 'getSnapshotBeforeUpdate', this);
		return preState;
	}
	componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
		console.log(prevProps, prevState, snapshot, 'componentDidMount', this);
	}
	handleClick() {
		console.log('222add');

		this.setState(
			(state: { a: number }) => ({ a: state.a + 1, b: 'BB' }),
			() => {
				console.log(this.state);
			}
		);
		console.log(this.state);
	}
	render() {
		console.log('render');

		return (
			<>
				{this.state.a}
				<Button onClick={this.handleClick}>1</Button>
				<Hh dd={333}></Hh>
			</>
		);
	}
}
export default ClassCom;

class Hh extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { a: 1, b: 'B' };
		this.handleClick = this.handleClick.bind(this);
		console.log('constructor son');
	}
	static getDerivedStateFromProps(nextProps: any, newState: any) {
		console.log(nextProps, newState, 'getDerivedStateFormProps son', this);
		return { a: 2, ...newState };
	}
	componentDidMount() {
		console.log('componentDidMount son');
	}
	// shouldComponentUpdate(nextProps: any, newState: any) {
	// 	console.log(nextProps, newState, 'shouldComponentUpdate son', this);
	// 	if (newState.a === this.state.a) {
	// 		return false;
	// 	}
	// 	return true;
	// }
	getSnapshotBeforeUpdate(prevProps: any, preState: any) {
		// 必须搭配 componentDidMount 使用
		console.log(prevProps, preState, 'getSnapshotBeforeUpdate son', this);
		return preState;
	}
	componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
		console.log(prevProps, prevState, snapshot, 'componentDidMount son', this);
	}
	handleClick() {
		console.log('222add son');

		this.setState(
			(state: { a: number }) => ({ a: state.a + 1, b: 'BB' }),
			() => {
				console.log(this.state);
			}
		);
		console.log(this.state);
	}
	render() {
		console.log('render son');

		return (
			<>
				{this.state.a}
				<Button onClick={this.handleClick}>1</Button>
			</>
		);
	}
}
