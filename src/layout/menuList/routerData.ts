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
						title: 'MyUseState',
						path: '/react/hooks/myUseState',
						icon: 'icon-kongjian'
					},
					{
						title: 'MyUseEffect',
						path: '/react/hooks/myUseEffect',
						icon: 'icon-fenxiangerweima'
					},
					{
						title: 'MyUseLayoutEffect',
						path: '/react/hooks/myUseLayoutEffect',
						icon: 'icon-wodemaidan'
					},
					{
						title: 'MyUseReducer',
						path: '/react/hooks/myUseReducer',
						icon: 'icon-gouwu'
					},
					{
						title: 'MyUseContext',
						path: '/react/hooks/myUseContext',
						icon: 'icon-gouwu'
					},
					{
						title: 'MyUseMemo',
						path: '/react/hooks/myUseMemo',
						icon: 'icon-zuji'
					},
					{
						title: 'MyUseCallback',
						path: '/react/hooks/myUseCallback',
						icon: 'icon-ditu'
					},
					{
						title: 'MyUseRef',
						path: '/react/hooks/myUseRef',
						icon: 'icon-youhuiquan'
					},
					{
						title: 'MySuspense',
						path: '/react/hooks/mySuspense',
						icon: 'icon-dingdan'
					},
					{
						title: 'MyForwardRef',
						path: '/react/hooks/myForwardRef',
						icon: 'icon-paimai'
					}
				]
			},
			{
				title: 'Rtk',
				path: '/react/rtk',
				icon: 'icon-xinpin'
			}
		]
	},
	{
		title: 'Router',
		path: '/router',
		icon: 'icon-jiushui',
		children: [
			{
				title: 'RouterDemo',
				path: '/router/routerDemo',
				icon: 'icon-qiche'
			},
			{
				title: 'MyUseRouter',
				path: '/router/myUseRouter',
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
				path: '/plugin/demoGridLayout',
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
