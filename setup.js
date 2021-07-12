window.addEventListener('load', function(e) {

 let s_box = 390;

 b = new Box("e", "Y");
 document.getElementById('box-container').appendChild(b.returnCanvas());
 b.border('1px solid #ddd');
 b.dimension(s_box, s_box);
 
 b_lm = new Box('LN(M/P)', 'LN(i)');
 document.getElementById('lm-box-container').appendChild(b_lm.returnCanvas());
 b_lm.border('1px solid #ddd');
 b_lm.dimension(s_box, s_box);
 
 b_nx = new Box('e', '$');
 document.getElementById('nx-box-container').appendChild(b_nx.returnCanvas());
 b_nx.border('1px solid #ddd');
 b_nx.dimension(s_box, s_box);
 
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
 
 
 DRAW_MONEY_MARKET();

 
 function DRAW_MONEY_MARKET() {


   b_lm.clear();
   
   // set the range based on the intersection points

   // SET RANGE. COULD BE FROM 1 TO LOG(MAX)*2? or this?
   b_lm.rangex(Math.log((INPUT_VALUES.a.M/INPUT_VALUES.a.P))*0.9,Math.log((INPUT_VALUES.a.M/INPUT_VALUES.a.P))*1.1);
   b_lm.rangey(Math.log(INPUT_VALUES.a.i)*0.9, Math.log(INPUT_VALUES.a.i)*1.1);

   b_lm.SHOW_FLOATING_LOG_X_AXIS();
   b_lm.SHOW_FLOATING_LOG_Y_AXIS();
   
   // MONEY SUPPLY 1
   b_lm.CONNECTVALUES({'x':Math.log((INPUT_VALUES.a.M/INPUT_VALUES.a.P)),'y':b_lm.data.range.y.min},{'x':Math.log((INPUT_VALUES.a.M/INPUT_VALUES.a.P)),'y':b_lm.data.range.y.max}, '#FC08', 2);
   
   // MONEY DEMAND 1
   let LN_money_demand_ARR1 = [];
   LN_money_demand_ARR1.push({
     'x':b_lm.data.range.x.min,
     'y':Math.log((INPUT_VALUES.a.gamma*SOLUTIONS.a.Y**INPUT_VALUES.a.epsilon/(Math.E**b_lm.data.range.x.min))**(1/INPUT_VALUES.a.theta)),
   });
   LN_money_demand_ARR1.push({
     'x':b_lm.data.range.x.max,
     'y':Math.log((INPUT_VALUES.a.gamma*SOLUTIONS.a.Y**INPUT_VALUES.a.epsilon/(Math.E**b_lm.data.range.x.max))**(1/INPUT_VALUES.a.theta)),
   });
    b_lm.CONNECTVALUES2(LN_money_demand_ARR1, '#FC08', 2);
   
   // WORLD INTEREST RATE 1
   b_lm.CONNECTVALUES({'x':b_lm.data.range.x.min,'y':Math.log(INPUT_VALUES.a.i)},{'x':b_lm.data.range.x.max,'y':Math.log(INPUT_VALUES.a.i)}, '#ddd', 1);


   // MONEY SUPPLY 2
   b_lm.CONNECTVALUES({'x':Math.log((INPUT_VALUES.b.M/INPUT_VALUES.b.P)),'y':b_lm.data.range.y.min},{'x':Math.log((INPUT_VALUES.b.M/INPUT_VALUES.b.P)),'y':b_lm.data.range.y.max}, '#c2d1f0', 2);
   
   // MONEY DEMAND 2
   let LN_money_demand_ARR2 = [];
   LN_money_demand_ARR2.push({
     'x':b_lm.data.range.x.min,
     'y':Math.log((INPUT_VALUES.b.gamma*SOLUTIONS.b.Y**INPUT_VALUES.b.epsilon/(Math.E**b_lm.data.range.x.min))**(1/INPUT_VALUES.b.theta)),
   });
   LN_money_demand_ARR2.push({
     'x':b_lm.data.range.x.max,
     'y':Math.log((INPUT_VALUES.b.gamma*SOLUTIONS.b.Y**INPUT_VALUES.b.epsilon/(Math.E**b_lm.data.range.x.max))**(1/INPUT_VALUES.b.theta)),
   });
    b_lm.CONNECTVALUES2(LN_money_demand_ARR2, '#c2d1f0', 2);
   
   // WORLD INTEREST RATE 2
   b_lm.CONNECTVALUES({'x':b_lm.data.range.x.min,'y':Math.log(INPUT_VALUES.b.i)},{'x':b_lm.data.range.x.max,'y':Math.log(INPUT_VALUES.b.i)}, '#aaa', 1);
 }
 


let myinputs = document.getElementsByClassName('myinputs');
for (let i = 0; i < myinputs.length; i++) {
  myinputs[i].addEventListener('input', function(e) {

    DRAW_MONEY_MARKET();

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