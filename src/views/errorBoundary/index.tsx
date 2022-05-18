import React from 'react';
import { Result, Button } from 'antd';
import { QKhistory } from '@/actions/history';

interface ErrorBoundaryProps {}
interface ErrorBoundaryState {
	hasError: boolean;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: any, info: any) {
		this.setState({ hasError: true });
		console.log(error, info);

		// 将报错发送到Fundebug
	}
	backHome() {
		QKhistory(`/index`);
	}
	render() {
		if (this.state.hasError) {
			// return null;
			// 也可以在出错的component处展示出错信息
			return (
				<Result
					status="500"
					title="500"
					subTitle="Sorry, something went wrong."
					extra={
						<Button onClick={this.backHome} type="primary">
							Back Home
						</Button>
					}
				/>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
