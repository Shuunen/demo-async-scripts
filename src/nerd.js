(function(){

  const name = 'Kevin'
  
  document.querySelector('.character--nerd .name').textContent = name
  
  document.querySelector('.character--nerd').addEventListener('click', () => alert(name + ' dit : OUCH !'))

})()
