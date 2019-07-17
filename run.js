var bands = require('./bands');

// console.log(bands)

for (var item in bands.genres) {
    console.log('A ' + item + ' band is ' + bands.genres[item])
}

