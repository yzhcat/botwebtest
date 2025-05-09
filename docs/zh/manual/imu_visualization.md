---
typora-copy-images-to: image/imu_visualization
---

# **IMU驱动与可视化**

???+ hint
    操作环境及软硬件配置如下：
    

     - OriginBot机器人（标准版/Pro 版）
     - PC：Ubuntu (≥22.04) + ROS2 (≥humble)



<iframe
  src="//player.bilibili.com/player.html?aid=516658213&bvid=BV1eg411a7A9&cid=866114680&page=14&autoplay=0"
  scrolling="no"
  border="0"
  width="800px"
  height="460px"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
>
</iframe>



## **IMU驱动**

SSH连接OriginBot成功后，在终端中输入如下指令，即可启动机器人底盘及IMU：

```bash
ros2 launch originbot_bringup originbot.launch.py use_imu:=true
```

![image-20220822150712051](../../assets/img/imu_visualization/image-20220822150712051.png){.img-fluid tag=1 title="启动机器人底盘及IMU"}



## **数据可视化**

在同一网络中的PC端，安装Rivz中的IMU插件：

```bash
sudo apt install ros-${ROS_DISTRO}-rviz-imu-plugin
```



然后启动上位机可视化软件：

```bash
ros2 launch originbot_viz display_imu.launch.py
```



即可看到可视化的IMU信息，此时摇动机器人，Rviz中的坐标系也会跟随运动。
![img](../../assets/img/imu_visualization/Clip_2024-09-14_17-59-47.png){.img-fluid tag=1 title="IMU的实时数据可视化"}

???+ hint
    确保在PC端已经安装好Ubuntu+ROS2系统，并且完成[originbot_desktop](https://gitee.com/guyuehome/originbot_desktop){:target="_blank"}代码仓库的下载和编译。此外，还可以使用“ros2 run rviz2 rviz2”单独启动Rivz2，手动配置Fixed Frame选择base_link，添加imu显示项之后，订阅imu话题，也可以达到类似的效果。



[![图片1](../../assets/img/footer.png)](https://www.guyuehome.com/){:target="_blank"}

