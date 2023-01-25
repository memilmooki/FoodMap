const express = require("./config/express");
const { logger } = require("./config/winston"); //log(프로세스를 돌리면서 일어나는 에러등을 기록하는 로그)

const port = 3000;
express().listen(port);
logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);
