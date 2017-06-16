const doo = (f) => {
  return new Doo(f);
}

class Doo {
  constructor(opts) {
    this.initialize(opts);
  }

  initialize(opts) {
    // const promise = this.promise = new Promise((resolve, reject) => {
    // });

    this.tmp = null;

    if (typeof opts === 'function') {
    } else {
      const val = opts;
      this.tmp = val;
      this.valueOf = () => val;
    }
  }


  with(arg) {
    if (arg instanceof Array) {
    }
    return this;
  }


  // do

  while() {
    return this;
  }


  // promise

  all() {
    return this;
  }

  catch() {
    return this;
  }


  // if

  then(arg) {
    if (typeof arg === 'function') {
      // const { promise } = this;
      // const callback = arg;

      // promise.then(callback);
    } else {
      const { tmp } = this;
      if (!!tmp) {
        const val = arg;

        this.valueOf = () => val;
      } else {
      }
    }
    return this;
  }

  else(arg) {
    if (typeof arg === 'function') {
      // const { promise } = this;
      // const callback = arg;

      // promise.catch(callback);
    } else {
      const { tmp } = this;
      if (!tmp) {
        const val = arg;

        this.valueOf = () => val;
      } else {
      }
    }
    return this;
  }


  // switch

  case() {
    return this;
  }

  default() {
  }

  get $() {
    return this.valueOf();
  }
}

window.doo = doo;
