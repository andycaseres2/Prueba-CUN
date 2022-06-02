// lo hago con Javascript ya que es el lenguaje que mano

function build(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "z":
        string[i] = "a";
        break;
      case "Z":
        string[i] = "A";
        break;
      default:
        string[i] = String.fromCharCode(string[i].charCodeAt(0) + 1);
    }
  }
  return string.join("");
}
console.log(build("aaa"));
