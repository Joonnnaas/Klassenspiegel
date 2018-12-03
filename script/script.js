let i = 1;

function getInput() {
  let name = getStudentName();
  let klasse = document.getElementById('klasse').value;
  let subject = document.getElementById('subject').value;
  let mark = document.getElementById('mark').value;

  alert(klasse);
  alert(name);
  alert(subject);
  alert(mark);
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

function getStudentName() {
  let name;
  let klassen = document.getElementById('klasse').value;

  if (klassen === '1ahitm') {
    name = document.getElementById('schueler1a').value;
  } else if (klassen === '1bhitm') {
    name = document.getElementById('schueler1b').value;
  } else if (klassen === '2bhitm') {
    name = document.getElementById('schueler2b').value;
  } else if (klassen === '2ahitm') {
    name = document.getElementById('schueler2a').value;
  }
  return name;
}
