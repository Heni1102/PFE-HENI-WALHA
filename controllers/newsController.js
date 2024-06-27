const { News } = require('../models');

exports.getAllNews = async (req, res) => {
    try {
        const News = await News.findAll();
        res.json(News);
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message)

    }
};

exports.createNews = async (req, res) => {
    try {
        const News = await News.create(req.body);
        res.status(201).json(News);
    } catch (err) {
        console.error(err.message)
        res.status(500).send(err.message);

    }
};