// fetch('https://reqres.in/api/users?page=2')
// .then((response) => {
//     if (response.status !== 200) {
//         console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
//         return;
//     }
// response.json()
// .then(data => console.log(data));         
// })
// .catch(err => console.error(`Fetch Error :-S ${err}`));

const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);
button.onclick = () => read (input.value);

//1. GET request for 'List User'
URL = `https://reqres.in/api/users?page=2`
read = URL => {
    axios.get(URL)
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }

//2. GET request for 'Single User' with the id of 2
// https://reqres.in/api/users/2

// URL = `https://reqres.in/api/users/2`
// read = URL => {
//     axios.get(URL)
//       .then((response) => {
//         output.innerHTML = JSON.stringify(response.data);
//       }).catch((err) => {
//         console.log(err);
//       })
//   }

  //3. POST request for 'Create'
//https://reqres.in/api/users
// URL ='https://reqres.in/api/users'
// create = URL => {
//     axios.post(URL, {
//       name: `Morpheus`,
//       job : `Leader`
//     })
//       .then((response) => {
//         output.innerHTML = JSON.stringify(response.data);
//       }).catch((err) => {
//         console.log(err);
//       })}

//     cbutton.onclick = () => create(input.value);

//4. POST request for 'Register - Successful'
//     URL =`https://reqres.in/api/register`
// create = URL => {
//     axios.post(URL, {
//       email: `eve.holt@reqres.in`,
//       password : `pistol`
//     })
//       .then((response) => {
//         output.innerHTML = JSON.stringify(response.data);
//       }).catch((err) => {
//         console.log(err);
//       })}

//     cbutton.onclick = () => create(input.value);

    //5. POST request for 'Login - Successful'

    URL =`https://reqres.in/api/login`
    create = URL => {
        axios.post(URL, {
          email: `eve.holt@reqres.in`,
          password : `cityslicka`
        })
          .then((response) => {
            output.innerHTML = JSON.stringify(response.data);
          }).catch((err) => {
            console.log(err);
          })}
    
        cbutton.onclick = () => create(input.value);
    




