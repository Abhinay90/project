// A mock function to mimic making an async request for data
export  function fetchTotalEmployee() {
  console.log("call");
  return new Promise(async(resolve) =>{
    const res= await fetch("http://localhost:8080/employees");
    const data=await res.json();
    console.log(data);
    resolve({data});
  }
  );
}
