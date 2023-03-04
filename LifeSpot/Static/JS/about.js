/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
let index=0
let imgs;
showImg(index);

function next()
{
index=(index+1)%imgs.length;
showImg(index);
}

function back()
{
    index=(index-1);
    if (index<0) {index=imgs.length-1;}
    showImg(index);
}
function showImg(index) {
imgs = document.getElementsByClassName('img');

for (let i=0;i<imgs.length;i++)
{
    imgs[i].style.display = "none";
}
imgs[index].style.display = 'block';

}


function incRate(commentID)
{
let elm = document.getElementById(commentID);
let split = elm.innerText.split(' ');
currentCounter= parseInt(split[1],10);
currentCounter++;
split[1] = currentCounter;
elm.innerText = split.join(' ')

}
function Review()
{
    this.userName= prompt("Как вас зовут ?");
    this.comment= prompt("Напишите свой отзыв");
    this.date = new Date().toLocaleString();
}
function getReview() {
    // Создадим объект
    let review = new Review();
    
    // Сохраним свойство имени
   //
    if(review["userName"] == null){
        return
    }
    
    if(review["comment"] == null){
        return
    }
    
    
    let rateOn = confirm('Разрешить   рейтинг?');

    if(rateOn)
    {
        let ratedComment= Object.create(review)
        ratedComment.rate = 0;
        writeReview(ratedComment);    
    }
    else
    writeReview(review)
}

/*
* Запишем отзыв на страницу 
* 
* */
const writeReview = review => {
    let counter="";
    if(review.hasOwnProperty('rate'))
    {
        let id = Math.random();
        counter += '<button id="'+id+'" onclick="incRate(this.id)">'+ `❤️ ${review.rate}</button>`
    }
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}${counter}</i></p>` +
        `<p>${review['comment']}</p>`  +
        '</div>';
}
