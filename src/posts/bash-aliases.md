---
title: "How to: Create bash aliases for frequently used commands"
date: 2012-02-11
description: The alias command can be quite useful for creating handy shortcuts
category: tutorial
---

The alias command can be quite useful for creating handy shortcuts and save you some typing. It has this general syntax:

```bash
# General alias syntax
alias name='command'
```

where 'name' is the alias name and command is any valid shell command. If you want your aliases to be persistant then put them in your ~/.bashrc file.

For example, you can create some handy shortcuts for apt-get:

```bash
# Alias for apt-get
alias install='sudo apt-get install'
alias addrepo='sudo apt-add-repository'
alias remove='sudo apt-get remove'
alias autoremove='sudo apt-get autoremove'
alias update='sudo apt-get update'
alias upgrade='sudo apt-get upgrade'
alias distupgrade='sudo apt-get dist-upgrade'
```

Restart your shell and you should be good to go!

Now you can simply type `install firefox` instead of `sudo apt-get install firefox`.

It is a common practice to put all your aliases in a separate file and then load that file into your .bashrc. The way to do this is to copy all the aliases to another file say, .bash_aliases.

Then, edit your .bashrc file and add the following code:

```bash
# include .bash_aliases if it exists
if [ -f "$HOME/.bash_aliases" ]; then
    . "$HOME/.bash_aliases"
fi
```

Inform the shell of these changes by executing the command: `exec $SHELL`

**_NOTE_**

If you are on Ubuntu, you do not have to edit the .bashrc file; .bash_aliases will be already included for you.
