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
		<div className={style['container']}>
			<div className={style['loader']}>
				<div className={style['loader-dot']}></div>
				<div className={style['loader-dot']}></div>
				<div className={style['loader-dot']}></div>
				<div className={style['loader-dot']}></div>
				<div className={style['loader-dot']}></div>
				<div className={style['loader-dot']}></div>
				<div className={style['loader-text']}></div>
			</div>
		</div>
	);
};

export default Iloading;
