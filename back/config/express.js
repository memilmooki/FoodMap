const express = require("express");
const compression = require("compression");
const methodOverride = require("method-override");
var cors = require("cors");

module.exports = function () {
  const app = express(); //객체를 하나 생성해서


  /* 미들웨어 설정 express가 실행되면서 중간에 거쳐가는 것들*/
  app.use(compression()); //HTTP 요청을 압축 및 해제
  app.use(express.json()); // body값을 파싱
  app.use(express.urlencoded({ extended: true })); //form 으로 제출되는 값 파싱
  app.use(methodOverride()); // put, delete 요청 처리
  app.use(cors({ credentials: true, origin: "http://3.219.14.215" })); // 웹브라우저 cors 설정을 관리
  app.use(express.static("/home/ubuntu/FoodMap/front")); 

  // app.use(express.static("/home/ubuntu/food-map/front"))
  // app.use(express.static(process.cwd() + '/public'));

  /*직접 구현해야 하는 모듈 */
  require("../src/routes/indexRoute")(app);
  return app;
};
