function range(start, end) {
    var answer = [];
    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    return answer;
};

function makeRange (make) {
  var rangeNum = (make.join('')).range(1,make)
  return newRange
};

function singleDigits(one) {
  var digitArray = []
  var bigNum = []

  for (x = 1; x < one.length; x++) {
      if (one[x] > 9 ) {
        bigNum.push(one[x])
        var inArray = bigNum.toString()
        var stringArray = inArray.split('')
          for (i = 1; i <one.length; i++) {
            if (stringArray.includes('1')) {
              digitArray.push('Boop!')
              bigNum = []
              break
            } else if (stringArray.includes('0')) {
              digitArray.push('Beep!')
              bigNum =[]
              break
            } else {
              digitArray.push(one[x])
              break
            }
          }
      } else if (one[x] === 1) {
        digitArray.push('Boop!')
      } else if (one[x] === 0 ) {
        digitArray.push('Beep!')
      } else if (one[x] !== 0 || one[x] !== 1) {
        digitArray.push(one[x])
      } {}
 }
  return digitArray;
}



$(document).ready(function() {
  $("form#puzzle").submit(function(event){
      event.preventDefault();
      var number = $('#inputNumber').val();
      var theArray = []
      var array = []
      for (x = 0; x < number.length; x ++) {
        if (number % 3 === 0 && (number[x]) !== '0') {
           array.push("I'm sorry, Dave. I'm afraid I can't do that.")
          break
        } else {
          var boopArray = (range(0, number))
          theArray = singleDigits(boopArray)
          array.push(theArray)
          break
        }
       };
      var finalanswer = array
      $('#result').text(finalanswer);
    });
  });
