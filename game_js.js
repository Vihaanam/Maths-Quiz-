player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
score_1 = 0;
score_2 = 0;
document.getElementById("player_score_1").innerHTML = score_1;
document.getElementById("player_score_2").innerHTML = score_2;
document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
function send() {
    number_1 = document.getElementById("word1").value;
    number_2 = document.getElementById("word2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
    question_actual = number_1 + " X " + number_2;
    question_var = "<h4>Multiply: " + question_actual + "</h4>";
    input_var = "<br>Answer : <input type='number' id='input_text_box' placeholder='Answer'>";
    button_var = "<br><br><button type='button' class='btn btn-info' onclick='check()'>Check</button>";
    row = question_var + input_var + button_var;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check() {
    new_answer = document.getElementById("input_text_box").value;
    if (new_answer == actual_answer) {
        if (answer_turn == "player1") {
            score_1 = score_1 + 1;
            document.getElementById("player_score_1").innerHTML = score_1;
            window.alert("Correct answer!");
        } else {
            score_2 = score_2 + 1;
            document.getElementById("player_score_2").innerHTML = score_2;
            window.alert("Correct answer!");
        }
    } else {
        if (answer_turn == "player1") {
            score_1 = score_1 - 1;
            document.getElementById("player_score_1").innerHTML = score_1;
            window.alert("Wrong answer.");
        } else {
            score_2 = score_2 - 1;
            document.getElementById("player_score_2").innerHTML = score_2;
            window.alert("Wrong answer.")
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";        
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
    } else {
        answer_turn = "player1";        
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;        
    }
    document.getElementById("output").innerHTML = "";
}