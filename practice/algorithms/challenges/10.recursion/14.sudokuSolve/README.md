<div class="nav-tab-panel nav-tab-panel_active nav-tab-panel_markdown"><h2>Sudoku Solver</h2>
<p>Write the function <code>sudokuSolve</code> that checks whether a given sudoku board (i.e. sudoku puzzle) is solvable. If so, the function will returns <code>true</code>. Otherwise (i.e. there is no valid solution to the given sudoku board), returns <code>false</code>.</p>
<p>In sudoku, the objective is to fill a <strong>9x9</strong> board with digits so that each column, each row, and each of the nine <strong>3x3</strong> sub-boards that compose the board contains all of the digits from 1 to 9. The board setter provides a partially completed board, which for a well-posed board has a unique solution. <strong>As explained above, for this problem, it suffices to calculate whether a given sudoku board has a solution. No need to return the actual numbers that make up a solution</strong>.</p>
<p>A sudoku board is represented as a two-dimensional <strong>9x9</strong> array of the characters ‘1’, ‘2’, …, ‘9’ and the <code>'.'</code> character, which represents a blank space. The function should fill the blank spaces with characters such that the following rules apply:</p>
<ol>
<li>In every row of the array, all characters ‘1’, ‘2’, …, ‘9’ appear exactly once.</li>
<li>In every column of the array, all characters ‘1’, ‘2’, …, ‘9’ appear exactly once.</li>
<li>In every 3x3 sub-board that is illustrated below, all characters ‘1’, ‘2’, …, ‘9’ appear exactly once.</li>
</ol>
<p>A solved sudoku is a board with no blank spaces, i.e. all blank spaces are filled with characters that abide to the constraints above. If the function succeeds in solving the sudoku board, it’ll return true (false, otherwise).</p>
<p><strong>Example</strong> (more examples can be found <a href="http://www.sudokukingdom.com/" title="here" target="_blank">here</a>):</p>
<div class="image-wrapper">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Sudoku-by-L2G-20050714.svg" alt="alt" title="A typical Sudoku board setter">
<img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Sudoku-by-L2G-20050714_solution.svg" alt="alt" title="The same board with solution numbers marked in red">
</div>
<p><strong>Write a readable an efficient code, explain how it is built and why you chose to build it that way.</strong></p>
</div>
