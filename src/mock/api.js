import Mock from 'mockjs'
//获取用户信息
Mock.mock('/api/user/login', {
  "status": 0,
  "data": {
    "id|10001-11000": 0,
    "username": "@cname",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
})
//获取产品列表
Mock.mock('/api/products', {
  "status": 0,
  "data": {
    "pageNum": 1,
    "pageSize": 10,
    "size": 2,
    "orderBy": null,
    "startRow": 1,
    "endRow": 2,
    "total": 2,
    "pages": 1,
    "phone": {
      "list": [{
          "id": 1,
          "categoryId": 3,
          "name": "iphone7",
          "subtitle": "双十一促销",
          "mainImage": "/imgs/nav-img/nav-1.png",
          "status": 1,
          "price": 7199.22
        },
        {
          "id": 2,
          "categoryId": 2,
          "name": "oppo R8",
          "subtitle": "oppo促销进行中",
          "mainImage": "/imgs/nav-img/nav-2.png",
          "status": 1,
          "price": 2999.11
        },
        {
          "id": 3,
          "categoryId": 3,
          "name": "iphone7",
          "subtitle": "双十一促销",
          "mainImage": "/imgs/nav-img/nav-3.png",
          "status": 1,
          "price": 7199.22
        },
        {
          "id": 4,
          "categoryId": 2,
          "name": "oppo R8",
          "subtitle": "oppo促销进行中",
          "mainImage": "/imgs/nav-img/nav-4.png",
          "status": 1,
          "price": 2999.11
        },
        {
          "id": 5,
          "categoryId": 3,
          "name": "iphone7",
          "subtitle": "双十一促销",
          "mainImage": "/imgs/nav-img/nav-5.png",
          "status": 1,
          "price": 7199.22
        },
        {
          "id": 6,
          "categoryId": 2,
          "name": "oppo R8",
          "subtitle": "oppo促销进行中",
          "mainImage": "/imgs/nav-img/nav-6.png",
          "status": 1,
          "price": 2999.11
        },
      ],
    },
    "redmi": {
      "list": [{
          "id": 7,
          "categoryId": 3,
          "name": "RedMi",
          "subtitle": "双十一促销",
          "mainImage": "/imgs/nav-img/nav-1.png",
          "status": 1,
          "price": 7199.22
        },
        {
          "id": 8,
          "categoryId": 2,
          "name": "RedMi",
          "subtitle": "oppo促销进行中",
          "mainImage": "/imgs/nav-img/nav-2.png",
          "status": 1,
          "price": 2999.11
        },
        {
          "id": 9,
          "categoryId": 3,
          "name": "RedMi",
          "subtitle": "双十一促销",
          "mainImage": "/imgs/nav-img/nav-3.png",
          "status": 1,
          "price": 7199.22
        },
        {
          "id": 10,
          "categoryId": 2,
          "name": "RedMi",
          "subtitle": "oppo促销进行中",
          "mainImage": "/imgs/nav-img/nav-4.png",
          "status": 1,
          "price": 2999.11
        },
        {
          "id": 11,
          "categoryId": 3,
          "name": "RedMi",
          "subtitle": "双十一促销",
          "mainImage": "/imgs/nav-img/nav-5.png",
          "status": 1,
          "price": 7199.22
        },
        {
          "id": 12,
          "categoryId": 2,
          "name": "RedMi",
          "subtitle": "oppo促销进行中",
          "mainImage": "/imgs/nav-img/nav-6.png",
          "status": 1,
          "price": 2999.11
        },
      ],
    },
    "tv": {
      "list": [{
          "id": 13,
          "categoryId": 3,
          "name": "RedMi",
          "subtitle": "双十一促销",
          "mainImage": "/imgs/nav-img/nav-3-1.jpg",
          "status": 1,
          "price": 7199.22
        },
        {
          "id": 14,
          "categoryId": 2,
          "name": "RedMi",
          "subtitle": "oppo促销进行中",
          "mainImage": "/imgs/nav-img/nav-3-2.jpg",
          "status": 1,
          "price": 2999.11
        },
        {
          "id": 15,
          "categoryId": 3,
          "name": "RedMi",
          "subtitle": "双十一促销",
          "mainImage": "/imgs/nav-img/nav-3-3.png",
          "status": 1,
          "price": 7199.22
        },
        {
          "id": 16,
          "categoryId": 2,
          "name": "RedMi",
          "subtitle": "oppo促销进行中",
          "mainImage": "/imgs/nav-img/nav-3-4.jpg",
          "status": 1,
          "price": 2999.11
        },
        {
          "id": 17,
          "categoryId": 3,
          "name": "RedMi",
          "subtitle": "双十一促销",
          "mainImage": "/imgs/nav-img/nav-3-5.jpg",
          "status": 1,
          "price": 7199.22
        },
        {
          "id": 18,
          "categoryId": 2,
          "name": "RedMi",
          "subtitle": "oppo促销进行中",
          "mainImage": "/imgs/nav-img/nav-3-6.png",
          "status": 1,
          "price": 2999.11
        },
      ],
    },

    "firstPage": 1,
    "prePage": 0,
    "nextPage": 0,
    "lastPage": 1,
    "isFirstPage": true,
    "isLastPage": true,
    "hasPreviousPage": false,
    "hasNextPage": false,
    "navigatePages": 8,
    "navigatepageNums": [
      1
    ]
  }
})

//获取手机列表
Mock.mock('/api/products/phone', {
  "status": 0,
  "data": {
    "pageNum": 1,
    "pageSize": 10,
    "size": 2,
    "orderBy": null,
    "startRow": 1,
    "endRow": 2,
    "total": 2,
    "pages": 1,
    "list": [{
        "id": 1,
        "categoryId": 3,
        "name": "iphone7",
        "subtitle": "双十一促销",
        "mainImage": "/imgs/item-box-1.png",
        "status": 1,
        "price": 7199.22
      },
      {
        "id": 2,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-2.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 3,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-3.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 4,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-4.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 5,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-1.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 6,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-2.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 7,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-3.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 8,
        "categoryId": 3,
        "name": "iphone7",
        "subtitle": "双十一促销",
        "mainImage": "/imgs/item-box-1.png",
        "status": 1,
        "price": 7199.22
      },
      {
        "id": 9,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-2.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 10,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-3.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 11,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-4.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 12,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-1.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 13,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-2.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 14,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-3.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 15,
        "categoryId": 3,
        "name": "iphone7",
        "subtitle": "双十一促销",
        "mainImage": "/imgs/item-box-1.png",
        "status": 1,
        "price": 7199.22
      },
      {
        "id": 16,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-2.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 17,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-3.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 18,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-4.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 19,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-1.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 20,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-2.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 21,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-3.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 22,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-2.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 23,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-3.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 24,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-4.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 25,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-1.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 26,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-2.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 27,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-3.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 28,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-2.png",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 29,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-3.jpg",
        "status": 1,
        "price": 2999.11
      },
      {
        "id": 30,
        "categoryId": 2,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "mainImage": "/imgs/item-box-3.jpg",
        "status": 1,
        "price": 2999.11
      },
    ],
    "firstPage": 1,
    "prePage": 0,
    "nextPage": 0,
    "lastPage": 1,
    "isFirstPage": true,
    "isLastPage": true,
    "hasPreviousPage": false,
    "hasNextPage": false,
    "navigatePages": 8,
    "navigatepageNums": [
      1
    ]
  }
})

//购物车
Mock.mock('/api/carts',{
  "status": 0,
  "data": {
      "cartProductVoList": [
          {
              "id": 1,
              "userId": 13,
              "productId": 1,
              "quantity": 1,
              "productName": "iphone7",
              "productSubtitle": "双十一促销",
              "productMainImage": "mainimage.jpg",
              "productPrice": 7199.22,
              "productStatus": 1,
              "productTotalPrice": 7199.22,
              "productStock": 86,
              "productSelected": true,
          },
          {
              "id": 2,
              "userId": 13,
              "productId": 2,
              "quantity": 1,
              "productName": "oppo R8",
              "productSubtitle": "oppo促销进行中",
              "productMainImage": "mainimage.jpg",
              "productPrice": 2999.11,
              "productStatus": 1,
              "productTotalPrice": 2999.11,
              "productStock": 86,
              "productSelected": false,
          }
      ],
      "selectedAll": false,
      "cartTotalPrice": 10198.33
  }
})