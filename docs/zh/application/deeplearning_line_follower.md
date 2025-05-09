---
typora-copy-images-to: image/deeplearning_line_follower
---

# **视觉巡线（AI深度学习）**

???+ hint
    操作环境及软硬件配置如下：

     - OriginBot机器人（Lite版/标准版）
     - PC：Ubuntu (≥22.04) + ROS2 (≥humble) + pytorch + docker
     - 巡线场景：黑色路径线，背景有明显反差
     - RDK X3 请参考[视觉巡线(AI深度学习)_x3](./deeplearning_line_follower_x3.md)


## **应用目标**

在[视觉巡线（OpenCV）](../application/cv_line_follower.md){:target="_blank"}中，我们已经可以让小车跟随黑色的路径线运动，实现了最基础的视觉巡线任务，不过大家可能已经发现，基于OpenCV的图像识别受光线影响较大，更换场地后，就需要重新调整阈值，有没有可能让机器人自主适应环境的变化呢？也就是让机器人自己来学习。

![deeplearning_follow_line](../../assets/img/deeplearning_line_follower/deeplearning_follow_line.gif)

没问题，深度学习大家一定都听说过，使用这种方法，我们就可以实现数据驱动化的视觉巡线效果，需要适应什么样的场地，只需要采集一些图片数据，就可以啦，接下来我们就来尝试一下。


## **运行方法**

### **场景说明**

在OriginBot的应用代码中，我们已经为大家训练好了一套巡线的模型，使用的场景如下：

![0d09ef8f7eaeb842f4a4b6d67c2d07f](../../assets/img/deeplearning_line_follower/0d09ef8f7eaeb842f4a4b6d67c2d07f.jpg){.img-fluid tag=1}


如果大家身边也有类似的环境，可以暂时跳过以上提到的机器学习步骤，直接进入部署环节，我们先来试一试使用深度学习的视觉巡线效果如何吧。


### **启动视觉巡线**

先将OriginBot放置到巡线的场景中，尽量向下调节相机角度，避免外界干扰。

![e15c780e42a2fc9bb4895f6425a9275](../../assets/img/deeplearning_line_follower/e15c780e42a2fc9bb4895f6425a9275.jpg){.img-fluid tag=1}


接下来启动巡线功能，注意命令后需要跟模型路径和名称的参数：

```bash

cd /userdata/dev_ws/src/originbot/originbot_deeplearning/line_follower_perception/
ros2 run line_follower_perception line_follower_perception --ros-args -p model_path:=model/resnet18_224x224_nv12.bin -p model_name:=resnet18_224x224_nv12
```
![e15c780e42a2fc9bb4895f6425a9275](../../assets/img/deeplearning_line_follower/2022-09-15_21-28.png){.img-fluid tag=1}



### **启动机器人**

SSH连接OriginBot成功后，在终端中输入如下指令，启动机器人底盘和相机：

``` bash
ros2 launch line_follower_perception usb_cam_web.launch.py
ros2 launch originbot_bringup originbot.launch.py
```

相机启动成功后，就可以在巡线终端中看到动态识别的路径线位置了：

![image-20220822151357113](../../assets/img/deeplearning_line_follower/2022-09-15_21-30.png){.img-fluid tag=1}



运行后稍等片刻，就可以看到机器人开始巡线运动啦。

![deeplearning_follow_line](../../assets/img/deeplearning_line_follower/deeplearning_follow_line.gif)


深度学习是基于数据的，机器人在数据中见过的场景，才能学会，如果没见过的，识别效果就不太好了，所以如果大家使用巡线颜色、周边环境差别较大，还是需要尽量多采集一些数据，让机器人都可以学会，完整的深度学习流程可以参考如下内容。


## **原理简介**

巡线任务对引导线位置的感知其实就是对引导线特征的感知，光电传感器利用反射光的差异来检测线的位置，不同颜色的表面反射率不同，比如白色反射率高，黑色吸收光，所以接收到的信号强度不同。传统图像处理方法是基于图像的像素值来提取特征，而深度学习则通过神经网络自动学习图像特征，并返回特征在图像中的位置。

![巡线流程](../../assets/img/deeplearning_line_follower/line_flow.png)

深度学习的在巡线任务中就是一个强大的特征匹配器，它能够从图像中提取出引导线特征，并返回引导线在图像中的位置。只需要准备一定数量的标注数据，训练一个深度学习模型，就可以实现引导线位置感知，不需要人为调整阈值。

### **深度学习流程**

相比传统图像处理，深度学习能够让机器视觉适应更多的变化，从而提高复杂环境下的精确程度。在正式开始之前，我们先简单介绍下深度学习的基本流程。

![image-20220915112906511](../../assets/img/deeplearning_line_follower/image-20220915112906511.png){.img-fluid tag=1}

机器学习的核心目的是要帮助我们解决问题，可以分为六个主要步骤：

- **问题定义**：我们要解决的问题是什么？比如这里的视觉巡线，那就要识别线在图像中的位置。
- **数据准备**：针对要解决的问题，着手准备数据。比如要准备各种巡线场景的照片，给机器学习使用。
- **模型选择/开发**：模型就是处理数据的一套流程，也就是我们常听说的CNN卷积神经网络、GAN生成对抗网络、RNN循环神经网络等等。
- **模型训练与调优**：把数据放入模型中，训练得到最优化的参数，可以理解为是机器在学习的过程。
- **模型评估测试**：就像小测验一样，我们拿一些数据给训练好的模型，看下效果如何。
- **部署**：一切准备就绪之后，就可以把训练好的模型放到机器人上了，也就是正式把知识传授给某一个机器人，它就可以解决之前提出的问题啦。



### **视觉巡线流程**

![deeplearning_struct](../../assets/img/deeplearning_line_follower/deeplearning_struct.jpg){.img-fluid tag=1}

OriginBot具有两个主动轮，一个从动轮，通过两个主动轮差速进行旋转控制。其中MCU模块主要用于小车的电机运动控制通过串口与主控RDK X5进行通信。主控制器选用地瓜RDK X5，具备10T算力，能够轻松处理复杂的CNN推理工作。

整套系统如上图所示，RDK X5通过摄像头获取小车前方环境数据，图像数据通过训练好的CNN模型进行推理得到引导线的坐标值，然后依据一定的控制策略计算小车的运动方式，通过UART向小车下发运动控制指令实现整个系统的闭环控制。

PC用于进行数据标注以及训练。


### **标注与训练**

ResNet18是一种18层深度的残差卷积神经网络，深度学习领域中最经典的网络之一，尤其在图像分类任务上表现优异。它通过 残差连接 解决了梯度消失问题，使得更深的神经网络能够被成功训练。在D-Robotics RDK上ResNet18推理性能高达232FPS，保证了数据处理的实时性。

ResNet18输入分辨率为224x224，因此训练时传入的图像尺寸要变换到224x224

![图像裁剪](../../assets/img/deeplearning_line_follower/img_cut.png)

巡线场景中，对于画面中更关注的可能是图像下半部分，所以标注时可以同步裁剪掉不需要的部分，把行高裁剪为224。

对于宽度可以采用缩放，USB相机采集的图像尺寸是640x480,训练时会把宽度从640缩放到224，这一步通常不会修改原始数据集文件，而是读取时完成缩放

![数据标注、模型训练](../../assets/img/deeplearning_line_follower/imgdata_tran.png)

总结流程，USB 相机采集一系列640x480带引导线的图像；标注程序读取一张图裁剪部分区域得到640x224的图像，鼠标点击引导线位置完成标注；得到的数据集传入ResNet18前缩放标注的坐标和图像到224x224开始训练，生成模型文件。

### **板端部署使用**

pytorch训练得到的浮点模型.pth，如果直接运行在D-Robotics RDK上效率会很低，为了提高运行效率，发挥BPU的10T算力，这里需要进行浮点模型转定点模型操作。训练后的模型先转为.onnx(**Open Neural Network Exchange**)——一个开放格式，用于表示深度学习模型，让不同框架之间的模型可以互相转换和使用。通过算法工具链OE包生成可以在D-Robotics RDK BPU上运行的定点模型.bin

在板端载入模型文件，并实时采集图像，裁剪、缩放处理后输入到ResNet网络，得到图像中引导线的位置。

![巡线流程](../../assets/img/deeplearning_line_follower/dlf.png)

但是此时得到的坐标是基于224x224的，所以要把坐标恢复成640x480；横坐标x*(640/224)，纵坐标y+裁剪掉的高度。之后就可以根据引导线的位置实现控制，引导线在左，小车也跟着往左转，引导线在右，小车跟着往右转。


## **AI深度学习**

![deeplearning_flow](../../assets/img/deeplearning_line_follower/deeplearning_flow.jpg){.img-fluid tag=1}

接下来的深度学习操作主要分为以上几个步骤，在操作之前，还需要完成PC端环境的配置，我们一起来体验下深度学习吧。



### **PC端环境配置**

PC端的基础环境是Ubuntu+ROS+pytorch+docker，请大家先按照[电脑端环境配置](../guide/pc_config.md){:target="_blank"}完成Ubuntu、ROS、OriginBot功能包的配置。



#### **安装pytorch**

训练框架选用pytorch，大家可以在PC端的Ubuntu系统中，直接使用如下命令进行安装：

``` bash
# 创建独立环境
python3 -m venv ~/.pytorch_venv
source ~/.pytorch_venv/bin/activate
# 安装 pytorch
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu
# 安装opencv
pip3 install opencv-python
```

???+ hint
    为了系统环境保持纯净，为pytorch创建独立环境，激活环境激活环境使用`source ~/.pytorch_venv/bin/activate`，取消激活使用`deactivate`命令
    为了保证通用性，这里安装的是CPU版本的pytorch，若硬件上有GPU，也可选用GPU版本pytorch，训练速度更快。



#### **安装Docker**

后续模型转换需要用到Docker，以节省环境配置的时间，需要大家先进行安装，并下载模型转换使用的镜像。



ubuntu环境下docker的安装可以参考如下网站或网上资料完成：

[Ubuntu Docker 安装](https://www.runoob.com/docker/ubuntu-docker-install.html){:target="_blank"}



安装完成后，就可以通过如下命令，下载后续模型转换的工具链和docker镜像啦。

- OE开发包 (1.28GB)     
horizon_x5_open_explorer_v1.2.6-py310_20240724.tar.gz
```bash
wget -c ftp://x5ftp@vrftp.horizon.ai/OpenExplorer/v1.2.6_release/horizon_x5_open_explorer_v1.2.6-py310_20240724.tar.gz --ftp-password=x5ftp@123$%
```

- Ubuntu20.04 CPU Docker镜像 (1.65GB)       
docker_openexplorer_ubuntu_20_x5_cpu_v1.2.8.tar.gz
```bash
wget -c ftp://x5ftp@vrftp.horizon.ai/OpenExplorer/v1.2.8_release/docker_openexplorer_ubuntu_20_x5_cpu_v1.2.8.tar.gz --ftp-password=x5ftp@123$%
```

???+ hint
    以上docker镜像的体积较大，请保证网络通畅，耐心等待。



#### **相关功能包介绍**

在深度学习的整个流程中，我们将用到三个直接相关的功能包/文件夹：

- **10_model_convert**：用来存放浮点模型转定点模型相关代码和配置，该文件夹内容全部需要在AI工具链docker中运行；

- **line_follower_model**：用来存放模型训练相关内容，如数据标注、模型训练、以及生成onnx模型，该文件夹内容全部在PC上运行；

- **line_follower_perception**：用来存放巡线程序的代码，可以在板端编译生成RDK上运行的package。


代码仓库在[https://github.com/D-Robotics/line_follower.git](https://github.com/D-Robotics/line_follower.git)，可以使用以下命令获取代码
``` bash
mkdir -p ~/line_follower_ws/src
cd ~/line_follower_ws/src/
git clone https://gitee.com/yzhcat/line_follower.git -b feature-x5-usb_cam
```

环境准备好之后，我们就可以着手开始啦。



### **数据采集与标注**

数据是深度学习的基础，我们先要完成数据的采集和标注，获取OriginBot机器人端的实时图像，可以在PC端采集的同时完成标注，也可以采集一定数量图片后再完成标注，主要流程如下：

![data_flow](../../assets/img/deeplearning_line_follower/data_flow.jpg){.img-fluid tag=1}

（1）启动OriginBot相机，采集巡线场景的图像，发布图像话题image_raw；

（2）PC端订阅OriginBot发布的图像话题，获取图像数据；

（3）PC端对图像进行剪裁，并且人工完成每一幅图像中路径线的标注；

（4）保存标注结果和对应的图像。



#### **启动OriginBot相机**

SSH连接OriginBot成功后，在终端中输入如下指令，启动OriginBot的相机：

```bash
ros2 launch hobot_usb_cam hobot_usb_cam_websocket.launch.py
```

使用浏览器，输入[http://IP:8000](http://ip:8000/)，即可查看图像（IP为设备IP地址）。

> 网线IP 192.168.127.10     
> 其他方法连接可以使用`ifconfig`或者` ip addr |grep global` 命令查看ip

???+ hint
    数据采集过程可以人为摆放机器人的姿态，不启动机器人底盘，单独启动相机即可。



#### **启动数据采集与标注程序**

=== "实时采集标注"

    在PC端，通过如下指令，启动line_follower_model包中的数据采集标注程序，

    ```bash
    cd ~/line_follower_ws/
    colcon build --symlink-install --packages-select line_follower_model
    source install/setup.bash
    ros2 run line_follower_model annotation
    ```
    ???+ hint
        - 此程序会订阅 /image 话题的 sensor_msgs/Image 类型图像
        - 如果提示未找到cv-bridge，可以尝试以下命令安装
        sudo apt install ros-$ROS_DISTRO-cv-bridge

=== "采集后标注"
    使用 MobaXterm SSH连接OriginBot成功后，在终端中输入如下指令，保存图像
    ``` bash
    # 安装image_view
    sudo apt install ros-humble-image-view
    # 创建文件夹
    mkdir input_images && cd input_images
    # 运行 image_view
    ros2 run image_view image_view
    ```
    > image_view 使用鼠标右键保存图像，保存的路径在当前目录下 可以使用`pwd`命令查看当前所在的目录
    
    ![image_view](../../assets/img/deeplearning_line_follower/image_view_save.png)

    ![mobaxterm 导出文件](../../assets/img/deeplearning_line_follower/mobaxterm_out_file.png)

    导出采集图像到PC端，然后复制到 `~/line_follower_ws` 目录
    通过如下指令，启动line_follower_model包中的数据采集标注程序，   
    图像数据文件夹名称为input_images，运行标注脚本。

    ```bash
    cd ~/line_follower_ws/
    source install/setup.bash
    ros2 run line_follower_model pic_annotation
    ```
    ![pic_annotation_member](../../assets/img/deeplearning_line_follower/pic_annotation_member.png)
    ???+ hint
        标注脚本不依赖 ros 环境,可以把标注脚本和图像数据放到同一目录，通过python直接启动 `python3 pic_annotation_member.py`
        标注脚本在`~/line_follower_ws/src/line_follower/line_follower_model/line_follower_model/`




#### **数据采集与标注**

启动成功后，按下键盘上回车键，程序会获取下一张图像，剪裁后通过一个可视化窗口显示出来，数据采集成功：

![8057f0fb-9925-4b20-b12c-64574956e92a](../../assets/img/deeplearning_line_follower/2022-09-15_21-47.png){.img-fluid tag=1}



用鼠标左键点击画面垂直方向上路径线的中心处，即完成该帧图像数据的标注：

![87b8418b-cbc0-48c9-ba0f-3187e364bc64](../../assets/img/deeplearning_line_follower/2022-09-15_21-47_1.png){.img-fluid tag=1}



按下回车键，程序自动保存该图片至当前路径下的image_dataset文件夹中，并且保存标记结果。图片命名方式为：

> xy_[x坐标]_[y坐标]_[uuid].jpg

其中uuid为图片唯一标志符，避免出现文件名称相同。

???+ hint
    若点击不准确可以多次鼠标左键点击，直到满意为止。如果没有点击标注，回车后会跳过该帧图像，不会放入数据集。


![20220915183911](../../assets/img/deeplearning_line_follower/20220915183911.jpg){.img-fluid tag=1}

不断调整机器人的在场景中的位置，考虑各种可能出现的图像效果，循环完成以上数据采集和标注过程，采集足够数量的数据，建议至少100张，用于后续模型训练。当环境或者场地变化时也可采集对应的图片一起训练提高模型的适应性。

![image](../../assets/img/deeplearning_line_follower/2022-09-15_22-19.png){.img-fluid tag=1}


### **模型训练**

#### **模型选择**

卷积神经网络（Convolutional Neural Network, CNN）是一种目前广泛用于图像，自然语言处理等领域的深度神经网络模型。1998 年，Lecun 等人提出了一种基于梯度的反向传播算法用于文档的识别。在这个神经网络中，卷积层 (Convolutional Layer) 扮演着至关重要的角色。随着运算能力的不断增强，一些大型的 CNN 网络开始在图像领域中展现出巨大的优势，2012 年Krizhevsky等人提出了AlexNet网络结构，并在ImageNet图像分类竞赛中以超过之前11%的优势取得了冠军。随后不同的学者提出了一系列的网络结构并不断刷新ImageNet的成绩，其中比较经典的网络包括：VGG(Visual Geometry Group) ，GoogLeNet和ResNet。卷积神经网络由输入层、卷积层、池化层、全连接层以及输出层组成，其结构如下：

![fc0d7f6e-2c26-42df-bbbf-9a1ac02c47b5](../../assets/img/deeplearning_line_follower/fc0d7f6e-2c26-42df-bbbf-9a1ac02c47b5.png){.img-fluid tag=1}



综合考虑模型成熟度、训练模型对CPU/GPU的硬件要求，这里选择ResNet网络作为backbone。残差神经网络（ResNet）是由微软研究院的何恺明、张祥雨、任少卿、孙剑等人提出，在2015 年的ILSVRC（ImageNet Large Scale Visual Recognition Challenge）中取得了冠军。ResNet巧妙地利用了shortcut连接，解决了深度网络中模型退化的问题，是当前应用最为广泛的CNN特征提取网络之一。ResNet18结构如下：

![8f27f7d6-97a3-4b9d-bff7-bf2d7652d2bf](../../assets/img/deeplearning_line_follower/8f27f7d6-97a3-4b9d-bff7-bf2d7652d2bf.png){.img-fluid tag=1}

在RDK X3上ResNet18推理性能高达232FPS，ResNet50推理性能也超过100FPS，高帧率保证了数据处理的实时性，是后续提高车速以及实现更复杂应用的必要条件。这里先使用ResNet18网络结构，后期遇到瓶颈考虑更深的ResNet50网络结构。为了满足输出引导线坐标值x，y这里需要修改ResNet18网络FC输出为2，即直接输出引导线的x，y坐标值。ResNet18输入分辨率为224x224。



#### **模型训练**

以上提到的模型可以直接复用pytorch中的定义，数据集的切分和模型的训练，都封装在line_follower_model功能包的代码中。

![model_traning](../../assets/img/deeplearning_line_follower/model_traning.jpg){.img-fluid tag=1}



直接在PC端，激活 pytorch 环境运行如下指令，即可开始训练：

激活 pytorch 环境
```bash
source ~/.pytorch_venv/bin/activate
export PYTHONPATH=$PYTHONPATH:$(python -c "import sys; print(':'.join(sys.path))")
```

运行训练脚本
```bash
cd ~/line_follower_ws/
source install/setup.bash
ros2 run line_follower_model training
```

![model_traning](../../assets/img/deeplearning_line_follower/2022-09-15_17-33.png){.img-fluid tag=1}


模型训练过程需要一段时间，预计在30分钟左右，请大家耐心等待。


训练完成后，会产生模型文件.pth。
![model_traning](../../assets/img/deeplearning_line_follower/model_tran.png)

???+ hint
    训练脚本不依赖 ros 环境,可以把训练脚本和图像数据放到同一目录，激活 pytorch 环境后通过python直接启动 `python3 training_member_function.py`
    训练脚本在`~/line_follower_ws/src/line_follower/line_follower_model/line_follower_model/`


### **模型转换**

pytorch训练得到的浮点模型如果直接运行在RDK上效率会很低，为了提高运行效率，发挥BPU的10T算力，这里需要进行浮点模型转定点模型操作。

![model_transform](../../assets/img/deeplearning_line_follower/model_transform.jpg){.img-fluid tag=1}



#### **生成onnx模型**

在PC端，通过如下命令，使用generate_onnx将之前训练好的模型，转换成onnx模型：

激活 pytorch 环境
```bash
source ~/.pytorch_venv/bin/activate
export PYTHONPATH=$PYTHONPATH:$(python -c "import sys; print(':'.join(sys.path))")
```

运行转换脚本
```bash
cd ~/line_follower_ws/
source install/setup.bash
ros2 run line_follower_model generate_onnx
```

运行后在当前目录下得到生成的best_line_follower_model_xy.onnx模型。
![model_transform](../../assets/img/deeplearning_line_follower/model_onnx.png)

???+ hint
    转换脚本不依赖 ros 环境,可以把转换脚本和.pth文件放到同一目录，激活 pytorch 环境后通过python直接启动 `python3 generate_onnx_member_function.py`
    转换脚本在`~/line_follower_ws/src/line_follower/line_follower_model/line_follower_model/`

#### **启动AI工具链docker**
将离线镜像加载到本地。
```bash
sudo docker load -i docker_openexplorer_xxx.tar.gz
sudo docker image ls
```
![docker_images](../../assets/img/deeplearning_line_follower/docker_images.png)

解压 OE 开发包 horizon_x5_open_explorer_v1.2.8-py310_20240926.tar.gz

```bash
tar -xzvf horizon_x5_open_explorer_v1.2.6-py310_20240724.tar.gz
cd horizon_x5_open_explorer_v1.2.6-py310_20240724/
```

修改run_docker.sh，开头中找到 version=v1.2.6 替换为 version=v1.2.6-py10

![修改run_docker](../../assets/img/deeplearning_line_follower/run_docker.png)

配置10_model_convert文件夹  
打开/10_model_convert文件夹,把图片数据image_dataset和转换后的best_line_follower_model_xy.onnx模型文件放到10_model_convert/mapper文件夹

![10_model_convert](../../assets/img/deeplearning_line_follower/10_model_convert.png)

复制10_model_convert文件夹到samples/ai_toolchain/horizon_model_convert_sample/03_classification/目录下。
![image](../../assets/img/deeplearning_line_follower/2022-09-15_17-23.png){.img-fluid tag=1}

然后回到OE包的根目录下，加载AI工具链的docker镜像：

启动 Docker

```bash
sudo bash run_docker.sh ./data/ cpu
```

![enter_docker](../../assets/img/deeplearning_line_follower/enter_docker.png){.img-fluid tag=1}

进入到10_model_convert

```bash
cd samples/ai_toolchain/horizon_model_convert_sample/03_classification/10_model_convert/mapper
```

???+ hint
    如果提示Unable to find image 'openexplorer/ai_toolchain_ubuntu_20_x5_cpu:v1.2.6' locally
    通过 `docker image ls` 命令查看ai_toolchain_ubuntu_20_x5_cpu的TAG是否是v1.2.6-py10
    在run_docker.sh开头中找到 version=v1.2.6 替换为 version=v1.2.6-py10



#### **生成校准数据**

该步骤生成的校准数据主要供下一步模型编译进行校准用，可以使用训练模型的部分数据，没有特殊要求，只要确保标准正确即可，数量以100张左右为宜，上一步我们已经将数据集拷贝完成。

在启动的Docker镜像中，完成如下操作：

```bash
bash 02_preprocess.sh
```
![image](../../assets/img/deeplearning_line_follower/02_preprocess.png){.img-fluid tag=1}


#### **模型编译生成定点模型**

该步骤将生成定点模型文件，用于后续在机器人上的部署：

```bash
bash 03_build.sh
```

![image](../../assets/img/deeplearning_line_follower/2022-09-16_17-25.png){.img-fluid tag=1}

编译成功后，会在10_model_output路径下生成最终的模型文件。
![image](../../assets/img/deeplearning_line_follower/2022-09-16_17-27.png){.img-fluid tag=1}



我们可以右键拷贝模型文件，放到line_follower_model功能包里，以备后续部署使用。
![image](../../assets/img/deeplearning_line_follower/2022-09-15_18-15.png){.img-fluid tag=1}



### **模型部署**

通过前面模型转换已经得到可以在RDK BPU上运行的定点模型，如何将其部署在RDK 上，实现图像获取、模型推理、运动控制整套功能呢？这里基于TogetheROS中的Hobot DNN实现。Hobot DNN是TogetheROS软件栈中的板端算法推理框架，在地瓜RDK上利用BPU处理器实现AI推理功能，为机器人应用开发提供更简单易用的模型集成开发接口，包括模型管理、基于模型描述的输入处理及结果解析，以及模型输出内存分配管理等功能。



#### **模型部署**

将编译生成的定点模型resnet18_224x224_nv12.bin，拷贝到OriginBot端line_follower_perception功能包下的model文件夹中，替换原有的模型，并且重新编译工作空间。



编译完成后，就可以通过如下命令部署模型，其中参数model_path和model_name指定模型的路径和名称：

```bash
cd /userdata/dev_ws/src/originbot/originbot_deeplearning/line_follower_perception/
ros2 run line_follower_perception line_follower_perception --ros-args -p model_path:=model/resnet18_224x224_nv12.bin -p model_name:=resnet18_224x224_nv12
```
![run_line_follower](../../assets/img/deeplearning_line_follower/run_line_follower.png){.img-fluid tag=1}



#### **启动相机**

先将OriginBot放置到巡线的场景中。



通过如下命令，启动摄像头驱动：

```bash
ros2 launch line_follower_perception usb_cam_web.launch.py
```

相机启动成功后，就可以在巡线终端中看到动态识别的路径线位置了：

![image-20220822151357113](../../assets/img/deeplearning_line_follower/2022-09-15_21-30.png){.img-fluid tag=1}



#### **启动机器人**

最后，再启动OriginBot底盘，机器人就可以自主寻线运动啦：

```bash
ros2 launch originbot_bringup originbot.launch.py
```


![deeplearning_follow_line](../../assets/img/deeplearning_line_follower/deeplearning_follow_line.gif)

???+ 参考链接
    - [深度学习巡线小车](https://developer.d-robotics.cc/rdk_doc/Application_case/line_follower)
    - [地瓜X5算法工具链](https://developer.d-robotics.cc/forumDetail/251934919646096384)


[![图片1](../../assets/img/footer.png)](https://www.guyuehome.com/){:target="_blank"}