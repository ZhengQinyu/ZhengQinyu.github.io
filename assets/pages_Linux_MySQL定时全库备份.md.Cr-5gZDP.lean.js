import{_ as s,a as n,a2 as p,o as e}from"./chunks/framework.DAlL-BGO.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/Linux/MySQL定时全库备份.md","filePath":"pages/Linux/MySQL定时全库备份.md","lastUpdated":1733806965000}'),l={name:"pages/Linux/MySQL定时全库备份.md"};function i(d,a,t,c,o,b){return e(),n("div",null,a[0]||(a[0]=[p(`<h3 id="_1-备份脚本" tabindex="-1">1. 备份脚本 <a class="header-anchor" href="#_1-备份脚本" aria-label="Permalink to &quot;1. 备份脚本&quot;">​</a></h3><p>在文件夹 <code>/home/zqyu/database_bak</code> 下创建脚本文件 <code>db-backup.sh</code>, 数据库账号是<code>root</code>,密码是<code>123456</code>, <code>backupSize</code>表示要保留的备份文件数量，备份 db_1，db_2，db_3三个数据库</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>set -e</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mhome=/home/zqyu/database_bak</span></span>
<span class="line"><span>today=$(date &quot;+%Y%m%d_%H%M%S&quot;)</span></span>
<span class="line"><span>db_names=(db_1 db_2 db_3)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for db in \${db_names[@]}</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    echo &#39;备份数据库 &#39;\${db}&#39; 中...&#39;</span></span>
<span class="line"><span>    mkdir -p \${mhome}/\${db}</span></span>
<span class="line"><span>    cd \${mhome}/\${db}</span></span>
<span class="line"><span>    mysqldump -u root --password=&#39;123456&#39; \${db} | gzip &gt; \${mhome}/\${db}/\${today}.sql.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    backupSize=30</span></span>
<span class="line"><span>    index=0</span></span>
<span class="line"><span>    for bak in $(ls -r)</span></span>
<span class="line"><span>    do</span></span>
<span class="line"><span>        if [ \${index} -ge \${backupSize} ]; then</span></span>
<span class="line"><span>            rm -f \${bak}</span></span>
<span class="line"><span>            # echo \${bak}</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>        index=$(expr \${index} + 1)</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>done</span></span></code></pre></div><h3 id="_2-添加定时任务" tabindex="-1">2. 添加定时任务 <a class="header-anchor" href="#_2-添加定时任务" aria-label="Permalink to &quot;2. 添加定时任务&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ crontab -e</span></span></code></pre></div><p>添加定时任务，<code>ESC</code> 后 <code>:wq</code>保存</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 每天02:05备份一次数据库</span></span>
<span class="line"><span>05 02 * * * bash /home/zqyu/database_bak/db-backup.sh</span></span></code></pre></div>`,7)]))}const u=s(l,[["render",i]]);export{h as __pageData,u as default};
