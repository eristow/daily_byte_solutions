var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  while (t - this.queue[0] > 3000) {
    this.queue.shift();
  }

  this.queue.push(t);

  return this.queue.length;
};

const obj = new RecentCounter();
console.log(obj.ping(1)); // 1
console.log(obj.ping(300)); // 2
console.log(obj.ping(3000)); // 3
console.log(obj.ping(3002)); // 3
console.log(obj.ping(7000)); // 1
