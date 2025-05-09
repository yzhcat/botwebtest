# **OriginBot suite changelog**

## **[v3.0.0] - 2024-09-18**

### New

- Upgraded the entire OriginBot series, adding the Pro version

- Added [Segment Everything](../application/mobilesam.md){:target="_blank"}

### Optimize

- Upgraded the main control from RDK X3 to RDK X5

- Replaced the triangulation radar with TOF radar

- Redesigned the radar driver board, integrated the bracket drive, and added a switch button to the circuit

- Replaced the MIPI camera with a USB camera for better compatibility

- Upgraded the motors to higher torque motors

- Integrated the IMU (Inertial Measurement Unit) into the driver, optimizing data fusion

- Upgraded the driver controller circuit to support charging while in use

- Upgraded the battery capacity to 3000mAh, increasing battery life to 3-4 hours

- Upgraded the acrylic omnidirectional wheel to a sheet metal omnidirectional wheel

## **[v2.1.0] - 2024-03-01**

### New

- Added [license plate recognition](../application/vlpr.md){:target="_blank"}

- Added one-click configuration of shell scripts to allow portable installation and compilation of dependencies

- Added simulation plug-ins/environment configurations such as rtab and Fortess

### Optimize

- Optimize the code structure of the OriginBot repository, clear redundant content at the file and code levels, and clear redundant compilation information

- Optimized the PID unit conversion issue in OriginBot Controller

- Optimized the originbot_teleop function package to support speed regulation 

- Upgrade the TROS version to v2.1.2

