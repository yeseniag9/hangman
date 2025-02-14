from flask_frozen import Freezer
from build.app import app

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()