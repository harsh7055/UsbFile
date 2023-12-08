package com.usbfile;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
public class UsbFileTransfer extends ReactContextBaseJavaModule {
    UsbFileTransfer(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "UsbFileTransfer";
    }
  
@ReactMethod
public void createCalendarEvent(String name, String location) {
   Log.d("CalendarModule", "Create event called with name: " + name
   + " and location: " + location);
}

}