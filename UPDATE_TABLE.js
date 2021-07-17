function UPDATE_TABLE(OUTPUT_VALUES) {

  let a = OUTPUT_VALUES.a;
  let b = OUTPUT_VALUES.b;
  
  document.getElementById('state_a_T').value = (a.endo.T).toFixed(0);
  document.getElementById('state_a_C').value = (a.endo.C).toFixed(0);
  document.getElementById('state_a_I').value = (a.endo.I).toFixed(0);
  document.getElementById('state_a_S').value = (a.endo.S).toFixed(0);
  document.getElementById('state_a_D').value = (a.endo.D).toFixed(0);
  document.getElementById('state_a_LF').value = (a.endo.LF).toFixed(0);
  document.getElementById('state_a_NCO').value = (a.endo.NCO).toFixed(0);
  document.getElementById('state_a_X').value = (a.endo.X).toFixed(0);
  document.getElementById('state_a_IM').value = (a.endo.IM).toFixed(0); 
  document.getElementById('state_a_NX').value = (a.endo.NX).toFixed(0);
  document.getElementById('state_a_Y_IS').value = (a.endo.Y_IS).toFixed(0);
  document.getElementById('state_a_L').value = (a.endo.L).toFixed(0);
  document.getElementById('state_a_Y_LM').value = (a.endo.Y).toFixed(0);
  document.getElementById('state_a_i').value = (a.endo.i).toFixed(2);
  document.getElementById('state_a_epsilon').value = (a.endo.e).toFixed(4);
  document.getElementById('state_a_e').value = (a.endo.e).toFixed(4);
  
  document.getElementById('state_b_T').value = (b.endo.T).toFixed(0);
  document.getElementById('state_b_C').value = (b.endo.C).toFixed(0);
  document.getElementById('state_b_I').value = (b.endo.I).toFixed(0);
  document.getElementById('state_b_S').value = (b.endo.S).toFixed(0);
  document.getElementById('state_b_LF').value = (b.endo.LF).toFixed(0);
  document.getElementById('state_b_NCO').value = (b.endo.NCO).toFixed(0);
  document.getElementById('state_b_X').value = (b.endo.X).toFixed(0);
  document.getElementById('state_b_D').value = (b.endo.D).toFixed(0);
  document.getElementById('state_b_IM').value = (b.endo.IM).toFixed(0); 
  document.getElementById('state_b_NX').value = (b.endo.NX).toFixed(0);
  document.getElementById('state_b_Y_IS').value = (b.endo.Y_IS).toFixed(0);
  document.getElementById('state_b_L').value = (b.endo.L).toFixed(0);
  document.getElementById('state_b_Y_LM').value = (b.endo.Y).toFixed(0);
  document.getElementById('state_b_i').value = (b.endo.i).toFixed(2);
  document.getElementById('state_b_epsilon').value = (b.endo.e).toFixed(4);
  document.getElementById('state_b_e').value = (b.endo.e).toFixed(4);

}