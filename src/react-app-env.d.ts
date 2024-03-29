/// <reference types="react-scripts" />
declare module 'nprogress';
declare module 'react-lazy-load';
declare module 'jsencrypt/bin/jsencrypt.min';
declare module '*.pdf';
declare module '*.md';

declare module '*.scss' {
	const content: { [className: string]: string };
	export default content;
}

interface RequestAuthCodeParam {
	appId: string;
	success: (res: object) => void;
	fail: (err: Error) => void;
}
declare interface Window {
	h5sdk: object;
	tt: {
		requestAuthCode: (param: RequestAuthCodeParam) => void;
	};
}
