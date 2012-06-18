var express = require('express')
  , app = express.createServer()
  , port = 5013;

app.configure(function () {
  app.set('view options', { layout: false});
  app.use(app.router);
  app.use(express.static(__dirname + '/../class'));
});


app.listen(port);
console.log("\n\n\n \x1B[34m");
console.log("");
console.log("                 .---. .---. ");
console.log("                :     : o   :    me want cookie!");
console.log("            _..-:   o :     :-.._    /");
console.log("        .-''  '  `---' `---' \"   ``-.    ");
console.log("      .'   \"   '  \"  .    \"  . '  \"  `.  ");
console.log("     :   '.---.,,.,...,.,.,.,..---.  ' ;");
console.log("     `. \" `.                     .' \" .'");
console.log("      `.  '`.                   .' ' .'");
console.log("       `.    `-._           _.-' \"  .'  .----.");
console.log("         `. \"    '\"--...--\"'  . ' .'  .'  o   `.");
console.log("         .'`-._'    \" .     \" _.-'`. :       o  :");
console.log("       .'      ```--.....--'''    ' `:_ o       :");
console.log("     .'    \"     '         \"     \"   ; `.;\";\";\";'");
console.log("    ;         '       \"       '     . ; .' ; ; ;");
console.log("   ;     '         '       '   \"    .'      .-'");
console.log("   '  \"     \"   '      \"           \"    _.-'");
console.log("\n\n\n \x1B[39m");

console.log("Sesame Street is running on http://localhost:" + port + "/");
console.log("Have fun! Press Ctrl + C to stop");
console.log();