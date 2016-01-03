# Identify the kth smallest element in an array of n elements

This is also known as Order Statistics problem.

There are many ways to solve this problem.

* Naive way: Sort the array and pick the Kth element from it.
* Use Quickselect algo, which uses Quicksort algo partitioning logic. https://en.wikipedia.org/wiki/Quickselect
* Min heap.

One important consideration is whether the array contains duplicates.
If the array contains duplicates then we have to tweak the Quickselect and Min Heap to ignore the duplicates.
