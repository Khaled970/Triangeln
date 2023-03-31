console.log(`Här är arean av Trianglar 1, 2, 3, 4, 5 och 6.`);


// Fall 1

// triangleOne: Basen = 10 cm, Höjden = 13 cm
// triangleTwo: Basen = 16,5 cm, Höjden = 20,3 cm

const triangleOne = Math.trunc((10 * 13) / 2);
const triangleTwo = Math.trunc((20.3 * 16.5) / 2);




if (triangleOne < triangleTwo) {
    console.log(`Triangeln 1 har arean av ${triangleOne} cm² och triangeln 2 har arean av ${triangleTwo} cm². Triangeln 2 har det största arean. `
    );

} else if (triangleOne > triangleTwo) {
    console.log(`Triangeln 1 har arean av ${triangleOne} cm² och triangeln 2 har arean av ${triangleTwo} cm². Triangeln 1 har det största arean.`

    );
} else {
    console.log(`Triangeln 1 har arean av ${triangleOne} cm² och triangeln 2 har arean av ${triangleTwo} cm². Båda trianglarna har samma area.`

    )
}





// Fall 2

// triangleThree: Basen = 16,5 cm, Höjden = 20,3 cm
// triangleFour: Basen = 20,3 cm, Höjden = 16,5 cm

const triangleThree = Math.trunc((16.5 * 20.3) / 2);
const triangleFour = Math.trunc((20.3 * 16.5) / 2);



if (triangleThree === triangleFour) {
    console.log(`Triangeln 3 har arean av ${triangleThree} cm² och triangeln 4 har arean av ${triangleFour} cm². Båda trianglarna har samma area.`
    );
} else {
    console.log(`Triangeln 3 har arean av ${triangleThree} cm² och triangeln 4 har arean av ${triangleFour} cm².Båda inte har samma område.`
    )
}






//Fall 3

// triangleFive: Basen = 7,8 cm, Höjden = 5,6 cm
// triangleSix: Basen = 9,3 cm, Höjden = 12,4 cm

const triangleFive = Math.trunc((7.8 * 5.6) / 2);
const triangleSix = Math.trunc((9.3 * 12.4) / 2);



if (triangleFive < triangleSix) {
    console.log(`Triangeln 5 har arean av ${triangleFive} cm² och triangeln 6 har arean av ${triangleSix} cm². Triangeln 6 har det största arean. `
    );

} else if (triangleFive > triangleSix) {
    console.log(`Triangeln 5 har arean av ${triangleFive} cm² och triangeln 6 har arean av ${triangleSix} cm². Triangeln 5 har det största arean .`

    );
} else {
    console.log(`Triangeln 5 har arean av ${triangleFive} cm² och triangeln 6 har arean av ${triangleSix} cm². Båda trianglarna har samma area.`

    )
}