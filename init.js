
window.onload = function startFunc()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.dateOfTheYear;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('professionOutput').innerText = initPerson.profession;
}
