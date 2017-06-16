(() => {
  const a = 5;
  const b =  doo(a === 5)
    .then('this is five.')
  ;

  console.log(b.$);
})();


(() => {
  const a = doo(5)
    .then('hoge')
    .else('piyo')
  ;

  console.log(a.$);
})();

(() => {
  const a = doo({})
    .then('hoge')
    .else('piyo')
  ;

  console.log(a.$);
})();

(() => {
  const a = doo(null)
    .then('hoge')
    .else('piyo')
  ;

  console.log(a.$);
})();
