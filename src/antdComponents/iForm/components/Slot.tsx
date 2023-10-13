/**
 * @file 自定义组件
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import type { SlotType } from '../type';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const setSlot = (item: SlotType) => {
	return <>{item.children}</>;
};

export default setSlot;
