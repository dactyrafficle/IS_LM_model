
let b_lm, b_nx, b_is_lm, b_lf, b_nco;

let INPUT_VALUES;
let OUTPUT_VALUES;

window.addEventListener('load', function(e) {

  let s_box = 300;

  b_is_lm = new Box("LN(e)", "LN(Y)");
  document.getElementById('is-lm-box-container').appendChild(b_is_lm.returnCanvas());
  b_is_lm.border('1px solid #ddd');
  b_is_lm.dimension(s_box, s_box);

  b_lm = new Box('M/P', 'i');
  document.getElementById('lm-box-container').appendChild(b_lm.returnCanvas());
  b_lm.border('1px solid #ddd');
  b_lm.dimension(s_box, s_box);

  b_nx = new Box('LN(e)', 'NX');
  document.getElementById('nx-box-container').appendChild(b_nx.returnCanvas());
  b_nx.border('1px solid #ddd');
  b_nx.dimension(s_box, s_box);

  b_lf = new Box('r', 'LF');
  document.getElementById('lf-box-container').appendChild(b_lf.returnCanvas());
  b_lf.border('1px solid #ddd');
  b_lf.dimension(s_box, s_box);
  
  b_nco = new Box('r', 'LF');
  document.getElementById('nco-box-container').appendChild(b_nco.returnCanvas());
  b_nco.border('1px solid #ddd');
  b_nco.dimension(s_box, s_box);
  
  INPUT_VALUES = GET_INPUT_VALUES();
  
  OUTPUT_VALUES = {
    'a':GET_OUTPUT_SET(INPUT_VALUES.a),
    'b':GET_OUTPUT_SET(INPUT_VALUES.b)
  }
  
  UPDATE_TABLE(OUTPUT_VALUES);
  UPDATE_LM_GRAPH(b_lm, OUTPUT_VALUES);
  UPDATE_NX_GRAPH(b_nx, OUTPUT_VALUES);
  UPDATE_IS_LM_GRAPH(b_is_lm, OUTPUT_VALUES);
  UPDATE_LF_GRAPH(b_lf, OUTPUT_VALUES);
  UPDATE_NCO_GRAPH(b_nco, OUTPUT_VALUES);
  
  let myinputs = document.getElementsByClassName('myinputs');
  for (let i = 0; i < myinputs.length; i++) {
    myinputs[i].addEventListener('input', function(e) {
      INPUT_VALUES = GET_INPUT_VALUES();
      OUTPUT_VALUES = {
        'a':GET_OUTPUT_SET(INPUT_VALUES.a),
        'b':GET_OUTPUT_SET(INPUT_VALUES.b)
      }
      UPDATE_TABLE(OUTPUT_VALUES);
      UPDATE_LM_GRAPH(b_lm, OUTPUT_VALUES);
      UPDATE_NX_GRAPH(b_nx, OUTPUT_VALUES);
      UPDATE_IS_LM_GRAPH(b_is_lm, OUTPUT_VALUES);
      UPDATE_LF_GRAPH(b_lf, OUTPUT_VALUES);
      UPDATE_NCO_GRAPH(b_nco, OUTPUT_VALUES);
    });
  }


});