/**
 * @file forWardRef
 * @author ly
 * @createDate 2020年11月7日
 */
import React, { FC, forwardRef, Ref, useEffect, useImperativeHandle, useRef } from 'react';
import Icard from '@/antdComponents/iCard';

type OnLoginHandler = {
	login: () => void;
};

type Ordinary = {
	text?: string;
	cloneEl: any;
};
// 1、ref 不会透传
// 2、函数组件是没有实例 需要转发到dom上

const MyForwardRef = () => {
	const ordinary = useRef<Ordinary | null>(null);

	useEffect(() => {
		// console.log(ordinary?.current?.cloneEl());
		// console.log(onLoginHandler);
	}, []);

	const onLoginHandler = useRef<OnLoginHandler | null>(null);
	return (
		<Icard>
			<OrdinaryForWard ref={ordinary}></OrdinaryForWard>
			<LoginHoc ref={onLoginHandler}></LoginHoc>
			<div onClick={() => ordinary?.current?.cloneEl()}>切换</div>
		</Icard>
	);
};

export default MyForwardRef;

// 普通转发
const OrdinaryForWard = forwardRef<Ordinary | null>((props, ref) => {
	const el = useRef<HTMLDivElement | null>(null);

	useImperativeHandle(ref, () => {
		return {
			text: el.current?.innerText,
			cloneEl: () => {
				if (el.current) {
					el.current.innerText = '我变了';
				}
			}
		};
	});
	return <div ref={el}>普通转发ref</div>;
});
OrdinaryForWard.displayName = 'OrdinaryForWard';

// HOC转发
const hocForWardRef = (Component: FC<{ onLoginHandler: Ref<OnLoginHandler> }>) => {
	const LogCom: FC<{ onLoginHandler: Ref<OnLoginHandler> }> = ({ onLoginHandler }) => {
		return <Component onLoginHandler={onLoginHandler}></Component>;
	};

	const hocForWardRefCom = forwardRef<OnLoginHandler>((props, ref) => {
		return <LogCom {...props} onLoginHandler={ref}></LogCom>;
	});
	hocForWardRefCom.displayName = 'hocForWardRefCom';
	return hocForWardRefCom;
};

const Login: FC<{ onLoginHandler: Ref<OnLoginHandler> }> = ({ onLoginHandler }) => {
	const el = useRef<HTMLDivElement | null>(null);

	useImperativeHandle(
		onLoginHandler,
		() => {
			return {
				login: () => {
					// console.log(el.current?.innerText);
				}
			};
		},
		[]
	);
	return <div ref={el}>登录</div>;
};

const LoginHoc = hocForWardRef(Login);
