function GETEXX(obj, e, r, Y) {
  // WHERE obj IS AN INPUT VALUE SET
  let T = obj.t*Y;
  let C = obj.c*Y - obj.c*T;
  let G = obj.G;
  let I = obj.I_0*Y**obj.kappa*r**(-obj.lambda); // INVESTMENT DEPENDS ON R
  let X = obj.X_0*obj.Y_f**obj.rho*e**(-obj.sigma);
  let IM = obj.IM_0*Y**obj.nu*e**obj.tau;
  let Y_ = C + G + I + X - IM;
  return (Y-Y_)**2;
};