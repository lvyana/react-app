/**
 * @file 折叠面板
 * @author ly
 * @createDate 2023年4月5日
 */
import React, { FC, ReactNode } from 'react';
import { Collapse, CollapseProps } from 'antd';
import useStyleHooks from './useStyleHooks';

/**
 * 折叠面板props
 * @param list 渲染数据
 * @param defaultActiveKey 初始化选中面板的 key
 * @param styleConfig 配置面板颜色主题类型
 * @param bordered 带边框风格的折叠面板
 * @method onChange 切换面板的回调
 * @param style 面板css样式
 * @method expandIcon 自定义切换图标
 */
export type IcollapseProps<T> = {
	list: CollapseProps['items'];
	defaultActiveKey?: T[];
	styleConfig?: '1';
	bordered?: boolean;
	onChange?: (key: string | string[]) => void;
	style?: React.CSSProperties;
	expandIcon?: (value: { isActive?: boolean }) => ReactNode;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Icollapse = <T extends string | number>({
	list,
	defaultActiveKey,
	styleConfig,
	bordered = true,
	onChange,
	expandIcon,
	style
}: IcollapseProps<T>) => {
	// 折叠面板样式配置
	const styleConfigParams = useStyleHooks({ list, styleConfig, style, bordered });

	return (
		<Collapse
			bordered={styleConfigParams.bordered}
			defaultActiveKey={defaultActiveKey}
			onChange={onChange}
			expandIcon={expandIcon}
			style={styleConfigParams.style}
			items={styleConfigParams.list}></Collapse>
	);
};

export default Icollapse;
