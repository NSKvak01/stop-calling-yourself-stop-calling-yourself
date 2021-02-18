function question(str){
    return str+'???';
}

const questionResult = question('Hello world');
questionResult;

function addTwo(a, b){
    return a + ' ' + b;
}

const addTwoResult = addTwo('Hello', 'Nastya Kvak');
addTwoResult;

function subtract(x, y, z){
    return x - y - z;
}

const subtractResult = subtract(100, 2, 50);
subtractResult;

function subtractReverse (x, y, z){
    return z - y - x;
}

const subtractReverseResult = subtractReverse(5, 7, 20);
subtractReverseResult;

function triple(str){
return str+str+str;
}

const tripleResult = triple('Kvak');
tripleResult;

function root(num){
    return Math.sqrt(num);
}

const rootResult = root(9);
rootResult