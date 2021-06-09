class MovingAverage {
  /**
   * Initializes a MovingAverage with a
   * capacity of `size`.
   */
  constructor(size) {
    this.queue = [];
    this.sum = 0;
    this.maxSize = size;
  }

  /**
   * Adds `val` to the stream of numbers
   * and returns the current average of the numbers.
   */
  next(val) {
    if (this.queue.length === this.maxSize) {
      this.sum -= this.queue.shift();
    }

    this.sum += val;
    this.queue.push(val);

    return this.sum / this.queue.length;
  }
}

const m = new MovingAverage(3);
console.log(m.next(3)); // 3
console.log(m.next(5)); // 4
console.log(m.next(7)); // 5
console.log(m.next(6)); // 6
