import sys
import cv2 as cv
import numpy as np  
 
path = sys.argv[1]
message = sys.argv[2]

def char_generator(message):
  for c in message:
    yield ord(c)

def get_image(image_location):
  img = cv.imread(image_location)
  return img

def gcd(x, y):
  while(y):
    x, y = y, x % y

  return x

def encode_image(image_location, msg):
  img = get_image(image_location)
  msg_gen = char_generator(msg)
  pattern = gcd(len(img), len(img[0]))
  for i in range(len(img)):
    for j in range(len(img[0])):
      if (i+1 * j+1) % pattern == 0:
        try:
          img[i-1][j-1][0] = next(msg_gen)
        except StopIteration:
          img[i-1][j-1][0] = 0
          return img

encoded_img = encode_image(path, message)
cv.imwrite(path,encoded_img)