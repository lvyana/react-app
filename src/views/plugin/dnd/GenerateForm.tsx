/**
 * @name 中间生成表单
 * @user ly
 * @date 2022年12月17日
 */
import React from 'react';
import { useDrop } from 'react-dnd';
import { FORM_ITEM } from './itemTypes';
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const GenerateForm = () => {
	const [{ isOver, canDrop }, drop] = useDrop({
		accept: FORM_ITEM,
		drop: () => ({ name: 'GenerateForm' }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	return (
		<div ref={drop} data-testid="GenerateForm" style={{ height: 500, backgroundColor: 'red' }}>
			index
		</div>
	);
};

export default GenerateForm;
