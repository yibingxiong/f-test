function test1(k,a,b) {
  return test2(a,b) * k;
}

function test2(a,b) {
  return a + b;
}

test1(2,1,4);
