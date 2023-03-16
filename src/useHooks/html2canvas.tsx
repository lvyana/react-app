/**
 * @file html2canvas下载图片
 * @author ly
 * @createDate 2023年1月10日
 */
import React from 'react';
import html2canvas from 'html2canvas';

const useHtml2canvas = (dom: HTMLElement) => {
	const getImg = () => {
		html2canvas(dom).then((canvas) => {
			let url = canvas.toDataURL('image/png');
			let aLink = document.createElement('a');
			aLink.style.display = 'none';
			aLink.href = url;
			// console.log(aLink.href);
			// router.push({name: 'menu', query: {'src': aLink.href}})
			// aLink.download = "截图.png";
			// document.body.appendChild(aLink);
			// aLink.click();
			// document.body.removeChild(aLink);
			window.localStorage.setItem('src', aLink.href);
		});
	};
	return getImg;
};

export default useHtml2canvas;
