class Player {
    set name(n) {
        this._name = n;
    }
    set type(t) {
        this._type = t;
    }
    set weapon(w) {
        this._weapon = w;
    }
    set health(h) {
        this._health = h;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get weapon() {
        return this._weapon;
    }
    get health() {
        return this._health;
    }

    constructor(n) {
		this.reset();
		this._name = n;
	}


    //  let p1=new Player('Artus');
    //  console.log(p1.name);

    reset() {
        // used to initialize our players and restart
        this._type = "Villian";
        this._weapon = "Jelly Gun";
        this._health = 5;
    }

    getAllInfo() {
        // give current information on all the properties of our players
        if (parseInt(this.health) === 0) {
            this.health = this.name + " Died!";
            return this.health;
        } else {
            return (
                "Name:" +
                this._name +
                "\n" +
                "Type:" +
                this._type +
                "\n" +
                "Weapon:" +
                this._weapon +
                "\n" +
                "Health:" +
                this._health +
                "\n"
            );
        }

    }

    // let p1 = new Player('Atrus');
    // console.log(p1.reset());
    // console.log(p1.getAllInfo());

    doBattle(player1, player2) {
        // where the battling is done
        // uses random number generator
        let attacksPlayer1 = this.getRandomNumber();
        // Maybe add something about amount of damage per attack
        // Maybe track number of blows each get and/stikes
        let attacksPlayer2 = this.getRandomNumber();
        let action = document.querySelector('#action');
        if (attacksPlayer1 > attacksPlayer2) {
            action.value = player1.name + ' attacks ' + player2.name;
            player1._health++;
            player2._health--;
        } else if (attacksPlayer1 < attacksPlayer2) {
            action.value = player2.name + ' attacks ' + player1.name;
            player1.health--;
            player2.health++;
        }

        statusGame()
    }

    getRandomNumber() {
        let random = Math.floor(Math.random() * 20) + 1;
        return random;
    }
}

var gru = new Player("Gru");
var megamind = new Player("Megamind");

function playGame() {
    gru.reset();
    megamind.reset();
    statusGame();
}

function battleGame() {
    gru.doBattle(gru, megamind);
}

function statusGame() {
    document.getElementById("p1");
    p1.value = gru.getAllInfo();

    document.getElementById("p2");
    p2.value = megamind.getAllInfo();
}


