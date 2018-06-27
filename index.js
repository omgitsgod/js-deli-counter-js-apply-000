var katzDeliLine = []
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) +1 } in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine === true) {
  return katzDeliLine[0]
  katzDeliLine.shift() }
}
function currentLine() {
  
}