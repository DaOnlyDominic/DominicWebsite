window.onload = disintegrate;

$('#button').on('click', function() {
  reset();
});

function reset() {
  $('b').removeClass();
  $('b').css({
    width:10,
    height: 10
  });
  disintegrate();
}

// shuffle
var array = [];
// push value
for(var i = 0; i < 100; i++) {
  array.push(i);
}

array = shuffle(array);

// shuffle
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function disintegrate() {
  //var promise = removeElms();
  setAnimationInterval();
}

function setAnimationInterval() {
  for(i = 0; i < 100; i++) {
    animate(i);
  }
}

function animate(i) {
  // counter value gets gradually bigger
  var counter = Math.round(Math.sqrt(i * 30000));
  setTimeout(function() {
    $('b').eq(array[i]).addClass('translate-x');
    $('b').eq(array[i]).animate({
      width: 2,
      height: 2
    }, 90);
  }, counter);
}
