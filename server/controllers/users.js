import User from '../models/user.js'

export const CreateUser = (req, res) => {
  const user = new User(req.body.userData);

  user.save((err) => {
      if (err) {
        throw err
      }
      res.send({
        _id: user._id,
        userName: user.userName,
        fridge: user.fridge
      })
    })
}

export const AddFridgeItem = (req, res) => {
  console.log("fridge controller: " + req.body)
  User.findByIdAndUpdate(
    req.body._id, 
    {$push: { fridge: req.body.fridgeItem }}, 
    (err, result) => {
      res.send({
        _id: result._id,
        userName: result.userName,
        fridge: result.fridge
      })
    })
}
