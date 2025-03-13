import{_ as n,a,a2 as p,o as l}from"./chunks/framework.DAlL-BGO.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/算法基础/Go-归并排序.md","filePath":"pages/算法基础/Go-归并排序.md","lastUpdated":1733806965000}'),t={name:"pages/算法基础/Go-归并排序.md"};function e(i,s,c,d,r,o){return l(),a("div",null,s[0]||(s[0]=[p(`<h2 id="归并排序" tabindex="-1">归并排序 <a class="header-anchor" href="#归并排序" aria-label="Permalink to &quot;归并排序&quot;">​</a></h2><ul><li>算法实现</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func merge(list []int, left, mid, right int) {</span></span>
<span class="line"><span>	lLen := mid - left + 1</span></span>
<span class="line"><span>	rLen := right - mid</span></span>
<span class="line"><span>	length := lLen + rLen</span></span>
<span class="line"><span>	result := make([]int, length)</span></span>
<span class="line"><span>	// 左边起始位置：left 右边起始位置mid + 1</span></span>
<span class="line"><span>	// 真实位置： 起始位置 + 索引位置</span></span>
<span class="line"><span>	for idx, lIdx, rIdx := 0, 0, 0; idx &lt; length; idx++ {</span></span>
<span class="line"><span>		if lIdx &gt;= lLen {</span></span>
<span class="line"><span>			result[idx] = list[mid+1+rIdx]</span></span>
<span class="line"><span>			rIdx++</span></span>
<span class="line"><span>		} else if rIdx &gt;= rLen {</span></span>
<span class="line"><span>			result[idx] = list[left+lIdx]</span></span>
<span class="line"><span>			lIdx++</span></span>
<span class="line"><span>		} else if list[left+lIdx] &gt; list[mid+1+rIdx] {</span></span>
<span class="line"><span>			result[idx] = list[mid+1+rIdx]</span></span>
<span class="line"><span>			rIdx++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			result[idx] = list[left+lIdx]</span></span>
<span class="line"><span>			lIdx++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 写回去</span></span>
<span class="line"><span>	for idx := 0; idx &lt; length; idx++ {</span></span>
<span class="line"><span>		list[left+idx] = result[idx]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func MergeSort(list []int, left, right int) {</span></span>
<span class="line"><span>	if left &lt; right {</span></span>
<span class="line"><span>		mid := (left + right) / 2</span></span>
<span class="line"><span>		MergeSort(list, left, mid)</span></span>
<span class="line"><span>		MergeSort(list, mid+1, right)</span></span>
<span class="line"><span>		merge(list, left, mid, right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>测试代码</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	list := []int{8, 4, 8, 2, 9, 10, -3, 3, 20, 15, -1}</span></span>
<span class="line"><span>	function.MergeSort(list, 0, len(list)-1)</span></span>
<span class="line"><span>	fmt.Println(list)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>排序结果</li></ul><blockquote><p>[-3 -1 2 3 4 8 8 9 10 15 20]</p></blockquote><ul><li>时间复杂度</li></ul><blockquote><p>O (nlogn)</p></blockquote><ul><li>空间复杂度</li></ul><p>就是 n + logn，所以是线性空间复杂度</p><blockquote><p>O (n)</p></blockquote>`,12)]))}const f=n(t,[["render",e]]);export{g as __pageData,f as default};
