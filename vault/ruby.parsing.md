---
id: f5422da7-127f-4bb7-9c0e-66a4b3bcde8a
title: Parsing
desc: ''
updated: 1617555031603
created: 1617199483911
---


##### Language Hierarchy (Chomsky)
  * Type 0: Unrestricted (e.g. English)
  * Type 1: Context-sensitive
  * Type 2: Context-free (e.g. programming langs)
  * Type 3: Regular
    * Can only be properly parsed by regular expression engines

##### Two types of parsers:
  * Top-Down
    * Recursive Descend
    * Typically written by hand
  * Bottom-Up
    * aka LALR
    * Shift-Reduce
    * Harder to write by hand

##### Parsing Tools
  * Ruby based
    * `StringScanner`
    * Racc
    * Rexical
  * Unix based
    * yacc/bison
    * lex/flex

[[rails.journey]]
