# hooks 基础

## 什么是 hooks

Hooks 的本质：一套能够使函数组件更强大，更灵活的“钩子”

React 体系里组件分为 类组件 和 函数组件

经过多年的实战，函数组件是一个更加匹配 React 的设计理念 UI = f(data)，也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，为了能让函数组件可以拥有自己的状态，所以从 react v16.8 开始，Hooks 应运而生

注意点：

1.  有了 hooks 之后，为了兼容老版本，class 类组件并没有被移除，俩者都可以使用

2.  有了 hooks 之后，不能在把函数成为无状态组件了，因为 hooks 为函数组件提供了状态

3.  hooks 只能在函数组件中使用

## Hooks 解决了什么问题

Hooks 的出现解决了俩个问题

1.  组件的逻辑复用  
    在 hooks 出现之前，react 先后尝试了 mixins 混入，HOC 高阶组件，render-props 等模式，但是都有各自的问题，比如 mixin 的数据来源不清晰，高阶组件的嵌套问题等等

2.  class 组件自身的问题  
    class 组件就像一个厚重的‘战舰’ 一样，大而全，提供了很多东西，有不可忽视的学习成本，比如各种生命周期，this 指向问题等等，而我们更多时候需要的是一个轻快灵活的'快艇'

## useState

### 1.作用

useState 为函数组件提供状态（state）

使用步骤

1.  导入 useState 函数

2.  调用 useState 函数，并传入状态的初始值

3.  从 useState 函数的返回值中，拿到状态和修改状态的方法

4.  在 JSX 中展示状态

5.  调用修改状态的方法更新状态

```jsx
import { useState } from "react";

function App() {
  // 参数：状态初始值比如,传入 0 表示该状态的初始值为 0
  // 返回值：数组,包含两个值：1 状态值（state） 2 修改该状态的函数（setState）
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>

  );
}
export default App;
```

### 2.组件的更新过程

函数组件使用 useState hook 后的执行过程，以及状态值的变化

-   组件第一次渲染

1.  从头开始执行该组件中的代码逻辑

2.  调用 useState(0) 将传入的参数作为状态初始值，即：0

3.  渲染组件，此时，获取到的状态 count 值为： 0

-   组件第二次渲染

1.  点击按钮，调用 setCount(count + 1) 修改状态，因为状态发生改变，所以，该组件会重新渲染

2.  组件重新渲染时，会再次执行该组件中的代码逻辑

3.  再次调用 useState(0)，此时 React 内部会拿到最新的状态值而非初始值，比如，该案例中最新的状态值为 1

4.  再次渲染组件，此时，获取到的状态 count 值为：1

> useState 的初始值(参数)只会在组件第一次渲染时生效。也就是说，以后的每次渲染，useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值
```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // 在这里可以进行打印测试
  console.log(count);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>

  );
}
export default App;
```
> ### 3.使用规则
> 
> #### 1\. useState 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态
> 
> #### 2\. useState 注意事项
> 
> -   只能出现在函数组件或者其他 hook 函数中
> 
> -   不能嵌套在 if/for/其它函数中（react 按照 hooks 的调用顺序识别每一个 hook）
> 
> -   可以通过开发者工具查看 hooks 状态
> 
> ## useEffect
> 
> ### 1\. 理解函数副作用
> 
> #### 什么是副作用?
> 
> 副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于 React 组件来说，主作用就是根据数据（state/props）渲染 UI，除此之外都是副作用（比如，手动修改 DOM）
> 
> #### 常见的副作用
> 
> 1.  数据请求 ajax 发送
> 
> 2.  手动修改 dom
> 
> 3.  localstorage 操作
> 
> useEffect 函数的作用就是为 react 函数组件提供副作用处理的！
> 
> ### 2\. 基础使用
> 
> 作用：为 react 函数组件提供副作用处理
> 
> 使用步骤
> 
> 1.  导入 useEffect 函数
> 
> 2.  调用 useEffect 函数，并传入回调函数
> 
> 3.  在回调函数中编写副作用处理（dom 操作）
> 
> 4.  修改数据状态
> 
> 5.  检测副作用是否生效
> 
> ### 3\. 依赖项控制执行时机
> 
> #### 1\. 不添加依赖项
> 
> 组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
> 
> #### 2\. 添加空数组
> 
> 组件只在首次渲染时执行一次
> 
> #### 3\. 添加特定依赖项
> 
> 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
> 
> useEffect 回调函数中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有 bug 出现
> 
> #### 4\. 清理副作用

  

# Hooks进阶

## useState - 回调函数的参数

### 使用场景

参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过计算才能获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

```jsx
const [name, setName] = useState(()=>{   
  // 编写计算逻辑    return '计算之后的初始值'
})
```

### 语法规则

1.  回调函数return出去的值将作为 name 的初始值
2.  回调函数中的逻辑只会在组件初始化的时候执行一次

### 语法选择

1.  如果就是初始化一个普通的数据 直接使用 useState(普通数据) 即可
2.  如果要初始化的数据无法直接得到需要通过计算才能获取到，使用useState(()=>{})

```jsx
import { useState } from 'react'

function Counter(props) {
  const [count, setCount] = useState(() => {
    return props.count
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>

    </div>

  )
}

function App() {
  return (
    <>
      <Counter count={10} />
      <Counter count={20} />
    </>
  )
}

export default App
```

## useEffect - 发送网络请求

### 使用场景

如何在useEffect中发送网络请求，并且封装同步 async await操作

### 语法要求

不可以直接在useEffect的回调函数外层直接包裹 await ，因为异步会导致清理函数无法立即返回

```jsx
// 错误写法
useEffect(async ()=>{    
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')   
    console.log(res)
},[])

// 正确写法
useEffect(()=>{   
    async function fetchData(){      
       const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            console.log(res)   
    } 
},[])
```

## useRef

### 使用场景

在函数组件中获取真实的dom元素对象或者是组件对象

### 使用步骤

1.  导入 useRef 函数
2.  执行 useRef 函数并传入null，返回值为一个对象 内部有一个current属性存放拿到的dom对象（组件实例）
3.  通过ref 绑定 要获取的元素或者组件

```jsx
import { useEffect, useRef } from 'react'
function App() {  
    const h1Ref = useRef(null)  
    useEffect(() => {    
        console.log(h1Ref)  
    },[])  
    return (    
        <div>      
            <h1 ref={ h1Ref }>this is h1</h1>    
        </div>  
    )
}
export default App
```

### 获取组件实例

函数组件由于没有实例，不能使用ref获取，如果想获取组件实例，必须是类组件

```jsx
// Foo组件
class Foo extends React.Component {  
    sayHi = () => {    
        console.log('say hi')  
    }  
    render(){    
        return <div>Foo</div>  
    }
}
export default Foo

// App组件
import { useEffect, useRef } from 'react'
import Foo from './Foo'
function App() {  
    const h1Foo = useRef(null)  
    useEffect(() => {    
        console.log(h1Foo)  
    }, [])  
    return (    
        <div> <Foo ref={ h1Foo } /></div>  
    )
}
export default App
```

## useContext

### 实现步骤

1.  使用createContext 创建Context对象
2.  在顶层组件通过Provider 提供数据
3.  在底层组件通过useContext函数获取数据

```jsx
import { createContext, useContext } from 'react'
// 创建Context对象
const Context = createContext()

function Foo() {  
    return <div>Foo <Bar/></div>

}

function Bar() {  
    // 底层组件通过useContext函数获取数据  
    const name = useContext(Context)  
    return <div>Bar {name}</div>

}

function App() {  
    return (    
        // 顶层组件通过Provider 提供数据    
        <Context.Provider value={'this is name'}>     
            <div><Foo/></div>    
        </Context.Provider>  
    )
}

export default App
```