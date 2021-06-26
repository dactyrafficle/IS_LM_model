window.addEventListener('load', function(e) {

 b = new Box("e", "Y");
 document.getElementById('box-container').appendChild(b.returnCanvas());
 b.border('1px solid #ddd');
 b.dimension(500, 500);
 b.rangex(-1, 13);
 b.rangey(-5000, 45000);

 INPUT_VALUES = GET_INPUT_VALUES();

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

let container_a = document.getElementById('economic-output-a');
let container_b = document.getElementById('economic-output-b');
let output_box_a = new Box();
let output_box_b = new Box();
container_a.appendChild(output_box_a.returnCanvas());
container_b.appendChild(output_box_b.returnCanvas());

output_box_a.border('1px solid #ddd');
output_box_b.border('1px solid #ddd');


console.log(ECONOMIC_OUTPUT);
let YMAX = 0;
if ((ECONOMIC_OUTPUT.a.Y + ECONOMIC_OUTPUT.a.IM) > (ECONOMIC_OUTPUT.b.Y + ECONOMIC_OUTPUT.b.IM)) {
 YMAX = (ECONOMIC_OUTPUT.a.Y + ECONOMIC_OUTPUT.a.IM);
} else {
 YMAX = (ECONOMIC_OUTPUT.b.Y + ECONOMIC_OUTPUT.b.IM);
}

UPDATE_OUTPUT_BOX(output_box_a, ECONOMIC_OUTPUT.a, YMAX);
UPDATE_OUTPUT_BOX(output_box_b, ECONOMIC_OUTPUT.b, YMAX);

let myinputs = document.getElementsByClassName('myinputs');
for (let i = 0; i < myinputs.length; i++) {
  myinputs[i].addEventListener('input', function(e) {

    INPUT_VALUES = GET_INPUT_VALUES();

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

    UPDATE_OUTPUT_BOX(output_box_a, ECONOMIC_OUTPUT.a, YMAX);
    UPDATE_OUTPUT_BOX(output_box_b, ECONOMIC_OUTPUT.b, YMAX);

  });
}

});