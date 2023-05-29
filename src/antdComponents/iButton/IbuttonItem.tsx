/**
 * @file 单个按钮
 * @author ly
 * @createDate
 */
import React from 'react';
import { Button } from 'antd';
import IconFont from '@/utils/iconfont';
import type { IbuttonProps } from './index';
import type { ButtonItemParams } from './type';

/**
 * @param buttonItem 单个按钮
 */
export interface IbuttonItemProps<T> extends Omit<IbuttonProps<T>, 'buttonList'> {
	buttonItem: ButtonItemParams<T>;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export const IbuttonItem = <T,>({ buttonItem, loadingName, onClick }: IbuttonItemProps<T>) => {
	return (
		<Button
			type={buttonItem.btnType}
			onClick={() => onClick && onClick(buttonItem.type, buttonItem)}
			disabled={buttonItem.disabled === true}
			loading={loadingName === buttonItem.type}
			className={buttonItem.className}
			icon={(() => {
				if (buttonItem.iconFont) {
					if (typeof buttonItem.iconFont === 'string') {
						return <IconFont type={buttonItem.iconFont}></IconFont>;
					} else if (React.isValidElement(buttonItem.iconFont)) {
						return buttonItem.iconFont;
					}
					return <></>;
				}
			})()}
			block={buttonItem.block}
			style={buttonItem.style}>
			{buttonItem.name}
		</Button>
	);
};

export default IbuttonItem;
