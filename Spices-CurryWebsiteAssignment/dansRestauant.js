function getDiscount()
{
    var todayDate = new Date();
    var curDay = todayDate.getDiscount();

    switch (curDay){
    case 1:
        discount = "25% DISCOUNT ON TOTAL BILL";
        break;
    }
    return discount;
}