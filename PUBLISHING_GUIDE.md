
# Technical Blueprint: SurokkhaNet Child-Side Application

This document provides a comprehensive technical blueprint for developing the SurokkhaNet child-side mobile application. This application is designed to work in conjunction with the SurokkhaNet admin dashboard, using Firebase as the backend for data synchronization and command handling.

---

## 1. System Architecture Overview

The system consists of two main components:
1.  **Admin Dashboard (Web Application):** A Next.js application that serves as a control panel for parents to monitor activity and send commands. (This is the application you currently have).
2.  **Child-Side App (Mobile Application):** A mobile application (to be built) that runs on the child's device. It collects data, uploads it to Firebase, and listens for commands from the dashboard.

**Communication Hub:** **Firebase Realtime Database** and **Firebase Storage** act as the central bridge between the dashboard and the child-side app.

---

## 2. Recommended Technology Stack (for Child App)

For efficient development, a cross-platform framework is recommended.
*   **Primary Recommendation:** **Flutter** or **React Native**. These frameworks allow for a single codebase for both Android and iOS.
*   **Alternative:** Native development using **Kotlin** for Android and **Swift** for iOS.

---

## 3. Firebase Database Schema

The entire system's functionality depends on a well-structured Firebase Realtime Database. The following schema must be implemented precisely.

**Root Path:** `/devices`

```json
{
  "devices": {
    "UNIQUE_DEVICE_ID_1": {
      "info": {
        "deviceName": "Sam's Phone",
        "model": "Samsung Galaxy S22",
        "battery": 95,
        "gpsStatus": "On",
        "wifi": "Home_Network_5G",
        "status": "Online",
        "lastSeen": "timestamp"
      },
      "settings": {
        "isStealthMode": false,
        "blockedKeywords": {
          "casino": true,
          "violence": true
        },
        "blockedApps": {
          "com.instagram.android": true
        }
      },
      "commands": {
        "takeScreenshot": { "status": "pending", "timestamp": 1678886400 },
        "recordSurround": { "status": "idle", "duration": 300 },
        "exportData": { "status": "idle" }
      },
      "logs": {
        "calls": {
          "log_id_1": { "type": "Outgoing", "number": "(555) 123-4567", "duration": 321, "date": "timestamp" }
        },
        "messages": {
          "msg_id_1": { "from": "John Doe", "message": "Hey...", "date": "timestamp" }
        },
        "browserHistory": {
          "hist_id_1": { "url": "youtube.com", "title": "YouTube", "date": "timestamp", "incognito": false }
        },
        "appUsage": {
          "usage_id_1": { "appName": "YouTube", "packageName": "com.google.android.youtube", "usageTime": 5400, "date": "timestamp" }
        },
        "location": {
          "loc_id_1": { "latitude": 40.7128, "longitude": -74.0060, "timestamp": "timestamp" }
        }
      },
      "files": {
        "screenshots": {
          "file_id_1": { "name": "IMG_2024.jpg", "url": "firebase_storage_url", "timestamp": "timestamp" }
        },
        "recordings": {
          "file_id_2": { "name": "REC_2024.mp3", "url": "firebase_storage_url", "timestamp": "timestamp" }
        }
      }
    }
  }
}
```

---

## 4. Core Functionality and Implementation Guide

### 4.1. First-Time Setup & Device Linking

**Objective:** Securely link the child's device to the parent's dashboard.

**Steps:**
1.  **Initiation (Admin Dashboard):** The parent clicks "Add New Device" on the dashboard, which displays a unique, short-lived **Connection Code** (e.g., `A4B-9K2-C7D`). This code is temporarily stored in Firebase under a path like `/pending_connections/{connection_code}`.
2.  **User Input (Child App):** The child app, on its first launch, will prompt the user to enter this Connection Code.
3.  **Verification & Linking (Child App):**
    *   The child app verifies the entered code against the `/pending_connections` path in Firebase.
    *   Upon successful verification, the child app generates a `UNIQUE_DEVICE_ID` (e.g., using `UUID`).
    *   It then creates the main device node at `devices/{UNIQUE_DEVICE_ID}`, populating it with initial device info (`deviceName`, `model`).
    *   Finally, it removes the code from `/pending_connections`.
4.  **Confirmation (Admin Dashboard):** The dashboard, listening for changes under `/devices`, will detect the new device and add it to the list, completing the linking process.

### 4.2. Persistent Background Service

**Objective:** The app must run continuously in the background to collect data and listen for commands, even if the app is closed or the phone restarts.

**Implementation (Android):**
*   Use a `ForegroundService`. This displays a persistent notification, making it less likely for the OS to kill the service.
*   Use a `BroadcastReceiver` to listen for the `BOOT_COMPLETED` action to restart the service after the device reboots.
*   **Required Permissions:** `FOREGROUND_SERVICE`, `RECEIVE_BOOT_COMPLETED`.

### 4.3. Feature Implementation Details (Android Example)

#### a) Stealth Mode
*   **Objective:** Hide the app icon from the device's app launcher.
*   **Listener Path:** `devices/{id}/settings/isStealthMode`
*   **Implementation:** When the value is `true`, use `PackageManager.setComponentEnabledSetting` to disable the main launcher activity. When `false`, re-enable it.
    ```java
    // Kotlin Example
    val componentName = ComponentName(context, MainActivity::class.java)
    val mode = if (isStealthMode) PackageManager.COMPONENT_ENABLED_STATE_DISABLED
               else PackageManager.COMPONENT_ENABLED_STATE_ENABLED
    context.packageManager.setComponentEnabledSetting(componentName, mode, PackageManager.DONT_KILL_APP)
    ```

#### b) Content Filtering & App Blocking
*   **Objective:** Block websites with specific keywords and prevent access to blocked apps.
*   **Listener Paths:** `devices/{id}/settings/blockedKeywords` and `devices/{id}/settings/blockedApps`.
*   **Implementation:** Use an `AccessibilityService`.
    *   This service monitors `TYPE_WINDOW_STATE_CHANGED` events to get the current app's package name and `TYPE_VIEW_TEXT_CHANGED` for browser URL changes.
    *   If the current app's package name is in the `blockedApps` list, or if a URL contains a word from the `blockedKeywords` list, programmatically trigger the "Back" button or navigate to the home screen.
    *   **Required Permissions:** `BIND_ACCESSIBILITY_SERVICE`.

#### c) Call & Message Logs
*   **Objective:** Periodically upload call and SMS logs.
*   **Implementation:** The background service, on a timer (e.g., every 15 minutes), will read from Android's `CallLog.Calls` and `Telephony.Sms` content providers.
*   New entries are pushed to `devices/{id}/logs/calls` and `devices/{id}/logs/messages`.
*   **Required Permissions:** `READ_CALL_LOG`, `READ_SMS`.

#### d) Remote Screenshot
*   **Objective:** Capture the screen when commanded by the dashboard.
*   **Listener Path:** `devices/{id}/commands/takeScreenshot`.
*   **Implementation:**
    1.  When the `status` changes to `"pending"`, use the `MediaProjection` API to capture the screen. **Note:** This requires one-time user consent on the child's device.
    2.  Upload the captured image to **Firebase Storage**.
    3.  Write the file's metadata (name, storage URL) to `devices/{id}/files/screenshots`.
    4.  Update the command status at `devices/{id}/commands/takeScreenshot/status` to `"completed"`.
*   **Required Permissions:** `FOREGROUND_SERVICE`.

---
This blueprint provides a solid foundation for building a robust and fully functional child-side application that integrates seamlessly with the SurokkhaNet admin dashboard.

    