import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Register } from './Register';

@Component({
  selector: 'my-debugger',
  templateUrl: './debuggerMode.html',
  styleUrls: ['./app.component.scss'],
})
export class DebuggerMode {
  private remainderToDisplay: string = '';
  private arrow: string = '';
  private outputValue: string = '0';
  private valueToAdd: string;
  private valueToAdd2: string = '';
  private textAreaValue: string = '';
  private textAreaValue1: string = '';
  private selectedAssemblyCode: string = '';
  private AssemblyCode: string[] = ['ADD Program', 'SUB Program'];
  private showAdd: boolean = false;
  private showSub: boolean = false;
  private showMul: boolean = false;
  private showDiv: boolean = false;
  private showMov: boolean = false;
  private showInc: boolean = false;
  private showDec: boolean = false;
  private showAnd: boolean = false;
  private showOR: boolean = false;
  private showXOR: boolean = false;
  private showNOT: boolean = false;
  private showPush: boolean = false;
  private showPop: boolean = false;
  private addNumberBoolean: boolean = false;
  private addRegisterBoolean: boolean = false;
  private subNumberBoolean: boolean = false;
  private subRegisterBoolean: boolean = false;
  private mulNumberBoolean: boolean = false;
  private mulRegisterBoolean: boolean = false;
  private mulRegisterTwoBoolean: boolean = false;
  private selectedRegister1: string = '';
  private selectedRegister2: string = '';
  private selectedRegister3: string = '';
  private selectedRegister4: string = '';
  private selectedRegister5: string = '';
  private register: Register[] = [
    new Register('RAX', '0000000000000005', ''),
    new Register('RBX', '0000000000000006', ''),
    new Register('RCX', '0000000000000015', ''),
    new Register('RDX', '0000000000000012', ''),
    new Register('RBP', '00000000000000a1', ''),
    new Register('RSP', '0000000000FEF1B0', ''),
    new Register('RSI', '000000000000002d', ''),
    new Register('RDI', '000000000000003a', ''),
    new Register('RIP', '000000000000009b', ''),
    new Register('R8', '0000000000000000', ''),
    new Register('R9', '0000000000000000', ''),
    new Register('R10', '0000000000000000', ''),
    new Register('R11', '0000000000000000', ''),
    new Register('R12', '0000000000000000', ''),
    new Register('R13', '0000000000000000', ''),
    new Register('R14', '0000000000000000', ''),
    new Register('R15', '0000000000000000', ''),
    new Register('0000000000FEF150', '0000000000000010', ''),
    new Register('0000000000FEF158', '000000000000000a', ''),
    new Register('0000000000FEF160', '00000000000000c5', ''),
    new Register('0000000000FEF168', '00000000000000a3', ''),
    new Register('0000000000FEF170', '0000000000000180', ''),
    new Register('0000000000FEF178', '0000000000000000', ''),
    new Register('0000000000FEF180', '0000000000000000', ''),
    new Register('0000000000FEF188', '0000000000000000', ''),
    new Register('0000000000FEF190', '0000000000000000', ''),
    new Register('0000000000FEF198', '0000000000000000', ''),
    new Register('0000000000FEF1A0', '0000000000000000', ''),
    new Register('0000000000FEF1A8', '0000000000000000', ''),
    new Register('0000000000FEF1B0', '0000000000000008', ''),
    new Register('0000000000FEF1C0', '0000000000000001', ''),
    new Register('0000000000FEF1C8', '0000000000000002', ''),
    new Register('0000000000FEF1D0', '0000000000000003', ''),
    new Register('0000000000FEF1D8', '0000000000000004', '')

  ];
  private memoryList: string[] = ['0000000000FEF150', '0000.000000FEF158', '0000000000FEF1A0', '0000000000FEF1A8', '0000000000FEF1B0'
    , '0000000000FEF1C0', '0000000000FEF1C8', '0000000000FEF1D0', '0000000000FEF1D8'];



  public checkIfRegister(r1: Register) {
    if (r1.name == 'RAX' || r1.name == 'RBX' || r1.name == 'RCX' || r1.name == 'RDX' || r1.name == 'RBP' || r1.name == 'RSP' || r1.name == 'RDI' ||
      r1.name == 'RSI' || r1.name == 'RIP' || r1.name == 'R8' || r1.name == 'R9' || r1.name == 'R10' || r1.name == 'R11' ||
      r1.name == 'R12' || r1.name == 'R13' || r1.name == 'R14' || r1.name == 'R15') {
      return true;
    } else {
      return false;
    }

  }



  public checkIfMemory(r1: Register) {
    if (r1.name == '0000000000FEF150' || r1.name == '0000000000FEF158' || r1.name == '0000000000FEF160' ||
      r1.name == '0000000000FEF168' || r1.name == '0000000000FEF170' || r1.name == '0000000000FEF178' ||
      r1.name == '0000000000FEF180' || r1.name == '0000000000FEF188' || r1.name == '0000000000FEF190' ||
      r1.name == '0000000000FEF198' || r1.name == '0000000000FEF1A0' || r1.name == '0000000000FEF1A8' ||
      r1.name == '0000000000FEF1B0' || r1.name == '0000000000FEF1B8' || r1.name == '0000000000FEF1C0' ||
      r1.name == '0000000000FEF1C8' || r1.name == '0000000000FEF1D0' || r1.name == '0000000000FEF1D8') {
      return true;
    } else {
      return false;
    }

  }

  isHex(h: any) {
    var a = parseInt(h, 16);
    return (a.toString(16) === h.toLowerCase())
  }


  showAssemblyCode() {
    if (this.selectedAssemblyCode == 'ADD Program') {
      this.textAreaValue = 'ADD RAX,RBX,\nADD C,D';
    } else if (this.selectedAssemblyCode == 'SUB Program') {
      this.textAreaValue = 'SUB RBX,RAX';
    }
  }


  executeInstructions() {
    // if(this.validateInstruction()){

    // }
    console.log(this.textAreaValue);
    var lines = this.textAreaValue.split('\n');

    for (var i = 0; i < lines.length; i++) {
      if (lines[i].search('ADD') != -1) {

        let inst: string;
        inst = lines[i].split(' ')[1];
        var instArray = inst.split(',');
        console.log(instArray);
        let tempRegister1: Register = { name: instArray[0], value: '0', arrow: '' };
        if (this.checkIfRegister(tempRegister1) || this.checkIfMemory(tempRegister1)) {
          this.selectedRegister1 = instArray[0];
          console.log(this.selectedRegister1);
          let tempRegister2: Register = { name: instArray[1], value: '0', arrow: '' };
          if (this.checkIfRegister(tempRegister2) || this.checkIfMemory(tempRegister2)) {
            this.selectedRegister3 = instArray[1];
            this.selectedRegister2 = this.selectedRegister1;
            this.selectedRegister1 = '';
            console.log(this.selectedRegister3);
            this.addRegister();
          }
          else {
            if (this.isHex(instArray[1])) {
              this.valueToAdd = instArray[1];
              this.addNumber();
            } else {
              console.log('Error on line ' + i);
              break;
            }
          }
        }
        else {
          console.log('Invalid instruction on line ' + i);
          break;
        }
      }

      if (lines[i].search('SUB') != -1) {

        let inst: string;
        inst = lines[i].split(' ')[1];
        var instArray = inst.split(',');
        console.log(instArray);
        let tempRegister1: Register = { name: instArray[0], value: '0', arrow: '' };
        if (this.checkIfRegister(tempRegister1) || this.checkIfMemory(tempRegister1)) {
          this.selectedRegister1 = instArray[0];
          console.log(this.selectedRegister1);
          let tempRegister2: Register = { name: instArray[1], value: '0', arrow: '' };
          if (this.checkIfRegister(tempRegister2) || this.checkIfMemory(tempRegister2)) {
            this.selectedRegister3 = instArray[1];
            this.selectedRegister2 = this.selectedRegister1;
            this.selectedRegister1 = '';
            console.log(this.selectedRegister3);
            this.subRegister();
          }
          else {
            if (this.isHex(instArray[1])) {
              this.valueToAdd = instArray[1];
              this.subNumber();
            } else {
              console.log('Error on line ' + i);
              break;
            }
          }
        }
        else {
          console.log('Invalid instruction on line ' + i);
          break;
        }
      }

      if (lines[i].search('MUL') != -1) {

        let inst: string;
        inst = lines[i].split(' ')[1];
        var instArray = inst.split(',');
        console.log(instArray);
        let tempRegister1: Register = { name: instArray[0], value: '0', arrow: '' };
        if (this.checkIfRegister(tempRegister1) || this.checkIfMemory(tempRegister1)) {
          this.selectedRegister1 = instArray[0];
          console.log(this.selectedRegister1);
          let tempRegister2: Register = { name: instArray[1], value: '0', arrow: '' };
          if (this.checkIfRegister(tempRegister2) || this.checkIfMemory(tempRegister2)) {
            this.selectedRegister3 = instArray[1];
            this.selectedRegister2 = this.selectedRegister1;
            this.selectedRegister1 = '';
            console.log(this.selectedRegister3);
            this.mulRegister();
          }
          else {
            if (this.isHex(instArray[1])) {
              this.valueToAdd = instArray[1];
              this.mulNumber();
            } else {
              console.log('Error on line ' + i);
              break;
            }
          }
        }
        else {
          console.log('Invalid instruction on line ' + i);
          break;
        }
      }
      if (lines[i].search('DIV') != -1) {

        let inst: string;
        inst = lines[i].split(' ')[1];
        var instArray = inst.split(',');
        console.log(instArray);
        let tempRegister1: Register = { name: instArray[0], value: '0', arrow: '' };
        if (this.checkIfRegister(tempRegister1) || this.checkIfMemory(tempRegister1)) {
          this.selectedRegister1 = instArray[0];
          console.log(this.selectedRegister1);
          let tempRegister2: Register = { name: instArray[1], value: '0', arrow: '' };
          if (this.checkIfRegister(tempRegister2) || this.checkIfMemory(tempRegister2)) {
            this.selectedRegister3 = instArray[1];
            this.selectedRegister2 = this.selectedRegister1;
            this.selectedRegister1 = '';
            console.log(this.selectedRegister3);
            this.divRegister();
          }
          else {
            if (this.isHex(instArray[1])) {
              this.valueToAdd = instArray[1];
              this.divNumber();
            } else {
              console.log('Error on line ' + i);
              break;
            }
          }
        }
        else {
          console.log('Invalid instruction on line ' + i);
          break;
        }
      }

      if (lines[i].search('INC') != -1) {
        
                let inst: string;
                inst = lines[i].split(' ')[1];
                var instArray = inst.split(' ');
                console.log(instArray);
                let tempRegister1: Register = { name: instArray[0], value: '0', arrow: '' };
                if (this.checkIfRegister(tempRegister1) || this.checkIfMemory(tempRegister1)) {
                  this.selectedRegister1 = instArray[0];
                  console.log(this.selectedRegister1);
                  let tempRegister2: Register = { name: instArray[1], value: '0', arrow: '' };
                  if (this.checkIfRegister(tempRegister2) || this.checkIfMemory(tempRegister2)) {
                    this.selectedRegister3 = instArray[1];
                    this.selectedRegister2 = this.selectedRegister1;
                    this.selectedRegister1 = '';
                    console.log(this.selectedRegister3);
                    this.subRegister();
                  }
                  else {
                    if (this.isHex(instArray[1])) {
                      this.valueToAdd = instArray[1];
                      this.incNumber();
                    } else {
                      console.log('Error on line ' + i);
                      break;
                    }
                  }
                }
                else {
                  console.log('Invalid instruction on line ' + i);
                  break;
                }
              }

    }
  }



  ngOnInit() {
    let num1: string = '100';
    let num2: string = '';
    let num3: number = parseInt(num1, 16);
    console.log(num3);

    let num4: string = '6000';
    console.log((parseInt(num4, 16) / parseInt(num1, 16)).toString(16));
    console.log('************************************');
    //this.pushRegister();
  }

  public resetParameters() {
    this.showAdd = false;
    this.showSub = false;
    this.showMul = false;
    this.showDiv = false
    this.showMov = false;
    this.showInc = false;
    this.showDec = false;
    this.showPush = false;
    this.showPop = false;
    this.showAnd = false;
    this.showOR = false;
    this.showXOR = false;
    this.showNOT = false;

  }

  public addNumber(): void {
    this.addRegisterBoolean = false;
    this.addNumberBoolean = true;
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 + temp2;
        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16);

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        console.log(r.arrow);
        this.outputValue = r.value;
      }
    }

  }

  public addRegister(): void {
    this.addRegisterBoolean = true;
    this.addNumberBoolean = false;
    let temp1: Register = new Register('', '0', '');
    let temp2: Register = new Register('', '0', '');


    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister2 == r.name) {
        temp1 = r;

      }
    }
    for (let r of this.register) {
      if (this.selectedRegister3 == r.name) {
        temp2 = r;

      }
    }
    let temp3 = parseInt(temp1.value, 16);
    let temp4 = parseInt(temp2.value, 16);
    temp3 = temp3 + temp4;

    let temp5 = temp3.toString(16);
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (16 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x';
    this.outputValue = temp1.value;
  }

  public subNumber(): void {
    this.subRegisterBoolean = false;
    this.subNumberBoolean = true;
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16);

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = r.value;
      }
    }

  }

  public mulNumber(): void {

    this.mulRegisterBoolean = false;
    this.mulNumberBoolean = true;

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 * temp2;
        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16);

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = r.value;
      }
    }

  }


  public subRegister(): void {
    this.subRegisterBoolean = true;
    this.subNumberBoolean = false;
    let temp1: Register = new Register('', '0', '');
    let temp2: Register = new Register('', '0', '');


    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister2 == r.name) {
        temp1 = r;

      }
    }
    for (let r of this.register) {
      if (this.selectedRegister3 == r.name) {
        temp2 = r;

      }
    }
    let temp3 = parseInt(temp1.value, 16);
    let temp4 = parseInt(temp2.value, 16);
    temp3 = temp3 - temp4;

    let temp5 = temp3.toString(16);
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (16 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x'
    this.outputValue = temp1.value;
  }


  public mulRegister(): void {
    this.mulRegisterBoolean = true;
    this.mulNumberBoolean = false;
    this.mulRegisterTwoBoolean = false;
    let temp1: Register = new Register('', '0', '');
    let temp2: Register = new Register('', '0', '');


    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister2 == r.name) {
        temp1 = r;

      }
    }
    for (let r of this.register) {
      if (this.selectedRegister3 == r.name) {
        temp2 = r;

      }
    }
    let temp3 = parseInt(temp1.value, 16);
    let temp4 = parseInt(temp2.value, 16);
    temp3 = temp3 * temp4;

    let temp5 = temp3.toString(16);
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (16 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x'
    this.outputValue = temp1.value;
  }

  public mulRegister2(): void {
    this.mulRegisterTwoBoolean = true;
    this.mulNumberBoolean = false;
    this.mulRegisterBoolean = false;
    let temp1: Register = new Register('', '0', '');
    let temp2: Register = new Register('', '0', '');
    let temp6 = parseInt(this.valueToAdd2, 16);

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister4 == r.name) {
        temp1 = r;

      }
    }
    for (let r of this.register) {
      if (this.selectedRegister5 == r.name) {
        temp2 = r;

      }
    }
    let temp3 = parseInt(temp1.value, 16);
    let temp4 = parseInt(temp2.value, 16);
    temp3 = temp3 * temp4 * temp6;

    let temp5 = temp3.toString(16);
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (16 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x'
    this.outputValue = temp1.value;
  }


  public divNumber(): void {
    let temp1 = 0;
    let temp2 = 0;
    let quotient: number = 0;
    let remainder = 0;
    let remainderString = '';
    let valueToStore: string = '';
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        temp1 = parseInt(r.value, 16);
        temp2 = parseInt(this.valueToAdd, 16);

        quotient = Math.floor(temp1 / temp2);
        remainder = temp1 % temp2;

        console.log(remainderString);
        temp1 = quotient;
        //append zeros so that length becomes 16
        console.log(temp1);

        let temp3 = temp1.toString(16);

        let l = temp3.length;

        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }

        for (var i = 0; i < (16 - l); i++) {
          remainderString = remainderString + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        //r.value = valueToStore;
        // r.arrow='-->';
      }

    }
    for (let r of this.register) {
      if (r.name == 'RAX') {
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
      }
      if (r.name == 'RDX') {
        remainderString = remainderString + remainder.toString(16);
        console.log(remainderString);
        r.value = remainderString;
        r.arrow = 'fa fa-hand-o-right fa-4x';

      }
    }


  }

  public divRegister(): void {
    let temp1: Register = new Register('', '0', '');
    let temp2: Register = new Register('', '0', '');
    let quotient: number = 0
    let remainder: number = 0;
    let remainderString: string = '';
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister2 == r.name) {
        temp1 = r;

      }
    }
    for (let r of this.register) {
      if (this.selectedRegister3 == r.name) {
        temp2 = r;

      }
    }
    let temp3 = parseInt(temp1.value, 16);
    let temp4 = parseInt(temp2.value, 16);
    quotient = Math.floor(temp3 / temp4);
    remainder = temp3 % temp4;

    //let temp6 = temp3 % temp4;
    temp3 = quotient;
    let temp5 = temp3.toString(16);
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (16 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;

    for (var i = 0; i < (16 - l); i++) {
      remainderString = remainderString + '0';
    }
    for (let r of this.register) {
      if (r.name == 'RAX') {
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = r.value;
      }
    }

    for (let r of this.register) {
      if (r.name == 'RDX') {
        remainderString = remainderString + remainder.toString(16);
        r.value = remainderString;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        this.remainderToDisplay = r.value;
      }
    }

    //this.outputValue = temp1.value;
  }


  public movNumber(): void {

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp2;
        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16);

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        console.log(r.arrow);
      }
    }

  }

  public movRegister(): void {
    let temp1: Register = new Register('', '0', '');
    let temp2: Register = new Register('', '0', '');


    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister2 == r.name) {
        temp1 = r;

      }
    }
    for (let r of this.register) {
      if (this.selectedRegister3 == r.name) {
        temp2 = r;

      }
    }
    let temp3 = parseInt(temp1.value, 16);
    let temp4 = parseInt(temp2.value, 16);
    temp3 = temp4;

    let temp5 = temp3.toString(16);
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (16 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x';
    this.outputValue = temp1.value;
  }

  public incNumber(): void {

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        // let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 + 1;
        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16);

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        console.log(r.arrow);
      }
    }

  }


  public decNumber(): void {

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        // let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - 1;
        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16);

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        console.log(r.arrow);
      }
    }

  }

  public pushRegister() {
    let tempRSPValue: string;
    let temp: string;
    for (let sRegister of this.register) {
      sRegister.arrow = '';
      if (this.selectedRegister1 == sRegister.name) {
        temp = sRegister.value;
      }
    }
    for (let r = 0; r < this.register.length; r++) {
      if (this.register[r].name == 'RSP') {
        tempRSPValue = this.register[r].value;
        console.log(tempRSPValue);
        //console.log(this.memoryList.length);
      }
    }
    for (let r = 0; r < this.register.length; r++) {
      if (this.register[r].name == tempRSPValue) {
        for (let i = this.register.length - 1; i > r; i--) {

          this.register[i].value = this.register[i - 1].value;
        }
        this.register[r].value = temp;
        this.register[r].arrow = '==>';
      }
    }
  }

  public popRegister() {
    let tempRSPRegister: Register = new Register('', '0', '');
    let tempRSPValue: string;
    let temp: string;
    for (let r = 0; r < this.register.length; r++) {
      this.register[r].arrow = '';
      if (this.register[r].name == 'RSP') {
        tempRSPValue = this.register[r].value;
        console.log(tempRSPValue);
        tempRSPRegister = this.register[r];
        tempRSPRegister.arrow = '==>';
        //console.log(this.memoryList.length);
      }
    }
    for (let r = 0; r < this.register.length; r++) {
      if (this.register[r].name == tempRSPValue) {
        tempRSPRegister.value = this.register[r + 1].name;
        for (let s of this.register) {
          if (this.selectedRegister1 == s.name) {
            s.value = this.register[r].value;
            s.arrow = '==>';


          }
        }

      }
    }
  }


  //    this.memoryList[j] = this.memoryList[j-1];

  //   }



  // -----------------------------------------------------------
  //   for(var i=0;i<this.memoryList.length; i++){
  //     console.log(this.memoryList.length);
  //     if(this.memoryList[i]!=tempRSPValue){
  //       continue; 
  //     }
  //     if(this.memoryList[i] == tempRSPValue){
  //       console.log('Inside if loop');
  //       this.pushRegister1(i);
  //     }
  //   }
  // }

  // public pushRegister1(i: number){
  //   console.log('inside pushRegister1 method');
  //   //let memoryIndexToInsert: number =i;
  //   for(let j =this.memoryList.length-1;j>i;j--){

  //    this.memoryList[j] = this.memoryList[j-1];

  //   }
  //   this.memoryList[i] = '5';
  //   console.log(this.memoryList[i]);
  // }




  public andNumber(): void {
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 & temp2;
        console.log(temp1);

        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16);

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
      }
    }

  }

  public andRegister(): void {
    let temp1: Register = new Register('', '0', '');
    let temp2: Register = new Register('', '0', '');


    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister2 == r.name) {
        temp1 = r;

      }
    }
    for (let r of this.register) {
      if (this.selectedRegister3 == r.name) {
        temp2 = r;

      }
    }
    let temp3 = parseInt(temp1.value, 16);
    let temp4 = parseInt(temp2.value, 16);
    temp3 = temp3 & temp4;
    console.log(temp3);
    //temp3 = temp4;

    let temp5 = temp3.toString(16);
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (16 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x';
    this.outputValue = temp1.value;
  }


  public orNumber(): void {
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 | temp2;
        console.log(temp1);

        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16);

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
      }
    }

  }

  public orRegister(): void {
    let temp1: Register = new Register('', '0', '');
    let temp2: Register = new Register('', '0', '');


    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister2 == r.name) {
        temp1 = r;

      }
    }
    for (let r of this.register) {
      if (this.selectedRegister3 == r.name) {
        temp2 = r;

      }
    }
    let temp3 = parseInt(temp1.value, 16);
    let temp4 = parseInt(temp2.value, 16);
    temp3 = temp3 | temp4;
    console.log(temp3);
    //temp3 = temp4;

    let temp5 = temp3.toString(16);
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (16 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x';
    this.outputValue = temp1.value;
  }


  public xorNumber(): void {
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 ^ temp2;
        console.log(temp1);

        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16);

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
      }
    }

  }

  public xorRegister(): void {
    let temp1: Register = new Register('', '0', '');
    let temp2: Register = new Register('', '0', '');


    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister2 == r.name) {
        temp1 = r;

      }
    }
    for (let r of this.register) {
      if (this.selectedRegister3 == r.name) {
        temp2 = r;

      }
    }
    let temp3 = parseInt(temp1.value, 16);
    let temp4 = parseInt(temp2.value, 16);
    temp3 = temp3 ^ temp4;
    console.log(temp3);
    //temp3 = temp4;

    let temp5 = temp3.toString(16);
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (16 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x';
    this.outputValue = temp1.value;
  }



  public notNumber(): void {
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        //let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = ~temp1;
        console.log(temp1);

        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16);

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (16 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
      }
    }

  }




  public showAddSection() {
    this.resetParameters();
    this.showAdd = true;
  }

  public showSubSection() {
    this.resetParameters();
    this.showSub = true;
  }

  public showMulSection() {
    this.resetParameters();
    this.showMul = true;
  }


  public showDivSection() {
    this.resetParameters();
    this.showDiv = true;
  }

  public showMovSection() {
    this.resetParameters();
    this.showMov = true;
  }
  public showIncSection() {
    this.resetParameters();
    this.showInc = true;
  }
  public showDecSection() {
    this.resetParameters();
    this.showDec = true;
  }

  public showPushSection() {
    this.resetParameters();
    this.showPush = true;
  }
  public showPopSection() {
    this.resetParameters();
    this.showPop = true;
  }


  public showAndSection() {
    this.resetParameters();
    this.showAnd = true;
  }
  public showORSection() {
    this.resetParameters();
    this.showOR = true;
  }
  public showXORSection() {
    this.resetParameters();
    this.showXOR = true;
  }
  public showNOTSection() {
    this.resetParameters();
    this.showNOT = true;
  }

}

