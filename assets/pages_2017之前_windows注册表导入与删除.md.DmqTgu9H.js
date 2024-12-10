import{_ as a,a as n,a2 as p,o as e}from"./chunks/framework.DAlL-BGO.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2016-12-18 22:22"},"headers":[],"relativePath":"pages/2017之前/windows注册表导入与删除.md","filePath":"pages/2017之前/windows注册表导入与删除.md","lastUpdated":1733806965000}'),t={name:"pages/2017之前/windows注册表导入与删除.md"};function o(l,s,i,d,c,u){return e(),n("div",null,s[0]||(s[0]=[p(`<p>注册表导入与删除</p><p>增加文件，文件格式是<code>.reg</code>。导入如下格式：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Windows Registry Editor Version 5.00  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>[HKEY_CLASSES_ROOT\\Python.File\\shell\\runas]  </span></span>
<span class="line"><span>&quot;HasLUAShield&quot;=&quot;&quot;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>[HKEY_CLASSES_ROOT\\Python.File\\shell\\runas\\command]  </span></span>
<span class="line"><span>@=&quot;path \\&quot;%1\\&quot; %*&quot;</span></span></code></pre></div><p>删除如下格式，就是在导入的记录前加 &quot;-&quot;,eg:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Windows Registry Editor Version 5.00  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>[-HKEY_CLASSES_ROOT\\Python.File\\shell\\runas]  </span></span>
<span class="line"><span>&quot;HasLUAShield&quot;=&quot;&quot;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>[-HKEY_CLASSES_ROOT\\Python.File\\shell\\runas\\command]  </span></span>
<span class="line"><span>@=&quot;path \\&quot;%1\\&quot; %*&quot;</span></span></code></pre></div>`,5)]))}const _=a(t,[["render",o]]);export{h as __pageData,_ as default};
