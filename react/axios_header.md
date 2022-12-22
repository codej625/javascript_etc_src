# axios header를 추가시켜보자

```
POST
```
```javascript
axios.post('/api',
  {
    name: name
  },
  {
    headers: {
      Authorization: token,
    },
  }
)
```
<br>

```
GET
```
```javascript
axios.get('api', {
  params: { name: name },
  headers: {
    Authorization: token,
  },
})
```
<br>

```
PUT
```
```javascript
axios.put('api',
  {
    name: name
  },
  {
    headers: {
      Authorization: token,
    },
  }
)
```
<br>

```
DELETE
```
```javascript
axios.delete('api', {
  headers: {
    Authorization: token,
  },
  data: { name: name },
})
```