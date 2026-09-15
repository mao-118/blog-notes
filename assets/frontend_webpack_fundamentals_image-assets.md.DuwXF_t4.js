import{H as e,V as t,et as n,j as r}from"./chunks/framework.DKIRGhFK.js";var i=JSON.parse(`{"title":"处理图片资源","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/webpack/fundamentals/image-assets.md","filePath":"frontend/webpack/fundamentals/image-assets.md"}`),a={name:`frontend/webpack/fundamentals/image-assets.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="处理图片资源" tabindex="-1">处理图片资源 <a class="header-anchor" href="#处理图片资源" aria-label="Permalink to “处理图片资源”">​</a></h1><p>过去在 Webpack4 时，我们处理图片资源通过 <code>file-loader</code> 和 <code>url-loader</code> 进行处理</p><p>现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源</p><h2 id="_1-配置" tabindex="-1">1. 配置 <a class="header-anchor" href="#_1-配置" aria-label="Permalink to “1. 配置”">​</a></h2><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;dist&quot;),</span></span>
<span class="line"><span>    filename: &quot;main.js&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>        test: /\\.css$/,</span></span>
<span class="line"><span>        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.less$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;less-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;sass-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.styl$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;stylus-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(png|jpe?g|gif|webp)$/,</span></span>
<span class="line"><span>        type: &quot;asset&quot;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [],</span></span>
<span class="line"><span>  mode: &quot;development&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="_2-添加图片资源" tabindex="-1">2. 添加图片资源 <a class="header-anchor" href="#_2-添加图片资源" aria-label="Permalink to “2. 添加图片资源”">​</a></h2><ul><li><p>src/images/1.jpeg</p></li><li><p>src/images/2.png</p></li><li><p>src/images/3.gif</p></li></ul><h2 id="_3-使用图片资源" tabindex="-1">3. 使用图片资源 <a class="header-anchor" href="#_3-使用图片资源" aria-label="Permalink to “3. 使用图片资源”">​</a></h2><ul><li>src/less/index.less</li></ul><div class="language-css"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../images/1.jpeg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>src/sass/index.sass</li></ul><div class="language-css"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: 100px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: 100px</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">  background-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: url(&quot;.</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">./images</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/2.png&quot;)</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">  background-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: cover</span></span></code></pre></div><ul><li>src/styl/index.styl</li></ul><div class="language-css"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  100px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  100px</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">  background-image</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url(&quot;.</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">./images</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/3.gif&quot;)</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">  background-size</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cover</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">  background-size</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cover;</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">  background-size</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cover</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">  background-size</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cover;</span></span></code></pre></div><h2 id="_4-运行指令" tabindex="-1">4. 运行指令 <a class="header-anchor" href="#_4-运行指令" aria-label="Permalink to “4. 运行指令”">​</a></h2><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npx webpack</span></span></code></pre></div><p>打开 index.html 页面查看效果</p><h2 id="_5-输出资源情况" tabindex="-1">5. 输出资源情况 <a class="header-anchor" href="#_5-输出资源情况" aria-label="Permalink to “5. 输出资源情况”">​</a></h2><p>此时如果查看 dist 目录的话，会发现多了三张图片资源</p><p>因为 Webpack 会将所有打包好的资源输出到 dist 目录下</p><ul><li>为什么样式资源没有呢？</li></ul><p>因为经过 <code>style-loader</code> 的处理，样式资源打包到 main.js 里面去了，所以没有额外输出出来</p><h2 id="_6-对图片资源进行优化" tabindex="-1">6. 对图片资源进行优化 <a class="header-anchor" href="#_6-对图片资源进行优化" aria-label="Permalink to “6. 对图片资源进行优化”">​</a></h2><p>将小于某个大小的图片转化成 data URI 形式（Base64 格式）</p><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;dist&quot;),</span></span>
<span class="line"><span>    filename: &quot;main.js&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>        test: /\\.css$/,</span></span>
<span class="line"><span>        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.less$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;less-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;sass-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.styl$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;stylus-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(png|jpe?g|gif|webp)$/,</span></span>
<span class="line"><span>        type: &quot;asset&quot;,</span></span>
<span class="line"><span>        parser: {</span></span>
<span class="line"><span>          dataUrlCondition: {</span></span>
<span class="line"><span>            maxSize: 10 * 1024 // 小于10kb的图片会被base64处理</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [],</span></span>
<span class="line"><span>  mode: &quot;development&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><ul><li><p>优点：减少请求数量</p></li><li><p>缺点：体积变得更大</p></li></ul><p>此时输出的图片文件就只有两张，有一张图片以 data URI 形式内置到 js 中了<br> （注意：需要将上次打包生成的文件清空，再重新打包才有效果）</p>`,27)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};