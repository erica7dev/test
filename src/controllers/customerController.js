const Customer = require('../models/customer');

// Get all customer
module.exports = class CustomerController{
  static async index(req, res, next) {
    let customers = await Customer.findAll();
    res.status(200).send(customers);
  }

// Get customer by id
  static async get(req, res, next) {
    const id = req.params.id;
    let customer = await Customer.findOne({ where: {id: id} });

    if(!customer) return res.status(404).send({
      mensagem: "Customer id not exists"
    });

    res.status(200).send(customer);
  }

// Create customer
  static async create(req, res, next) {
    const {id_user, name, email, password, description} = req.body

    if(!id_user || !name || !email || !password){
      return res.status(400).send({
        message: "Fields (id_user, name, email, password) are required"
      });
    }

    let customer = await Customer.create({ 
      idUser: id_user,
      name: name,
      email: email,
      password: password,
      description: description
    });

    res.status(201).send(customer);
  }

  // Update customer
  static async update(req, res, next) {
    const id = req.params.id;
    const {id_user, name, email, description, password} = req.body

    if(!id_user || !name || !email || !password){
      return res.status(400).send({
        message: "Fields (id_user, name, email, password) are required"
      });
    }

    let customer_ref = await Customer.findByPk(id);
    if(!customer_ref) return res.status(404).send({
      message: "Id by customer not exists"
    });

    let customer = await customer_ref.update({ 
      idUser: id_usuario,
      name: name,
      description: description,
      email: email,
      password: password
    });

    res.status(200).send(customer);
  }

  // Delete customer
  static async delete(req, res, next) {
    const id = req.params.id;

    let customer_ref = await Customer.findByPk(id);
    if(!customer_ref) return res.status(404).send({
      mensagem: "Id by customer not exists"
    });

    customer_ref.destroy();
    res.status(204).send("");
  }
}