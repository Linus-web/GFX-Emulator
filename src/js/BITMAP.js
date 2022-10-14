let chars = new Image();
let charsBitmap = [];

export class BITMAP {

  constructor(width) {
    this.width = width;

    
    this.height = width;
    this.bitplane = new Array(this.height * this.width);
    this.charData78 = `00000000001000001010000101000111110010001001000100000000000000001111000100010011110001000100100010011110000000000000000001110001000100100000010000001000100011100000000000000000111000010010001000100100010010010001110000000000000000001111100100000010000001111000100000011111000000000000000011111001000000100000011100001000000100000000000000000000111110010001001000000100110010001001111100000000000000001000100100010010001001111100100010010001000000000000000001110000010000001000000100000010000011100000000000000000011110000010000001000000100001010000010000000000K000000001001000101000010100001110000100100010010000000000000000010000001000000100000010000001000100111110000000000000000100010011011001010100100010010001001000100000000000000001000100110010010101001001100100010010001000000000000000001110001000100100010010001001000100011100000000000000000111100010001001000100111100010000001000000000000000000000111000100010010001001000100100010001111000000000000000011110001000100100010011110001000100100010000000000000000011100011001001000000111100000001001111000000000000000001111100001000000100000010000001000000100000000000000000010001001000100100010010001001000100011100000000000000000100010010001000101000010100000100000010000000000000000001000100100010010001001000100101010001010000000000000000010001001000100010100000100001101100100010000000000000000100010010001000101000001000000100000010000000000000000001111100000110000110000110000110000011111000000000000000001110001000100100010010001001000100011100000000000000000000100000110000101000000100000010000001000000000000000000111000110110000011000111000110000011111000000000000000011111000001000011000000010001000100011100000000000000000011100001010001101000100100011111000001000000000000000001111000100000011110000001100110110011110000000000000000001110001101100100000011111001000100111110000000000000000111110010001000000100000100000010000001000000000000000000111000100010010001000111000100010001110000000000000000001110001000100100010001111000000100011100000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000100000110000000000000000000100000000000000000000000000010000011000000000000000000001000000000000000000000000000000000010000000000000100000111000101010010100000111000001010011110000010000000000001010001111100010100001010001111100010100000000000000000001000000100000000000000000000000000000000000000000000000010000011100001110000010000000000000100000000000000000000000000000000000000000000000000000000000000000000000000111110000001000000100111110010001001111100000000000000001000000100000010000001111000100010011110000000000000000001110001000000100000010000001000000011100000000000000000000010000001000000100001110001001000011100000000000000000111000100010011110001000000100010001110000000000000000001100001000000100000011000001000000100000000000000000000011110001001000111100000010000001000011100000000000000001000000100000010000001110000100100010010000000000000000000100000000000001000000100000010000001000000000000000000001000000000000010000001000000100000100000000000000000001010000101000010100001100000101000010100000000000000000000100000010000001000000100000010000001000000000000000000101000011110001010100101010010101001010100000000000000001011000110010010001001000100100010010001000000000000000001110001000100100010010001001000100011100000000000000000111000010010001110000100000010000001000000000000000000000011100010010000111000000100000010000001000000000000000010110001100100100000010000001000000100000000000000000000011110010000001000000011100000001001111000000000000000000010000011100000100000010000001000000010000000000000000010001001000100100010010001001000100011110000000000000000100010010001001000100010100001010000010000000000000000000000000100010010001001010100101010001010000000000000000010001001000100010100000100000101000100010000000000000000100010010001001101100011100000100001100000000000000000001111100000110000110000110000110000011111000000000000000001010000101000000000000000000000000000000000000000000000000100000010000010000001000001000000100000000000000000000011100010010000011000011000000000000100000000000000000011001001101100001100001100001101100100110000000000000000011000010010001001000011010010010001111100000000000000000010000010000001000000100000010000000100000000000000000000100000001000000100000010000001000001000000000000000000011100010001001011100101010010111000110000000000`

  }
  createBitmap(source) {
    let bitmapChars = new Array(source.length);

    var b = this.charData78.split("").map(function (source) {
      return parseInt(source, 10);
    });
    //     for (let i = 0; i < source.length; i++) {
    //       bitmapChars[i]= source[i];

    //     }
    return b;
  }

  getCharacterChar(text) {
    let charbits = this.createBitmap(this.charData78);
    let x;
    let bitmap = [];
    let ChararrayData = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      ",",
      ";",
      ":",
      "$",
      "#",
      "'",
      "!",
      " ",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "/",
      "?",
      "%",
      "&",
      "(",
      ")",
      "@",
    ];

    for (let i = 0; i < text.length; i++) {
      x = ChararrayData.indexOf(text.charAt(i));
      for (let j = 0; j <= 7; j++) {
        for (let k = 0; k <= 6; k++) {
          bitmap[i * 7 * 8 + j * 7 + k] = this.createBitmap(this.charData78)[
            x * 56 + 7 * j + k
          ];
          //Vid för att inte overwrita kör vi i sådana att varje boksta skjuts längst fram,
          //Sedan finns det 8 rader av längden 7 för varje bokstav. J*k gör så att den skippar en rad som den redan tagit för bokstaven
          //7*j på respektive array gör så att den inte överskrider information samt att den tar ny information som inte tagits tidigare
          //+k gör samma sak för 7*j där 7*j targertar en rad medan +k endast tar ett index. Allt i slutändan är ju index men eh.
        }
      }
    }
    return bitmap;
  }

  blitToDisplay(BITMAP, width, height, bx, by, dx, dy) {


  }

  

 

}

