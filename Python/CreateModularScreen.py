import tkinter as tk
import pyautogui

def on_f5_press():
    popup = tk.Toplevel()
    popup.attributes('-alpha', 0.5)  # Set opacity to 50%
    label = tk.Label(popup, text="Hello")
    label.pack()
    x, y = pyautogui.position()
    popup.geometry("+%d+%d" % (x, y))  # Set position of popup window

root = tk.Tk()
root.withdraw()  # Hide the main window

# Bind the F5 key press to the on_f5_press() function
root.bind('<F5>', lambda event: on_f5_press())

root.mainloop()