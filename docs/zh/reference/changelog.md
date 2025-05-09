# **OriginBot套件更新日志**

## **[v3.0.0] - 2024-09-18**

### 新增

- OriginBot 全系升级，增加Pro版本

- 新增[分割一切](../application/mobilesam.md){:target="_blank"}

### 优化

- 主控RDK X3升级为RDK X5；

- 三角测距雷达更换为TOF雷达；

- 雷达驱动板重新设计，支架驱动集成，电路增加开关按键；

- MIPI相机更换为USB相机，更兼顾兼容性；

- 电机升级为更高扭矩电机；

- IMU（惯性测量单元）集成至驱动器，数据融合优化；

- 驱动控制器升级电路，支持边冲边用；

- 电池容量升级至3000mA，续航增加至3-4小时；

- 亚克力万向轮升级为钣金万向轮；

## **[v2.1.0] - 2024-03-01**

### 新增

- 新增[车牌识别](../application/vlpr.md){:target="_blank"}

- 新增一键配置 Shell 脚本，以便携安装编译所需依赖

- 新增 rtab、Fortess等仿真插件/环境配置

### 优化

- 优化 OriginBot 仓库代码结构，清除文件及代码层级冗余内容，清除编译冗余信息

- 优化 OriginBot Controller 中存在的 PID 单位换算问题

- 优化 originbot_teleop 功能包，支持调速功能 

- 升级 TROS 版本至 v2.1.2

## **[v2.0.2] - 2023-11-24**

### 新增
- 新增[WebViz可视化](../manual/webviz.md){:target="_blank"}

### 优化
- 修复mipi_cam显示bgr数据不出来的BUG
- 升级tros为2.1.1版本
- 将版本号明确至镜像文件中

## **[v2.0.1] - 2023-10-24**

### 新增
- 新增[二维码识别与跟踪](../application/qrcode_detection.md){:target="_blank"}

### 优化
- 修复SLAM仿真建图使用DEB下载功能包名不一致造成启动失败的BUG
- 修复v2.0.0镜像键盘控制tros环境无法使用的BUG

## **[v2.0.0] - 2023-09-18**

### 新增
- 支持[NodeHub](https://developer.horizon.cc/nodehub){:target="_blank"}
- 新增originbot_example，用于存放ROS中常用到的示例，包括轨迹跟踪、获取指定帧nv12或bgr格式图像、键盘控制
- 新增gazebo环境下建图和导航案例

### 优化
- 处理器升级为[RDK X3](https://developer.horizon.cc/rdkx3){:target="_blank"}，兼容旭日X3派，增强网络性能
- 更新TogetheROS版本至v2.0.2，升级系统版本至ubuntu-preinstalled-server-arm64_v2.0版本   
- 优化低电压报警方式，可支持手机充电器（电压大于4.85v）给stm32供电继续使用小车
- 修复SLAM和导航无法多次运行的BUG
- 增强导航精度，优化控制器端电机初始化指向同一定时器问题
- 优化底盘驱动、巡线等程序，增加程序运行效率
- 优化人体跟踪、手势识别等程序，适配RDK X3

## **[v1.0.4] - 2023-04-17**

### 新增

- [FreeRTOS 微控制器实时操作系统](../manual/originbot_freertos.md){:target="_blank"}
- [图像压缩](../manual/camera_visualization.md){:target="_blank"}

### 优化

- 修复部分因系统更新造成的文档与功能不匹配问题

- 更新TogetheROS版本至 1.1.6 以及升级系统版本为 x3_ubuntu_v1.1.6

## **[v1.0.3] - 2023-02-23**

### 新增

- [语音控制](../application/audio_control.md){:target="_blank"}

### 优化

- 优化 OriginBot_app 编译问题

- 更新TogetheROS版本至1.1.5

## **[v1.0.2] - 2023-1-17**

### 新增

- [轨迹跟踪](../application/tracking.md){:target="_blank"}

- [双PID调节](../manual/parameter_config.md){:target="_blank"}

- [按键控制](../manual/teleoperation.md){:target="_blank"}

### 优化

- 修复导航时偶尔地图不出现的BUG

- 优化 OriginBot_app 编译问题

- 更新TogetheROS版本至1.1.3



## **[v1.0.1] - 2022-12-08**

### 新增

- [车位寻找](../application/parking_search.md){:target="_blank"}

- [踢球射门](../application/play_football.md){:target="_blank"}

- [EKF多传感器融合定位功能](../manual/ekf.md){:target="_blank"}

- [可视化上位机](../manual/hmi.md){:target="_blank"}

- [定点导航示例](../application/navigation.md#7){:target="_blank"}

### 优化

- 优化视觉巡线（AI深度学习）应用

- 优化imu、odom 、pid底层功能

- 更新TogetheROS版本至1.1.2



## **[v1.0.0] - 2022-10-09**

### 优化

- 优化网站内容，完成首发套件各项功能测试



## **[v0.6/v1.0-rc1] - 2022-9-23**

### 新增

- 新增originbot_demo文件夹，放置基础功能的编程示例



## **[v0.5] - 2022-9-20**
### 新增
- 新增[originbot_desktop](https://gitee.com/guyuehome/originbot_desktop){:target="_blank"}仓库，放置电脑端运行的功能包，避免机器人端的代码编译错误

### 优化
- 优化坐标系结构，新增base_footprint坐标系，保持与URDF模型一致
- 优化手柄遥控运动机器人功能
- 优化AI视觉跟踪应用的效果
- 优化AI视觉巡线功能，增加训练使用的数据集和训练好的模型
- 优化Ctrl+C关闭小车ROS驱动时，机器人自动停止运动
- [originbot_desktop](https://gitee.com/guyuehome/originbot_desktop){:target="_blank"}：优化上位机可视化显示过程，添加常用功能的rviz2配置脚本 




## **[v0.4] - 2022-9-3**

### 优化
- 修复机器人底盘use_imu参数没有调用的问题

- 调整人体跟踪与收拾识别的旋转速度

- 自动停车功能默认关闭

- 优化文件夹结构

- 删除电脑端运行使用的功能包，避免在机器人端编译出错

  


## **[v0.3] - 2022-8-31**
### 新增
- OriginBot的URDF可视化模型
- OriginBot仿真模型（模型简化，提高gazebo运行效率）
- OriginBot仿真环境、相机仿真、雷达仿真

### 优化
- 机器人各坐标系通过URDF进行描述：base_link、laser_link、imu_link、camera_link

- 删除暂时用不到的二位码识别包

  


## **[v0.2] - 2022-8-25**
### 新增
- 基于深度学习的视觉巡线功能

### 优化
- 不同传感器的启动脚本都集成在originbot.launch.py中，通过参数来设置

- 调试视觉巡线功能，基于HSV模型识别制定区域内的某种颜色中心，从而转化成控制指令

- 旭日派中ROS启动成功时，蜂鸣器响0.5s

  


## **[v0.1] - 2022-8-19**
### 新增
- 提供OriginBot核心功能的驱动节点
    - 支持旭日派与控制器之间的串口驱动
    - 支持里程计话题的发布与TF坐标系维护
    - 支持IMU话题的发布
    - 支持速度控制指令的订阅与运动控制，可选是否启动自动停车功能
- 提供OriginBot常用应用功能包
    - 支持Cartographer SLAM地图构建功能
    - 支持Navigation2定位与导航功能
    - 支持手势控制功能
    - 支持人体跟踪功能



[![图片1](../../assets/img/footer.png)](https://www.guyuehome.com/){:target="_blank"}

