/**
 * @file uuid生成id
 * @author ly
 * @createData 2020年4月27日
 */
import { v4 as uuidv4 } from 'uuid';

const getKey = (): string => {
	return uuidv4();
};
export default getKey;
