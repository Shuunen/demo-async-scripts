(function () {

  const name = 'Johnny'

  document.querySelector('.character--cowboy .name').textContent = name

  document.querySelector('.character--cowboy').addEventListener('click', () => alert(name + ' dit : ho oui !'))

})()