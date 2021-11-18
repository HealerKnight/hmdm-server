if (! document.localization) document.localization = [];		
		
document.localization ['zh_CN'] = {
    'login.username' : "用户名或电子邮件",
    'login.username.placeholder':"输入您的用户名或电子邮件",
    'login.password' : "密码",
    'login.password.placeholder' : "输入密码",
    'login.submit' : "登录",
    'login.password.incorrect':"无效的用户名或密码",
		
    'header.label.username' : "用户名",
		
    'devices.group.options.all':"所有组合",
    'devices.configuration.options.all':"所有配置",
    'devices.permissions.all':"授予所有权限",
    'devices.permissions.not.as.device.admin' : "-该应用程式未以设备管理员身份安装",
    'devices.permissions.window.overlap.prohibited' : "-其他窗口上方的叠加层不可用",
    'devices.permissions.history.access.prohibited' : "-未配置对使用历史记录的访问",
    'devices.unknown' : "未知",
    'devices.model.unknown' : "未知",
    'devices.date.unknown' : "未知",
    'devices.date.format' : "dd / MM HH:mm",
    'devices.app.installed' : "- ${applicat:ionName}: 未安装.",
    'devices.app.not.installed' : "- ${applicationName}: 未安装.",
    'devices.app.version.available' : ",可用${applicationVersion}",
    'devices.app.installed.and.version.available' : "- ${applicationName}: 安装 ${applicationInstalledVersion}, 可用 ${applicationVersionAvailable}",
    'devices.app.needs.removal':"${applicationVersion}，需要删除",
    'devices.no.data':"设备尚未传输数据",
    'devices.settings.conformance.broken' : "与设置不匹配: (${serverData})",
    'devices.file.installed' : "- ${file}: 已安装",
    'devices.file.not.installed' : "- ${file} 未安装.",
    'devices.file.lastUpdate.differs' : "- ${file}: 修改时间差 ${diff} 分钟",
		
    'button.apply' : "套用",
    'button.gps.on':"启用GPS",
    'button.wifi.on':"启用Wi-Fi",
    'button.notify.update':"更新通知",
    'button.app.settings' : "应用程式设置",
    'button.ok' : "OK",
    'button.help' : "查询",
    'button.new.app':"新增应用程式",
    'button.new.app.version' : "新版本",
    'button.upgrade' : "升级",
    'button.renew.config':"设备更新",
    'button.common':"通用应用程式",
    'button.close' : "关闭",
    'button.yes' : "是",
    'button.cancel' : "取消",
    'button.save' : "存储",
    'button.save.and.close' : "储存并关闭",
    'button.more' : "更多 ...",
    'button.cleanup' : "明确",
    'button.add' : "新增",
    'button.add.icon':"新图示",
    'button.search' : "搜索",
    'button.export' : "导出",
    'button.change' : "编辑",
    'button.copy' : "複製",
    'button.qrcode' : "二维码",
    'button.application' : "应用程式",
    'button.change.password' : "更改密码",
    'button.set.configuration':"设置配置",
    'button.group.action': '集体行动',
    'button.delete' : "删除",
    'button.login' : "登录",
    'button.renew.code' : "更新",
    'button.configurations':"配置",
    'button.set.configurations':"指定配置",
    'button.edit.versions':"版本",
    'button.edit' : "编辑",
    'button.change.common.app':"编辑共享应用程式",
    'button.delete.common.app':"删除共享应用程式",
    'button.turn.common.app':"共同",
    'button.hints.enable':"显示工具提示",
    'button.hints.disable':"隐藏工具提示",
    'button.show.password' : "显示密码",
    'button.hide.password':"隐藏密码",
		
    'question.impersonate.user':"以组织\"${customerName}\"的管理员身份登录到应用程式吗？",
    'question.change.user': '以用户\"${userName}\"的身份登录应用程序？',
    'question.delete.file' : "要删除文档\"${fileName}\"吗？",
    'question.delete.customer':"删除组织\"${customerName}\"？",
    'question.delete.user':"删除用户\"${username}\"？",
    'question.delete.application' : "是否删除应用程式\"${applicationName}\" ？，",
    'question.delete.application.version':"删除版本\"${applicationVersion}\"吗？",
    'question.delete.configuration' : "删除配置\"${configurationName}\" ??",
    'question.delete.group':"删除组合\"${groupName}\"？",
    'question.delete.device' : "删除数字为\"${deviceNumber}\"的设备吗？",
    'question.exit.without.saving' : "更改未储存。无论如何要离开此页面？",
    'question.turn2common.application':"共享应用程式\"${applicationName}\"吗？",
    'question.app.upgrade':"将应用程式\"${v1}\"更新到配置\"${v2}\"的最新版本吗？",
		
    'error.application.setting.empty.app':"指定应用程式",
    'error.application.setting.empty.name':"输入名称",
    'error.application.setting.empty.value':"指定值",
		
    'error.icon.dimension.invalid':"图示必须是正方形的",
    'error.icon.empty.name':"输入图示名称",
    'error.icon.empty.file':"上传图示文档",
    'error.application.version.pkg.mismatch':"文档（${actual}）的程序包ID与应用程式（${expected}）不对应",
    'error.empty.user':"选择用户",
    'error.empty.user.name':"填写用户名",
    'error.empty.user.login':"填写用户登录名",
    'error.empty.user.role':"选择用户角色",
    'error.empty.password' : "输入新密码",
    'error.empty.password.confirm':"输入密码确认",
    'error.empty.group.name':"填写组合名",
    'error.empty.configuration':"指定配置",
    'error.empty.configuration.name':"填写配置名称",
    'error.empty.configuration.password':"填写密码",
    'error.empty.configuration.contentApp':"未指定内容应用程式",
    'error.invalid.configuration.mainApp':"在MDM设置中，使用了错误的主应用程式",
    'error.invalid.configuration.contentApp':"在MDM设置中使用了无效的内容应用程式",
    'error.mismatch.password':"密码和密码确认必须匹配",
    'error.empty.customer.name':"以组织的名义填写",
    'error.empty.customer.prefix':"填写设备编号前缀",
    'error.empty.customer.device.configuration':"选择设备配置",
    'error.empty.customer.duplicate.prefix':"前缀已在使用中",
    'error.duplicate.customer.name' : "输入名称的组织已经存在。尝试使用其他名称。",
    'error.duplicate.group.name' : "输入名称的组合已经存在。尝试使用其他名称。",
    'error.duplicate.configuration.name' : "使用输入名称的配置已存在。尝试使用其他名称。",
    'error.duplicate.device.number':"已经存在具有该编号的设备",
    'error.internal.server' : "内部服务器错误",
    'error.permission.denied':"没有执行权",
    'error.request.failure':"请求失败",
    'error.configuration.device.use' : "无法删除此配置，它在设备上使用。首先转到\"设备\",使用此配置查找设备并更改其设置。",
    'error.invalid.system.update.time':"无效的安装间隔",
		
    'error.configuration.file.empty.name':"输入文档名",
    'error.configuration.file.empty.desc':"指定文档资讯",
    'error.configuration.file.empty.path':"指定设备上的路径",
    'error.configuration.file.empty.file':"输入URL或上传文档",

    'error.notfound.device' : "找不到设备",
    'error.duplicate.device':"已经存在具有相同编号的设备",
    'error.duplicate.login':"此类登录名已被使用",
    'error.duplicate.group':"已经存在相同名称的组合",
    'error.duplicate.application':"已经存在具有此程序包ID和版本的应用程式",
    'error.recent.application.version.exists':"存在较新的应用程式版本",
    'error.common.application.access.prohibited':"只有超级管理员才能管理常见应用程式",
    'error.application.config.reference.exists':"该应用程式已在配置中使用，无法删除",
    'error.application.version.deletion.prohibited':"该版本是唯一的或已在配置中使用，无法删除",
    'error.duplicate.file':"已经存在同名文档",
    'error.used.file':"已使用此文档",
    'error.version.exists':"此应用程式的相同版本已存在",
    'error.duplicate.configuration':"具有该名称的配置已存在",
    'error.notfound.customer.admin':"找不到管理员帐户",
    'error.apk.file.required':"选择扩展名为.apk或.xapk的文档",
    'error.apk.parse':"解析文档时发生错误",
    'error.empty.app.name':"输入应用程式名称",
    'error.empty.app.pkg':"输入包裹ID",
    'error.empty.app.url':"输入网址",
    'error.empty.app.iconText':"输入图示文字",
    'error.empty.app.version':"输入应用程式的版本",
    'error.notempty.group' : "该组合包括一个或多个设备。您无法删除它。",
    'error.file.empty':"上传新文档",
    'error.file.deletion':"删除服务器上的文档时出错",
    'error.file.save':"在服务器上储存文档时出错",
    'error.password.wrong' : "无效的密码",
    'error.password.empty':"未指定密码",
    'error.params.missing' : "缺少参数",
    'error.empty.push.options':"请选择推送通知选项",
		
    'table.filtering.check.all' : "全选",
    'table.filtering.uncheck.all':"取消全部",
    'table.filtering.suffix.configuration':"配置",
    'table.filtering.suffix.group':"组合",
    'table.filtering.no.selected.configuration':"未选择配置",
    'table.filtering.no.selected.group':"未选择组合",
		
    'success.admin.created' : "管理员帐户已创建:\n ${adminCredentials}",
    'success.uploading.file':"文档已上传到服务器...",
    'success.loading.devices':"正在加载设备列表...",
    'success.loading.customer':"正在加载客户详细信息...",
    'success.file.uploaded' : "文档上传成功。",
    'success.file.uploaded.need.save' : "文档上传成功。输入相对路径，然後单击\"储存\"。",
    'success.settings.design.saved':"设计设置已成功储存",
    'success.settings.common.saved':"设备表设置已成功储存",
    'success.settings.saved':"设置已成功储存",
    'success.settings.apiKey.saved':"API密钥已成功储存",
    'success.settings.hints.enabled':"启用提示",
    'success.settings.hints.disabled':"提示已禁用",
    'success.configuration.saved':"配置储存成功",
    'success.operation.completed':"操作成功完成",
    'success.plugins.disabled':"设置已成功储存",
    'success.config.update.notification':"配置更新命令已发送到设备",
    'success.config.update.device.app.settings.notification':"更新应用程式设置的命令已发送到设备。",
		
    'form.icon.title' : "图示",
    'form.icon.name' : "名称",
    'form.icon.file' : "文档",

    'configuration.add.warning': '您确定要创建一个空配置吗？ 您将需要手动添加所有必需的系统应用程序。 考虑改为复制和修改现有配置。',
    'configuration.remove.warning': '您确定要删除最后的配置吗？ 您将丢失需要哪些系统应用程序的信息。',
    'form.configuration.title' : "配置",
    'form.configuration.title.typical':"典型配置",
    'form.configuration.settings.auto.update' : "自动更新",
    'form.configuration.settings.system.update' : "系统更新",
    'form.configuration.settings.system.update.default' : "默认",
    'form.configuration.settings.system.update.immediate' : "立即",
    'form.configuration.settings.system.update.scheduled':"预定",
    'form.configuration.settings.system.update.postponed':"推迟",
    'form.configuration.settings.system.update.time':"安装时间",
    'form.configuration.settings.system.update.time.from' : "由",
    'form.configuration.settings.system.update.time.to' : "至",
    'form.configuration.settings.block.status.bar':"状态栏锁定",
    'form.configuration.settings.block.status.bar.hint': '此设置已弃用，适用于 Android 6 及更低版本。 要在较新的 Android 版本上锁定状态栏，请使用信息亭模式（MDM 设置）。',
    'form.configuration.settings.mdm.kiosk.mode':"单一应用程序模式",
    'form.configuration.settings.mdm.app.main':"主要应用",
    'form.configuration.settings.mdm.component.event.receiver':"组件-事件接收者",
    'form.configuration.settings.mdm.component.event.receiver.placeholder':"输入组件名称",
    'form.configuration.settings.mdm.component.wifi.ssid':"WiFi SSID",
    'form.configuration.settings.mdm.component.wifi.ssid.placeholder':"註册WiFi SSID-留空以手动输入",
    'form.configuration.settings.mdm.component.wifi.password':"WiFi密码",
    'form.configuration.settings.mdm.component.wifi.password.placeholder':"註册WiFi通行證-留空以手动输入",
    'form.configuration.settings.mdm.component.wifi.security':"WiFi安全类型",
    'form.configuration.settings.mdm.component.wifi.notice' : "注意这些WiFi设置仅适用於初始註册！",
    'form.configuration.settings.mdm.component.server.url':"新服务器网址",
    'form.configuration.settings.mdm.component.server.url.placeholder':"用於迁移到新的MDM服务器",
    'form.configuration.settings.mdm.app.content':"应用程式内容",
    'form.configuration.settings.mdm.kiosk.home':"启用主页按钮",
    'form.configuration.settings.mdm.kiosk.recents':"启用最近的按钮",
    'form.configuration.settings.mdm.kiosk.notifications':"启用通知",
    'form.configuration.settings.mdm.kiosk.system.info':"启用状态栏信息",
    'form.configuration.settings.mdm.kiosk.keyguard':"启用屏幕锁定",
    'form.configuration.settings.mdm.kiosk.lock.buttons': '锁定电源按钮',
    'form.configuration.settings.mdm.mobile.enrollment': '使用移动数据注册',
    'form.configuration.settings.mdm.lock.safe.settings':"锁定安全设置（WiFi，GPS等）",
    'form.configuration.settings.mdm.allowed.classes':"允许的活动",
    'form.configuration.settings.mdm.allowed.classes.placeholder' : "以逗号分隔的类，例如: com.android.settings.homepage.SettingsHomepageActivity",
    'form.configuration.settings.mdm.restrictions': '限制条件',
    'form.configuration.settings.mdm.restrictions.placeholder': 'MDM限制，以逗号分隔，例如： no_sms,no_outgoing_calls,no_usb_file_transfer',
    'form.configuration.settings.mdm.qrcode.url':"QR代码网址",
    'form.configuration.settings.mdm.hint':"选择主要应用程式和组件",
    'form.configuration.apps.search.label' : "搜索",
    'form.configuration.apps.sort.label' : "分类",
    'form.configuration.apps.sort.byname' : "按名字",
    'form.configuration.apps.sort.bypkg':"按ID",
    'form.configuration.apps.no.apk': '没有任何',
    'form.configuration.apps.show.systeam.apps':"显示系统应用程式",
    'form.configuration.apps.action.install' : "安装",
    'form.configuration.apps.action.prohibit' : "禁用",
    'form.configuration.apps.action.not.install':"请勿安装",
    'form.configuration.apps.action.delete' : "删除",
    'form.configuration.apps.action.permit' : "允许",
    'form.configuration.apps.label.inherit' : "遗传",
    'form.configuration.apps.label.show' : "显示",
    'form.configuration.apps.label.not.show' : "隐藏",
    'form.configuration.apps.edit.details':"其他参数",
    'form.configuration.apps.keycode' : "按钮代码",
    'form.configuration.apps.bottom': '显示在底行',
    'form.configuration.apps.hint' : "提示:要断开应用程式与配置的链接，请选择操作“阻止\"或“不安装\"。",
    'form.configuration.settings.design.use.default':"使用默认设计",
    'form.configuration.settings.design.color.background' : "背景颜色",
    'form.configuration.settings.design.color.background.placeholder':"选择颜色",
    'form.configuration.settings.design.color.app.names':"应用程式名称颜色",
    'form.configuration.settings.design.color.app.names.placeholder':"选择颜色",
    'form.configuration.settings.design.background.image.url':"背景图片的网址",
    'form.configuration.settings.design.background.image.url.placeholder':"输入背景图片的网址",
    'form.configuration.settings.design.icon':"图示大小",
    'form.configuration.settings.design.icon.small' : "小",
    'form.configuration.settings.design.icon.medium':"平均（+ 20％）",
    'form.configuration.settings.design.icon.large':"大（+ 40％）",
    'form.configuration.settings.design.desktop.header':"桌面标题",
    'form.configuration.settings.design.desktop.header.no' : "没有",
    'form.configuration.settings.design.desktop.header.deviceid' : "设备编号",
    'form.configuration.settings.design.desktop.header.description': '描述',
    'form.configuration.settings.design.desktop.header.custom': '自定义模板',
    'form.configuration.settings.design.desktop.header.hint': '确保将此参数发送到设备（设置 - 其他设置）',
    'form.configuration.settings.design.desktop.header.template': '输入模板',
    'form.configuration.settings.design.desktop.header.template.placeholder': '使用变量',
    'form.configuration.settings.design.upload': '上载',
    'form.configuration.settings.common.name' : "名称",
    'form.configuration.settings.common.name.placeholder':"输入配置名称",
    'form.configuration.settings.common.desc' : "资讯",
    'form.configuration.settings.common.desc.placeholder':"输入配置说明",
    'form.configuration.settings.common.admin.pwd':"管理员密码",
    'form.configuration.settings.common.admin.pwd.placeholder':"输入管理员密码",
    'form.configuration.settings.common.gps' : "GPS",
    'form.configuration.settings.common.gps.any' : "任何",
    'form.configuration.settings.common.gps.off':"已禁用",
    'form.configuration.settings.common.gps.on':"启用",
    'form.configuration.settings.common.bluetooth' : "蓝牙",
    'form.configuration.settings.common.wifi' : "无线上网",
    'form.configuration.settings.common.mobile.data' : "流动数据",
    'form.configuration.settings.common.usb.storage':"阻止USB存储",
    'form.configuration.settings.common.brightness':"管理亮度",
    'form.configuration.settings.common.brightness.none' : "没有",
    'form.configuration.settings.common.brightness.auto' : "自动",
    'form.configuration.settings.common.brightness.manual' : "值",
    'form.configuration.settings.common.brightness.value':"屏幕亮度",
    'form.configuration.settings.common.timeout':"管理屏幕超时",
    'form.configuration.settings.common.timeout.value':"屏幕超时（秒）",
    'form.configuration.settings.common.volume.block':"锁定音量",
    'form.configuration.settings.common.volume.manage': '管理设备音量',
    'form.configuration.settings.common.volume.value': '装置音量',
    'form.configuration.settings.common.timezone.mode':"管理时区",
    'form.configuration.settings.common.timezone.mode.default':"不要管",
    'form.configuration.settings.common.timezone.mode.auto' : "自动",
    'form.configuration.settings.common.timezone.mode.manual' : "手动",
    'form.configuration.settings.common.timezone' : "时区",
    'form.configuration.settings.common.timezone.placeholder':"例如America / Los_Angeles",
    'form.configuration.settings.common.timezone.link':"时区列表",
    'form.configuration.settings.common.no.network.warning' : "警告！不要关闭所有连接通道，否则您将无法再管理设备！",
    'form.configuration.settings.request.updates':"更新位置",
    'form.configuration.settings.request.updates.donottrack' : "不跟?",
    'form.configuration.settings.request.updates.gps':"通过GPS",
    'form.configuration.settings.request.updates.wifi':"通过Wi-Fi",
    'form.configuration.settings.request.updates.prompt.gps':"要跟?GPS坐标，您需要启用GPS",
    'form.configuration.settings.request.updates.prompt.wifi':"要跟?Wi-Fi坐标，您需要启用Wi-Fi",
    'form.configuration.settings.push.options'  : "推送通知",
    'form.configuration.settings.push.options.mqtt.worker' :"MQTT协议（节省电池）",
    'form.configuration.settings.push.options.mqtt.alarm' :"MQTT协议（即时交付）",
    'form.configuration.settings.push.options.polling' :"HTTP轮询",
    'form.configuration.settings.push.options.mqtt.worker.hint' : '当设备处于活动状态时，立即发送推送消息。 但是在睡眠模式下，邮件可能会延迟多达几个小时。 不要在独立设备上使用此选项。 MQTT使用TCP端口31000，在防火墙上启用它。',
    'form.configuration.settings.push.options.mqtt.alarm.hint' : '立即发送“推”消息，但在设备休眠时可能会花费更多电量。 独立供电设备的最佳选择。 MQTT使用TCP端口31000，在防火墙上启用它。',
    'form.configuration.settings.push.options.polling.hint' : '可靠地传递推送消息，最大延迟为15分钟。 除HTTP（S）外，不需要任何其他TCP端口。 请勿与远程控制插件一起使用此选项。',
    'form.configuration.settings.push.options.keepalive' : '保活时间',
    'form.configuration.settings.minute.1' : '1分钟',
    'form.configuration.settings.minutes.2' : '2分钟',
    'form.configuration.settings.minutes.3' : '3分钟',
    'form.configuration.settings.minutes.5' : '5分钟',
    'form.configuration.settings.minutes.10' : '10分钟',
    'form.configuration.settings.minutes.15' : '15分钟',
    'form.configuration.settings.password.mode' :"密码要求",
    'form.configuration.settings.password.mode.any'  : "没有",
    'form.configuration.settings.password.mode.present' :"需要密码",
    'form.configuration.settings.password.mode.easy' :"简单（至少6个符号）",
    'form.configuration.settings.password.mode.moderate' :"中等（8个以上的符号，字母和数字）",
    'form.configuration.settings.password.mode.strong' :"强（8个以上，大写和小写字母，数字，符号）",
    'form.configuration.settings.show.wifi': '在连接错误时启用 WiFi 设置',
    'form.configuration.settings.use.default.launcher':"与默认启动器一起使用",
    'form.configuration.settings.disable.screenshots':"禁用屏幕截图",
    'form.configuration.settings.orientation':"屏幕转向锁定",
    'form.configuration.settings.orientation.none':"请勿锁定",
    'form.configuration.settings.orientation.portrait' : "直向",
    'form.configuration.settings.orientation.landscape' : "横向",
    'form.configuration.settings.files.default.path': '设备上的默认路径',
    'form.configuration.files.search.label' : "搜索",
    'form.configuration.files.action.upload':"上传",
    'form.configuration.files.action.remove' : "去掉",
    'form.configuration.files.variables': '内容可变',
    'form.configuration.files.variables.hint': '字符串DEVICE_NUMBER，IMEI，CUSTOM*将替换为其值',

    'form.configuration.file.name' : "文档名",
    'form.configuration.file.description' : "文档资讯",
    'form.configuration.file.description.placeholder':"可选，为了您的方便",
    'form.configuration.file.path':"设备上的路径",
    'form.configuration.file.path.placeholder':"不包括驱动器的路径，例如/my-app/image.jpg",
    'form.configuration.file.url':"URL",
    'form.configuration.file.url.placeholder' : '如果仅在外部资源上託管文档',
    'form.configuration.file.file' : "文档",
    'form.configuration.file.action' : "行动",
    'form.configuration.file.action.prompt.1':"上传",
    'form.configuration.file.action.prompt.2' : "去掉",
    'form.configuration.file.remove.prompt.1':"此文档将不再与设备同步",
    'form.configuration.file.remove.prompt.2':"从服务器删除文档",
		
    'form.password.title' : "更改密码",
    'form.password.label.user' : "用户",
    'form.password.label.password.new' : "新密码",
    'form.password.label.password.new.placeholder' : "输入新的密码",
    'form.password.label.password.confirm' : "确认",
    'form.password.label.password.confirm.placeholder':"再次输入新密码",
		
    'form.application.type' : "类型",
    'form.application.type.option.web' : "网页",
    'form.application.type.option.app' : "应用程式",
    'form.application.pkg':"包裹ID",
    'form.application.from.file':"由文档确定",
    'form.application.pkg.title' : '当您上传APK文档时，包ID会自动确定。手动输入的软件包ID仅对於系统应用程式是必需的。',
    'form.application.pkg.placeholder':"例如com.android.camera",
    'form.application.disabled.arch': '版本特定',
    'form.application.disabled.arch.title': '要为不同的 CPU 架构添加 APK，请单击“添加”，或打开应用版本列表',
    'form.application.arch': '本机代码',
    'form.application.arch.title': '一些应用程序包含针对某些CPU架构优化的代码。 在这种情况下，您需要上传两个APK（适用于armeabi-v7a和arm64-v8a架构）',
    'form.application.arch.universal': '无（通用APK）',
    'form.application.arch.armeabi': 'armeabi-v7a的本机代码',
    'form.application.arch.arm64': 'arm64-v8a的本机代码',
    'form.application.arch.no.split': '通用APK',
    'form.application.arch.split': '拆分的APK',
    'form.application.arch.warning': '该APK仅适用于${arch}。 不要忘记上传其他 CPU 架构的 APK！',
    'form.application.arch.success': '这个应用程式包含适用于两种CPU架构的APK',
    'form.application.version.exists': '此版本的 APK 已存在',
    'form.application.url.armeabi': 'armeabi-v7a 的 URL',
    'form.application.url.arm64': 'arm64-v8a 的 URL',
    'form.application.name' : "应用程式名称",
    'form.application.name.title' : "您将在列表中看到应用程式名称。我们建议使用唯一且信息丰富的名称。",
    'form.application.name.placeholder':"例如，相机（Android）",
    'form.application.version' : "版本",
    'form.application.version.placeholder' : "0为系统应用程式",
    'form.application.version.title' : "打包版本是在您上传APK文档时自动确定的。对於系统应用，将其设置为0。",
    'form.application.system' : "系统",
    'form.application.system.title' : "系统应用程式已预先安装在设备上，不需要URL或文档。仅在需要启用某个系统程序包时设置此标誌。",
    'form.application.run.after.install':"安装後运行",
    'form.application.run.after.install.title':"具有後台服务的应用程式至少需要在前台启动一次。",
    'form.application.run.at.boot':"启动时运行",
    'form.application.run.at.boot.title' : "如果需要在启动後在前台运行应用程式，请设置此标誌。此标誌不影响後台进程。",
    'form.application.url':"URL",
    'form.application.url.title':"仅当您的应用程式託管在外部资源上时，才应输入URL。建议通过以下字段上传APK文档。",
    'form.application.url.disabled' : "为每个版本设置了URL。要更改网址，请关闭此窗口，然後点击\"版本\"图示。",
    'form.application.file' : "文档",
    'form.application.showLabel':"显示图示",
    'form.application.showLabel.title':"此标誌表示是否应在启动器中显示应用程式图示。该选项可能在配置中被覆盖。",
    'form.application.use.kiosk': '在信息亭浏览器中打开',
    'form.application.use.kiosk.title': '如果您想在Kiosk Browser中打开网页而无法更改地址，请设置此标志',
    'form.application.iconText':"图示文字",
    'form.application.iconText.placeholder' : "（默认）",
    'form.application.versions.title':"应用程式版本",
    'form.application.icon' : "图示",
    'form.application.icon.default' : "（默认）",
    'form.application.icon.add':"新增图示",
		
    'form.application.setting.app' : "应用程式",
    'form.application.setting.app.placeholder':"选择应用程式",
    'form.application.setting.name' : "属性",
    'form.application.setting.value' : "值",
    'form.application.setting.comment' : "备註",
    'form.application.setting.type' : "类型",
    'form.application.setting.readonly':"在设备上不变",

    'form.application.configurations.app' : "应用程式",
    'form.application.configurations.configs':"配置",
		
    'form.configuration.copy.new.name' : "新名字",
    'form.configuration.copy.new.name.placeholder':"输入新的配置名称",
		
    'form.customer.name' : "名称",
    'form.customer.name.placeholder':"输入组织名称",
    'form.customer.apiKey':"API密钥",
    'form.customer.apiKey.placeholder':"输入API密钥",
    'form.customer.prefix' : "字首",
    'form.customer.prefix.placeholder':"输入设备编号前缀",
    'form.customer.device.configuration':"设备配置",
    'form.customer.desc' : "资讯",
    'form.customer.desc.placeholder':"输入组织资讯",
    'form.customer.copy.configuration':"複製配置",
    'form.customer.copy.design':"複製设计",
    'form.customer.type' : "客户类型",
    'form.customer.status':"客户状态",
    'form.customer.expiry.time' : "到期日",
    'form.customer.device.limit':"设备限制",
		
    'form.device.number' : "编号",
    'form.device.number.locked': '由于之前的号码更改尚未完成，因此无法更改号码。',
    'form.device.migration.warning': '设备编号将被更改。 确保设备已打开并在线。',
    'form.device.number.hint':"不要使用特殊字符",
    'form.device.desc' : "资讯",
    'form.device.groups':"组合",
    'form.device.config' : "配置",
    'form.device.imei' : "IMEI",
    'form.device.phone.number' : "电话号码",
		
    'form.update.device.config' : "配置",
		
    'form.file.file' : "文档",
    'form.file.path' : "路径",
    'form.file.path.placeholder' : '输入相对路径，例如"/files/"',
		
    'form.file.apps.name' : "应用程式名称",
    'form.file.apps.pkg':"包裹ID",
    'form.file.apps.version' : "版本",
		
    'form.group.name' : "名称",
    'form.group.name.placeholder':"输入组合名称",
		
    'form.user.login' : "登录",
    'form.user.login.placeholder':"输入用户登录名",
    'form.user.name' : "名称",
    'form.user.name.placeholder' : "输入你的用户名",
    'form.user.role' : "角色",
    'form.user.all.devices.available':"所有设备都可用",
    'form.user.available.groups':"可用的设备组合",
    'form.user.password.new' : "新密码",
    'form.user.password' : "密码",
    'form.user.password.new.placeholder' : "输入新的密码",
    'form.user.password.confirm' : "确认",
    'form.user.password.confirm.placeholder':"再次输入新密码",
		
    'form.settings.hints.title':"提示",
		
    'form.settings.plugins.title':"已经选用插件",
		
    'form.settings.common.title':"设备表视图",
    'form.settings.common.visible.columns':"\"设备\"表中的可见列",
    'form.settings.common.status' : "状态",
    'form.settings.common.role':"用户角色",
    'form.settings.common.date' : "日期",
    'form.settings.common.device.number' : "设备编号",
    'form.settings.common.imei' : "IMEI",
    'form.settings.common.phone.number' : "电话号码",
    'form.settings.common.phone.model':"电话型号",
    'form.settings.common.status.permissions':"权限状态",
    'form.settings.common.status.installation':"安装状态",
    'form.settings.common.status.files':"文档状态",
    'form.settings.common.config' : "配置",
    'form.settings.common.desc' : "资讯",
    'form.settings.common.group' : "组合",
    'form.settings.common.launcher.version':"启动器版本",
    'form.settings.common.battery.level':"电池电量",
    'form.settings.common.default.launcher':"默认启动器",
		
    'form.settings.design.title':"默认设计",
    'form.settings.design.color.font' : "背景颜色",
    'form.settings.design.color.font.placeholder':"选择颜色",
    'form.settings.design.color.app.names':"应用程式名称颜色",
    'form.settings.design.color.app.names.placeholder':"选择颜色",
    'form.settings.design.url.background.image':"背景图片的网址",
    'form.settings.design.url.background.image.placeholder':"输入背景图片网址",
    'form.settings.design.size.icon':"图示大小",
    'form.settings.design.size.icon.small' : "小",
    'form.settings.design.size.icon.medium':"平均（+ 20％）",
    'form.settings.design.size.icon.large':"大（+ 40％）",
    'form.settings.design.desktop.header':"桌面标题",
    'form.settings.design.desktop.header.no' : "没有",
    'form.settings.design.desktop.header.device.id' : "设备编号",
		
    'form.settings.lang.title' : "语言设定",
    'form.settings.lang.use.default':"使用默认语言",
    'form.settings.lang.use':"使用语言",
    'form.settings.lang.en': 'English',
    'form.settings.lang.pt': 'Português',
    'form.settings.lang.ru': 'Русский',
    'form.settings.lang.fr': 'Français',
    'form.settings.lang.ar': 'عربي',
    'form.settings.lang.es': 'Español',
    'form.settings.lang.de': 'Deutsch',
    'form.settings.lang.cn': '繁体中文',
    'form.settings.lang.tw': '繁體中文',

    'form.settings.misc.title':"其他设置",
    'form.settings.misc.phone.format':"电话号码格式",
    'form.settings.misc.phone.format.placeholder' : "+9（999）999-99-99",
    'form.settings.misc.custom.property.name.1':"自定义媒体资源1",
    'form.settings.misc.custom.property.name.2':"自定义属性2",
    'form.settings.misc.custom.property.name.3':"自定义属性3",
    'form.settings.misc.custom.property.multiline': '多行',
    'form.settings.misc.custom.property.send': '发送到设备',
    'form.settings.misc.custom.property.name.placeholder':"输入自定义属性的名称",
    'form.settings.misc.create.new.devices':"在首次访问时新增设备",
    'form.settings.misc.new.device.config':"新设备配置",
    'form.settings.misc.new.device.group':"新设备组合",
    'form.settings.misc.send.description': '向设备发送描述',

    'form.settings.groups.title':"组合",
    'form.settings.groups.search.placeholder':"组合搜索",
		
    'form.settings.users.title':"用户",
    'form.settings.users.search.placeholder':"搜索用户",

    'form.qr.device.number': '设备ID分配',
    'form.qr.auto.create': '添加到设备列表（如果不存在）',
    'form.qr.number.use': '设备编号分配',
    'form.qr.number.use.request': '用户价值',
    'form.qr.number.use.imei': 'IMEI',
    'form.qr.number.use.serial': '序列号',
    'form.qr.groups': '新增至群组',
    'form.qr.button.json': '获取JSON',
    'form.qr.device.number.placeholder':"输入设备ID ...",
    'form.qr.code.image.alt' : "二维码",
		
    'form.profile.title' : "更改密码",
    'form.profile.password.old' : "旧密码",
    'form.profile.password.old.placeholder':"输入旧密码",
    'form.profile.password.new' : "新密码",
    'form.profile.password.new.placeholder' : "输入新的密码",
    'form.profile.password.confirm' : "确认",
    'form.profile.password.confirm.placeholder':"再次输入新密码",
		
    'tab.customers':"组织",
    'tab.common.applications':"共享应用程式",
		
    'tab.devices' : "设备",
    'tab.applications':"应用程式",
    'tab.configurations':"配置",
    'tab.files':"文档",
    'tab.default.design':"默认设计",
    'tab.common.settings':"设备表视图",
    'tab.users':"用户",
    'tab.groups':"组合",
    'tab.language':"语言和其他设置",
    'tab.license' : "软件许可證",
    'tab.hints':"提示",
    'tab.plugins':"插件",

    'tab.configeditor.common.settings':"通用设置",
    'tab.configeditor.design.settings':"设计设置",
    'tab.configeditor.applications':"应用程式",
    'tab.configeditor.mdm.settings':"MDM设置",
    'tab.configeditor.app.settings':"应用程式设置",
    'tab.configeditor.files':"文档",
		
    'search.placeholder.file':"搜索文档",
    'search.placeholder.configuration':"搜索配置",
    'search.placeholder.customer':"寻找组织",
    'search.placeholder.application':"搜索应用程式",
    'search.placeholder.application.setting':"搜索应用程式设置",
    'search.placeholder.device':"搜索设备",
    'search.placeholder.address':"网址搜索",
    'search.placeholder.point':"站点搜索",
    'search.placeholder.message':"邮件搜索",
    'search.placeholder':"搜索...",
    'search.placeholder.from':"由...",
    'search.placeholder.to' : "至 ...",
    'search.placeholder.user':"输入用户名",
		
    'table.heading.customer.name' : "名称",
    'table.heading.customer.desc' : "资讯",
    'table.heading.customer.registration.time' : "註册",
    'table.heading.customer.last.login.time' : "上次登录",
    'table.heading.customer.actions':"功能",
    'table.heading.customer.type' : "类型",
    'table.heading.customer.expiry.time':"到期",
    'table.heading.customer.device.limit' : "限制",
    'table.heading.customer.status' : "状态",
		
    'customer.new' : "全新",
    'customer.active' : "沟通中",
    'customer.need.followup':"需要跟进",
    'customer.followup.sent':"已跟进",
    'customer.internal.test':"内部测试",
    'customer.developer':"开发人员",
    'customer.difficult' : "複习",
    'customer.pause' : "暂停",
    'customer.denial' : "谢绝",
    'customer.client' : "客户",
		
    'table.heading.configuration.name' : "名称",
    'table.heading.configuration.desc' : "资讯",
    'table.heading.configuration.actions':"功能",
		
    'table.heading.application.setting.app.pkg':"包裹ID",
    'table.heading.application.setting.app.name' : "应用程式名称",
    'table.heading.application.setting.name' : "属性",
    'table.heading.application.setting.value' : "值",
    'table.heading.application.setting.comment' : "备註",
    'table.heading.application.setting.lastUpdate' : "创建日期",
		
    'table.heading.file.url':"URL",
    'table.heading.file.devicepath':"设备上的路径",
    'table.heading.file.description' : "文档资讯",
    'table.heading.file.action' : "行动",
    'table.heading.file.lastUpdate' : "创建日期",

    'table.heading.application.pkg':"包裹ID",
    'table.heading.application.name' : "应用程式名称",
    'table.heading.application.version' : "版本",
    'table.heading.application.url':"URL",
    'table.heading.application.label' : "图示",
    'table.heading.application.actions':"功能",
    'table.heading.application.order' : "排序",
		
    'table.heading.device.status' : "状态",
    'table.heading.device.date' : "日期",
    'table.heading.device.device.number' : "设备编号",
    'table.heading.device.imei' : "IMEI",
    'table.heading.device.phone.number' : "电话号码",
    'table.heading.device.phone.model':"电话型号",
    'table.heading.device.status.permissions':"权限状态",
    'table.heading.device.status.installation':"安装状态",
    'table.heading.device.status.files':"文档状态",
    'table.heading.device.configuration' : "配置",
    'table.heading.device.desc' : "资讯",
    'table.heading.device.group' : "组合",
    'table.heading.device.launcher.version':"启动器版本",
    'table.heading.device.battery.level':"电池电量",
    'table.heading.device.default.launcher' : "设为默认启动器",
    'table.heading.device.actions':"功能",
		
    'table.heading.group.name' : "名称",
    'table.heading.group.actions':"功能",
		
    'table.heading.file.name' : "文档名",
    'table.heading.file.path' : "路径",
    'table.heading.file.address' : "网址",
    'table.heading.file.actions':"功能",
		
    'table.heading.users.login' : "登录",
    'table.heading.users.name' : "名称",
    'table.heading.users.role' : "角色",
    'table.heading.users.actions':"功能",
		
    'table.heading.common.apps.customer' : "组织",
    'table.heading.common.apps.pkg':"包裹ID",
    'table.heading.common.apps.name' : "应用程式名称",
    'table.heading.common.apps.version' : "版本",
    'table.heading.common.apps.url':"URL",
    'table.heading.common.apps.label' : "图示",
    'table.heading.common.apps.actions':"功能",
		
    'notfound.devices':"没有要显示的设备。",
    'notfound.files' : '文档列表为空。',
    'notfound.configurations' : "未找到配置。",
    'notfound.customers':"未找到组织。",
    'notfound.common.apps':"没有要显示的应用程式。",
    'notfound.applications':"找不到应用程式",
    'notfound.groups' : '找不到群合。尝试其他查询。',
    'notfound.users' : '找不到用户。尝试其他查询。',
    'notfound.apps.for.display':"没有要显示的应用程式。",
    'notfound.app.versions.for.display':"没有要显示的版本。",
		
    'format.date.header' : "HH:mm dd / MM / yyyy",
		
    'menu.about' : "关於",
    'menu.profile':"个人资料",
    'menu.panel.master':"主面板",
    'menu.panel.main':"主面板",
    'menu.logout' : "登出",
    'menu.functions' : "其他功能",
    'menu.settings':"设置",
    'menu.show.hints':"显示提示",
		
    'plugin.name.not.specified' : "<<未指定函数名称>>",
		
    'breadcrumb.devices' : "设备",
    'breadcrumb.applications':"应用程式",
    'breadcrumb.configurations':"配置",
    'breadcrumb.files':"文档",
    'breadcrumb.default.design':"默认设计",
    'breadcrumb.common.settings':"设备表视图",
    'breadcrumb.language.settings':"语言和其他设置",
    'breadcrumb.license.settings' : "软件许可證",
    'breadcrumb.users':"用户",
    'breadcrumb.groups':"组合",
    'breadcrumb.hints':"提示",
    'breadcrumb.plugins':"插件",
    'breadcrumb.config.details' : "详情",
    'breadcrumb.application.versions':"版本",
		
    'app.name':"Headwind MDM",
    'app.vendor.name':"h-mdm.com",
    'app.vendor.link':"https://h-mdm.com",
    'app.description':"开源码流动设备管理系统",
    'app.title':"${appName} Web面板",
		
    'box.show.my.apps.only':"仅显示我的应用程式",
    'configuration.app.version.upgrade.message':"已安装版本${installedVersion}，可用版本${latestVersion}",
		
    'about.line.1':"${appName}控制面板",
    'about.line.2':"Android企业启动器",
    'about.line.3':"版本${versionNumber}",
    'about.line.4':"已安装的插件",
		
    'common.app.clarification' : "该应用程式是公开的，无法进行编辑。要新增此应用的其他版本，请联繫管理员。",
		
    'qrcode.help.line1' : "以託管（公司）模式设置Android设备（版本7或更高版本）",
    'qrcode.help.line2':"将设备重置为出厂设置",
    'qrcode.help.line3':"在开始屏幕的任何位置点击7次（您必须输入隐藏的QR码扫描模式）",
    'qrcode.help.line4' : "按照设备说明进行操作:接受条款，连接到Wi-Fi，扫描此QR码",
    'qrcode.help.line5':"QR码可能包含${appName}的设备ID（因此您无需在移动设备上输入它）。要将设备ID嵌入QR码，请在此屏幕上输入设备ID，然後单击\"续订\"。",
		
    'form.configuration.app.version.select.select.title':"选择要安装的版本",
    'form.configuration.app.version.select.version.check.off':"禁用版本检查",
    'form.configuration.app.version.select.upgrade.warning' : "将配置\"${v2}\"的应用程式\"${v1}\"升级到版本\"${v3}\"吗？",
    'form.configuration.app.version.select.downgrade.warning' : "降级版本在所有设备上删除所有这些应用程式！是否将应用程式版本\"${v1}\"降级为版本\"${v2}\"？",
		
    'hint.step.1':"点击此处开始设备註册",
    'hint.step.2':"点击此处打开QR码",
    'hint.step.3':"点击此处查看如何在设备上打开QR码扫描器",
    'hint.step.4' : "在\"Devices\"选项卡中找到可用的设备ID。点击窜改新坛以将其包含在QR码中。",
		
    'ie.browser.notice.1':"很遗憾，不支持Internet Explorer。",
    'ie.browser.notice.2' : '推荐的浏览器，用於使用${appName}-<a href ="https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop">Chrome</a>.',
		
    'form.resolved.duplicate.pkg.text1':"软件包ID\"${pkg}\"已被下列应用程式使用。",
    'form.resolved.duplicate.pkg.text2':"您要新增新应用程式还是现有应用程式的新版本？",
    'form.resolved.duplicate.pkg.text3':"新版本",
    'form.resolved.duplicate.pkg.text4':"程序包${apps}已使用包ID\"${pkg}\"",
    'form.resolved.duplicate.pkg.text5':"您确定要更改包裹ID吗？",
		
    'tooltip.usage.byconfigurations':"由配置使用",
    'tooltip.usage.byapps':"由应用程式使用",
    'tooltip.usage.byicons':"由图示使用",
		
    'form.devices.label.params.more':"更多参数",
    'form.devices.label.params.less':"参数较少",
    'form.devices.label.installation.status':"安装状态",
    'format.devices.date.createTime':"dd/MM/yyyy HH:mm:ss",
    'format.devices.date.datePicker':"dd-MM-yyyy",
		
    'form.devices.selection.install.status.default':"安装状态...",
    'form.devices.selection.install.status.all' : "所有",
    'form.devices.selection.install.status.success' : "成功",
    'form.devices.selection.install.status.version.mismatch' : "版本不匹配",
    'form.devices.selection.install.status.failure' : "失败",
    'form.devices.selection.imei.changed':"IMEI最近发生了变化",
		
    'search.placeholder.launcher.version':"启动器版本",
    'error.date.range.invalid':"无效的日期间隔",
		
    'customer.type.demo' : "试用",
    'customer.type.small' : "专业",
    'customer.type.corporate' : "企业",
    'customer.type.master' : "基本",
		
    'customer.type.options.all' : "所有类型",
    'customer.status.options.all':"所有状态",
		
    'account.expiring':"您的帐户将在${days}天后过期。请与卖家联繫以更新您的帐户。",
    'account.expired.short':"您的帐户已过期！",
    'account.expired' : "您的帐户已过期。请与卖家联繫以更新您的帐户。",
    'device.limit.achieved' : "由於您已达到极限，因此无法新增设备。请移除一些设备或与卖家联繫以扩展设备限制。",
		
    'yes' : 'yes',
    'no' : 'No'
};		
