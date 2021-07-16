
let b_lm, b_nx, b_is_lm;

let INPUT_VALUES;
let OUTPUT_VALUES;

window.addEventListener('load', function(e) {

  let s_box = 390;

  b_is_lm = new Box("e", "Y");
  document.getElementById('is-lm-box-container').appendChild(b_is_lm.returnCanvas());
  b_is_lm.border('1px solid #ddd');
  b_is_lm.dimension(s_box, s_box);

  b_lm = new Box('LN(M/P)', 'LN(i)');
  document.getElementById('lm-box-container').appendChild(b_lm.returnCanvas());
  b_lm.border('1px solid #ddd');
  b_lm.dimension(s_box, s_box);

  b_nx = new Box('LN(e)', 'NX');
  document.getElementById('nx-box-container').appendChild(b_nx.returnCanvas());
  b_nx.border('1px solid #ddd');
  b_nx.dimension(s_box, s_box);


  INPUT_VALUES = GET_INPUT_VALUES();
  OUTPUT_VALUES = GET_OUTPUT_VALUES(INPUT_VALUES);
  UPDATE_TABLE(OUTPUT_VALUES);
  UPDATE_MONEY_MARKET_GRAPH(b_lm, OUTPUT_VALUES);
  UPDATE_INT_TRADE_GRAPH(b_nx, OUTPUT_VALUES);
  UPDATE_IS_LM_GRAPH(b_is_lm, OUTPUT_VALUES);
  
  let myinputs = document.getElementsByClassName('myinputs');
  for (let i = 0; i < myinputs.length; i++) {
    myinputs[i].addEventListener('input', function(e) {
      INPUT_VALUES = GET_INPUT_VALUES();
      OUTPUT_VALUES = GET_OUTPUT_VALUES(INPUT_VALUES);
      UPDATE_TABLE(OUTPUT_VALUES);
      UPDATE_MONEY_MARKET_GRAPH(b_lm, OUTPUT_VALUES);
      UPDATE_INT_TRADE_GRAPH(b_nx, OUTPUT_VALUES);
      UPDATE_IS_LM_GRAPH(b_is_lm, OUTPUT_VALUES);
    });
  }


});