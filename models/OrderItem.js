const mongoose = require('mongoose')
const Schema = mongoose.Schema
const OrderItemSchema = new Schema(
  {
    total: { type: Number, required: true },
    quantity: { type: Number, required: true },
    type: { type: String, required: true },
    message: String,
    itemId: { type: Schema.Types.ObjectId, required: true },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' }
  },
  { timestamps: true }
)
module.exports = mongoose.model('OrderItem', OrderItemSchema)
