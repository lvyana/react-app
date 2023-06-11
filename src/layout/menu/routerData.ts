/**
 * @file 路由数据
 * @author ly
 * @createDate 2022年10月10日
 */
/**
 * @param title 标题
 * @param path 路径
 * @param icon 图标
 * @param show 显示、隐藏
 * @param children 子级
 */
export interface Router {
	title: string;
	path: string;
	icon?: string;
	show?: boolean;
	children?: Router[];
}

const menuList: Router[] = [
	{
		title: '首页',
		path: '/home',
		icon: 'icon-shouyexuanzhong'
	},
	{
		title: 'antd',
		path: '/antd',
		icon: 'icon-antdesign',
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
		icon: 'icon-React',
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
					},
					{
						title: 'useSyncExternalStore',
						path: '/react/hooks/useSyncExternalStore',
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
		icon: 'icon-icon_luyouqi',
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
		icon: 'icon-plugin',
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
	{
		title: '文档',
		path: '/document',
		icon: 'icon-wenbenwendang-txt',
		children: [
			{
				title: 'volta',
				path: '/document/volta',
				icon: 'icon-qiche'
			},
			{
				title: 'createReactApp',
				path: '/document/createReactApp',
				icon: 'icon-qiche'
			},
			{
				title: 'md语法',
				path: '/document/markdown',
				icon: 'icon-xinpin'
			}
		]
	},
	{
		title: '个人中心',
		path: '/mycenter',
		icon: 'icon-gerenzhongxin'
	},
	// 不显示在菜单中中
	{
		title: '消息中心',
		path: '/messgeCenter',
		show: false
	}
];

export default menuList;
