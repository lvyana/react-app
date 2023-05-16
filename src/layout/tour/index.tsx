/**
 * @file 用户指导
 * @author ly
 * @createDate 2023年5月16日
 */
import React, { useEffect, useState } from 'react';
import Itour from '@/antdComponents/iTour';
import { getIsItour, setIsItour } from '@/utils/storage';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Tour = () => {
	// 用户指导
	useEffect(() => {
		if (getIsItour() === '0' || !getIsItour()) {
			setOpenItour(true);
		}
	}, []);

	const [openItour, setOpenItour] = useState(false);

	const onCloseItour = () => {
		setOpenItour(false);
		setIsItour('1');
	};

	return <Itour open={openItour} onClose={onCloseItour}></Itour>;
};

export default Tour;
