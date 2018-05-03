process.stdin.setEncoding('utf-8');  //zmiana encodowania
process.stdout.write('/ver for version info, /lang for language info, or /exit to exit.\n');
process.stdin.on('readable', function() {  //ustawienie nasluchiwania na zdarzenie odczytu
    var input = process.stdin.read();
    if (input !== null) {
      var instruction = input.toString().trim();
      switch (instruction) {
        case '/exit':
          process.stdout.write('Quitting app!\n');
          process.exit();  
          break;
        case '/ver':
          process.stdout.write(process.versions.node + '\n');
          break;
        case '/lang':
          process.stdout.write(process.env.lang + '\n');
					break;
				default:
					process.stderr.write('Wrong instruction!\n');
					break;
      }
    }
});