from inky.auto import auto
from html2image import Html2Image
import os
from PIL import Image

PATH = os.path.dirname(__file__)


hti = Html2Image(size=(800, 480))
hti.screenshot(url='http://localhost:3000', save_as='screenshot.png')

display = auto()
img = Image.open(os.path.join(PATH, 'screenshot.png'))
display.set_image(img)
display.show()