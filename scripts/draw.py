from inky.auto import auto
from html2image import Html2Image
import os
from PIL import Image

PATH = os.path.dirname(__file__)


hti = Html2Image(size=(480, 800))
hti.screenshot(url='http://localhost:3000', save_as='screenshot.png')

display = auto()
img = Image.open(os.path.join(PATH, 'screenshot.png'))
img = img.transpose(method=Image.Transpose.ROTATE_90)
display.set_image(img)
display.show()
