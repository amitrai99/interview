# Lambda Calculus (LC)

* Developed by American logician Alonzo Church in 1930s as a mathematical formalism to express computation with functions.
* The idea of functions accepting other functions as arguments comes from Lambda calculus.
* Many functional languages like Lisp, Haskell, ML are based on LC.

## Syntax of Lambda Calculus

* Syntax of LC is written in context free grammer (BNF)
```
<expr> ::= <constant>
         | <variable>
         | (<expr></expr>)
         | (λ<variable>.<expr>)
```
* `<constant>` - are numbers like `0`, `1`, or predifned functions like `+` or `*`
* `<variable>` - are names like `x`, `y`
* `(<expr></expr>)` is `function application`. This is defined using `prefix notation` where the operation (first `<expr`) is on the left hand side and argument (second `<expr>`) is on the right hand side.
* `(λ<variable>.<expr>)` is `lambda abstraction`, used for defining new function.

### Parentheses
* If there is no ambiguity then we can drop the parentheses else we keep them

## Lambda Abstraction aka Function definition
* `(λ<variable>.<expr>)` is called `lambda abstraction`, used for defining new function.
** It defines a lambda/function that takes a variable and applies an expression on it. Note that this uses `prefix notation`

Example: 

`(λx.((+ 1)x))`: A lambda that takes a single argument `x` and adds `1` to it.

* `(λx.((+ 1)x))`, can be written as `(λx. + 1x)`
* This defines a lambda/function that takes a single argument `x` and adds `1` to it. It's using `prefix notation` where the operation is on the left hand side and argument is on the right hand side.
* In `Scheme` language you can write this as `(lambda(x)(+ 1 x))`
* In other words this defines a nameless function that accepts `x` and adds `1` to it.

## Function Application
* Applying a function expression on an argument.
* Uses `prefix notation`

Exmaple:
Given a function `(λx.((+ 1)x))` apply an argument 2 to it.

* Call the above function with argument `2`
** `((λx.((+ 1)x)) 2)` same as `((λx. + 1 x) 2)`
** Replace all the `x` with `2` , `((λx. + 1 2) 2)`
** Drop the `lambda` term as that is redundant
** so this finally becomes `((λx. + 1 x) 2)` => `(+ 1 2) => 3`

## Expressions
The basic operation of lambda calculus is the application of expressions.

* Usually we keep the constants near the operation but we can also swap the position of argument and constant and this is called `beta conversion`

Normal:
`((λx. + 1 x) 2)` => `(+ 1 2) => 3`

### Beta conversion

`((λx. + x 1) 2)` => `(+ 2 1) => 3`

The end result is the same in both the cases.

## Variables

* Variables are two types `bound` and `free`

### bound variable
* `bound` variables are the ones that are defined as arguments of a lambda e.g. `(λx. E)` here `x` is `bound`.
* their scope is limited to the expression `E`

### unbound/free variables
* not defined as argument to lambda but used in expression.
* `(λx. + x y)` here y is unbound

Example:
* `(λx. + x y)` here `x` is bound but `y` is free.

```
var y = 1; // free variable

function(x) {// x is bound
 x + y;
}
```

