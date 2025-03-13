import{_ as a,a as n,a2 as p,o as e}from"./chunks/framework.DAlL-BGO.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/安装手册/Gitea-1-19-升级-1-20.md","filePath":"pages/安装手册/Gitea-1-19-升级-1-20.md","lastUpdated":1733806965000}'),t={name:"pages/安装手册/Gitea-1-19-升级-1-20.md"};function l(i,s,c,o,d,r){return e(),n("div",null,s[0]||(s[0]=[p(`<h2 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to &quot;修改配置&quot;">​</a></h2><p>Gitea从1.19.0 升级到 1.20.3，需要修改的配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[server]</span></span>
<span class="line"><span>LFS_CONTENT_PATH = /data/git/lfs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>改为</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[server]</span></span>
<span class="line"><span>; LFS_CONTENT_PATH = /data/git/lfs ; 移除该配置</span></span>
<span class="line"><span>[lfs]</span></span>
<span class="line"><span>PATH = /data/git/lfs</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[log]</span></span>
<span class="line"><span>; ROUTER = console ;移除该配置，换成 logger.router.MODE</span></span>
<span class="line"><span>logger.router.MODE = console</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[mailer]</span></span>
<span class="line"><span>; MAILER_TYPE = smtp</span></span>
<span class="line"><span>; IS_TLS_ENABLED = true ; 这两个合并成 PROTOCOL </span></span>
<span class="line"><span>PROTOCOL = smtps</span></span>
<span class="line"><span>; HOST = smtp.ym.163.com:465 ; HOST拆分为以下两个</span></span>
<span class="line"><span>SMTP_ADDR = smtp.ym.163.com</span></span>
<span class="line"><span>SMTP_PORT = 465</span></span></code></pre></div>`,5)]))}const m=a(t,[["render",l]]);export{h as __pageData,m as default};
