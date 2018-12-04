function getInput() {
    printNewUser();
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

function printNewUser() {
    let name = getStudentName();
    let klasse = document.getElementById('klasse').value;
    let subject = document.getElementById('subject').value;
    let mark = document.getElementById('mark').value;

    let contentbox = document.getElementById('contentbox');

    let newStudent = document.createElement('div');

    let markBox = document.createElement('div');
    let classBox = document.createElement('div');
    let subjectBox = document.createElement('div');
    let nameBox = document.createElement('div');

    let studentData = [klasse, name, subject, mark];

    let outputArr = [classBox, nameBox, subjectBox, markBox];

    newStudent.classList.add('outputField');

    for (let i = 0; i < outputArr.length; i++) {
        outputArr[i].classList.add('output');
        outputArr[i].textContent = studentData[i];
    }

    for (let i = 0; i < outputArr.length; i++) {
      newStudent.appendChild(outputArr[i]);
    }
    contentbox.appendChild(newStudent);
}
