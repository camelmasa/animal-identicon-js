import sha1 from 'js-sha1'

class Animalicon {
  constructor(identifier) {
    if (typeof identifier !== 'string') {
      throw new Error("Please pass string argument");
    }
    else if (identifier.length <= 0) {
      throw new Error("Please pass not blank string");
    }

    this.identifier = identifier
  }

  toSvg(_size = 128) {
    const size = _size

    const digits = this._generateDigits()
    const icon   = this._generateIcon(digits)
    const color  = this._generateColor(digits)

    const svg = `<svg style="background-color: #${color}; height: ${size}px; width: ${size}px">
                   <image xlink:href="https://ssl.gstatic.com/docs/common/profile/${icon}_lg.png" style="height: ${size}px; width: ${size}px"></image>
                 </svg>`

    return svg
  }

  _generateDigits() {
    return parseInt(sha1(this.identifier).slice(-3), 16)
  }

  _generateIcon(digits) {
    const animalNumber = digits % 64
    const animals = [
      'alligator', 'anteater', 'armadillo', 'auroch', 'badger', 'bat', 'beaver', 'buffalo', 'camel', 'capybara',
      'chameleon', 'cheetah', 'chinchilla', 'chipmunk', 'chupacabra', 'cormorant', 'coyote', 'crow', 'dingo', 'dolphin',
      'duck', 'elephant', 'ferret', 'fox', 'giraffe', 'gopher', 'grizzly', 'hippo', 'hyena', 'ibex',
      'iguana', 'jackal', 'kangaroo', 'koala', 'kraken', 'lemur', 'leopard', 'liger', 'llama', 'manatee',
      'mink', 'monkey', 'moose', 'narwhal', 'orangutan', 'otter', 'panda', 'penguin', 'platypus', 'python',
      'quagga', 'rabbit', 'raccoon', 'rhino', 'sheep', 'shrew', 'skunk', 'squirrel', 'tiger', 'turtle',
      'walrus', 'wolf', 'wolverine', 'wombat'
    ]

    return animals[animalNumber]
  }


  _generateColor(digits) {
    const colorNumber = Math.floor(digits / 64)
    const colors = [
      '721acb', '841acb', '931acb', 'a51acb', 'b41acb', 'c51acb', 'cb1abf', 'cb1ab1', 'cb1a9f', 'cb1a8d',
      'cb1a7e', 'cb1a6c', 'cb1a5e', 'cb1a4c', 'cb1a3a', 'cb1a2b', 'cb1a1a', 'cb2b1a', 'cb3a1a', 'cb4c1a',
      'cb5e1a', 'cb6c1a', 'cb7e1a', 'cb8d1a', 'cb9f1a', 'cbb11a', 'cbbf1a', 'c5cb1a', 'b4cb1a', 'a5cb1a',
      '93cb1a', '84cb1a', '72cb1a', '61cb1a', '52cb1a', '40cb1a', '31cb1a', '1fcb1a', '1acb25', '1acb34',
      '1acb46', '1acb58', '1acb67', '1acb78', '1acb87', '1acb99', '1acbab', '1acbb9', '1acbcb', '1ab9cb',
      '1aabcb', '1a99cb', '1a87cb', '1a78cb', '1a67cb', '1a58cb', '1a46cb', '1a34cb', '1a25cb', '1f1acb',
      '311acb', '401acb', '521acb', '611acb'
    ]

    return colors[colorNumber]
  }
}

export default Animalicon
