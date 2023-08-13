import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.doc247',
  appName: 'doc247',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    // url: 'http://192.168.1.4:3000',
    // cleartext:true,
  }
};

export default config;
