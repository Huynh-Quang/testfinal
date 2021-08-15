console.log('Hello');
console.log('---------------------------------------------');

//Ex1:
console.log('Ex1:')
function allLongestStrings(inputArray) {
    let maxStr = inputArray[0].length;
    for (let i = 0; i < inputArray.length; i++) {
        maxStr = Math.max(maxStr, inputArray[i].length);
    };
    // console.log(maxStr);
    let outputArr = [];
    for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[j].length == maxStr) {
            outputArr.push(inputArray[j]);
        } else {
            outputArr = outputArr;
        };
    }
    console.log(outputArr);
};
allLongestStrings(['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH']);
console.log('---------------------------------------------');

//Ex2:
console.log('Ex2:');
function alternatingSums(a) {
    let team1 = [];
    let team2 = [];
    for (let x = 0; x < a.length; x++) {
        if ((x + 2) % 2 == 0) {
            team1.push(a[x]);
        } else {
            team2.push(a[x]);
        };
    };
    // console.log(team1);
    // console.log(team2);
    let sum1 = 0;
    let sum2 = 0;
    let sumteam = [];
    for (let y = 0; y < team1.length; y++) {
        sum1 = sum1 + team1[y];
    };
    for (let z = 0; z < team2.length; z++) {
        sum2 = sum2 + team2[z];
    };
    sumteam.push(sum1, sum2);
    console.log(sumteam);
};
alternatingSums([60, 40, 55, 75, 64]);
console.log('---------------------------------------------');

//Ex3:
console.log('Ex3:');
const colorP = ['Color: #F04C4C', 'Color: #8E34EF', 'Color: #5096F1'];
function loadcolor() {
    const randomNumber = Math.floor(Math.random()*colorP.length);
    document.getElementById('infoCL').innerText = colorP[randomNumber];;
    doccument.getElementById('background').style.backgroundcolor = 

}