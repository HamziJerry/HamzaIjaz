
// 6. Design a stop watch. Using OOP class concept
// create a class that has four methods. Reset, start,
// stop, duration.

// I. Start method starts the watch timing and
// if we call start method twice in a row it
// will through error ‘Stopwatch has already
// started.’

// II. Stope method stops the watch and if we
// call stops method twice in a row it will
// through error ‘start it first’.

// III. Reset method reset the watch.

// IV. Duration method returns the total
// duration.

class Stopwatch {
  #time;

  reset() {

  }
  start() {
    this.#time = new Date();
  }
  stop() {

  }
  duration() {

  }
}