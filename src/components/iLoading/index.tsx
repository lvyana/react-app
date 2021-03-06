/**
 *	@name 实现Loading
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { ReactNode, FC } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './index.module.less';

export const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

/**
 * loading 状态
 * children 子集内容
 */
interface Iprops {
	loading?: boolean;
	children?: ReactNode | null;
}
const Loading: FC<Iprops> = ({ children, loading }) => {
	// 判断 children 是否空对象
	return typeof loading === 'boolean' ? (
		<Spin indicator={antIcon} spinning={loading} delay={200}>
			{children}
		</Spin>
	) : (
		<div className={styles['Loading-Example']}>
			<Spin indicator={antIcon} delay={200} style={{ backgroundColor: '#f0f2f5' }}></Spin>
		</div>
	);
};

export default Loading;
