﻿{
    "name": "我的APP应用",
    "info": "APP的描述信息！",
    "img": "assets/images/pic.jpg",
    "mp3": {
        "name": "李玉刚 - 刚好遇见你",
        "url": "/mp3/李玉刚 - 刚好遇见你.mp3"
    },
    "loading": "1",
    "slider": {
        "animate": 1,
        "lock": false,
        "autoplay": false,
        "time": 5
    },
    "style": {
        "background-image": "assets/images/pic.jpg",
        "background-color": "rgba(0,0,255,0.5)",
        "background-repeat": "no-repeat",
        "background-size": "cover"
    },
    "pagesize": 2,
    "pages": [
        {
            "name": "page1",
            "style": {
                "background-image": "assets/images/pic2.jpg",
                "background-color": "rgba(0,0,255,0.5)",
                "background-repeat": "repeat",
                "background-size": "cover"
            },
            "layers": [
                {
                    "type": "img",
                    "typename": "图片",
                    "data": {
                        "src": "assets/images/p1.jpg"
                    },
                    "animate": [
                        {
                            "name": "zoom out",
                            "style": "zoomOut 1s ease 0s 1 normal forwards running",
                            "type": "out"
                        },
                        {
                            "name": "zoom in",
                            "style": "zoomIn 1s ease 2s 1 normal forwards running",
                            "type": "in"
                        }
                    ],
                    "style": {
                        "width": "100px",
                        "height": "80px",
                        "transform": "rotate(60deg)",
                        "left": "50px",
                        "top": "50px",
                        "z-index": 9999
                    },
                    "estyle": {
                        "box-shadow": "0 0 46px rgba(128,0,128,1.00)",
                        "border": "10px solid rgba(0,0,0,1)"
                    }
                },
                {
                    "type": "img",
                    "typename": "图片",
                    "data": {
                        "src": "assets/images/p2.jpg"
                    },
                    "animate": [
                        {
                            "name": "zoom out",
                            "style": "zoomOut 1s ease 0s 1 normal forwards running",
                            "type": "out"
                        }
                    ],
                    "style": {
                        "width": "100px",
                        "height": "120px",
                        "transform": "rotate(20deg)",
                        "left": "200px",
                        "top": "100px",
                        "z-index": 9998
                    },
                    "estyle": {}
                },
                {
                    "type": "img",
                    "typename": "图片",
                    "data": {
                        "src": "assets/images/p3.jpg"
                    },
                    "style": {
                        "width": "50px",
                        "height": "100px",
                        "transform": "rotate(20deg)",
                        "left": "0",
                        "top": "0",
                        "z-index": 9997
                    },
                    "estyle": {}
                }
            ],
            "slider": {
                "animate": 1,
                "lock": false,
                "autoplay": false,
                "time": 5
            }
        },
        {
            "name": "page2",
            "style": {
                "background-color": "rgba(0,255,255,0.5)"
            },
            "layers": [
                {
                    "type": "img",
                    "typename": "图片",
                    "data": {
                        "src": "assets/images/pic.jpg"
                    },
                    "style": {
                        "width": "50px",
                        "height": "100px",
                        "transform": "rotate(20deg)",
                        "left": "60px",
                        "top": "40px",
                        "z-index": 9999
                    },
                    "estyle": {
                        "border-radius": "50px",
                        "box-shadow": "0 0 10px rgba(0,0,0,0.5)"
                    }
                }
            ],
            "slider": {
                "animate": 1,
                "lock": false,
                "autoplay": false,
                "time": 5
            }
        },
        {
            "name": "page3",
            "style": {},
            "layers": [
                {
                    "type": "img",
                    "typename": "图片",
                    "data": {
                        "src": "assets/images/pic.jpg"
                    },
                    "style": {
                        "width": "50px",
                        "height": "100px",
                        "transform": "rotate(20deg)",
                        "left": "60px",
                        "top": "40px",
                        "z-index": 9999
                    },
                    "estyle": {}
                }
            ],
            "slider": {
                "animate": 1,
                "lock": false,
                "autoplay": false,
                "time": 5
            }
        }
    ]
}