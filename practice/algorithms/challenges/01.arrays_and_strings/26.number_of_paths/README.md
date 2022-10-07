# Number of Paths

<p>You’re testing a new driverless car that is located at the Southwest (bottom-left) corner of an <code>n×n</code> grid. The car is supposed to get to the opposite, Northeast (top-right), corner of the grid. Given <code>n</code>, the size of the grid’s axes, write a function <code>numOfPathsToDest</code> that returns the number of the possible paths the driverless car can take.</p>
<div class="image-wrapper">

<p><img src="https://www.pramp.com/img/content/img07.png" alt="alt" title="the car may move only in the white squares" style="width:700px; height:400px; ">
<br>
the car may move only in the white squares</p>
</div>

<p>For convenience, let’s represent every square in the grid as a pair <code>(i, j)</code>. The first coordinate in the pair denotes the east-to-west axis, and the second coordinate denotes the south-to-north axis. The initial state of the car is <code>(0, 0)</code>, and the destination is <code>(n-1, n-1)</code>.</p>

<p>The car must abide by the following two rules:
it cannot cross the diagonal border. In other words, in every step the position <code>(i, j)</code> needs to maintain <code>i &gt; = j</code>. See the illustration above for <code>n = 5</code>.
In every step, it may go one square North (up), or one square East (right), but not both. E.g. if the car is at <code>(3, 1)</code>, it may go to <code>(3, 2)</code> or <code>(4, 1)</code>.</p>
<p>Explain the correctness of your function, and analyze its time and space complexities.</p>
<p><strong>Example:</strong></p>
<pre style="position: relative; "><code class="language-pramp hljs">input:  n = <span class="hljs-number">4</span>

</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
<p><strong>Constraints:</strong></p>
<ul>
<li>
<p><strong>[time limit] 5000ms</strong></p>
</li>
<li>
<p><strong>[input] integer</strong> <code>n</code></p>
<ul>
<li>1 ≤ n ≤ 100</li>
</ul>
</li>
<li>
<p><strong>[output] integer</strong></p>
</li>
</ul>
</div>
