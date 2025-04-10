from flask import Flask, render_template,         jsonify, request
import random

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/game")
def game():
    
    words = ["apple", "breeze", "candle", "dolphin", "echo", "feather", "guitar", "horizon", "island", "jungle",  
            "kitten", "lantern", "meadow", "nebula", "ocean", "puzzle", "quartz", "ripple", "sunbeam", "tundra",  
            "umbrella", "voyage", "whisper", "xylophone", "yonder", "zephyr", "amber", "blizzard", "cascade",  
            "drizzle", "ember", "fountain", "glacier", "harbor", "illusion", "jigsaw", "kelp", "lullaby", "mirage",  
            "noodle", "opal", "paradox", "quiver", "rhapsody", "silhouette", "twilight", "uplift", "velvet", "wander",  
            "xenon", "yawn", "zigzag", "astronomy", "bubble", "comet", "dewdrop", "enigma", "firefly", "galaxy",  
            "harmony", "icicle", "jovial", "kaleidoscope", "lighthouse", "mystery", "nectar", "orbital", "prism",  
            "quaint", "rainbow", "serenade", "tranquil", "unicorn", "vortex", "whimsy", "xenophobia", "yearn", "zenith",  
            "alchemy", "ballet", "crimson", "daydream", "epiphany", "flourish", "gossamer", "halcyon", "infinity",  
            "jubilant", "keystone", "labyrinth", "moonbeam", "novella", "obsidian", "phenomenon", "quintessence",  
            "resonance", "silk", "tempest", "utopia", "verdant", "willow", "xylophonist", "yesteryear", "zealous"]
    word = random.choice(words) 

    underscores = ""
    for w in range(len(word)): 
        underscores += "_"
        
    return render_template("game.html", word=word, underscores=underscores) 



if __name__ == '__main__':
    app.run(debug=True)






@app.route('/test', methods=['GET','POST'])
def index():
    if request.method == "POST":
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        output = firstname + lastname
        if firstname and lastname:
            return jsonify({'output':'Your Name is ' + output + ', right?'})
    
    return render_template('test.html')