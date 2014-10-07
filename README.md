# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

#### Max

    Returns the highest value of two numbers

    Math.max(5, 10);

    // returns 10

#### Min

    Returns the number with the lowest value

    Math.min(5, 10);

    // returns 5

#### forEach

    forEach executes the provided callback once for each element present in the array in ascending order. It is not invoked for indexes that have been deleted or elided. However, it is executed for elements that are present and have the value undefined.

    My Version:
    Loops over an array and executes an attached function

    var friends = ["Markus", "Tim", "Ilias", "Elie"];

    // old way, with a for loop
    // for (var i = 0; i < friends.length; i++) {
    //     console.log("Hello, " + friends[i] + "!");
    // }

    // cool new way, with the .forEach iterator
    friends.forEach(function (buddy) {
        console.log("Hello, " + buddy + "!");
    });

#### Map

    Map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes that are undefined, those which have been deleted or which have never been assigned values.

    My version:
    Does same as for each, but performs a callback and adds the queried objects into a new array

#### Filter

    Filter calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a true value. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callback test are simply skipped, and are not included in the new array.

    My version:
    Filter loops over an array. If the value of the callback returns a true value, it adds the value to a new array.

#### Reduce

#### Reject

* `each`
* `map`
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* `reject`: [note](http://underscorejs.org/#reject)

Use the notes provided to help guide you explanation.


### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).

