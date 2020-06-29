let coin = {
    state: 0,
    flip: function() {
        return this.state = Math.floor(Math.random() * 1) 
    },
    toString: function() {
        return this.state === 0 ? "Heads" : "Tails" 
    },
    toHTML: function() {
        let image = document.createElement('img');
    if (this.state === 0) {
        image.src = "./images/Heads.jpg"
    } else {
        image.src = "./images/Tails.jpg"
    }
       
        return image;
    }
};

function display20Flips() {
    for(let i = 0; i < 20; i++) {
        let textBox = document.createElement('p')
        textBox.style.margin = "7px"
        coin.flip()
        textBox.append(coin.toString())
        document.body.append(image)
    }
    return console.log("Flip Completed")
}

function display20Images() {
    for(let i = 0; i < 20; i++) {
        coin.flip()
        coin.toHTML()
    }
}

// document.body.append(image);