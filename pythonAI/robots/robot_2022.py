from robots.robot import Robot

class Robot2022(Robot):

    def __init__(self, app):
        super().__init__(app)
    

    def triggerLightHouse(self, parameters):
        self.app['logger'].info("--> Triggering LightHouse " + str(parameters))
        return True

    
