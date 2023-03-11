/**
 * @file createPortal
 * @author ly
 * @createDate 2023年3月10日
 */
import React, { FC, ReactPortal, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * createPortal(child, container)的入参：
 * child：任何可渲染的子元素
 * container：是一个DOM元素
 */

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const MyCreatePortal = () => {
	return (
		<div>
			<div> createPortal(child, container)的入参： child：任何可渲染的子元素 container：是一个DOM元素 </div>
			hello
			<Child>
				<div>挂载到child身上</div>
			</Child>
		</div>
	);
};

const Child: FC<{ children: React.ReactNode }> = ({ children }) => {
	const [com, setCom] = useState<ReactPortal>();

	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setCom(createPortal(children, ref.current as HTMLDivElement));
	}, []);

	return (
		<>
			{com}
			<div ref={ref} className="bottom-1 border-cyan-500 border-solid">
				Child
			</div>
		</>
	);
};
export default MyCreatePortal;
