function GET_ECONOMIC_OUTPUT(INPUT_VALUE, SOLUTION) {

 let output = {};
 
 output.T = SOLUTION.Y*INPUT_VALUE.t,
 output.C = INPUT_VALUE.c*(SOLUTION.Y - output.T);
 output.I = INPUT_VALUE.I_0*SOLUTION.Y**INPUT_VALUE.kappa*INPUT_VALUE.r**(-INPUT_VALUE.lambda);
 output.G = INPUT_VALUE.G;
 output.X = INPUT_VALUE.X_0*INPUT_VALUE.Y_f**INPUT_VALUE.rho*SOLUTION.e**(-INPUT_VALUE.sigma);
 output.IM = INPUT_VALUE.IM_0*SOLUTION.Y**INPUT_VALUE.nu*SOLUTION.e**(INPUT_VALUE.tau);
 output.NX = output.X - output.IM;
 output.e = SOLUTION.e;
 output.i = SOLUTION.i;
 output.Y = SOLUTION.Y;
 
 output.exx = SOLUTION.exx;
 output.INPUT_VALUE = INPUT_VALUE;
 output.SOLUTION = SOLUTION;
 
 return output;

}