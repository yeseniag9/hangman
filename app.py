from flask import Flask, render_template 
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
    word = word.upper()

    randomWord = []
    for w in range(len(word)):
        randomWord += word[w]
        data = word

    if len(randomWord) > 0:
        zero = randomWord[0]
    else:
        zero = ""
    
    if len(randomWord) > 1:
        one = randomWord[1]
    else:
        one = ""

    if len(randomWord) > 2:
        two = randomWord[2]
    else:
        two = ""

    if len(randomWord) > 3:
        three = randomWord[3]
    else:
        three = ""

    if len(randomWord) > 4:
        four = randomWord[4]
    else:
        four = ""

    if len(randomWord) > 5:
        five = randomWord[5]
    else:
        five = ""

    if len(randomWord) > 6:
        six = randomWord[6]
    else:
        six = ""
    
    if len(randomWord) > 7:
        seven = randomWord[7]
    else:
        seven = ""

    if len(randomWord) > 8:
        eight = randomWord[8]
    else:
        eight = ""

    if len(randomWord) > 9:
        nine = randomWord[9]
    else:
        nine = ""

    if len(randomWord) > 10:
        ten = randomWord[10]
    else:
        ten = ""

    if len(randomWord) > 11:
        eleven = randomWord[11]
    else:
        eleven = ""

    return render_template("game.html", data=data, zero=zero, one=one, two=two, three=three, four=four, five=five, six=six, seven=seven, eight=eight, nine=nine, ten=ten, eleven=eleven)  