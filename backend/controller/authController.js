const user = require("../schema/user");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { userName, name, email, password, dob, gender, contact } = req.body;
  
  const checkUserExist = await user.find({ userName: userName });
  const checkUseEmail = await user.find({ email: email });
  if(checkUserExist.length > 0) {
    return res.status(400).json({status: false, message: "This userName already exits."});
  };
  if(checkUseEmail.length > 0){
    return res.status(400).json({status: false, message: "This email is not valid."});
  };
  let hashPassword = await bcrypt.hashSync(password, 10);
  const createUser = await user.create({
    name,
    userName,
    dob,
    gender,
    email,
    password: hashPassword,
    contact
  });
  createUser.save();
  res.status(201).json({ message: "Register Succesfully.", data: createUser });
};

const login = async (req, res) => {
  const { uniqueId, password } = req.body;

  let findUser = await user.findOne({ userName: uniqueId });
  if(findUser == null){
    findUser = await user.findOne({ email: uniqueId });
  }
  if(findUser && await bcrypt.compareSync(password, findUser.password)){
    res.status(200).json({message: "Login Successfully.", data: findUser})
  } else {
    res.status(400).json({message: "Please enter valid credential."})
  }
};

module.exports = {
  signUp,
  login,
};
