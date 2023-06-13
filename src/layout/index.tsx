/**
 * @file Layout
 * @author ly
 * @createDate 2023年6月13日
 */
import React from 'react';
import useApi from '@/useHooks/useApi';
import OtherFunctions from './otherFunctions';
import useAysncComponent from './useAsyncComponent';
import LayoutStyle from './LayoutStyle';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Layout = () => {
	// 初始化api数据
	useApi();
	return (
		<>
			<LayoutStyle></LayoutStyle>
			<OtherFunctions></OtherFunctions>
		</>
	);
};

const AsyncLayout = () => useAysncComponent(Layout);

export default AsyncLayout;
