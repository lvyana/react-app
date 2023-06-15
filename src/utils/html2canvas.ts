/**
 * @file html2canvas下载图片
 * @author ly
 * @createDate 2023年1月10日
 */
import html2canvas from 'html2canvas';

const downloadImg = (dom: HTMLElement) => {
	html2canvas(dom).then((canvas) => {
		let url = canvas.toDataURL('image/png');
		let aLink = document.createElement('a');
		aLink.style.display = 'none';
		aLink.href = url;
		// console.log(aLink.href);
		aLink.download = '截图.png';
		document.body.appendChild(aLink);
		aLink.click();
		document.body.removeChild(aLink);
	});
};

export default downloadImg;
