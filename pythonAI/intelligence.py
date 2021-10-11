import json
from robots.robot_2022 import Robot2022


class Intelligence():

    def __init__(self, app):
        self.app = app

    def start(self):

        with open('./maps/map_2022.json') as file:
            map = json.load(file)
            print("Map loaded")
        
        with open('./goals/goals2022.json') as file:
            goals = json.load(file)
            print("Goals loaded")

        robot = Robot2022(self.app)
        print("Robot loaded")

        for goal in goals:
            print("Running: ",goal.name)
            for action in goal.actions:
                success = robot.run(action)
                print("Done") if success else print("Failed")
                
