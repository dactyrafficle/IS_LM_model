function UPDATE_LF_GRAPH(box, OUTPUT_VALUES) {

  box.clear();
  
  box.rangex(0, 5);
  box.rangey(-1, 40000);
  
  // get r : changing R means we have to recalc the whole thing
  // calculate y
  // calculate e

  let SAVINGS = {
    'a':[],
    'b':[]
  }
  
  let INVESTMENTS = {
    'a':[],
    'b':[]
  }
  
  for (let r = box.data.range.x.min; r <= box.data.range.x.max; r += 0.2) {
    
    let INPUT_SETS = {
      'a':{
        'exo':Object.assign({},OUTPUT_VALUES.a.exo)
      },
      'b':{
        'exo':Object.assign({},OUTPUT_VALUES.b.exo)
      }
    }

    INPUT_SETS.a.exo.r = r;
    INPUT_SETS.b.exo.r = r;
    
    let OUTPUT_SETS = {
      'a':GET_OUTPUT_SET(INPUT_SETS.a),
      'b':GET_OUTPUT_SET(INPUT_SETS.b)
    }
    
    SAVINGS.a.push({'x':r, 'y':OUTPUT_SETS.a.endo.S});
    SAVINGS.b.push({'x':r, 'y':OUTPUT_SETS.b.endo.S});

    INVESTMENTS.a.push({'x':r, 'y':OUTPUT_SETS.a.endo.I});
    INVESTMENTS.b.push({'x':r, 'y':OUTPUT_SETS.b.endo.I});
  
  }

  // GRAPH SAVINGS
  box.CONNECTVALUES2(SAVINGS.a, '#FC05', 2);
  box.CONNECTVALUES2(SAVINGS.b, '#adc2eb', 1);

  // GRAPH INVESTMENTS
  box.CONNECTVALUES2(INVESTMENTS.a, '#FC05', 2);
  box.CONNECTVALUES2(INVESTMENTS.b, '#adc2eb', 1);
  
  // THE r=0 LINE
  box.CONNECTVALUES2([{'x':OUTPUT_VALUES.a.exo.r,'y':box.data.range.y.min},{'x':OUTPUT_VALUES.a.exo.r,'y':box.data.range.y.max}],'#ddd', 1);
  box.CONNECTVALUES2([{'x':OUTPUT_VALUES.b.exo.r,'y':box.data.range.y.min},{'x':OUTPUT_VALUES.b.exo.r,'y':box.data.range.y.max}],'#ddd', 1);

  // SHOW SAVINGS POINTS
  box.SHOWVALUE({'x':OUTPUT_VALUES.a.exo.r,'y':OUTPUT_VALUES.a.endo.S}, '#FC0', 3);
  box.SHOWVALUE({'x':OUTPUT_VALUES.b.exo.r,'y':OUTPUT_VALUES.b.endo.S}, '#adc2eb', 2);
  
  box.SHOWVALUE({'x':OUTPUT_VALUES.a.exo.r,'y':OUTPUT_VALUES.a.endo.I}, '#FC0', 3);
  box.SHOWVALUE({'x':OUTPUT_VALUES.b.exo.r,'y':OUTPUT_VALUES.b.endo.I}, '#adc2eb', 2);

  box.SHOW_FLOATING_LOG_X_AXIS(9);
  box.SHOW_FLOATING_LOG_Y_AXIS(9);
}


