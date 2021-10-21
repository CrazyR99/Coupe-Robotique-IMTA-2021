import json
from robots.robot_2022 import Robot2022


class Intelligence():

    def __init__(self, app):
        self.app = app

    def start(self):
        
        with open('./pythonAI/goals/goals2022.json') as file:
            goals = json.load(file)
            self.app['logger'].info("Goals loaded")

        robot = Robot2022(self.app)
        self.app['logger'].info("Robot loaded")

        for goal in goals:
            self.app['logger'].info("Running: "+goal['name'])
            for action in goal['actions']:
                success = robot.run(action)
                self.app['logger'].info("Done") if success else self.app['logger'].info("Failed")
                
