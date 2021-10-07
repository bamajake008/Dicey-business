let diceContainer = $("#die-container");
let dieArray = [];
let idNumber = 0;

class Die {


    constructor() {

        //die class property
        this.value;

        //auto rolls 
        this.roll();
        //sets up the div w/ class dice containing an h1, and setting the div with an updating id number
        this.div = $("<div class=dice></div>");


        this.h1 = $("<h1></h1>");
        this.id = idNumber;

        this.div.attr("id", this.id);

        this.div.append(this.dieFace());

        diceContainer.append(this.div);



        //click dice to reroll 
        this.div.click(() => {
            this.roll();
            this.div.empty().html(this.dieFace());
        })
        //dbl click dice removes die
        this.div.dblclick(() => {
            this.removeDie();
        })





    }


    //creates new value for the dice
    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
    }

    //removes a die 
    removeDie() {
        $(`#${this.id}`).remove();
        let index = dieArray.findIndex(dice => dice.id === this.id)
        dieArray.splice(index, 1);
    }

    // shows the face of the dice
    dieFace(unicode) {

        if (this.value === 1) {
            unicode = '&#9856;'

            return unicode;
        } else if (this.value === 2) {
            unicode = '&#9857;';
            return unicode;
        } else if (this.value === 3) {
            unicode = '&#9858;';
            return unicode;
        } else if (this.value === 4) {
            unicode = '&#9859;';

            return unicode;
        } else if (this.value === 5) {
            unicode = '&#9860;';
            return unicode;
        } else if (this.value === 6) {
            unicode = '&#9861;';
            return unicode;
        }





    }

}
//adds the sum of the all the dice
function sumDice() {
    let total = 0;
    for (let i = 0; i < dieArray.length; i++) {
        total += dieArray[i].value;
    }
    alert(`Your sum of all of the die on page is: ${total}`);
};
//choses random color for dice
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function setRandomColor() {
    $(".dice").css("color", getRandomColor());
}


//click button to make new die 
$("#newDie").click(function () {
    let d = new Die();
    dieArray.push(d);
    idNumber++; setRandomColor();

});
;

//roll the die 
$("#rollDiceyDie").click(function () {
    for (let i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
        $(`#${i}`).html(dieArray[i].dieFace());
        
    }
    


});

//tells the sum of the dice 
$("#sumOfDie").click(sumDice);