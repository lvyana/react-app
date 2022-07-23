import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import img from '@/assets/images/11.png';
import img2 from '@/assets/images/22.png';
import img3 from '@/assets/images/33.png';
import img4 from '@/assets/images/44.png';
import img5 from '@/assets/images/55.png';
import img6 from '@/assets/images/66.png';
import img7 from '@/assets/images/77.png';
import img8 from '@/assets/images/88.png';

const MyUseRouter = () => {
	return (
		<div>
			<div>useParams()</div>
			<div>1. 作用：回当前匹配路由的`params`参数，类似于5.x中的`match.params`。</div>
			<LazyLoad
				resize
				scrollContainer={document.getElementById('body') as HTMLDivElement}
				offset={100}
				overflow={true}
				onContentVisible={() => {
					// console.log('看我已经被延迟加载了！');
				}}
				placeholder={
					<img width="100%" height="100%" src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'} alt="logo" />
				}>
				<img src={img} />
			</LazyLoad>
			<img src={img2} />
			<img src={img3} />
			<div> useSearchParams()</div>
			<div>1. 作用：用于读取和修改当前位置的 URL 中的查询字符串。</div>
			<div>2. 返回一个包含两个值的数组，内容分别为：当前的seaech参数、更新search的函数。</div>
			<LazyLoad
				resize
				overflow={true}
				scrollContainer={document.getElementById('body') as HTMLDivElement}
				offsetTop={10000}
				onContentVisible={() => {
					// console.log('看我已经被延迟加载了！');
				}}
				placeholder={
					<img width="100%" height="100%" src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'} alt="logo" />
				}>
				<img src={img4} />
			</LazyLoad>
			<img src={img5} />
			<div>useLocation()</div>
			<div>1. 作用：获取当前 location 信息，对标5.x中的路由组件的`location`属性。</div>
			<img src={img6} />
			<img src={img7} />
			<div>useMatch()</div>
			<div>1. 作用：返回当前匹配信息，对标5.x中的路由组件的`match`属性。</div>
			<img src={img8} />
		</div>
	);
};

export default MyUseRouter;
