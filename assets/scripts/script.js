var personContainer = document.querySelector(".persons .container");
var companiesContainer = document.querySelector(".companies .container");
var BooksContainer = document.querySelector(".Books .container");

async function getData1() {
  await fetch(`https://fakerapi.it/api/v1/persons?_quantity=20`)
    .then((res) => res.json())
    .then((data) => renderPersons(data.data))
    .catch((error) => {
      console.log(error);
    });
}
getData1();

function renderPersons(persons) {
  persons.forEach((person) => {
    personContainer.innerHTML += `
        <div class="person">
            <div class="img" style="background-image:url(${person.image})"></div>
            <h2><span>Name:</span>${person.firstname} ${person.lastname}</h2>
            <h3><span>Email:</span>${person.email}</h3>
            <h3><span>Birthday:</span>${person.birthday}</h3>
            <h3><span>Phone:</span>${person.phone}</h3>
            <h3><span>Website:</span><a href="${person.website}" target="-blank">Link</a></h3>        
        </div>
    `;
  });
}



async function getData2() {
  await fetch(`https://fakerapi.it/api/v1/companies?_quantity=15`)
    .then((res) => res.json())
    .then((data) => rendercompanies(data.data))
    .catch((error) => {
      console.log(error);
    });
}
getData2();

function rendercompanies(companies) {
  companies.forEach((company) => {
    companiesContainer.innerHTML += `
        <div class="company">
            <div class="img" style="background-image:url(${company.image})"></div>
            <h2>${company.name}</h2>
            <h3><span>Email:</span>${company.email}</h3>
            <h3><span>Country:</span>${company.country}</h3>
            <h3><span>Phone:</span>${company.phone}</h3>
            <h3><span>Website:</span><a href="${company.website}" target="-blank">Link</a></h3>        
        </div>
    `;
  });
}
 

async function getData3() {
  await fetch(`https://fakerapi.it/api/v1/books?_quantity=10`)
    .then((res) => res.json())
    .then((data) => renderBooks(data.data))
    .catch((error) => {
      console.log(error);
    });
}
getData3();

function renderBooks(Books) {
  Books.forEach((Book) => {
    BooksContainer.innerHTML += `
    <div class="Book">
        <div class="img" style="background-image:url(${Book.image})"></div>
        <h2><span>Name:</span>${Book.title}</h2>
        <h3><span>Email:</span>${Book.author}</h3>
        <h3><span>Birthday:</span>${Book.description}</h3>
        <h3><span>Phone:</span>${Book.published}</h3>
        <h3><span>Website:</span>${Book.publisher}</h3>        
    </div>
    `;
  });
}