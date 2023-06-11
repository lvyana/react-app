/**
 * @file 模板
 * @author 姓名
 * @createDate
 */
import React, { useState } from 'react';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useConfigLayout = () => {
	const [openConfigLayout, setopenConfigLayout] = useState(false);

	const onOpenConfigLayout = () => {
		setopenConfigLayout(true);
	};

	const onCloseConfigLayout = () => {
		setopenConfigLayout(false);
	};

	return { openConfigLayout, onOpenConfigLayout, onCloseConfigLayout };
};

export default useConfigLayout;
