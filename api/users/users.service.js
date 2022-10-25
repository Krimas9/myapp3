const User = require("./users.model");
const bcrypt = require("bcrypt");

class UserService {
  getAll() {
    return User.find({}, "-password");
  }
  get(id) {
    return User.findById(id, "-password");
  }
  create(data) {
    const user = new User(data);
    return user.save();
  }
  update(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true });
  }
  delete(id) {
    //_id: retient la clé de l'identifiant 
    return User.deleteOne({ _id: id });
  }
  //verification du login:
  async checkPasswordUser(email, password) {
    //filtre qui recherche l'id par rapport a son adresse email:
    const user = await User.findOne({ email });
    if (!user) {
      return false;
    }
    //verifie si le mot de pass envoyer correspon au mot de pass de la BDD
    const bool = await bcrypt.compare(password, user.password);
    if (!bool) {
      return false;
    }
    return user._id;
  }
}

module.exports = new UserService();
