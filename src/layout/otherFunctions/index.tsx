/**
 * @file 其他小功能
 * @author ly
 * @createDate 2023年6月12日
 */
import React from 'react';
import { FloatButton } from 'antd';
import Tour from '../tour';
import ConfigLayout from '../configLayout';
import useConfigLayout from '../configLayout/useConfigLayout';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const OtherFunctions = () => {
	const { openConfigLayout, onOpenConfigLayout, onCloseConfigLayout } = useConfigLayout();

	return (
		<>
			<Tour></Tour>
			<FloatButton.Group shape="circle" style={{ right: 24 }}>
				<FloatButton.BackTop visibilityHeight={600} />
				<ConfigLayout open={openConfigLayout} onOpen={onOpenConfigLayout} onClose={onCloseConfigLayout}></ConfigLayout>
			</FloatButton.Group>
		</>
	);
};

export default OtherFunctions;
