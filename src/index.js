
exports.min = function min (array) {
  if (typeof array === 'undefined'|| array.length===0){return 0;}
  else{ let len = array.length;
        let min = array[0];
        for(let i=1; i<len; i++){if (array[i]<min) {min=array[i];}}
        return min;
  }
}

exports.max = function max (array) {
  if (typeof array === 'undefined'|| array.length===0){return 0;}
  else{ let len = array.length;
        let max = array[0];
        for(let i=1; i<len; i++){if (array[i]>max) {max=array[i];}}
        return max;
  }
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined'|| array.length===0){return 0;}
  else{ let znam = array.length;
        let summa = 0;
        for (let i=0; i<znam; i++) {summa += array[i];}
        return (summa/znam);
  }
}
