// 常规运行时错误，可以捕获 ✅
// 语法错误，不能捕获 ❌
// 异步错误，可以捕获 ✅
// 资源错误，不能捕获 ❌
window.onerror = function (message, source, lineno, colno, error) {
	console.log({ message, source, lineno, colno, error });
};

// 图片、script、css加载错误，都能被捕获 ✅
// new Image错误，不能捕获 ❌
// fetch错误，不能捕获 ❌
window.addEventListener(
	'error',
	(error) => {
		console.log(error);
	},
	true
);

// 全局统一处理Promise
window.addEventListener('unhandledrejection', function (e) {
	console.log(e);
});

// 渲染时间
function getTiming() {
	setTimeout(() => {
		let t = window.performance.timing;
		let performanceInfo = [
			{
				key: 'Redirect',
				desc: '网页重定向的耗时',
				'value(ms)': t.redirectEnd - t.redirectStart
			},
			{
				key: 'AppCache',
				desc: '检查本地缓存的耗时',
				'value(ms)': t.domainLookupStart - t.fetchStart
			},
			{
				key: 'DNS',
				desc: 'DNS查询的耗时',
				'value(ms)': t.domainLookupEnd - t.domainLookupStart
			},
			{
				key: 'TCP',
				desc: 'TCP链接的耗时',
				'value(ms)': t.connectEnd - t.connectStart
			},
			{
				key: 'Waiting(TTFB)',
				desc: '从客户端发起请求到接收响应的时间',
				'value(ms)': t.responseStart - t.requestStart
			},
			{
				key: 'Content Download',
				desc: '下载服务端返回数据的时间',
				'value(ms)': t.responseEnd - t.responseStart
			},
			{
				key: 'HTTP Total Time',
				desc: 'http请求总耗时',
				'value(ms)': t.responseEnd - t.requestStart
			},
			{
				key: 'First Time',
				desc: '首包时间',
				'value(ms)': t.responseStart - t.domainLookupStart
			},
			{
				key: 'White screen time',
				desc: '白屏时间',
				'value(ms)': t.responseEnd - t.fetchStart
			},
			{
				key: 'Time to Interactive(TTI)',
				desc: '首次可交互时间',
				'value(ms)': t.domInteractive - t.fetchStart
			},
			{
				key: 'DOM Parsing',
				desc: 'DOM 解析耗时',
				'value(ms)': t.domInteractive - t.responseEnd
			},
			{
				key: 'DOMContentLoaded',
				desc: 'DOM 加载完成的时间',
				'value(ms)': t.domInteractive - t.navigationStart
			},
			{
				key: 'Loaded',
				desc: '页面load的总耗时',
				'value(ms)': t.loadEventEnd - t.navigationStart
			}
		];

		console.table(performanceInfo);
	}, 0);
}

window.addEventListener('load', getTiming, false);
