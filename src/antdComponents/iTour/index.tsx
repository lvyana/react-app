/**
 * @file 封装用户指导
 * @author ly
 * @createDate 日期：2020年4月27日
 */
import React, { FC, useEffect, useState } from 'react';
import { Tour } from 'antd';
import type { TourProps, TourStepProps } from 'antd';

const STEPS: TourStepProps[] = [
	{
		title: 'Upload File',
		description: 'Put your files here.',
		cover: (
			<img alt="tour.png" src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png" />
		),
		target: () => document.querySelector('.unctionality') as HTMLElement
	},
	{
		title: 'Save',
		description: 'Save your changes.',
		target: () => document.querySelector('.card__image') as HTMLElement
	}
];

/**
 * @param open 开关
 * @param steps 引导数据
 * @param onClose 关闭引导时的回调函数
 */
interface ItourProps {
	open: boolean;
	steps?: TourProps['steps'];
	onClose: () => void;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Itour: FC<ItourProps> = ({ open, steps = STEPS, onClose }) => {
	return <Tour open={open} onClose={onClose} steps={steps} />;
};

export default Itour;

// // 禁止元素互动(被引导的元素不能点击)
// disableInteraction: true,
// // 下一步按钮的名称
// nextLabel: '下一个',
// // 上一步按钮的名称
// prevLabel: '返回',
// // 跳过按钮的名称
// skipLabel: '跳过引导',
// // 结束按钮的名称
// doneLabel: '完成',
// // 为 intro 指定类名
// tooltipClass: 'toolTip',
// // 是否允许点击空白处退出
// exitOnOverlayClick: true,
// // 是否显示轮播点
// showBullets: true,
// // 是否使用进度条
// showProgress: true,
// // 显示步数  eg: 1/5
// showStepNumbers: true,
// // 是否允许键盘来操作
// keyboardNavigation: true,
