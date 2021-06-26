let usersDATA = JSON.parse(DATA);
const userList = document.getElementById("userList");
const sortTable = document.getElementById("sortTable");
const tableHeads = Array.from(sortTable.children)
// console.log(tableHeads);
usersDATA.sort((a, b) => {
  return a.name.localeCompare(b.name);
});
console.log(usersDATA);

<<<<<<< Updated upstream
=======
nameData.addEventListener("click", (event) => {
  const tableKey = nameData.dataset.key;
>>>>>>> Stashed changes


sortTable.addEventListener("click", (event) => {
  const currentTh = event.target.closest('th')
  if (currentTh) {
    tableHeads.forEach(th => {
      if (th !== currentTh) {
        th.dataset.sorting = 'false'
      } else{
        th.dataset.sorting = 'true'
      }
    })
    currentTh.dataset.order *= -1
    const {key, order} = currentTh.dataset;
    usersDATA.sort((a, b) => {
      return a[key].localeCompare(b[key]) * order;
    });
    renderUserTable(createUsersCardHTML(usersDATA), userList);
  }



  //console.log(nameData);
  console.log(event.target);
  //console.log(tableHeaders);
});

//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//
//        "phone": "1-770-736-8031 x56442",
// "website": "hildegard.org",
// "company": {
//   "name": "Romaguera-Crona",
//   "catchPhrase": "Multi-layered client-server neural-net",
//   "bs": "harness real-time e-markets"
// }
renderUserTable(createUsersCardHTML(usersDATA), userList);

function createUsersCardHTML(userArray) {
  let tableHTML = "";
  userArray.forEach((tableElem) => {
    tableHTML += createUserCard(tableElem);
  });
  //console.log(tableHTML);
  return tableHTML;
}

function renderUserTable(tableHTML, usersDATA) {
  usersDATA.innerHTML = tableHTML;
}

function createUserCard(tableData) {
  return ` 
    <tr>
    <th scope="row">${tableData.name}</th>
    <td>${tableData.username}</td>
    <td>${tableData.email}</td>
    <td>${tableData.website}</td>
  </tr>
   
  `;
}


// console.log(1);
// let timerId = setTimeout(() => {
//   console.log(2);
//   clearTimeout(timerId)
// }, 2000);
// console.log('timer id',timerId);
// console.log(4);

// let timerId = setInterval(() => {
//   console.log('Fire!');
// }, 1000);

// setTimeout(() => {
//   clearInterval(timerId)
// }, 5000);


workWithCallback(result => {
  console.log(result);

})

function workWithCallback(cb) {
  setTimeout(() => {
    let data = Math.random()
    cb(data)
  }, 500);

}