import request from '@/api/request';

/**
 * 接口参数(/expenses/tabelData)
 * @param name 姓名
 * @param age 年龄
 * @param status 状态
 * @param pageSize 页数
 * @param pageNum 页码
 */
export interface TabelDataParams {
	name: string;
	age: string;
	status: '1' | '2';
	pageSize: number;
	pageNum: number;
}

/**
 * 接口返回(/expenses/tabelData)
 * @param name 姓名
 * @param age 年龄
 * @param weight 体重
 * @param height 身高
 */
export interface TabelDataResponse {
	key: string;
	name: string;
	age: number;
	weight: number;
	height: number;
}

// 查询表格数据
export const tabelData = (data: TabelDataParams) => {
	return request<TabelDataParams, TabelDataResponse[]>({
		url: '/expenses/tabelData',
		method: 'post',
		data
	});
};
