/**
 * @file 数组查找某个子节点
 * @author ly
 * @createDate 2023年7月11日
 */

/**
 * @method 查找某个子节点
 * @param menuList 数组集合
 * @param key 要查找的节点的名称
 * @param value  要查找的节点的值或其他对应的值
 */
type FindNode = <T extends { children?: T[] }>(menuList: T[], key: keyof T, value: string) => T | null;

const findNode: FindNode = (menuList, key, value) => {
	for (let i = 0; i < menuList.length; i++) {
		const node = menuList[i];
		if (node[key] === value) {
			return node;
		}
		if (node.children) {
			const childNode = findNode(node.children, key, value);
			if (childNode) return childNode;
		}
	}
	return null;
};
//  // 使用示例
// const node1 = findNode(menuList, 'path', '/react/hooks/useState');
// const node2 = findNode(menuList, 'title', 'pdf');
// console.log(node1, node2);  // 输出对应的节点对象

export default findNode;
