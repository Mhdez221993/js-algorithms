#include <bits/stdc++.h>
using namespace std;

// Consider a library management system containing a large number of books, where one needs to store ISBN no, author, title and availability information of each book
struct book
{
  string title, author, isbn;
  bool issued;
  string member_issued;
};

int total;
book library[10];

int main()
{
  while (1)
  {
    int option;
    string member, author, isbn, title;
    cin >> option;
    if (!option)
      break;

    switch (option)
    {
    case 1:
      for (int i = 0; i < total; i++)
        cout << "Name: " << library[i].title << ", Author: " << library[i].author << ", ISBN: " << library[i].isbn << endl;
      break;
    case 2:
      cout << "Enter Name, Author & ISBN\n";
      cin >> library[total].title >> library[total].author >> library[total].isbn;
      library[total].issued = false;
      library[total].member_issued = "";
      total++;
      break;
    case 3:
      cin >> author;
      for (int i = 0; i < total; i++)
        if (library[i].author == author)
          cout << library[i].title << endl;
      break;
    case 4:
      cout << "Total Books: " << total << endl;
      break;
    case 5:
      cout << "Enter ISBN of the book and the member\n";
      cin >> isbn >> member;
      for (int i = 0; i < total; i++)
        if (library[i].isbn == isbn)
        {
          if (library[i].issued)
            cout << "Book already Issued\n";
          else
          {
            library[i].issued = true;
            library[i].member_issued = member;
          }
          break;
        }
      break;
    default:
      break;
    }
  }

  return 0;
}
