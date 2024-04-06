// A mock function to mimic making an async request for data

export function createUser(userData){
   return new Promise(async (resolve) => {
    console.log(userData);
    // const response = await fetch("http://localhost:8080/auth/signup", {
      // method: "POST",
      // body: JSON.stringify(userData),
      // headers: { "content-type": "application/json" },
    // });
    // const data = await response.json();
    resolve({ data:"hello" });
  });

}



export function checkUser(userData) {
  return new Promise(async (resolve, reject) => {
    // try {
    //   const response = await fetch("http://localhost:8080/auth/login", {
    //     method: "POST",
    //     body: JSON.stringify(userData),
    //     headers: { "content-type": "application/json" },
    //   });
    //   if (response.ok){
    //     const data = await response.json();
    //     resolve({ data });
    //   } 
    //   else{
    //     const data = await response.text();
    //     reject(data);
    //   }         
    // } catch (error) {
    //   reject(error);
    // }
    console.log(userData);
  }); 
  
}



export function sendMail(email){
  return new Promise(async (resolve) => {
    console.log(email);
    // const response = await fetch("http://localhost:8080/auth/signup", {
      // method: "POST",
      // body: JSON.stringify(userData),
      // headers: { "content-type": "application/json" },
    // });
    // const data = await response.json();
    resolve({ data:"hello" });
  });
}



export function changePassword(data){
  return new Promise(async (resolve) => {
    console.log(data);
    // const response = await fetch("http://localhost:8080/auth/signup", {
      // method: "POST",
      // body: JSON.stringify(userData),
      // headers: { "content-type": "application/json" },
    // });
    // const data = await response.json();
    resolve({ data:"hello" });
  });
}


