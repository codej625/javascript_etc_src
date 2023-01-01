# map을 사용해보자!

```javascript
  const mapArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
  ];

  const reformattedArray = mapArray.map((obj) => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
  });

  console.log(reformattedArray);

  /**  
  reformattedArray => 
  [
    {1:10}, 
    {2:20}, 
    {3:30}
  ]
  
  mapArray =>
   [
      {key:1, value:10},
      {key:2, value:20},
      {key:3, value: 30}
    ]
  */
 ```