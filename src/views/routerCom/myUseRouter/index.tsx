/**
 * @file useRouter
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// https://www.npmjs.com/package/react-lazy-load-image-component
import img from '@/assets/images/11.png';
import img2 from '@/assets/images/22.png';
import img3 from '@/assets/images/33.png';
import img4 from '@/assets/images/44.png';
import img5 from '@/assets/images/55.png';
import img6 from '@/assets/images/66.png';
import img7 from '@/assets/images/77.png';
import img8 from '@/assets/images/88.png';
import Icard from '@/antdComponents/iCard';

const MyUseRouter = () => {
	const [img88, setimg88] = useState('');
	useEffect(() => {
		setTimeout(() => {
			setimg88(img);
		}, 4000);
	}, []);
	return (
		<Icard>
			<div>useParams()</div>
			<div>1. 作用：回当前匹配路由的`params`参数，类似于5.x中的`match.params`。</div>
			<LazyLoadImage
				// effect="blur"
				placeholderSrc={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
				src={img88}
				height={400}
				width={'100%'}
			/>

			<img src={img2} alt="" />
			<img src={img3} alt="" />
			<div> useSearchParams()</div>
			<div>1. 作用：用于读取和修改当前位置的 URL 中的查询字符串。</div>
			<div>2. 返回一个包含两个值的数组，内容分别为：当前的seaech参数、更新search的函数。</div>

			<LazyLoadImage
				// effect="blur"
				placeholderSrc={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
				src={img4}
				height={400}
				width={'100%'}
				threshold={-300}
			/>

			<img src={img5} alt="" />
			<div>useLocation()</div>
			<div>1. 作用：获取当前 location 信息，对标5.x中的路由组件的`location`属性。</div>
			<img src={img6} alt="" />
			<img src={img7} alt="" />
			<div>useMatch()</div>
			<div>1. 作用：返回当前匹配信息，对标5.x中的路由组件的`match`属性。</div>
			<img src={img8} alt="" />
		</Icard>
	);
};

export default MyUseRouter;
