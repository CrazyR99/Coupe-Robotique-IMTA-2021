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
            self.app['logger'].info(action['method'] + " method not declared")
            return False
    
    def moveToElement(self, parameters):
        self.app['logger'].info("--> Moving to " + str(parameters['element']) +\
                                " at speed " + str(parameters['speed']))
        return True
