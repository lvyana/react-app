import { v4 as uuidv4 } from 'uuid';
/**
 *
 * 获取唯一key
 * uuid生成
 */
const getKey = (): string => {
	return uuidv4();
};
export default getKey;
