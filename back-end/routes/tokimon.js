const pg = require('pg');
const express = require('express');
const validObjectId = require('../middleware/validObjectId');
const router = express.Router();

const pool = new pg.Pool ({
  user: 'tokimon',
  password: 'tokimon',
  database: 'tokimondb',
  host: 'localhost',
  port: 5432, 
});


router.get('/', (req, res) => {
  const getAllTokimonQuery = `SELECT * FROM Tokimon ORDER BY id ASC`;
  pool.query(getAllTokimonQuery, (error, result) => {
    if (error) throw error;
    res.status(200).send(result.rows);
  });
});

router.get('/:id', validObjectId, (req, res) => {
  const getTokimonByIdQuery = `SELECT * FROM Tokimon WHERE id = ${req.params.id}`;
  
  pool.query(getTokimonByIdQuery, (error, result) => {
    if (error) throw error;
    res.status(200).send(result.rows)
  });
});

router.post('/', (req, res) => {
  const { name, weight, height, fly, fight, fire, water, electric, frozen, trainer } = req.body;
  const total = parseInt(fly) + parseInt(fight) + parseInt(fire) + parseInt(water) + parseInt(electric) + parseInt(frozen);
  const postTokimonQuery = `
    INSERT INTO Tokimon (name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer)
    VALUES ($1, $2, $3 , $4, $5, $6, $7, $8, $9, $10, $11)
  `;

  pool.query(postTokimonQuery, [name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer ],(error, result) => {
    if (error) throw error;
    res.status(201).send('Tokimon Added');
  });
});

router.delete('/:id', validObjectId, (req, res) => {
  const deleteTokimonQuery = `DELETE FROM Tokimon WHERE id = ${req.params.id}`;
  
  pool.query(deleteTokimonQuery, (error, result) => {
    if (error) throw error;
    res.status(200).send(`Deleted Tokimon with id ${req.params.id}`)
  });
});

router.put('/:id', validObjectId, (req, res) => {
  const {name, weight, height, fly, fight, fire, water, electric, frozen, trainer} = (req.body);
  const total = parseInt(fly) + parseInt(fight) + parseInt(fire) + parseInt(water) + parseInt(electric) + parseInt(frozen);
  pool.query(`UPDATE Tokimon SET 
    name = $1, weight = $2, height = $3, fly = $4, fight = $5, fire = $6, water = $7, electric = $8, frozen = $9, total = $10, trainer = $11
    WHERE id = ${req.params.id}
    `,
    [name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer],
    (error, result) => {
      if (error) throw error;
      res.status(200).send(`Tokimon with id ${req.params.id} has been updated`);
    }
  );
});

module.exports = router;