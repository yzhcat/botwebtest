---
typora-copy-images-to: image\lidar_visualization
---

# **lidar drive and visualization**

???+ hint
    The operating environment and software and hardware configurations are as follows:
    

     - OriginBot Pro
     - PC：Ubuntu (≥22.04) + ROS2 (≥humble)



<!-- <iframe
  src="//player.bilibili.com/player.html?aid=516658213&bvid=BV1eg411a7A9&cid=866110216&page=13&autoplay=0"
  scrolling="no"
  border="0"
  width="800px"
  height="460px"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
>
</iframe> -->



## **lidar driven**

After successfully connecting to OriginBot through SSH, enter the following command in the terminal to start the robot chassis and radar driver:

```bash
ros2 launch originbot_bringup originbot.launch.py use_lidar:=true
```

![image-20220822150642309](../../assets/img/teleoperation/image-20220822150642309.png){.img-fluid tag=1 title="start the robot chassis and lidar drive"}



## **Data visualization**

On the PC side in the same network, start the visual display software of the upper computer:

```bash
ros2 launch originbot_viz display_lidar.launch.py
```

You will soon be able to see real-time radar data
![img](../../assets/img/lidar_visualization/Clip_2024-09-14_17-54-24.png){.img-fluid tag=1 title="Real-time data visualization of lidar"}



???+ hint
    Make sure that Ubuntu+ROS2 system has been installed on the PC, and the [originbot_desktop](https://github.com/guyuehome/originbot_desktop){:target="_blank"} code repository has been downloaded and compiled. In addition, you can also use "ros2 run rviz2 rviz2" to start Rivz2 separately, manually configure Fixed Frame to select base_link, add Laserscan, and subscribe to the radar topic to achieve a similar effect.



[![图片1](../../assets/img/footer_en.png)](https://www.guyuehome.com/){:target="_blank"}

