---
typora-copy-images-to: image/body_detection
---

# **人体跟随**

???+ hint
    操作环境及软硬件配置如下：
    

     - OriginBot机器人（Lite版/标准版/Pro 版）
     - PC：Ubuntu (≥22.04) + ROS2 (≥humble)



## **启动机器人底盘**

SSH连接OriginBot成功后，在终端中输入如下指令，启动机器人底盘：

```bash
ros2 launch originbot_bringup originbot.launch.py
```

![image-20220822151622648](../../assets/img/navigation/image-20220822151622648.png){.img-fluid tag=1 title="启动机器人底盘"}



## **启动人体跟随功能**

=== ":fontawesome-solid-car: v2.x版本镜像"

    ``` bash
    cd /userdata/dev_ws
    
    #启动launch文件
    ros2 launch body_tracking body_tracking_without_gesture.launch.py
    ```

=== ":material-car: v1.x版本镜像"

    ``` bash
    # 从TogetheROS的安装路径中拷贝出运行示例需要的配置文件
    cd /userdata/dev_ws
    cp -r /opt/tros/lib/mono2d_body_detection/config/ .
    
    #启动launch文件
    ros2 launch body_tracking hobot_body_tracking_without_gesture.launch.py
    ```



![image-20220822151712998](../../assets/img/body_detection/image-20220822151712998.png){.img-fluid tag=1 title="启动人体跟随功能"}

???+ Attention
    启动应用功能时，请注意配置文件在当前运行的路径下，否则应用功能找不到配置文件，会运行失败。



## **人体跟随效果**

启动成功后，站在OriginBot摄像头前，需要让机器人识别到整个身体，慢慢移动身体，可以看到机器人已经开始跟随人体运动。



![body_detection](../../assets/img/body_detection/body_detection.gif)



## **上位机可视化显示**

打开浏览器，访问机器人的ip地址，即可看到视觉识别的实时效果。



![ezgif-5-5c246b7347](../../assets/img/body_detection/ezgif-5-5c246b7347.gif)



## **原理简介**

人体跟随功能为控制机器人跟随人体移动，由MIPI图像采集、人体检测和跟踪、人体跟随策略、图像编解码、WEB展示端组成，流程如下图：

![20220922180336](../../assets/img/body_detection/20220922180336.png){.img-fluid tag=1 title="原理简介"}

详细原理讲解请见：

[https://developer.d-robotics.cc/rdk_doc/Robot_development/apps/car_tracking](https://developer.d-robotics.cc/rdk_doc/Robot_development/apps/car_tracking){:target="_blank"}



人体检测与跟踪的源码请见：

[https://github.com/D-Robotics/body_tracking](https://github.com/D-Robotics/body_tracking){:target="_blank"}



[![图片1](../../assets/img/footer.png)](https://www.guyuehome.com/){:target="_blank"}

