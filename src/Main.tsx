import React from "react";
import {
    Text,
    SafeAreaView,
    StyleSheet,

} from "react-native";
import ToDoList from "./component/ToDoList";
import ToDoForm from "./component/ToDoForm";

const Main = () : React.JSX.Element => {
    return (
        <SafeAreaView>           
            <Text style={styles.headerTxt}>To Do List</Text>
            <ToDoList />
            <ToDoForm />   
        </SafeAreaView>
    );
}

export default Main;

const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2196F3',
        padding: 20,
        textAlign: 'center'
    }
});