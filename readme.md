# react-native-collapsible-accordion

**How To Use**
  ```yarn add react-native-collapsible-accordion```
            or
  ```npm install react-native-collapsible-accordion```
  
  **What you get**
  - Pure Javascript
  - keeps your code clearner
  - build with hooks api
  - customize your header and content as per your own requirement
  - listner for expension state change i.e onChangeVisibility

**Example Code**
```javascript

import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Accordion from 'react-native-collapsible-accordion';
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
    return (
      <View style={styles.container}>
         <Accordion
            onChangeVisibility={(value) => {
                setShowMoreInfo(value)
                 }}
            renderHeader={() => (
                   <View style={styles.wrapDropDownHeader}>
                     <Text style={styles.moreInfoText}>More Info(optional)
                     </Text>
                     <AntDesign
                       style={styles.dropIcon}
                       name={!showMoreInfo ? 'down' : 'up'}
                     />
                   </View>
                 )}
                 renderContent={() => (
                     <View style={{ marginHorizontal: 15, backgroundColor: '#eee' }}>
                        <Text style={{
                          marginVertical: 30
                        }}>Optional content</Text>
                     </View>
                 )}
          />
      </View>
    );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  wrapDropDownHeader: {
    paddingHorizontal: 15,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});


```


 GitHub https://github.com/shubhamdeol 



### Development

Want to contribute? Great!
- send me pull request