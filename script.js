

let userID = 0;

window.onload = () => {

  class User {
    constructor(name, pass) {
      this.name = name;
      this.password = pass;
      let a = document.createElement('tr');
      a.id = userID;

      let b = document.createElement('td'); //name
      let c = document.createElement('td'); //pass
      let d = document.createElement('td'); //id

      b.id = 'n' + userID;
      c.id = 'p' + userID;

      // let num = document.createElement('td')
      get('data').appendChild(a);
      a.appendChild(b);
      a.appendChild(c);
      a.appendChild(d);
      b.innerHTML = name;
      c.innerHTML = pass;
      d.innerHTML = userID;
      userID++;
    }
  }


  let get = (id) => document.getElementById(id);

  get('sub').onclick = () => {
    if(get('inp1').value !== '' && get('inp2').value !== '') {
    new User(get('inp1').value, get('inp2').value);
  }
  else {
    alert('Проверьте правильность введенных данных');
  }
  }

  get('find').onclick = () => {
    if(Number(get('ide').value) <= userID) {
    alert('Имя: ' + get('n' + get('ide').value).innerHTML + '\nПароль: ' + get('p' + get('ide').value).innerHTML);
  }
  else {
    alert('Такого ID не существует');
  }
  }

}
