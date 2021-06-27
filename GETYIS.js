function GETYIS(obj, e) {

  let output = {
   'e':e,
   'r':obj.r,   // r = r*, the IS curve depends on r, not i
   'Y':null,
   'exx':99999999999999
  }
  
  let y = 0;
  let dy = 1000;
  while (dy > 1) {
    let exx = GETEXX(obj, e, obj.r, y+dy);

    if (exx < output.exx) {
     y = y + dy;
     output.exx = exx;
     output.Y = y;
     continue;
    }
    
    exx = GETEXX(obj, e, obj.r, y-dy);
    if (exx < output.exx) {
     y = y - dy;
     output.exx = exx;
     output.Y = y;
     continue;
    }

    dy = dy/10;  
  }

  return output;
}