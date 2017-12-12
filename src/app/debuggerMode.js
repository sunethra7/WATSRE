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
var DebuggerMode = (function () {
    function DebuggerMode() {
        this.remainderToDisplay = '';
        this.arrow = '';
        this.outputValue = '0';
        this.valueToAdd2 = '';
        this.textAreaValue = '';
        this.textAreaValue1 = '';
        this.selectedAssemblyCode = '';
        this.AssemblyCode = ['ADD Program', 'SUB Program'];
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
        this.addNumberBoolean = false;
        this.addRegisterBoolean = false;
        this.subNumberBoolean = false;
        this.subRegisterBoolean = false;
        this.mulNumberBoolean = false;
        this.mulRegisterBoolean = false;
        this.mulRegisterTwoBoolean = false;
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
            new Register_1.Register('0000000000FEF1D8', '0000000000000004', '')
        ];
        this.memoryList = ['0000000000FEF150', '0000.000000FEF158', '0000000000FEF1A0', '0000000000FEF1A8', '0000000000FEF1B0',
            '0000000000FEF1C0', '0000000000FEF1C8', '0000000000FEF1D0', '0000000000FEF1D8'];
    }
    DebuggerMode.prototype.checkIfRegister = function (r1) {
        if (r1.name == 'RAX' || r1.name == 'RBX' || r1.name == 'RCX' || r1.name == 'RDX' || r1.name == 'RBP' || r1.name == 'RSP' || r1.name == 'RDI' ||
            r1.name == 'RSI' || r1.name == 'RIP' || r1.name == 'R8' || r1.name == 'R9' || r1.name == 'R10' || r1.name == 'R11' ||
            r1.name == 'R12' || r1.name == 'R13' || r1.name == 'R14' || r1.name == 'R15') {
            return true;
        }
        else {
            return false;
        }
    };
    DebuggerMode.prototype.checkIfMemory = function (r1) {
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
    DebuggerMode.prototype.isHex = function (h) {
        var a = parseInt(h, 16);
        return (a.toString(16) === h.toLowerCase());
    };
    DebuggerMode.prototype.showAssemblyCode = function () {
        if (this.selectedAssemblyCode == 'ADD Program') {
            this.textAreaValue = 'ADD RAX,RBX,\nADD C,D';
        }
        else if (this.selectedAssemblyCode == 'SUB Program') {
            this.textAreaValue = 'SUB RBX,RAX';
        }
    };
    DebuggerMode.prototype.executeInstructions = function () {
        // if(this.validateInstruction()){
        // }
        console.log(this.textAreaValue);
        var lines = this.textAreaValue.split('\n');
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].search('ADD') != -1) {
                var inst = void 0;
                inst = lines[i].split(' ')[1];
                var instArray = inst.split(',');
                console.log(instArray);
                var tempRegister1 = { name: instArray[0], value: '0', arrow: '' };
                if (this.checkIfRegister(tempRegister1) || this.checkIfMemory(tempRegister1)) {
                    this.selectedRegister1 = instArray[0];
                    console.log(this.selectedRegister1);
                    var tempRegister2 = { name: instArray[1], value: '0', arrow: '' };
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
                        }
                        else {
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
                var inst = void 0;
                inst = lines[i].split(' ')[1];
                var instArray = inst.split(',');
                console.log(instArray);
                var tempRegister1 = { name: instArray[0], value: '0', arrow: '' };
                if (this.checkIfRegister(tempRegister1) || this.checkIfMemory(tempRegister1)) {
                    this.selectedRegister1 = instArray[0];
                    console.log(this.selectedRegister1);
                    var tempRegister2 = { name: instArray[1], value: '0', arrow: '' };
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
                        }
                        else {
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
                var inst = void 0;
                inst = lines[i].split(' ')[1];
                var instArray = inst.split(',');
                console.log(instArray);
                var tempRegister1 = { name: instArray[0], value: '0', arrow: '' };
                if (this.checkIfRegister(tempRegister1) || this.checkIfMemory(tempRegister1)) {
                    this.selectedRegister1 = instArray[0];
                    console.log(this.selectedRegister1);
                    var tempRegister2 = { name: instArray[1], value: '0', arrow: '' };
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
                        }
                        else {
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
                var inst = void 0;
                inst = lines[i].split(' ')[1];
                var instArray = inst.split(',');
                console.log(instArray);
                var tempRegister1 = { name: instArray[0], value: '0', arrow: '' };
                if (this.checkIfRegister(tempRegister1) || this.checkIfMemory(tempRegister1)) {
                    this.selectedRegister1 = instArray[0];
                    console.log(this.selectedRegister1);
                    var tempRegister2 = { name: instArray[1], value: '0', arrow: '' };
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
                        }
                        else {
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
                var inst = void 0;
                inst = lines[i].split(' ')[1];
                var instArray = inst.split(' ');
                console.log(instArray);
                var tempRegister1 = { name: instArray[0], value: '0', arrow: '' };
                if (this.checkIfRegister(tempRegister1) || this.checkIfMemory(tempRegister1)) {
                    this.selectedRegister1 = instArray[0];
                    console.log(this.selectedRegister1);
                    var tempRegister2 = { name: instArray[1], value: '0', arrow: '' };
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
                        }
                        else {
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
    };
    DebuggerMode.prototype.ngOnInit = function () {
        var num1 = '100';
        var num2 = '';
        var num3 = parseInt(num1, 16);
        console.log(num3);
        var num4 = '6000';
        console.log((parseInt(num4, 16) / parseInt(num1, 16)).toString(16));
        console.log('************************************');
        //this.pushRegister();
    };
    DebuggerMode.prototype.resetParameters = function () {
        this.showAdd = false;
        this.showSub = false;
        this.showMul = false;
        this.showDiv = false;
        this.showMov = false;
        this.showInc = false;
        this.showDec = false;
        this.showPush = false;
        this.showPop = false;
        this.showAnd = false;
        this.showOR = false;
        this.showXOR = false;
        this.showNOT = false;
    };
    DebuggerMode.prototype.addNumber = function () {
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
                var temp3 = temp1.toString(16);
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
    DebuggerMode.prototype.addRegister = function () {
        this.addRegisterBoolean = true;
        this.addNumberBoolean = false;
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
        temp3 = temp3 + temp4;
        var temp5 = temp3.toString(16);
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
    DebuggerMode.prototype.subNumber = function () {
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
                var temp3 = temp1.toString(16);
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
    DebuggerMode.prototype.mulNumber = function () {
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
                var temp3 = temp1.toString(16);
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
    DebuggerMode.prototype.subRegister = function () {
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
        var temp5 = temp3.toString(16);
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
    DebuggerMode.prototype.mulRegister = function () {
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
        var temp5 = temp3.toString(16);
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
    DebuggerMode.prototype.mulRegister2 = function () {
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
        temp3 = temp3 * temp4 * temp6;
        var temp5 = temp3.toString(16);
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
    DebuggerMode.prototype.divNumber = function () {
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
                quotient = Math.floor(temp1 / temp2);
                remainder = temp1 % temp2;
                console.log(remainderString);
                temp1 = quotient;
                //append zeros so that length becomes 16
                console.log(temp1);
                var temp3 = temp1.toString(16);
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
                // r.arrow='-->';
            }
        }
        for (var _b = 0, _c = this.register; _b < _c.length; _b++) {
            var r = _c[_b];
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
    };
    DebuggerMode.prototype.divRegister = function () {
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
        var temp5 = temp3.toString(16);
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
                remainderString = remainderString + remainder.toString(16);
                r.value = remainderString;
                r.arrow = 'fa fa-hand-o-right fa-4x';
                this.remainderToDisplay = r.value;
            }
        }
        //this.outputValue = temp1.value;
    };
    DebuggerMode.prototype.movNumber = function () {
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp2;
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16);
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
    DebuggerMode.prototype.movRegister = function () {
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
        var temp5 = temp3.toString(16);
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
    DebuggerMode.prototype.incNumber = function () {
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                // let temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 + 1;
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16);
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
    DebuggerMode.prototype.decNumber = function () {
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                // let temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 - 1;
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16);
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
    DebuggerMode.prototype.pushRegister = function () {
        var tempRSPValue;
        var temp;
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var sRegister = _a[_i];
            sRegister.arrow = '';
            if (this.selectedRegister1 == sRegister.name) {
                temp = sRegister.value;
            }
        }
        for (var r = 0; r < this.register.length; r++) {
            if (this.register[r].name == 'RSP') {
                tempRSPValue = this.register[r].value;
                console.log(tempRSPValue);
                //console.log(this.memoryList.length);
            }
        }
        for (var r = 0; r < this.register.length; r++) {
            if (this.register[r].name == tempRSPValue) {
                for (var i = this.register.length - 1; i > r; i--) {
                    this.register[i].value = this.register[i - 1].value;
                }
                this.register[r].value = temp;
                this.register[r].arrow = '==>';
            }
        }
    };
    DebuggerMode.prototype.popRegister = function () {
        var tempRSPRegister = new Register_1.Register('', '0', '');
        var tempRSPValue;
        var temp;
        for (var r = 0; r < this.register.length; r++) {
            this.register[r].arrow = '';
            if (this.register[r].name == 'RSP') {
                tempRSPValue = this.register[r].value;
                console.log(tempRSPValue);
                tempRSPRegister = this.register[r];
                tempRSPRegister.arrow = '==>';
                //console.log(this.memoryList.length);
            }
        }
        for (var r = 0; r < this.register.length; r++) {
            if (this.register[r].name == tempRSPValue) {
                tempRSPRegister.value = this.register[r + 1].name;
                for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
                    var s = _a[_i];
                    if (this.selectedRegister1 == s.name) {
                        s.value = this.register[r].value;
                        s.arrow = '==>';
                    }
                }
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
    DebuggerMode.prototype.andNumber = function () {
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 & temp2;
                console.log(temp1);
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16);
                var l = temp3.length;
                var valueToStore = '';
                for (var i = 0; i < (16 - l); i++) {
                    valueToStore = valueToStore + '0';
                }
                valueToStore = valueToStore + temp3;
                console.log(valueToStore);
                r.value = valueToStore;
                r.arrow = 'fa fa-hand-o-right fa-4x';
            }
        }
    };
    DebuggerMode.prototype.andRegister = function () {
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
        var temp5 = temp3.toString(16);
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
    DebuggerMode.prototype.orNumber = function () {
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 | temp2;
                console.log(temp1);
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16);
                var l = temp3.length;
                var valueToStore = '';
                for (var i = 0; i < (16 - l); i++) {
                    valueToStore = valueToStore + '0';
                }
                valueToStore = valueToStore + temp3;
                console.log(valueToStore);
                r.value = valueToStore;
                r.arrow = 'fa fa-hand-o-right fa-4x';
            }
        }
    };
    DebuggerMode.prototype.orRegister = function () {
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
        var temp5 = temp3.toString(16);
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
    DebuggerMode.prototype.xorNumber = function () {
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                var temp2 = parseInt(this.valueToAdd, 16);
                temp1 = temp1 ^ temp2;
                console.log(temp1);
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16);
                var l = temp3.length;
                var valueToStore = '';
                for (var i = 0; i < (16 - l); i++) {
                    valueToStore = valueToStore + '0';
                }
                valueToStore = valueToStore + temp3;
                console.log(valueToStore);
                r.value = valueToStore;
                r.arrow = 'fa fa-hand-o-right fa-4x';
            }
        }
    };
    DebuggerMode.prototype.xorRegister = function () {
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
        var temp5 = temp3.toString(16);
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
    DebuggerMode.prototype.notNumber = function () {
        for (var _i = 0, _a = this.register; _i < _a.length; _i++) {
            var r = _a[_i];
            r.arrow = '';
            if (this.selectedRegister1 == r.name) {
                var temp1 = parseInt(r.value, 16);
                //let temp2 = parseInt(this.valueToAdd, 16);
                temp1 = ~temp1;
                console.log(temp1);
                //append zeros so that length becomes 16
                var temp3 = temp1.toString(16);
                var l = temp3.length;
                var valueToStore = '';
                for (var i = 0; i < (16 - l); i++) {
                    valueToStore = valueToStore + '0';
                }
                valueToStore = valueToStore + temp3;
                console.log(valueToStore);
                r.value = valueToStore;
                r.arrow = 'fa fa-hand-o-right fa-4x';
            }
        }
    };
    DebuggerMode.prototype.showAddSection = function () {
        this.resetParameters();
        this.showAdd = true;
    };
    DebuggerMode.prototype.showSubSection = function () {
        this.resetParameters();
        this.showSub = true;
    };
    DebuggerMode.prototype.showMulSection = function () {
        this.resetParameters();
        this.showMul = true;
    };
    DebuggerMode.prototype.showDivSection = function () {
        this.resetParameters();
        this.showDiv = true;
    };
    DebuggerMode.prototype.showMovSection = function () {
        this.resetParameters();
        this.showMov = true;
    };
    DebuggerMode.prototype.showIncSection = function () {
        this.resetParameters();
        this.showInc = true;
    };
    DebuggerMode.prototype.showDecSection = function () {
        this.resetParameters();
        this.showDec = true;
    };
    DebuggerMode.prototype.showPushSection = function () {
        this.resetParameters();
        this.showPush = true;
    };
    DebuggerMode.prototype.showPopSection = function () {
        this.resetParameters();
        this.showPop = true;
    };
    DebuggerMode.prototype.showAndSection = function () {
        this.resetParameters();
        this.showAnd = true;
    };
    DebuggerMode.prototype.showORSection = function () {
        this.resetParameters();
        this.showOR = true;
    };
    DebuggerMode.prototype.showXORSection = function () {
        this.resetParameters();
        this.showXOR = true;
    };
    DebuggerMode.prototype.showNOTSection = function () {
        this.resetParameters();
        this.showNOT = true;
    };
    DebuggerMode = __decorate([
        core_1.Component({
            selector: 'my-debugger',
            templateUrl: './debuggerMode.html',
            styleUrls: ['./app.component.scss'],
        })
    ], DebuggerMode);
    return DebuggerMode;
}());
exports.DebuggerMode = DebuggerMode;
//# sourceMappingURL=debuggerMode.js.map