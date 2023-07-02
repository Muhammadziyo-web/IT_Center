const { RATE, GETRATE, DELETERATE, GETRATING } = require("../models/aTeacher.model");
const { fetchOne, fetch } = require("../utils/pg");
const bot = require("../messageSender/message");

module.exports = {
  async rate(req, res) {
    try {
      let { title, rate, descr, groupId, userId, pupils_id } = req.body;
      console.log(groupId, userId, pupils_id);
      if (!title || !rate || !descr || !groupId || !userId || !pupils_id)
        throw new Error("Invalid data");
      let r = await fetch(RATE, title, rate, descr, groupId, userId, pupils_id);
      if (r.length) throw new Error(r.message);
      res.send("Rate added");
    } catch (error) {
      console.log(error.message);
      res.status(400).send(error.message);
    }
  },
  async getRate(req, res) {
    try {
      let userId = req.params.id;
      let rate = await fetch(GETRATE, userId);
      if (rate instanceof Array) {
        res.send(rate);
      } else {
        throw Error("Invalid Data");
      }
    } catch (error) {
      console.log(error.message);
      res.status(400).send("Invalid data");
    }
  },
  async deleteRate(req, res) {
    try {
      let { id } = req.params;
      let foo = await fetch(DELETERATE, id);

      if (foo instanceof Array) {
        res.send("Rate removed");
      } else {
        throw Error("Invalid data");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  async updateRate(req, res) {
    try {
      let obj = ({ title, rate, descr } = req.body);
      let id = req.params.id;
      console.log(obj);
      let query = "UPDATE rate SET ";
      for (const key in obj) {
        if (obj[key]) {
          query += `${key} = ${obj[key]} , `;
        }
      }
      let newDate = new Date().toISOString().split("T")[0];
      query += ` "DATE" =${newDate}  WHERE id = ${id};`;
      let data = await fetch(query);
      res.send(data);
    } catch (error) {
      res.status(400).send(error.message);
    }
    },
    async getRating(req, res) {
        try {
            let {id} = req.params
            let rating = await fetch(GETRATING, id)
            if (!(rating instanceof Array)) {
                throw Error('Invalid data')
            }
            res.send(rating)
        } catch (error) {
            res.status(400).send(error.message)
        }
  }
};
