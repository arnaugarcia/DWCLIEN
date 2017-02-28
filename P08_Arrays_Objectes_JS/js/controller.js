var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", "serv"
    , function ($scope, serv) {

        var team = new Team("Team 1", 999, 0, "team");

        var player1 = new Player("Player 1", "player1", "tipo", 90,110);
        var player2 = new Player("Player 2", "player2", "tipo", 10,30);
        var player3 = new Player("Player 3", "player3", "tipo", 210,400);
        var player4 = new Player("Player 4", "player4", "tipo", 910,200);

        team.addPlayer(player1);
        team.addPlayer(player2);
        team.addPlayer(player3);
        team.addPlayer(player4);

        $scope.team = team;
        $scope.infoPlayer = $scope.team.getPlayer("nickdiferente");
        $scope.maxPointsPlayer = $scope.team.getPlayerMaxPunts();
        player1.updatePlayer("Player5", "tipo", 99);
        $scope.playerUpdated = player1;

        serv.addTeam(team);
        $scope.teamList = serv.teamList;
        var team1 = new Team("Team 2", 129, 0, "tipo");
        var fantPlayer1 = new Player("Player 5", "player5", "tipo", 123,500);
        team1.addPlayer(fantPlayer1);
        serv.addTeam(team1);
        $scope.activeTeam;

        $scope.modTeam = {};
        $scope.modPlayer = {};

        $scope.createTeam = function () {
            if ($scope.modTeam.name !== undefined) {
                var team = new Team($scope.modTeam.name, $scope.modTeam.victories, $scope.modTeam.defeats, $scope.modTeam.type);
                serv.addTeam(team);
            }
        };

        $scope.createPlayer = function () {
            if ($scope.teamList[$scope.activeTeam] !== undefined && $scope.modPlayer.nickname !== undefined) {
                var player = new Player($scope.modPlayer.name, $scope.modPlayer.nickname, $scope.modPlayer.position, $scope.modPlayer.points, $scope.modPlayer.minutes);
                if ($scope.teamList[$scope.activeTeam].players[player.nickname] === undefined) {
                    $scope.teamList[$scope.activeTeam].addPlayer(player);
                } else {
                    $scope.teamList[$scope.activeTeam].players[player.nickname] = player;
                }
            }
        };

        $scope.displayPlayer = function (nickname) {
            $scope.modPlayer.name = $scope.teamList[$scope.activeTeam].players[nickname].name;
            $scope.modPlayer.nickname = nickname;
            $scope.modPlayer.position = $scope.teamList[$scope.activeTeam].players[nickname].position;
            $scope.modPlayer.points = $scope.teamList[$scope.activeTeam].players[nickname].points;
        };

        $scope.deletePlayer = function (nickname) {
            delete $scope.teamList[$scope.activeTeam].players[nickname];
        };

    }]);