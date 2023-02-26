async function getData() {
  const jsonData = await fetch("http://localhost:5000/services");
  const data = await jsonData.json();
  console.log(data);
}

// getData();
