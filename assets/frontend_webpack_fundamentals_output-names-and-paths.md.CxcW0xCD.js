import{H as e,V as t,et as n,j as r}from"./chunks/framework.DKIRGhFK.js";var i=JSON.parse(`{"title":"修改输出资源的名称和路径","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/webpack/fundamentals/output-names-and-paths.md","filePath":"frontend/webpack/fundamentals/output-names-and-paths.md"}`),a={name:`frontend/webpack/fundamentals/output-names-and-paths.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="修改输出资源的名称和路径" tabindex="-1">修改输出资源的名称和路径 <a class="header-anchor" href="#修改输出资源的名称和路径" aria-label="Permalink to “修改输出资源的名称和路径”">​</a></h1><h2 id="_1-配置" tabindex="-1">1. 配置 <a class="header-anchor" href="#_1-配置" aria-label="Permalink to “1. 配置”">​</a></h2><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;dist&quot;),</span></span>
<span class="line"><span>    filename: &quot;static/js/main.js&quot;, // 将 js 文件输出到 static/js 目录中</span></span>
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
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [],</span></span>
<span class="line"><span>  mode: &quot;development&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="_2-修改-index-html" tabindex="-1">2. 修改 index.html <a class="header-anchor" href="#_2-修改-index-html" aria-label="Permalink to “2. 修改 index.html”">​</a></h2><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
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
<span class="line"><span>    &lt;!-- 修改 js 资源路径 --&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;../dist/static/js/main.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="_3-运行指令" tabindex="-1">3. 运行指令 <a class="header-anchor" href="#_3-运行指令" aria-label="Permalink to “3. 运行指令”">​</a></h2><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npx webpack</span></span></code></pre></div><ul><li>此时输出文件目录：</li></ul><p>（注意：需要将上次打包生成的文件清空，再重新打包才有效果）</p><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>├── dist</span></span>
<span class="line"><span>    └── static</span></span>
<span class="line"><span>         ├── imgs</span></span>
<span class="line"><span>         │    └── 7003350e.png</span></span>
<span class="line"><span>         └── js</span></span>
<span class="line"><span>              └── main.js</span></span></code></pre></div>`,10)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};