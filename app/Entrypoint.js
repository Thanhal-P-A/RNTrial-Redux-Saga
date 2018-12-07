
import React, { Component } from 'react';
import { ActivityIndicator ,View} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
const { persistor, store } = configureStore();

export default class Entrypoint extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                  </View>}
                    persistor={persistor}
                >
                    <Navigator />
                </PersistGate>
            </Provider>
        );
    }
}
