let usersDATA = JSON.parse(DATA);
const userList = document.getElementById("userList");
console.log(usersDATA);
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
  console.log(tableHTML);
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
