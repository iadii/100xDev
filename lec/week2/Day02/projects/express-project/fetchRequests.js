const sendRequests = async () => {
  const fetch = (await import('node-fetch')).default;

  const getResponse = await fetch('http://localhost:3000/users');
  const getData = await getResponse.text();
  console.log('GET Response:', getData);

  const postResponse = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John Doe', age: 30 }),
  });
  const postData = await postResponse.text();
  console.log('POST Response:', postData);

  const putResponse = await fetch('http://localhost:3000/users/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John Updated', age: 35 }),
  });
  const putData = await putResponse.text();
  console.log('PUT Response:', putData);

  const deleteResponse = await fetch('http://localhost:3000/users/1', {
    method: 'DELETE',
  });
  const deleteData = await deleteResponse.text();
  console.log('DELETE Response:', deleteData);
};

sendRequests();
