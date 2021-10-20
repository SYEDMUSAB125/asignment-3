// Note: Class # 05...!

// Note: Matrix 1 values...!
let m1One = document.getElementById('box1val1');
let m1Two = document.getElementById('box1val2');
let m1Three = document.getElementById('box1val3');
let m1Four = document.getElementById('box1val4');
let m1Five = document.getElementById('box1val5');
let m1Six = document.getElementById('box1val6');
let m1Seven = document.getElementById('box1val7');
let m1Eight = document.getElementById('box1val8');
let m1Nine = document.getElementById('box1val9');

// Note: Matrix 2 values...!
let m2One = document.getElementById('box2val1');
let m2Two = document.getElementById('box2val2');
let m2Three = document.getElementById('box2val3');
let m2Four = document.getElementById('box2val4');
let m2Five = document.getElementById('box2val5');
let m2Six = document.getElementById('box2val6');
let m2Seven = document.getElementById('box2val7');
let m2Eight = document.getElementById('box2val8');
let m2Nine = document.getElementById('box2val9');

// Note: Matrix 3 values...!
let m3One = document.getElementById('box3val1');
let m3Two = document.getElementById('box3val2');
let m3Three = document.getElementById('box3val3');
let m3Four = document.getElementById('box3val4');
let m3Five = document.getElementById('box3val5');
let m3Six = document.getElementById('box3val6');
let m3Seven = document.getElementById('box3val7');
let m3Eight = document.getElementById('box3val8');
let m3Nine = document.getElementById('box3val9');

// Note: Function to add matrix...!
const addMatrix = () => {
    let m1 = [
        [Number(m1One.value), Number(m1Two.value), Number(m1Three.value)],
        [Number(m1Four.value), Number(m1Five.value), Number(m1Six.value)],
        [Number(m1Seven.value), Number(m1Eight.value), Number(m1Nine.value)]
    ];

    let m2 = [
        [Number(m2One.value), Number(m2Two.value), Number(m2Three.value)],
        [Number(m2Four.value), Number(m2Five.value), Number(m2Six.value)],
        [Number(m2Seven.value), Number(m2Eight.value), Number(m2Nine.value)]
    ];

    let m3 = [
        [Number(m3One.value), Number(m3Two.value), Number(m3Three.value)],
        [Number(m3Four.value), Number(m3Five.value), Number(m3Six.value)],
        [Number(m3Seven.value), Number(m3Eight.value), Number(m3Nine.value)]
    ];

    console.log('Matrix 1: ', m1);
    console.log('Matrix 2: ', m2);
    console.log('Matrix 3: ', m3);

    for (let i = 0; i < 3; i++) {
        // console.log(i, 'i*');

        for (j = 0; j < 3; j++) {
            // console.log(j, 'j');

            m3[i][j] = m1[i][j] - m2[i][j];

        }
    }

    document.getElementById("box3val1").value = m3[0][0];
    document.getElementById("box3val2").value = m3[0][1];
    document.getElementById("box3val3").value = m3[0][2];
    document.getElementById("box3val4").value = m3[1][0];
    document.getElementById("box3val5").value = m3[1][1];
    document.getElementById("box3val6").value = m3[1][2];
    document.getElementById("box3val7").value = m3[2][0];
    document.getElementById("box3val8").value = m3[2][1];
    document.getElementById("box3val9").value = m3[2][2];
}