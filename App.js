import { Text, SafeAreaView, StyleSheet, Button, View, ScrollView, ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.imageBackground}>
      <ImageBackground source={require('./assets/2.png')} style={styles.imageBackground}>
      
        <Text style={styles.btn}>TABUADA</Text>
        <Button 
          title="Tabuada do 2"
          onPress={() => navigation.navigate('TabuadaDo2')} 
          color= "#5b5e07"
        />
        <Button
          title="Tabuada do 3"
          onPress={() => navigation.navigate('TabuadaDo3')}
          color= "#075e0a"
        />
        <Button
          title="Tabuada do 4"
          onPress={() => navigation.navigate('TabuadaDo4')}
          color= "#075e3d"
        />
        <Button
          title="Tabuada do 5"
          onPress={() => navigation.navigate('TabuadaDo5')}
          color= "#074a5e"
        />
        <Button
          title="Tabuada do 6"
          onPress={() => navigation.navigate('TabuadaDo6')}
          color= "#071a5e"
        />
        <Button
          title="Tabuada do 7"
          onPress={() => navigation.navigate('TabuadaDo7')}
          color= "#2a075e"
        />
        <Button
          title="Tabuada do 8"
          onPress={() => navigation.navigate('TabuadaDo8')}
          color= "#59075e"
        />
        <Button
          title="Tabuada do 9"
          onPress={() => navigation.navigate('TabuadaDo9')}
          color= "#5e0735"
        />
        <Button
          title="Tabuada do 10"
          onPress={() => navigation.navigate('TabuadaDo10')}
          color= "#5e0707"
        />
      </ImageBackground>
    </View>
  );
}

function TabuadaDo2 ({ navigation}) {
  return (
    <ScrollView>
      <View style={styles.imageBackground}>
        <ImageBackground source={require('./assets/1.png')} style={styles.imageBackground}>
          <Text style={styles.paragraph}>Tabuada do 2</Text>
          <Text style={styles.paragraph}>2 x 1 = 2</Text>
          <Text style={styles.paragraph}>2 x 2 = 4</Text>
          <Text style={styles.paragraph}>2 x 3 = 6</Text>
          <Text style={styles.paragraph}>2 x 4 = 8</Text>
          <Text style={styles.paragraph}>2 x 5 = 10</Text>
          <Text style={styles.paragraph}>2 x 6 = 12</Text>
          <Text style={styles.paragraph}>2 x 7 = 14</Text>
          <Text style={styles.paragraph}>2 x 8 = 16</Text>
          <Text style={styles.paragraph}>2 x 9 = 18</Text>
          <Text style={styles.paragraph}>2 x 10 = 20</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function TabuadaDo3 ({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.imageBackground}>
        <ImageBackground source={require('./assets/1.png')} style={styles.imageBackground}>
          <Text style={styles.paragraph}>Tabuada do 3</Text>
          <Text style={styles.paragraph}>3 x 1 = 3</Text>
          <Text style={styles.paragraph}>3 x 2 = 6</Text>
          <Text style={styles.paragraph}>3 x 3 = 9</Text>
          <Text style={styles.paragraph}>3 x 4 = 12</Text>
          <Text style={styles.paragraph}>3 x 5 = 15</Text>
          <Text style={styles.paragraph}>3 x 6 = 18</Text>
          <Text style={styles.paragraph}>3 x 7 = 21</Text>
          <Text style={styles.paragraph}>3 x 8 = 24</Text>
          <Text style={styles.paragraph}>3 x 9 = 27</Text>
          <Text style={styles.paragraph}>3 x 10 = 30</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function TabuadaDo4 ({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.imageBackground}>
        <ImageBackground source={require('./assets/1.png')} style={styles.imageBackground}>
          <Text style={styles.paragraph}>Tabuada do 4</Text>
          <Text style={styles.paragraph}>4 x 1 = 4</Text>
          <Text style={styles.paragraph}>4 x 2 = 8</Text>
          <Text style={styles.paragraph}>4 x 3 = 12</Text>
          <Text style={styles.paragraph}>4 x 4 = 16</Text>
          <Text style={styles.paragraph}>4 x 5 = 20</Text>
          <Text style={styles.paragraph}>4 x 6 = 24</Text>
          <Text style={styles.paragraph}>4 x 7 = 28</Text>
          <Text style={styles.paragraph}>4 x 8 = 32</Text>
          <Text style={styles.paragraph}>4 x 9 = 36</Text>
          <Text style={styles.paragraph}>4 x 10 = 40</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function TabuadaDo5 ({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.imageBackground}>
        <ImageBackground source={require('./assets/1.png')} style={styles.imageBackground}>
          <Text style={styles.paragraph}>Tabuada do 5</Text>
          <Text style={styles.paragraph}>5 x 1 = 5</Text>
          <Text style={styles.paragraph}>5 x 2 = 10</Text>
          <Text style={styles.paragraph}>5 x 3 = 15</Text>
          <Text style={styles.paragraph}>5 x 4 = 20</Text>
          <Text style={styles.paragraph}>5 x 5 = 25</Text>
          <Text style={styles.paragraph}>5 x 6 = 30</Text>
          <Text style={styles.paragraph}>5 x 7 = 35</Text>
          <Text style={styles.paragraph}>5 x 8 = 40</Text>
          <Text style={styles.paragraph}>5 x 9 = 45</Text>
          <Text style={styles.paragraph}>5 x 10 = 50</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function TabuadaDo6 ({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.imageBackground}>
        <ImageBackground source={require('./assets/1.png')} style={styles.imageBackground}>
          <Text style={styles.paragraph}>Tabuada do 6</Text>
          <Text style={styles.paragraph}>6 x 1 = 6</Text>
          <Text style={styles.paragraph}>6 x 2 = 12</Text>
          <Text style={styles.paragraph}>6 x 3 = 18</Text>
          <Text style={styles.paragraph}>6 x 4 = 24</Text>
          <Text style={styles.paragraph}>6 x 5 = 30</Text>
          <Text style={styles.paragraph}>6 x 6 = 36</Text>
          <Text style={styles.paragraph}>6 x 7 = 42</Text>
          <Text style={styles.paragraph}>6 x 8 = 48</Text>
          <Text style={styles.paragraph}>6 x 9 = 54</Text>
          <Text style={styles.paragraph}>6 x 10 = 60</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function TabuadaDo7 ({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.imageBackground}>
        <ImageBackground source={require('./assets/1.png')} style={styles.imageBackground}>
          <Text style={styles.paragraph}>Tabuada do 7</Text>
          <Text style={styles.paragraph}>7 x 1 = 7</Text>
          <Text style={styles.paragraph}>7 x 2 = 14</Text>
          <Text style={styles.paragraph}>7 x 3 = 21</Text>
          <Text style={styles.paragraph}>7 x 4 = 28</Text>
          <Text style={styles.paragraph}>7 x 5 = 35</Text>
          <Text style={styles.paragraph}>7 x 6 = 42</Text>
          <Text style={styles.paragraph}>7 x 7 = 49</Text>
          <Text style={styles.paragraph}>7 x 8 = 56</Text>
          <Text style={styles.paragraph}>7 x 9 = 63</Text>
          <Text style={styles.paragraph}>7 x 10 = 70</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function TabuadaDo8 ({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.imageBackground}>
        <ImageBackground source={require('./assets/1.png')} style={styles.imageBackground}>
          <Text style={styles.paragraph}>Tabuada do 8</Text>
          <Text style={styles.paragraph}>8 x 1 = 8</Text>
          <Text style={styles.paragraph}>8 x 2 = 16</Text>
          <Text style={styles.paragraph}>8 x 3 = 24</Text>
          <Text style={styles.paragraph}>8 x 4 = 32</Text>
          <Text style={styles.paragraph}>8 x 5 = 40</Text>
          <Text style={styles.paragraph}>8 x 6 = 48</Text>
          <Text style={styles.paragraph}>8 x 7 = 56</Text>
          <Text style={styles.paragraph}>8 x 8 = 64</Text>
          <Text style={styles.paragraph}>8 x 9 = 72</Text>
          <Text style={styles.paragraph}>8 x 10 = 80</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function TabuadaDo9 ({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.imageBackground}>
        <ImageBackground source={require('./assets/1.png')} style={styles.imageBackground}>
          <Text style={styles.paragraph}>Tabuada do 9</Text>
          <Text style={styles.paragraph}>9 x 1 = 9</Text>
          <Text style={styles.paragraph}>9 x 2 = 18</Text>
          <Text style={styles.paragraph}>9 x 3 = 27</Text>
          <Text style={styles.paragraph}>9 x 4 = 36</Text>
          <Text style={styles.paragraph}>9 x 5 = 45</Text>
          <Text style={styles.paragraph}>9 x 6 = 54</Text>
          <Text style={styles.paragraph}>9 x 7 = 63</Text>
          <Text style={styles.paragraph}>9 x 8 = 72</Text>
          <Text style={styles.paragraph}>9 x 9 = 81</Text>
          <Text style={styles.paragraph}>9 x 10 = 90</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function TabuadaDo10 ({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.imageBackground}>
        <ImageBackground source={require('./assets/1.png')} style={styles.imageBackground}>
          <Text style={styles.paragraph}>Tabuada do 10</Text>
          <Text style={styles.paragraph}>10 x 1 = 10</Text>
          <Text style={styles.paragraph}>10 x 2 = 20</Text>
          <Text style={styles.paragraph}>10 x 3 = 30</Text>
          <Text style={styles.paragraph}>10 x 4 = 40</Text>
          <Text style={styles.paragraph}>10 x 5 = 50</Text>
          <Text style={styles.paragraph}>10 x 6 = 60</Text>
          <Text style={styles.paragraph}>10 x 7 = 70</Text>
          <Text style={styles.paragraph}>10 x 8 = 80</Text>
          <Text style={styles.paragraph}>10 x 9 = 90</Text>
          <Text style={styles.paragraph}>10 x 10 = 100</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options = {{ title: 'App Tabuadas'}} />
        <Stack.Screen name="TabuadaDo2" component={TabuadaDo2} options = {{ title: 'Tabuada do 2'}} />
        <Stack.Screen name="TabuadaDo3" component={TabuadaDo3} options = {{ title: 'Tabuada do 3'}} />
        <Stack.Screen name="TabuadaDo4" component={TabuadaDo4} options = {{ title: 'Tabuada do 4'}} />
        <Stack.Screen name="TabuadaDo5" component={TabuadaDo5} options = {{ title: 'Tabuada do 5'}} />
        <Stack.Screen name="TabuadaDo6" component={TabuadaDo6} options = {{ title: 'Tabuada do 6'}} />
        <Stack.Screen name="TabuadaDo7" component={TabuadaDo7} options = {{ title: 'Tabuada do 7'}} />
        <Stack.Screen name="TabuadaDo8" component={TabuadaDo8} options = {{ title: 'Tabuada do 8'}} />
        <Stack.Screen name="TabuadaDo9" component={TabuadaDo9} options = {{ title: 'Tabuada do 9'}} />
        <Stack.Screen name="TabuadaDo10" component={TabuadaDo10} options = {{ title: 'Tabuada do 10'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 8,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 25
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: 395,
    height: 700
  },
});
