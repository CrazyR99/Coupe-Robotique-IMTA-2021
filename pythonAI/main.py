import json
from robots.robot_2022 import Robot2022
from intelligence import Intelligence

app = {}
    

def main():
    app.intelligence = Intelligence(app)


if __name__ == '__main__':
    main()
