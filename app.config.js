const myValue = 'My App';

export default {
  name: myValue,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
  // All values in extra will be passed to your app.
  extra: {
    fact: 'kittens are cool',
  },
  "android": {
    "package": "com.verm3331.myapp"
  }
};