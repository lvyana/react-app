/**
 * @name 实现编辑表头
 * @use ly
 * @data 2022年7月30日
 */
import React, { FC, useState, useEffect, Key, memo } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { getHeaderConfig } from '@/store/reducers/globalConfig';
import { Checkbox } from 'antd';
import Imodal from '@/components/iModal';
import TreeMenu from './TreeMenu';
import { useHeaderConfigItem } from '@/useHooks/useHeaderConfig';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { headerConfigListArrType } from '@/store/reducers/globalConfig';
import { updateHeader } from './service';

export type HeaderType = 'expenses';

interface IheaderConfigProps {
	type: HeaderType;
	open: boolean;
	closeHeader: () => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IheaderConfig: FC<IheaderConfigProps> = ({ type, open, closeHeader }) => {
	const dispatch = useAppDispatch();

	// 初始化数据
	const { headerConfigItem, setHeaderConfigItem, checkedKeys, setCheckedKeys } = useHeaderConfigItem(type, open);

	// 更新数据
	const updateInitData = (newInitData: headerConfigListArrType[]) => {
		setHeaderConfigItem(newInitData);
	};

	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		// console.log(headerConfigItem);
		// console.log(checkedKeys);
		setConfirmLoading(true);
		const isFalseArr = headerConfigItem.reduce((pre: Key[], item) => {
			if (checkedKeys.indexOf(item.headerFieldId) === -1) {
				return [...pre, item.headerFieldId];
			} else {
				return pre;
			}
		}, []);
		try {
			await updateHeader({ type, headerField: isFalseArr });
			// 刷新表头
			dispatch(getHeaderConfig());
			closeHeader();
		} catch (error) {}
		setConfirmLoading(false);
	};
	const handleCancel = () => {
		closeHeader();
	};

	// 全选
	const [indeterminate, setIndeterminate] = useState(false);
	const [checkAll, setCheckAll] = useState(false);

	const onCheckAllChange = (e: CheckboxChangeEvent) => {
		setIndeterminate(false);
		setCheckAll(e.target.checked);
		if (e.target.checked) {
			// 全选
			const allKeys = headerConfigItem.reduce((pre: Key[], item) => {
				return [...pre, item.headerFieldId as Key];
			}, []);
			setCheckedKeys(allKeys);
		} else {
			// 取消
			setCheckedKeys([]);
		}
	};

	// 选中数据
	// const [checkedKeys, setCheckedKeys] = useState<Key[]>([]);

	const updateCheckedKeys = (checkedKeysValue: Key[]) => {
		setCheckedKeys(checkedKeysValue);
	};
	// 监听checkedKeys变化 是否全部选中
	useEffect(() => {
		if (checkedKeys.length === 0) {
			// 一个都没选中
			onSelectAll('0');
		} else if (headerConfigItem.length === checkedKeys.length) {
			// 全选
			onSelectAll('2');
		} else {
			// 半选
			onSelectAll('1');
		}
	}, [checkedKeys]);

	// TreeMenu 全选状态
	const onSelectAll = (type: onSelectAllParam) => {
		if (type === '0') {
			setIndeterminate(false);
			setCheckAll(false);
		} else if (type === '1') {
			setIndeterminate(true);
			setCheckAll(false);
		} else if (type === '2') {
			setIndeterminate(false);
			setCheckAll(true);
		}
	};

	return (
		<Imodal title={'编辑表头'} open={open} handleOk={handleOk} handleCancel={handleCancel} confirmLoading={confirmLoading}>
			<Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
				全选
			</Checkbox>
			<TreeMenu
				initData={headerConfigItem}
				checkedKeys={checkedKeys}
				updateInitData={updateInitData}
				updateCheckedKeys={updateCheckedKeys}></TreeMenu>
		</Imodal>
	);
};
/**
 * @param type 无选中0 半选1 全选2
 */
export type onSelectAllParam = '0' | '1' | '2';

export default memo(IheaderConfig);
