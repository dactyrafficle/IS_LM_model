function GET_INPUT_VALUES() {

  let a = {'exo':null};
  let b = {'exo':null};

  a.exo = {
   'c': parseFloat(state_a_c.value),
   't': parseFloat(state_a_t.value),
   'G': parseFloat(state_a_G.value),
   'I_0': parseFloat(state_a_I_0.value),
   'kappa': parseFloat(state_a_kappa.value),
   'lambda': parseFloat(state_a_lambda.value),
   
   'X_0': parseFloat(state_a_X_0.value),
   'Y_f': parseFloat(state_a_Y_f.value),
   'rho': parseFloat(state_a_rho.value),
   'sigma': parseFloat(state_a_sigma.value),
    
   'IM_0': parseFloat(state_a_IM_0.value),
   'nu': parseFloat(state_a_nu.value),
   'tau': parseFloat(state_a_tau.value),

   'M_s': parseFloat(state_a_M_s.value),
   'P': parseFloat(state_a_P.value),
   'L_0': parseFloat(state_a_L_0.value),
   'delta': parseFloat(state_a_delta.value),
   'theta': parseFloat(state_a_theta.value),
   
   'r':parseFloat(state_a_r.value),
   'Epi':parseFloat(state_a_Epi.value),
   'epsilon':parseFloat(state_a_epsilon.value)
  }
  
  b.exo = {
   'c': parseFloat(state_b_c.value),
   't': parseFloat(state_b_t.value),
   'G': parseFloat(state_b_G.value),
   'I_0': parseFloat(state_b_I_0.value),
   'kappa': parseFloat(state_b_kappa.value),
   'lambda': parseFloat(state_b_lambda.value),
   
   'X_0': parseFloat(state_b_X_0.value),
   'Y_f': parseFloat(state_b_Y_f.value),
   'rho': parseFloat(state_b_rho.value),
   'sigma': parseFloat(state_b_sigma.value),
    
   'IM_0': parseFloat(state_b_IM_0.value),
   'nu': parseFloat(state_b_nu.value),
   'tau': parseFloat(state_b_tau.value),

   'M_s': parseFloat(state_b_M_s.value),
   'P': parseFloat(state_b_P.value),
   'L_0': parseFloat(state_b_L_0.value),
   'delta': parseFloat(state_b_delta.value),
   'theta': parseFloat(state_b_theta.value),

   'r':parseFloat(state_b_r.value),
   'Epi':parseFloat(state_b_Epi.value),
   'epsilon':parseFloat(state_b_epsilon.value)
  }

  return {
    'a':a,
    'b':b
  } 
}