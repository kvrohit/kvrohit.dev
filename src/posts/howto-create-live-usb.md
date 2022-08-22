---
title: "How to: Create Live USB, the easy way!"
date: 2012-06-05
description: Ever wondered if you could create a live usb without using any third party software ?
category: tutorial
---

Ever wondered if you could create a live usb without using any third party software ? Read on...

Pre-requisites:

- Linux
- USB Stick
- ISO image of your favorite linux distro

We'll be using the `dd` command to write the iso file to the usb stick. The general syntax is shown below:

```bash
# Use the dd command to write to your usb
# parameters: if='input file', of='output file/device'
# use dmesg to find out your usb device. Ex: /dev/sdb
# replace sdx with your device name
# use an optional buffer size "bs" to do buffered writes
sudo dd if=path_to_iso.iso of=/dev/sdx bs=4M
```

And now, the example. Suppose you want to create a live usb out of your ubuntu-12.04 iso, assuming that your usb stick is mounted at `/dev/sdb`, the command to issue is:

```bash
# Example
sudo dd if=ubuntu-12.04.iso of=/dev/sdb bs=4M
```

Extremely simple, isn't it ?

**_IMPORTANT:_**

- Take extreme caution while specifying the output device! You do not want to be messing up your HDD.
- As with many linux commands, you will not see any output when you issue the command. You will be notified when the process is complete.
- Your USB stick will be formatted, ensure that you have a backup of your data!
