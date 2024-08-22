var pickaxeDamage = 1;
var gold = 0;
var upgradeCost = 100;

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

document.querySelector("#upgrade-button").addEventListener("click", function() {
    if (gold >= upgradeCost) {
        if (this.innerHTML === "Upgrade Pickaxe $100") {
            pickaxeDamage = 3;
            gold = gold - upgradeCost;
            document.querySelector("#gold-counter").innerHTML = "$" + gold;
            upgradeCost = 250;
            this.innerHTML = "Upgrade Pickaxe $250";
        } else if (this.innerHTML === "Upgrade Pickaxe $250") {
            pickaxeDamage = 5;
            gold = gold - upgradeCost;
            document.querySelector("#gold-counter").innerHTML = "$" + gold;
            upgradeCost = 500;
            this.innerHTML = "Upgrade Pickaxe $500";
        } else if (this.innerHTML === "Upgrade Pickaxe $500") {
            pickaxeDamage = 10;
            gold = gold - upgradeCost;
            document.querySelector("#gold-counter").innerHTML = "$" + gold;
            upgradeCost = 1000;
            this.innerHTML = "Upgrade Pickaxe $1000";
        } else if (this.innerHTML === "Upgrade Pickaxe $1000") {
            pickaxeDamage = 25;
            gold = gold - upgradeCost;
            document.querySelector("#gold-counter").innerHTML = "$" + gold;
            upgradeCost = 2500;
            this.innerHTML = "Upgrade Pickaxe $2500";
        } else if (this.innerHTML === "Upgrade Pickaxe $2500") {
            pickaxeDamage = 50;
            gold = gold - upgradeCost;
            document.querySelector("#gold-counter").innerHTML = "$" + gold;
            upgradeCost = 5000;
            this.innerHTML = "Upgrade Pickaxe $5000";
        }
    }
});