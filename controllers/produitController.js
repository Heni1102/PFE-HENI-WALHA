const { Produit } = require('../models');

exports.getAllProduits = async (req, res) => {
    try {
        const produits = await Produit.findAll();
        res.json(produits);
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message)

    }
};

exports.createProduit = async (req, res) => {
    try {
        const produit = await Produit.create(req.body);
        res.status(201).json(produit);
    } catch (err) {
        console.error(err.message)
        res.status(500).send(err.message);

    }
};

exports.deleteProduit = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Produit.destroy({ where: { id } });
      if (result) {
        res.status(200).json({message: 'deleted successfully'});
      } else {
        res.status(404).json({message:'not found'});
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
  
  exports.updateProduit = async (req, res) => {
    try {
      const id = req.params.id;
      const [updated] = await Produit.update(req.body, {
        where: { id }
      });
      if (updated) {
        const updatedProduit = await Produit.findOne({ where: { id } });
        res.status(200).json(updatedProduit);
      } else {
        res.status(404).json({message : 'Produit not found'});
      }
    } catch (err) {
      res.status(500).json({message : err.message});
    }
  };
