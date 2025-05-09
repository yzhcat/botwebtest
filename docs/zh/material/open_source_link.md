---
typora-copy-images-to: image\open_source_link
---

# **开源资料链接**



## **开源软件**

### **SD卡镜像**

???+ Tip
    ***版本说明***
    
     - 3.x版本：基于RDK Linux开源代码包制作，支持RDK X5等系列硬件,支持OriginBot Pro；
     - 2.x版本：基于RDK Linux开源代码包制作，支持RDK X3、X3模组、旭日X3派等全系列硬件，支持OriginBot 标准版和Lite；
     - 1.x版本：旭日X3派历史版本，仅支持旭日X3派硬件，系统镜像名为system_sdcard.img，支持OriginBot 标准版和Lite；
     
     **如不确定如何选择版本，请直接安装最新版即可**

=== ":fontawesome-solid-car: v3.x版本镜像"

    OriginBot SD卡镜像（适用于RDK X5），已包含新版本系统、所有应用功能及源码：
    
    | 版本   | 发布日期   | 下载链接                                                     | 包含软件版本                     |
    | ------ | ---------- | ------------------------------------------------------------ | -------------------------------- |
    | v3.0.1 | 2025.3.1 | [originbot_sd_image_v3.0.1](https://pan.baidu.com/s/149A_6VqJ7zHVimKIWDGKXQ?pwd=gyh1 ){:target="_blank"} | ros：humble<br />TogetheROS：2.3.2 |


=== ":fontawesome-solid-car: v2.x版本镜像"

    OriginBot SD卡镜像（适用于RDK X3及旭日X3派），已包含新版本系统、所有应用功能及源码：
    
    | 版本   | 发布日期   | 下载链接                                                     | 包含软件版本                     |
    | ------ | ---------- | ------------------------------------------------------------ | -------------------------------- |
    | v2.2.0 | 2024. 9.23 | [originbot_sd_image_v2.2.0](https://pan.baidu.com/s/149A_6VqJ7zHVimKIWDGKXQ?pwd=gyh1 ){:target="_blank"} | ros：foxy<br />TogetheROS：2.1.2 |
    | v2.1.0 | 2024. 3.1 | [originbot_sd_image_v2.1.0](https://pan.baidu.com/s/149A_6VqJ7zHVimKIWDGKXQ?pwd=gyh1 ){:target="_blank"} | ros：foxy<br />TogetheROS：2.1.2 |
    | v2.0.2 | 2023. 11.24 | [originbot_sd_image_v2.0.2](https://pan.baidu.com/s/149A_6VqJ7zHVimKIWDGKXQ?pwd=gyh1 ){:target="_blank"} | ros：foxy<br />TogetheROS：2.1.1 |
    | v2.0.1 | 2023. 10.24 | [originbot_sd_image_v2.0.1](https://pan.baidu.com/s/1aEiw1bJu8l1AhPa-e-rauQ?pwd=gyh1 ){:target="_blank"} | ros：foxy<br />TogetheROS：2.0.2 |
    | v2.0.0 | 2023. 9.18 | [originbot_sd_image_v2.0.0](https://pan.baidu.com/s/16c7W4vcXShrXf1LL2ce-7w?pwd=3ju1 ){:target="_blank"} | ros：foxy<br />TogetheROS：2.0.2 |



=== ":material-car: v1.x版本镜像"

    OriginBot SD卡镜像（仅适用于旭日X3派），已包含新版本系统、所有应用功能及源码：
    
    | 版本   | 发布日期  | 下载链接                                                     | 包含软件版本                     |
    | ------ | --------- | ------------------------------------------------------------ | -------------------------------- |
    | v1.0.4 | 2023.4.17 | [originbot_sd_image_v1.0.4](https://pan.baidu.com/s/1upHCiBuiUltHnI2qWWNmfg?pwd=gyh1){:target="_blank"} | ros：foxy<br />TogetheROS：1.1.6 |
    | v1.0.3 | 2023.2.23 | [originbot_sd_image_v1.0.3](https://pan.baidu.com/s/1rFWTycsGt1UXJjAzY6HnVg?pwd=gyh1){:target="_blank"} | ros：foxy<br />TogetheROS：1.1.5 |
    | v1.0.2 | 2023.1.17 | [originbot_sd_image_v1.0.2](https://pan.baidu.com/s/19PDlMhcA1jhIVKZoAO8pFA?pwd=gyh1){:target="_blank"} | ros：foxy<br />TogetheROS：1.1.3 |
    | v1.0.1 | 2022.12.8 | [originbot_sd_image_v1.0.1](https://pan.baidu.com/s/1K-Vk2CDrkpowOs4_bBwEfw?pwd=gyh1){:target="_blank"} | ros：foxy<br />TogetheROS：1.1.2 |
    | v1.0.0 | 2022.10.9 | [originbot_sd_image_v1.0.0](https://pan.baidu.com/s/1QXbMJymO9h80ygA4stDPog?pwd=osfi){:target="_blank"} | ros：foxy<br />TogetheROS：1.1.0 |



### **应用软件源码**

OriginBot应用功能基于ROS2及TogetheROS实现，源码仓库如下：

| 代码仓库                                                     | 主要依赖库                 | 说明                                 |
| ------------------------------------------------------------ | -------------------------- | ------------------------------------ |
| [originbot](https://gitee.com/guyuehome/originbot){:target="_blank"} | ros：foxy/humble<br />TogetheROS | 机器人应用功能包，运行在**机器人端** |
| [originbot_desktop](https://gitee.com/guyuehome/originbot_desktop){:target="_blank"} | ros：humble                  | 机器人应用功能包，运行在**PC端**     |

???+ hint
	机器人端的代码已经内置在SD卡镜像中，并且已经编译配置完成，在镜像系统中的路径为：</br>/userdata/dev_ws/src/originbot



### **控制器固件**

控制器固件需要烧写到STM32系统中，以下提供多种不同的版本，请根据需要选择其中1个下载烧写即可：

=== ":octicons-cpu-16: 标准固件版本（推荐使用）"

    | 版本   | 发布日期  | 下载链接                                                     | MCU       |
    | ------ | --------- | ------------------------------------------------------------ | --------- |
    | v1.0.6 | 2024.9.23 | [originbot_controller_firmware_v1.0.6](https://pan.baidu.com/s/1qMlekq84JQBM8OZC3pm0rA?pwd=gyh1){:target="_blank"} | STM32F103 |
    | v1.0.5 | 2024.3.1 | [originbot_controller_firmware_v1.0.5](https://pan.baidu.com/s/1qMlekq84JQBM8OZC3pm0rA?pwd=gyh1){:target="_blank"} | STM32F103 |
    | v1.0.4 | 2023.9.18 | [originbot_controller_firmware_v1.0.4](https://pan.baidu.com/s/1qMlekq84JQBM8OZC3pm0rA?pwd=gyh1){:target="_blank"} | STM32F103 |
    | v1.0.2 | 2023.1.17 | [originbot_controller_firmware_v1.0.2](https://pan.baidu.com/s/1Pe-9LTyShJi5N_t06vKtdw?pwd=gyh1){:target="_blank"} | STM32F103 |
    | v1.0.1 | 2022.12.8 | [originbot_controller_firmware_v1.0.1](https://pan.baidu.com/s/1SfQXc0emAyyrBQLytjQZGA?pwd=gyh1){:target="_blank"} | STM32F103 |
    | v1.0.0 | 2022.10.9 | [originbot_controller_firmware_v1.0.0](https://pan.baidu.com/s/1CVYuzFKFBCo-rWH3-2TkFA?pwd=upep){:target="_blank"} | STM32F103 |

=== ":octicons-cpu-24: RTOS版本（测试版）"

    如果大家对RTOS有一定了解，并且想要深入开发控制器固件，也欢迎大家选择适配好FreeRTOS的固件版本：
    
    | 版本            | 发布日期  | 下载链接                                                     | MCU       |
    | --------------- | --------- | ------------------------------------------------------------ | --------- |
    | v1.0.3-FreeRTOS | 2023.4.17 | [originbot_controller_firmware_freertos](https://pan.baidu.com/s/1mAxUfuaAiEJ4RoZQYCTY8w?pwd=gyh1){:target="_blank"} | STM32F103 |

=== ":octicons-cpu-24: 外部供电版本（测试版）"

    如果大家在日常使用中使用手机充电器等给OriginBot供电，可以使用降低电压临界造成蜂鸣器响动的控制器固件版本，此版本只会在机器启动后第一次检测到电压低于9.6v后蜂鸣器响5s,检测到电压低于4.85v后会持续鸣响：
    
    | 版本                    | 发布日期  | 下载链接                                                     | MCU       |
    | ----------------------- | --------- | ------------------------------------------------------------ | --------- |
    | reduced_buzzer_duration | 2023.9.18 | [originbot_controller_firmware_no_buzzer](https://pan.baidu.com/s/1qMlekq84JQBM8OZC3pm0rA?pwd=gyh1){:target="_blank"} | STM32F103 |



### **控制器固件源码**

以上固件对应的源码仓库如下：

| 代码仓库                                                     | 说明                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| [originbot_controller](https://gitee.com/guyuehome/originbot_controller){:target="_blank"} | 机器人控制器嵌入式源码，开发平台为Keil，MCU为STM32F103 |





## **开源硬件**

### **三维模型**

| 名称                    | 下载链接                                                     | 说明                    |
| ----------------------- | ------------------------------------------------------------ | ----------------------- |
| OriginBot机器人三维模型 | [OriginBot三维模型](https://pan.baidu.com/s/1smLq2O_JWpWDobyMezfo0g?pwd=wlb6){:target="_blank"} | 机器人三维模型，stp格式 |



### **电气图纸**

| 名称                   | 下载链接                                                     | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| OriginBot控制器原理图  | [点击查看/下载](https://gitee.com/guyuehome/originbot_controller/blob/master/material/%E7%94%B5%E6%B0%94%E5%9B%BE%E7%BA%B8/OriginBot_Controller%E5%8E%9F%E7%90%86%E5%9B%BE.pdf){:target="_blank"} | originbot controller原理图，pdf版本                          |
| OriginBot控制器PCB工程 | [点击查看/下载](https://gitee.com/guyuehome/originbot_controller/tree/master/material/%E7%94%B5%E6%B0%94%E5%9B%BE%E7%BA%B8){:target="_blank"} | originbot controllerPCB工程文件，含原理图源文件，建议使用Altium Designer软件打开 |

???+ hint
	更多RDK X3/RDK X5参考资料请见[这里](https://developer.d-robotics.cc/rdk_doc/RDK){:target="_blank"}



### **其他资料**

| 名称             | 下载链接                                                     | 说明                                                         |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| RDK X3/RDK X5资料包</br>   | [点击查阅](https://archive.d-robotics.cc/downloads/hardware/){:target="_blank"} | RDK X3/RDK X5资料包内含硬件接口手册、原理图、用户使用手册等资料 |
| 激光雷达数据手册 | [点击下载](https://gitee.com/guyuehome/originbot_controller/blob/develop/material/%E6%95%B0%E6%8D%AE%E6%89%8B%E5%86%8C/YDLIDAR%20X3%20%E6%95%B0%E6%8D%AE%E6%89%8B%E5%86%8C.pdf){:target="_blank"} | 雷达手册                                          |
| 电机数据手册     | [点击下载](https://gitee.com/guyuehome/originbot_controller/blob/develop/material/%E6%95%B0%E6%8D%AE%E6%89%8B%E5%86%8C/%E7%A0%81%E7%9B%98TT%E7%94%B5%E6%9C%BA%E6%95%B0%E6%8D%AE%E6%89%8B%E5%86%8C.pdf){:target="_blank"} | 码盘TT电机                                                   |



[![图片1](../../assets/img/footer.png)](https://www.guyuehome.com/){:target="_blank"}