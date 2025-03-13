import{_ as a,a as n,a2 as p,o as e}from"./chunks/framework.DAlL-BGO.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/Linux/禁用空主机头.md","filePath":"pages/Linux/禁用空主机头.md","lastUpdated":1733806965000}'),t={name:"pages/Linux/禁用空主机头.md"};function l(i,s,c,r,d,o){return e(),n("div",null,s[0]||(s[0]=[p(`<p>关闭nginx空主机头 防止恶意域名指向</p><h2 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to &quot;修改配置&quot;">​</a></h2><p>修改nginx配置文件nginx.conf,在http配置中添加配置：</p><p><code>444</code>代表服务器无响应</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen 80 default;</span></span>
<span class="line"><span>        server_name  _;</span></span>
<span class="line"><span>        return 444;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果需要配置https，还需要添加证书和对应端口</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ssl_certificate /etc/letsencrypt/live/[你的域名]/fullchain.pem;</span></span>
<span class="line"><span>    ssl_certificate_key /etc/letsencrypt/live/[你的域名]/privkey.pem;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen 80 default;</span></span>
<span class="line"><span>        listen 443 ssl default; # 添加443端口</span></span>
<span class="line"><span>        server_name  _;</span></span>
<span class="line"><span>        return 444;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新加载nginx规则<code>nginx -s reload</code>即可</p>`,8)]))}const _=a(t,[["render",l]]);export{u as __pageData,_ as default};
