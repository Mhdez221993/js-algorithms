#include <bits/stdc++.h>
using namespace std;

// Print a 2-D matrix, given the pointer to the 1st element and the matrix dimensions
void print_matrix(int *p, int row, int col)
{
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      cout << *(p + i * col + j) << " ";
    }
    cout << endl;
  }
}

int main()
{
  int a[][4] = {
      {1, 2, 3, 4},
      {5, 6, 7, 8},
      {9, 10, 11, 12}};
  print_matrix((int *)a, 3, 4);
}
