interface PushwooshConfig {
    projectid: string;
    pw_appid: string;
  }
  
  declare class PushwooshClass {
    //Function: init
    //Call this first thing with your Pushwoosh App ID (pw_appid parameter) and Google Project ID for Android (projectid parameter)
    //
    //Example:
    //(start code)
    //	//initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    //	Pushwoosh.init({ projectid: "XXXXXXXXXXXXXXX", pw_appid : "XXXXX-XXXXX" });
    //(end)
    init(config: PushwooshConfig, success?: Function, fail?: Function): void;
  
    //Function: register
    //Call this to register for push notifications and retreive a push Token
    //
    //Example:
    //(start code)
    //	Pushwoosh.registerDevice(
    //		function(token)
    //		{
    //			alert(token);
    //		},
    //		function(status)
    //		{
    //			alert("failed to register: " +  status);
    //		}
    //	);
    //(end)
    register(success?: (token: string) => void, fail?: (error: any) => void): void;
  
    //Function: unregister
    //Unregisters device from push notifications
    unregister(success?: Function, fail?: Function): void;
  
    //Function: onPushOpen
    //Deprecated - use DeviceEventEmitter.addListener('pushOpened', callback) instead
    onPushOpen(callback: Function): void;
  
    //Function: setTags
    //Call this to set tags for the device
    //
    //Example:
    //sets the following tags: "deviceName" with value "hello" and "deviceId" with value 10
    //(start code)
    //	Pushwoosh.setTags({deviceName:"hello", deviceId:10},
    //		function(status) {
    //			console.warn('setTags success');
    //		},
    //		function(status) {
    //			console.warn('setTags failed');
    //		}
    //	);
    //
    //	//setings list tags "MyTag" with values (array) "hello", "world"
    //	pushNotification.setTags({"MyTag":["hello", "world"]});
    //(end)
    setTags(tags: Object, success?: Function, fail?: Function): void;
  
    //Function: getTags
    //Call this to get tags for the device
    //
    //Example:
    //(start code)
    //	Pushwoosh.getTags(
    //		function(tags)
    //		{
    //			console.warn('tags for the device: ' + JSON.stringify(tags));
    //		},
    //		function(error)
    //		{
    //			console.warn('get tags error: ' + JSON.stringify(error));
    //		}
    //	);
    //(end)
    getTags(success: Function, fail?: Function): void;
  
    //Function: setShowPushnotificationAlert
    //Set push notifications alert when push notification is received while the app is running, default is `true`
    //
    //Example:
    //(start code)
    //    Pushwoosh.setShowPushnotificationAlert(false);
    //(end)
    setShowPushnotificationAlert(showPushnotificationAlert: boolean): void;
  
    //Function: getShowPushnotificationAlert
    //Show push notifications alert when push notification is received while the app is running, default is `true`
    //
    //Example:
    //(start code)
    //    Pushwoosh.getShowPushnotificationAlert((showPushnotificationAlert) => {
    //                                           console.warn("showPushnotificationAlert = " + showPushnotificationAlert);
    //                                           });
    //(end)
    getShowPushnotificationAlert(callback: Function): void;
  
    //Function: getPushToken
    //Call this to get push token if it is available. Note the token also comes in registerDevice function callback.
    //
    //Example:
    //(start code)
    //	Pushwoosh.getPushToken(
    //		function(token)
    //		{
    //			console.warn('push token: ' + token);
    //		}
    //	);
    //(end)
    getPushToken(success: Function): void;
  
    //Function: getHwid
    //Call this to get Pushwoosh HWID used for communications with Pushwoosh API
    //
    //Example:
    //(start code)
    //	Pushwoosh.getHwid(
    //		function(token) {
    //			console.warn('Pushwoosh HWID: ' + token);
    //		}
    //	);
    //(end)
    getHwid(success: Function): void;
  
    //Function: setUserId
    //[android, ios] Set User indentifier. This could be Facebook ID, username or email, or any other user ID.
    //This allows data and events to be matched across multiple user devices.
    //
    //Parameters:
    // "userId" - user string identifier
    //
    setUserId(userId: string): void;
  
    //Function: postEvent
    //[android, ios] Post events for In-App Messages. This can trigger In-App message display as specified in Pushwoosh Control Panel.
    //
    //Parameters:
    // "event" - event to trigger
    // "attributes" - object with additional event attributes
    //
    // Example:
    //(start code)
    // Pushwoosh.setUserId("XXXXXX");
    // Pushwoosh.postEvent("buttonPressed", { "buttonNumber" : 4, "buttonLabel" : "banner" });
    //(end)
    postEvent(event: string, attributes?: Object): void;
  
    //Function: startLocationTracking
    //[android, ios, wp8, windows] Starts geolocation based push notifications. You need to configure Geozones in Pushwoosh Control panel.
    //
    //Parameters:
    // "success" - success callback
    // "fail" - error callback
    //
    startLocationTracking(): void;
  
    //Function: stopLocationTracking
    //[android, ios, wp8, windows] Stops geolocation based push notifications
    //
    //Parameters:
    // "success" - success callback
    // "fail" - error callback
    //
    stopLocationTracking(): void;
  
    //Function: setApplicationIconBadgeNumber
    //[android, ios, wp8, windows] Set the application icon badge number
    //
    //Parameters:
    // "badgeNumber" - icon badge number
    //
    setApplicationIconBadgeNumber(badgeNumber: number): void;
  
    //Function: getApplicationIconBadgeNumber
    //[android, ios] Returns the application icon badge number
    //
    //Parameters:
    // "callback" - success callback
    //
    //Example:
    //(start code)
    //	Pushwoosh.getApplicationIconBadgeNumber(function(badge){ alert(badge);} );
    //(end)
    getApplicationIconBadgeNumber(callback: Function): void;
  
    //Function: addToApplicationIconBadgeNumber
    //[android, ios] Adds value to the application icon badge
    //
    //Parameters:
    // "badgeNumber" - incremental icon badge number
    //
    //Example:
    //(start code)
    //	Pushwoosh.addToApplicationIconBadgeNumber(5);
    //	Pushwoosh.addToApplicationIconBadgeNumber(-5);
    //(end)
    addToApplicationIconBadgeNumber(badgeNumber: number): void;
  
    //Function: setMultiNotificationMode
    //[android] Allows multiple notifications to be displayed in the Android Notification Center
    setMultiNotificationMode(on: boolean): void;
  
    //Function: setLightScreenOnNotification
    //[android] Turns the screen on if notification arrives
    //
    //Parameters:
    // "on" - enable/disable screen unlock (is disabled by default)
    //
    setLightScreenOnNotification(on: boolean): void;
  
    //Function: setEnableLED
    //[android] Enables led blinking when notification arrives and display is off
    //
    //Parameters:
    // "on" - enable/disable led blink (is disabled by default)
    //
    setEnableLED(on: boolean): void;
  
    //Function: setEnableLED
    //[android] Set led color. Use with <setEnableLED>
    //
    //Parameters:
    // "color" - led color in ARGB integer format
    //
    setColorLED(color: number): void;
  
    //Function: setSoundType
    //[android] Sets default sound to play when push notification arrive.
    //
    //Parameters:
    // "type" - Sound type (0 - default, 1 - no sound, 2 - always)
    //
    setSoundType(type: number): void;
  
    //Function: setVibrateType
    //[android] Sets default vibration mode when push notification arrive.
    //
    //Parameters:
    // "type" - Vibration type (0 - default, 1 - no vibration, 2 - always)
    //
    setVibrateType(type: number): void;
  
    //Function: presentInboxUI
    //[android, ios] Opens Inbox screen.
    //
    // Supported style keys:
    //
    // Customizes the date formatting
    // "dateFormat"
    //
    // The default icon in the cell next to the message; if not specified, the app icon is used
    // "defaultImageIcon"
    //
    // The appearance of the unread messages mark (iOS only)
    // "unreadImage"
    //
    // The image which is displayed if an error occurs and the list of inbox messages is empty
    // "listErrorImage"
    //
    // The image which is displayed if the list of inbox messages is empty
    // "listEmptyImage"
    //
    // The error text which is displayed when an error occurs; cannot be localized
    // "listErrorMessage"
    //
    // The text which is displayed if the list of inbox messages is empty; cannot be localized
    // "listEmptyMessage"
    //
    // The default text color (iOS only)
    // "defaultTextColor"
    //
    // The accent color
    // "accentColor"
    //
    // The default background color
    // "backgroundColor"
    //
    // The default selection color
    // "highlightColor"
    //
    // The color of message titles
    // "titleColor"
    //
    // The color of message titles if message was readed (Android only)
    // "readTitleColor"
    //
    // The color of messages descriptions
    // "descriptionColor"
    //
    // The color of messages descriptions if message was readed (Android only)
    // "readDescriptionColor"
    //
    // The color of message dates
    // "dateColor"
    //
    // The color of message dates if message was readed (Android only)
    // "readDateColor"
    //
    // The color of the separator
    // "dividerColor"
    //
    //Example:
    //(start code)
    //	Pushwoosh.presentInboxUI({
    //   "dateFormat" : "dd.MMMM.YYYY",
    //   "defaultImageIcon" : Image.resolveAssetSource(require('./icon.png')),
    //   "listErrorImage" : Image.resolveAssetSource(require('./error.png')),
    //	 "listEmptyImage" : Image.resolveAssetSource(require('./empty.png')),
    //   "listErrorMessage" : "Error message1",
    //   "listEmptyMessage" : "Error message2",
    //   "accentColor" : processColor('#ff00ff'),
    //   "highlightColor" : processColor('yellow'),
    //   "dateColor" : processColor('blue'),
    //   "titleColor" : processColor('#ff00ff'),
    //   "dividerColor" : processColor('#ff00ff'),
    //   "descriptionColor" : processColor('green'),
    //   "backgroundColor" : processColor('rgba(255, 100, 30, 1.0)')
    // });
    //(end)
  
    presentInboxUI(style?: Object) {
      // eslint-disable-next-line
      PushwooshModule.presentInboxUI(style);
    }
  
    // Show inApp for change setting Enable/disable all communication with Pushwoosh
    showGDPRConsentUI(): void;
  
    // Show inApp for all device data from Pushwoosh and stops all interactions and communication permanently.
    showGDPRDeletionUI(): void;
  
    isDeviceDataRemoved(success: Function): void;
  
    // Return flag is enable communication with server
    isCommunicationEnabled(success: Function): void;
  
    // Return flag is enabled GDPR on server
    isAvailableGDPR(success: Function): void;
  
    // Enable/disable all communication with Pushwoosh. Enabled by default.
    setCommunicationEnabled(enable: boolean, success?: Function, fail?: Function): void;
  
    // Removes all device data from Pushwoosh and stops all interactions and communication permanently.
    removeAllDeviceData(success?: Function, fail?: Function): void;
  }
  
  declare const Pushwoosh: PushwooshClass;
  
  declare module 'pushwoosh-react-native-plugin' {
    export = Pushwoosh;
  }
  