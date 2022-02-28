import React, { useEffect, useState } from "react";

 function First (){
   useEffect(()=>{
      // TypeStript

      // 声明变量
      var str :string = '我是字符串'
      var num :number = 1000
      var obj :object = {}
      // 普通数组
      var normalArr :string[] = []
      var peaceArr :Array<string> = []
      // 联合类型数组
      var uniteArr :(number|string)[] = [1,'2']
      // 元祖 :数组元素的个数、顺序、数据类型 必须严格按照声明规定
      var yuanArr :[string,number]=['1',2]
      var nul :null = null
      var unide :undefined = undefined
      var ans :any = '随便啥类型'
      // unknown和any可以赋值任何类型是Ts的顶级类型, 但是unknow类型的值 只能赋值给any。
      var vos :unknown = 1

      // Ts声明函数  函数条件存在:参数数据类型、 默认参数、 可选参数、  剩余参数、 参数返回值。 
      function Funs(x:object = {name:'TS学习'},y:string[]=['1','2','3'],z?:boolean,...items:object[]):boolean{
        return false
      }

      // 声明接口
      // 使用接口进行数据模式限制
      // 一旦定义了任意属性，那么其他属性的类型必须是任意属性类型的子集。
      // 数据限制: ？可选属性、readonly只读属性、[propName] 可新增属性
      interface Person {
        name: string;
        age?: number;
        [propName: string]: any;
      }

      var man :Person = {
        name:'小王吧',
        age:24
      }

      // 类型别名：定义一个联合类型(多数据类型)或者 存在数据格式限制 的数据模式
      // 一旦定义了任意属性，那么其他属性的类型必须是任意属性类型的子集。
      type moreType = number|string
      // 数据限制: ？可选属性、readonly只读属性、[propName] 可新增属性
      type tosType = {
        name:string;
        age?:number;
        readonly sex?:string
        [propsName:string]:any
      }
      
      // 实际上，在大多数的情况下使用接口类型和类型别名的效果等价，但是在某些特定的场景下这两者还是存在很大区别。
      // type(类型别名)会给一个类型起个新名字。 
      // type 有时和 interface 很像，但是可以作用于原始值（基本类型），联合类型，元组以及其它任何你需要手写的类型。

      // 同名接口定义多次会自动合并
      interface our{
        x:any
      }
      interface our{
        y:string[]
      }
      var they :our={
        x:100,
        y:['你','我','他']
      }
      // 两者都可以进行扩展甚至互相扩展。

      // 接口扩展：使用extends关键字进行扩展
      interface a {
        name:string
      }
      interface b extends a{
        age:number
      }
      var woman :b ={
        name:'小红',
        age:26
      }
      
      // 类型别名扩展：使用& 符号进行扩展
      type one = {
        height:string,
        width:string
      }
     type two = {
       color:any,
       fontSize:unknown
     } & one

     
     var box :two = {
       width:'100px',
       height:'200px',
       color:'yellow',
       fontSize:20
     }
    
    //  泛型
    //  参数类型灵活多变
    //  基本写法
    function fun <T>(x:T):T{
      return 
    }
    fun<string>('我是泛型')

    //多个类型变量
    function funs <T,S>(x:T,y:S):S{
      return
    } 
    funs<string,number>('等不打天黑',2000)

    // 泛型配合接口  

    interface ten<T>{
      name:T,
      className:string
    }

    function play<T,stirng>(x:T):ten<T>{
      return {
        name:x,
        className:''
      }
    }
   var ps =  play<number,string>(12)
   console.log('ps: ', ps);





    },[])
  return(
    <div>
      <span>
          
      </span>
    </div>
  )
}
export default First