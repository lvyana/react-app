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
	if (typeof loading === 'boolean') {
		return (
			<Spin indicator={antIcon} spinning={loading} delay={200}>
				{children}
			</Spin>
		);
	} else {
		return (
			<div className={styles['Loading-Example']}>
				<Spin indicator={antIcon} delay={200} style={{ backgroundColor: '#fff' }}></Spin>
			</div>
		);
	}
};

export default Loading;
