const number = 20_000_000_000;
const sum = {value: 0};

for (let i=0; i<=number; i++) {
    sum.value+= i**2;
}

console.log(sum.value);