//quote box code
let box_text = document.getElementById('box-text');

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 

quotes = [
    "The worst thing about prison was the dementors.",
    "Well, well, well how the turntables.",
    "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.",
    "I love inside jokes. I would love to be a part of one someday.",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    "I'd far rather be happy than right any day.",
    "So long, and thanks for all the fish",
    "When I discovered YouTube, I didn't work for five days",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    "Saved a life. My own. Am I a hero? I really can’t say, but yes."
]

function handleGreen(){
    let change_text = quotes[randomNumber(0, 9)];
    box_text.innerHTML = change_text;
    box_text.style.backgroundColor = "#008000";
    box_text.style.color = 'yellow';
    box_text.style.border = "2px solid yellow";
}

function handleYellow(){
    let change_text = quotes[randomNumber(0, 9)];
    box_text.innerHTML = change_text;
    box_text.style.backgroundColor = "yellow";
    box_text.style.color = 'black';
    box_text.style.border = "2px solid black"
}

function handleBlue(){
    let change_text = quotes[randomNumber(0, 9)];
    box_text.innerHTML = change_text;
    box_text.style.backgroundColor = 'rgba(0, 132, 255, 0.966)';
    box_text.style.color = 'rgb(5 255 178 / 97%)';
    box_text.style.border = "2px solid rgb(5 255 178 / 97%)"
}

function handleRed(){
    let change_text = quotes[randomNumber(0, 9)];
    box_text.innerHTML = change_text;
    box_text.style.backgroundColor = "rgba(255, 0, 0, 0.781)";
    box_text.style.color = 'yellow';
    box_text.style.border = "2px solid yellow"
}

//hero box code
let form_inp = document.getElementById("hero-form-inner");

form_inp.addEventListener("submit", function(event) {
    event.preventDefault();
    let inputted = document.getElementById('conv').value;
    let selected_op = document.getElementById('conv_options').value;
    
    if(selected_op === "lbtokg") {
        ans = inputted * 0.4536;
        let ans_append = document.getElementById("created");
        ans_append.innerHTML = ans + " kilograms";
    }

    else if(selected_op === "kgtolb"){
        ans = inputted * 2.2046;
        let ans_append = document.getElementById("created");
        ans_append.innerHTML = ans + " pounds";
    }
});

//series calculator code 
let series_input = document.getElementById("series-form-inner");

series_input.addEventListener("input", function(event) {
    event.preventDefault();
    let series_nums = document.getElementById("series_nums");
    
    let arr = series_nums.value.split(',');
    arr = arr.filter((l) => l !== "");
    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);
    let max_p = document.getElementById('max');
    max_p.innerHTML = 'Max: ' + maximum;

    if(arr.length == 0){
        maximum = 0;
        let max_p = document.getElementById('max');
        max_p.innerHTML = 'Max: ' + maximum;
    }

    if(minimum == 0 || arr.length == 0){
        let min_p = document.getElementById('min');
        min_p.innerHTML = 'Min: ' + maximum;
    }

    else{
        let min_p = document.getElementById('min');
        min_p.innerHTML = 'Min: ' + minimum;
    }

    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
    }

    let sum_p = document.getElementById('sum');
    sum_p.innerHTML= "Sum: " + sum;

    if(arr.length == 0){
        let avg = maximum;
        let avg_p = document.getElementById('avg');
        avg_p.innerHTML = 'Average: ' + avg;
    }

    else{
        let avg = sum/arr.length;
        let avg_p = document.getElementById('avg');
        avg_p.innerHTML = 'Average: ' + avg;
    }
    
    let reverse = [...arr].reverse().join(",");
    let rev_p = document.getElementById('rev');
    rev_p.innerHTML = 'Reverse Order: ' + reverse;
});

//magic code
let texts = document.getElementById('magic-text');

function handleClear(event){
    texts.value = "";
}

clicked = false;

function handleCaps(){
    if(clicked == false){
        texts.style.textTransform = 'uppercase';
        clicked = true;
    }

    else{
        texts.style.textTransform = 'lowercase';
        clicked = false;
    }
}

function handleSort() {
    let ls = texts.value.split("\n");
    let sortedls = ls.sort();

    handleClear();

    sortedls.map(i => {
        console.log(i);
        texts.value += i + '\n';
    });
}

function handleRev(){
    let ls = texts.value.split("\n");
    let ls_rev = ls.reverse();

    handleClear();
    ls_rev.map(i => {
        console.log(i);
        texts.value += i + '\n';
    });
}

function handleStrip() {
    let ls = texts.value.split("\n");
    let ls_1 = [];
    for(let i = 0; i < ls.length; i++){
        if(ls[i] != ""){
            ls_1.push(ls[i].trim());
        }
    }
    console.log(ls_1);
    handleClear();
    ls_1.map(i => {
        if(i != ""){
            texts.value += i + '\n';
        }
    });
}

function handleAddNum() {
    let ls = texts.value.split('\n');
    console.log(ls);

    handleClear();
    for(let i = 0; i < ls.length; i++) {
        texts.value += (i+1) + ' ' +ls[i]+ '\n';
    }
}

function handleShuffle() {
    let ls = texts.value.split('\n');

    upper = ls.length;
    lower = 0;

    let new_ls = [];
    for(let i = 0; i < ls.length; i++) {
        new_ls.push('');
    }

    let i = 0;
    while(new_ls.includes('')) {
        let ran = randomNumber(lower, upper);
        
        if(new_ls[ran] == '') {
            new_ls[ran] = ls[i];
            i += 1;
        }
    }
    handleClear();
    new_ls.map(
        i => {
            if(i != undefined) {
                texts.value += i + '\n';
            }
        }
    );
}