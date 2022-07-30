/**
 *	@name 实现Error404
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React from 'react';
import { Result, Button } from 'antd';

const Error404 = () => {
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={<Button type="primary">Back Home</Button>}
		/>
	);
};
export default Error404;
