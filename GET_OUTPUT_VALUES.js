function GET_OUTPUT_VALUES(INPUT_VALUES) {

  let a = INPUT_VALUES.a;
  let b = INPUT_VALUES.b;

  a.endo = {};
  b.endo = {};
  
  a.temp = {};
  b.temp = {};
  
  // GET NOMINAL INTEREST
  a.endo.i = a.exo.r + a.exo.Epi;
  b.endo.i = b.exo.r + b.exo.Epi;
  
  // GET GDP VIA LM
  a.endo.Y = (a.exo.M_s/(a.exo.P*a.exo.L_0*a.endo.i**a.exo.theta))**(1/a.exo.delta);
  b.endo.Y = (b.exo.M_s/(b.exo.P*b.exo.L_0*b.endo.i**b.exo.theta))**(1/b.exo.delta);
 
  // GET MONEY DEMAND
  a.endo.L = a.exo.L_0 * a.endo.Y**a.exo.delta * a.endo.i**a.exo.theta;
  b.endo.L = b.exo.L_0 * b.endo.Y**b.exo.delta * b.endo.i**b.exo.theta;
  
  // GET TAX
  a.endo.T = a.exo.t*a.endo.Y;
  b.endo.T = b.exo.t*b.endo.Y;
  
  // GET CONSUMPTION
  a.endo.C = a.exo.c*(a.endo.Y-a.endo.T);
  b.endo.C = b.exo.c*(b.endo.Y-b.endo.T);

  // GET INVESTMENT
  a.endo.I = a.exo.I_0*a.endo.Y**a.exo.kappa*a.exo.r**a.exo.lambda;
  b.endo.I = b.exo.I_0*b.endo.Y**b.exo.kappa*b.exo.r**b.exo.lambda;

  // GET EXCHANGE RATE - USE N-R METHOD
  a.temp.MA = a.endo.C + a.endo.I + a.exo.G;
  b.temp.MA = b.endo.C + b.endo.I + b.exo.G;

  a.temp.SA = a.exo.X_0*a.exo.Y_f**a.exo.rho;
  b.temp.SA = b.exo.X_0*b.exo.Y_f**b.exo.rho;
  
  a.temp.KA = a.exo.IM_0*a.endo.Y**a.exo.nu;
  b.temp.KA = b.exo.IM_0*b.endo.Y**b.exo.nu;
  
  a.temp.q = (a.endo.Y - a.temp.MA) / a.temp.KA;
  b.temp.q = (b.endo.Y - b.temp.MA) / b.temp.KA;
  
  a.temp.a = a.temp.SA / a.temp.KA;
  b.temp.a = b.temp.SA / b.temp.KA;
  
  a.temp.m = a.exo.tau / a.exo.sigma;
  b.temp.m = b.exo.tau / b.exo.sigma;
  
  a.temp.x = SOLVE_LAMBERT(1, a.temp.m, a.temp.a, a.temp.q);
  b.temp.x = SOLVE_LAMBERT(1, b.temp.m, b.temp.a, b.temp.q);
  
  a.endo.e = a.temp.x.x**(1/a.exo.sigma);
  b.endo.e = b.temp.x.x**(1/b.exo.sigma);
  
  // GET EXPORTS
  a.endo.X = a.exo.X_0*a.exo.Y_f**a.exo.rho*a.endo.e**a.exo.sigma;
  b.endo.X = b.exo.X_0*b.exo.Y_f**b.exo.rho*b.endo.e**b.exo.sigma;
  
  // GET IMPORTS
  a.endo.IM = a.exo.IM_0*a.endo.Y**a.exo.nu*a.endo.e**a.exo.tau;
  b.endo.IM = b.exo.IM_0*b.endo.Y**b.exo.nu*b.endo.e**b.exo.tau;
  
  // GET NX
  a.endo.NX = a.endo.X - a.endo.IM;
  b.endo.NX = b.endo.X - b.endo.IM;
  
  a.endo.Y_IS = a.endo.C + a.endo.I + a.exo.G + a.endo.NX;
  b.endo.Y_IS = b.endo.C + b.endo.I + b.exo.G + b.endo.NX;
  
  return {
   'a':a,
   'b':b
  } 
}


