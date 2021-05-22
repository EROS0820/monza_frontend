class Utils {
  getAttrFromArray = (list, id, attribute, default_value) => {
    const index = (element) => element.id == id;

		let order = list.findIndex(index);
    let item = list[order];
    if (item) {
      return item[attribute];
    } else {
      return default_value;
    }
  }

  convertStrToNum = (str) => {
    if (!str) {
      return 0;
    }
    let num = Number(str.replace(',', '.'));
    return num;
  }

  convertNumToStr = (num) => {
    if (!num)
      return '';
    let str = num.toString().replace('.', ',');
    return str;
  }

  round = (num, decimal) => {
    const factorOfTen = Math.pow(10, decimal);
    return Math.round(num * factorOfTen) / factorOfTen;
  }
}
export default new Utils();