var word = "bottles";
var count = 99;
while (count > 0) {
  document.write(count + " " + word + " of beer on the wall ");
  document.write(count + " " + word + " of beer, ");
  document.write("Take one down, pass it around, ");
  count = count - 1;
  if (count > 0) {
    document.write(count + " " + word + " of beer on the wall. ");
  } else {
    document.write("No more " + word + " of beer on the wall. ");
  }
}