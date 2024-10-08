const express = require("express");
const router = express.Router();
const cateController = require("../controllers/cateController");

///tất cả các api liên quan đến danh mục
//show danh mục theo id
//http://localhost:5000/cate/catebyid/1

//show tất cả danh mục
//http://localhost:5000/cate/allcate
router.get("/allcate", cateController.getAllCates);

//thêm danh mục
//http://localhost:5000/cate/addcate
router.post("/addcate", cateController.addCate);

//xóa danh mục
//http://localhost:5000/cate/deletecate
router.delete("/deletecate/:id", cateController.deleteCate);

//sửa danh mục
//http://localhost:5000/cate/updatecate
router.put("/updatecate/:id", cateController.updateCate);

module.exports = router;
