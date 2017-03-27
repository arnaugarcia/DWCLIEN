var list_players = [];
function Team(name, win, loss, type, players){
    this.name = name;
    this.win = win;
    this.loss = loss;
    this.type = type;
    this.players = players||{};
    this.championship = [];

    this.addPlayer = function (nickname, name, principal, score) {
        return this.players[nickname] = new Player(nickname, name, principal, score);
    };
    
    this.getPlayer = function (nickname) {
        return this.players[nickname];
    };

    this.delPlayer = function (nickname) {
        return this.players[nickname].remove();
    };

    this.getPlayerMaxPunts = function () {
        var x = 0;
        var nickname;
        for (var key in this.players) {
            if (x < this.players[key].score){
                x = this.players[key].score;
                nickname = this.players[key].nickname;
            }
        }
       return this.getPlayer(nickname);
    };

    this.addChampionship = function (year, position) {
        var championship = new Championship(year,position);
        this.championship.push(championship);
    };

    this.firstLast = function () {
        this.championship.push(this.championship[0]);
        this.championship.splice(0,1);
    };

    this.remCampionat = function (year) {
        this.championship.splice(this.championship.indexOf(year));
    };

    this.showTeam = function () {
        // document.write("Nom Equip: " + this.name + "</br>");
        // document.write("Victories: " + this.win + "</br>");
        // document.write("Derrotes: " + this.loss + "</br>");
        // document.write("Tipus: " + this.type + "</br>");
        //
        // for (var key in this.players){
        //     this.players[key].showPlayer();
        // }
    };
    
    this.showChampionship = function () {
        for (var i = 0; i<this.championship.length; i++){
            document.getElementById("infoCampionats").innerHTML += "Any: " + this.championship[i].year + " Posició" + this.championship[i].position + "<br>";
        }
    }

}
function Player(nickname,name,principal,score){
    this.nickname = nickname;
    this.name = name;
    this.principal = principal;
    this.score = score;

    this.updatePlayer = function(name,principal,score){
        this.name = name || this.name;
        this.principal = principal || this.principal;
        this.score = score || this.score;
    };

    this.showPlayer = function () {
        document.write("</br>");
        document.write("Nom del jugador: " + this.name + "</br>");
        document.write("Nickname: " + this.nickname + "</br>");
        document.write("Prinicipal: " + this.principal + "</br>");
        document.write("Score: " + this.score + "</br>");
        document.write("</br>");
    }
}

window.addEventListener("load",inicio);

function inicio() {
    var player1 = new Player("will1","Will es Milf1","Jungle",100);
    var player2 = new Player("will2","Will es Milf2","Top",200);
    var player3 = new Player("will3","Will es Milf3","Mid",300);
    var player4 = new Player("will4","Will es Milf4","Support",400);
    list_players[player1.nickname] = player1;
    list_players[player2.nickname] = player2;
    list_players[player3.nickname] = player3;
    list_players[player4.nickname] = player4;
    var team = new Team("leyendas",0,1,"Test",list_players);

    team.addChampionship("2000","Test1");
    team.addChampionship("1999","Test2");
    team.addChampionship("1998","Test3");
    team.addChampionship("1997","Test4");
    team.addChampionship("2003","Test5");

    team.showChampionship();

    team.firstLast();

    team.remCampionat("2003");

    team.showChampionship();

    //Validacions
    // team.showTeam();
    //
    // document.write("Conseguir jugador per nickname (will2) " + "</br>");
    // team.getPlayer("will2").showPlayer();
    //
    // document.write("Modificar jugador (will2) amb els següents parámetres ('Cristian', 'Jugador', '500')");
    // team.getPlayer("will2").updatePlayer("Cristian","Jugador",500);
    // team.getPlayer("will2").showPlayer();

}

function Championship(year, position){
    this.year = year;
    this.position = position;
}
