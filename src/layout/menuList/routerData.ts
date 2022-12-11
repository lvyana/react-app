/**
 * @name 路由数据
 * @user ly
 * @data 2022年10月10日
 */
import type { Router } from './index';

const menuList: Router[] = [
	{
		title: 'antd',
		path: '/antd',
		key: '3',
		icon: 'icon-baohu',
		children: [
			{
				title: 'expenses',
				path: '/antd/expenses',
				key: '1',
				icon: 'icon-yinle'
			},
			{
				title: '动态表单',
				path: '/antd/dynamicform',
				key: '2',
				icon: 'icon-chongzhizhongxin'
			}
		]
	},

	{
		title: 'react',
		path: '/react',
		key: '3',
		icon: 'icon-qianbao',
		children: [
			{
				title: 'MyUseState',
				path: '/react/MyUseState',
				key: '19',
				icon: 'icon-kongjian'
			},
			{
				title: 'MyUseEffect',
				path: '/react/MyUseEffect',
				key: '20',
				icon: 'icon-fenxiangerweima'
			},
			{
				title: 'MyUseLayoutEffect',
				path: '/react/MyUseLayoutEffect',
				key: '222',
				icon: 'icon-wodemaidan'
			},
			{
				title: 'MyUseReducer',
				path: '/react/MyUseReducer',
				key: '21',
				icon: 'icon-gouwu'
			},
			{
				title: 'MyUseContext',
				path: '/react/MyUseContext',
				key: '22',
				icon: 'icon-gouwu'
			},
			{
				title: 'MyUseMemo',
				path: '/react/MyUseMemo',
				key: '23',
				icon: 'icon-zuji'
			},
			{
				title: 'MyUseCallback',
				path: '/react/MyUseCallback',
				key: '23',
				icon: 'icon-ditu'
			},
			{
				title: 'MyUseRef',
				path: '/react/MyUseRef',
				key: '24',
				icon: 'icon-youhuiquan'
			},
			{
				title: 'MySuspense',
				path: '/react/MySuspense',
				key: '24',
				icon: 'icon-dingdan'
			},
			{
				title: 'MyForwardRef',
				path: '/react/MyForwardRef',
				key: '26',
				icon: 'icon-paimai'
			},
			{
				title: 'Rtk',
				path: '/react/Rtk',
				key: '25',
				icon: 'icon-xinpin'
			}
		]
	},
	{
		title: 'Router',
		path: '/router',
		key: '99',
		icon: 'icon-jiushui',
		children: [
			{
				title: 'RouterDemo',
				path: '/router/RouterDemo',
				key: '4',
				icon: 'icon-qiche'
			},
			{
				title: 'MyUseRouter',
				path: '/router/MyUseRouter',
				key: '25',
				icon: 'icon-shangou'
			}
		]
	},
	{
		title: 'plugin',
		path: '/plugin',
		key: '3',
		icon: 'icon-yiliao',
		children: [
			{
				title: '富文本',
				path: '/plugin/richtextedit',
				key: '4',
				icon: 'icon-huodong'
			},
			{
				title: 'pdf',
				path: '/plugin/pdf',
				key: '5',
				icon: 'icon-biaoshu'
			},

			{
				title: 'Player',
				path: '/plugin/Player',
				key: '8',
				icon: 'icon-shangcheng'
			},
			{
				title: 'gridLayout',
				path: '/plugin/DemoGridLayout',
				key: '8',
				icon: 'icon-jiaoyu'
			},
			{
				title: 'Responsive',
				path: '/plugin/Responsive',
				key: '8',
				icon: 'icon-shenghuo'
			},
			{
				title: 'I18n',
				path: '/plugin/I18n',
				key: '8',
				icon: 'icon-xinpin'
			}
		]
	},

	// 不显示在菜单中中
	{
		title: '个人中心',
		path: '/mycenter',
		key: '6',
		show: false
	},
	{
		title: '消息中心',
		path: '/messgeCenter',
		key: '7',
		show: false
	}
];
export type { Router };
export default menuList;
