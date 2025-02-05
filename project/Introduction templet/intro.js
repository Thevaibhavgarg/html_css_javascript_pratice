{
const heading = document.getElementById("Introduction");
        // let text = "Hii I am Vaibhav Garg";
        let texts =["Nice to Meet You","Thanks for Visiting My Page!!"]
        let end = 1;
        let next=0;
        let isForward=true;
        let set = setInterval(() => {
            heading.innerHTML=texts[next].substring(0,end);
            if(isForward)
            end++;
            else
            end--;
            if(end>texts[next].length){
                isForward=false;
            }
            if(end<0){
                isForward = true;
                next++;
                if(next==texts.length)
                next=0;
            }
        }, 100);
}

const heading = document.getElementById("extra");
        let texts =["Vaibhav Garg"," Web Developer"]
        let end = 1;
        let next=0;
        let isForward=true;
        let set = setInterval(() => {
            heading.innerHTML=texts[next].substring(0,end);
            if(isForward)
            end++;
            else
            end--;
            console.log(end);
            if(end>texts[next].length+20){
                // clearInterval(set);
                // end=1;
                isForward=false;
            }
            if(end<0){
                isForward = true;
                next++;
                if(next==texts.length)
                next=0;
            }
        }, 20);