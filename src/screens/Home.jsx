import React from "react";
import { SafeAreaView } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { Button } from 'react-native';
import MainLayout from "../layouts/MainLayout";

function Home ({navigation}) {

    const [tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    const handleAddTask = (task) => {

        setTasks([...tasks, task]);
    };

    return (
        
        <MainLayout>
            <SafeAreaView>
                <ToDoList tasks ={tasks} />
                <ToDoForm onAddTask = {handleAddTask} />
                <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </SafeAreaView>
      </MainLayout>
    
    )
}

export default Home;