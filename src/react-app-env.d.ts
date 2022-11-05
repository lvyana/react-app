/// <reference types="react-scripts" />
declare module 'nprogress';
declare module 'react-lazy-load';
declare module 'jsencrypt/bin/jsencrypt.min';

declare module '*.scss' {
	const content: { [className: string]: string };
	export default content;
}
