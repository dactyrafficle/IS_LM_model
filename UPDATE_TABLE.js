function UPDATE_TABLE(ECONOMIC_OUTPUT) {

  document.getElementById('state_a_T').value = (ECONOMIC_OUTPUT.a.T).toFixed(2);
  document.getElementById('state_a_C').value = (ECONOMIC_OUTPUT.a.C).toFixed(2);
  document.getElementById('state_a_I').value = (ECONOMIC_OUTPUT.a.I).toFixed(2);
  document.getElementById('state_a_X').value = (ECONOMIC_OUTPUT.a.X).toFixed(2);
  document.getElementById('state_a_IM').value = (ECONOMIC_OUTPUT.a.IM).toFixed(2);
  document.getElementById('state_a_NX').value = (ECONOMIC_OUTPUT.a.NX).toFixed(2);
  document.getElementById('state_a_Y_IS').value = (ECONOMIC_OUTPUT.a.C+ECONOMIC_OUTPUT.a.I+ECONOMIC_OUTPUT.a.G+ECONOMIC_OUTPUT.a.NX).toFixed(2);

  document.getElementById('state_a_i').value = (ECONOMIC_OUTPUT.a.i).toFixed(2);
  document.getElementById('state_a_e').value = (ECONOMIC_OUTPUT.a.e).toFixed(2);
  document.getElementById('state_a_e*').value = (1/ECONOMIC_OUTPUT.a.e).toFixed(2);
  document.getElementById('state_a_Y').value = (ECONOMIC_OUTPUT.a.Y).toFixed(2);
  
  // GET Y_LM
  let a = ECONOMIC_OUTPUT.a.INPUT_VALUE;
  document.getElementById('state_a_Y_LM').value = ((a.M/(a.gamma*a.P))**(1/a.epsilon)*a.i**(a.theta/a.epsilon)).toFixed(2);

  document.getElementById('state_b_T').value = (ECONOMIC_OUTPUT.b.T).toFixed(2);
  document.getElementById('state_b_C').value = (ECONOMIC_OUTPUT.b.C).toFixed(2);
  document.getElementById('state_b_I').value = (ECONOMIC_OUTPUT.b.I).toFixed(2);
  document.getElementById('state_b_X').value = (ECONOMIC_OUTPUT.b.X).toFixed(2);
  document.getElementById('state_b_IM').value = (ECONOMIC_OUTPUT.b.IM).toFixed(2);
  document.getElementById('state_b_NX').value = (ECONOMIC_OUTPUT.b.NX).toFixed(2);
  document.getElementById('state_b_Y_IS').value = (ECONOMIC_OUTPUT.b.C+ECONOMIC_OUTPUT.b.I+ECONOMIC_OUTPUT.b.G+ECONOMIC_OUTPUT.b.NX).toFixed(2);
  
  document.getElementById('state_b_i').value = (ECONOMIC_OUTPUT.b.i).toFixed(2);
  document.getElementById('state_b_e').value = (ECONOMIC_OUTPUT.b.e).toFixed(2);
  document.getElementById('state_b_e*').value = (1/ECONOMIC_OUTPUT.b.e).toFixed(2);
  document.getElementById('state_b_Y').value = (ECONOMIC_OUTPUT.b.Y).toFixed(2);
  
  //document.getElementById('state_b_Y_LM').value = (ECONOMIC_OUTPUT.b.Y).toFixed(2);
  
  // GET Y_LM
  let b = ECONOMIC_OUTPUT.b.INPUT_VALUE;
  document.getElementById('state_b_Y_LM').value = ((b.M/(b.gamma*b.P))**(1/b.epsilon)*b.i**(b.theta/b.epsilon)).toFixed(2);
}