import React, { FC, ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';

/**
 * @param MaxWidth 最大宽度
 * @return 响应式 大于最大宽度 隐藏
 */
interface IresponsiveMaxProps {
	children: ReactElement;
	MaxWidth: number;
}
const IresponsiveMax: FC<IresponsiveMaxProps> = ({ children, MaxWidth }) => {
	const isShow = useMediaQuery({ query: `(max-width: ${MaxWidth}px)` });
	return isShow ? children : null;
};

/**
 * @param MaxWidth 最大宽度
 * @return 响应式 大于最大宽度 隐藏
 */
const useResponsiveMax = (MaxWidth: number) => {
	const isShow = useMediaQuery({ query: `(max-width: ${MaxWidth}px)` });
	return { isShow };
};

/**
 * @param MinWidth 最大宽度
 * @return 响应式 小于最小宽度 隐藏
 */
interface IresponsiveMinProps {
	children: ReactElement;
	MinWidth: number;
}
const IresponsiveMin: FC<IresponsiveMinProps> = ({ children, MinWidth }) => {
	const isShow = useMediaQuery({ query: `(min-width: ${MinWidth}px)` });
	return isShow ? children : null;
};

/**
 * @param MinWidth 最大宽度
 * @return 响应式 小于最小宽度 隐藏
 */
const useResponsiveMin = (MinWidth: number) => {
	const isShow = useMediaQuery({ query: `(max-width: ${MinWidth}px)` });
	return { isShow };
};

export { IresponsiveMax, useResponsiveMax, IresponsiveMin, useResponsiveMin };
