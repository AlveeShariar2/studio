
# Technical Blueprint & Solutions: SurokkhaNet Child-Side Application

This document provides a comprehensive technical blueprint for developing the SurokkhaNet child-side mobile application. It addresses common technical and policy challenges and offers robust solutions to build a reliable, compliant, and effective parental control tool. This guide is designed to be a self-sufficient resource for any developer or AI.

---

## 1. Core Principle: Transparency and Consent

To navigate the complex legal and ethical landscape of monitoring apps, the core principle of this application must be **Informed Consent**. The app should be positioned as a tool for safety, used with the knowledge and agreement of the device user, not as "spyware."

---

## 2. Onboarding & Consent Flow (First-Time Setup)

This is the most critical phase for legal compliance and user trust.

1.  **Installation:** The parent installs the app on the child's device.
2.  **Welcome Screen:** On the first launch, the app must display a clear welcome screen explaining its purpose (e.g., "This device is protected by SurokkhaNet for your safety").
3.  **Feature & Data Disclosure:** The next screen must clearly list **what data will be collected** (e.g., location, call logs, app usage) and **what features will be active** (e.g., remote camera access, screen monitoring).
4.  **Parental Authentication:** The parent must then enter their SurokkhaNet account credentials (email/password) to prove they are the authorized administrator.
5.  **Device Linking:**
    *   After successful authentication, the parent is prompted to enter a name for the device (e.g., "Sam's Phone").
    *   The child app then securely communicates with Firebase, creates the device profile under the parent's account, and establishes the connection.
6.  **Final Consent & Activation:** A final screen appears, summarizing the active protections. Tapping "Activate" completes the setup.

---

## 3. Technical Solutions for Key Challenges

### a) Challenge: Background Service Instability
*   **Problem:** Modern Android versions aggressively kill background services to save battery, making data collection unreliable.
*   **Solution: Use a `Foreground Service` with a Persistent Notification.**
    *   A `ForegroundService` runs at a higher priority. It requires a persistent, non-dismissible notification.
    *   This notification should be discreet, e.g., "Device Security is Active," with a simple shield icon. This fulfills OS requirements while maintaining a low profile.
    *   **Implementation (Kotlin/Android):**
        ```kotlin
        // In your service
        val notification = NotificationCompat.Builder(this, "CHANNEL_ID")
            .setContentTitle("Device Security")
            .setContentText("This device is being actively protected.")
            .setSmallIcon(R.drawable.ic_security_shield) // A generic shield icon
            .build()

        startForeground(SERVICE_ID, notification)
        ```
    *   Use `WorkManager` for deferrable tasks (like uploading bulk logs) and a `BroadcastReceiver` for `BOOT_COMPLETED` to restart the service after reboot.

### b) Challenge: Stealth Mode & App Icon Hiding
*   **Problem:** Directly hiding the app icon is unreliable across different Android OEMs (Xiaomi, Samsung) and is a major red flag for Google Play Store, leading to suspension.
*   **Solution: Rebrand as a System Utility & Use an Alias.**
    *   **App Name:** Change the app's public name to something innocuous like "Device Security," "System Service," or "Analytics Service."
    *   **App Icon:** Use a generic icon, like a blue or grey shield, a gear, or an abstract shape.
    *   **Activity Alias:** In `AndroidManifest.xml`, create a launcher `activity-alias`. You can programmatically disable this alias after the initial setup, which effectively removes the primary launch icon without the aggressive permissions required to hide the app completely.
        ```xml
        <!-- AndroidManifest.xml -->
        <activity-alias
            android:name=".LauncherAlias"
            android:targetActivity=".MainActivity"
            android:label="@string/utility_app_name"
            android:icon="@mipmap/ic_utility_icon">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity-alias>
        ```
        ```kotlin
        // After setup, disable the alias
        val componentName = ComponentName(context, ".LauncherAlias")
        context.packageManager.setComponentEnabledSetting(
            componentName,
            PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
            PackageManager.DONT_KILL_APP
        )
        ```

---

## 4. Google Play Store & Legal Compliance Strategy

*   **Declare as a Parental Control App:** When submitting to the Play Store, you **must** declare that the app's primary function is parental monitoring.
*   **`isMonitoringTool` Flag:** In the app's manifest, you must include the following metadata to comply with Google's Stalkerware policy:
    ```xml
    <!-- AndroidManifest.xml -->
    <application ...>
        <meta-data android:name="isMonitoringTool" android:value="child_monitoring" />
        ...
    </application>
    ```
*   **Privacy Policy:** Have a comprehensive, easily accessible privacy policy that details all data collection, storage, and usage.
*   **Distribution:** If the features are too aggressive for the Play Store (e.g., ambient sound recording), the only viable option is **direct APK distribution** from a trusted website.

---

## 5. Firebase Database Schema & API

(The schema remains as previously defined, as it is robust for this purpose).

**Key Listener Implementation (Flutter/Dart Example):**
```dart
// Listening for commands from the admin dashboard
final dbRef = FirebaseDatabase.instance.ref('devices/$deviceId/commands/takeScreenshot');
dbRef.onValue.listen((DatabaseEvent event) {
  final data = event.snapshot.value as Map<String, dynamic>;
  if (data['status'] == 'pending') {
    // Trigger native Kotlin/Swift code to take screenshot
    await nativeChannel.invokeMethod('captureScreen');
    // Update status back to 'completed'
    await dbRef.update({'status': 'completed', 'timestamp': ServerValue.timestamp});
  }
});
```
This revised blueprint provides a clear, compliant, and technically sound path to developing the SurokkhaNet child-side application.