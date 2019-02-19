
module.exports= class Question {

    constructor(question_text, optionList,tag) {
        this.Question_text = question_text;
        this.OptionList=optionList;
        this.Response=null;
        this.Database_ID=null;
        this.Time=null;
        this.Number=null;
        this.Tag=null;
        this.Test=null;
        this.Test_Type=null;
        this.Right_Answer=null;
        this.StudentAnswer=null;
    }

    // Adding a method to the constructor
    getOptions() {
        return this.OptionList;
    }
    recordResponse(Res,time){

        this.Time=time;
        this.Response=Res
    }
    getTag(){
        return this.Tag;
    }
    getDatabase_ID(){
        return this.Database_ID;
    }
    getRightAnswer(){
        return this.Right_Answer;
    }
    getStudentAnswer(){
        return this.StudentAnswer;
    }
    getTime(){
        return this.Time;
    }
    getTest(){
        return this.Test;

    }
    getTest_Type(){
        return this.Test_Type;
}
}