/**
 * Created by Arnau on 01/02/17.
 */
var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "servTeam"
    , function ($scope, serv) {

        var team = new Team("equipazo", 999, 0, "baseball");

        var player1 = new Player("Player 1", "nick1", "bateador", 80);
        var player2 = new Player("Player 2", "nick2", "alero", 100);
        var player3 = new Player("Player 3", "nick3", "pitcher", 200);
        var player4 = new Player("Player 4", "nick4", "test", 70);
        team.addPlayer(player1);
        team.addPlayer(player2);
        team.addPlayer(player3);
        team.addPlayer(player4);

        $scope.team = team;
        $scope.infoPlayer = $scope.team.getPlayer("nick1");
        $scope.maxPointsPlayer = $scope.team.getPlayerMaxPunts();

        player1.updatePlayer("Player Updated", "rightfield", 99);
        $scope.playerUpdated = player1;

        serv.addTeam(team);
        $scope.teamList = serv.teamList;

        var losFant = new Team("Los fantasticos", 129, 0, "baseball");
        var fantPlayer1 = new Player("El player", "elplayer", "bateador", 123);
        losFant.addPlayer(fantPlayer1);
        serv.addTeam(losFant);

        $scope.activeTeam;

        /*
         * Update or create team
         */

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
                var player = new Player($scope.modPlayer.name, $scope.modPlayer.nickname, $scope.modPlayer.position, $scope.modPlayer.points);

                //var inspeciona = $scope.activeTeam.players[player.nickname];

                if ($scope.teamList[$scope.activeTeam].players[player.nickname] === undefined) {
                    //alta
                    //alert("ENTRO ALTA DE"+player.name);
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
