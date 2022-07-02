function 巡线到0111 () {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_13))) {
        PlanetX_Basic.Trackbit_get_state_value()
        巡线()
    }
    前进(250)
}
function 巡线到1111 () {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5))) {
        PlanetX_Basic.Trackbit_get_state_value()
        巡线()
    }
    前进(250)
}
function 直走巡到黑线 () {
    前进(0)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) || PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
    }
}
function 右转 (数字: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 30)
    neZha.setMotorSpeed(neZha.MotorList.M2, -30)
    basic.pause(数字)
}
function 手动阶段 () {
    while (true) {
        if (手动阶段小车动作 == 5) {
            前进(1)
        }
        if (手动阶段小车动作 == 6) {
            后退(1)
        }
        if (手动阶段小车动作 == 7) {
            左转(1)
        }
        if (手动阶段小车动作 == 8) {
            右转(1)
        }
    }
}
function 左转 (数字: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, -30)
    neZha.setMotorSpeed(neZha.MotorList.M2, 30)
    basic.pause(数字)
}
function 计时巡线 (数字: number) {
    初始运行时间 = input.runningTime()
    while (!(巡线时长 > 数字)) {
        巡线时长 = input.runningTime() - 初始运行时间
        巡线()
    }
}
input.onButtonPressed(Button.A, function () {
    计数 += 1
    if (计数 > 3) {
        计数 = 3
    }
    if (计数 == 1) {
        basic.showNumber(1)
    }
    if (计数 == 2) {
        basic.showNumber(2)
    }
    if (计数 == 3) {
        basic.showNumber(3)
    }
})
function 巡线 () {
    PlanetX_Basic.Trackbit_get_state_value()
    if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 40)
        neZha.setMotorSpeed(neZha.MotorList.M2, 50)
    }
    if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_3) || PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_11)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, 10)
    }
    if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_2) || PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_14)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 10)
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    }
    if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_8)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, 5)
    }
    if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_12)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 5)
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    }
}
function 左转巡到黑线 () {
    左转(300)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) || PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
    }
}
function 后退 (数字: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, -50)
    neZha.setMotorSpeed(neZha.MotorList.M2, -50)
    basic.pause(数字)
}
function 左转巡到黑线2 () {
    左转(300)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
    }
}
function 前进 (数字: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 40)
    neZha.setMotorSpeed(neZha.MotorList.M2, 50)
    basic.pause(数字)
}
// 一个或多个任务的机器人程序
function 阶段1 () {
    巡线到1111()
    电机停止(1)
    左转巡到黑线()
    后退(1)
    巡线到1111()
    右转巡到黑线()
    巡线到1110()
    右转巡到黑线()
    巡线到1111()
}
function 右转巡到黑线2 () {
    右转(200)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
    }
}
function 右转巡到黑线 () {
    右转(200)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) || PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
    }
}
input.onButtonPressed(Button.B, function () {
    启动 = true
    if (计数 == 0) {
        basic.showNumber(0)
        neZha.stopAllMotor()
    }
    if (计数 == 1) {
        basic.showNumber(1)
        阶段1()
    }
    if (计数 == 2) {
        basic.showNumber(2)
        阶段2()
    }
    if (计数 == 3) {
        basic.showNumber(3)
        手动阶段()
    }
})
// 一个或多个任务的机器人程序
function 阶段2 () {
    左转(1)
}
radio.onReceivedValue(function (name, value) {
    if (name == "YLJY" && value == 1) {
        二维码状态 = 1
    }
    if (name == "YLJY" && value == 2) {
        二维码状态 = 2
    }
    if (name == "YLJY" && value == 3) {
        二维码状态 = 3
    }
    if (name == "YLJY" && value == 4) {
        二维码状态 = 4
    }
    if (name == "YLJY" && value == 5) {
        手动阶段小车动作 = 5
    }
    if (name == "YLJY" && value == 6) {
        手动阶段小车动作 = 6
    }
    if (name == "YLJY" && value == 7) {
        手动阶段小车动作 = 7
    }
    if (name == "YLJY" && value == 8) {
        手动阶段小车动作 = 8
    }
})
function 选充能区 () {
    // 充能区A
    if (二维码状态 == 1) {
        前进(500)
        右转(600)
        前进(500)
        basic.showIcon(IconNames.Heart)
    }
    // 充能区B
    if (二维码状态 == 2) {
        后退(600)
        右转(600)
        前进(500)
        basic.showIcon(IconNames.Heart)
    }
    // 充能区C
    if (二维码状态 == 2) {
        前进(500)
        左转(600)
        前进(500)
        basic.showIcon(IconNames.Heart)
    }
    // 充能区D
    if (二维码状态 == 2) {
        后退(600)
        左转(600)
        前进(500)
        basic.showIcon(IconNames.Heart)
    }
}
function 电机停止 (数字: number) {
    neZha.stopAllMotor()
    basic.pause(数字)
}
function 巡线到0000 () {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_0))) {
        PlanetX_Basic.Trackbit_get_state_value()
        巡线()
    }
    前进(250)
}
function 巡线到1110 () {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_9))) {
        PlanetX_Basic.Trackbit_get_state_value()
        巡线()
    }
    前进(250)
}
let 二维码状态 = 0
let 巡线时长 = 0
let 初始运行时间 = 0
let 手动阶段小车动作 = 0
let 启动 = false
let 计数 = 0
// 无线组听从比赛现场安排而设定
radio.setGroup(99)
basic.clearScreen()
计数 = 0
basic.showNumber(计数)
启动 = false
PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
