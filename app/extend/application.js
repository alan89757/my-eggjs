
// 
const count = Symbol('alan_count')

module.exports = {
  // addCount() {
  //   // console.log(this)
  //   if(this.addNum === undefined) {
  //     this.addNum = 0;
  //   }
  //   this.addNum++;
  // }
  get addCount() {
    if(this[count] === undefined) {
      this[count] = 0;
    }
    return this[count];
  },
  set addCount(value) {
    this[count] = value;
  }
}