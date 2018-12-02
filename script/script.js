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
