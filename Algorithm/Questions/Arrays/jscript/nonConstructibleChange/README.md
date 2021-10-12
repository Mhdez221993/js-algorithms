# Non-Constructible Change

Given an array of positive integers representing the values of coins in your
possession, write a function that returns the minimum amount of change (the
minimum sum of money) that you <b>cannot</b> create. The given coins can have
any positive integer value and aren't necessarily unique (i.e., you can have
multiple coins of the same value).

For example, if you're given <span>coins = [1, 2, 5]</span>, the minimum
amount of change that you can't create is <span>4</span>. If you're given no
coins, the minimum amount of change that you can't create is <span>1</span>.

## Sample Input

<pre>
coins = [5, 7, 1, 1, 2, 3, 22]
</pre>

## Sample Output

<pre>
20
</pre>

## Hints

### >Hint 1

One approach to solve this problem is to attempt to create every single amount
of change, starting at 1 and going up until you eventually can't create an
amount. While this approach works, there <i>is</i> a better one.

### Hint 2

Start by sorting the input array. Since you're trying to find the
<b>minimum</b> amount of change that you can't create, it makes sense to
consider the smallest coins first.

### Hint 3

To understand the trick to this problem, consider the following example:
<span>coins = [1, 2, 4]</span>. With this set of coins, we can create
<span>1, 2, 3, 4, 5, 6, 7</span> cents worth of change. Now, if we were to add
a coin of value <span>9</span> to this set, we <b>would not</b> be able to
create <span>8</span> cents. However, if we were to add a coin of value
<span>7</span>, we <b>would</b> be able to create <span>8</span> cents, and we
would also be able to create all values of change from <span>1</span> to
<span>15</span>. Why is this the case?

### Hint 4

Create a variable to store the amount of change that you can currently create
up to. Sort all of your coins, and loop through them in ascending order. At
every iteration, compare the current coin to the amount of change that you can
currently create up to. Here are the two scenarios that you'll encounter:

- The coin value is <b>greater</b> than the amount of change that you can
  currently create plus 1.

- The coin value is <b>smaller than or equal to</b> the amount of change that
  you can currently create plus 1.

In the first scenario, you simply return the current amount of change that you
can create plus 1, because you can't create that amount of change. In the
second scenario, you add the value of the coin to the amount of change that
you can currently create up to, and you continue iterating through the coins.

The reason for this is that, if you're in the second scenario, you can create
all of the values of change that you can currently create plus the value of
the coin that you just considered. If you're given coins <span>[1, 2]</span>,
then you can make <span>1, 2, 3</span> cents. So if you add a coin of value
<span>4</span>, then you can make <span>4 + 1</span> cents,
<span>4 + 2</span> cents, and <span>4 + 3</span> cents. Thus, you can make up
to <span>7</span> cents.

## Optimal Space & Time Complexity

O(nlogn) time | O(1) space - where n is the number of coins
