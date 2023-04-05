/**
 * @file 折叠面板
 * @author ly
 * @createDate 2023年4月5日
 */
import { Collapse } from 'antd';
import React, { FC, ReactNode } from 'react';
import { useAppSelector } from '@/store/hooks';
import { GET_SIZE } from '@/store/reducers/layout';
import useStyleHooks from './useStyleHooks';

/**
 * @param header 面板头内容
 * @param content 面板内容
 * @param style 面板css样式
 * @param key 对应 activeKey
 */
export type ListParams<T> = {
	header: ReactNode;
	content: ReactNode;
	style?: React.CSSProperties;
	key: T;
};

/**
 * @param list 渲染数据
 * @param defaultActiveKey 初始化选中面板的 key
 * @param onChange 切换面板的回调
 * @param style 面板css样式
 * @param expandIcon 自定义切换图标
 */
export type IcollapseProps<T> = {
	list: ListParams<T>[];
	defaultActiveKey?: T[];
	styleConfig?: '1';
	bordered?: boolean;
	onChange?: (key: string | string[]) => void;
	style?: React.CSSProperties;
	expandIcon?: (value: { isActive?: boolean }) => ReactNode;
};

const { Panel } = Collapse;

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
	const size = useAppSelector(GET_SIZE);

	// 折叠面板样式配置
	const styleConfigParams = useStyleHooks({ list, styleConfig, style, bordered });

	return (
		<div>
			<Collapse
				bordered={styleConfigParams.bordered}
				defaultActiveKey={defaultActiveKey}
				onChange={onChange}
				size={size}
				expandIcon={expandIcon}
				style={styleConfigParams.style}>
				{styleConfigParams.list.map((item) => {
					return (
						<Panel header={item.header} key={item.key} style={item.style}>
							<p>{item.content}</p>
						</Panel>
					);
				})}
			</Collapse>
		</div>
	);
};

export default Icollapse;
