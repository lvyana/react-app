/**
 * @file 封装Error404
 * @author ly
 * @createDate 2020年4月27日
 */
import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	const onBackHome = () => {
		navigate('/home');
	};

	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary" onClick={onBackHome}>
					Back Home
				</Button>
			}
		/>
	);
};
export default NotFound;
