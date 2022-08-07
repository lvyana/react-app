import React from 'react';
import { useTranslation, Trans, Translation } from 'react-i18next';

const I18n = () => {
	let { t, i18n } = useTranslation();

	return (
		<div>
			<div>
				<div>
					<button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>{i18n.language === 'en' ? 'zh' : 'en'}</button>
				</div>

				{/* 3种常用使用方式 */}
				<h1>{t('home')}</h1>
				<h2>
					<Trans>home</Trans>
				</h2>
				<Translation>{(t) => <h3>{t('home')}</h3>}</Translation>
			</div>
		</div>
	);
};

export default I18n;
