class Robot():

    def __init__(self, app):
        self.app = app

    def run(self, action):
        if(action.method in self):
            return self.action.method(action.parameters)
        else:
            print(action.method," method not declared")
            return False
    
    def moveToElement(self, parameters):
        print("--> Moving to ",parameters.element," at speed ",parameters.speed)
        return True
