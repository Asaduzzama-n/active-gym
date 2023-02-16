const addToDb = (id) =>{
    
    let exerciseList = {};
    const storedExercise = localStorage.getItem('exercise-book');

    if(storedExercise){
        exerciseList = JSON.parse(storedExercise);
    }
    exerciseList[id] = 1;

    localStorage.setItem('exercise-book',JSON.stringify(exerciseList));

}

const getItems = () =>{
    let exerciseList = {};
    const storedExercise = localStorage.getItem('exercise-book');

    if(storedExercise){
        exerciseList = JSON.parse(storedExercise);
    }
    return exerciseList;
}



export {addToDb,getItems};