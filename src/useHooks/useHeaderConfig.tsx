/**
 * @file 定制表头
 * @author ly
 * @createDate 2022年4月27日
 */
import React, { useState, useEffect, Key } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { GET_HEADER_CONFIG } from '@/store/reducers/globalConfig';
import type { IcolumnsType } from '@/antdComponents/iTable';
import type { HeaderConfigListParam, HeaderFieldParam } from '@/store/reducers/globalConfig';
/**
 * @param type 表格类型
 * @param columns 前端表头模板
 * @returns 表头
 */
const useHeaderConfig = <T,>(type: string, columns: IcolumnsType<T>) => {
	// 处理后 模板数据
	const [headerConfigItem, setHeaderConfigItem] = useState<IcolumnsType<T>>([]);

	// 后端返回模板
	const headerConfig = useAppSelector(GET_HEADER_CONFIG);

	// 表格宽度
	const [headerWidth, setheaderWidth] = useState(0);

	useEffect(() => {
		const NewHeaderConfigItem = getSortShow();
		setHeaderConfigItem(NewHeaderConfigItem);

		const newHeaderWidth = getHeaderWidth(NewHeaderConfigItem);
		setheaderWidth(newHeaderWidth);
	}, [headerConfig]);

	// 排序加是否显示
	const getSortShow = () => {
		const headerConfigItem = getHeaderConfigItem(type, headerConfig);

		return headerConfigItem.reduce((pre: IcolumnsType<T>, item) => {
			const newColumns = columns.find((value) => value.key === item.headerFieldKey);
			if (newColumns && item.headerSelected === 'true') {
				return [...pre, newColumns];
			} else {
				return pre;
			}
		}, []);
	};

	const getHeaderWidth = (NewHeaderConfigItem: IcolumnsType<T>) => {
		return NewHeaderConfigItem.reduce((pre, item) => {
			if (typeof item.width === 'number') {
				return (pre += item.width as number);
			}
			return pre;
		}, 0);
	};

	return { headerConfigItem, headerWidth };
};

/**
 * @param type 表格类型
 * @param open 开关是否初始化渲染
 * @returns 表头 转成 拖拽树
 */
const useHeaderConfigItem = (type: string, open: boolean) => {
	const headerConfig = useAppSelector(GET_HEADER_CONFIG);

	// 拿到对应的后端表头数据
	const [headerConfigItem, setHeaderConfigItem] = useState<HeaderFieldParam[]>([]);

	// 选中的key
	const [checkedKeys, setCheckedKeys] = useState<Key[]>([]);

	// 查出all选中的key
	const getCheckedKeys = (headerConfigItem: HeaderFieldParam[]) => {
		return headerConfigItem.reduce((pre: Key[], item) => {
			if (item.headerSelected === 'true') {
				return [...pre, item.headerFieldId];
			} else {
				return pre;
			}
		}, []);
	};

	useEffect(() => {
		if (open) {
			const NewHeaderConfigItem = getHeaderConfigItem(type, headerConfig);
			setHeaderConfigItem(NewHeaderConfigItem);

			const NewCheckedKeys = getCheckedKeys(NewHeaderConfigItem);
			setCheckedKeys(NewCheckedKeys);
		}
	}, [headerConfig, open]);

	return { headerConfigItem, setHeaderConfigItem, checkedKeys, setCheckedKeys };
};

// 获取后端某个表头配置
const getHeaderConfigItem = (type: string, headerConfig: HeaderConfigListParam[]) => {
	return headerConfig.reduce((pre: HeaderFieldParam[], item) => {
		if (item.type === type) {
			return item.headerField;
		}
		return pre;
	}, []);
};

export { useHeaderConfig, useHeaderConfigItem };
