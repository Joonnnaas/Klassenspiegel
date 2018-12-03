let i = 1;

function getInput() {
  let name = document.getElementById('name').value;
  let klasse = document.getElementById('klasse').value;
  let subject = document.getElementById('subject').value;
  let mark = document.getElementById('mark').value;

  document.getElementById('td' + i).innerHTML = name;
  i++;
  document.getElementById('td' + i).innerHTML = klasse;
  i++;
  document.getElementById('td' + i).innerHTML = subject;
  i++;
  document.getElementById('td' + i).innerHTML = mark;
  i++;

}

function getClass() {
  let klassen = document.getElementById('klasse').value;

  if (klassen === '1ahitm') {
    display1a();
  } else if (klassen === '1bhitm') {
    display1b();
  } else if (klassen === '2bhitm') {
    display2b();
  } else if (klassen === '2ahitm') {
    display2a();
  }
}

function display1a() {
  let a1 = document.getElementById('schueler1a').style.display = 'block';
  let a2 = document.getElementById('schueler2a').style.display = 'none';
  let b1 = document.getElementById('schueler1b').style.display = 'none';
  let b2 = document.getElementById('schueler2b').style.display = 'none';
}
function display2a() {
  let a1 = document.getElementById('schueler1a').style.display = 'none';
  let a2 = document.getElementById('schueler2a').style.display = 'block';
  let b1 = document.getElementById('schueler1b').style.display = 'none';
  let b2 = document.getElementById('schueler2b').style.display = 'none';
}
function display1b() {
  let a1 = document.getElementById('schueler1a').style.display = 'none';
  let a2 = document.getElementById('schueler2a').style.display = 'none';
  let b1 = document.getElementById('schueler1b').style.display = 'block';
  let b2 = document.getElementById('schueler2b').style.display = 'none';
}
function display2b() {
  let a1 = document.getElementById('schueler1a').style.display = 'none';
  let a2 = document.getElementById('schueler2a').style.display = 'none';
  let b1 = document.getElementById('schueler1b').style.display = 'none';
  let b2 = document.getElementById('schueler2b').style.display = 'block';
}
