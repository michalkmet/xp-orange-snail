# Snail

Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

# Examples:

Example 1:
snail([[]]) #=> []

Example 2:
snail([[1]]) #=> [1]

Example 3:
snail([[1, 2],[3, 4]]) #=> [1, 2, 4, 3]

Example 4:
snail([[4, 3],[2, 1]]) #=> [4, 3, 1, 2]

Example 5:
snail([[7, 8],[9, 10]]) #=> [7, 8, 10, 9]

Example 6:
snail([[1, 5],[2, 8]]) #=> [1, 5, 8, 2]

Example 7:
snail([[1, 2, 3],[4, 5, 6],[7, 8, 9]]) #=> [1,2,3,6,9,8,7,4,5]

Example 8:
snail([1, 2, 3],[8, 9, 4],[7, 6, 5]) #=> [1,2,3,4,5,6,7,8,9]

Example 9:
snail([1,2,3,1],[4,5,6,4],[7,8,9,7],[10,11,12,10]) #=> [1,2,3,1,4,7,10, 12, 11, 10, 7, 4, 5, 6, 9, 8]
