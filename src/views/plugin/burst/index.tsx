import { Button } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const Burst = () => {
	const [list, setList] = useState<number[]>([]);
	const count = useRef(0);
	const time = useRef(0);

	const onGeneral = () => {
		let arr6 = Array.from({ length: 20000 }, (v, k) => k);
		setList(arr6);
	};

	useEffect(() => {
		count.current = list.length;
	}, [list]);

	const getArr = useCallback((length = 5000) => {
		if (count.current >= 100000) {
			time.current = Date.now() - time.current;
			console.log(time.current);

			return;
		}
		let arr6 = Array.from({ length }, (v, k) => k);
		setList((value) => {
			return [...value, ...arr6];
		});
		requestIdleCallback(
			() => {
				getArr(5000);
			},
			{
				timeout: 1500
			}
		);
	}, []);

	const onCallback = () => {
		console.log(Date.now());
		time.current = Date.now();
		getArr(5000);
	};
	return (
		<div style={{ height: 500, overflow: 'auto' }}>
			<div>
				<Button type="primary" onClick={onCallback}>
					优化渲染
				</Button>
				<Button type="primary" onClick={onGeneral}>
					普通渲染
				</Button>
				<Button
					type="primary"
					onClick={() => {
						setList([]);
					}}>
					清除数据
				</Button>
			</div>
			{list.map((item, index) => {
				return (
					<div style={{ border: '1px solid red' }} className="m-1" key={index}>
						{index}
					</div>
				);
			})}
		</div>
	);
};

export default Burst;
