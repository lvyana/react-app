/**
 * @file 动画组件
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC, useState, useRef } from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Point, motion } from 'framer-motion';
import { UpOutlined } from '@ant-design/icons';
import Icard from '@/antdComponents/iCard';

/**
 * @param children 子组件
 */
interface AnimateComponentProps {
	children: React.ReactNode;
}

const animateComponentIcon: React.CSSProperties = {
	position: 'fixed',
	top: 138,
	right: 200,
	zIndex: 10,
	transform: 'translate(-50%, 0)'
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const AnimateComponent: FC<AnimateComponentProps> = ({ children }) => {
	const animateComponentPosition: React.CSSProperties = {
		position: 'fixed',
		top: 80,
		left: 0,
		width: '100%',
		zIndex: 10,
		padding: 20
	};

	const dragOffset = useRef<Point | null>();
	const dragCurrentOffset = useRef<Point | null>();

	const [flag, setflag] = useState(true);
	const onShow = () => {
		if (dragOffset.current) {
			return setTimeout(() => {
				dragOffset.current = null;
			}, 100);
		}
		setflag(false);
	};

	const onHidden = () => {
		setflag(true);
	};

	return (
		<>
			<motion.div
				onDrag={(e, info) => {
					dragOffset.current = info.offset;
					dragCurrentOffset.current = info.point;
					e.preventDefault();
					e.stopPropagation();
				}}
				onClick={onShow}
				drag
				dragElastic={0}
				dragConstraints={{
					top: -50,
					left: -200,
					right: 50,
					bottom: 200
				}}
				style={{ display: flag ? 'block' : 'none', textAlign: 'center', ...animateComponentIcon }}>
				<Button shape="circle" icon={<SearchOutlined />} />
			</motion.div>

			{!flag && (
				<div style={animateComponentPosition}>
					<motion.div style={{ opacity: 0 }} animate={{ opacity: 1, y: 'auto' }} transition={{ ease: 'linear', duration: 0.3 }}>
						<Icard className={`shadow-2xl`}>
							{children}
							<div>
								<Button
									type="link"
									onClick={onHidden}
									style={{ position: 'sticky', bottom: 0, left: '50%', transform: 'translate(-50%, 0)' }}
									icon={<UpOutlined />}></Button>
							</div>
						</Icard>
					</motion.div>
				</div>
			)}
		</>
	);
};
export default AnimateComponent;
