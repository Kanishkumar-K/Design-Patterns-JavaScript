class ConfigManager{
    constructor(){
        if(ConfigManager.instance){
            return ConfigManager.instance
        }

        this.credential ={};
        ConfigManager.instance = this;
    }
        getvalue(key){
         return this.credential[key];
        }

        setValue(key, value){
            this.credential[key] = value;
        }

    
}

instance1 = new ConfigManager();
instance1.setValue('admin', 'Admin@123');
console.log(instance1)

instance2 = new ConfigManager();
instance2.getvalue('adamin')
console.log(instance2)