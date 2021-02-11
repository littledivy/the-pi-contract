A [smart contract](https://github.com/ArweaveTeam/SmartWeave) to compute `Math.Pi` using [Gregory-Leibniz series](https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80) on the [permaweb](https://arweave.org).

Every contract iteraction makes it precise.

```javascript
state.pi // current computed value of Pi
```

**View current contract state here: https://littledivy.github.io/the-pi-contract**

Limitation: It's JavaScript, mate. Floating point precision is...[bad](https://www.codemag.com/Article/1811041/JavaScript-Corner-Math-and-the-Pitfalls-of-Floating-Point-Numbers).

