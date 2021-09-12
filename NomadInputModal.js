import React from 'react';
import { View, Text, Modal, TextInput, Button, StyleSheet } from 'react-native';

function InputModal({ title, visible, handleSubmit, handleClose, value }) {
    const [ onChangeValue, setOnChangeValue ] = React.useState(value ? value : "");

    return (
        <Modal animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => { handleClose(!visible); }}>
            <View>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{title}</Text>
                    <TextInput  onChangeText={setOnChangeValue}
                                value={onChangeValue} />
                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <Button onPress={() => { 
                            handleSubmit(onChangeValue);
                            handleClose(!visible)
                        }}>
                            Submit
                        </Button>
                        <Button onPress={() => { handleClose(!visible); }}>
                            Cancel
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default InputModal;

const styles = StyleSheet.create({
    modalView: {
        margin: 50,
        marginTop: 250,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input: {
          width: "90%"
      }
});
