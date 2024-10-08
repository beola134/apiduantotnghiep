const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const cateController = require("../controllers/cateController");

//show tất cả sản phẩm
//http://localhost:5000/product/allsp
router.get("/allsp", productController.getAllProducts);

//show sản phẩm theo giới tính nam
//http://localhost:5000/product/allsp/gioitinh-nam
router.get("/allsp/gioitinh-nam", productController.getMale);

//show sản phẩm theo giới tính nữ
//http://localhost:5000/product/allsp/gioitinh-nu
router.get("/allsp/gioitinh-nu", productController.getFeMale);

//show sản phẩm theo giá dưới 2 củ
//http://localhost:5000/product/allsp/underTwomillion
router.get("/allsp/underTwomillion", productController.getProductsUnderTwoMillion);

//http://localhost:5000/product/allsp/doi"
router.get("/allsp/doi", productController.getCatesByCouple);

// show sản phẩm thêm chất liệu dây
//http://localhost:5000/product/allsp/getChatLieuDay"
router.get("/allsp/getChatLieuDay", productController.getChatLieuDay);
;

//show sản phẩm mới trong danh mục
//http://localhost:5000/product/productnew/
router.get("/productnew/", productController.getNewProducts);

//show sản phẩm theo danh mục
//http://localhost:5000/product/category/:id
router.get("/category/:id", productController.getProductsByCate);

//chi tiết sản phẩm theo id
//http://localhost:5000/product/chitietsp/:id
router.get("/chitietsp/:id", productController.getProductById);

//thêm sản phẩm
//http://localhost:5000/product/themsp
router.post("/themsp", productController.addProduct);

//xóa sản phẩm
//http://localhost:5000/product/xoasp/:id
router.delete("/xoasp/:id", productController.deleteProduct);

//sửa sản phẩm
//http://localhost:5000/product/capnhatsp/:id
router.put("/capnhatsp/:id", productController.updateProduct);

//phân trang sản phẩm
//http://localhost:5000/product/phantrang?page=1&limit=5
router.get("/phantrang", productController.getProductsByPage);

//api tìm kiếm sản phẩm bằng cách nhập tên sản phẩm và tên danh mục
//http://localhost:5000/product/timkiem
router.post("/timkiem", productController.searchProducts);

module.exports = router;
