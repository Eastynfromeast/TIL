# 2 Big O Notation

## 05. Big O Introduction

[reference](https://cs.slides.com/colt_steele/big-o-notation)

WARNING : This section contains some math

- Motivate the need for sth like Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation
- Describe what a logarithm is

How can we determine which one is the _best_ between multiple implementations of the same fn?

**We need a numeric representation of the performance of the codes**

Who cares? 누가 신경 쓰냐

- Important to have a precise vocabulary to talk about how our code performs
  - 우리 코드가 어떻게 동작하는지에 대해 정확한 어휘를 쓰는 것은 중요함
- Useful for discussing trade-offs between different approaches
  - 다른 접근법들 사이에서 각각의 장단점 균형(trade-offs)을 논의하는데 유용함
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
  - 당신의 코드가 느리거나 서로 충돌했을 때, 비효율적인 코드의 일부분을 알아내는 것은 우리의 어플리케이션의 아픈 부분을 찾아내는 것에 도움이 됨
- Less important but it comes up in interviews :(
  - 덜 중요하지만 기술 면접에서 나올 것 ^^

---

## 06. 코드 시간 재기

- An Example
  Suppose we want to write a fn that calculates the sum of all numbers from 1 up to (and including) some number n
