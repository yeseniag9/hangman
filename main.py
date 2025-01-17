import random

words = ['whisper', 'sapphire', 'lantern', 'melody',
         'horizon', 'echo', 'wander', 'velvet',
         'ember', 'solace']
word = random.choice(words)

guesses = ''
turns = 8

while turns > 0:
    failed = 0

    for letter in word:

        if letter in guesses:
            print(letter, end=" ")

        else:
            print("_")
            failed += 1

    if failed == 0:
        print("You Win")
        print("The word is: ", word)
        break

    print()
    guess = input("guess a latter:")

    guesses += guess

    if guess not in word:

        turns -= 1
        print("Wrong")
        print("You have", + turns, 'more guesses')

        if turns == 0:
            print("You Loose")