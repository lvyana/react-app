/**
 * @file 布局
 * @author ly
 * @createDate 2023年6月12日
 */
import React, { useEffect } from 'react';
import { Col, Form, RadioChangeEvent, Row } from 'antd';
import layout from '@/assets/images/layout.jpg';
import layout1 from '@/assets/images/layout1.jpg';
import { useAppSelector, useAppDispatch } from '@/store';
import style from './index.module.scss';
import {
	GET_FOOTER_LAYOUT,
	GET_MENU_LAYOUT,
	GET_TABSMAIN_LAYOUT,
	LayoutType,
	SET_FOOTER_LAYOUT,
	SET_MENU_LAYOUT,
	SET_TABSMAIN_LAYOUT
} from '@/store/reducers/layout';
import Iform, { FormRadioType } from '@/antdComponents/iForm';

const TABSMAIN_LAYOUT = [
	{
		value: 2,
		name: '显示',
		key: 2
	},
	{
		value: 1,
		name: '隐藏',
		key: 1
	}
];

type FormListParam = [FormRadioType<(typeof TABSMAIN_LAYOUT)[0]>, FormRadioType<(typeof TABSMAIN_LAYOUT)[0]>];

type FormParam = { tabsMainLayout: number; footerLayout: number };

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const StyleLayout = () => {
	// 获取菜单初始化数据
	const selectLayout = useAppSelector(GET_MENU_LAYOUT);

	// 获取顶部导航栏初始化数据
	const tabsMainLayout = useAppSelector(GET_TABSMAIN_LAYOUT);

	// 获取底部初始化数据
	const footerLayout = useAppSelector(GET_FOOTER_LAYOUT);

	const dispatch = useAppDispatch();

	const onSelectStyle = (value: LayoutType) => {
		dispatch(SET_MENU_LAYOUT(value));
	};

	const getStyle = (value: LayoutType) => {
		if (value === selectLayout) {
			return style['select-style'];
		}
		return '';
	};

	const onSelectTabsMainLayout = (e: RadioChangeEvent) => {
		dispatch(SET_TABSMAIN_LAYOUT(e.target.value));
	};

	const onSelectFooterLayout = (e: RadioChangeEvent) => {
		dispatch(SET_FOOTER_LAYOUT(e.target.value));
	};

	const [form] = Form.useForm<FormParam>();

	const formList: FormListParam = [
		{
			type: 'radio',
			name: 'tabsMainLayout',
			label: '顶部导航栏',
			comConfig: {
				option: TABSMAIN_LAYOUT,
				onChange: onSelectTabsMainLayout
			},
			key: 0,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			},
			span: 24
		},
		{
			type: 'radio',
			name: 'footerLayout',
			label: '底部',
			comConfig: {
				option: TABSMAIN_LAYOUT,
				onChange: onSelectFooterLayout
			},
			key: 1,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			},
			span: 24
		}
	];

	useEffect(() => {
		form.setFieldsValue({ tabsMainLayout, footerLayout });
	}, []);

	return (
		<div>
			<h2 className="mb-2 text-base">选择布局</h2>
			<Row gutter={32}>
				<Col className={getStyle(1)}>
					<img src={layout} alt="" className={'cursor-pointer '} onClick={() => onSelectStyle(1)} />
				</Col>
				<Col className={getStyle(2)}>
					<img src={layout1} alt="" className={'cursor-pointer '} onClick={() => onSelectStyle(2)} />
				</Col>
			</Row>
			<h2 className="mt-2 mb-2 text-base">组件显示</h2>
			<Iform form={form} formList={formList}></Iform>
		</div>
	);
};

export default StyleLayout;
