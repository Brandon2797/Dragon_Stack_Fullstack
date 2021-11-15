const DEFAULT_PROPERTIES = {
    //defual properties in cases where  no nickname or birhtdate vlues 
    
    nickname: 'unnamed',
    birthday: new Date()
}


class Dragon {
  constructor({birthday, nickname}) {
    //  We can make this map or rather an object by surrounding the arguments itself with a pair of curly braces.

    this.birthday = birthday || DEFAULT_PROPERTIES.birthday;
    // in no birthday or nickname value is defind it will set to defualt using the Or indication using the two Pipe symbols 

    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
  }
}

module.exports = Dragon;
