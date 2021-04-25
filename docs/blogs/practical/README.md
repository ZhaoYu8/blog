---
title: 实用
lang: zh-CN
date: 2021-02=19
categories:
  - 实用
tags:
  - 实用
publish: true
---

## 1 win10 激活

```
win10 系统激活：

Office：组件激活

激活是永久激活，除非重装系统，重新装系统需要重新激活：

下面是激活方式：

1.以管理员身份运行“命令提示符”。
2.输入命令：slmgr /upk
3.输入命令：slmgr /ipk NPPR9-FWDCX-D2C8J-H872K-2YT43
4.输入命令：slmgr -skms kms.lotro.cc
5.输入命令：slmgr -ato
若上面的失败，很可能需要修改kms服务地址和密钥，可以使用下面的服务地址来试试，总有一个好使的，嘎嘎。。
如果实在没有，就去网上搜索一下KMS服务地址
slmgr -skms kms.djxmmx.net
slmgr -skms kms.lotro.cc
slmgr -skms  kms.miaomiao.zyns.com
slmgr -skms  zh.us.to
slmgr -skms kms.03k.org
slmgr -skms kms.chinancce.com
slmgr -skms kms.lotro.cc
slmgr -skms cy2617.jios.org
slmgr -skms kms.shuax.com
slmgr -skms kms.luody.info
slmgr -skms kms.cangshui.net
slmgr -skms zh.us.to
slmgr -skms kms.library.hk
slmgr -skms xykz.f3322.org
slmgr -skms kms.binye.xyz
slmgr -skms kms.tttal.com
slmgr -skms kms.v0v.bid
slmgr -skms kms.moeclub.org
slmgr -skms amrice.top
slmgr -skms kms.digiboy.ir
slmgr -skms kms.lolico.moe
WIN10 常用密钥，密钥使用命令，请自行修改：slmgr /ipk NPPR9-FWDCX-D2C8J-H872K-2YT43
Windows 10 专业版          W269N-WFGWX-YVC9B-4J6C9-T83GX
Windows 10 专业版 N          MH37W-N47XK-V7XM9-C7227-GCQG9
Windows 10 企业版          NPPR9-FWDCX-D2C8J-H872K-2YT43
Windows 10 企业版 N          DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4
Windows 10 教育版          NW6C2-QMPVW-D7KKK-3GKT6-VCFB2
Windows 10 教育版 N          2WH4N-8QGBV-H22JP-CT43Q-MDWWJ
Windows 10 企业版 2015 LTSB    WNMTR-4C88C-JK8YV-HQ7T2-76DF9
```

## 2 解决 github 无法访问问题

1. 打开
[github网址查询](https://github.com.ipaddress.com/)
![](https://files.catbox.moe/mvoda5.png)
2. 打开
[github域名查询](https://fastly.net.ipaddress.com/github.global.ssl.fastly.net)
![](https://files.catbox.moe/jkprze.png)
3. 打开
[github静态资源ip](https://github.com.ipaddress.com/assets-cdn.github.com)
![](https://files.catbox.moe/5pkop0.png)
4. 修改host文件，修改host文件。文件地址 C:\Windows\System32\drivers\etc\hosts
![](https://files.catbox.moe/ic4o4t.png)
5. 打开cmd，输入 ipconfig /flushdns 回车
![](https://files.catbox.moe/o24a7l.png)