/**
 * @file 按钮
 * @author ly
 * @createDate 2023年10月25日
 */
import React from 'react';
import { Button } from 'antd';
import IconFont from '../../utils/iconfont';
import type { IbuttonListProps } from './List';
import type { ButtonItemParams } from './type';

/**
 * @interface
 * @param {ButtonItemParams} buttonItem 单个按钮
 * @param {boolean} loading 动画
 * @method onClick 点击事件
 */
export interface IbuttonItemProps<T> extends Pick<IbuttonListProps<T>, 'onClick'> {
	buttonItem: ButtonItemParams<T>;
	loading?: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Ibutton = <T,>({ buttonItem, loading, onClick }: IbuttonItemProps<T>) => {
	return (
		<Button
			type={buttonItem.btnType}
			onClick={() => onClick && onClick(buttonItem.type, buttonItem)}
			disabled={buttonItem.disabled}
			loading={loading}
			className={buttonItem.className}
			icon={getIconNode(buttonItem.iconFont)}
			block={buttonItem.block}
			style={buttonItem.style}>
			{buttonItem.name}
		</Button>
	);
};

const getIconNode = (iconFont?: React.ReactNode) => {
	if (iconFont) {
		if (React.isValidElement(iconFont)) {
			return <>{iconFont}</>;
		} else if (typeof iconFont === 'string') {
			return <IconFont type={iconFont}></IconFont>;
		}
	}
};

export default Ibutton;
