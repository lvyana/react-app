/**
 * @file forWardRef
 * @author ly
 * @createDate 2020年11月7日
 */
import React, { FC, forwardRef, Ref, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Icard from '@/antdComponents/iCard';
import Button from 'antd/es/button';

type OnLoginHandler = {
	login: () => void;
};

type Ordinary = {
	text?: string;
	cloneEl: any;
};
// 1、ref 不会透传
// 2、函数组件是没有实例 需要转发到dom上

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IforwardRef = () => {
	const ordinaryRef = useRef<Ordinary | null>(null);

	const onOrdinary = () => {
		ordinaryRef.current?.cloneEl();
	};

	const onLoginHandler = useRef<OnLoginHandler | null>(null);

	const onLogin = () => {
		onLoginHandler.current?.login();
	};

	return (
		<Icard>
			<Button type="primary" onClick={onOrdinary}>
				普通转发ref
			</Button>
			<OrdinaryForWard ref={ordinaryRef}></OrdinaryForWard>
			<Button type="primary" onClick={onLogin}>
				登录
			</Button>
			<LoginHoc ref={onLoginHandler}></LoginHoc>
		</Icard>
	);
};

export default IforwardRef;

// 普通转发
const OrdinaryForWard = forwardRef<Ordinary | null>((props, ref) => {
	const el = useRef<HTMLDivElement | null>(null);

	useImperativeHandle(ref, () => {
		return {
			text: el.current?.innerText,
			cloneEl: () => {
				if (el.current) {
					el.current.innerText = '普通转发ref中....';
				}
			}
		};
	});
	return <div ref={el}>普通转发ref</div>;
});
OrdinaryForWard.displayName = 'OrdinaryForWard';

// HOC转发
const hocLoginComponent = (Component: FC<{ onLoginHandler: Ref<OnLoginHandler> }>) => {
	const LoginComponent = forwardRef<OnLoginHandler>((props, ref) => {
		// 做操作
		return <Component onLoginHandler={ref}></Component>;
	});
	LoginComponent.displayName = 'hocForWardRefCom';
	return LoginComponent;
};

const Login: FC<{ onLoginHandler: Ref<OnLoginHandler> }> = ({ onLoginHandler }) => {
	const el = useRef<HTMLDivElement | null>(null);

	useImperativeHandle(
		onLoginHandler,
		() => {
			return {
				login: () => {
					// console.log(el.current?.innerText);
					if (el.current) {
						el.current.innerText = '登录中....';
					}
				}
			};
		},
		[]
	);
	return <div ref={el}>未登录</div>;
};

const LoginHoc = hocLoginComponent(Login);
