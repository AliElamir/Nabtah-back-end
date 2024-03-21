const Tool = require('../models/Tool')
const Plant = require('../models/Plant')
const Service = require('../models/Service')
const Produce = require('../models/Produce')
const Order = require('../models/Order')

const tools = async (req, res) => {
  try {
    const tools = await Tool.find({ vendor: req.params.id })
    res.send(tools)
  } catch {
    res.send(`error: ${error}`)
  }
}

const plants = async (req, res) => {
  try {
    const plants = await Plant.find({ vendor: req.params.id })
    res.send(plants)
  } catch {
    res.send(`error: ${error}`)
  }
}

const service = async (req, res) => {
  try {
    const services = await Service.find({ vendor: req.params.id })
    res.send(services)
  } catch {
    res.send(`error: ${error}`)
  }
}

const produce = async (req, res) => {
  try {
    const produce = await Produce.find({ vendor: req.params.id })
    res.send(produce)
  } catch {
    res.send(`error: ${error}`)
  }
}

const customerOrders = async (req, res) => {
  try {
    const order = await Order.find({ vendor: req.params.id })
    res.send(order)
  } catch {
    res.send(`error: ${error}`)
  }
}
module.exports = {
  tools,
  plants,
  service,
  produce,
  customerOrders
}