import random

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

test = ""
for w in range(len(word)):
    test += "_ "
print(test)

turns = 7 