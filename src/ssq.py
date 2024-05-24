def ssq(l):
  s = 0
  for i in range(len(l)):
    if l[i] % 2 == 0:
      s += l[i] ** 2
  return s

print(ssq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
