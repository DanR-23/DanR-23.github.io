function getOptions(){
// Comand prompt that gets the user to type something
var option = prompt("would you like to get a takeaway or a delivery:")
// Keeps looping round while the condition is true
while (option != "delivery" && option != "takeaway")
{
    option = prompt("Error, would you like to get a takeaway or delivery:")
}
// Displays what is in the if statement only if the conditions are true
if (option == "takeaway")
{
    document.writeln("TAKEAWAY <br>")
    document.writeln("<br>")
    document.writeln("Order over the phone on 0121-678-78-97 or come into our restaurant and order. <br> Come and relax in our comforatable waiting area and your food will be with you in no time.")
}
else if (option == "delivery")
{
    document.writeln("DELIVERY <br>")
    document.writeln("<br>")
    document.writeln("We only deliver within a 7 mile radius of our restaurant.<br> Order over the phone on 0121-678-78-97. <br>Our estimated delivery times are between 20 - 30 mins.")
}
}