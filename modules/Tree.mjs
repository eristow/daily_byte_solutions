// const LEFT = 0;
// const RIGHT = 1;

export default class Tree {
  constructor(value) {
    this.value = value;
    this._left = null;
    this._right = null;
    this.parent = null;
  }

  get left() {
    return this._left;
  }

  set left(node) {
    this._left = node;
    if (node) {
      node.parent = this;
    }
  }

  get right() {
    return this._right;
  }

  set right(node) {
    this._right = node;
    if (node) {
      node.parent = this;
    }
  }
}
