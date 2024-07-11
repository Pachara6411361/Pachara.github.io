fun test 0 = 0
  | test 1 = 1
  | test n = test(n-2) + test(n-3);
