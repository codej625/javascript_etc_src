# 객체의 값을 지우고 업데이트 해보자!

1. if버전
```javascript
function objUdpate(data) {
	const obj = {}; // 가공한 객체를 담을 변수 선언
	delete data.A; // delete를 사용하여 특정 값을 지울 수 있다.
	
	for (let result in data) {
		const keyType = result.substring(0, 1);

		if ('A' === keyType) { // Key가 A로 시작하는 값을 찾는다.
			data[result].v = data[result].w; // 조건이 맞으면 값을 업데이트 한다.
		}
    if ('B' === keyType) {
			data[result].v = data[result].w;
		}
    if ('C' === keyType) {
			data[result].v = data[result].w;
		}
    if ('D' === keyType) {
			data[result].v = data[result].w;
		}
    if ('E' === keyType) {
			data[result].v = data[result].w;
		}
		obj[result] = data[result]; // else를 담당한다.
	}

	return obj; // 업데이트된 객체를 return
}
```

2. switch버전
```javascript
function objUdpate(data) {
	const obj = {};
	delete data.A;

	for (let result in data) {
		const keyType = result.substring(0, 1);
		
		switch (keyType) {
			case 'A': case 'B': case 'C': case 'D': case 'E': data[result].v = data[result].w;
			default: obj[result] = data[result];
		}
	}

  return obj;
}
```
