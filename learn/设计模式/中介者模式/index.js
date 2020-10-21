class Player {
    constructor(name, teamColor) {
        this.name = name;   // 角色名字
        this.teamColor = teamColor; // 队伍颜色
        this.state = 'alive';   // 玩家状态
    }
    win() {
        console.log(this.name + ' won');
    }
    lose() {
        console.log(this.name + ' lost');
    }
    die() {
        this.state = 'dead';
        gameCenter.playerDead( this ); // 给中介者发送消息，玩家死亡 
    }
}


class GameCenter {
    constructor() {
        this.players = {};
    }

    addPlayer(player) {
        let teamColor = player.teamColor;
        if (!this.players[teamColor]) {
            this.players[teamColor] = [];
        }
        this.players[teamColor].push(player);
    }


    playerDead( player ){ // 玩家死亡
        var teamColor = player.teamColor,
        teamPlayers = this.players[ teamColor ]; // 玩家所在队伍
        var all_dead = true;
        for ( var i = 0, player; player = teamPlayers[ i++ ]; ){
            if ( player.state !== 'dead' ){
                all_dead = false;
                break;
            }
        }
        if ( all_dead === true ){ // 全部死亡
            for ( var i = 0, player; player = teamPlayers[ i++ ]; ){
                player.lose(); // 本队所有玩家lose
            }
            for ( var color in this.players ){
                if ( color !== teamColor ){
                    var teamPlayers = this.players[ color ]; // 其他队伍的玩家
                    for ( var i = 0, player; player = teamPlayers[ i++ ]; ){
                        player.win(); // 其他队伍所有玩家win
                    }
                }
            }
        }
    };
}

let gameCenter = new GameCenter();

let player1 = new Player('A', 'red');
let player2 = new Player('B', 'red');
let player3 = new Player('C', 'red');
let player4 = new Player('1', 'blue');
let player5 = new Player('2', 'blue');
let player6 = new Player('3', 'blue');

gameCenter.addPlayer(player1);
gameCenter.addPlayer(player2);
gameCenter.addPlayer(player3);
gameCenter.addPlayer(player4);
gameCenter.addPlayer(player5);
gameCenter.addPlayer(player6);

player1.die();
player2.die();
player3.die();

// A lost
// B lost
// C lost
// 1 won
// 2 won
// 3 won