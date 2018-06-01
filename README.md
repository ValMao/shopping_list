# Shopping List 

This project uses React Native. 
I only have a iPhone and a Windows laptop, so I decide not to build IOS app. I only tested this project via android emulator, not sure if it works on a real android device, but it worth to try. 

## Installing
* Unzip file
* Open Node Command

```
cd directory
```

* Install node modules

```
npm install

yarn install
```
(this would take 5-10 minutes)

* Run the project

Open a andriod emulator

then run
```
react-native start
```

this will open a node command line to start the project automatively, and build the project to emulator

\* if has error:
```
Error: A problem occurred configuring project ':app'.**
> Could not resolve all dependencies for configuration ':app:_debugApkCopy'.
   > Could not find com.google.android.gms:play-services-appindexing:10.0.1.
```

update the android SDK, and 
run
```
reac-native upgrade
```

then enter Y to replace all files to get the latest version. 

## What is include
* Data is stored in Firebase, which can be viewed through https://console.firebase.google.com/u/2/project/shopping-list-7c69f/database/shopping-list-7c69f/data

* Add, Delete feature are available
* Edit is not working
* image is not stored to database


