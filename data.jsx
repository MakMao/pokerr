import imgoop1 from './src/images/testimg.png';
import imgip1 from './src/images/testimg2.png';
import imoogp2 from './src/images/testimg3.png'
import imgip2 from './src/images/testimg4.png'

export const allData = [
  {
    id: "kk9",
    board:"K K 9",
    imgoop: imgoop1,
    betoop: {
      "33%": "66%",
      "check": "34%"
    },
    imgip: imgip1,
    betip: {
      "75%": "10%",
      "33%": "44%",
      "check": "46"
    }
  },
  {
    id: "akq",
    board: "A K Q",
    imgoop: imoogp2,
    betoop: {
      "75%": "37%",
      "33%": "33%",
      "check": "30%"
    },
    imgip: imgip2,
    betip: {
      "140%": "5%",
      "75%": "20%",
      "33%": "5%",
      "check": "70%"
    }
  }
];
