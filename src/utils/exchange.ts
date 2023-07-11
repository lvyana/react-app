/**
 * @file 数组交换位子
 * @author ly
 * @createDate 2023年7月11日
 */

/**
 * @param array 数组交换位子
 * @param x 原位置
 * @param y 要交换的位置
 */
export const arrIndexExchange = <T>(array: T, x: number, y: number): T => {
	const arr = JSON.parse(JSON.stringify(array));
	arr.splice(y, 0, ...arr.splice(x, 1));
	return arr;
};
