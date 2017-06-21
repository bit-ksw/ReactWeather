var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function (name) {
  console.log('foreach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});


var returnMe = (name) => name + '!!';

console.log(returnMe('ggg'));
