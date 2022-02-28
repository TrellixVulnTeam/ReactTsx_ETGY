import React, { useEffect } from "react";
const TsBase = () => {
	useEffect(() => {
    // 接口
		interface test {
			name: string;
			age?: number;
			run?(): any;
		}
		var nums: string | boolean;
		type TsName = "联合类型" | "类型别名";
		var strName: TsName = "联合类型";
    // 类型别名
		type TsType = {
			name: string;
			content?: object;
			readonly total: number;
		};
		var mess: TsType = {
			name: "ts数据类型",
			total: 100,
		};

		enum obj {
			one,
			two,
			three = "第三",
		}
		console.log(obj["one"], "?");

		// ts难点  泛型

		// 普通ts写法函数  函数参数类型 与 返回值固定
		function funx(x?: number, y?: {}): number {
			return 100;
		}
		// 泛型写法
		// 泛型函数 函数参数类型与返回值 可变
		function funs<T, F>(value: T, res: F): T {
			console.log(res, "我是res");
			return;
		}

		// 使用泛型类
		interface fanK<T, M> {
			value: T;
			message: M;
		}
		// console.log(funs<string,number>('你好泛型',2000))
		console.log(funs<string, number>("你好", 2000));

		class Pz<S> {
			constructor(public person: S[]) {
				this.person = person;
			}
			say(index: number) {
				console.log(this.person[index]);
			}
		}

		interface MyTs<X> {
			name: X;
			age: X;
		}
		function MyFun<T>(x: T, y: T): MyTs<T> {
			let person: MyTs<T> = {
				name: x,
				age: y,
			};
      return person
		}
		MyFun<string>("钱宗泽", "24");

		var Lies = new Pz<string>(["小王", "小李"]);
		Lies.say(1);

    // 枚举
    enum op{
      black=10,
      white,
      blue=80,
      red
    }
  console.log(op['black'],'枚举') 

  // 泛型约束
    
  interface obob {
    name:string,
    age:number
  }
  function tes<T extends number|string >(x:T):obob{
      let man:obob={
        name:'小王',
        age:26
      }
      return man
  }

  function tess<T extends keyof obob >(x:T):obob{
    let man:obob={
      name:'小王',
      age:26
    }
    return man
}
  tes<string>('你好')

  interface Foo {
    bar: number;
    bas: string;
  }
  
  var qwe :Foo = {
    bar:1,
    bas:'男'
  }
  
  const foo = {} as Foo;
  foo.bar = 123;

	}, []);
	return (
		<div>
			<h1>Ts</h1>
		</div>
	);
};
export default TsBase;
