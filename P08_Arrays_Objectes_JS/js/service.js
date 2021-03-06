app.service("serv", function () {

    this.teamList = [];

    this.addTeam = function (team) {
        this.teamList.push(team);
    };

});


function Player(name, nickname, position, points, minutes) {
    this.name = name;
    this.nickname = nickname;
    this.position = position;
    this.points = points;
    this.minutes = minutes;

    this.setName = function (name) {
        this.name = name;
    };
    this.setNickname = function (nickname) {
        this.nickname = nickname;
    };
    this.setPosition = function (position) {
        this.position = position;
    };
    this.setPoints = function (points) {
        this.points = points;
    };

    this.updatePlayer = function (name, position, points) {

        this.name = name || this.name;
        this.position = position || this.position;
        this.points = points || this.points;
    };
}

function Team(name, victories, defeats, type) {

    this.name = name;
    this.victories = victories;
    this.defeats = defeats;
    this.type = type;

    this.players = {};

    this.setName = function (name) {
        this.name = name;
    };
    this.setVictories = function (victories) {
        this.victories = victories;
    };

    this.setDefeats = function (defeats) {
        this.defeats = defeats;
    };

    this.setType = function (type) {
        this.type = type;
    };

    this.addPlayer = function (player) {
        this.players[player.nickname] = player;
    };

    this.getPlayer = function (nick) {

        return this.players[nick];

    };

    this.delPlayer = function (nick) {
        for (i = 0; i < this.players.length; i++) {
            if (nick === this.players[i].nickname) {
                this.players.splice(i, 1);
            }
        }
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