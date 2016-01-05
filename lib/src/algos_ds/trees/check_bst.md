# Given a binary tree, write a function to check if it is a BST.

## Analysis

Before jumping into the solution for this problem, it is important to understand a few basic properties of Binary Search Trees(BST):
* A Binary Search Tree is a binary tree, where value/data at every node(not a leaf) in the tree is greater than values of all the elements present in its left subtree and smaller than the values of all the elements present in its right subtree.
* Every leaf is a BST by itself.
* An inorder traversal of a BST leads to a sorted list of the elements present in the tree. (An inorder traversal is a traversal of the form L-N-R)

Using these two properties, let us start with some basic approach to this problem.


(1) As can be seen from property 2, an inorder traversal of a BST always leads to a sorted list. Thus, the easiest
way to start solving this problem would be to make an inorder traversal on the given binary tree, saving it in an array and then check if the resulting array is sorted. If it is, then the binary tree is a BST, else it is not.
The basic problem with the this approach is that: We need to allocate an array big enough to hold the data of all the nodes in the tree.

### Complexity:
  Space: O(2n)
  Time: O(n)

(2) What we see from the above two steps is that, in order to check if a binary tree is a BST, we need to compare the two inorder nodes of the tree and make sure they are in the right order(i.e. sorted). If this is true, then the tree is a BST. This can be easily verified for the entire tree by passing the value of previous node in inorder traversal to the next node. 
