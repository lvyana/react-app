/**
 * @name loading
 * @user ly
 * @date
 */
import React from 'react';
import style from './index.module.scss';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iloading = () => {
	return (
		<div className={style['cssload-loader']}>
			<div className={`${style['cssload-inner']} ${style['cssload-one']}`}></div>
			<div className={`${style['cssload-inner']} ${style['cssload-two']}`}></div>
			<div className={`${style['cssload-inner']} ${style['cssload-three']}`}></div>
		</div>
	);
};

export default Iloading;
