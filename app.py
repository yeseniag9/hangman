from random_word import RandomWords
from flask import Flask, render_template 

import random

app = Flask(__name__)
r = RandomWords()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/game") 
def game():
    test = r.get_random_word()
    print(test)

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

    randomWord = []
    underscores = ""
    for w in range(len(word)):
        randomWord += word[w]
        data = randomWord 
        values = " ".join(randomWord)
        underscores += "_"
      
    return render_template("game.html", data=data, values=values, underscores=underscores)         