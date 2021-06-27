window.addEventListener('load', function(e) {

 b = new Box("e", "Y");
 document.getElementById('box-container').appendChild(b.returnCanvas());
 b.border('1px solid #ddd');
 b.dimension(500, 500);
 b.rangex(-1, 13);
 b.rangey(-5000, 45000);

 INPUT_VALUES = GET_INPUT_VALUES();
 //console.log(INPUT_VALUES);

 IS_CURVES = {
  'a':GET_IS_CURVE(INPUT_VALUES.a),
  'b':GET_IS_CURVE(INPUT_VALUES.b)
 };

 SOLUTIONS = {
  'a':GET_SOLUTION(INPUT_VALUES.a),
  'b':GET_SOLUTION(INPUT_VALUES.b)
 }

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

 UPDATE_TABLE(ECONOMIC_OUTPUT);



// use  ECONOMIC_OUTPUT to draw boxes

let output_box_container = document.getElementById('economic-output');
let output_box = new Box();
output_box_container.appendChild(output_box.returnCanvas());
output_box.border('1px solid #ddd');


//console.log(ECONOMIC_OUTPUT);
let YMAX = 0;
if ((ECONOMIC_OUTPUT.a.Y + ECONOMIC_OUTPUT.a.IM) > (ECONOMIC_OUTPUT.b.Y + ECONOMIC_OUTPUT.b.IM)) {
 YMAX = (ECONOMIC_OUTPUT.a.Y + ECONOMIC_OUTPUT.a.IM);
} else {
 YMAX = (ECONOMIC_OUTPUT.b.Y + ECONOMIC_OUTPUT.b.IM);
}
console.log(ECONOMIC_OUTPUT);
UPDATE_OUTPUT_BOX(ECONOMIC_OUTPUT, output_box, ECONOMIC_OUTPUT.a, ECONOMIC_OUTPUT.a.Y, YMAX);

let myinputs = document.getElementsByClassName('myinputs');
for (let i = 0; i < myinputs.length; i++) {
  myinputs[i].addEventListener('input', function(e) {

    INPUT_VALUES = GET_INPUT_VALUES();
    console.log(INPUT_VALUES);
    
    IS_CURVES = {
     'a':GET_IS_CURVE(INPUT_VALUES.a),
     'b':GET_IS_CURVE(INPUT_VALUES.b)
    };

    SOLUTIONS = {
     'a':GET_SOLUTION(INPUT_VALUES.a),
     'b':GET_SOLUTION(INPUT_VALUES.b)
    }
    
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
    DRAW_CURVE(b, LM_CURVES.a, '#adc2eb', 2, 0, 0);
    DRAW_CURVE(b, LM_CURVES.b, '#3366cc', 2, 0, 0);
    
    UPDATE_TABLE(ECONOMIC_OUTPUT);

    if ((ECONOMIC_OUTPUT.a.Y + ECONOMIC_OUTPUT.a.IM) > (ECONOMIC_OUTPUT.b.Y + ECONOMIC_OUTPUT.b.IM)) {
     YMAX = (ECONOMIC_OUTPUT.a.Y + ECONOMIC_OUTPUT.a.IM);
    } else {
     YMAX = (ECONOMIC_OUTPUT.b.Y + ECONOMIC_OUTPUT.b.IM);
    }

    UPDATE_OUTPUT_BOX(ECONOMIC_OUTPUT, output_box, ECONOMIC_OUTPUT.a, ECONOMIC_OUTPUT.a.Y, YMAX);

  });
}

});