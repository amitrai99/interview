# Lambda Calculus (LC)

* Developed by American logician Alonzo Church in 1930s as a mathematical formalism to express computation withj functions.
* The idea of functionas accepting other functions as arguments comes from Lambda calculus.
* Many functional languages like Lisp, Haskell, ML are based on LC.

## Syntax of Lambda Calculus

* Syntax of LC is written in context free grammer (BNF)
```
<expr> ::= <constant>
         | <variable>
         | (<expr></expr>)
         | (ƛ <variable>, <expr>)
```
* `<constant>` - are numbers like `0`, `1`, or predifned functions like `+` or `*`
* `<variables>` - are names like `x`, `y`
* `(<expr></expr>)` means function application
* `(ƛ <variable>, <expr>)` means lambda abstraction for building new functions.

