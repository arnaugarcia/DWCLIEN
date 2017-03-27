var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "serv"
    , function ($scope, serv) {

        var team = new Team("equipo", 999, 0, "baseball");


        var player1 = new Player("Player 1", "minick", "bateador", 80,100);
        var player2 = new Player("Player 2", "otronick", "bateador", 100,200);
        var player3 = new Player("Player 3", "ohmynick", "pitcher", 200,300);
        var player4 = new Player("Player 4", "whatthenick", "leftfield", 70,400);
        team.addPlayer(player1);
        team.addPlayer(player2);
        team.addPlayer(player3);
        team.addPlayer(player4);

        $scope.team = team;
        $scope.infoPlayer = $scope.team.getPlayer("diferentenick");
        $scope.maxPointsPlayer = $scope.team.getPlayerMaxPunts();

        player1.updatePlayer("Player Updated", "rightfield", 99);
        $scope.playerUpdated = player1;

        serv.addTeam(team);
        $scope.teamList = serv.teamList;

        var losFant = new Team("Los fantasticos", 129, 0, "baseball");
        var fantPlayer1 = new Player("El player", "elplayer", "bateador", 123,500);
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