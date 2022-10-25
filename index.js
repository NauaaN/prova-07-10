

function teste(array) {
    return Math.max.apply(null, array);
  }

  let x= teste([1,2,5])
  console.log(x)