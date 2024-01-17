class Property {
    constructor(id, owner, address, price, status) {
        this.id = id;
        this.owner = owner;
        this.address = address;
        this.price = price;
        this.status = status; // e.g., 'available', 'sold'
    }
}

module.exports = Property;
