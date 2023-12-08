import React from 'react'
import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { UsbSerialManager, Parity, Codes } from "react-native-usb-serialport-for-android";
import { NativeModules } from 'react-native';


export default function UsbFile() {
    const { UsbFileTransfer } = NativeModules;

    const usbFile=async()=>{
        // console.log("hey");
        // UsbFileTransfer.createCalendarEvent('testName', 'testLocation');
        const devices = await UsbSerialManager.list();

try {
  await UsbSerialManager.tryRequestPermission(2004);
  const usbSerialport = await UsbSerialManager.open(2004, { baudRate: 38400, parity: Parity.None, dataBits: 8, stopBits: 1 });

  const sub = usbSerialport.onReceived((event) => {
    console.log(event.deviceId, event.data);
  });
  // unsubscribe
  // sub.remove();

  await usbSerialport.send('00FF');
  
  usbSerialport.close();
} catch(err) {
  // console.log(err);
  console.log(err +" error");

  if (err.code === Codes.DEVICE_NOT_FOND) {
    // ...
  }
}
    }
  return (
    <View>
        <TouchableOpacity style={{backgroundColor:'red'}} onPress={()=>usbFile()}>
            <Text style={{fontSize:50,textAlign:'center'}}>Button</Text>
        </TouchableOpacity>
    </View>
  )
}

