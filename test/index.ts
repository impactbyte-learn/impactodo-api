import { suite, test, slow, timeout } from "mocha-typescript";
import * as chai from "chai";
import * as request from "superagent";

import { config } from "../config";
import { Connection } from "../config/Database";
import { getCustomRepository } from "typeorm";
import { Todo } from "../src/entity/Todo";
import { JWTService } from "../src/services/JWTService";
import { TodoService } from "../src/services/TodoService";

const PORT = process.env.PORT || 3000;
const URI: string = `http://localhost:${PORT}`;

let token: string = null;
let IdRecord: number = null;
let IdRecordTwo: number = null;

describe("ALL TEST ROUTE", () => {
  before(done => {
    const sample = new Todo();
    sample.text = "SAMPLE TEXT";

    Connection.then(() => {
      const TodoAccess: TodoService = new TodoService();
      Promise.all([
        JWTService.signToken({ name: "name", role: "rol" }),
        getCustomRepository(TodoRepository).save(sample)
      ]).then(res => {
        token = res[0];
        IdRecord = res[1].id;
        done();
      });
    });
  });

  after(done => {
    Promise.all([
      getCustomRepository(TodoRepository).deleteById(IdRecord),
      getCustomRepository(TodoRepository).deleteById(IdRecordTwo)
    ]).then(() => done());
  });

  it("SAMPLE CONTROLLER GET FIND ALL", done => {
    request
      .get(URI)
      .set("Authorization", `bearer ${token}`)
      .set("Accept", "srclication/json")
      .end((err, res) => {
        chai.expect(res.status).to.be.a("number");
        chai.expect(res.status).to.eq(200);
        chai.expect(res.body).to.be.a("array");
        chai.expect(res.body[0].text).to.be.a("string");
        done();
      });
  });

  it("SAMPLE CONTROLLER GET FIND ONE", done => {
    request
      .get(`${URI}/${IdRecord}`)
      .set("Authorization", `bearer ${token}`)
      .set("Accept", "srclication/json")
      .end((err, res) => {
        chai.expect(res.status).to.eq(200);
        chai.expect(res.body).to.be.a("object");
        chai.expect(res.body).to.have.all.keys("id", "text");
        chai.expect(res.body.text).to.be.a("string");
        done();
      });
  });

  it("SAMPLE CONTROLLER POST CREATE", done => {
    request
      .post(URI)
      .set("Authorization", `bearer ${token}`)
      .set("Accept", "srclication/json")
      .send({ text: "Todo text 100" })
      .end((err, res) => {
        chai.expect(res.status).to.eq(200);
        chai.expect(res.body).to.have.all.keys("id", "text");
        chai.expect(res.body.id).to.be.a("number");
        chai.expect(res.body.text).to.be.a("string");
        IdRecordTwo = res.body.id;
        done();
      });
  });

  it("SAMPLE CONTROLLER PUT UPDATE", done => {
    request
      .put(URI)
      .set("Authorization", `bearer ${token}`)
      .set("Accept", "srclication/json")
      .send({ id: IdRecord, text: "Todo text updateado" })
      .end((err, res) => {
        chai.expect(res.status).to.eq(200);
        done();
      });
  });

  it("SAMPLE CONTROLLER DELETE REMOVE", done => {
    request
      .delete(URI)
      .set("Authorization", `bearer ${token}`)
      .set("Accept", "srclication/json")
      .send({ id: IdRecord })
      .end((err, res) => {
        chai.expect(res.status).to.eq(204);
        done();
      });
  });

  it("SAMPLE CONTROLLER GET NOT FIND ONE", done => {
    request
      .get(`${URI}/XXXX`)
      .set("Authorization", `bearer ${token}`)
      .set("Accept", "srclication/json")
      .end((err, res) => {
        chai.expect(res.status).to.eq(404);
        chai.expect(res.body).to.have.all.keys("text");
        chai.expect(res.body.text).to.be.a("string");
        chai.expect(res.body.text).to.equal("NOT FOUND");
        done();
      });
  });

  it("SAMPLE CONTROLLER ERROR POST CREATE", done => {
    request
      .post(URI)
      .set("Authorization", `bearer ${token}`)
      .set("Accept", "srclication/json")
      .send({ sample: "XXXX" })
      .end((err, res) => {
        chai.expect(res.status).to.eq(404);
        chai.expect(res.body).to.have.all.keys("text");
        chai.expect(res.body.text).to.be.a("string");
        chai.expect(res.body.text).to.equal("ERROR");
        done();
      });
  });

  it("SAMPLE CONTROLLER ERROR PUT UPDATE", done => {
    request
      .put(URI)
      .set("Authorization", `bearer ${token}`)
      .set("Accept", "srclication/json")
      .send({ sample: "XXXX" })
      .end((err, res) => {
        chai.expect(res.status).to.eq(404);
        chai.expect(res.body).to.have.all.keys("text");
        chai.expect(res.body.text).to.be.a("string");
        chai.expect(res.body.text).to.equal("ERROR");
        done();
      });
  });

  it("SAMPLE CONTROLLER ERROR DELETE REMOVE", done => {
    request
      .delete(URI)
      .set("Authorization", `bearer ${token}`)
      .set("Accept", "srclication/json")
      .send({ sample: "XXXX" })
      .end((err, res) => {
        chai.expect(res.status).to.eq(404);
        done();
      });
  });
});
