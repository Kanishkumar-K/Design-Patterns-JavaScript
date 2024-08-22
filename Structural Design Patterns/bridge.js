class Device {
    turnOn() {}
    turnOff() {}
    setVolume(volume) {}
  }
  
  class TV extends Device {
    turnOn() {
      console.log("TV is now ON");
    }
  
    turnOff() {
      console.log("TV is now OFF");
    }
  
    setVolume(volume) {
      console.log(`TV volume set to ${volume}`);
    }
  }
  
  class Radio extends Device {
    turnOn() {
      console.log("Radio is now ON");
    }
  
    turnOff() {
      console.log("Radio is now OFF");
    }
  
    setVolume(volume) {
      console.log(`Radio volume set to ${volume}`);
    }
  }
  
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    togglePower() {
      console.log("Toggling power");
      this.device.turnOn();
    }
  
    volumeUp() {
      console.log("Increasing volume");
      this.device.setVolume(10); 
    }
  
    volumeDown() {
      console.log("Decreasing volume");
      this.device.setVolume(-10);
    }
  }
  
  const tv = new TV();
  const radio = new Radio();
  
  const tvRemote = new RemoteControl(tv);
  const radioRemote = new RemoteControl(radio);
  
tvRemote.togglePower();
tvRemote.volumeDown();


  