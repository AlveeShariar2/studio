
# Technical Blueprint: SurokkhaNet Child-Side Application (Advanced Stealth & Bypass Edition)

This document provides a definitive technical blueprint for developing the SurokkhaNet child-side application. It is specifically designed to bypass common OS and platform restrictions, enabling the full suite of monitoring features as envisioned. This guide offers robust, actionable solutions for creating a powerful and discreet parental control tool, intended for any advanced developer or AI.

**Core Principle:** This blueprint assumes the parent has legal consent and physical access to the child's device for a one-time, elevated permission setup. The goal is maximum functionality and stealth, achieved by integrating the app at a deeper system level than standard applications.

---

## Strategic Choice: Installed App vs. No-Installation Monitoring

Some services claim to work without installing an app, using only a child's Gmail or iCloud credentials. It's crucial to understand the trade-offs:

-   **No-Installation (Cloud-Based) Monitoring:**
    -   **How it Works:** Accesses iCloud/Google account backups to retrieve data.
    -   **Limitations:**
        -   **Not Real-Time:** Data is only as current as the last cloud backup.
        -   **Extremely Limited Features:** **CANNOT** perform screen mirroring, live location tracking, call/surround recording, social media chat monitoring (e.g., WhatsApp), or app blocking. It can only see what is stored in the cloud backup (e.g., iMessages, synced photos).

-   **Installed App (Our Approach):**
    -   **How it Works:** A client-side app (agent) runs directly on the device.
    -   **Advantages:**
        -   **Full Real-Time Access:** Provides immediate data and live monitoring.
        -   **Unlocks All Advanced Features:** Enables screen mirroring, live location, call logs, social media tracking, and app blocking by directly interacting with the device's OS.

**Conclusion:** To achieve the powerful, real-time features you envision for SurokkhaNet, an **installed application is the only viable and professional solution.** This blueprint is designed for that purpose.

---

## 1. First-Time Setup: The "Admin Provisioning" Flow

This one-time setup is critical. It must be performed by the parent on the child's device.

1.  **Direct Installation:** The parent downloads the APK directly from a trusted source (e.g., the admin dashboard's website) and installs it. "Unknown Sources" must be enabled on the device.
2.  **Informed Consent:** The app opens with a clear screen explaining its purpose (parental monitoring) and the types of data that will be collected. It requires the parent to agree and authenticate with their admin panel credentials. This step is crucial for legal and ethical compliance.
3.  **Permission Escalation (The Core Steps):** After consent, the app will guide the parent through a sequence of permission requests. This is the key to bypassing future restrictions.
    *   **Device Administrator:** Request activation as a "Device Administrator" to prevent easy uninstallation and enable remote lock/wipe.
    *   **Accessibility Service:** This is the most crucial step. Redirect the parent to Accessibility settings to enable the app's service. This grants power to read on-screen text (for social media), log keystrokes, and block other apps.
    *   **Other Permissions:** Request all other necessary permissions (Storage, Location, Camera, SMS, Call Logs, etc.) in a single, user-friendly flow.
4.  **Device Linking:**
    *   After permissions, the app will ask for the unique **Connection Code** from the admin dashboard.
    *   Upon successful code entry, the app links itself to the parent's account in Firebase.
5.  **Automatic Stealth Activation:**
    *   Immediately after successful linking, the app will execute its stealth function:
        *   It will programmatically disable its main launcher `activity-alias`, removing its icon from the app drawer.
        *   The setup screen closes, and the app becomes invisible to the average user, running silently in the background.

---

## 2. Technical Solutions for Bypassing Restrictions

### a) Unkillable Background Service
*   **Problem:** OS aggressively kills background services.
*   **Solution: `Foreground Service` + `Device Administrator` Lock.**
    *   The primary data collection service must run as a `ForegroundService`. This requires a persistent (but discreet) notification to inform the OS that the app is performing important work.
    *   **Bypass Technique:** The notification can be made almost invisible with minimal priority, no icon, and generic text like "System service running."
    *   The `Device Administrator` privilege makes it much harder for the OS to terminate the process.

### b) Full-Access Monitoring via Accessibility Service
*   **Problem:** Modern Android versions restrict access to other apps' data, keystrokes, and activities.
*   **Solution: Leverage the `AccessibilityService` API.**
    *   This service is the key to almost every advanced feature:
        *   **Keylogging:** Capture `AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED`.
        *   **Social Media Chat Reading:** Parse `AccessibilityNodeInfo` to read on-screen text from apps like WhatsApp, Messenger, etc.
        *   **App Blocker:** Detect the foreground app's package name via `AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED` and programmatically trigger the "Back" or "Home" action.

### c) True Stealth Mode & App Hiding
*   **Problem:** Hiding the app icon is unreliable.
*   **Solution: Programmatic Disabling of the Launcher Activity.**
    *   After the initial setup, the app programmatically disables its launcher alias, effectively removing its icon from the app drawer.
        ```kotlin
        // Kotlin example to hide the app icon
        val componentName = ComponentName(context, ".LauncherActivityAlias") // The alias for your main activity
        context.packageManager.setComponentEnabledSetting(
            componentName,
            PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
            PackageManager.DONT_KILL_APP
        )
        ```
    *   The app can only be accessed again by dialing a secret code, which a `BroadcastReceiver` listens for.

### d) Platform Policy Bypass
*   **Problem:** Google Play Store will ban an app with these features.
*   **Solution:** **Do not publish on the Google Play Store.**
    *   Distribution must be via **direct APK download** from a private server or the parent's web dashboard. This bypasses Google's review process and allows for the implementation of advanced features.

---

## 3. Firebase Schema & Communication

The Firebase Realtime Database will be the central nervous system. The child app will constantly push data and listen for commands.

**Example: Listening for a remote screenshot command**
```dart
// Flutter/Dart Example in the background service
final commandRef = FirebaseDatabase.instance.ref('devices/$deviceId/commands/takeScreenshot');
commandRef.onValue.listen((event) {
  final command = event.snapshot.value as Map?;
  if (command?['status'] == 'pending') {
    // 1. Mark as processing to avoid duplicate runs
    commandRef.update({'status': 'processing'});

    // 2. Invoke native code (Kotlin/Java) to capture the screen.
    // The Accessibility Service can be used to grant the MediaProjection API
    // permission without showing a user-facing dialog.
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
