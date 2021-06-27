function GET_IS_CURVE(obj) {

  let n_dashes = 30;
  let visible_range = b.data.range.x.max;
  let de = 0.5*(visible_range / n_dashes);

  //console.log(Math.ceil(b.data.range.x.max/de-1));
  let output = new Array(n_dashes);
  let count = 0;
  for (let e = de; e < n_dashes; e += de) {
   
    // IS CURVE
    let e0 = e;
    let e1 = e+de;
    let Y0 = GETYIS(obj, e0).Y;
    let Y1 = GETYIS(obj, e1).Y;
    
    output[count] = new Array(2);
    output[count][0] = [e0, Y0];
    output[count][1] = [e1, Y1];
    
    count++;

   }

   return output;
}