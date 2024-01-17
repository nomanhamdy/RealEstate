class Transaction {
    constructor(id, propertyId, buyer, amount, date) {
        this.id = id;
        this.propertyId = propertyId;
        this.buyer = buyer;
        this.amount = amount;
        this.date = date;
    }
}

module.exports = Transaction;
