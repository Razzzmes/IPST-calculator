import { print } from './utils/print.js'
const main = () => {
    let result = '';
    let sign = '';
    let firstNumber = '';
    let finish = false;

    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    const action = ['-', '+', 'x', '/']

    return (state) => {

        if(state === 'АС'){
            result = '';
            sign = '';
            firstNumber = '';
            finish = false;
            print('0')
        }


        if (state === 'С') {
            if (result !== '' && firstNumber === ''){
                result = result.slice(0, -1);
                print(result)
                    if(!result.length) {
                        print('0');
                    }
            }
            if(result !== '' && firstNumber !== ''){
                firstNumber = firstNumber.slice(0, -1);
                print(firstNumber)
                    if(!firstNumber.length) {
                        print('0');
                    }
            }
        }
        
        if(digit.includes(state)){
            if(firstNumber === '' && sign === ''){
                result += state
                print(result)
            }
            else if (firstNumber !== '' && result !== '' && finish){
                firstNumber = state
                finish = false
                print(firstNumber)
            }
            else{
                firstNumber += state
                print(firstNumber)
            }
            console.log(result, firstNumber, sign)
            return
        }

        if(action.includes(state)){
            sign = state
            console.log(sign)
            print(sign)
            return
        }

        if(state === '='){
            if(firstNumber === '') firstNumber = result
            switch(sign){
                case "+":
                    result = (+result) +(+firstNumber)
                    break;
                case "-":
                    result = result - firstNumber
                    break;
                case "x":
                    result = result * firstNumber
                    break;
                case "/":
                    if(firstNumber === '0'){
                        print('Ошибка')
                        firstNumber = ''
                        result = ''
                        sign = ''
                        return
                    }
                    result = result / firstNumber
                    break;
            }
            finish = true
            print(result)
        }
    }
}

export default main