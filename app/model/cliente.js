var Cliente = (function () {
    function Cliente(id, name, province, location, city, piva) {
        this.id = id;
        this.name = name;
        this.province = province;
        this.city = city;
        this.piva = piva;
        this.location = location;
    }
    return Cliente;
})();
exports.Cliente = Cliente;
