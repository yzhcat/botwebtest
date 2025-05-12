# **OriginBot Usage Guide**

Let’s embark on the journey of intelligent robot development together!

???+ info
    Before proceeding, you should have some basic knowledge of robot development. Test yourself with the following questions:

    1. What is Linux? What is Ubuntu? How do you open a command-line terminal? What do the commands `cd`, `ls`, and `sudo` mean?
    2. What is SSH? What are the commonly used SSH tools in Windows and Ubuntu? How do you use them?
    3. What is ROS/ROS2? What are its core concepts? How do you install and use it? How do you compile a workspace and set environment variables?
    
    If you can answer these questions, feel free to continue with the guide. Otherwise, it is recommended to spend 3–5 days researching these topics using search tools or [reference materials](../reference/reference.md){:target="_blank"} and [GYH Chat](https://chat.guyuehome.com/chat/share?shareId=akqzahosg0gexgypl09suvz3). This preparation will help you better understand the subsequent robot development process.

## **1. Choose the Right Kit**
For a detailed list of materials included in the OriginBot kit, refer to: [**OriginBot Kit List**](../material/material_list.md){:target="_blank"}.

## **2. Assemble OriginBot**

Follow the [**Kit Assembly Guide**](../guide/hardware_setup.md){:target="_blank"} or the **instructions** included in the kit to complete the assembly of your OriginBot.

???+ hint
    Assembling the robot is expected to take 30 to 60 minutes. This process not only helps you understand the robot's components but also makes your OriginBot unique.

## **3. Burn the Image and Firmware**

Once the kit is assembled, the "body" of the OriginBot is ready. The next step is to inject its "soul."

1. Follow the "System Installation and Backup" instructions to [**Burn the OriginBot SD Card Image**](../guide/image_install.md#download-the-originbot-sd-card-image){:target="_blank"}.
2. Follow the [**Controller Firmware Installation Guide**](../guide/firmware_install.md#download_controller_firmware){:target="_blank"} to flash the controller firmware.

???+ Attention
    The OriginBot does not come with a pre-burned SD card image. Please follow the instructions above to complete the process; otherwise, subsequent functions may not work properly.

## **4. Configure the Computer Environment**

To monitor and control the robot remotely, configure your computer as follows:

1. Refer to [**Ubuntu System Installation**](../guide/pc_config.md#ubuntu_install){:target="_blank"} to install the system environment on your computer. Ubuntu 22.04 is recommended.
2. Refer to [**ROS2 System Installation**](../guide/pc_config.md#ros2_install){:target="_blank"} to install ROS2 on the Ubuntu system. ROS2 Humble is recommended.
3. Refer to [**Downloading/Compiling PC Function Packages**](../guide/pc_config.md#package_install){:target="_blank"} to compile OriginBot-related function packages. These packages are primarily used for visualization and simulation on the host computer.

## **5. Run the Quick Start Example**

Now you’re ready to bring your OriginBot to life.

Follow the [**Quick Start Guide**](../guide/easy_start.md){:target="_blank"} to perform the first operation and control the robot's movement.

## **6. Explore Robot Functions**

OriginBot includes various sample programs to help developers understand intelligent robot development. Detailed instructions can be found in the following sections:

### **Basic Usage**

This section explains how to use OriginBot's basic functions:

| Function                                                         | Description                                                    | Difficulty |
| ------------------------------------------------------------ | ------------------------------------------------------- | ---- |
| [Build a Development Environment](../manual/ide_setup.md){:target="_blank"}         | Set up a remote debugging environment using VS Code                              | Beginner |
| [Code Development Methodology](../manual/package_develop.md){:target="_blank"}   | Modify and compile function packages                                  | Beginner |
| [Robot Startup and Parameter Configuration](../manual/originbot_bringup.md){:target="_blank"} | Start the OriginBot chassis and sensors                         | Beginner |
| [Robot Remote Control and Visualization](../manual/teleoperation.md){:target="_blank"} | Control the robot's movement using a keyboard or joystick                         | Beginner |
| [Camera Driver and Visualization](../manual/camera_visualization.md){:target="_blank"} | Visualize camera image data                                | Beginner |
| [Lidar Driver and Visualization](../manual/lidar_visualization.md){:target="_blank"} | Visualize lidar data                                | Beginner |
| [IMU Driver and Visualization](../manual/imu_visualization.md){:target="_blank"} | Visualize IMU data                                     | Beginner |
| [Dynamic Monitoring of Robot Parameters](../manual/parameter_config.md){:target="_blank"} | Monitor robot voltage, peripherals, temperature, and PID parameters | Beginner |
| [Robot Odometry Calibration](../manual/odom_calibration.md){:target="_blank"} | Calibrate the robot's linear and angular velocities                              | Intermediate |
| [Robot Charging Method](../manual/originbot_charging.md){:target="_blank"} | Instructions for charging the robot                                        | Beginner |
| [Communication Protocol Description](../manual/protocol_description.md){:target="_blank"} | Details of the communication protocol between the controller and RDK X5             | Intermediate |
| [Upper Computer Control Instructions](../manual/hmi.md){:target="_blank"}             | Communication between the upper computer and RDK X5            | Advanced |
| [RTOS Configuration](../manual/originbot_freertos.md){:target="_blank"} | Configure the controller with FreeRTOS                                      | Advanced |
| [EKF Multi-Sensor Fusion](../manual/ekf.md){:target="_blank"}            | Perform EKF multi-sensor positioning                                         | Beginner |

### **Application Features**

This section introduces OriginBot's application functions:

| Function                                                         | Description                                                     | Difficulty |
| ------------------------------------------------------------ | -------------------------------------------------------- | ---- |
| [Basic Functional Programming](../application/basic_program.md){:target="_blank"} | Examples of basic robot function programming (e.g., obtaining robot status, controlling peripherals)| Intermediate |
| [SLAM Map Construction](../application/slam.md){:target="_blank"}         | Build maps using Cartographer                                     | Beginner |
| [Autonomous Navigation](../application/navigation.md){:target="_blank"}       | Use Navigation2 and AMCL for autonomous positioning and navigation              | Beginner |
| [Human Body Tracking](../application/body_detection.md){:target="_blank"}   | Dynamically recognize and follow human movements                             | Beginner |
| [Gesture Control](../application/gesture_control.md){:target="_blank"}  | Dynamically recognize gestures and perform corresponding actions                       | Beginner |
| [Visual Line Follower (OpenCV)](../application/cv_line_follower.md){:target="_blank"} | Implement visual line following using OpenCV                                   |  Intermediate |
| [Visual Line Follower (AI Deep Learning)](../application/deeplearning_line_follower.md){:target="_blank"} | Implement visual line following using deep learning                       | Advanced |
| [Gazebo Virtual Simulation](../application/gazebo_simulation.md){:target="_blank"} | Run a 3D physical simulation environment for OriginBot on a PC                      |  Intermediate |
| [SLAM Mapping (Gazebo)](../application/gazebo_slam.md){:target="_blank"} | Perform mapping in a 3D physical simulation environment                      |  Intermediate |
| [Autonomous Navigation (Gazebo)](../application/gazebo_navigation.md){:target="_blank"} | Perform autonomous navigation in a 3D physical simulation environment                      |  Intermediate |
| [Parking Spot Detection (AI Deep Learning)](../application/parking_search.md){:target="_blank"} | Dynamically recognize parking spots and drive into them                      | Beginner |
| [Trajectory Tracking](../application/tracking.md){:target="_blank"} | Follow a designated trajectory                      | Beginner |
| [Kick the Ball and Shoot at Goal](../application/play_football.md){:target="_blank"} | Dynamically recognize a football and score a goal                      | Advanced |
| [Voice Control](../application/audio_control.md){:target="_blank"} | Dynamically recognize voice commands and respond accordingly                     | Advanced |

### **Application Function Demo**

<!-- <iframe
  src="//player.bilibili.com/player.html?aid=1151686599&bvid=BV1QZ42187kv&cid=1466229297&page=1&autoplay=0"
  scrolling="no"
  border="0"
  width="800px"
  height="460px"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
>
</iframe> -->

## **Explore More Possibilities**

OriginBot is an open-source project built by the community. You can customize and redevelop it to make your OriginBot truly unique. Developers are encouraged to refer to, learn from, provide feedback, and contribute to the project.

If you create new features or improvements based on the OriginBot open-source project, please share them [here](https://www.guyuehome.com/interlocution?id=1826932316801544194){:target="_blank"}!

We wish you an exciting journey in robot development! ☻

[![Footer Image](../../assets/img/footer.png)](https://www.guyuehome.com){:target="_blank"}
