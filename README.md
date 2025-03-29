# Welcome to your Expo app 👋

App configuration

## Get started

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

3. Run doctor cmd

   ```bash
    npx expo-doctor
   ```

3. Update all package

   ```bash
    npx expo install --check
   ```

## EAS

### Configure EAS JSON
```bash
eas build:configure
```

### Creating Server Build IOS
```bash
eas build --profile simulator --platform ios
```

### Creating Server Build ANDROID
```bash
eas build --profile development --platform android
```

### Creating Local Build IOS
```bash
eas build --profile development --p ios --local
```

### Creating Local Build ANDROID
```bash
eas build --profile preview --platform android --local
```

### Create IOS testing Device
```bash
eas device:create
```