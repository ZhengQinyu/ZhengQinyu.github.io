import{_ as s,a as n,a2 as p,o as e}from"./chunks/framework.DAlL-BGO.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/Linux/Ansible自动发布JavaWeb项目.md","filePath":"pages/Linux/Ansible自动发布JavaWeb项目.md","lastUpdated":1733806965000}'),t={name:"pages/Linux/Ansible自动发布JavaWeb项目.md"};function l(c,a,o,i,r,u){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="一、-简介" tabindex="-1">一、 简介 <a class="header-anchor" href="#一、-简介" aria-label="Permalink to &quot;一、 简介&quot;">​</a></h2><p>CentOS7下使用Ansible自动发布Web项目到tomcat</p><h2 id="二、准备" tabindex="-1">二、准备 <a class="header-anchor" href="#二、准备" aria-label="Permalink to &quot;二、准备&quot;">​</a></h2><ul><li><ol><li>主机信息</li></ol></li></ul><blockquote><p>192.168.0.100 本地机器，ansible安装的机器，操作都在这台机器 192.168.0.101 远程机器1，tomcat运行的机器，要发布到这台机 192.168.0.102 远程机器2，tomcat运行的机器，要发布到这台机</p></blockquote><p>首先需要确保 <code>192.168.0.100</code> 可以远程<code>ssh</code>到 <code>192.168.0.101</code> 和 <code>192.168.0.102</code>，参考 <a href="/pages/Linux/上传公钥实现ssh登录.html">上传公钥实现ssh登录</a>；</p><p>两台远程主机都安装了<code>JDK</code>，安装目录是 <code>/opt/jdk</code></p><ul><li><ol start="2"><li>安装Ansible</li></ol></li></ul><p>在本地机器<code>192.168.0.100</code>安装<code>Ansible</code>。整个过程都是在<code>192.168.0.100</code>操作，不用操作另外两台机器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ yum install -y ansible</span></span></code></pre></div><p>查看版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ ansible --version</span></span></code></pre></div><ul><li><ol start="3"><li>配置远程主机</li></ol></li></ul><p>在<code>192.168.0.100</code>设置两台远程机器的别名为<code>tomcat</code>，修改ansible配置文件 <code>/etc/ansible/hosts</code>并添加下列配置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[tomcat]</span></span>
<span class="line"><span>192.168.0.101</span></span>
<span class="line"><span>192.168.0.102</span></span></code></pre></div><p>检查是否可以成功连接远程主机</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ ansible tomcat -m ping</span></span></code></pre></div><p>成功时返回“pong”,如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>192.168.0.101 | SUCCESS =&gt; {</span></span>
<span class="line"><span>    &quot;ansible_facts&quot;: {</span></span>
<span class="line"><span>        &quot;discovered_interpreter_python&quot;: &quot;/usr/bin/python&quot;</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;changed&quot;: false, </span></span>
<span class="line"><span>    &quot;ping&quot;: &quot;pong&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>192.168.0.101 | SUCCESS =&gt; {</span></span>
<span class="line"><span>    &quot;ansible_facts&quot;: {</span></span>
<span class="line"><span>        &quot;discovered_interpreter_python&quot;: &quot;/usr/bin/python&quot;</span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    &quot;changed&quot;: false, </span></span>
<span class="line"><span>    &quot;ping&quot;: &quot;pong&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="三、配置tomcat并上传" tabindex="-1">三、配置tomcat并上传 <a class="header-anchor" href="#三、配置tomcat并上传" aria-label="Permalink to &quot;三、配置tomcat并上传&quot;">​</a></h2><p>下载 <code>apache-tomcat-7.0.94.tar.gz</code>, 路径 <code>/opt/download/apache-tomcat-7.0.94.tar.gz</code></p><p>添加bash脚本 <code>upload-tomcat.sh</code> 替换配置并重新打包tomcat，脚本也放在<code>/opt/download</code>中。 脚本如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>set -e</span></span>
<span class="line"><span># 配置信息</span></span>
<span class="line"><span>SOURCE_HOME=/opt/download</span></span>
<span class="line"><span>TOMCAT_PKG=apache-tomcat-7.0.94</span></span>
<span class="line"><span>TOMCAT_PORT=8080</span></span>
<span class="line"><span>JDK_HOME=/opt/jdk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p uploader</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 1 删除旧文件</span></span>
<span class="line"><span>cd uploader</span></span>
<span class="line"><span>rm -rf *</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2 复制文件</span></span>
<span class="line"><span>cp \${SOURCE_HOME}/\${TOMCAT_PKG}.tar.gz .</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3 解压并重新命名</span></span>
<span class="line"><span>tar -zxf \${TOMCAT_PKG}.tar.gz</span></span>
<span class="line"><span>rm -f \${TOMCAT_PKG}.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 添加备份目录和配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p \${TOMCAT_PKG}/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &#39;&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;Server port=&quot;-1&quot; shutdown=&quot;SHUTDOWN&quot;&gt;</span></span>
<span class="line"><span>  &lt;Listener className=&quot;org.apache.catalina.startup.VersionLoggerListener&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Listener className=&quot;org.apache.catalina.core.AprLifecycleListener&quot; SSLEngine=&quot;on&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Listener className=&quot;org.apache.catalina.core.JreMemoryLeakPreventionListener&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Listener className=&quot;org.apache.catalina.mbeans.GlobalResourcesLifecycleListener&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Listener className=&quot;org.apache.catalina.core.ThreadLocalLeakPreventionListener&quot; /&gt;</span></span>
<span class="line"><span>  &lt;GlobalNamingResources&gt;</span></span>
<span class="line"><span>    &lt;Resource name=&quot;UserDatabase&quot; auth=&quot;Container&quot;</span></span>
<span class="line"><span>              type=&quot;org.apache.catalina.UserDatabase&quot;</span></span>
<span class="line"><span>              description=&quot;User database that can be updated and saved&quot;</span></span>
<span class="line"><span>              factory=&quot;org.apache.catalina.users.MemoryUserDatabaseFactory&quot;</span></span>
<span class="line"><span>              pathname=&quot;conf/tomcat-users.xml&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/GlobalNamingResources&gt;</span></span>
<span class="line"><span>  &lt;Service name=&quot;Catalina&quot;&gt;</span></span>
<span class="line"><span>    &lt;Connector port=&quot;&#39;\${TOMCAT_PORT}&#39;&quot; protocol=&quot;org.apache.coyote.http11.Http11NioProtocol&quot;</span></span>
<span class="line"><span>               connectionTimeout=&quot;20000&quot;</span></span>
<span class="line"><span>               redirectPort=&quot;8443&quot;</span></span>
<span class="line"><span>               relaxedPathChars=&quot;|{}&quot;</span></span>
<span class="line"><span>               relaxedQueryChars=&quot;|{}&quot;</span></span>
<span class="line"><span>               URIEncoding=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;Engine name=&quot;Catalina&quot; defaultHost=&quot;localhost&quot;&gt;</span></span>
<span class="line"><span>      &lt;Realm className=&quot;org.apache.catalina.realm.LockOutRealm&quot;&gt;</span></span>
<span class="line"><span>        &lt;Realm className=&quot;org.apache.catalina.realm.UserDatabaseRealm&quot;</span></span>
<span class="line"><span>               resourceName=&quot;UserDatabase&quot;/&gt;</span></span>
<span class="line"><span>      &lt;/Realm&gt;</span></span>
<span class="line"><span>      &lt;Host name=&quot;localhost&quot;  appBase=&quot;webapps&quot;</span></span>
<span class="line"><span>            unpackWARs=&quot;false&quot; autoDeploy=&quot;false&quot;&gt;</span></span>
<span class="line"><span>        &lt;Valve className=&quot;org.apache.catalina.valves.AccessLogValve&quot; directory=&quot;logs&quot;</span></span>
<span class="line"><span>               prefix=&quot;localhost_access_log&quot; suffix=&quot;.txt&quot;</span></span>
<span class="line"><span>               pattern=&quot;%h %l %u %t &amp;quot;%r&amp;quot; %s %b&quot; /&gt;</span></span>
<span class="line"><span>      &lt;/Host&gt;</span></span>
<span class="line"><span>    &lt;/Engine&gt;</span></span>
<span class="line"><span>  &lt;/Service&gt;</span></span>
<span class="line"><span>&lt;/Server&gt;&#39; &gt; \${TOMCAT_PKG}/conf/server.xml</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加JVM配置（可选）</span></span>
<span class="line"><span>sed -i &#39;107iJAVA_OPTS=&quot;-Xms512m -Xmx4096m -Xss1024K -XX:PermSize=128m -XX:MaxPermSize=512m&quot;&#39; \${TOMCAT_PKG}/bin/catalina.sh</span></span>
<span class="line"><span># 设置jdk路径</span></span>
<span class="line"><span>sed -i &#39;107iJAVA_HOME=&quot;&#39;\${JDK_HOME}&#39;&quot;&#39; \${TOMCAT_PKG}/bin/catalina.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd \${TOMCAT_PKG}/webapps</span></span>
<span class="line"><span>rm -rf *</span></span>
<span class="line"><span>cd ../../</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重新打包</span></span>
<span class="line"><span>tar -czf \${TOMCAT_PKG}.tar.gz -C \${TOMCAT_PKG} .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd \${SOURCE_HOME}</span></span>
<span class="line"><span>#4. 执行ansible脚本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ansible-playbook upload-tomcat.yml</span></span></code></pre></div><p>upload-tomcat.yml配置如下，将上面重新生成的tomcat压缩包上传到远程机器并解压</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: tomcat</span></span>
<span class="line"><span>  remote_user: root</span></span>
<span class="line"><span>  vars:</span></span>
<span class="line"><span>    archive_file: &quot;/opt/download/uploader/apache-tomcat-7.0.94.tar.gz&quot;</span></span>
<span class="line"><span>    target_path: /opt/project</span></span>
<span class="line"><span>    target_name: 8080-tomcat-7</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: delete directory</span></span>
<span class="line"><span>      file:</span></span>
<span class="line"><span>        path: &quot;{{target_path}}/{{target_name}}&quot;</span></span>
<span class="line"><span>        state: absent</span></span>
<span class="line"><span>    - name: create directory</span></span>
<span class="line"><span>      file:</span></span>
<span class="line"><span>        path: &quot;{{target_path}}/{{target_name}}&quot;</span></span>
<span class="line"><span>        state: directory</span></span>
<span class="line"><span>    - name: upload file and unarchive</span></span>
<span class="line"><span>      unarchive:</span></span>
<span class="line"><span>        copy: yes</span></span>
<span class="line"><span>        src: &quot;{{archive_file}}&quot;</span></span>
<span class="line"><span>        dest: &quot;{{target_path}}/{{target_name}}&quot;</span></span></code></pre></div><p>执行脚本上传文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ bash upload-tomcat.sh</span></span></code></pre></div><h2 id="四、发布web项目并重启" tabindex="-1">四、发布web项目并重启 <a class="header-anchor" href="#四、发布web项目并重启" aria-label="Permalink to &quot;四、发布web项目并重启&quot;">​</a></h2><p>添加bash脚本 <code>release.sh</code> 从git上clone项目并打包。脚本中的 <code>common/variable.sh</code> 中设置了一些全局变量，保存程序路径信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>set -e</span></span>
<span class="line"><span>source ../common/variable.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORK_SPACE=\${PROJECT_HOME}/web1</span></span>
<span class="line"><span>CONF_SPACE=\${TASK_HOME}/web1/conf</span></span>
<span class="line"><span>TARGET_FILE=web1-0.0.1-SNAPSHOT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd \${WORK_SPACE}</span></span>
<span class="line"><span>echo &quot;=====================&gt;&gt;  进入目录:&quot; \${WORK_SPACE}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 1. package</span></span>
<span class="line"><span>git fetch --all</span></span>
<span class="line"><span>git reset --hard origin/master</span></span>
<span class="line"><span>mLog web1 $(git rev-parse HEAD)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2.替换配置文件</span></span>
<span class="line"><span>cp -r \${CONF_SPACE}/classes/* \${WORK_SPACE}/src/main/resources</span></span>
<span class="line"><span>cp \${CONF_SPACE}/web.xml  \${WORK_SPACE}/src/main/webapp/WEB-INF/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 打包</span></span>
<span class="line"><span>mvn clean package -Dmaven.test.skip=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd \${TASK_HOME}/web1</span></span>
<span class="line"><span>#4. ansible jobs</span></span>
<span class="line"><span>ansible-playbook release.yml</span></span></code></pre></div><p><code>release.yml</code> 完成压缩包的上传和备份，检查tomcat后重启tomcat。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: tomcat</span></span>
<span class="line"><span>  remote_user: root</span></span>
<span class="line"><span>  vars_files:</span></span>
<span class="line"><span>    - ../common/variable.yml</span></span>
<span class="line"><span>  vars:</span></span>
<span class="line"><span>    source_path: &quot;/opt/code/web1&quot;</span></span>
<span class="line"><span>    tomcat_path:  /opt/project/8080-tomcat-7</span></span>
<span class="line"><span>    target_path: &quot;{{ tomcat_path }}/webapps/ROOT&quot;</span></span>
<span class="line"><span>    archive_file: web1-0.0.1-SNAPSHOT.war</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: upload files</span></span>
<span class="line"><span>      copy:</span></span>
<span class="line"><span>        src: &quot;{{source_path}}/target/{{archive_file}}&quot;</span></span>
<span class="line"><span>        dest: &quot;{{tomcat_path}}/backup&quot;</span></span>
<span class="line"><span>        backup: yes</span></span>
<span class="line"><span>    - name: delete directory</span></span>
<span class="line"><span>      file:</span></span>
<span class="line"><span>        path: &quot;{{target_path}}&quot;</span></span>
<span class="line"><span>        state: absent</span></span>
<span class="line"><span>    - name: create directory</span></span>
<span class="line"><span>      file:</span></span>
<span class="line"><span>        path: &quot;{{target_path}}&quot;</span></span>
<span class="line"><span>        state: directory</span></span>
<span class="line"><span>    - name: extract files</span></span>
<span class="line"><span>      unarchive:</span></span>
<span class="line"><span>        src: &quot;{{tomcat_path}}/backup/{{archive_file}}&quot;</span></span>
<span class="line"><span>        dest: &quot;{{target_path}}&quot;</span></span>
<span class="line"><span>        remote_src: yes</span></span>
<span class="line"><span>    - name: checking tomcat</span></span>
<span class="line"><span>      shell: ps -ef | grep {{tomcat_path}} | grep -v grep | awk &#39;{print $2}&#39;</span></span>
<span class="line"><span>      register: command_result</span></span>
<span class="line"><span>    - name: stop tomcat</span></span>
<span class="line"><span>      shell: &quot;kill -9 {{command_result.stdout}}&quot;</span></span>
<span class="line"><span>      when: command_result.stdout != &#39;&#39;</span></span>
<span class="line"><span>    - debug: msg=&quot;tomcat was killed&quot;</span></span>
<span class="line"><span>      when: command_result.stdout == &#39;&#39;</span></span>
<span class="line"><span>    - name: start the tomcat</span></span>
<span class="line"><span>      shell: setsid /bin/sh -i -c &quot;{{ tomcat_path }}/bin/startup.sh&quot;</span></span></code></pre></div><p><code>common/variable.yml</code>中可以添加一些公用的配置。其它<code>yml</code>中使用 <code>vars_files</code>引入即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>release_home: /opt/download</span></span></code></pre></div><p>执行脚本发布项目,以后程序更新只需要重新执行该脚本即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ bash release.sh</span></span></code></pre></div><p>具体的文档可以参考官网 <a href="https://docs.ansible.com/" target="_blank" rel="noreferrer">Ansible官网</a></p><p>五、优化改进</p><p>程序使用Git作为版本控制库，可以使用一些工具（jenkins）检测项目是否更新，检测到之后执行 <code>release.sh</code> 发布项目即可，不用手动执行。</p><p>重启tomcat的另一个方式： 可以将tomcat添加为服务，修改<code>release.yml</code>重启脚本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    - name: restart tomcat8080.service</span></span>
<span class="line"><span>      service: </span></span>
<span class="line"><span>        name: tomcat8080.service</span></span>
<span class="line"><span>        state: restarted</span></span></code></pre></div>`,41)]))}const m=s(t,[["render",l]]);export{h as __pageData,m as default};
