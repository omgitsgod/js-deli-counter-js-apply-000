var katzDeliLine = []
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) +1 } in line.`
}

function nowServing(katzDeliLine) {
  
  return `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.shift()
}
function currentLine() {
  
}