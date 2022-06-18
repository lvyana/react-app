import React, { FC, useState, useRef } from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ainimateCoponentStyle from './index.module.less';
import { useWidth } from '@/useHooks/useScreenSize';
import { UpOutlined } from '@ant-design/icons';
import Icard from '@/components/iCard';

interface AnimateComponentProps {
	children: React.ReactNode;
}
const AnimateComponent: FC<AnimateComponentProps> = ({ children }) => {
	let timer = useRef<NodeJS.Timeout>();

	const [flag, setflag] = useState(true);
	const onMouseEnter = () => {
		if (timer.current) clearTimeout(timer.current);
		setTimeout(() => {
			setflag(false);
		}, 300);
	};

	const onMouseLeave = () => {
		// timer.current = setTimeout(() => {
		setflag(true);
		// }, 1500);
	};

	return (
		<div className={ainimateCoponentStyle.animateComponentPosition}>
			<div style={{ textAlign: 'center', display: flag ? 'block' : 'none' }}>
				<Button shape="circle" icon={<SearchOutlined style={{ color: '#6454ef' }} />} onClick={onMouseEnter} />
			</div>

			<div
				// onMouseEnter={onMouseEnter}
				// onMouseLeave={onMouseLeave}
				className="animate__animated animate__backInDown"
				style={{ display: flag ? 'none' : 'block' }}>
				<Icard styles={{ boxShadow: '0 3px 6px 0 rgb(195 195 195)' }}>
					{children}
					<div>
						<Button
							type="link"
							onClick={onMouseLeave}
							style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 0)' }}>
							<UpOutlined />
						</Button>
					</div>
				</Icard>
			</div>
		</div>
	);
};
export default AnimateComponent;
