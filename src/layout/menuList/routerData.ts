/**
 * @file 路由数据
 * @author ly
 * @createDate 2022年10月10日
 */
import type { Router } from './index';

const menuList: Router[] = [
	{
		title: '首页',
		path: '/home',
		icon: 'icon-baohu'
	},
	{
		title: 'antd',
		path: '/antd',
		icon: 'icon-baohu',
		children: [
			{
				title: 'expenses',
				path: '/antd/expenses',
				icon: 'icon-yinle'
			},
			{
				title: '动态表单',
				path: '/antd/dynamicform',
				icon: 'icon-chongzhizhongxin'
			}
		]
	},

	{
		title: 'react',
		path: '/react',
		icon: 'icon-qianbao',
		children: [
			{
				title: 'hooks',
				path: '/react/hooks',
				icon: 'icon-qianbao',
				children: [
					{
						title: 'useState',
						path: '/react/hooks/useState',
						icon: 'icon-kongjian'
					},
					{
						title: 'useInsertionEffect',
						path: '/react/hooks/useInsertionEffect',
						icon: 'icon-wodemaidan'
					},
					{
						title: 'useLayoutEffect',
						path: '/react/hooks/useLayoutEffect',
						icon: 'icon-wodemaidan'
					},
					{
						title: 'useEffect',
						path: '/react/hooks/useEffect',
						icon: 'icon-fenxiangerweima'
					},

					{
						title: 'useReducer',
						path: '/react/hooks/useReducer',
						icon: 'icon-gouwu'
					},
					{
						title: 'useContext',
						path: '/react/hooks/useContext',
						icon: 'icon-gouwu'
					},
					{
						title: 'useMemo',
						path: '/react/hooks/useMemo',
						icon: 'icon-zuji'
					},
					{
						title: 'useCallback',
						path: '/react/hooks/useCallback',
						icon: 'icon-ditu'
					},
					{
						title: 'useRef',
						path: '/react/hooks/useRef',
						icon: 'icon-youhuiquan'
					},

					{
						title: 'forwardRef',
						path: '/react/hooks/forwardRef',
						icon: 'icon-paimai'
					},
					{
						title: 'useImperativeHandle',
						path: '/react/hooks/useImperativeHandle',
						icon: 'icon-paimai'
					},
					{
						title: 'useTransition',
						path: '/react/hooks/useTransition',
						icon: 'icon-paimai'
					},
					{
						title: 'useDeferredValue',
						path: '/react/hooks/useDeferredValue',
						icon: 'icon-paimai'
					}
				]
			},
			{
				title: 'reactDom',
				path: '/react/reactDom',
				icon: 'icon-xinpin',
				children: [
					{
						title: 'createPortal',
						path: '/react/reactDom/createPortal',
						icon: 'icon-xinpin'
					},
					{
						title: 'flushSync',
						path: '/react/reactDom/flushSync',
						icon: 'icon-xinpin'
					},
					{
						title: 'Suspense',
						path: '/react/reactDom/suspense',
						icon: 'icon-dingdan'
					}
				]
			},
			{
				title: 'reduxtoolkit',
				path: '/react/reduxtoolkit',
				icon: 'icon-xinpin'
			}
		]
	},
	{
		title: 'router',
		path: '/router',
		icon: 'icon-jiushui',
		children: [
			{
				title: 'routerDemo',
				path: '/router/routerDemo',
				icon: 'icon-qiche'
			},
			{
				title: 'routerInfo',
				path: '/router/routerInfo',
				icon: 'icon-shangou'
			}
		]
	},
	{
		title: 'plugin',
		path: '/plugin',
		icon: 'icon-yiliao',
		children: [
			{
				title: '富文本',
				path: '/plugin/richtextedit',
				icon: 'icon-huodong'
			},
			{
				title: 'pdf',
				path: '/plugin/pdf',
				icon: 'icon-biaoshu'
			},

			{
				title: '视频',
				path: '/plugin/player',
				icon: 'icon-shangcheng'
			},
			{
				title: 'grid布局',
				path: '/plugin/gridLayout',
				icon: 'icon-jiaoyu'
			},
			{
				title: '响应式',
				path: '/plugin/responsive',
				icon: 'icon-shenghuo'
			},
			{
				title: '语言切换',
				path: '/plugin/i18n',
				icon: 'icon-xinpin'
			},
			{
				title: '表单生成',
				path: '/plugin/dnd',
				icon: 'icon-xinpin'
			},
			{
				title: '数据切片',
				path: '/plugin/burst',
				icon: 'icon-xinpin'
			},
			{
				title: 'easyTyper',
				path: '/plugin/easyTyper',
				icon: 'icon-xinpin'
			}
		]
	},

	// 不显示在菜单中中
	{
		title: '个人中心',
		path: '/mycenter',
		show: false
	},
	{
		title: '消息中心',
		path: '/messgeCenter',
		show: false
	}
];
export type { Router };
export default menuList;
