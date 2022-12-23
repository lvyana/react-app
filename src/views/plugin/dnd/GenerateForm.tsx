/**
 * @name 中间生成表单
 * @user ly
 * @date 2022年12月17日
 */
import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { FORM_ITEM } from './itemTypes';
import { Context } from './context';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const GenerateForm = () => {
	const context = useContext(Context);

	const [{ isOver, canDrop }, drop] = useDrop({
		accept: FORM_ITEM,
		drop: () => ({ name: 'GenerateForm' }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	return (
		<div ref={drop} data-testid="GenerateForm" className="border-2 border-solid border-indigo-600" style={{ height: 500 }}>
			index
		</div>
	);
};

const GenerateFormItem = () => {
	return <></>;
};
export default GenerateForm;
