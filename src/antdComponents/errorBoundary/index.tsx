/**
 * @file 边界错误组件
 * @author ly
 * @createDate 2023年2月3日
 */
import React, { ErrorInfo } from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
interface ErrorBoundaryProps {
	children: React.ReactNode;
}
interface ErrorBoundaryState {
	hasError: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({ hasError: true });

		// 将报错发送到Fundebug
	}

	render() {
		if (this.state.hasError) {
			// return null;
			// 也可以在出错的component处展示出错信息
			return <Result status="500" title="500" subTitle="Sorry, something went wrong." extra={<GoErrorView />} />;
		}
		return this.props.children;
	}
}

const GoErrorView = () => {
	const navigate = useNavigate();

	const onBackHome = () => {
		console.log('/home');

		navigate('/home');
	};

	return (
		<Button onClick={onBackHome} type="primary">
			Back Home
		</Button>
	);
};
export default ErrorBoundary;
