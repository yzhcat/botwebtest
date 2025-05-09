# **小车车位寻找（AI深度学习）**

???+ hint
    操作环境及软硬件配置如下：

     - OriginBot机器人（Lite版/标准版）
     - PC：Ubuntu (≥22.04) + ROS2 (≥humble) + pytorch + docker

>  该功能转载自《地瓜机器人平台用户手册》，[点击查看原内容](https://developer.d-robotics.cc/rdk_doc/Robot_development/apps/parking_search){:target="_blank"}
>



## **应用目标**

我们现在经常可以看到车辆自主泊车，在停车库中找到属于自己的车位。那我们可不可以在OriginBot小车上实现这个功能呢？当然没问题，采用深度学习的方式进行训练，然后采集相关的图像进行训练，我们就可以搭建一个简易的应用环境了。接下来我们就来尝试一下。



## **启动机器人底盘**

SSH连接OriginBot成功后，在终端中输入如下指令，启动机器人底盘：

```
ros2 launch originbot_bringup originbot.launch.py
```



## **启动小车车位寻找功能**

=== ":fontawesome-solid-car: v2.x版本镜像"

    ``` bash
    # 从TogetheROS的安装路径中拷贝出运行示例需要的配置文件
    cp -r /opt/tros/lib/parking_perception/config/ .
    
    # 启动launch文件
    ros2 launch parking_search parking_search.launch.py
    ```

=== ":material-car: v1.x版本镜像"

    ``` bash
    # 配置TogetheROS环境
    source /opt/tros/setup.bash
    
    # 从TogetheROS的安装路径中拷贝出运行示例需要的配置文件
    cp -r /opt/tros/lib/parking_perception/config/ .
    
    # 配置MIPI摄像头
    export CAM_TYPE=mipi
    
    # 启动launch文件
    ros2 launch parking_search hobot_parking_search.launch.py
    ```



## **检查实现效果**

小车在行车区域搜寻前进时X3板端运行终端输出log信息，其中控制小车以0.1m/s的速度前进运动

![cap1](../assets/img/parking_search/cap1.gif)

小车发现车位后转向时在X3板端运行终端输出log信息

![cap2](../assets/img/parking_search/cap2.gif)

小车确定车位后前进并最终停止时在X3板端运行

![cap3](../assets/img/parking_search/cap3.gif)



## **原理简介**

这里的原理部分和之前的 AI 深度学习训练是类似的，同时是分为以下几个步骤。

- **问题定义**：我们要解决的问题是什么？比如这里的视觉巡线，那就要识别线在图像中的位置。
- **数据准备**：针对要解决的问题，着手准备数据。比如要准备各种巡线场景的照片，给机器学习使用。
- **模型选择/开发**：模型就是处理数据的一套流程，也就是我们常听说的CNN卷积神经网络、GAN生成对抗网络、RNN循环神经网络等等。
- **模型训练与调优**：把数据放入模型中，训练得到最优化的参数，可以理解为是机器在学习的过程。
- **模型评估测试**：就像小测验一样，我们拿一些数据给训练好的模型，看下效果如何。
- **部署**：一切准备就绪之后，就可以把训练好的模型放到机器人上了，也就是正式把知识传授给某一个机器人，它就可以解决之前提出的问题啦。

大家可以根据OriginBot上的小车代码进行学习。



[![图片1](../assets/img/footer.png)](https://www.guyuehome.com/){:target="_blank"}