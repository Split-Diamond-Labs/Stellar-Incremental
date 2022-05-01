String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function spacify(text) {
  let result = text;
  let spacifiedAlphabet = ["ᗩ","ᗷ","ᑕ","ᗪ","E","ᖴ","G","ᕼ","I","ᒍ","K","ᒪ","ᗰ","ᑎ","O","ᑭ","ᑫ","ᖇ","ᔕ","T","ᑌ","ᐯ","ᗯ","᙭","Y","ᘔ"];
  for (var i = text.length - 1; i >= 0; i--) {
    if ((result.charCodeAt(i) > 64 && result.charCodeAt(i) < 91) || (result.charCodeAt(i) > 96 && result.charCodeAt(i) < 123)) {
      result = result.replaceAt(i, spacifiedAlphabet[result.charCodeAt(i) % 32 - 1])
    }
  }
  return result;
}