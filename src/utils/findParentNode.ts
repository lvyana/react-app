/**
 * @file 查找某个父级节点
 * @author ly
 * @createDate 2023年7月11日
 */

/**
 * @method 查找某个父级节点
 * @param menuList 数组集合
 * @param targetPath 要查找的节点的名称
 * @param parent 查询到的父节点
 */
type FindNode<T> = (menuList: T[], targetPath: string, parent?: T | null) => void;

const findParentNode = <T>(menuList: T[], targetPath: string, path: keyof T, children: keyof T): T | null => {
	let parentNode: T | null = null;

	const findNode: FindNode<T> = (menuList, targetPath, parent = null) => {
		for (let i = 0; i < menuList.length; i++) {
			const node = menuList[i];

			if (node[path] === targetPath) {
				parentNode = parent;
				return;
			}

			if (node[children] && Array.isArray(node[children])) {
				findNode(node[children] as T[], targetPath, node);
			}
		}
	};

	findNode(menuList, targetPath);
	return parentNode;
};

// 示例：查找 '/react/hooks/useState' 的父节点
// const parentNode = findParentNode(menuList, '/react/hooks/useState');
// console.log(parentNode);

export default findParentNode;
