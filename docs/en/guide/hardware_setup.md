# **Hardware Assembly**

![exploded ](../../assets/img/hardware_setup/exploded.jpg){.img-fluid tag=0 title="=OriginBot Exploded View"}

???+ attention
    The installation steps are expected to take 30~60 minutes, please note the following:
    

     1.When fixing the screws, do not tighten the screws vigorously to avoid sliding wire;

     2.When fixing the board, please tighten them separately after the four copper pillars or screws are fixed;

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/rRoLNXG-gnA?si=cN5GdL8x6VykAJ-y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

> This video is based on the RDK X3 version, which may have some differences from the current X5 version.   
> [@mikelikesrobots](https://www.youtube.com/@mikelikesrobots)
> thanks for sharing the video with us.

## **All robot parts**
![part1](../../assets/img/hardware_setup/part1.png){.img-fluid tag=2}
![part2](../../assets/img/hardware_setup/part2.png){.img-fluid tag=2}

???+ note
    Power supply can refer to [**Resources Link**](../material/open_source_link.md#power-bank)
    
## **Remove the robot chassis**

### Install the universal wheels:

The robot chassis has been installed with universal wheels and motors.
![MVIMG_20240923_165420](../../assets/img/hardware_setup/MVIMG_20240923_165420.jpg){.img-fluid tag=2}

Installing the controller board
Install the upper support copper column of the controller Materials Required:
![IMG20220831103637](../../assets/img/hardware_setup/IMG20220831103637.jpg){.img-fluid tag=2}

The fixing holes of the chassis have their own threads, and the four copper pillars can be tightened directly
![IMG20220831103744](../../assets/img/hardware_setup/IMG20220831103744.jpg){.img-fluid tag=2}


Installing the controller board
Materials Required:

You can fix the power supply between the chassis and the control board, but the power supply size cannot exceed 90x70x30mm
???+ note
    Power supply can refer to [**Resources Link**](../material/open_source_link.md#power-bank)
![MVIMG_20240923_165943](../../assets/img/hardware_setup/PixPin_2025-05-09_16-59-08.png){.img-fluid tag=2}


Use screws to fix the controller to the four supporting copper pillars of the chassis, and connect the motor wires that were previously passed through to the corresponding ports of the controller:
![MVIMG_20240923_170119](../../assets/img/hardware_setup/MVIMG_20240923_170119.jpg){.img-fluid tag=2}

![MVIMG_20240923_170415](../../assets/img/hardware_setup/MVIMG_20240923_170415.jpg){.img-fluid tag=2}




???+ hint
    1.Pay attention to the motor interface serial number. The left motor is connected to the left interface, and the right motor is connected to the right interface.
    2.When inserting the white port, it is recommended to press the interface on the controller end with your other hand to avoid lifting it with excessive force;
    3.Do not connect the battery power cable at this time to avoid subsequent misoperation;




## **Installing the Processor Board**

### Installing the Processor Board


Materials Required:

![MVIMG_20240923_170445](../../assets/img/hardware_setup/MVIMG_20240923_170445.jpg){.img-fluid tag=2}


The RDK X5 can be screwed directly onto the support copper pillar on the controller

![MVIMG_20240923_170601](../../assets/img/hardware_setup/MVIMG_20240923_170601.jpg){.img-fluid tag=2}



## **Mounting the Camera**
### Installing the Camera Module

Materials Required:

![MVIMG_20240923_171127](../../assets/img/hardware_setup/MVIMG_20240923_171127.jpg){.img-fluid tag=2}



 Install the camera mount (I)

 The camera mount has its own threads, tighten the two screws directly:
![MVIMG_20240923_171237](../../assets/img/hardware_setup/MVIMG_20240923_171237.jpg){.img-fluid tag=2}

 Install the camera mount (II)

Using two screws, mount the camera module on the mounting bracket:
![MVIMG_20240923_171334](../../assets/img/hardware_setup/MVIMG_20240923_171334.jpg){.img-fluid tag=2}

Install the camera

Connect the four yellow copper posts, then attach the camera to the bracket:
![MVIMG_20240923_171443](../../assets/img/hardware_setup/MVIMG_20240923_171443.jpg){.img-fluid tag=2}

![MVIMG_20240923_171648](../../assets/img/hardware_setup/PixPin_2025-05-09_17-00-58.png){.img-fluid tag=2}

 Connect the camera data cable

Pass the camera's USB cable through the chassis controller and the battery, and connect it to the port on the RDK X5:

![MVIMG_20240923_171745](../../assets/img/hardware_setup/MVIMG_20240923_171745.jpg){.img-fluid tag=2}



???+ danger
    Do not unplug or plug the camera cable when the power is on, as this will damage the camera.

## **Install lidar**
Materials required:

![MVIMG_20240923_171944](../../assets/img/hardware_setup/MVIMG_20240923_171944.jpg){.img-fluid tag=2}

Pass the three copper pillars through the corresponding holes on the radar driver board, fix the other side with three screws, tighten the copper pillars, and connect the radar serial port cable:

![MVIMG_20240923_172121](../../assets/img/hardware_setup/MVIMG_20240923_172121.jpg){.img-fluid tag=2}

Use four screws to fix the radar driver board to the supporting copper column of the car:

![MVIMG_20240923_172304](../../assets/img/hardware_setup/MVIMG_20240923_172304.jpg){.img-fluid tag=2}
Connect the other end of the serial cable to the radar:
![MVIMG_20240923_172405](../../assets/img/hardware_setup/MVIMG_20240923_172405.jpg){.img-fluid tag=2}

Install the radar and use three screws to fix the radar to the supporting copper pillars of the radar driver board:
![MVIMG_20240923_172504](../../assets/img/hardware_setup/MVIMG_20240923_172504.jpg){.img-fluid tag=2}

### Connect the cables

Materials required:

![MVIMG_20240923_145612](../../assets/img/hardware_setup/MVIMG_20240923_145612.jpg){.img-fluid tag=2}
 

Connect the power supply module
RDK X5 is powered by the controller through the Type C port. Use the Type C power supply module to connect the power output of the controller and the power input of the motherboard:

???+ hint
    When plugging or unplugging the Type-C power module, be careful to avoid damaging the SMD pins.

![IMG_20240923_144648](../../assets/img/hardware_setup/IMG_20240923_144648.jpg){.img-fluid tag=2}



 Connect the serial communication line

Use a serial communication cable to connect the controller and the communication interface of RDK X5:

![IMG_20240923_144708](../../assets/img/hardware_setup/IMG_20240923_144708.jpg){.img-fluid tag=2}


???+ hint
    Please pay attention to the wiring sequence, TX-RX, RX-TX, GND-GND;

Connect the radar communication line

The original Type C data cable of the radar is long. You can use the short cable in the kit. One side is connected to the USB port of RDK X5, and the other side is connected to the Type C port of the radar serial port module:



![IMG_20240923_144844](../../assets/img/hardware_setup/IMG_20240923_144844.jpg){.img-fluid tag=2}

Connect the main power cord

Check that all parts of the robot have been correctly installed according to the operating steps, and the control switch is in the "OFF" state, and connect the main power line of the battery to the controller:

![IMG_20240923_144924](../../assets/img/hardware_setup/power_line_connected.png){.img-fluid tag=2}


???+ hint
    The power socket is tight and close to the RDK X5, so be careful when installing and inserting it. It will be easier to insert if the two flat parts of the T-shaped plug are close to the socket.

### Installing a license plate (optional)
Paste license plate
Affix the unique numbered stickers included in the kit to the front and rear sides of the chassis as desired.


![1727079486319](../../assets/img/hardware_setup/PixPin_2025-05-09_17-28-35.png){.img-fluid tag=2}

At this point, the OriginBot installation is complete.

[![图片1](../../assets/img/footer.png)](https://www.guyuehome.com/){:target="_blank"}