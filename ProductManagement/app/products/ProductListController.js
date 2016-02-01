(function () {
    angular.module("productManagement")
        .controller("ProductListCtrl", ProductListCtrl);

    function ProductListCtrl () {
        var me = this;
        me.products = [
            {
                "productId": 1,
                'productName': "Silla",
                "productCode": "ACC-781",
                "purchaseDate": "Marzo 19, 2015",
                "description": "Silla ergonomica reclinable color negro",
                "cost": 9.00,
                "price": 19.95,
                "category": "accesorios",
                "imageUrl": "http://www.arqhys.com/construccion/fotos/construccion/Historia-de-la-silla.jpg"
            },
            {
                "productId": 2,
                "productName": "Silla 2",
                "productCode": "AMM-928",
                "purchaseDate": "Enero 20, 2014",
                "description": "Silla numero dos",
                "cost": 10.00,
                "price": 20.19,
                "category": "sillas",
                "imageUrl": "http://laflormuebleria.com/productos/media/catalog/product/m/a/main_silla%20induma.jpg"
            },
            {
                "productId": 3,
                "productName": "Silla bar",
                "productCode": "BAR-201",
                "purchaseDate": "Abril 12, 2015",
                "description": "Silla para bar",
                "cost": 100.00,
                "price": 200.00,
                "category": "bar",
                "imageUrl": "http://grupo-meta.com/comprar/catalog/images/silla_belfort_madera_de_haya.jpg"
            }
        ];

        me.showImage = false;

        me.toggleImage = function () {
            me.showImage = !me.showImage;
        };
    }
}());