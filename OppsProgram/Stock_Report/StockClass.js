class Resultant {
    constructor(Stock_Name, share_Price) {
        this.Stock_Name = Stock_Name;
        this.share_Price = share_Price;
        this.Number_Of_share = Number_Of_share;
    }
    total() {
        return this.share_Price * this.Number_Of_share;
    }
}
/**
 * Inherit the property from resultant class to stock class 
 */
 class stock extends Resultant {
    constructor(Stock_Name, share_Price, Number_Of_share) {        
        super(Stock_Name, share_Price, Number_Of_share)
    }
}
module.exports=stock;