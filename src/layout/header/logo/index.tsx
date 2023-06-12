/**
 * @file 头部logo
 * @author ly
 * @createDate 2023年6月12日
 */
import React from 'react';
import menuLogo from '@/assets/images/menu.png';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export const Logo = () => {
	const LayoutLogo: React.CSSProperties = {
		width: '64px',
		height: '64px',
		backgroundImage: `url(${menuLogo})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		// background: `${token.colorBgBase} url(${menuLogo}) no-repeat center`,
		backgroundSize: 'contain'
	};
	return <div style={LayoutLogo} className="cursor-pointer" />;
};

export default Logo;
