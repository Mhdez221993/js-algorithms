#include <iostream>

void insertAtIndex(int arr[], int sizeOfArray, int index, int element)
{
  int size = 0;
  for (int i = 0; i < sizeOfArray; i++)
  {
    if (arr[i] != 0)
      size += 1;
  }

  for (int i = size; i >= index; i--)
  {
    arr[i] = arr[i - 1];
  }

  arr[index] = element;
}

int main()
{
  int sizeOfArray = 10;
  int arr[sizeOfArray]{1, 2, 3, 4, 5, 6, 7, 8, 1000};
  int prove[sizeOfArray]{100, 1, 2, 3, 4, 4, 10, 10, 10, 10};
  int index = 0;
  int element = 100;
  insertAtIndex(arr, sizeOfArray, index, element);

  for (int i = 0; i < sizeOfArray; i++)
  {
    printf("%d ", arr[i]);
  }
  printf("\n");
  return 0;
}
