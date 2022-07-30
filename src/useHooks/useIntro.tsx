/**
 *	@name 实现用户指导
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useEffect } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';

const useIntro = () => {
	useEffect(() => {
		introJs()
			.setOptions({
				steps: [
					{
						title: 'Welcome',
						intro: 'Hello World! 👋'
					},
					{
						element: document.querySelector('.unctionality') as Element,
						intro: '这是用户功能',
						position: 'bottom'
					},
					{
						title: 'Farewell!',
						element: document.querySelector('.card__image') as Element,
						intro: 'And this is our final step!'
					}
				],
				// 是否允许点击空白处退出
				// exitOnOverlayClick: false,
				nextLabel: '下一步',
				prevLabel: '返回'
			})
			.start();
	}, []);
};

export default useIntro;

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
