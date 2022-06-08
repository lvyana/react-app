/// <reference types="react-scripts" />
declare module 'nprogress';
declare module 'react-lazy-load';

declare module '*.less' {
	const content: { [className: string]: string };
	export default content;
}
