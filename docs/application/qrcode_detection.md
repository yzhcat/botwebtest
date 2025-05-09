# **二维码识别与跟踪**

???+ hint
    操作环境及软硬件配置如下：

     - OriginBot机器人（Lite版/标准版/Pro版）
    
     - PC：Ubuntu (≥22.04) + ROS2 (≥humble)


在日常生活中，我们每天接触最多的图像识别场景是什么？扫码一定是其中之一。

微信登录要扫二维码，手机支付要扫二维码，共享单车也要扫二维码，除了这些在日常生活中已经非常普及的扫码场景，二维码在工业生产中也已经普遍应用，比如使用二维码标记物料型号，或者在二维码中保存产品的生产信息，只要通过相机一扫，很快就可以看到对应的内容。

二维码的编码方式有很多种，常见的是QR Code，主要用在移动设备上。

既然二维码可以保存很多信息，那是不是也可以和机器人结合一下，比如当机器人识别到不同二维码时，对应做出不同的动作？

接下来我们就尝试下让机器人识别二维码，并且跟随二维码运动。

## **二维码识别**

SSH连接OriginBot成功后，在终端中输入如下指令，启动二维码识别功能：

```bash
ros2 launch qr_code_detection qr_code_detection.launch.py
```
![二维码识别命令](../assets/img/qrcode_detection/二维码识别命令.png)

### **WEB端查看例程效果**

运行成功后，在同一网络的PC端，打开浏览器，输入 http://IP:8000 ，选择“web展示端”，即可查看图像和算法效果，IP为OriginBot的IP地址。

![二维码识别效果](../assets/img/qrcode_detection/二维码识别效果.png)

## **二维码跟踪**

### **启动底盘**

SSH连接OriginBot成功后，在终端中输入如下指令，启动机器人底盘：

```bash
ros2 launch originbot_bringup originbot.launch.py
```

![底盘命令](../assets/img/qrcode_detection/底盘命令.png)

### **启动二维码控制节点**

SSH连接OriginBot，在二维码识别节点启动之后，在终端中输入如下指令，启动二维码控制节点：

```bash
ros2 run qr_code_control qr_code_control_node
```

### **二维码控制**

默认识别二维码内容 Front,、Back、 Left、 Right 对小车控制，可以使用以下二维码 对小车控制

| ![F](../assets/img/qrcode_detection/F.png) | ![B](../assets/img/qrcode_detection/B.png) |
| ---------------------------------- | ---------------------------------- |
| ![L](../assets/img/qrcode_detection/L.png) | ![R](../assets/img/qrcode_detection/R.png) |



![二维码控制效果](../assets/img/qrcode_detection/二维码控制效果.png)

### **查看控制模式**

也可以识别二维码的相对位置实现对二维码的跟踪

在终端中输入如下指令，查看控制模式：

```bash
ros2 param get /qrcode_control control_with_qrcode_info
# False 不识二维码内容，只跟随二维码位置运动
# True  识别二维码内容，根据二维码内容执行命令
```

![查看控制模式](../assets/img/qrcode_detection/查看控制模式.png)

### **修改控制模式**

在终端中输入如下指令，修改控制模式：

```bash
ros2 param set /qrcode_control control_with_qrcode_info False
```

![修改控制模式](../assets/img/qrcode_detection/修改控制模式.png)

此时会识别二维码的相对位置发送速度

![二维码跟随效果](../assets/img/qrcode_detection/二维码跟随效果.png)

 可以在文件 qr_code_control_node.py 中调整移动速度
 ![调整速度代码](../assets/img/qrcode_detection/调整速度代码.png)



[![图片1](../assets/img/footer.png)](https://www.guyuehome.com/){:target="_blank"}
