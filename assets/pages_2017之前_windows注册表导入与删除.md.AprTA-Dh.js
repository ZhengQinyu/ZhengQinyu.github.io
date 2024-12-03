import{_ as l,c as t,j as n,a as s,o as a}from"./chunks/framework.BQmytedh.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/2017之前/windows注册表导入与删除.md","filePath":"pages/2017之前/windows注册表导入与删除.md","lastUpdated":1732945848000}'),o={name:"pages/2017之前/windows注册表导入与删除.md"};function r(d,e,i,_,p,c){return a(),t("div",null,e[0]||(e[0]=[n("p",null,"注册表导入与删除",-1),n("p",null,[s("增加文件，文件格式是"),n("code",null,".reg"),s("。导入如下格式：")],-1),n("pre",null,[n("code",null,`Windows Registry Editor Version 5.00  


[HKEY_CLASSES_ROOT\\Python.File\\shell\\runas]  
"HasLUAShield"=""  


[HKEY_CLASSES_ROOT\\Python.File\\shell\\runas\\command]  
@="path \\"%1\\" %*" 
`)],-1),n("p",null,'删除如下格式，就是在导入的记录前加 "-",eg:',-1),n("pre",null,[n("code",null,`Windows Registry Editor Version 5.00  


[-HKEY_CLASSES_ROOT\\Python.File\\shell\\runas]  
"HasLUAShield"=""  


[-HKEY_CLASSES_ROOT\\Python.File\\shell\\runas\\command]  
@="path \\"%1\\" %*" 
`)],-1)]))}const h=l(o,[["render",r]]);export{S as __pageData,h as default};
