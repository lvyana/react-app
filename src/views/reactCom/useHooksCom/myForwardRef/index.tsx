/**
 * 	@name forWardRef
 *  @user ly
 *  @data 日期：2020年11月7日
 */
import React, { forwardRef, LegacyRef, useEffect, useRef } from 'react';

// 1、ref 不会透传
// 2、函数组建是没有实例 需要转发到dom上

const MyForwardRef = () => {
	const ordinary = useRef<HTMLDivElement>(null);

	useEffect(() => {
		console.log(ordinary.current);

		console.log(hoc.current);
	}, []);

	const hoc = useRef<HTMLDivElement>(null);
	return (
		<div>
			<OrdinaryForWard ref={ordinary}></OrdinaryForWard>
			<LoginHoc ref={hoc}></LoginHoc>
		</div>
	);
};

export default MyForwardRef;

// 普通转发
const OrdinaryForWard = forwardRef<HTMLDivElement>((props, ref) => {
	return <div ref={ref}>普通转发ref</div>;
});
OrdinaryForWard.displayName = 'OrdinaryForWard';

// HOC转发
const hocForWardRef = (Component: ({ hoc }: { hoc: LegacyRef<HTMLDivElement> }) => JSX.Element) => {
	class LogCom extends React.Component<{ hoc: LegacyRef<HTMLDivElement> }> {
		constructor(props: { hoc: LegacyRef<HTMLDivElement> }) {
			super(props);
		}
		render(): React.ReactNode {
			const { hoc } = this.props;
			return <Component hoc={hoc}></Component>;
		}
	}
	const hocForWardRefCom = forwardRef<HTMLDivElement>((props, ref) => <LogCom {...props} hoc={ref}></LogCom>);
	hocForWardRefCom.displayName = 'hocForWardRefCom';
	return hocForWardRefCom;
};

const Login = ({ hoc }: { hoc: LegacyRef<HTMLDivElement> }) => {
	return <div ref={hoc}>登录</div>;
};

const LoginHoc = hocForWardRef(Login);
