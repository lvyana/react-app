/**
 * @file useImperativeHandle
 * @author ly
 * @createDate
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icard from '@/antdComponents/iCard';
import { Button } from 'antd';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseImperativeHandle = () => {
	const navigate = useNavigate();
	const onToForwardRef = () => {
		navigate('/react/hooks/forwardRef');
	};
	return (
		<Icard>
			示例详情见:
			<Button type="link" onClick={onToForwardRef}>
				跳转
			</Button>
		</Icard>
	);
};

export default IuseImperativeHandle;
