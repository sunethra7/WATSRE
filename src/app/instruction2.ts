import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Register } from './Register';
@Component({
  selector: 'my-instruction2',
  templateUrl: './instruction2.html',
  styleUrls: ['./app.component.scss'],
})
export class Instruction2 {
  private remainderToDisplay: string = '';
  private arrow: string = '';
  private outputValue: string = '0';
  private valueToAdd: string;
  private valueToAdd2: string = '';
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
  private showJmp: boolean = false;
  private showCmp: boolean = false;
  private showJz: boolean = false;
  private showJnz: boolean = false;
  private showJG: boolean = false;
  private showJGE: boolean = false;
  private showJL: boolean = false;
  private showJLE: boolean = false;
  private showCall: boolean = false;
  private showRet: boolean = false;
  private showLea: boolean = false;
  private addNumberBoolean: boolean = false;
  private addRegisterBoolean: boolean = false;
  private subNumberBoolean: boolean = false;
  private subRegisterBoolean: boolean = false;
  private mulNumberBoolean: boolean = false;
  private mulRegisterBoolean: boolean = false;
  private mulRegisterTwoBoolean: boolean = false;
  private divNumberBoolean: boolean = false;
  private divRegisterBoolean: boolean = false;
  private movNumberBoolean: boolean = false;
  private movRegisterBoolean: boolean = false;
  private incBoolean: boolean = false;
  private decBoolean: boolean = false;
  private pushboolean:boolean = false;
  private pushNumberBoolean:boolean = false;
  private popboolean:boolean = false;
  private andNumberBoolean: boolean = false;
  private andRegisterBoolean: boolean = false;
  private orNumberBoolean: boolean = false;
  private orRegisterBoolean: boolean = false;
  private xorNumberBoolean: boolean = false;
  private xorRegisterBoolean: boolean = false;
  private notNumberBoolean:boolean = false;
  private cmpNumberBoolean: boolean = false;
  private cmpRegisterBoolean: boolean = false;
  private jmpNumberBoolean: boolean = false;
  private jmpRegisterBoolean: boolean = false;
  private callNumberBoolean: boolean = false;
  private callRegisterBoolean: boolean = false;
  private jmpIfNotZeroRegisterBoolean: boolean = false;
  private jmpIfNotZeroNumberBoolean: boolean = false;
  private jmpZeroRegisterBoolean = false;
  private jmpZeroNumberBoolean = false; 
  private jmpLessThanEqualNumberBoolean = false;
  private jmpLessThanEqualRegisterBoolean = false;
  private jmpLessThanNumberBoolean = false; 
  private jmpLessThanRegisterBoolean = false; 
  private jmpGreaterThanNumberBoolean = false; 
  private jmpGreaterThanRegisterBoolean = false; 
  private jmpGreaterThanEqualNumberBoolean = false; 
  private jmpGreaterThanEqualRegisterBoolean = false; 
 

  
  private selectedRegister1: string = '';
  private selectedRegister2: string = '';
  private selectedRegister3: string = '';
  private selectedRegister4: string = '';
  private selectedRegister5: string = '';
  private fieldError:any;
  private register: Register[] = [
    new Register('EAX', '00000005', ''),
    new Register('EBX', '00000006', ''),
    new Register('ECX', '0000001b', ''),
    new Register('EDX', '00000025', ''),
    new Register('EBP', '00000005', ''),
    new Register('ESP', '00FEF1B0', ''),
    new Register('ESI', '00000005', ''),
    new Register('EDI', '00000005', ''),
    new Register('EIP', '00000005', ''),    
    new Register('00FEF150', '00000010', ''),
    new Register('00FEF158', '0000000a', ''),
    new Register('00FEF160', '000000c5', ''),
    new Register('00FEF168', '000000a3', ''),
    new Register('00FEF170', '00000180', ''),
    new Register('00FEF178', '00000000', ''),
    new Register('00FEF180', '00000000', ''),
    new Register('00FEF188', '00000000', ''),
    new Register('00FEF190', '00000000', ''),
    new Register('00FEF198', '00000000', ''),
    new Register('00FEF1A0', '00000000', ''),
    new Register('00FEF1A8', '00000000', ''),
    new Register('00FEF1B0', '00000008', ''),
    new Register('00FEF1C0', '00000001', ''),
    new Register('00FEF1C8', '00000002', ''),
    new Register('00FEF1D0', '00000003', ''),
    new Register('00FEF1D8', '00000004', ''),
  ];
  //From here ret and call -------
  private register2: Register[] = [
    new Register('C1', 'Call C2/C3  ', ''),
    new Register('008410C5', 'or eax,1    ', ''),
    new Register('008410C6', 'mov eax,ecx ', ''),
    new Register('008410C7', 'ret         ', ''),
    new Register('C2', 'Call C1/C3  ', ''),
    new Register('008410B2', 'add eax,20  ', ''),
    new Register('008410B3', 'push eax    ', ''),
    new Register('008410B4', 'pop ecx     ', ''),
    new Register('008410B5', 'ret         ', ''),
    new Register('C3', 'Call C1/C2  ', ''),
    new Register('00F510A2', 'xor ecx,ecx ', ''),
    new Register('00F510A3', 'mov eax,ecx ', ''),
    new Register('008410B5', 'ret         ', '')
  ];

  private memoryList: string[] = ['00FEF150', '00FEF158', '00FEF1A0', '00FEF1A8', '00FEF1B0'
    , '00FEF1C0', '00FEF1C8', '00FEF1D0', '00FEF1D8'];



  public checkIfRegister(r1: Register) {
    if (r1.name == 'EAX' || r1.name == 'EBX' || r1.name == 'ECX' || r1.name == 'EDX' || r1.name == 'EBP' || r1.name == 'ESP' || r1.name == 'EDI' ||
      r1.name == 'ESI' || r1.name == 'EIP') {
      return true;
    } else {
      return false;
    }

  }

  public checkIfLabel(r1: Register) {
    if (r1.name == 'C1' || r1.name == '008410C5' || r1.name == '008410C6' || r1.name == '008410C7' || r1.name == 'C2' || r1.name == '008410B2' || r1.name == '008410B3' ||
      r1.name == '008410B4' || r1.name == '008410B5' || r1.name == 'C3' || r1.name == '00F510A2' || r1.name == '00F510A3' || r1.name == '008410B5') {
      return true;
    } else {
      return false;
    }

  }


  public checkIfMemory(r1: Register) {
    if (r1.name == '00FEF150' || r1.name == '00FEF158' || r1.name == '00FEF160' ||
      r1.name == '00FEF168' || r1.name == '00FEF170' || r1.name == '00FEF178' ||
      r1.name == '00FEF180' || r1.name == '00FEF188' || r1.name == '00FEF190' ||
      r1.name == '00FEF198' || r1.name == '00FEF1A0' || r1.name == '00FEF1A8' ||
      r1.name == '00FEF1B0' || r1.name == '00FEF1B8' || r1.name == '00FEF1C0' ||
      r1.name == '00FEF1C8' || r1.name == '00FEF1D0' || r1.name == '00FEF1D8') {
      return true;
    } else {
      return false;
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
    this.showDiv = false;
    this.showInc = false;
    this.showDec = false;
    this.showMov = false;
    this.showPush = false;
    this.showPop = false;
    this.showAnd = false;
    this.showOR = false;
    this.showXOR = false;
    this.showNOT = false;
    this.showJmp = false;
    this.showCmp = false;
    this.showJz = false;
    this.showJnz = false;
    this.showCall = false;
    this.showRet = false;
    this.showJG = false;
    this.showLea = false;
    this.showJG = false;
    this.showJGE = false;
    this.showJL = false;
    this.showJLE = false;
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

        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (8 - l); i++) {
          valueToStore = valueToStore + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        r.value = valueToStore;
        r.arrow = "fa fa-hand-o-right fa-4x";
        console.log(r);
        this.outputValue = r.value;
      }
    }

  }

  public addRegister(): void {
    console.log("r")
    this.addRegisterBoolean = true;
    this.addNumberBoolean = false;
    let temp1: Register = new Register('', '0', '');
    let temp2: Register = new Register('', '0', '');
    let r;

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

    let temp5 = temp3.toString(16).toUpperCase();
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (8 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = "fa fa-hand-o-right fa-4x";
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
        if (temp1 < 0) {
          console.log("entered");
          temp1 = (0xFFFFFFFF + temp1 + 1);
          let hexaString = temp1.toString(16).toUpperCase();
          console.log(hexaString);
        }

        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (8 - l); i++) {
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
    console.log(temp3);

    if (temp3 < 0) {
      console.log("entered");
      temp3 = (0xFFFFFFFF + temp3 + 1);
      let hexaString = temp3.toString(16).toUpperCase();
      console.log(hexaString);

    }


    let temp5 = temp3.toString(16).toUpperCase();
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (8 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x'
    this.outputValue = temp1.value;
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

        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (8 - l); i++) {
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

    let temp5 = temp3.toString(16).toUpperCase();
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (8 - l); i++) {
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
    temp3 = temp4 * temp6;

    let temp5 = temp3.toString(16).toUpperCase();
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (8 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x'
    this.outputValue = temp1.value;
  }

  public divNumber(): void {
    this.divNumberBoolean = true;
    this.divRegisterBoolean = false;
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
        console.log(temp1);
        console.log(temp2);

        quotient = Math.floor(temp2 / temp1);
        remainder = temp2 % temp1;

        console.log(remainderString);
        temp1 = quotient;
        //append zeros so that length becomes 16
        console.log(temp1);
        console.log(remainder);

        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        

        for (var i = 0; i < (8 - l); i++) {
          valueToStore = valueToStore + '0';
        }

        for (var i = 0; i < (8 - l); i++) {
          remainderString = remainderString + '0';
        }
        valueToStore = valueToStore + temp3;
        console.log(valueToStore);
        //r.value = valueToStore;
        // r.arrow='fa fa-hand-o-right fa-4x';
      }

    }
    for (let r of this.register) {
      if (r.name == 'EAX') {
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = r.value;
      }
      if (r.name == 'EDX') {
        remainderString = remainderString + remainder.toString(16).toUpperCase();
        console.log(remainderString);
        r.value = remainderString;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        this.remainderToDisplay = r.value;

      }
    }


  }

  public divRegister(): void {
    this.divNumberBoolean = false;
    this.divRegisterBoolean = true;

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
    let temp5 = temp3.toString(16).toUpperCase();
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (8 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;

    for (var i = 0; i < (8 - l); i++) {
      remainderString = remainderString + '0';
    }
    for (let r of this.register) {
      if (r.name == 'EAX') {
        r.value = valueToStore;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = r.value;
        }
    }

    for (let r of this.register) {
      if (r.name == 'EDX') {
        remainderString = remainderString + remainder.toString(16).toUpperCase();
        r.value = remainderString;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        this.remainderToDisplay = r.value;
      }
    }

    //this.outputValue = temp1.value;
  }

  public movNumber(): void {
    this.movNumberBoolean = true;
    this.movRegisterBoolean = false;

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp2;
        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (8 - l); i++) {
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
    this.movNumberBoolean = false;
    this.movRegisterBoolean = true;

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

    let temp5 = temp3.toString(16).toUpperCase();
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (8 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x';
    this.outputValue = temp1.value;
  }

  public incNumber(): void {
    this.incBoolean = true;
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        // let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 + 1;
        //append zeros so that length becomes 16
        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (8 - l); i++) {
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

  public decNumber(): void {
    this.decBoolean = true;
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        // let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - 1;
        //append zeros so that length becomes 16
        if (temp1 < 0) {
          console.log("entered");
          temp1 = (0xFFFFFFFF + temp1 + 1);
          let hexaString = temp1.toString(16).toUpperCase();
          console.log(hexaString);
        }
        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (8 - l); i++) {
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

  public pushRegister() {
    this.pushboolean = true;
    this.pushNumberBoolean = false;
    let tempRSPRegister: Register = new Register('', '0', '');
  let tempRSPValue: string;
  let temp: string;
  for (let r = 0; r < this.register.length; r++) {
    this.register[r].arrow = '';
    if (this.register[r].name == 'ESP') {
      tempRSPValue = this.register[r].value;
      console.log("This val"+tempRSPValue);
      tempRSPRegister = this.register[r];
      console.log("This val2"+tempRSPRegister.name);
      console.log("This val3"+tempRSPRegister.value);
      tempRSPRegister.arrow = 'fa fa-hand-o-right fa-4x';
      //console.log(this.memoryList.length);
    }
  }
  for (let r = 0; r < this.register.length; r++) {
    if (this.register[r].name == tempRSPValue) {
      tempRSPRegister.value = this.register[r - 1].name;
      let tempMemory = tempRSPRegister.value;
         console.log("This val3"+tempMemory);
      for (let s of this.register) {
        if (this.selectedRegister1 == s.name) {
          console.log('1'+s.value);
          console.log('2'+this.register[r-1].name);
          console.log('3'+this.register[r-1].value);

          this.register[r-1].value = s.value;
          console.log("\nserachng value: "+ this.register[r-1].value);
          s.arrow = 'fa fa-hand-o-right fa-4x';


        }
      }
    }
  }
  for (let r = 0; r < this.register.length; r++) {
    if (this.register[r].name == tempRSPRegister.value)
     {
       //this.register[r].value = s.value;
       console.log("registername : " +this.register[r].name);
       console.log("registervalue: " +tempRSPRegister.value);
   
      this.register[r].arrow = "fa fa-hand-o-right fa-4x";
     }
      }
  }

  public pushNumber() {
    this.pushboolean = false;
    this.pushNumberBoolean = true;
    let tempRSPRegister: Register = new Register('', '0', '');
  let tempRSPValue: string;
  let temp: string;
  for (let r = 0; r < this.register.length; r++) {
    this.register[r].arrow = '';
    if (this.register[r].name == 'ESP') {
      tempRSPValue = this.register[r].value;
      console.log("This val"+tempRSPValue);
      tempRSPRegister = this.register[r];
    
      tempRSPRegister.arrow = 'fa fa-hand-o-right fa-4x';
      //console.log(this.memoryList.length);
    }
  }
  for (let r = 0; r < this.register.length; r++) {
    if (this.register[r].name == tempRSPValue) {
      tempRSPRegister.value = this.register[r - 1].name;
      let tempMemory = tempRSPRegister.value;
         console.log("This val3"+tempMemory);
      for (let s of this.register) {

        let temp2 = parseInt(this.valueToAdd, 16);
        let temp3 = temp2.toString(16).toUpperCase();
         
          let l = temp3.length;
          let valueToStore: string = '';
          for (var i = 0; i < (8 - l); i++) {
            valueToStore = valueToStore + '0';
          }
          valueToStore = valueToStore + temp3;
          this.register[r-1].value = valueToStore;
                 
      }
    }
  }
  for (let r = 0; r < this.register.length; r++) {
    if (this.register[r].name == tempRSPRegister.value)
     {
       //this.register[r].value = s.value;
       console.log("registername : " +this.register[r].name);
       console.log("registervalue: " +tempRSPRegister.value);
   
      this.register[r].arrow = "fa fa-hand-o-right fa-4x";
     }
      }
  }


  public popRegister() {
    this.popboolean = true;
    let tempRSPRegister: Register = new Register('', '0', '');
    let tempRSPValue: string;
    let temp: string;
    for (let r = 0; r < this.register.length; r++) {
      this.register[r].arrow = '';
      if (this.register[r].name == 'ESP') {
        tempRSPValue = this.register[r].value;
        console.log("This val"+tempRSPValue);
        tempRSPRegister = this.register[r];
        console.log("This val2"+tempRSPRegister.name);
        console.log("This val3"+tempRSPRegister.value);
        tempRSPRegister.arrow = 'fa fa-hand-o-right fa-4x';
        //console.log(this.memoryList.length);
      }
    }
    for (let r = 0; r < this.register.length; r++) {
      if (this.register[r].name == tempRSPValue) {
        tempRSPRegister.value = this.register[r + 1].name;
        let tempMemory = tempRSPRegister.value;
        console.log("This val3"+tempMemory);
        for (let s of this.register) {
          if (this.selectedRegister1 == s.name) {
            s.value = this.register[r].value;
            console.log("\nserachng value: "+s.value);
            s.arrow = 'fa fa-hand-o-right fa-4x';


          }
        }
      }
    }

    for (let r = 0; r < this.register.length; r++) {
      if (this.register[r].name == tempRSPRegister.value)
       {
         console.log("registername : " +this.register[r].name);
         console.log("registervalue: " +tempRSPRegister.value);
        this.register[r].arrow = "fa fa-hand-o-right fa-4x";
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
    
    this.addNumberBoolean = true;
    this.addRegisterBoolean = false;
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 & temp2;
        console.log(temp1);

        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (8 - l); i++) {
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

  public andRegister(): void {
    this.addNumberBoolean = false;
    this.addRegisterBoolean = true;
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

    let temp5 = temp3.toString(16).toUpperCase();
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (8 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x';
    this.outputValue = temp1.value;
  }


  public orNumber(): void {
    this.orNumberBoolean = true;
    this.orRegisterBoolean = false;

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 | temp2;
        console.log(temp1);

        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (8 - l); i++) {
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


  public orRegister(): void {

    this.orNumberBoolean = false;
    this.orRegisterBoolean = true;

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

    let temp5 = temp3.toString(16).toUpperCase();
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (8 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x';
    this.outputValue = temp1.value;
  }


  public xorNumber(): void {
    this.xorNumberBoolean = true;
    this.xorRegisterBoolean = false;

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 ^ temp2;
        console.log(temp1);

        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (8 - l); i++) {
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

  public xorRegister(): void {
    this.xorNumberBoolean = false;
    this.xorRegisterBoolean = true;

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

    let temp5 = temp3.toString(16).toUpperCase();
    let l = temp5.length;
    let valueToStore: string = '';

    for (let i = 0; i < (8 - l); i++) {
      valueToStore = valueToStore + '0';
    }
    valueToStore += temp5;
    temp1.value = valueToStore;
    temp1.arrow = 'fa fa-hand-o-right fa-4x';
    this.outputValue = temp1.value;
  }

  public notNumber(): void {
    this.notNumberBoolean = true;
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        //let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = ~temp1;
        console.log(temp1);

        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16).toUpperCase();

        let l = temp3.length;
        let valueToStore: string = '';
        for (var i = 0; i < (8 - l); i++) {
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

  public jmpLabel(): void {
    this.jmpRegisterBoolean = false;
    this.jmpNumberBoolean = true;
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        r.arrow = 'fa fa-hand-o-right fa-4x';
        console.log(r.arrow);
      }
    }
  }

  public cmpNumber(): void {
    this.cmpRegisterBoolean = false;
    this.cmpNumberBoolean = true;
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16).toUpperCase();

        // let l = temp3.length;
        //  let valueToStore: string = '';
        // for (var i = 0; i < (8 - l); i++) {
        //   valueToStore = valueToStore + '0';
        // }
        // valueToStore = valueToStore + temp3;
        // console.log(valueToStore);
        //r.value = temp3;
        r.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = temp3;
      }
    }

  }

  public cmpRegister(): void {
    this.cmpRegisterBoolean = true;
    this.cmpNumberBoolean = false;
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

    let temp5 = temp3.toString(16).toUpperCase();
    // let l = temp5.length;
    // let valueToStore: string = '';

    // for (let i = 0; i < (8 - l); i++) {
    //   valueToStore = valueToStore + '0';
    // }
    // valueToStore += temp5;
    //temp1.value = valueToStore;
     temp1.arrow = 'fa fa-hand-o-right fa-4x'
    this.outputValue = temp5;
  }

  public jmpNumber(): void {
    this.jmpRegisterBoolean = false;
    this.jmpNumberBoolean = true;
    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        //append zeros so that length becomes 16

        let temp3 = temp1.toString(16).toUpperCase();

        // let l = temp3.length;
        //  let valueToStore: string = '';
        // for (var i = 0; i < (8 - l); i++) {
        //   valueToStore = valueToStore + '0';
        // }
        // valueToStore = valueToStore + temp3;
        // console.log(valueToStore);
        // r.value = temp3;
        // r.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = temp3;
      }
    }

  }

  public jmpZeroNumber(): void {
    this.jmpZeroRegisterBoolean = false;
    this.jmpZeroNumberBoolean = true;

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        let temp3 = temp1.toString(16).toUpperCase();
        this.outputValue = temp3;
      }
    }
    console.log(this.outputValue);
    for (let r of this.register) {
      if (this.outputValue == '0') {
        if (this.selectedRegister2 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("true");
      }

    }

  }

  public jmpZeroRegister(): void {
    this.jmpZeroRegisterBoolean = true;
    this.jmpZeroNumberBoolean = false;

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
    let temp5 = temp3.toString(16).toUpperCase();
    this.outputValue = temp5;
    console.log(this.outputValue);
    for (let r of this.register) {
      if (this.outputValue == '0') {
        if (this.selectedRegister1 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("False");
      }
    }

  }

  public jmpIfNotZeroNumber(): void {
    this.jmpIfNotZeroRegisterBoolean = false;
    this.jmpIfNotZeroNumberBoolean = true;

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        let temp3 = temp1.toString(16).toUpperCase();
        this.outputValue = temp3;
      }
    }
    console.log(this.outputValue);
    for (let r of this.register) {
      if (this.outputValue != '0') {
        if (this.selectedRegister2 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("true");
      }

    }

  }

  public jmpIfNotZeroRegister(): void {
    this.jmpIfNotZeroRegisterBoolean = true;
    this.jmpIfNotZeroNumberBoolean = false;

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
    let temp5 = temp3.toString(16).toUpperCase();
    this.outputValue = temp5;
    console.log(this.outputValue);
    for (let r of this.register) {
      if (this.outputValue != '0') {
        if (this.selectedRegister1 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("true");
      }
    }

  }


  public jmpGreaterThanNumber(): void {
    this.jmpGreaterThanNumberBoolean = true; 
    this.jmpGreaterThanRegisterBoolean = false; 

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        let temp3 = temp1.toString(16).toUpperCase();
        this.outputValue = temp3;
      }
    }
    console.log(this.outputValue);
    for (let r of this.register) {
      r.arrow = '';
      if (this.outputValue > '0') {
        if (this.selectedRegister2 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("False");
      }

    }

  }

  public jmpGreaterThanRegister(): void {
    this.jmpGreaterThanNumberBoolean = false; 
    this.jmpGreaterThanRegisterBoolean = true; 

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        let temp3 = temp1.toString(16).toUpperCase();
        this.outputValue = temp3;
      }
    }
    console.log(this.outputValue);
    for (let r of this.register) {
      r.arrow = '';
      if (this.outputValue > '0') {
        if (this.selectedRegister1 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("False");
      }

    }

  }

  


  public jmpGreaterThanequal(): void {
    this.jmpGreaterThanEqualNumberBoolean  = true; 
    this.jmpGreaterThanEqualRegisterBoolean  = false; 

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        let temp3 = temp1.toString(16).toUpperCase();
        this.outputValue = temp3;
      }
    }
    console.log(this.outputValue);
    for (let r of this.register) {
      r.arrow = '';
      if (this.outputValue > '0' || this.outputValue == '0') {
        if (this.selectedRegister2 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        r.arrow = '';
        console.log("False");
      }

    }
  }

  public jmpGreaterThanequalRegister(): void {
    this.jmpGreaterThanEqualNumberBoolean  = false; 
    this.jmpGreaterThanEqualRegisterBoolean  = true; 

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        let temp3 = temp1.toString(16).toUpperCase();
        this.outputValue = temp3;
      }
    }
    console.log(this.outputValue);
    for (let r of this.register) {
      r.arrow = '';
      if (this.outputValue > '0' || this.outputValue == '0') {
        if (this.selectedRegister1 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("False");
      }

    }
  }

  public jmpLessThanNumber(): void {
    this.jmpLessThanNumberBoolean  = true; 
    this.jmpLessThanRegisterBoolean  = false ; 

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        let temp3 = temp1.toString(16).toUpperCase();
        this.outputValue = temp3;
      }
    }
    console.log(this.outputValue);
    for (let r of this.register) {
      r.arrow = '';
      if (this.outputValue < '0') {
        if (this.selectedRegister2 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("False");
      }

    }

  }

  public jmpLessThanRegister(): void {
    this.jmpLessThanNumberBoolean  = false; 
    this.jmpLessThanRegisterBoolean  = true; 

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        let temp3 = temp1.toString(16).toUpperCase();
        this.outputValue = temp3;
      }
    }
    console.log(this.outputValue);
    for (let r of this.register) {
      r.arrow = '';
      if (this.outputValue < '0') {
        if (this.selectedRegister1 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("False");
      }

    }

  }

  public jmpLessThanEqualNumber(): void {
    this.jmpLessThanEqualNumberBoolean  = true; 
    this.jmpLessThanEqualRegisterBoolean  = false; 

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        let temp3 = temp1.toString(16).toUpperCase();
        this.outputValue = temp3;
      }
    }
    console.log(this.outputValue);
    for (let r of this.register) {
      r.arrow = '';
      if (this.outputValue < '0' || this.outputValue == '0') {
        if (this.selectedRegister2 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister2 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("False");
      }

    }

  }

  public jmpLessThanEqualRegister(): void {
    this.jmpLessThanEqualNumberBoolean  = false; 
    this.jmpLessThanEqualRegisterBoolean  = true; 

    for (let r of this.register) {
      r.arrow = '';
      if (this.selectedRegister1 == r.name) {
        let temp1 = parseInt(r.value, 16);
        let temp2 = parseInt(this.valueToAdd, 16);
        temp1 = temp1 - temp2;
        let temp3 = temp1.toString(16).toUpperCase();
        this.outputValue = temp3;
      }
    }
    console.log(this.outputValue);
    for (let r of this.register) {
      r.arrow = '';
      if (this.outputValue < '0' || this.outputValue == '0') {
        if (this.selectedRegister1 == 'C1') {
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410C5') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C2') {          
          for (let r of this.register2) {
            r.arrow = ''; 
            if (r.name == '008410B2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
        if (this.selectedRegister1 == 'C3') {
            for (let r of this.register2) {
              r.arrow = '';
            if (r.name == '00F510A2') {
              r.arrow = "fa fa-hand-o-right fa-4x"
            }
          }
        }
      }
      else {
        for (let r of this.register2) {
          r.arrow = '';
        }
        console.log("False");
      }

    }

  }

    

  public callLabel(): void {
    this.callRegisterBoolean = false;
    this.callNumberBoolean = true;
    for (let r of this.register2) {

      r.arrow = '';

      if (this.selectedRegister1 == 'C1') {
        for (let r of this.register2) {
          if (r.name == '008410C5') {
            r.arrow = "fa fa-hand-o-right fa-4x"
          }
        }
      }
      if (this.selectedRegister1 == 'C2') {
        for (let r of this.register2) {
          if (r.name == '008410B2') {
            r.arrow = "fa fa-hand-o-right fa-4x"
          }
        }
      }
      if (this.selectedRegister1 == 'C3') {
        for (let r of this.register2) {
          if (r.name == '00F510A2') {
            r.arrow = "fa fa-hand-o-right fa-4x"
          }
        }
      }
    }
  }

  public retLabel(): void {
    this.callRegisterBoolean = false;
    this.callNumberBoolean = true;
    for (let r of this.register2) {

      r.arrow = '';
      if (r.name == "C1") {
        r.arrow = "fa fa-hand-o-right fa-4x"
      }

      if (this.selectedRegister1 == 'C1') {
        for (let r of this.register2) {
          if (r.name == '008410C5') {
            r.arrow = "fa fa-hand-o-right fa-4x"
          }
        }
      }
      if (this.selectedRegister1 == 'C2') {
        for (let r of this.register2) {
          if (r.name == '008410B2') {
            r.arrow = "fa fa-hand-o-right fa-4x"
          }
        }
      }
      if (this.selectedRegister1 == 'C3') {
        for (let r of this.register2) {
          if (r.name == '00F510A2') {
            r.arrow = "fa fa-hand-o-right fa-4x"
          }
        }
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
  public showLeaSection() {
    this.resetParameters();
    this.showLea = true;
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
  public showJmpSection() {
    this.resetParameters();
    this.showJmp = true;
  }
  public showCmpSection() {
    this.resetParameters();
    this.showCmp = true;
  }

  public showJzSection() {
    this.resetParameters();
    this.showJz = true;
  }

  public showJnzSection() {
    this.resetParameters();
    this.showJnz = true;
  }
  public showCallSection() {
    this.resetParameters();
    this.showCall = true;
  }

  public showRetSection() {
    this.resetParameters();
    this.showRet = true;
  }

  public showJGSection() {
    this.resetParameters();
    this.showJG = true;
  }
  
  public showJGESection() {
    this.resetParameters();
    this.showJGE = true;
  }

  public showJLSection() {
    this.resetParameters();
    this.showJL = true;
  }

  public showJLESection() {
    this.resetParameters();
    this.showJLE = true;
  }
  //   public subRegister(): void {
  //   let temp1: Register = new Register('', '0');
  //   let temp2: Register = new Register('', '0');


  //   for (let r of this.register) {
  //     if (this.selectedRegister2 == r.name) {
  //       temp1 = r;

  //     }
  //   }
  //   for (let r of this.register) {
  //     if (this.selectedRegister3 == r.name) {
  //       temp2 = r;

  //     }
  //   }
  //   temp1.value = temp1.value - temp2.value;
  //   this.outputValue = temp1.value;
  // }
}