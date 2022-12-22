/**
 * @name 路由数据
 * @user ly
 * @data 2022年10月10日
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
				title: 'MyUseState',
				path: '/react/myUseState',
				icon: 'icon-kongjian'
			},
			{
				title: 'MyUseEffect',
				path: '/react/myUseEffect',
				icon: 'icon-fenxiangerweima'
			},
			{
				title: 'MyUseLayoutEffect',
				path: '/react/myUseLayoutEffect',
				icon: 'icon-wodemaidan'
			},
			{
				title: 'MyUseReducer',
				path: '/react/myUseReducer',
				icon: 'icon-gouwu'
			},
			{
				title: 'MyUseContext',
				path: '/react/myUseContext',
				icon: 'icon-gouwu'
			},
			{
				title: 'MyUseMemo',
				path: '/react/myUseMemo',
				icon: 'icon-zuji'
			},
			{
				title: 'MyUseCallback',
				path: '/react/myUseCallback',
				icon: 'icon-ditu'
			},
			{
				title: 'MyUseRef',
				path: '/react/myUseRef',
				icon: 'icon-youhuiquan'
			},
			{
				title: 'MySuspense',
				path: '/react/mySuspense',
				icon: 'icon-dingdan'
			},
			{
				title: 'MyForwardRef',
				path: '/react/myForwardRef',
				icon: 'icon-paimai'
			},
			{
				title: 'Rtk',
				path: '/react/Rtk',
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
				title: 'Player',
				path: '/plugin/player',
				icon: 'icon-shangcheng'
			},
			{
				title: 'gridLayout',
				path: '/plugin/demoGridLayout',
				icon: 'icon-jiaoyu'
			},
			{
				title: 'Responsive',
				path: '/plugin/responsive',
				icon: 'icon-shenghuo'
			},
			{
				title: 'I18n',
				path: '/plugin/i18n',
				icon: 'icon-xinpin'
			},
			{
				title: 'dnd',
				path: '/plugin/dnd',
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
