const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    birthday: new Date()
}


class Dragon {
  constructor({birthday, nickname}) {
    //  We can make this map or rather an object by surrounding the arguments itself with a pair of curly braces.

    this.birthday = birthday || DEFAULT_PROPERTIES.birthday;

    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
  }
}

module.exports = Dragon;
