# BNF (BACKUS NAUR FORM)

* Invented by John Backus and Peter Naur

* BNF is a formal mathematical way of defining syntax unambigously.
* It is a meta-language

It consists of:
* Terminal symbols
* Non-terminal symbols
* Production rules

## Format
```
<LHS> ::= RHS
```

* `LHS`: Left hand side (Always a non-terminal symbol)
* `::=` is defined by
* `RHS` Right hand side (Sequence of symbols terminal or non-terminals)
* `|` symbol means `OR`

Example:

```
<digit> ::= 0|1|2|3|4|5|6|7|8|9
<letter> ::= A|B|C|D|E.....|X|Y|Z
```

Now if we define a `word` using these

```
<word> ::= <letter>|<letter>
```
This means that only two letter symbols are called `word` e.g. TO or HE. If want to make bigger `word` we need to keep repeating the `letter` symbol but this is very unsightly.

`<word> ::= letter|letter|letter|...`

## Recursion

To deal with this we use `recursive` definitions.

So a `word` can be defined as:

`<word> ::= <letter>|<letter><word>`

So we define a symbol in terms of itself.

## Parsing

The process of determining if a given symbol is valid according to the given production rule is called `parsing`.

## Syntax diagram

Syntax diagrams are graphical represenstation of BNF. It's another way to defining context-free grammar.


https://en.wikipedia.org/wiki/Syntax_diagram

## References

* https://www.youtube.com/watch?v=x1gGInKNCRw
