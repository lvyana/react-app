/**
 * @file 单个按钮
 * @author ly
 * @createDate
 */
import React from 'react';
import { Button } from 'antd';
import IconFont from '../../utils/iconfont';
import type { IbuttonProps } from './index';
import type { ButtonItemParams } from './type';

/**
 * @param buttonItem 单个按钮
 */
export interface IbuttonItemProps<T> extends Omit<IbuttonProps<T>, 'buttonList' | 'loadingName'> {
	buttonItem: ButtonItemParams<T>;
	loading?: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export const IbuttonItem = <T,>({ buttonItem, loading, onClick }: IbuttonItemProps<T>) => {
	const getIconNode = (iconFont?: React.ReactNode) => {
		if (iconFont) {
			if (React.isValidElement(iconFont)) {
				return <>{iconFont}</>;
			} else if (typeof iconFont === 'string') {
				return <IconFont type={iconFont}></IconFont>;
			}
		}
	};
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

export default IbuttonItem;
