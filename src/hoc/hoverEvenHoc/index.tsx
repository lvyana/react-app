/**
 * @file hoc处理hover 背景样式
 * @author ly
 * @createDate 2023年3月24日
 */
import React, { useState } from 'react';
import useThemeHooks from '@/config/theme/useThemeHooks';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const hoverEvenHoc = (component: React.ReactElement) => {
	const HoverEvenHoc = () => {
		const { token } = useThemeHooks();

		const [isHover, setIsHover] = useState(false);

		const handleMouse = () => {
			if (isHover) return;
			setIsHover(true);
		};

		const handleMouseLeave = () => {
			setIsHover(false);
		};

		return (
			<>
				{React.cloneElement(component, {
					style: {
						...component.props.style,
						backgroundColor: isHover ? token.colorPrimaryBg : ''
					},
					onMouseMove: handleMouse,
					onMouseLeave: handleMouseLeave,
					onDragEnd: handleMouseLeave
				})}
			</>
		);
	};
	return <HoverEvenHoc></HoverEvenHoc>;
};

export default hoverEvenHoc;
