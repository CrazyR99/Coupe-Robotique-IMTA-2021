# Installation

## Basic Installation and enabling SSH communication

- Install Win32DiskImager
- DL last version of Raspberry Pi Os
- Write image on SD card using Win32DiskImager. When done do NOT formate your SD card.
- Go into your sd card (its name should be boot now) and create a .txt called ssh with nothing inside.
- Go into cmdline.txt, at the end of the line write ip=169.254.X.Y where X,Y could be any number between 0 and 255.
- Done, put your sd card in your Raspberry Pi

To connect with SSH (Assuming you're on Windows):

- Launch Powershell
- `ssh pi@169.254.X.Y` (your previous ip)
- password is raspberry (you might want to change it)

## Display Raspberry Pi's Desktop

If you don't have any screen to display the Desktop of the raspberry Pi you might want to show it on your computer

### Configure WiFi


- Connect with ssh
- `sudo raspi-config`
- In localisation parameters choose the country (FR). Then exit
- `sudo nano /etc/wpa_supplicant/wpa_supplicant.conf`
- Add this in the file that just opened :
    > network={ </br>
        ssid="Network Name" </br>
        psk="and here the password" </br>
    }
- Ctrl + X / yes then enter
- Reboot and then it will connect automatically

### VNC Viewer/Server

- `sudo apt–get update`
- `sudo apt–get install realvnc–vnc–server realvnc–vnc–viewer`
- `sudo raspi-config`
- Navigate to Interfacing Options -> P3 VNC -> Yes
- Navigate to Resolution options -> Select highest resolution proposed
- Install VNC viewer from RealVNC on your computer
- Connect to Raspberry Pi with its ip
