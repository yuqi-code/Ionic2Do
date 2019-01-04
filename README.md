# Ionic2Do
This is a starter template for the Ionic2Do app from [Mobile App Development with Ionic 2](http://www.ionic2book.com/) published by O'Reilly Press.

## How to use this template

*This template does not work on its own*.

```bash
$ sudo npm install -g ionic cordova
$ ionic start Ionic2Do blank
$ cd Ionic2Do
```

Once you have created the starter Ionic application using the steps above, download this repo and copy over the src and www directories into the newly created folder, replacing the initial src and www directory. You will still need to follow any additional steps in the book.

*s1_ionic_start

```bash
$ git remote add origin https://github.com/yuqi-code/Ionic2Do
$ git checkout master
(—save copy)
$ git pull origin master --allow-unrelated-histories
(—restore copy)
$ git add .
$ git commit -a -m "ionic start Ionic2Do blank"
$ git push origin master

$ git tag -a s1_ionic_start -m "ionic start ..." HEAD
$ git push origin tag s1_ionic_start
```

*s2_tasklist

```bash
rename home to tasklist
edit tasklist.html, add button and list
implement tasklist control

$ git tag -a s2_tasklist -m "tasklist" HEAD
$ git push origin tag s2_tasklist
```

*s3_tasklist_slidingItem

```bash
update tasklist, add slidingItem

$ git tag -a s3_tasklist_slidingItem -m "tasklist slidingItem" HEAD
$ git push origin tag s3_tasklist_slidingItem
```
