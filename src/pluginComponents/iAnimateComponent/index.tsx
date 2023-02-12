/**
 * @file 动画组件
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC, useState, useRef } from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ainimateCoponentStyle from './index.module.scss';
import { useWidth } from '@/useHooks/useScreenSize';
import { UpOutlined } from '@ant-design/icons';
import Icard from '@/antdComponents/iCard';

/**
 * @param children 子组件
 */
interface AnimateComponentProps {
	children: React.ReactNode;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

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
				<Icard className={`box-shadow`}>
					{children}
					<div>
						<Button
							type="link"
							onClick={onMouseLeave}
							style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 0)' }}
							icon={<UpOutlined />}></Button>
					</div>
				</Icard>
			</div>
		</div>
	);
};
export default AnimateComponent;
