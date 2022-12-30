function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
 }
 function clean() {
    document.form.textview.value = "";
 }
 function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
 }
 function equal() {
    var exp = document.form.textview.value;
    if(exp) {
       document.form.textview.value = eval(exp);
    }

}
function showRandomString() {
    
    var strings = ["China is the world's most populous country, with a population of over 1.4 billion people.", 
    "The Great Wall of China is the longest wall in the world, stretching over 13,000 miles.", 
    "China has the oldest continuous civilization in the world, with a history dating back more than 4,000 years.", 
    "The Chinese invented paper, gunpowder, the compass, and printing.", 
    "The Chinese language has more than 50,000 characters, but most educated Chinese people only know about 8,000 of them.",
    "The panda is native to China and is considered a national symbol.",
    "The Yangtze River, located in China, is the longest river in Asia and the third longest in the world.",
    "China is home to the world's largest hydroelectric dam, the Three Gorges Dam.",
    "China is the world's largest producer and consumer of rice.",
    "China is the world's largest producer and consumer of rice."
    ];
    
    var index = Math.floor(Math.random() * strings.length);
   
    var randomString = strings[index];
   
    document.getElementById('text').innerHTML = randomString;

    
}

function clearText() {
    var text = document.getElementById("text");
    text.innerHTML = "";
  }
  