/**
 * @file 英汉切换
 * @author ly
 * @createDate 2022年6月3日
 */
import React from 'react';
import { useTranslation, Trans, Translation } from 'react-i18next';
import Icard from '@/antdComponents/iCard';

const I18n = () => {
	let { t, i18n } = useTranslation();

	return (
		<Icard>
			<div>
				<button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>{i18n.language === 'en' ? 'zh' : 'en'}</button>
			</div>

			{/* 3种常用使用方式 */}
			<h1>{t('home')}</h1>
			<h2>
				<Trans>home</Trans>
			</h2>
			<Translation>{(t) => <h3>{t('home')}</h3>}</Translation>
		</Icard>
	);
};

export default I18n;
