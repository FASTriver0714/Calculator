



const buttons = document.querySelectorAll('button');
const inputs = document.querySelector('input'); // 버튼과 input 태그 변수에 담기
console.log(buttons); //콘솔에 찍어서 어떻게 나오는지 확인
console.log(inputs);

// class Calculator {
//     constructor(result, appendthing) { 
//         this.result = result;
//         this.appendthing = appendthing
//     }

//     appendNumber(number) {
//         this.appendthing += number//숫자를 연속적으로 쓰면 추가해야함.
//     }
//     update(){
//         this.result.value = this.appendthing;
//     }

// };


// class Calculator {
//     constructor(result) { 
//         this.result = result;
//     }

//     appendNumber(number) {
//         this.result += number//숫자를 연속적으로 쓰면 추가해야함.
//     }

//     appendOper(operator) {
//         this.result += operator
//     }




// };

class Calculator {
    constructor(result) { 
        this.result = result;
        this.appendthing = []; //''
    };

    appendNumber(number) {
        this.appendthing += number//숫자를 연속적으로 쓰면 추가되어야하므로
    };

    appendOper(operator) {
        this.appendthing += operator
    };

    allclear(){
        this.appendthing = []; //''
        this.result.value = 0
    };

    update(){
        this.result.value = this.appendthing;
        console.log(this.result.value);
    };

    estimate(){ 
        // var x = /[^0-9]/g;
        // this.result.value = this.result.value.replace(x);  
        // console.log(this.result.value);
        
        // this.result.value = refine(this.result.value).reduce((acc,cur) => acc+cur,0);
        this.result.value = refine(this.result.value);
        this.result.value.reduce((acc, cur) => acc + cur,0);
        // switch(buttons){
        //     case '+':
        //         this.result.value =this.result.value.split('').reduce((acc, cur) => acc+cur);
        //         break


    };
};

function refine(str){
        str = Number(str.replace(/[^0-9]/g, ''));
        return str;
    }

let str = "as59kjnold81";
console.log(refine(str));
console.log(str);
console.log(typeof(str));




    








const calculator = new Calculator(inputs); //inputs를 매개변수로 새로운 인스턴스 생성



//forEach 함수 사용, 인자로 addEventListener메소드를 사용하는 함수를 받음.
//addEventListener("click", function(event){});
//인자에서 function안에 switch문 사용
buttons.forEach(function(button) {
     button.addEventListener('click', function(){
        switch(button.dataset.type) {
            //자바스크립트는 DOM 생성 시점에 "data-" 로 시작하는 속성들을 하나로 모아 "dataset" 맵(Map)으로 따로 모아서 관리.
        //DOM 접근 : 엘리먼트노드.dataset.데이터셋속성이름
            case 'operator':
                calculator.appendOper(button.innerText);//버튼요소와 그 자손노드의 렌더링된 텍스트콘텐츠
                calculator.update();
                break
            case 'ac':
                calculator.allclear();
                break
            case 'enter':
                calculator.estimate();
                calculator.update();
                break
            default:
                calculator.appendNumber(button.innerText); 
                calculator.update();
                break
        }
        
     })
});

// function Clickcalculator(){
//     if (operator == '+') {
//         result.value = n1 + n2;
//         console.log(result.value);
//     } else if (operator == '-') {
//         $result.value = n1 - n2;
//         console.log(result.value);
//     } else if (operator == '*') {
//         $result.value = n1 * n2;
//         console.log(result.value);
//     } else if (operator == '/') {
//         $result.value = n1 / n2;
//         console.log(result.value);
//     }
// }
