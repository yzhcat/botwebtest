# **Gesture control**

???+ hint
    The operating environment and software and hardware configurations are as follows:
    

     - OriginBot Pro
     - PC：Ubuntu (≥22.04) + ROS2 (≥humble)



## **Start the robot chassis**

After the SSH connection to OriginBot is successful, enter the following command in the terminal to start the robot chassis:

```bash
ros2 launch originbot_bringup originbot.launch.py
```

![image-20220822151626109](../../assets/img/navigation/image-20220822151626109.png){.img-fluid tag=1 title="Start the robot chassis"}



## **Enable the gesture control function**

``` bash
cd /userdata/dev_ws
export CAM_TYPE=usb
# Start the launch file
ros2 launch gesture_control gesture_control.launch.py
```

![image-20220822151747385](../../assets/img/gesture_control/image-20220822151747385.png){.img-fluid tag=1 title="Enable the gesture control function"}

???+ Attention
    When starting an application function, please make sure that the configuration file is in the current running path. Otherwise, the application function will not be able to find the configuration file and will fail to run.



## **Gestures control bot effects**

After the startup is successful, stand in front of the OriginBot camera and use the following gestures to control the robot's movement.



|Control Gesture	|Function	|Gesture Action Example|
|-|-|-|
|666 Gesture/Awesome|	Move forward|	![image-awesome](https://developer.d-robotics.cc/rdk_doc/assets/images/image-awesome-a47b44f9f6d0425d7e88ec2f05b64d16.jpeg)|
|yeah/Victory|	Move backward|	![image-victory](https://developer.d-robotics.cc/rdk_doc/assets/images/image-victory-13c483b7b905156f2c5ced2abf0edaee.jpeg)|
|Thumb Right|	Turn right|	![image-thumbright](https://developer.d-robotics.cc/rdk_doc/assets/images/image-thumbright-ec85f3a3a20cd2b2944e284e318adb11.jpeg)|
|Thumb Left|	Turn left	|![image-thumbleft](https://developer.d-robotics.cc/rdk_doc/assets/images/image-thumbleft-dc4842190d5dcf6b2f96907125df97dd.jpeg)|


![d7b39314d6](../../assets/img/gesture_control/d7b39314d6.gif)




## **Visualized display of the upper computer**

Open the browser and access the robot's IP address to see the real-time effect of visual recognition.
![image-20220922173203208](../../assets/img/gesture_control/image-20220922173203208.png){.img-fluid tag=1 title="Visualized display of the upper computer"}



## **Introduction to the principle**

The gesture control function is to control the movement of the robot car through gestures, including left and right rotation and front and back translation. It consists of MIPI image acquisition, human body detection and tracking, human hand key point detection, gesture recognition, gesture control strategy, image encoding and decoding, and WEB display terminal. The process is as follows:

![20220922181402](../../assets/img/gesture_control/workflow_en.png){.img-fluid tag=1 title="Introduction to the principle"}

For a detailed explanation of the principle, please see:

[https://developer.d-robotics.cc/rdk_doc/Robot_development/apps/car_gesture_control](https://developer.d-robotics.cc/rdk_doc/Robot_development/apps/car_gesture_control){:target="_blank"}

[![图片1](../../assets/img/footer_en.png)](https://www.guyuehome.com/){:target="_blank"}

