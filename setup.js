window.addEventListener('load', function(e) {

 b = new Box("e", "Y");
 document.getElementById('box-container').appendChild(b.returnCanvas());
 b.border('1px solid #ddd');
 b.dimension(300, 300);

 output_box = new Box();
 document.getElementById('economic-output').appendChild(output_box.returnCanvas());
 output_box.border('1px solid #ddd');
 output_box.dimension(600, 600);

 INPUT_VALUES = GET_INPUT_VALUES();

 SOLUTIONS = {
  'a':GET_SOLUTION(INPUT_VALUES.a),
  'b':GET_SOLUTION(INPUT_VALUES.b)
 }
 
 // RESCALE BOX BASED ON THE SOLUTION TO A
 
 if (SOLUTIONS.a.e > SOLUTIONS.b.e) {
  b.rangex(-1, SOLUTIONS.a.e*2);
 } else {
  b.rangex(-1, SOLUTIONS.b.e*2);
 }
 if (SOLUTIONS.a.Y > SOLUTIONS.b.Y) {
  b.rangey(-5000, SOLUTIONS.a.Y*2);
 } else {
  b.rangey(-5000, SOLUTIONS.b.Y*2);
 }

 IS_CURVES = {
  'a':GET_IS_CURVE(INPUT_VALUES.a),
  'b':GET_IS_CURVE(INPUT_VALUES.b)
 };

 LM_CURVES = {
  'a':[[[0, SOLUTIONS.a.Y],[b.data.range.x.max, SOLUTIONS.a.Y]]],
  'b':[[[0, SOLUTIONS.b.Y],[b.data.range.x.max, SOLUTIONS.b.Y]]]
 }

 ECONOMIC_OUTPUT = {
  'a':GET_ECONOMIC_OUTPUT(INPUT_VALUES.a, SOLUTIONS.a),
  'b':GET_ECONOMIC_OUTPUT(INPUT_VALUES.b, SOLUTIONS.b)
 }

 b.clear();
 b.showAxes();
 b.SHOWGRIDX(1);
 b.SHOWGRIDY(5000);

 DRAW_CURVE(b, IS_CURVES.a, '#b3e6b3', 2, 0, 1);
 DRAW_CURVE(b, IS_CURVES.b, '#94b8b8', 2, 1, 1);
 DRAW_CURVE(b, LM_CURVES.a, '#adc2eb', 2, 0, 1);
 DRAW_CURVE(b, LM_CURVES.b, '#3366cc', 2, 1, 1);
 
 b.SHOWVALUE({'x':SOLUTIONS.a.e,'y':SOLUTIONS.a.Y}, '#FC0', 3);
 b.SHOWVALUE({'x':SOLUTIONS.b.e,'y':SOLUTIONS.b.Y}, '#FC0', 3);
 
 UPDATE_TABLE(ECONOMIC_OUTPUT);
 UPDATE_OUTPUT_BOX(ECONOMIC_OUTPUT, output_box);

let myinputs = document.getElementsByClassName('myinputs');
for (let i = 0; i < myinputs.length; i++) {
  myinputs[i].addEventListener('input', function(e) {

    b.clear();
    b.showAxes();
    b.SHOWGRIDX(1);
    b.SHOWGRIDY(5000);

    INPUT_VALUES = GET_INPUT_VALUES();
    
    SOLUTIONS = {
     'a':GET_SOLUTION(INPUT_VALUES.a),
     'b':GET_SOLUTION(INPUT_VALUES.b)
    }
    console.log(SOLUTIONS);
    
    // RESCALE BOX BASED ON THE SOLUTION TO A
     if (SOLUTIONS.a.e > SOLUTIONS.b.e) {
      b.rangex(-1, SOLUTIONS.a.e*2);
     } else {
      b.rangex(-1, SOLUTIONS.b.e*2);
     }
     if (SOLUTIONS.a.Y > SOLUTIONS.b.Y) {
      b.rangey(-5000, SOLUTIONS.a.Y*2);
     } else {
      b.rangey(-5000, SOLUTIONS.b.Y*2);
     }

    IS_CURVES = {
     'a':GET_IS_CURVE(INPUT_VALUES.a),
     'b':GET_IS_CURVE(INPUT_VALUES.b)
    };

    LM_CURVES = {
     'a':[[[0, SOLUTIONS.a.Y],[b.data.range.x.max, SOLUTIONS.a.Y]]],
     'b':[[[0, SOLUTIONS.b.Y],[b.data.range.x.max, SOLUTIONS.b.Y]]]
    }

    ECONOMIC_OUTPUT = {
     'a':GET_ECONOMIC_OUTPUT(INPUT_VALUES.a, SOLUTIONS.a),
     'b':GET_ECONOMIC_OUTPUT(INPUT_VALUES.b, SOLUTIONS.b)
    }

    DRAW_CURVE(b, IS_CURVES.a, '#b3e6b3', 2, 0, 1);
    DRAW_CURVE(b, IS_CURVES.b, '#94b8b8', 2, 1, 1);
    DRAW_CURVE(b, LM_CURVES.a, '#adc2eb', 2, 0, 0);
    DRAW_CURVE(b, LM_CURVES.b, '#3366cc', 2, 0, 0);
    
    b.SHOWVALUE({'x':SOLUTIONS.a.e,'y':SOLUTIONS.a.Y}, '#FC0', 3);
    b.SHOWVALUE({'x':SOLUTIONS.b.e,'y':SOLUTIONS.b.Y}, '#FC0', 3);
    
    UPDATE_TABLE(ECONOMIC_OUTPUT);
    UPDATE_OUTPUT_BOX(ECONOMIC_OUTPUT, output_box);

  });
}

});