const { Plugin } = require('powercord/entities');

characters = ['a', 'j', 'k', 's', 'd', 'h', 'f', 'g']

function generate_keymash(lenght, characters){
    array = []
    for (var i = 0; i < lenght; i++){
        array.push(characters[Math.floor(Math.random() * characters.length)])
    }
    return array.join('')
}

module.exports = class Keymash extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'keymash',
      description: 'Sends keymashes with the desired amount of characters',
      usage: '{c} [number of characters]',
      executor: (args) => ({
        send: true,
        result: generate_keymash(args, characters)
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('keymash');
  }
};
