function SOLVE_LAMBERT(seed, m, a, q) {

  let x = seed;
  let fx = null;
 
  for (let n = 0; n < 10; n++) {
    fx = x**m - a*x + q;
    let dfdx = m*x**(m-1) - a;
    x -= fx / dfdx;
  }
  return {
    'x':x,
    'y':fx
  }
}