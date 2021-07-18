function UPDATE_NCO_GRAPH(box, OUTPUT_VALUES) {

  box.clear();
  
  box.rangex(0, 5);
  box.rangey(-20000, 20000);
  
  // get r : changing R means we have to recalc the whole thing
  // calculate y
  // calculate e

  // NCO = (S-I) - (G-T)
  
  let LINE1 = {
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
    
    LINE1.a.push({'x':r, 'y':OUTPUT_SETS.a.endo.S-OUTPUT_SETS.a.endo.I-OUTPUT_SETS.a.exo.G+OUTPUT_SETS.a.endo.T});
    LINE1.b.push({'x':r, 'y':OUTPUT_SETS.b.endo.S-OUTPUT_SETS.b.endo.I-OUTPUT_SETS.b.exo.G+OUTPUT_SETS.b.endo.T});

  }
  
  // NX = 0
  box.CONNECTVALUES2([{'x':box.data.range.x.min,'y':0},{'x':box.data.range.x.max,'y':0}],'#ddd', 1);
  
  // S-I-G+T = NCO
  box.CONNECTVALUES2(LINE1.a, '#FC05', 2);
  box.CONNECTVALUES2(LINE1.b, '#adc2eb', 1);
  
  // THE INTEREST RATE
  box.CONNECTVALUES2([{'x':OUTPUT_VALUES.a.exo.r,'y':box.data.range.y.min},{'x':OUTPUT_VALUES.a.exo.r,'y':box.data.range.y.max}],'#ddd', 1);
  box.CONNECTVALUES2([{'x':OUTPUT_VALUES.b.exo.r,'y':box.data.range.y.min},{'x':OUTPUT_VALUES.b.exo.r,'y':box.data.range.y.max}],'#ddd', 1);

  // THE POINTS
  box.SHOWVALUE({'x':OUTPUT_VALUES.a.exo.r,'y':OUTPUT_VALUES.a.endo.S-OUTPUT_VALUES.a.endo.I-OUTPUT_VALUES.a.exo.G+OUTPUT_VALUES.a.endo.T}, '#FC0', 3);
  box.SHOWVALUE({'x':OUTPUT_VALUES.b.exo.r,'y':OUTPUT_VALUES.b.endo.S-OUTPUT_VALUES.b.endo.I-OUTPUT_VALUES.b.exo.G+OUTPUT_VALUES.b.endo.T}, '#adc2eb', 2);

  // AXES
  box.SHOW_FLOATING_LOG_X_AXIS(9);
  box.SHOW_FLOATING_LOG_Y_AXIS(9);
}


