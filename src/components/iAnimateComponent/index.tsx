import React, { FC, useState, useRef } from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ainimateCoponentStyle from './index.module.less';
import { useWidth } from '@/useHooks/useScreenSize';
import { UpOutlined } from '@ant-design/icons';
import Icard from '@/components/iCard';

/**
 * @parmas children 子组件
 */
interface AnimateComponentProps {
	children: React.ReactNode;
}
/**
 *
 * @props  AnimateComponentProps
 * @returns 表单动画
 */
const AnimateComponent: FC<AnimateComponentProps> = ({ children }) => {
	const [flag, setflag] = useState(true);
	const onMouseEnter = () => {
		setflag(false);
	};

	const onMouseLeave = () => {
		setflag(true);
	};

	return (
		<div className={ainimateCoponentStyle.animateComponentPosition}>
			<div style={{ textAlign: 'center', display: flag ? 'block' : 'none' }}>
				<Button shape="circle" icon={<SearchOutlined />} onClick={onMouseEnter} />
			</div>

			<div className="animate__animated animate__backInDown" style={{ display: flag ? 'none' : 'block' }}>
				<Icard className={`Box-Shadow`}>
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
