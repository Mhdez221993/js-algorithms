#include <bits/stdc++.h>
using namespace std;

//  Implement a list of numbers which doesn't require being provided any initial size, and can extend to as much as we want
int *start, *last;
int size;

void insert(int x)
{
  if (!start)
  {
    start = (int *)malloc(sizeof(int));
    size = 1;
    last = start;
    *last = x;
    return;
  }
  else if (last - start + 1 == size)
  {
    // Once capacity is full,
    // we realloc to double the size
    size <<= 1;
    start = (int *)realloc(start, size * sizeof(int));
  }

  // Insert the element
  *(++last) = x;
}

int main()
{
  insert(1);
  insert(2);
  insert(3);
  insert(4);
  insert(5);
  insert(6);

  int num = last - start + 1;
  int *trav = start;

  while (num--)
  {
    cout << *trav << " ";
    trav++;
  }
  cout << endl;

  return 0;
}