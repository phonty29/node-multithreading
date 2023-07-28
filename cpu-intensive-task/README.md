commands:

```
node http-server
```

To check the speed of computation on single thread, choose some big integer and run

```
node speed-test
```

I tried with the value = 20_000_000_000 and here are my results:

- request for method with 4 threads: 20 seconds
- request for method on single thread: 1 minute 15 seconds
- run process with single thread(speed-test): 1 minute 13 seconds 

All of them returned the result = 2.666666666866966e+30