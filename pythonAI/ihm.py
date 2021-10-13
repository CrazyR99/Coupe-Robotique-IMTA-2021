import PyQt6
from PyQt6 import QtGui
from PyQt6 import QtCore
from PyQt6.QtGui import QBrush, QColor, QColorConstants, QIcon, QPaintEngine, QPainter
from PyQt6.QtWidgets import QApplication, QGraphicsScene, QGraphicsView, QGridLayout, QLabel, QPlainTextEdit, QPushButton, QWidget
import sys
import json
import logging
from intelligence import Intelligence

gray = (127,127,127,255)
yellow = (255, 255, 0, 255)
blue = (127, 0, 255, 255)

class QTextEditLogger(logging.Handler):
    def __init__(self, parent):
        super().__init__()
        self.widget = QPlainTextEdit(parent)
        self.widget.setReadOnly(True)

    def emit(self, record):
        msg = self.format(record)
        self.widget.appendPlainText(msg)

class Window(QWidget):

    def __init__(self):
        super().__init__()
        self.setWindowTitle("ARC GUI")
        self.setWindowIcon(QIcon("./pythonAI/assets/ARC.svg"))
        self.drawMap()
        btn = QPushButton("Run AI")
        btn.clicked.connect(self.runAI)
        grid = QGridLayout()
        grid.addWidget(self.view, 0, 0)
        grid.addWidget(btn, 0, 1)
        


        logTextBox = QTextEditLogger(self)
        # You can format what is printed to text box
        logTextBox.setFormatter(logging.Formatter('%(asctime)s - %(levelname)s - %(message)s'))
        logging.getLogger().addHandler(logTextBox)
        # You can control the logging level
        logging.getLogger().setLevel(logging.DEBUG)
        grid.addWidget(logTextBox.widget, 1, 0)
        self.setLayout(grid)
        self.app = {}
        self.app['logger'] = logging

    def drawMap(self):
        self.scene = QGraphicsScene(self)
        with open('./pythonAI/maps/map_2022.json') as file:
            self.map = json.load(file)
            print("Map loaded")

        offset_x = self.map['offset_x']
        offset_y = self.map['offset_y']
        for component in self.map['components']:
            if component['shape']['type'] == "rectangle":
                self.scene.addRect(component['shape']['x']+offset_x, \
                                    component['shape']['y']+offset_y, \
                                    component['shape']['width'], \
                                    component['shape']['height'], brush=QBrush(QColor(component['shape']['color'])))

        self.view = QGraphicsView(self.scene, self)

        self.view.fitInView(self.scene.itemsBoundingRect(), mode=QtCore.Qt.AspectRatioMode.KeepAspectRatio)

        return 

    def resizeEvent(self, event):
        self.view.fitInView(self.scene.itemsBoundingRect(), mode=QtCore.Qt.AspectRatioMode.KeepAspectRatio)


    def runAI(self):
        logging.info('Starting AI')
        self.app['intelligence'] = Intelligence(self.app)
        self.app['intelligence'].start()






app = QApplication([])

window = Window()
window.show()
sys.exit(app.exec())