function GETEIS(obj, Y) {

  let output = {
   'e':null,
   'i':obj.r, // r = r*
   'Y':Y,
   'exx':99999999999999
  }
  
  let e = 0;
  let de = 1;
  while (de > 0.001) {
    let exx = GETEXX(obj, e+de, obj.r, Y);

    if (exx < output.exx) {
     e = e + de;
     output.exx = exx;
     output.e = e;
     continue;
    }
    
    exx = GETEXX(obj, e-de, obj.r, Y);
    if (exx < output.exx) {
     e = e - de;
     output.exx = exx;
     output.e = e;
     continue;
    }

    de = de/10;  
  }

  return output;
}