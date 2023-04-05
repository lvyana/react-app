/**
 * @file 折叠面板样式配置
 * @author ly
 * @createDate
 */
import React from 'react';
import type { IcollapseProps } from './index';
import useThemeHooks from '@/config/theme/useThemeHooks';

type UseStyleHooksProps<T> = Pick<IcollapseProps<T>, 'list' | 'styleConfig' | 'style' | 'bordered'>;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useStyleHooks = <T,>({ list, styleConfig, style, bordered }: UseStyleHooksProps<T>) => {
	const { token } = useThemeHooks();

	const ListStyle = {
		marginBottom: 24,
		background: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: 'none'
	};

	if (styleConfig === '1') {
		const listOne = list.map((item) => {
			return {
				...item,
				style: ListStyle
			};
		});
		return { list: listOne, style: { background: token.colorBgContainer }, bordered: false };
	}

	// 默认配置
	return { list, styleConfig, style, bordered };
};

export default useStyleHooks;
