//https://teachablemachine.withgoogle.com/models/YemmNgjvH/model.json
Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '"+data_uri+"'>"
    }); 
}
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YemmNgjvH/model.json', modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, got_result);
}
function got_result(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction1 = results[0].label;
        if(results[0].label == "Amazing"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";
            var synth = window.speechSynthesis;
    speak_data = " That was Amazing! ";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
        }
        if(results[0].label == "Best"){
            document.getElementById("update_emoji").innerHTML = "&#128076;";
            var synth = window.speechSynthesis;
    speak_data = " All the Best! ";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
        }
        if(results[0].label == "Victory"){
            document.getElementById("update_emoji").innerHTML = "&#9996;";
            var synth = window.speechSynthesis;
    speak_data = " That was a marvellous victory!! ";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
        }
    }
}





