/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const N: number = parseInt(readline()); // Number of elements which make up the association table.
 const Q: number = parseInt(readline()); // Number Q of file names to be analyzed.
 
 let elements = [];
 for (let i = 0; i < N; i++) {
     var inputs: string[] = readline().split(' ');
     const EXT: string = inputs[0].toLowerCase(); // file extension
     const MT: string = inputs[1]; // MIME type.
     if ( 
         //Les extensions de fichiers sont composées d'un maximum de 10 caractères ascii alphanumériques + il n'y a pas d'espaces
         (/[a-z0-9]{1,10}/gm.test(EXT) && !/\s/.test(EXT))
         // Les type MIME sont composés d'un maximum de 50 caractères ascii alphanumérique et de ponctuations + il n'y a pas d'espaces
         && (/[a-z0-9/]{1,50}/gm.test(MT) && !/\s/.test(MT))) {
         elements[EXT] = MT;
     }
 }
 
 // For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
 for (let i = 0; i < Q; i++) {
     const FNAME: string = readline().toLowerCase(); // One file name per line.
     const ext: string =  FNAME.split('.').length >= 2 ? FNAME.split('.').pop() : null;
 
     //Les noms de fichiers sont composés d'un maximum de 256 caractères ascii alphanumériques et points + il n'y a pas d'espaces
     if (!!ext
         && (/[a-z0-9.]{1,256}/gm.test(FNAME) && !/\s/.test(FNAME)) 
         && ext in elements) {
         console.log(elements[ext]);
     } else {
         console.log('UNKNOWN');
     }
 }