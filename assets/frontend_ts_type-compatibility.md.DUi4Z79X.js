import{H as e,V as t,et as n,j as r}from"./chunks/framework.DKIRGhFK.js";var i=JSON.parse(`{"title":"TS中的兼容性","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/ts/type-compatibility.md","filePath":"frontend/ts/type-compatibility.md"}`),a={name:`frontend/ts/type-compatibility.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="ts中的兼容性" tabindex="-1">TS中的兼容性 <a class="header-anchor" href="#ts中的兼容性" aria-label="Permalink to “TS中的兼容性”">​</a></h1><h2 id="自动类型推论" tabindex="-1">自动类型推论 <a class="header-anchor" href="#自动类型推论" aria-label="Permalink to “自动类型推论”">​</a></h2><ul><li><p>根据初始值进行类型推论不用明确告诉编译器具体是什么类型, 编译器就知道是什么类型根据初始化值自动推断<strong>注意点：</strong> 如果是先定义在初始化, 那么是无法自动推断的</p></li><li><p>上下文类型推论TypeScript类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”。按上下文归类会发生在表达式的类型与所处的位置相关时</p></li></ul><div class="language-typescript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 最佳类型推断</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 等价于 let uanme: string = &quot;陈乔恩&quot;;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uname </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;陈乔恩&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uname </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;徐璐&quot;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// uname = 123;</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 报错</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// uname = true;</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 报错</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uage;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uage </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uage </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 等价于 let x: (number | null)[] = [0, 1, null];</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// x = [18, 28, 38, null, true];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 上下文类型推断</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onmousedown</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">mouseEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mouseEvent.button);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="对象类型兼容性" tabindex="-1">对象类型兼容性 <a class="header-anchor" href="#对象类型兼容性" aria-label="Permalink to “对象类型兼容性”">​</a></h2><ul><li><p>可多不可少</p></li><li><p>会进行递归检查</p></li></ul><div class="language-typescript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 对象类型赋值给接口类型</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 注意点: 可多不可少</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> INameTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  name</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n1 </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;祝绪丹&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2 </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;江疏影&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n3 </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> val</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> INameTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">val </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">val </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// val = n3;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 注意点: 必须一一对应，会进行递归检查</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ITestInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  name</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  children</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">      age</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p1 </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;吴宣仪&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, children:{age:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}};</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p2 </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;陈小纭&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,children:{age:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ITestInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p1;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// t = p2;</span></span></code></pre></div><h2 id="函数类型兼容性" tabindex="-1">函数类型兼容性 <a class="header-anchor" href="#函数类型兼容性" aria-label="Permalink to “函数类型兼容性”">​</a></h2><ul><li><p>参数个数</p></li><li><p>参数类型</p></li><li><p>参数返回值</p></li><li><p>双向协变</p></li><li><p>函数重载</p></li><li><p>可选参数及剩余参数</p></li></ul><div class="language-typescript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 参数个数</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 注意点: 可少不可多</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func1 = (a:number, b:number) =&gt; {};</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func2 = (x:number) =&gt; {};</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func1 = func2;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func2 = func1; </span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 参数类型</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 注意点: 参数类型必须相同</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func1 = (x:number)=&gt;{};</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func2 = (x:number)=&gt;{};</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func3 = (x:string)=&gt;{};</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func1 = func2;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func2 = func1;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func1 = func3; </span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func3 = func1;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 返回值类型</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 注意点: 返回值类型必须相同</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func1 = ():number=&gt; 18;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func2 = ():number=&gt; 28;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func3 = ():string=&gt; &#39;TS真好玩&#39;;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func1 = func2;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func2 = func1;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func1 = func3; </span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func3 = func1;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 函数双向协变</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 1.参数的双向协变</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func1 = (x:(number | string)) =&gt;{};</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func2 = (x:number) =&gt;{};</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func1 = func2;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func2 = func1;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 2.返回值双向协变</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 不能将返回值是联合类型的赋值给具体类型的</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 可以将返回值是具体类型的赋值给联合类型的</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func1 = (x:boolean):(number | string) =&gt; x ? 18 : &#39;张含韵&#39;;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let func2 = (x:boolean):number =&gt; 28;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// func1 = func2; </span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">func2 = func1;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 函数重载</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 不能将重载少的赋值给重载多的</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 可以将重载多的赋值给重载少</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">function add(x:number, y:number):number;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">function add(x:string, y:string):string;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">function add(x, y) {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    return x + y;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">function sub(x:number, y:number):number;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">function sub(x, y) {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    return x - y;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// let fn = add;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// fn = sub; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let fn = sub;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">fn = add; </span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 可选参数及剩余参数</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 当一个函数有剩余参数时，它被当做无限个可选参数</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[], </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callback</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;, &#39;</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;, &#39;</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">z</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;, &#39;</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y));</span></span></code></pre></div><h2 id="枚举类型知识点补充" tabindex="-1">枚举类型知识点补充 <a class="header-anchor" href="#枚举类型知识点补充" aria-label="Permalink to “枚举类型知识点补充”">​</a></h2><p>TS中支持两种枚举, 一种是数字枚举, 一种是字符串枚举</p><ul><li>数字枚举</li></ul><blockquote><p>1.数字枚举的取值可以是字面量, 也可以是常量, 也可以是计算的结果</p><p>2.如果采用字面量对第一个成员进行赋值，下面的成员会自动递增</p><p>3.如果采用常量或计算结果进行赋值，则下面的成员也必须初始化</p></blockquote><ul><li>字符串枚举</li></ul><blockquote><p>1.如果采用字面量对第一个成员进行赋值，下面的成员也必须赋值</p><p>2.采用[index]的形式不能获取到内容,需要传入[key]</p><p>3.字符串枚举不能使用常量或者计算结果给枚举值赋值</p><p>4.它可以使用内部的其它枚举值来赋值</p></blockquote><ul><li>异构枚举：枚举中既包含数字又包含字符串, 我们就称之为异构枚举</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt; 1.如果是字符串枚举, 那么无法通过原始值获取到枚举值</span></span></code></pre></div><ul><li>把枚举成员当做类型来使用</li></ul><div class="language-typescript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// TS中支持两种枚举, 一种是数字枚举, 一种是字符串枚举</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 1.数字枚举</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 默认情况下就是数字枚举</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 注意点: 1.数字枚举的取值可以是字面量, 也可以是常量, 也可以是计算的结果</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//        2.如果采用字面量对第一个成员进行赋值，下面的成员会自动递增</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//        3.如果采用常量或计算结果进行赋值，则下面的成员也必须初始化</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// enum Gender{</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//     Male,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//     Female</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// }</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Gender.Male);</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Gender.Female);</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Gender[0]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// const val = 100;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// const num = () =&gt; 200;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// enum Gender{</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   // Male = 1,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   // Female</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//   Male = val,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//   Female = num()</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 2.字符串枚举</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 注意点: 1.如果采用字面量对第一个成员进行赋值，下面的成员也必须赋值</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//        2.采用[index]的形式不能获取到内容,需要传入[key]</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//        3.字符串枚举不能使用常量或者计算结果给枚举值赋值</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//        4.它可以使用内部的其它枚举值来赋值</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// enum Direction {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//   up = &quot;UP&quot;,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//   down = &quot;DOWN&quot;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// }</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Direction.up);</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Direction.down);</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Direction[0]);</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // undefined</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Direction[&quot;up&quot;]);</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // UP</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// const val = &quot;金晨&quot;;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// const res = () =&gt; &quot;王鸥&quot;;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// enum User {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   // a = val,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   // b = res()</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//    c = &quot;HTML&quot;,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//    d = c</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 3.异构枚举</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 枚举中既包含数字又包含字符串, 我们就称之为异构枚举</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 注意点: 如果是字符串枚举, 那么无法通过原始值获取到枚举值</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// enum Gender{</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//   Male = 1,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//   Female = &#39;女&#39;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Gender.Male);</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Gender.Female);</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Gender[1]);</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// console.log(Gender[&#39;女&#39;]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 4.把枚举成员当做类型来使用</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Gender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Male</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Female</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ITestInterface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  age</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Gender</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // age: (Gender.Male | Gender.Female)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ITestInterface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // age: Gender.Male</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  age</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Gender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Female</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="枚举类型兼容性" tabindex="-1">枚举类型兼容性 <a class="header-anchor" href="#枚举类型兼容性" aria-label="Permalink to “枚举类型兼容性”">​</a></h2><ul><li><p>数字枚举与数字兼容</p></li><li><p>数字枚举与数字枚举不兼容</p></li><li><p>字符串枚举与字符串不兼容</p></li></ul><div class="language-typescript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 数字枚举与数字兼容</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">enum Gender{</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    Male,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    Female</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">}</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let value:Gender;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">value = Gender.Male;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">value = 100;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 数字枚举与数字枚举不兼容</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">enum Gender{</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    Male, // 0</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    Female // 1</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">}</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">enum Animal{</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    Dog, // 0</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    Cat // 1</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">}</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let value:Gender;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">value = Gender.Male;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">value = Animal.Dog; // 报错</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 字符串枚举与字符串不兼容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// enum Gender{</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//     Male = &#39;张若昀&#39;,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">//     Female  = &#39;唐艺昕&#39;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// }</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// let value:Gender;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// value = Gender.Male;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// value = Gender.Female;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// value = &quot;娃嘻嘻&quot;</span></span></code></pre></div><h2 id="类的兼容性" tabindex="-1">类的兼容性 <a class="header-anchor" href="#类的兼容性" aria-label="Permalink to “类的兼容性”">​</a></h2><p>类的工作方式与对象字面类型和接口类似，但有一个例外：它们同时具有静态和实例类型。当比较一个<br> 类类型的两个对象时，只有实例的成员被比较。静态成员和构造函数不影响兼容性。</p><p>一个类中的私有成员和保护成员会影响其兼容性。当一个类的实例被检查兼容性时，如果目标类型包含<br> 一个私有成员，那么源类型也必须包含一个源自同一类的私有成员。同样地，这也适用于有保护成员的<br> 实例。这允许一个类与它的超类进行赋值兼容，但不允许与来自不同继承层次的类进行赋值兼容，否则<br> 就会有相同的形状。</p><ul><li><p><code>public</code>: 可多不可少</p></li><li><p><code>private / protected</code>: 不能互相赋值</p></li></ul><div class="language-typescript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// public</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">class Animal {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  feet: number;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  age: number;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  constructor(name: string, numFeet: number) {}</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">}</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">class Size {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  feet: number;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  constructor(numFeet: number) {}</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 可多不可少</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let a: Animal;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let s: Size;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">s = a; // 正确</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">a = s; // 错误</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// private / protected</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">class Animal {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  private feet: number;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  constructor(name: string, numFeet: number) {}</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">}</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">class Size {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  private feet: number;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  constructor(numFeet: number) {}</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let a: Animal;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let s: Size;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">s = a; // 错误</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">a = s; // 错误</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">*/</span></span></code></pre></div><h2 id="泛型的兼容性" tabindex="-1">泛型的兼容性 <a class="header-anchor" href="#泛型的兼容性" aria-label="Permalink to “泛型的兼容性”">​</a></h2><div class="language-typescript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 因为TypeScript是一个结构化的类型系统，类型参数只在作为成员类型的一部分被消耗时影响到结果类型。</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">interface Empty&lt;T&gt; {}</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let x: Empty&lt;number&gt;;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">let y: Empty&lt;string&gt;;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">x = y; // 正确，因为y符合x的结构</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 在上面， x 和 y 是兼容的，因为它们的结构没有以区分的方式使用类型参数。通过给 Empty&lt;T&gt; 增加一</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 个成员来改变这个例子，显示了这是如何工作的</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/*</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">interface NotEmpty&lt;T&gt; {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  \xA0data: T;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> }</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> let x: NotEmpty&lt;number&gt;;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> let y: NotEmpty&lt;string&gt;;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> x = y; // 错误，因为x和y不兼容</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> */</span></span></code></pre></div>`,30)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};