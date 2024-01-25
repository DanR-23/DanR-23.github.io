function getDay(){
var curdate= new Date();
var curday=curdate.getDay();
switch (curday){
    case 0:
        day = "";
        break;
    case 1:
        day = "";
        break;
    case 2:
        day = "";
        break;
    case 3:
        day = "";
        break;
    case 4:
        day = "Thurs: 20% Discount";
        break;
    case 5:
        day = "";
        break;
    case 6:
        day = "";
        break;
    }
    return day;
}  