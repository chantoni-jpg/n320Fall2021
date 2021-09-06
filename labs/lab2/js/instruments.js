class Instruments {
  constructor(family, verb, loudness) {
    this.loudness = loudness;
    this.family = family;
    this.verb = verb;
  }
  play() {
    console.log(this.family + this.verb + " at" + this.loudness);
  }
}
class Woodwind extends Instruments {
  constructor() {
    super("Bassoon", " Blows", " Mezzo-piano");
  }
}

class Percussion extends Instruments {
  constructor() {
    super("Drums", " Bangs", " Forte");
  }
}
class String extends Instruments {
  constructor() {
    super("Violin", " Glides across Strings", " Mezzo-Forte");
  }
}
let Instrument = [];
Instrument[0] = new Woodwind();
Instrument[1] = new Percussion();
Instrument[2] = new String();
Instrument.forEach((Instrument) => {
  Instrument.play();
});
