class MacorCommand {
    constructor() {
        this.commandList = []
    }

    add(command) {
        this.commandList.push(command)
    }

    execute() {
        this.commandList.forEach((item) => {
            item.execute()
        })
    }
}


var openAcCommand = {
    execute: function () {
        console.log('打开空调')
    }
}

var openTvCommand = {
    execute: function () {
        console.log('打开电视')
    }
}

var openSoundCommand = {
    execute: function () {
        console.log('打开音响')
    }
}
var macorCommand1 = new MacorCommand()
macorCommand1.add(openTvCommand)
macorCommand1.add(openSoundCommand)

var macorCommand = new MacorCommand()
macorCommand.add(openAcCommand)
macorCommand.add(macorCommand1)
macorCommand.execute()
// var setCommand = (function( command ){
//     document.getElementById( 'button' ).onclick = function(){
//         command.execute();
//     }
// })( macorCommand );