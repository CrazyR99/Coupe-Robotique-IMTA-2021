class Robot():

    def __init__(self, app):
        self.app = app

    def method_exists(self, method):
        if(method in dir(self) and callable(func := getattr(self, method))):
            return (True, func)
        else:
            return (False,)

    def run(self, action):
        cond, method = self.method_exists(action['method'])
        if(cond):
            return method(action['parameters'])
        else:
            print(action['method']," method not declared")
            return False
    
    def moveToElement(self, parameters):
        print("--> Moving to ",parameters['element']," at speed ",parameters['speed'])
        return True
