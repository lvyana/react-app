/**
 * 
 * 获取唯一key
 * 
 */
const getKey=():string =>{
    return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
}
export default getKey