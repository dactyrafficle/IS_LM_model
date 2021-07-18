
function GET_OUTPUT_SET(INPUT_SET) {

  let a = {};
  a.exo = Object.assign({},INPUT_SET.exo);;

  a.endo = {};
  a.temp = {};
  
  // GET NOMINAL INTEREST
  a.endo.i = a.exo.r + a.exo.Epi;
  
  // GET GDP VIA LM
  a.endo.Y = (a.exo.M_s/(a.exo.P*a.exo.L_0*a.endo.i**a.exo.theta))**(1/a.exo.delta);
 
  // GET MONEY DEMAND
  a.endo.L = a.exo.L_0 * a.endo.Y**a.exo.delta * a.endo.i**a.exo.theta;
  
  // GET TAX
  a.endo.T = a.exo.t*a.endo.Y;

  // GET DEFICIT
  a.endo.D = a.exo.G - a.endo.T;
  
  // GET CONSUMPTION
  a.endo.C = a.exo.c*(a.endo.Y-a.endo.T);

  // GET SAVINGS
  a.endo.S = (1-a.exo.c)*(a.endo.Y-a.endo.T);

  // GET INVESTMENT
  a.endo.I = a.exo.I_0*a.endo.Y**a.exo.kappa*a.exo.r**a.exo.lambda;
  
  // GET LOANABLE FUNDS
  a.endo.LF = a.endo.S - a.endo.I;
  
  // GET NET CAPITAL OUTFLOW
  a.endo.NCO = a.endo.S - a.endo.I - a.endo.D;

  // GET EXCHANGE RATE - USE N-R METHOD
  a.temp.MA = a.endo.C + a.endo.I + a.exo.G;

  a.temp.SA = a.exo.X_0*a.exo.Y_f**a.exo.rho;
  
  a.temp.KA = a.exo.IM_0*a.endo.Y**a.exo.nu;

  a.temp.q = (a.endo.Y - a.temp.MA) / a.temp.KA;
  
  a.temp.a = a.temp.SA / a.temp.KA;
  
  a.temp.m = a.exo.tau / a.exo.sigma;
  
  a.temp.x = SOLVE_LAMBERT(1, a.temp.m, a.temp.a, a.temp.q);
  
  a.endo.e = a.temp.x.x**(1/a.exo.sigma);
  
  // GET EXPORTS
  a.endo.X = a.exo.X_0*a.exo.Y_f**a.exo.rho*a.endo.e**a.exo.sigma;
  
  // GET IMPORTS
  a.endo.IM = a.exo.IM_0*a.endo.Y**a.exo.nu*a.endo.e**a.exo.tau;
  
  // GET NX
  a.endo.NX = a.endo.X - a.endo.IM;
  
  a.endo.Y_IS = a.endo.C + a.endo.I + a.exo.G + a.endo.NX;

  return a;
}

