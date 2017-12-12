"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Register_1 = require("./Register");
var Instruction = (function () {
    function Instruction() {
        this.remainderToDisplay = '';
        this.arrow = '';
        this.outputValue = '0';
        this.valueToAdd2 = '';
        this.showAdd = false;
        this.showSub = false;
        this.showMul = false;
        this.showDiv = false;
        this.showMov = false;
        this.showInc = false;
        this.showDec = false;
        this.showAnd = false;
        this.showOR = false;
        this.showXOR = false;
        this.showNOT = false;
        this.showPush = false;
        this.showPop = false;
        this.showJmp = false;
        this.showCmp = false;
        this.showJz = false;
        this.showJnz = false;
        this.showJG = false;
        this.showJGE = false;
        this.showJL = false;
        this.showJLE = false;
        this.showCall = false;
        this.showRet = false;
        this.showLea = false;
        this.addNumberBoolean = false;
        this.addRegisterBoolean = false;
        this.subNumberBoolean = false;
        this.subRegisterBoolean = false;
        this.mulNumberBoolean = false;
        this.mulRegisterBoolean = false;
        this.mulRegisterTwoBoolean = false;
        this.divNumberBoolean = false;
        this.divRegisterBoolean = false;
        this.movNumberBoolean = false;
        this.movRegisterBoolean = false;
        this.incBoolean = false;
        this.decBoolean = false;
        this.pushboolean = false;
        this.popboolean = false;
        this.pushNumberBoolean = false;
        this.andNumberBoolean = false;
        this.andRegisterBoolean = false;
        this.orNumberBoolean = false;
        this.orRegisterBoolean = false;
        this.xorNumberBoolean = false;
        this.xorRegisterBoolean = false;
        this.notNumberBoolean = false;
        this.cmpNumberBoolean = false;
        this.cmpRegisterBoolean = false;
        this.jmpNumberBoolean = false;
        this.jmpRegisterBoolean = false;
        this.callNumberBoolean = false;
        this.callRegisterBoolean = false;
        this.jmpIfNotZeroRegisterBoolean = false;
        this.jmpIfNotZeroNumberBoolean = false;
        this.jmpZeroRegisterBoolean = false;
        this.jmpZeroNumberBoolean = false;
        this.jmpLessThanEqualNumberBoolean = false;
        this.jmpLessThanEqualRegisterBoolean = false;
        this.jmpLessThanNumberBoolean = false;
        this.jmpLessThanRegisterBoolean = false;
        this.jmpGreaterThanNumberBoolean = false;
        this.jmpGreaterThanRegisterBoolean = false;
        this.jmpGreaterThanEqualNumberBoolean = false;
        this.jmpGreaterThanEqualRegisterBoolean = false;
        this.selectedRegister1 = '';
        this.selectedRegister2 = '';
        this.selectedRegister3 = '';
        this.selectedRegister4 = '';
        this.selectedRegister5 = '';
        this.register = [
            new Register_1.Register('RAX', '0000000000000005', ''),
            new Register_1.Register('RBX', '0000000000000006', ''),
            new Register_1.Register('RCX', '0000000000000015', ''),
            new Register_1.Register('RDX', '0000000000000012', ''),
            new Register_1.Register('RBP', '00000000000000a1', ''),
            new Register_1.Register('RSP', '0000000000FEF1B0', ''),
            new Register_1.Register('RSI', '000000000000002d', ''),
            new Register_1.Register('RDI', '000000000000003a', ''),
            new Register_1.Register('RIP', '000000000000009b', ''),
            new Register_1.Register('R8', '0000000000000000', ''),
            new Register_1.Register('R9', '0000000000000000', ''),
            new Register_1.Register('R10', '0000000000000000', ''),
            new Register_1.Register('R11', '0000000000000000', ''),
            new Register_1.Register('R12', '0000000000000000', ''),
            new Register_1.Register('R13', '0000000000000000', ''),
            new Register_1.Register('R14', '0000000000000000', ''),
            new Register_1.Register('R15', '0000000000000000', ''),
            new Register_1.Register('0000000000FEF150', '0000000000000010', ''),
            new Register_1.Register('0000000000FEF158', '000000000000000a', ''),
            new Register_1.Register('0000000000FEF160', '00000000000000c5', ''),
            new Register_1.Register('0000000000FEF168', '00000000000000a3', ''),
            new Register_1.Register('0000000000FEF170', '0000000000000180', ''),
            new Register_1.Register('0000000000FEF178', '0000000000000000', ''),
            new Register_1.Register('0000000000FEF180', '0000000000000000', ''),
            new Register_1.Register('0000000000FEF188', '0000000000000000', ''),
            new Register_1.Register('0000000000FEF190', '0000000000000000', ''),
            new Register_1.Register('0000000000FEF198', '0000000000000000', ''),
            new Register_1.Register('0000000000FEF1A0', '0000000000000000', ''),
            new Register_1.Register('0000000000FEF1A8', '0000000000000000', ''),
            new Register_1.Register('0000000000FEF1B0', '0000000000000008', ''),
            new Register_1.Register('0000000000FEF1C0', '0000000000000001', ''),
            new Register_1.Register('0000000000FEF1C8', '0000000000000002', ''),
            new Register_1.Register('0000000000FEF1D0', '0000000000000003', ''),
            new Register_1.Register('0000000000FEF1D8', '0000000000000004', ''),
        ];
        //From here ret and call -------
        this.register2 = [
            new Register_1.Register('C1', 'Call C2/C3  ', ''),
            new Register_1.Register('008410C5', 'or eax,1    ', ''),
            new Register_1.Register('008410C6', 'mov eax,ecx ', ''),
            new Register_1.Register('008410C7', 'ret         ', ''),
            new Register_1.Register('C2', 'Call C1/C3  ', ''),
            new Register_1.Register('008410B2', 'add eax,20  ', ''),
            new Register_1.Register('008410B3', 'push eax    ', ''),
            new Register_1.Register('008410B4', 'pop ecx     ', ''),
            new Register_1.Register('008410B5', 'ret         ', ''),
            new Register_1.Register('C3', 'Call C1/C2  ', ''),
            new Register_1.Register('00F510A2', 'xor ecx,ecx ', ''),
            new Register_1.Register('00F510A3', 'mov eax,ecx ', ''),
            new Register_1.Register('008410B5', 'ret         ', '')
        ];
        this.memoryList = ['0000000000FEF150', '0000.000000FEF158', '0000000000FEF1A0', '0000000000FEF1A8', '0000000000FEF1B0',
            '0000000000FEF1C0', '0000000000FEF1C8', '0000000000FEF1D0', '0000000000FEF1D8'];
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
    Instruction.prototype.checkIfRegister = function (r1) {
        if (r1.name == 'RAX' || r1.name == 'RBX' || r1.name == 'RCX' || r1.name == 'RDX' || r1.name == 'RBP' || r1.name == 'RSP' || r1.name == 'RDI' ||
            r1.name == 'RSI' || r1.name == 'RIP' || r1.name == 'R8' || r1.name == 'R9' || r1.name == 'R10' || r1.name == 'R11' ||
            r1.name == 'R12' || r1.name == 'R13' || r1.name == 'R14' || r1.name == 'R15') {
            return true;
        }
        else {
            return false;
        }
    };
    Instruction.prototype.checkIfLabel = function (r1) {
        if (r1.name == 'C1' || r1.name == '008410C5' || r1.name == '008410C6' || r1.name == '008410C7' || r1.name == 'C2' || r1.name == '008410B2' || r1.name == '008410B3' ||
            r1.name == '008410B4' || r1.name == '008410B5' || r1.name == 'C3' || r1.name == '00F510A2' || r1.name == '00F510A3' || r1.name == '008410B5') {
            return true;
        }
        else {
            return false;
        }
    };
    Instruction.prototype.checkIfMemory = function (r1) {
        if (r1.name == '0000000000FEF150' || r1.name == '0000000000FEF158' || r1.name == '0000000000FEF160' ||
            r1.name == '0000000000FEF168' || r1.name == '0000000000FEF170' || r1.name == '0000000000FEF178' ||
            r1.name == '0000000000FEF180' || r1.name == '0000000000FEF188' || r1.name == '0000000000FEF190' ||
            r1.name == '0000000000FEF198' || r1.name == '0000000000FEF1A0' || r1.name == '0000000000FEF1A8' ||
            r1.name == '0000000000FEF1B0' || r1.name == '0000000000FEF1B8' || r1.name == '0000000000FEF1C0' ||
            r1.name == '0000000000FEF1C8' || r1.name == '0000000000FEF1D0' || r1.name == '0000000000FEF1D8') {
            return true;
        }
        else {
            return false;
        }
    };
    Instruction.prototype.ngOnInit = function () {
        var num1 = '100';
        var num2 = '';
        var num3 = parseInt(num1, 16);
        console.log(num3);
        var num4 = '6000';
        console.log((parseInt(num4, 16) / parseInt(num1, 16)).toString(16));
        console.log('************************************');
        //this.pushRegister();
    };
    Instruction.prototype.resetParameters = function () {
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
    };
    Instruction.prototype.addNumber = function () {
        this.addRegisterBoolean = false;
        this.addNumberBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 + temp2;
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                var valueToStore = '';
                for (var i = 0; i < (16 - l); i++) {
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
    };
    Instruction.prototype.addRegister = function () {
        console.log("r");
        this.addRegisterBoolean = true;
        this.addNumberBoolean = false;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        var r;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r_1 = _a[_i];
            r_1.arrow = '';
            if (this.selectedRegister2 == r_1.name) {
                temp1 = r_1;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r_2 = _c[_b];
            if (this.selectedRegister3 == r_2.name) {
                temp2 = r_2;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp3 + temp4;
        var temp5 = temp3.toString(16).toUpperCase();
        var l = temp5.length;
        var valueToStore = '';
        for (var i = 0; i < (16 - l); i++) {
            valueToStore = valueToStore + '0';
        }
        valueToStore += temp5;
        temp1.value = valueToStore;
        temp1.arrow = "fa fa-hand-o-right fa-4x";
        this.outputValue = temp1.value;
    };
    Instruction.prototype.subNumber = function () {
        this.subRegisterBoolean = false;
        this.subNumberBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                //append zeros so that length becomes 16
                if (temp1 < 0) {
                    console.log("entered");
                    temp1 = (0xFFFFFFFF + temp1 + 1);
                    var hexaString = temp1.toString(16).toUpperCase();
                    console.log(hexaString);
                }
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                var valueToStore = '';
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
    };
    Instruction.prototype.subRegister = function () {
        this.subRegisterBoolean = true;
        this.subNumberBoolean = false;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister2 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister3 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp3 - temp4;
        console.log(temp3);
        if (temp3 < 0) {
            console.log("entered");
            temp3 = (0xFFFFFFFF + temp3 + 1);
            var hexaString = temp3.toString(16).toUpperCase();
            console.log(hexaString);
        }
        var temp5 = temp3.toString(16).toUpperCase();
        var l = temp5.length;
        var valueToStore = '';
        for (var i = 0; i < (16 - l); i++) {
            valueToStore = valueToStore + '0';
        }
        valueToStore += temp5;
        temp1.value = valueToStore;
        temp1.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = temp1.value;
    };
    Instruction.prototype.mulNumber = function () {
        this.mulRegisterBoolean = false;
        this.mulNumberBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 * temp2;
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                var valueToStore = '';
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
    };
    Instruction.prototype.mulRegister = function () {
        this.mulRegisterBoolean = true;
        this.mulNumberBoolean = false;
        this.mulRegisterTwoBoolean = false;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister2 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister3 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp3 * temp4;
        var temp5 = temp3.toString(16).toUpperCase();
        var l = temp5.length;
        var valueToStore = '';
        for (var i = 0; i < (16 - l); i++) {
            valueToStore = valueToStore + '0';
        }
        valueToStore += temp5;
        temp1.value = valueToStore;
        temp1.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = temp1.value;
    };
    Instruction.prototype.mulRegister2 = function () {
        this.mulRegisterTwoBoolean = true;
        this.mulNumberBoolean = false;
        this.mulRegisterBoolean = false;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        var temp6 = parseInt(this.valueToAdd2, 16);
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister4 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister5 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp4 * temp6;
        var temp5 = temp3.toString(16).toUpperCase();
        var l = temp5.length;
        var valueToStore = '';
        for (var i = 0; i < (16 - l); i++) {
            valueToStore = valueToStore + '0';
        }
        valueToStore += temp5;
        temp1.value = valueToStore;
        temp1.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = temp1.value;
    };
    Instruction.prototype.divNumber = function () {
        this.divNumberBoolean = true;
        this.divRegisterBoolean = false;
        var temp1 = 0;
        var temp2 = 0;
        var quotient = 0;
        var remainder = 0;
        var remainderString = '';
        var valueToStore = '';
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
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
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                for (var i = 0; i < (16 - l); i++) {
                    valueToStore = valueToStore + '0';
                }
                for (var i = 0; i < (16 - l); i++) {
                    remainderString = remainderString + '0';
                }
                valueToStore = valueToStore + temp3;
                console.log(valueToStore);
                //r.value = valueToStore;
                // r.arrow='fa fa-hand-o-right fa-4x';
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (r.name == 'RAX') {
                r.value = valueToStore;
                r.arrow = 'fa fa-hand-o-right fa-4x';
                this.outputValue = r.value;
            }
            if (r.name == 'RDX') {
                remainderString = remainderString + remainder.toString(16).toUpperCase();
                console.log(remainderString);
                r.value = remainderString;
                r.arrow = 'fa fa-hand-o-right fa-4x';
                this.remainderToDisplay = r.value;
            }
        }
    };
    Instruction.prototype.divRegister = function () {
        this.divNumberBoolean = false;
        this.divRegisterBoolean = true;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        var quotient = 0;
        var remainder = 0;
        var remainderString = '';
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister2 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister3 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        quotient = Math.floor(temp3 / temp4);
        remainder = temp3 % temp4;
        //let temp6 = temp3 % temp4;
        temp3 = quotient;
        var temp5 = temp3.toString(16).toUpperCase();
        var l = temp5.length;
        var valueToStore = '';
        for (var i_1 = 0; i_1 < (16 - l); i_1++) {
            valueToStore = valueToStore + '0';
        }
        valueToStore += temp5;
        for (var i = 0; i < (16 - l); i++) {
            remainderString = remainderString + '0';
        }
        for (var _d = 0, _e = this.register; _d < _e.length; _d++) {
            var r = _e[_d];
            if (r.name == 'RAX') {
                r.value = valueToStore;
                r.arrow = 'fa fa-hand-o-right fa-4x';
                this.outputValue = r.value;
            }
        }
        for (var _f = 0, _g = this.register; _f < _g.length; _f++) {
            var r = _g[_f];
            if (r.name == 'RDX') {
                remainderString = remainderString + remainder.toString(16).toUpperCase();
                r.value = remainderString;
                r.arrow = 'fa fa-hand-o-right fa-4x';
                this.remainderToDisplay = r.value;
            }
        }
        //this.outputValue = temp1.value;
    };
    Instruction.prototype.movNumber = function () {
        this.movNumberBoolean = true;
        this.movRegisterBoolean = false;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp2;
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                var valueToStore = '';
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
    };
    Instruction.prototype.movRegister = function () {
        this.movNumberBoolean = false;
        this.movRegisterBoolean = true;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister2 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister3 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp4;
        var temp5 = temp3.toString(16).toUpperCase();
        var l = temp5.length;
        var valueToStore = '';
        for (var i = 0; i < (16 - l); i++) {
            valueToStore = valueToStore + '0';
        }
        valueToStore += temp5;
        temp1.value = valueToStore;
        temp1.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = temp1.value;
    };
    Instruction.prototype.incNumber = function () {
        this.incBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                // let temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 + 1;
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                var valueToStore = '';
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
    };
    Instruction.prototype.decNumber = function () {
        this.decBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                // let temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - 1;
                //append zeros so that length becomes 16
                if (temp1 < 0) {
                    console.log("entered");
                    temp1 = (0xFFFFFFFF + temp1 + 1);
                    var hexaString = temp1.toString(16).toUpperCase();
                    console.log(hexaString);
                }
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                var valueToStore = '';
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
    };
    Instruction.prototype.pushRegister = function () {
        this.pushboolean = true;
        this.pushNumberBoolean = false;
        var tempRSPRegister = new Register_1.Register('', '0', '');
        var tempRSPValue;
        var temp;
        for (var r = 0; r < this.register.length; r++) {
            this.register[r].arrow = '';
            if (this.register[r].name == 'RSP') {
                tempRSPValue = this.register[r].value;
                console.log("This val" + tempRSPValue);
                tempRSPRegister = this.register[r];
                console.log("This val2" + tempRSPRegister.name);
                console.log("This val3" + tempRSPRegister.value);
                tempRSPRegister.arrow = 'fa fa-hand-o-right fa-4x';
                //console.log(this.memoryList.length);
            }
        }
        for (var r = 0; r < this.register.length; r++) {
            if (this.register[r].name == tempRSPValue) {
                tempRSPRegister.value = this.register[r - 1].name;
                var tempMemory = tempRSPRegister.value;
                console.log("This val3" + tempMemory);
                for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
                    var s = _a[_i];
                    if (this.selectedRegister1 == s.name) {
                        console.log('1' + s.value);
                        console.log('2' + this.register[r - 1].name);
                        console.log('3' + this.register[r - 1].value);
                        this.register[r - 1].value = s.value;
                        console.log("\nserachng value: " + this.register[r - 1].value);
                        s.arrow = 'fa fa-hand-o-right fa-4x';
                    }
                }
            }
        }
        for (var r = 0; r < this.register.length; r++) {
            if (this.register[r].name == tempRSPRegister.value) {
                //this.register[r].value = s.value;
                console.log("registername : " + this.register[r].name);
                console.log("registervalue: " + tempRSPRegister.value);
                this.register[r].arrow = "fa fa-hand-o-right fa-4x";
            }
        }
    };
    Instruction.prototype.pushNumber = function () {
        this.pushboolean = false;
        this.pushNumberBoolean = true;
        var tempRSPRegister = new Register_1.Register('', '0', '');
        var tempRSPValue;
        var temp;
        for (var r = 0; r < this.register.length; r++) {
            this.register[r].arrow = '';
            if (this.register[r].name == 'RSP') {
                tempRSPValue = this.register[r].value;
                console.log("This val" + tempRSPValue);
                tempRSPRegister = this.register[r];
                tempRSPRegister.arrow = 'fa fa-hand-o-right fa-4x';
                //console.log(this.memoryList.length);
            }
        }
        for (var r = 0; r < this.register.length; r++) {
            if (this.register[r].name == tempRSPValue) {
                tempRSPRegister.value = this.register[r - 1].name;
                var tempMemory = tempRSPRegister.value;
                console.log("This val3" + tempMemory);
                for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
                    var s = _a[_i];
                    var temp2 = parseInt(this.valueToAdd, 16);
                    var temp3 = temp2.toString(16).toUpperCase();
                    var l = temp3.length;
                    var valueToStore = '';
                    for (var i = 0; i < (16 - l); i++) {
                        valueToStore = valueToStore + '0';
                    }
                    valueToStore = valueToStore + temp3;
                    this.register[r - 1].value = valueToStore;
                }
            }
        }
        for (var r = 0; r < this.register.length; r++) {
            if (this.register[r].name == tempRSPRegister.value) {
                //this.register[r].value = s.value;
                console.log("registername : " + this.register[r].name);
                console.log("registervalue: " + tempRSPRegister.value);
                this.register[r].arrow = "fa fa-hand-o-right fa-4x";
            }
        }
    };
    Instruction.prototype.popRegister = function () {
        this.popboolean = true;
        var tempRSPRegister = new Register_1.Register('', '0', '');
        var tempRSPValue;
        var temp;
        for (var r = 0; r < this.register.length; r++) {
            this.register[r].arrow = '';
            if (this.register[r].name == 'RSP') {
                tempRSPValue = this.register[r].value;
                console.log("This val" + tempRSPValue);
                tempRSPRegister = this.register[r];
                console.log("This val2" + tempRSPRegister.name);
                console.log("This val3" + tempRSPRegister.value);
                tempRSPRegister.arrow = 'fa fa-hand-o-right fa-4x';
                //console.log(this.memoryList.length);
            }
        }
        for (var r = 0; r < this.register.length; r++) {
            if (this.register[r].name == tempRSPValue) {
                tempRSPRegister.value = this.register[r + 1].name;
                var tempMemory = tempRSPRegister.value;
                console.log("This val3" + tempMemory);
                for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
                    var s = _a[_i];
                    if (this.selectedRegister1 == s.name) {
                        s.value = this.register[r].value;
                        console.log("\nserachng value: " + s.value);
                        s.arrow = 'fa fa-hand-o-right fa-4x';
                    }
                }
            }
        }
        for (var r = 0; r < this.register.length; r++) {
            if (this.register[r].name == tempRSPRegister.value) {
                console.log("registername : " + this.register[r].name);
                console.log("registervalue: " + tempRSPRegister.value);
                this.register[r].arrow = "fa fa-hand-o-right fa-4x";
            }
        }
    };
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
    Instruction.prototype.andNumber = function () {
        this.addNumberBoolean = true;
        this.addRegisterBoolean = false;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 & temp2;
                console.log(temp1);
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                var valueToStore = '';
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
    };
    Instruction.prototype.andRegister = function () {
        this.addNumberBoolean = false;
        this.addRegisterBoolean = true;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister2 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister3 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp3 & temp4;
        console.log(temp3);
        //temp3 = temp4;
        var temp5 = temp3.toString(16).toUpperCase();
        var l = temp5.length;
        var valueToStore = '';
        for (var i = 0; i < (16 - l); i++) {
            valueToStore = valueToStore + '0';
        }
        valueToStore += temp5;
        temp1.value = valueToStore;
        temp1.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = temp1.value;
    };
    Instruction.prototype.orNumber = function () {
        this.orNumberBoolean = true;
        this.orRegisterBoolean = false;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 | temp2;
                console.log(temp1);
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                var valueToStore = '';
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
    };
    Instruction.prototype.orRegister = function () {
        this.orNumberBoolean = false;
        this.orRegisterBoolean = true;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister2 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister3 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp3 | temp4;
        console.log(temp3);
        //temp3 = temp4;
        var temp5 = temp3.toString(16).toUpperCase();
        var l = temp5.length;
        var valueToStore = '';
        for (var i = 0; i < (16 - l); i++) {
            valueToStore = valueToStore + '0';
        }
        valueToStore += temp5;
        temp1.value = valueToStore;
        temp1.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = temp1.value;
    };
    Instruction.prototype.xorNumber = function () {
        this.xorNumberBoolean = true;
        this.xorRegisterBoolean = false;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 ^ temp2;
                console.log(temp1);
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                var valueToStore = '';
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
    };
    Instruction.prototype.xorRegister = function () {
        this.xorNumberBoolean = false;
        this.xorRegisterBoolean = true;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister2 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister3 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp3 ^ temp4;
        console.log(temp3);
        //temp3 = temp4;
        var temp5 = temp3.toString(16).toUpperCase();
        var l = temp5.length;
        var valueToStore = '';
        for (var i = 0; i < (16 - l); i++) {
            valueToStore = valueToStore + '0';
        }
        valueToStore += temp5;
        temp1.value = valueToStore;
        temp1.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = temp1.value;
    };
    Instruction.prototype.notNumber = function () {
        this.notNumberBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                //let temp2 = parseInt(this.valueToAdd, 16);
                temp1 = ~temp1;
                console.log(temp1);
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16).toUpperCase();
                var l = temp3.length;
                var valueToStore = '';
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
    };
    Instruction.prototype.jmpLabel = function () {
        this.jmpRegisterBoolean = false;
        this.jmpNumberBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                r.arrow = 'fa fa-hand-o-right fa-4x';
                console.log(r.arrow);
            }
        }
    };
    Instruction.prototype.cmpNumber = function () {
        this.cmpRegisterBoolean = false;
        this.cmpNumberBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16).toUpperCase();
                // let l = temp3.length;
                //  let valueToStore: string = '';
                // for (var i = 0; i < (16 - l); i++) {
                //   valueToStore = valueToStore + '0';
                // }
                // valueToStore = valueToStore + temp3;
                // console.log(valueToStore);
                //r.value = temp3;
                r.arrow = 'fa fa-hand-o-right fa-4x';
                this.outputValue = temp3;
            }
        }
    };
    Instruction.prototype.cmpRegister = function () {
        this.cmpRegisterBoolean = true;
        this.cmpNumberBoolean = false;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister2 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister3 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp3 - temp4;
        var temp5 = temp3.toString(16).toUpperCase();
        // let l = temp5.length;
        // let valueToStore: string = '';
        // for (let i = 0; i < (16 - l); i++) {
        //   valueToStore = valueToStore + '0';
        // }
        // valueToStore += temp5;
        //temp1.value = valueToStore;
        temp1.arrow = 'fa fa-hand-o-right fa-4x';
        this.outputValue = temp5;
    };
    Instruction.prototype.jmpNumber = function () {
        this.jmpRegisterBoolean = false;
        this.jmpNumberBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16).toUpperCase();
                // let l = temp3.length;
                //  let valueToStore: string = '';
                // for (var i = 0; i < (16 - l); i++) {
                //   valueToStore = valueToStore + '0';
                // }
                // valueToStore = valueToStore + temp3;
                // console.log(valueToStore);
                // r.value = temp3;
                // r.arrow = 'fa fa-hand-o-right fa-4x';
                this.outputValue = temp3;
            }
        }
    };
    Instruction.prototype.jmpZeroNumber = function () {
        this.jmpZeroRegisterBoolean = false;
        this.jmpZeroNumberBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                var temp3 = temp1.toString(16).toUpperCase();
                this.outputValue = temp3;
            }
        }
        console.log(this.outputValue);
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.outputValue == '0') {
                if (this.selectedRegister2 == 'C1') {
                    for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                        var r_3 = _e[_d];
                        r_3.arrow = '';
                        if (r_3.name == '008410C5') {
                            r_3.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C2') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_4 = _g[_f];
                        r_4.arrow = '';
                        if (r_4.name == '008410B2') {
                            r_4.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C3') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_5 = _j[_h];
                        r_5.arrow = '';
                        if (r_5.name == '00F510A2') {
                            r_5.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                    var r_6 = _l[_k];
                    r_6.arrow = '';
                }
                console.log("true");
            }
        }
    };
    Instruction.prototype.jmpZeroRegister = function () {
        this.jmpZeroRegisterBoolean = true;
        this.jmpZeroNumberBoolean = false;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister2 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister3 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp3 - temp4;
        var temp5 = temp3.toString(16).toUpperCase();
        this.outputValue = temp5;
        console.log(this.outputValue);
        for (var _d = 0, _e = this.register; _d < _e.length; _d++) {
            var r = _e[_d];
            if (this.outputValue == '0') {
                if (this.selectedRegister1 == 'C1') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_7 = _g[_f];
                        r_7.arrow = '';
                        if (r_7.name == '008410C5') {
                            r_7.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C2') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_8 = _j[_h];
                        r_8.arrow = '';
                        if (r_8.name == '008410B2') {
                            r_8.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C3') {
                    for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                        var r_9 = _l[_k];
                        r_9.arrow = '';
                        if (r_9.name == '00F510A2') {
                            r_9.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _m = 0, _o = this.register2; _m < _o.length; _m++) {
                    var r_10 = _o[_m];
                    r_10.arrow = '';
                }
                console.log("False");
            }
        }
    };
    Instruction.prototype.jmpIfNotZeroNumber = function () {
        this.jmpIfNotZeroRegisterBoolean = false;
        this.jmpIfNotZeroNumberBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                var temp3 = temp1.toString(16).toUpperCase();
                this.outputValue = temp3;
            }
        }
        console.log(this.outputValue);
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.outputValue != '0') {
                if (this.selectedRegister2 == 'C1') {
                    for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                        var r_11 = _e[_d];
                        r_11.arrow = '';
                        if (r_11.name == '008410C5') {
                            r_11.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C2') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_12 = _g[_f];
                        r_12.arrow = '';
                        if (r_12.name == '008410B2') {
                            r_12.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C3') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_13 = _j[_h];
                        r_13.arrow = '';
                        if (r_13.name == '00F510A2') {
                            r_13.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                    var r_14 = _l[_k];
                    r_14.arrow = '';
                }
                console.log("true");
            }
        }
    };
    Instruction.prototype.jmpIfNotZeroRegister = function () {
        this.jmpIfNotZeroRegisterBoolean = true;
        this.jmpIfNotZeroNumberBoolean = false;
        var temp1 = new Register_1.Register('', '0', '');
        var temp2 = new Register_1.Register('', '0', '');
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister2 == r.name) {
                temp1 = r;
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            if (this.selectedRegister3 == r.name) {
                temp2 = r;
            }
        }
        var temp3 = parseInt(temp1.value, 16);
        var temp4 = parseInt(temp2.value, 16);
        temp3 = temp3 - temp4;
        var temp5 = temp3.toString(16).toUpperCase();
        this.outputValue = temp5;
        console.log(this.outputValue);
        for (var _d = 0, _e = this.register; _d < _e.length; _d++) {
            var r = _e[_d];
            if (this.outputValue != '0') {
                if (this.selectedRegister1 == 'C1') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_15 = _g[_f];
                        r_15.arrow = '';
                        if (r_15.name == '008410C5') {
                            r_15.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C2') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_16 = _j[_h];
                        r_16.arrow = '';
                        if (r_16.name == '008410B2') {
                            r_16.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C3') {
                    for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                        var r_17 = _l[_k];
                        r_17.arrow = '';
                        if (r_17.name == '00F510A2') {
                            r_17.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _m = 0, _o = this.register2; _m < _o.length; _m++) {
                    var r_18 = _o[_m];
                    r_18.arrow = '';
                }
                console.log("true");
            }
        }
    };
    Instruction.prototype.jmpGreaterThanNumber = function () {
        this.jmpGreaterThanNumberBoolean = true;
        this.jmpGreaterThanRegisterBoolean = false;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                var temp3 = temp1.toString(16).toUpperCase();
                this.outputValue = temp3;
            }
        }
        console.log(this.outputValue);
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            r.arrow = '';
            if (this.outputValue > '0') {
                if (this.selectedRegister2 == 'C1') {
                    for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                        var r_19 = _e[_d];
                        r_19.arrow = '';
                        if (r_19.name == '008410C5') {
                            r_19.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C2') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_20 = _g[_f];
                        r_20.arrow = '';
                        if (r_20.name == '008410B2') {
                            r_20.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C3') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_21 = _j[_h];
                        r_21.arrow = '';
                        if (r_21.name == '00F510A2') {
                            r_21.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                    var r_22 = _l[_k];
                    r_22.arrow = '';
                }
                console.log("False");
            }
        }
    };
    Instruction.prototype.jmpGreaterThanRegister = function () {
        this.jmpGreaterThanNumberBoolean = false;
        this.jmpGreaterThanRegisterBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                var temp3 = temp1.toString(16).toUpperCase();
                this.outputValue = temp3;
            }
        }
        console.log(this.outputValue);
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            r.arrow = '';
            if (this.outputValue > '0') {
                if (this.selectedRegister1 == 'C1') {
                    for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                        var r_23 = _e[_d];
                        r_23.arrow = '';
                        if (r_23.name == '008410C5') {
                            r_23.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C2') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_24 = _g[_f];
                        r_24.arrow = '';
                        if (r_24.name == '008410B2') {
                            r_24.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C3') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_25 = _j[_h];
                        r_25.arrow = '';
                        if (r_25.name == '00F510A2') {
                            r_25.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                    var r_26 = _l[_k];
                    r_26.arrow = '';
                }
                console.log("False");
            }
        }
    };
    Instruction.prototype.jmpGreaterThanequal = function () {
        this.jmpGreaterThanEqualNumberBoolean = true;
        this.jmpGreaterThanEqualRegisterBoolean = false;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                var temp3 = temp1.toString(16).toUpperCase();
                this.outputValue = temp3;
            }
        }
        console.log(this.outputValue);
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            r.arrow = '';
            if (this.outputValue > '0' || this.outputValue == '0') {
                if (this.selectedRegister2 == 'C1') {
                    for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                        var r_27 = _e[_d];
                        r_27.arrow = '';
                        if (r_27.name == '008410C5') {
                            r_27.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C2') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_28 = _g[_f];
                        r_28.arrow = '';
                        if (r_28.name == '008410B2') {
                            r_28.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C3') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_29 = _j[_h];
                        r_29.arrow = '';
                        if (r_29.name == '00F510A2') {
                            r_29.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                r.arrow = '';
                console.log("False");
            }
        }
    };
    Instruction.prototype.jmpGreaterThanequalRegister = function () {
        this.jmpGreaterThanEqualNumberBoolean = false;
        this.jmpGreaterThanEqualRegisterBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                var temp3 = temp1.toString(16).toUpperCase();
                this.outputValue = temp3;
            }
        }
        console.log(this.outputValue);
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            r.arrow = '';
            if (this.outputValue > '0' || this.outputValue == '0') {
                if (this.selectedRegister1 == 'C1') {
                    for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                        var r_30 = _e[_d];
                        r_30.arrow = '';
                        if (r_30.name == '008410C5') {
                            r_30.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C2') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_31 = _g[_f];
                        r_31.arrow = '';
                        if (r_31.name == '008410B2') {
                            r_31.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C3') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_32 = _j[_h];
                        r_32.arrow = '';
                        if (r_32.name == '00F510A2') {
                            r_32.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                    var r_33 = _l[_k];
                    r_33.arrow = '';
                }
                console.log("False");
            }
        }
    };
    Instruction.prototype.jmpLessThanNumber = function () {
        this.jmpLessThanNumberBoolean = true;
        this.jmpLessThanRegisterBoolean = false;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                var temp3 = temp1.toString(16).toUpperCase();
                this.outputValue = temp3;
            }
        }
        console.log(this.outputValue);
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            r.arrow = '';
            if (this.outputValue < '0') {
                if (this.selectedRegister2 == 'C1') {
                    for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                        var r_34 = _e[_d];
                        r_34.arrow = '';
                        if (r_34.name == '008410C5') {
                            r_34.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C2') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_35 = _g[_f];
                        r_35.arrow = '';
                        if (r_35.name == '008410B2') {
                            r_35.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C3') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_36 = _j[_h];
                        r_36.arrow = '';
                        if (r_36.name == '00F510A2') {
                            r_36.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                    var r_37 = _l[_k];
                    r_37.arrow = '';
                }
                console.log("False");
            }
        }
    };
    Instruction.prototype.jmpLessThanRegister = function () {
        this.jmpLessThanNumberBoolean = false;
        this.jmpLessThanRegisterBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                var temp3 = temp1.toString(16).toUpperCase();
                this.outputValue = temp3;
            }
        }
        console.log(this.outputValue);
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            r.arrow = '';
            if (this.outputValue < '0') {
                if (this.selectedRegister1 == 'C1') {
                    for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                        var r_38 = _e[_d];
                        r_38.arrow = '';
                        if (r_38.name == '008410C5') {
                            r_38.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C2') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_39 = _g[_f];
                        r_39.arrow = '';
                        if (r_39.name == '008410B2') {
                            r_39.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C3') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_40 = _j[_h];
                        r_40.arrow = '';
                        if (r_40.name == '00F510A2') {
                            r_40.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                    var r_41 = _l[_k];
                    r_41.arrow = '';
                }
                console.log("False");
            }
        }
    };
    Instruction.prototype.jmpLessThanEqualNumber = function () {
        this.jmpLessThanEqualNumberBoolean = true;
        this.jmpLessThanEqualRegisterBoolean = false;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                var temp3 = temp1.toString(16).toUpperCase();
                this.outputValue = temp3;
            }
        }
        console.log(this.outputValue);
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            r.arrow = '';
            if (this.outputValue < '0' || this.outputValue == '0') {
                if (this.selectedRegister2 == 'C1') {
                    for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                        var r_42 = _e[_d];
                        r_42.arrow = '';
                        if (r_42.name == '008410C5') {
                            r_42.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C2') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_43 = _g[_f];
                        r_43.arrow = '';
                        if (r_43.name == '008410B2') {
                            r_43.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister2 == 'C3') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_44 = _j[_h];
                        r_44.arrow = '';
                        if (r_44.name == '00F510A2') {
                            r_44.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                    var r_45 = _l[_k];
                    r_45.arrow = '';
                }
                console.log("False");
            }
        }
    };
    Instruction.prototype.jmpLessThanEqualRegister = function () {
        this.jmpLessThanEqualNumberBoolean = false;
        this.jmpLessThanEqualRegisterBoolean = true;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - temp2;
                var temp3 = temp1.toString(16).toUpperCase();
                this.outputValue = temp3;
            }
        }
        console.log(this.outputValue);
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
            r.arrow = '';
            if (this.outputValue < '0' || this.outputValue == '0') {
                if (this.selectedRegister1 == 'C1') {
                    for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                        var r_46 = _e[_d];
                        r_46.arrow = '';
                        if (r_46.name == '008410C5') {
                            r_46.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C2') {
                    for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                        var r_47 = _g[_f];
                        r_47.arrow = '';
                        if (r_47.name == '008410B2') {
                            r_47.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
                if (this.selectedRegister1 == 'C3') {
                    for (var _h = 0, _j = this.register2; _h < _j.length; _h++) {
                        var r_48 = _j[_h];
                        r_48.arrow = '';
                        if (r_48.name == '00F510A2') {
                            r_48.arrow = "fa fa-hand-o-right fa-4x";
                        }
                    }
                }
            }
            else {
                for (var _k = 0, _l = this.register2; _k < _l.length; _k++) {
                    var r_49 = _l[_k];
                    r_49.arrow = '';
                }
                console.log("False");
            }
        }
    };
    Instruction.prototype.callLabel = function () {
        this.callRegisterBoolean = false;
        this.callNumberBoolean = true;
        for (var _i = 0, _a = this.register2; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == 'C1') {
                for (var _b = 0, _c = this.register2; _b < _c.length; _b++) {
                    var r_50 = _c[_b];
                    if (r_50.name == '008410C5') {
                        r_50.arrow = "fa fa-hand-o-right fa-4x";
                    }
                }
            }
            if (this.selectedRegister1 == 'C2') {
                for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                    var r_51 = _e[_d];
                    if (r_51.name == '008410B2') {
                        r_51.arrow = "fa fa-hand-o-right fa-4x";
                    }
                }
            }
            if (this.selectedRegister1 == 'C3') {
                for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                    var r_52 = _g[_f];
                    if (r_52.name == '00F510A2') {
                        r_52.arrow = "fa fa-hand-o-right fa-4x";
                    }
                }
            }
        }
    };
    Instruction.prototype.retLabel = function () {
        this.callRegisterBoolean = false;
        this.callNumberBoolean = true;
        for (var _i = 0, _a = this.register2; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (r.name == "C1") {
                r.arrow = "fa fa-hand-o-right fa-4x";
            }
            if (this.selectedRegister1 == 'C1') {
                for (var _b = 0, _c = this.register2; _b < _c.length; _b++) {
                    var r_53 = _c[_b];
                    if (r_53.name == '008410C5') {
                        r_53.arrow = "fa fa-hand-o-right fa-4x";
                    }
                }
            }
            if (this.selectedRegister1 == 'C2') {
                for (var _d = 0, _e = this.register2; _d < _e.length; _d++) {
                    var r_54 = _e[_d];
                    if (r_54.name == '008410B2') {
                        r_54.arrow = "fa fa-hand-o-right fa-4x";
                    }
                }
            }
            if (this.selectedRegister1 == 'C3') {
                for (var _f = 0, _g = this.register2; _f < _g.length; _f++) {
                    var r_55 = _g[_f];
                    if (r_55.name == '00F510A2') {
                        r_55.arrow = "fa fa-hand-o-right fa-4x";
                    }
                }
            }
        }
    };
    Instruction.prototype.showAddSection = function () {
        this.resetParameters();
        this.showAdd = true;
    };
    Instruction.prototype.showSubSection = function () {
        this.resetParameters();
        this.showSub = true;
    };
    Instruction.prototype.showMulSection = function () {
        this.resetParameters();
        this.showMul = true;
    };
    Instruction.prototype.showDivSection = function () {
        this.resetParameters();
        this.showDiv = true;
    };
    Instruction.prototype.showMovSection = function () {
        this.resetParameters();
        this.showMov = true;
    };
    Instruction.prototype.showLeaSection = function () {
        this.resetParameters();
        this.showLea = true;
    };
    Instruction.prototype.showIncSection = function () {
        this.resetParameters();
        this.showInc = true;
    };
    Instruction.prototype.showDecSection = function () {
        this.resetParameters();
        this.showDec = true;
    };
    Instruction.prototype.showPushSection = function () {
        this.resetParameters();
        this.showPush = true;
    };
    Instruction.prototype.showPopSection = function () {
        this.resetParameters();
        this.showPop = true;
    };
    Instruction.prototype.showAndSection = function () {
        this.resetParameters();
        this.showAnd = true;
    };
    Instruction.prototype.showORSection = function () {
        this.resetParameters();
        this.showOR = true;
    };
    Instruction.prototype.showXORSection = function () {
        this.resetParameters();
        this.showXOR = true;
    };
    Instruction.prototype.showNOTSection = function () {
        this.resetParameters();
        this.showNOT = true;
    };
    Instruction.prototype.showJmpSection = function () {
        this.resetParameters();
        this.showJmp = true;
    };
    Instruction.prototype.showCmpSection = function () {
        this.resetParameters();
        this.showCmp = true;
    };
    Instruction.prototype.showJzSection = function () {
        this.resetParameters();
        this.showJz = true;
    };
    Instruction.prototype.showJnzSection = function () {
        this.resetParameters();
        this.showJnz = true;
    };
    Instruction.prototype.showCallSection = function () {
        this.resetParameters();
        this.showCall = true;
    };
    Instruction.prototype.showRetSection = function () {
        this.resetParameters();
        this.showRet = true;
    };
    Instruction.prototype.showJGSection = function () {
        this.resetParameters();
        this.showJG = true;
    };
    Instruction.prototype.showJGESection = function () {
        this.resetParameters();
        this.showJGE = true;
    };
    Instruction.prototype.showJLSection = function () {
        this.resetParameters();
        this.showJL = true;
    };
    Instruction.prototype.showJLESection = function () {
        this.resetParameters();
        this.showJLE = true;
    };
    Instruction = __decorate([
        core_1.Component({
            selector: 'my-instruction',
            templateUrl: './instruction.html',
            styleUrls: ['./app.component.scss'],
        })
    ], Instruction);
    return Instruction;
}());
exports.Instruction = Instruction;
//# sourceMappingURL=instruction.js.map