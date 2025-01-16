import random   
import sys  
import pygame 
from pygame.locals import * 

window_width = 600
window_height = 499

window = pygame.display.set_mode((window_width, window_height))    
elevation = window_height * 0.8
game_images = {}       
framepersecond = 32