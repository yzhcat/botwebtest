# **Parking Spot Finding (AI Deep Learning)**

???+ hint
    The operating environment and software and hardware configurations are as follows:

     - OriginBot Pro
     - PC：Ubuntu (≥22.04) + ROS2 (≥humble) + pytorch + docker

>  This function is reprinted from the "Robotics Application Development",[click to view](https://developer.d-robotics.cc/rdk_doc/en/Robot_development/apps/parking_search){:target="_blank"}
>



## **Application Target**

We often see vehicles park autonomously and find their own parking spaces in parking garages. Can we implement this function on the OriginBot car? Of course, no problem. By using deep learning to train and collecting relevant images for training, we can build a simple application environment. Let's try it out.



## **Start the robot chassis**

After successfully connecting to OriginBot through SSH, enter the following command in the terminal to start the robot chassis:

```
ros2 launch originbot_bringup originbot.launch.py
```



## **Start the car parking space search function**


``` bash
# Copy the configuration files needed to run the example from the TogetheROS installation path
cp -r /opt/tros/lib/parking_perception/config/ .

# Start the launch file
ros2 launch parking_search parking_search.launch.py
```




## **Check the implementation effect**

When the OriginBot searches for progress in the driving area, the RDK board terminal outputs log information, in which the OriginBot is controlled to move forward at a speed of 0.1m/s

![cap1](../../assets/img/parking_search/cap1.gif)

When the OriginBot turns after discovering the parking space, it runs on the RDK board and outputs log information

![cap2](../../assets/img/parking_search/cap2.gif)

After determining the parking space, the OriginBot moves forward and finally stops when it runs at the end of the RDK board

![cap3](../../assets/img/parking_search/cap3.gif)



## **Introduction to the principle**

The principle here is similar to the previous AI deep learning training, and it is divided into the following steps.

- **Problem definition**：What is the problem we are trying to solve? For example, in the case of visual line patrol here, it is necessary to identify the position of the line in the image.
- **Data preparation**：Start preparing your data for the problem you want to solve. For example, you need to prepare photos of various line patrol scenes for machine learning.
- **Model selection/development**：A model is a set of processes for processing data, which is often referred to as CNN convolutional neural networks, GAN generative adversarial networks, RNN recurrent neural networks, and so on.
- **Model training and tuning**：Putting data into the model and training the optimal parameters can be understood as the process of machine learning.
- **Model evaluation test**：Just like a quiz, we take some data and give it to the trained model to see how it works.
- **Deployment**：After everything is ready, you can put the trained model on the robot, that is, officially transfer the knowledge to a certain robot, and it can solve the problem raised earlier.

You can learn according to the code on OriginBot.



[![图片1](../../assets/img/footer.png)](https://www.guyuehome.com/){:target="_blank"}