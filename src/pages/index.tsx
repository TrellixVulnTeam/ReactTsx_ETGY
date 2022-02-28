import React, { useEffect } from "react";
import { clearScreenDown } from "readline";
import IndexStyle from "../style/index.scss";
function Index() {
	useEffect(() => {
		// ts类型推断
		var ajaxs = "";
    
		// 使用ts
		var str: string = "我是ts字符串";
		var num: number = 100;
		var flag: boolean = true;
		var obj: object = {};
		// 元祖
		var arr: [string, number] = ["", 100];
		// 数组
		var strArr: (string | number)[] = ["", 1];
		// 只读数组
		var brr: ReadonlyArray<number> = [123];
		var nes: unknown = null;
		var res: void = undefined;
    // 任意类型 不能泛滥使用 
		var ans: any = "";
	
		// 自定义类型
		type tss = number | string | boolean;
		// 接口 规范控制数据格式
		interface obj {
			name?: string;
			age: number;
			readonly sex?: string;
			[propName: string]: any;
			say(): string;
		}
		var person: obj = {
			name: "钱宗泽",
			age: 22,
			say() {
				return "";
			},
		};
		// 接口控制函数
		interface fun {
			(x?: string): string;
		}

    function Evas (x) :fun{
      return x
    }
    Evas('100')

		// 参数默认值
		function cass(name: string, age: number = 23, ...items: any[]) {
			console.log(Array.from(arguments));
		}
		cass("typeScript", 26, "等不打天黑", "烟火不会太完美");

		// 类型推断 类型注解
		var codeType: string;
		codeType = "欢迎学习Ts";
		console.log("codeType: ", codeType);
		// 联合类型
		var crr: string | number = "";

		// 断言:类型断言,可以用来手动指定一个值的类型。

		// 进阶

		// Ts中的类
    
		interface contr {
			name: string;
			age?: number;
			readonly sex?: any;
		}

		class TyClass {
			name: string;
			age: number;
			sex?: any;
			constructor(pes: contr) {
				this.name = pes["name"];
				this.age = pes["age"];
				//  pes.sex = '街机拳皇'
				this.sex = pes["sex"];
			}
		}

		var man = new TyClass({
			name: "八神庵",
			age: 23,
			sex: "真人快打",
		});

		// 类型别名:  自定义给新类型起一个名字 常用于联合类型
		type newType = boolean | number;
		// 字符串字面量 类型
		type SName = "林俊杰" | "周杰伦" | "张杰";

    // const singer :SName = '王力宏'
		const singer :SName = '周杰伦'

		type TsName = {
			page: number;
			limit: number;
			total: number;
			content: object;
		};

		type TsNameFun = (x: number, y: string) => string;

		var obs: TsName = {
			page: 1,
			limit: 20,
			total: 30,
			content: {
				name: "用户李强",
				age: 33,
			},
		};

		const fun: TsNameFun = function (a, b) {
			return a + b;
		};

		// fun(1,'2')
		interface ArrType {
			name: string;
			tall: number;
			height: number;
		}

		var arrs: ArrType[] = [{ name: "", tall: 2, height: 2 }];

		// 泛型========================================================

		function StarLight<T>(x: T): T {
			return x;
		}

		console.log(StarLight<string>("你好泛型"));

		var TsAs: (string | number)[] = [1, "是的"];
		console.log(TsAs, "组织");
	}, []);
	return (
		<div>
			<span className={IndexStyle.spanText}></span>
		</div>
	);
}
export default Index;
