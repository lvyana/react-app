/**
 * @file 飞书应用自动登录
 * @author ly
 * @createDate
 */
import React, { useEffect } from 'react';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Feishu = () => {
	useEffect(() => {
		getCode();
	}, []);

	const getCode = async () => {
		if (!window.h5sdk) {
			console.log('invalid h5sdk please open in feishu');
			// alert('please open in feishu');
			return;
		}
		console.log(window.tt.requestAuthCode);

		// 调用 JSAPI tt.requestAuthCode 获取 authorization code
		window.tt.requestAuthCode({
			appId: 'cli_a40af5fa3039500b',
			// 获取成功后的回调
			success(res) {
				console.log(res);
			},
			fail(err) {
				console.log(`getAuthCode failed, err:`, JSON.stringify(err));
			}
		});
	};
	return <div>index</div>;
};

export default Feishu;
