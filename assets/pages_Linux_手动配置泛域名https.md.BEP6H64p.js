import{_ as n,a,a2 as s,o as t}from"./chunks/framework.DAlL-BGO.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/Linux/手动配置泛域名https.md","filePath":"pages/Linux/手动配置泛域名https.md","lastUpdated":1733806965000}'),p={name:"pages/Linux/手动配置泛域名https.md"};function l(i,e,o,r,c,d){return t(),a("div",null,e[0]||(e[0]=[s(`<p>使用 <a href="https://certbot.eff.org/lets-encrypt/centosrhel7-nginx" target="_blank" rel="noreferrer">certbot</a> 在CentOS7下配置nginx支持泛域名https, 例如我们申请<code>zqyu.com</code>这个域名的泛域名证书</p><h2 id="一、-安装certbot" tabindex="-1">一、 安装certbot <a class="header-anchor" href="#一、-安装certbot" aria-label="Permalink to &quot;一、 安装certbot&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo yum install python2-certbot-nginx</span></span></code></pre></div><h2 id="二、-生成证书" tabindex="-1">二、 生成证书 <a class="header-anchor" href="#二、-生成证书" aria-label="Permalink to &quot;二、 生成证书&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ certbot certonly --manual  -d zqyu.com -d *.zqyu.com --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory</span></span></code></pre></div><p>安装过程中出现错误</p><blockquote><p>ImportError: No module named &#39;requests.packages.urllib3&#39;</p></blockquote><p>更新软件即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ pip uninstall requests</span></span>
<span class="line"><span>$ pip uninstall urllib3</span></span>
<span class="line"><span>$ yum remove python-urllib3</span></span>
<span class="line"><span>$ yum remove python-requests</span></span>
<span class="line"><span>$ yum install python-urllib3</span></span>
<span class="line"><span>$ yum install python-requests</span></span>
<span class="line"><span>$ yum install certbot</span></span></code></pre></div><p>重新执行生成证书的命令，按照提示填写相对应的信息，在域名的解析中添加解析TXT记录</p><pre><code>Please deploy a DNS TXT record under the name
_acme-challenge.[你的域名] with the following value:

LAgFSE1_ML8l2T35GuyW1Iq-HZ8dncQUkxd131fZq3w[这一串是安装过程中生成的token]

Before continuing, verify the record is deployed.
</code></pre><p>安装成功后提示如下</p><pre><code>IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/[你的域名]/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/[你的域名]/privkey.pem
   Your cert will expire on 2019-01-25. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   &quot;certbot renew&quot;
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let&#39;s Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
</code></pre><h2 id="三、-在nginx中配置证书" tabindex="-1">三、 在nginx中配置证书 <a class="header-anchor" href="#三、-在nginx中配置证书" aria-label="Permalink to &quot;三、 在nginx中配置证书&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name [你的域名];</span></span>
<span class="line"><span>    return 301 https://$server_name$request_uri;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen       443 ssl;</span></span>
<span class="line"><span>    server_name [你的域名];</span></span>
<span class="line"><span>    ssl_certificate /etc/letsencrypt/live/[你的域名]/fullchain.pem;</span></span>
<span class="line"><span>    ssl_certificate_key /etc/letsencrypt/live/[你的域名]/privkey.pem;</span></span>
<span class="line"><span>    root [你的网站根目录];</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        access_log off;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新加载nginx规则<code>nginx -s reload</code>即可</p><h2 id="四、-自动更新证书" tabindex="-1">四、 自动更新证书 <a class="header-anchor" href="#四、-自动更新证书" aria-label="Permalink to &quot;四、 自动更新证书&quot;">​</a></h2><p><code>Let’s Encrypt</code> 证书的有效期是90天，到期后需要重新安装</p><h2 id="五、卸载" tabindex="-1">五、卸载 <a class="header-anchor" href="#五、卸载" aria-label="Permalink to &quot;五、卸载&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ yum remove certbot python2-certbot-nginx</span></span>
<span class="line"><span>$ yum autoremove</span></span></code></pre></div>`,20)]))}const g=n(p,[["render",l]]);export{u as __pageData,g as default};
