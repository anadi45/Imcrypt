import sys
import cv2 as cv
import numpy as np  
import types  

path = sys.argv[1]

def get_image(image_location):
  img = cv.imread(image_location)
  return img

def gcd(x, y):
  while(y):
    x, y = y, x % y

  return x
  
def decode_image(img_loc):
  img = get_image(img_loc)
  pattern = gcd(len(img), len(img[0]))
  message = ''
  for i in range(len(img)):
    for j in range(len(img[0])):
      if (i-1 * j-1) % pattern == 0:
        if img[i-1][j-1][0] != 0:
          message = message + chr(img[i-1][j-1][0])
        else:
          return message

message = decode_image(path)
print(message)