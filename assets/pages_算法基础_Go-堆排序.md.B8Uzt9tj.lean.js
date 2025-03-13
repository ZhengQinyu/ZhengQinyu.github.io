import{_ as n,a,a2 as p,o as t}from"./chunks/framework.DAlL-BGO.js";const u=JSON.parse('{"title":"Go-堆排序","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22","title":"Go-堆排序"},"headers":[],"relativePath":"pages/算法基础/Go-堆排序.md","filePath":"pages/算法基础/Go-堆排序.md","lastUpdated":1733806965000}'),l={name:"pages/算法基础/Go-堆排序.md"};function i(e,s,c,d,o,r){return t(),a("div",null,s[0]||(s[0]=[p(`<h2 id="堆排序" tabindex="-1">堆排序 <a class="header-anchor" href="#堆排序" aria-label="Permalink to &quot;堆排序&quot;">​</a></h2><ul><li>算法实现</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func sift(list []int, left, right int) {</span></span>
<span class="line"><span>	fIdx := left</span></span>
<span class="line"><span>	sIdx := fIdx*2 + 1</span></span>
<span class="line"><span>	// 构造大根堆</span></span>
<span class="line"><span>	for sIdx &lt;= right {</span></span>
<span class="line"><span>		//判断左孩子:sIdx 右孩子:sIdx+1</span></span>
<span class="line"><span>		if sIdx &lt; right &amp;&amp; list[sIdx] &lt; list[sIdx+1] {</span></span>
<span class="line"><span>			sIdx++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		// 最终和大的儿子比较</span></span>
<span class="line"><span>		if list[fIdx] &lt; list[sIdx] {</span></span>
<span class="line"><span>			// 交换</span></span>
<span class="line"><span>			list[fIdx], list[sIdx] = list[sIdx], list[fIdx]</span></span>
<span class="line"><span>			// 交换后重新检查被修改的子节点为大根堆</span></span>
<span class="line"><span>			fIdx = sIdx</span></span>
<span class="line"><span>			sIdx = 2*fIdx + 1</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			// 已经是大根堆</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func HeapSort(list []int) {</span></span>
<span class="line"><span>	length := len(list)</span></span>
<span class="line"><span>	//建立初始堆</span></span>
<span class="line"><span>	sift(list, 0, length-1)</span></span>
<span class="line"><span>	for idx := length / 2; idx &gt;= 0; idx-- {</span></span>
<span class="line"><span>		// 从后往前调整</span></span>
<span class="line"><span>		sift(list, idx, length-1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 将大根堆的根节点和堆最后一个元素交换，重新对前面的 length - 1 调整堆</span></span>
<span class="line"><span>	for idx := length - 1; idx &gt;= 1; idx-- {</span></span>
<span class="line"><span>		list[0], list[idx] = list[idx], list[0]</span></span>
<span class="line"><span>		sift(list, 0, idx-1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 结果就是逆序输出大根堆</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>测试代码</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	list := []int{8, 4, 8, 2, 9, 10, -3, 3, 20, 15, -1}</span></span>
<span class="line"><span>	function.HeapSort(list)</span></span>
<span class="line"><span>	fmt.Println(list)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>排序结果</li></ul><blockquote><p>[-3 -1 2 3 4 8 8 9 10 15 20]</p></blockquote><ul><li>时间复杂度</li></ul><blockquote><p>O (nlgn)</p></blockquote>`,9)]))}const f=n(l,[["render",i]]);export{u as __pageData,f as default};
