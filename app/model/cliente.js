var Cliente = (function () {
    function Cliente(id, name, province, location, city, piva) {
        this.id = id;
        this.name = name;
        this.province = province;
        this.location = location;
        this.city = city;
        this.piva = piva;
    }
    return Cliente;
})();
exports.Cliente = Cliente;
