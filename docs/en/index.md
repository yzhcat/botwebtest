# **OriginBot Intelligent Robot Open-Source Kit**

> **Notice to Users**: This English document is intended for users outside of China. Overseas users can refer to this document to use OriginBot. If you have any questions, please join the [Discord](https://discord.gg/nd5aqYNp) community group (see the product QR code).

![OriginBot](../assets/img/originbot_pro.png)

<div style="text-align: right;">
  <a href="#originbot_1" class="md-button">Learn About OriginBot</a>
  <a href="./guide/quick_guide/" class="md-button md-button--primary">Explore OriginBot Now!</a>
</div>

## **OriginBot**

OriginBot is an open-source kit for intelligent robots and a community-driven project designed to let every participant enjoy the process of robot development.

### <font color='green'>**Open-Source Collaboration**</font>

"Open source is power"—this is the core spirit of OriginBot, and we welcome every developer to participate.

**▶ Open-Source Ecosystem**

<div style="display: inline-block">
<img src="../assets/img/originbot_explode.jpg" style="max-width:256px;" align="left">
What you gain is more than what you see, and what you see is open source. From structure to electronics, from drivers to applications, OriginBot's compact design houses a vast open-source ecosystem. Every developer is welcome to learn from it and contribute to its growth.
</div>

**<p align="right">Continuous Iteration ◀</p>**

<div style="display: inline-block">
<img src="../assets/img/agile.jpg" style="max-width:256px;" align="right">
Why stop? Progress is infinite. Each step forward brings joy. With strong community support, OriginBot and its developers continuously advance. Both software and hardware are iteratively improved, ensuring growth with every version update.
</div>

### <font color='green'>**Full-Stack Development**</font>

The journey of intelligent robot development is challenging, and OriginBot is here to support every developer along the way.

**▶ Comprehensive Tech Stack**

<div style="display: inline-block">
<img src="../assets/img/capabilities.png" style="max-width:256px;" align="left">
The OriginBot project spans multiple fields, including structural design, electronics, embedded systems, ROS, and artificial intelligence. Whatever your research focus, you can find your niche here, quickly grasp the complete robot design process, and master core development techniques.
</div>

### <font color='green'>**Smart Applications**</font>

OriginBot features a simple structure but supports complex applications, enabling limitless possibilities.

**▶ High-Performance Computing**

<div style="display: inline-block">
<img src="../assets/img/material_list/rdkx5.jpg" style="max-width:256px;" align="left">
OriginBot comes equipped with the Sweet Potato Robot Development Board - RDK X5, offering robust computational power. It supports various use cases such as CV acceleration, human tracking, gesture recognition, and visual line following, allowing you to experience the fun of AI and create truly "intelligent" robots.
</div>

**<p align="right">Rich Applications ◀</p>**

<div style="display: inline-block">
<img src="../assets/img/image-20220922173203208.png" style="max-width:256px;" align="right">
OriginBot uses ROS2 and TogetheROS™.Bot (a deeply optimized ROS open-source robot operating system by D-Robotics) as its software foundation. It is compatible with many ROS ecosystem applications and is ready to use out of the box. It supports original applications and enables quick development of features like SLAM, navigation, visual processing, and machine learning.
</div>

### <font color='green'>**Born from Passion**</font>

Every robot developer dreams of "building a robot from scratch," and OriginBot was created to fulfill this passion.

**▶ Unique Identity**

<div style="display: inline-block">
<img src="../assets/img/20220906134853.jpg" style="max-width:256px;" align="left">
Each OriginBot is unique. The kit includes a license plate with a unique serial number, starting from "0000." When you attach the license plate to your robot, you become its owner. Endless possibilities await exploration.
</div>

**<p align="right">Start Development ◀</p>**

<div style="display: inline-block">
<img src="../assets/img/hello_robot.jpg" style="max-width:256px;" align="right">
OriginBot aims to awaken every developer's original dream and help them find a development path that suits them. The journey ahead is long, but together, we will set sail now!
</br>
</br>
</br>
<a href="guide/quick_guide/" class="md-button">Start Developing with Qihang Robot</a>
</div>

## **Configuration Parameters**

| Main Configuration Items | OriginBot                                      |                                                                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------- |
| Renderings               | ![OriginBot](../assets/img/quick_guide/originbot_x5_nav.jpg){.img-fluid tag=1 title="OriginBot Navigation Version"}                                        |                                        |
| Application Processor    | **RDK X5**<br />CPU: Octa-core ARM Cortex-A55@1.5GHz<br />BPU: 32Gflops, equivalent computing power <font color='green'>10TOPS</font><br />Memory: 8GB LPDDR4 RAM<br />Storage: 32GB (TF Card) | 
| Motion Controller        | MCU: STM32F103<br />Flash Capacity: 64K<br />RAM Capacity: 20KB<br />                                                                                                                                  |
| Differential Chassis     | TT motor with encoder 2 * 2<br />Camera bracket<br />Universal wheel and bracket                                                                                                       | 
| Camera                   | 720P USB Camera                                                                                                                             | 
| LiDAR (TOF)              | <font color='green'>6Hz scanning frequency,<br />360° scanning angle<br />3000Hz ranging frequency</font>                                                                         | 
| Gesture Sensor           | <font color='green'>Acceleration, gyroscope, and angular output<br />Built-in Kalman filter</font>                                                                                   |
| Size                     | Length: 180 mm<br />Width: 132 mm<br /><font color='green'>Height: 154 mm</font> (±2)                                                                       | 
| Weight                   | <font color='green'>0.78 kg</font> (±0.05)                                                                                                 | 
| Max Speed                | 0.8 m/s (±0.05)                                                                                                                            | 
| Operating Software       | Ubuntu 22.04 (Server)<br />ROS2 Humble<br />TogetheROS 3.0.0                                                                                | 
| Other Accessories        | Uniquely numbered license plate stickers<br /><font color='green'>LiDAR stickers</font><br />Screws, copper pillars, cables, card reader installation tools, etc.                                                                    |
| Power Supply              | 5V/3A USB Type-A <br/>[**power bank**](../material/open_source_link.md#power-bank)                                                                                                                            |

## **Contribute**

We warmly invite all developers to participate in the OriginBot project. There are many ways to contribute:

### **Provide Feedback**

- If you have any questions or suggestions while using the OriginBot kit, please ask and discuss in the [Guyuehome Community Forum](https://www.guyuehome.com/interlocution?id=1826932316801544194){:target="_blank"}.

- If you encounter any bugs while using OriginBot, please submit an issue in the [code repository](https://github.com/yzhcat/originbot){:target="_blank"}.

### **Contribute Code**

- If you have any optimizations, additions, or other modifications to the native code while using the OriginBot kit, feel free to submit a pull request in the [code repository](https://github.com/yzhcat/originbot){:target="_blank"}.

### **Open-Source Sharing**

- If you are interested in OriginBot, please star the project's source code repository or share it with developers who might benefit from it.

- If you develop interesting features or robots based on the OriginBot open-source project, please share them with us in the [Community Section](https://www.guyuehome.com/interlocution?id=1826932316801544194){:target="_blank"}. We will promote outstanding projects within the community.

## **Link Summary**

- Community Main Site: [https://www.originbot.org](https://www.originbot.org/){:target="_blank"}

- Open-Source Repositories:
  
  | Name                   | Link                                                                                                                     | Description                |
  | ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------- |
  | originbot             | [https://github.com/yzhcat/originbot](https://github.com/yzhcat/originbot){:target="_blank"}                       | Repository for OriginBot's functional package |
  | originbot_desktop     | [https://github.com/yzhcat/originbot_desktop](https://github.com/yzhcat/originbot_desktop){:target="_blank"}       | Repository for OriginBot's desktop application |
  | originbot_controller  | [https://github.com/yzhcat/originbot_controller](https://github.com/yzhcat/originbot_controller){:target="_blank"} | Repository for OriginBot's controller source code |

- Forum Exchange: [https://www.guyuehome.com/interlocution?id=1826932316801544194](https://www.guyuehome.com/interlocution?id=1826932316801544194){:target="_blank"}

- D-Robotics Developer Community: [https://developer.d-robotics.cc/en](https://developer.d-robotics.cc/en){:target="_blank"}

![Communication Group](../assets/img/group_discord.png)

[![Footer](../assets/img/footer.png)](https://www.guyuehome.com/){:target="_blank"}
