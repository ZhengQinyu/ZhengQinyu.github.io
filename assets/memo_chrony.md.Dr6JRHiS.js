import{_ as a,a as i,a2 as t,o as e}from"./chunks/framework.DAlL-BGO.js";const k=JSON.parse('{"title":"自动更新时间","description":"","frontmatter":{"title":"自动更新时间","lastUpdated":"2024-12-03 11:15"},"headers":[],"relativePath":"memo/chrony.md","filePath":"memo/chrony.md","lastUpdated":1733807682000}'),l={name:"memo/chrony.md"};function n(h,s,p,d,o,r){return e(),i("div",null,s[0]||(s[0]=[t(`<h3 id="自动更新时间" tabindex="-1">自动更新时间 <a class="header-anchor" href="#自动更新时间" aria-label="Permalink to &quot;自动更新时间&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chrony</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chronyd</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>启动后等待几秒即可看到时间更新完成</p></div><ul><li>补充：设置时区</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> timedatectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-timezone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Asia/Shanghai</span></span></code></pre></div>`,5)]))}const F=a(l,[["render",n]]);export{k as __pageData,F as default};