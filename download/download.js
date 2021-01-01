const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

const url = 'https://s3-media2.fl.yelpcdn.com/bphoto/iPNJKlOQ7-eyqa4Yv2r2BA/o.jpg'
const urls = [
  'https://s3-media2.fl.yelpcdn.com/bphoto/iPNJKlOQ7-eyqa4Yv2r2BA/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/sNIJnePGDenUOyewsD8tLg/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/nOMXkkvswV02iBDlyVlgVQ/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/nPUUXYVVa3CHJh5yzH8Xnw/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/TW9FgV_Ufqd15t_ARQuz1A/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/xBdlIh2tJUz8zr4ajXwKfg/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/HLrjaMoAgYSac0vx71YpCA/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/Rt-zOS-uNY0cafsq1UeoDw/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/7StMTfE2srlcIu2opeTb3g/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/DtQRy-dhKFojsNiJbDzXJg/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/pvWRWivkeyGy7g7UF9Me1g/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/Li0xXDEM78GMG1xCYgYYaA/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/gcC2Uwtu5raP13D3jWYm0Q/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/uuRvEU-cqPk-XlDbFAQjKg/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/ouK2VmW0SrI70jsJpTxJhw/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/rNkGdgZzwlcO4k0sVGdOCA/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/lE_HHijKAKt08JIeRHVh7w/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/F8OxoXdS51h2VfU9Je2cNQ/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/wHtCjRe-THAmHDGEeq9Kug/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/rrBlePEDLrbD27VVE0Ze2A/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/cw5y2LSOIE-EVNjKK_d7SQ/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/ItjzBdECIqvNSoAS_06Z-w/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/-DwXNu-oyq6ojmn8DsMfdg/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/YZlompWLhv188CJmHKxBzQ/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/7LqVKYVg2GdEFKI2CFL4cA/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/YBvfnl74agPgoVYSTceLGA/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/jIiYLWAA1S-efjnkLJ29FQ/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/IPRgi4dgceBOgZWU28tPpA/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/N9XikmqttZy5StpPxkJing/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/vW8bd3eqUr_DkpizbpfUig/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/YbigZ7FEJmzhuXD7mNunPg/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/ckOXfbcgSrAcHOG86zEKuQ/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/VHF29jYeYm9JAkPWlVEa9A/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/XIhdtd0fB2P_v_qhh1hWbg/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/790dsZ3y0QvPs_0QjEGBNA/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/MDabhC69akFE2o21s7gtEg/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/0WNCjnU84Ug5xBdpqi_G4A/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/DP_jjHEs6WbdowWFum7UaQ/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/DveycRI64mh2czPn2LCVpA/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/HAumhGEjTcqstgie00Fjag/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/9WWeOcQAxrxp5lPaLEzVjA/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/Fc5L0gOZJzSGTFz9WGK4sQ/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/-1BWnyjrsDmTmXH_3wZl_w/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/5LqW8X5GqbAp_DtRrcx4_Q/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/axYhPu0DupRr0MIK8UNXdQ/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/GNMz7gMIMgmBZr4WAYUQsw/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/6ZXuANt_JBmtSeAHbG5sYQ/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/kg862h8ynOVXfMc7iAgCvQ/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/oKLPo1042ojJJC9OcCzAMw/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/G05B7mvYPHBpGu1wP1NK_Q/o.jpg'
]

for(var i = 1; i <=50; i++) {
  const path = `./download/businessImages/image${i}.jpg`
  download(urls[i-1], path, () => {
    console.log('✅ Done!')
  })
}
