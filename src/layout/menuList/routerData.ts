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
		icon: 'icon-bingtu-huanxing',
		children: [
			{
				title: 'expenses',
				path: '/antd/expenses',
				key: '1',
				icon: 'icon-tiaoxingtu-duidie'
			},
			{
				title: '动态表单',
				path: '/antd/dynamicform',
				key: '2',
				icon: 'icon-bingtu-huanxing'
			}
		]
	},

	{
		title: 'react',
		path: '/react',
		key: '3',
		icon: 'icon-bingtu-huanxing',
		children: [
			{
				title: 'MyUseState',
				path: '/react/MyUseState',
				key: '19',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseEffect',
				path: '/react/MyUseEffect',
				key: '20',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseLayoutEffect',
				path: '/react/MyUseLayoutEffect',
				key: '222',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseReducer',
				path: '/react/MyUseReducer',
				key: '21',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseContext',
				path: '/react/MyUseContext',
				key: '22',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseMemo',
				path: '/react/MyUseMemo',
				key: '23',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseCallback',
				path: '/react/MyUseCallback',
				key: '23',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseRef',
				path: '/react/MyUseRef',
				key: '24',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MySuspense',
				path: '/react/MySuspense',
				key: '24',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyForwardRef',
				path: '/react/MyForwardRef',
				key: '26',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'Rtk',
				path: '/react/Rtk',
				key: '25',
				icon: 'icon-chuangyepeixunxiangmu'
			}
		]
	},
	{
		title: 'Router',
		path: '/router',
		key: '99',
		icon: 'icon-chuangyepeixunxiangmu',
		children: [
			{
				title: 'RouterDemo',
				path: '/router/RouterDemo',
				key: '4',
				icon: 'icon-chuangyepeixunxiangmu'
			},
			{
				title: 'MyUseRouter',
				path: '/router/MyUseRouter',
				key: '25',
				icon: 'icon-bingtu-huanxing'
			}
		]
	},
	{
		title: 'funCom',
		path: '/funCom',
		key: '3',
		icon: 'icon-bingtu-huanxing',
		children: [
			{
				title: '富文本',
				path: '/funCom/richtextedit',
				key: '4',
				icon: 'icon-chuangyepeixunxiangmu'
			},
			{
				title: 'pdf',
				path: '/funCom/pdf',
				key: '5',
				icon: 'icon-chuangyepeixunxiangmu'
			},

			{
				title: 'Player',
				path: '/funCom/Player',
				key: '8',
				icon: 'icon-chuangyepeixunxiangmu'
			},
			{
				title: 'gridLayout',
				path: '/funCom/DemoGridLayout',
				key: '8',
				icon: 'icon-chuangyepeixunxiangmu'
			},
			{
				title: 'Responsive',
				path: '/funCom/Responsive',
				key: '8',
				icon: 'icon-chuangyepeixunxiangmu'
			},
			{
				title: 'I18n',
				path: '/funCom/I18n',
				key: '8',
				icon: 'icon-chuangyepeixunxiangmu'
			}
		]
	},

	// 不显示在菜单中中
	{
		title: '个人中心',
		path: '/mycenter',
		key: '6',
		icon: 'icon-bingtu-huanxing',
		show: false
	}
];

export type { Router };
export default menuList;
