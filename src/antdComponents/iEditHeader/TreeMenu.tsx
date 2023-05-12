/**
 * @file 排序、选中
 * @author ly
 * @createDate 2023年2月3日
 */
import React, { FC, Key } from 'react';
import { Tree } from 'antd';
import { arrIndexExchange } from '@/utils/exchange';
import type { TreeProps } from 'antd/es/tree';
import type { headerConfigListArrType } from '@/store/reducers/globalConfig';

/**
 * @param initData 初始化数据
 * @param checkedKeys 选中数据
 * @param updateInitData 更新初始化数据顺序
 * @param updateCheckedKeys 更新选中数据
 */
interface TreeMenuProps {
	initData: headerConfigListArrType[];
	checkedKeys: Key[];
	updateInitData: (newInitData: headerConfigListArrType[]) => void;
	updateCheckedKeys: (type: Key[]) => void;
}
const TreeMenu: FC<TreeMenuProps> = ({ initData, checkedKeys, updateInitData, updateCheckedKeys }) => {
	const onDragEnter: TreeProps['onDragEnter'] = (info) => {
		// console.log(info);
		// expandedKeys 需要受控时设置
		// setExpandedKeys(info.expandedKeys)
	};

	// 勾选
	const onCheck = (checkedKeysValue: Key[]) => {
		// console.log('onCheck', checkedKeysValue);
		updateCheckedKeys(checkedKeysValue);
	};

	// 鼠标放下事件
	const onDrop: TreeProps['onDrop'] = (info) => {
		// 获取到移动的下表
		const index = initData.findIndex((item) => item.headerFieldId === info.dragNodesKeys[0]);

		// 判断下表位置是否移动数据
		if (info.dropPosition === -1 && index === 0) {
			return;
		} else if (info.dropPosition === index) {
			return;
		} else if (info.dropPosition === -1) {
			// 处理移动数据-1
			let newGData = arrIndexExchange(initData, index, 0);
			updateInitData(newGData);
		} else if (info.dropPosition > index) {
			// 处理移动数据下移
			let newGData = arrIndexExchange(initData, index, info.dropPosition - 1);
			updateInitData(newGData);
		} else if (info.dropPosition < index) {
			// 处理移动数据上移
			let newGData = arrIndexExchange(initData, index, info.dropPosition);
			updateInitData(newGData);
		}
	};

	return (
		<Tree
			className="draggable-tree"
			checkedKeys={checkedKeys}
			onCheck={(checkedKeys) => onCheck(checkedKeys as Key[])}
			draggable
			blockNode
			onDragEnter={onDragEnter}
			onDrop={onDrop}
			treeData={initData}
			fieldNames={{ title: 'headerFieldName', key: 'headerFieldId', children: 'children' }}
			checkable
		/>
	);
};

export default TreeMenu;
