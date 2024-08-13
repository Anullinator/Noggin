var pickaxeDamage = 1;
var gold = 0;

for (var i = 0; i < document.querySelectorAll(".game-button").length; i++) {
    document.querySelectorAll(".game-button")[i].addEventListener("click", function() {
        if (getComputedStyle(this).getPropertyValue("background-color") === "rgb(0, 165, 110)") { //Grass
            if (this.innerHTML === "") { //Untouched
                if (pickaxeDamage < 10) {
                    this.innerHTML = 10 - pickaxeDamage;
                } else {
                    this.style.backgroundColor = "rgb(122, 85, 53)";
                    gold = gold + 10;
                    document.querySelector("#gold-counter").innerHTML = "$" + gold;
                }
            } else if (this.innerHTML > pickaxeDamage) { //Touched
                this.innerHTML = this.innerHTML - pickaxeDamage;
            } else {
                this.innerHTML = "";
                this.style.backgroundColor = "rgb(122, 85, 53)";
                gold = gold + 10;
                document.querySelector("#gold-counter").innerHTML = "$" + gold;
            }
        } else if (getComputedStyle(this).getPropertyValue("background-color") === "rgb(122, 85, 53)") { //Dirt
            if (this.innerHTML === "") { //Untouched
                if (pickaxeDamage < 50) {
                    this.innerHTML = 50 - pickaxeDamage;
                } else {
                    this.style.backgroundColor = "rgb(118, 118, 118)";
                    gold = gold + 50;
                    document.querySelector("#gold-counter").innerHTML = "$" + gold;
                }
            } else if (this.innerHTML > pickaxeDamage) { //Touched
                this.innerHTML = this.innerHTML - pickaxeDamage;
            } else {
                this.innerHTML = "";
                this.style.backgroundColor = "rgb(118, 118, 118)";
                gold = gold + 50;
                document.querySelector("#gold-counter").innerHTML = "$" + gold;
            }
            
        } else if (getComputedStyle(this).getPropertyValue("background-color") === "rgb(118, 118, 118)") { //Rock
            if (this.innerHTML === "") { //Untouched
                if (pickaxeDamage < 250) {
                    this.innerHTML = 250 - pickaxeDamage;
                } else {
                    this.style.backgroundColor = "rgb(55, 55, 55)";
                    gold = gold + 250;
                    document.querySelector("#gold-counter").innerHTML = "$" + gold;
                }
            } else if (this.innerHTML > pickaxeDamage) { //Touched
                this.innerHTML = this.innerHTML - pickaxeDamage;
            } else {
                this.innerHTML = "";
                this.style.backgroundColor = "rgb(55, 55, 55)";
                gold = gold + 250;
                document.querySelector("#gold-counter").innerHTML = "$" + gold;
            } 
        } else if (getComputedStyle(this).getPropertyValue("background-color") === "rgb(55, 55, 55)") { //Deep Rock
            if (this.innerHTML === "") { //Untouched
                if (pickaxeDamage < 1000) {
                    this.innerHTML = 1000 - pickaxeDamage;
                } else {
                    this.style.backgroundColor = "rgb(15, 15, 15)";
                    gold = gold + 1000;
                    document.querySelector("#gold-counter").innerHTML = "$" + gold;
                }
            } else if (this.innerHTML > pickaxeDamage) { //Touched
                this.innerHTML = this.innerHTML - pickaxeDamage;
            } else {
                this.innerHTML = "";
                this.style.backgroundColor = "rgb(15, 15, 15)";
                gold = gold + 1000;
                document.querySelector("#gold-counter").innerHTML = "$" + gold;
            }
        } else if (getComputedStyle(this).getPropertyValue("background-color") === "rgb(15, 15, 15)") { //Bottom Rock
            if (this.innerHTML === "") { //Untouched
                if (pickaxeDamage < 5000) {
                    this.innerHTML = 5000 - pickaxeDamage;
                } else {
                    this.style.opacity = "0";
                    gold = gold + 5000;
                    document.querySelector("#gold-counter").innerHTML = "$" + gold;
                }
            } else if (this.innerHTML > pickaxeDamage) { //Touched
                this.innerHTML = this.innerHTML - pickaxeDamage;
            } else {
                this.innerHTML = "";
                this.style.opacity = "0";
                gold = gold + 5000;
                document.querySelector("#gold-counter").innerHTML = "$" + gold;
            }
        }
    });
}