var list_equipos = [];
var list_players = [];
function Team(name, win, loss, type, players){
    this.name;
    this.win;
    this.loss;
    this.type;
    this.players=[];

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

}
function Player(nickname,name,principal,score){
    this.nickname = nickname;
    this.name = name;
    this.principal = principal;
    this.score = score;
}

window.addEventListener("load",inicio);
function inicio() {
    var player1 = new Player("will1","Will es Milf1","Alero",100);
    var player2 = new Player("will2","Will es Milf2","Alero",200);
    var player3 = new Player("will3","Will es Milf3","Alero",300);
    list_players.push(player1);
    list_players.push(player2);
    list_players.push(player3);
    var team = new Team("leyendas",0,1,"Test",list_players);
    document.write(team.getPlayerMaxPunts().name);


}
