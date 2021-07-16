function UPDATE_IS_LM_GRAPH(box, OUTPUT_VALUES) {

  box.clear();
  
  let p0 = {}; 
  p0.a = {'x':Math.log(OUTPUT_VALUES.a.endo.e),'y':Math.log(OUTPUT_VALUES.a.endo.Y)};
  p0.b = {'x':Math.log(OUTPUT_VALUES.b.endo.e),'y':Math.log(OUTPUT_VALUES.b.endo.Y)};

  
  // center on the WA of p0.a and p0.b
  let pct = 0.6;
  let cx = pct*p0.a.x + (1-pct)*p0.b.x;
  let cy = pct*p0.a.y + (1-pct)*p0.b.y;
  

  box.rangey(cy-2, cy+2);
  
  let dx = Math.abs(p0.a.x - p0.b.x)*2;
  
  if (dx > 2) {
    box.rangex(cx-dx, cx+dx);
  } else {
    box.rangex(cx-2, cx+2);
  }
  
  
  let a_arr = [];
  let b_arr = [];

  for (let i = box.data.range.x.min; i <= box.data.range.x.max; i += 0.01) {
    let s = Math.E**i;
    a_arr.push({'x':i,'y':Math.log(SOLVE_Y_GIVEN_E(s, OUTPUT_VALUES.a).Y)})
    b_arr.push({'x':i,'y':Math.log(SOLVE_Y_GIVEN_E(s, OUTPUT_VALUES.b).Y)})
  }

  // THE IS CURVE
  box.CONNECTVALUES2(a_arr, '#fc05', 2);
  box.CONNECTVALUES2(b_arr, '#adc2eb', 1);

  // THE LM CURVE
  box.CONNECTVALUES2([{'x':box.data.range.x.min,'y':p0.a.y},{'x':box.data.range.x.max,'y':p0.a.y}],'#fc05', 2);
  box.CONNECTVALUES2([{'x':box.data.range.x.min,'y':p0.b.y},{'x':box.data.range.x.max,'y':p0.b.y}],'#adc2eb', 1);
  
  // THE EXCHANGE RATES
  box.CONNECTVALUES2([{'x':p0.a.x,'y':box.data.range.y.min},{'x':p0.a.x,'y':p0.a.y}],'#ddd', 2);
  box.CONNECTVALUES2([{'x':p0.b.x,'y':box.data.range.y.min},{'x':p0.b.x,'y':p0.b.y}],'#ddd', 2);
  


  // SHOW POINTS
  box.SHOWVALUE(p0.a, '#FC0', 3);
  box.SHOWVALUE(p0.b, '#adc2eb', 3);

  box.SHOW_FLOATING_LOG_X_AXIS(9);
  box.SHOW_FLOATING_LOG_Y_AXIS(9);
}


