# axios 요청시 timeout에 대해 알아보자!

1. case 1번
```javascript
try {
  const response = await axios('https://www.codequs.com', {
    timeout: 5000, // Override the default timeout to 5 seconds
    method: 'GET',
  });
  console.log(response);
} catch (err) {
  console.log(err);
}
```

2. case 2번(위와 사실상 동일)
```javascript
try {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      title: 'foo',
      body: 'bar',
    },
    {
      timeout: 5000, // Override the default timeout for this request
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(response.data);
} catch (error) {
  console.log(error);
}
```

3.  case 3번
```javascript
// Create an axios instance
// and set the timeout for this instance
const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 3000, // 3 seconds
});

// make a GET request
try {
  const response = await client.get('/posts');
  console.log(response.data);
} catch (error) {
  console.log(error);
}

// make a POST request
try {
  const response = await client.post('/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  });
  console.log(response.data);
} catch (error) {
  console.log(error);
}
```