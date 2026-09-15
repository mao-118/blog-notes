import{H as e,V as t,et as n,j as r}from"./chunks/framework.DKIRGhFK.js";var i=JSON.parse(`{"title":"处理字体图标资源","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/webpack/fundamentals/font-assets.md","filePath":"frontend/webpack/fundamentals/font-assets.md"}`),a={name:`frontend/webpack/fundamentals/font-assets.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="处理字体图标资源" tabindex="-1">处理字体图标资源 <a class="header-anchor" href="#处理字体图标资源" aria-label="Permalink to “处理字体图标资源”">​</a></h1><h2 id="_1-下载字体图标文件" tabindex="-1">1. 下载字体图标文件 <a class="header-anchor" href="#_1-下载字体图标文件" aria-label="Permalink to “1. 下载字体图标文件”">​</a></h2><ol><li><p>打开<a href="https://www.iconfont.cn/" target="_blank" rel="noreferrer">阿里巴巴矢量图标库</a></p></li><li><p>选择想要的图标添加到购物车，统一下载到本地</p></li></ol><h2 id="_2-添加字体图标资源" tabindex="-1">2. 添加字体图标资源 <a class="header-anchor" href="#_2-添加字体图标资源" aria-label="Permalink to “2. 添加字体图标资源”">​</a></h2><ul><li><p>src/fonts/iconfont.ttf</p></li><li><p>src/fonts/iconfont.woff</p></li><li><p>src/fonts/iconfont.woff2</p></li><li><p>src/css/iconfont.css</p></li><li><p>注意字体文件路径需要修改</p></li><li><p>src/main.js</p></li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import { add } from &quot;./math&quot;;</span></span>
<span class="line"><span>import count from &quot;./js/count&quot;;</span></span>
<span class="line"><span>import sum from &quot;./js/sum&quot;;</span></span>
<span class="line"><span>// 引入资源，Webpack才会对其打包</span></span>
<span class="line"><span>import &quot;./css/iconfont.css&quot;;</span></span>
<span class="line"><span>import &quot;./css/index.css&quot;;</span></span>
<span class="line"><span>import &quot;./less/index.less&quot;;</span></span>
<span class="line"><span>import &quot;./sass/index.sass&quot;;</span></span>
<span class="line"><span>import &quot;./sass/index.scss&quot;;</span></span>
<span class="line"><span>import &quot;./styl/index.styl&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(count(2, 1));</span></span>
<span class="line"><span>console.log(sum(1, 2, 3, 4));</span></span></code></pre></div><ul><li>public/index.html</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;webpack5&lt;/title&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Hello Webpack5&lt;/h1&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;box1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;box2&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;box3&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;box4&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;box5&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 使用字体图标 --&gt;</span></span>
<span class="line"><span>    &lt;i class=&quot;iconfont icon-arrow-down&quot;&gt;&lt;/i&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;i class=&quot;iconfont icon-ashbin&quot;&gt;&lt;/i&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;i class=&quot;iconfont icon-browse&quot;&gt;&lt;/i&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script src=&quot;../dist/static/js/main.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="_3-配置" tabindex="-1">3. 配置 <a class="header-anchor" href="#_3-配置" aria-label="Permalink to “3. 配置”">​</a></h2><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;dist&quot;),</span></span>
<span class="line"><span>    filename: &quot;static/js/main.js&quot;, // 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span>    clean: true, // 自动将上次打包目录资源清空</span></span>
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
<span class="line"><span>            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        generator: {</span></span>
<span class="line"><span>          // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span>          // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span>          // [hash:8]: hash值取8位</span></span>
<span class="line"><span>          // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span>          // [query]: 添加之前的query参数</span></span>
<span class="line"><span>          filename: &quot;static/imgs/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(ttf|woff2?)$/,</span></span>
<span class="line"><span>        type: &quot;asset/resource&quot;,</span></span>
<span class="line"><span>        generator: {</span></span>
<span class="line"><span>          filename: &quot;static/media/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [],</span></span>
<span class="line"><span>  mode: &quot;development&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><p><code>type: &quot;asset/resource&quot;</code>和<code>type: &quot;asset&quot;</code>的区别：</p><ol><li><p><code>type: &quot;asset/resource&quot;</code> 相当于<code>file-loader</code>, 将文件转化成 Webpack 能识别的资源，其他不做处理</p></li><li><p><code>type: &quot;asset&quot;</code> 相当于<code>url-loader</code>, 将文件转化成 Webpack 能识别的资源，同时小于某个大小的资源会处理成 data URI 形式</p></li></ol><h2 id="_4-运行指令" tabindex="-1">4. 运行指令 <a class="header-anchor" href="#_4-运行指令" aria-label="Permalink to “4. 运行指令”">​</a></h2><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npx webpack</span></span></code></pre></div><p>打开 index.html 页面查看效果</p>`,15)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};