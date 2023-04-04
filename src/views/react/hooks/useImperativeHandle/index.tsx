/**
 * @file useImperativeHandle
 * @author ly
 * @createDate
 */
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseImperativeHandle = () => {
	const navigate = useNavigate();
	const onToForwardRef = () => {
		navigate('/hooks/forwardRef');
	};
	return (
		<div>
			示例详情见:<Button type="link" onClick={onToForwardRef}></Button>
		</div>
	);
};

export default IuseImperativeHandle;
