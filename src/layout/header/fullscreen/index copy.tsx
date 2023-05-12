/**
 * @file 封装全屏
 * @author ly
 * @createDate 2020年4月27日
 */
import { useState, useEffect, ReactNode, useRef } from 'react';

interface FullscreenProps {
	children: React.ReactNode;
}

const Fullscreen = ({ children }: FullscreenProps) => {
	const fullscreenRef = useRef<HTMLDivElement>(null);

	const toggleFullscreen = () => {
		if (fullscreenRef.current) {
			if (document.fullscreenElement) {
				document.exitFullscreen();
			} else {
				fullscreenRef.current.requestFullscreen();
			}
		}
	};

	return (
		<div className="inline-block" ref={fullscreenRef} onClick={toggleFullscreen}>
			{children}
		</div>
	);
};

export default Fullscreen;
