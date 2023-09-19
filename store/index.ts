/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description:
 */
import { proxy } from "valtio";
console.log(333111);

// 创建状态对象
export const store = proxy({
  platInfo: {},
});
