function UPDATE_NX_GRAPH(box, OUTPUT_VALUES) {

  box.clear();


  // cant be log-log bc nx can be negative
  let p0 = {}; 
  p0.a = {'x':Math.log(OUTPUT_VALUES.a.endo.e),'y':OUTPUT_VALUES.a.endo.NX};
  p0.b = {'x':Math.log(OUTPUT_VALUES.b.endo.e),'y':OUTPUT_VALUES.b.endo.NX};

  box.RESCALE_BASED_ON_CM(0.7, 2, 7000, [p0.a, p0.b]);
  box.rangex(-2.6, 4.6);
  box.rangey(-20000, 20000);
  
  // NX = 0
  box.CONNECTVALUES2([{'x':box.data.range.x.min,'y':0},{'x':box.data.range.x.max,'y':0}],'#ddd', 1);
  
  
  let a_arr = [];
  let b_arr = [];

  for (let i = box.data.range.x.min; i <= box.data.range.x.max; i += 0.01) {
    let s = Math.E**i;
    a_arr.push({'x':i,'y':SOLVE_Y_GIVEN_E(s, OUTPUT_VALUES.a).NX})
    b_arr.push({'x':i,'y':SOLVE_Y_GIVEN_E(s, OUTPUT_VALUES.b).NX})
  }

  box.CONNECTVALUES2(a_arr, '#fc08', 2);
  box.CONNECTVALUES2(b_arr, '#adc2eb', 1);


  // THE EXCHANGE RATES
  box.CONNECTVALUES2([{'x':p0.a.x,'y':box.data.range.y.min},{'x':p0.a.x,'y':box.data.range.y.max}],'#ddd', 1);
  box.CONNECTVALUES2([{'x':p0.b.x,'y':box.data.range.y.min},{'x':p0.b.x,'y':box.data.range.y.max}],'#ddd', 1);
  

  // SHOW POINTS
  box.SHOWVALUE(p0.a, '#FC0', 3);
  box.SHOWVALUE(p0.b, '#adc2eb', 2);

  box.SHOW_FLOATING_LOG_X_AXIS(9);
  box.SHOW_FLOATING_LOG_Y_AXIS(9);
}


function SOLVE_Y_GIVEN_E(s, obj) {

  let alpha = 1 - obj.exo.c + obj.exo.c*obj.exo.t;
  let beta = obj.exo.IM_0*s**obj.exo.tau;
  let gamma = obj.exo.I_0*obj.exo.r**obj.exo.lambda;
  
  let x = obj.exo.X_0*obj.exo.Y_f**obj.exo.rho*s**obj.exo.sigma;
  let g = obj.exo.G;

  let seed = 1000; // initial y value
  let y = SOLVE_BIG_LAMBERT(seed, alpha, beta, obj.exo.nu, gamma, obj.exo.kappa, (g+x));
  
  return {
    'Y':y.x,
    'NX': obj.exo.X_0*obj.exo.Y_f**obj.exo.rho*s**obj.exo.sigma - beta*y.x**obj.exo.nu
  };
  
}

function SOLVE_BIG_LAMBERT(seed, alpha, beta, nu, gamma, kappa, h) {

  let y = seed;
  let f = null;
 
  for (let n = 0; n < 10; n++) {
    f = alpha*y + beta*y**nu - gamma*y**kappa - h;
    let df = alpha + nu*beta*y**(nu-1) - kappa*gamma*y**(kappa-1);
    y -= f / df;
  }
  return {
    'x':y,
    'y':f
  }
}