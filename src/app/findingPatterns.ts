import { Component, AfterViewInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-patterns',
  templateUrl: './findingPatterns.html',
  styleUrls: ['./app.component.scss'],
})
export class FindingPatterns {

  options: Object;
  constructor() {}
  private textAreaValue1: string = '';
  private patternsEnable = false;
  private outputValue : string = '';
  private outer : HTMLAnchorElement;
  private textAreaValue2: string = '';
  private finalLines = new Array();
  private outputLines = new Array;
  private outputLineLength =  0;
  public countSequences = 0 ;
  public disableFlag = false;
  private print2: any = "";
  private print3: any = "";
  private print4: any = "";
  private seqID: any = "";
  public seqCount:any;
  public seqID_1 = 0;
  public seqID_2 = 0;
  public seqID_3 = 0;
  public seqID_4 = 0;
  public seqID_5 = 0;
  public seqID_6 = 0;
  public seqID_7 = 0;
  public seqID_8= 0;
  public seqID_9 = 0;
  public seqID_10 = 0;
  public seqID_11 = 0;
  public seqID_12 = 0;
  public seqID_13 = 0;
  public seqID_14 = 0;
  public seqID_15 = 0;
  public seqID_16 = 0;
  public seqID_17 = 0;
  public seqID_18 = 0;
  public seqID_19 = 0;
  public seqID_20 = 0;
  public seqID_21 = 0;
  public seqID_22 = 0;
  public seqID_23 = 0;
  public seqID_24 = 0;
  public seqID_25 = 0;
  public seqID_26 = 0;
  public seqID_27 = 0;
  public seqID_28 = 0;
  public seqID_29 = 0;
  public seqID_30 = 0;
  public seqID_31 = 0;
  public seqID_32 = 0;
  public seqID_33 = 0;
  public seqID_34 = 0;
  public seqID_35 = 0;
  public seqID_36 = 0;
  public seqID_37 = 0;
  public seqID_38 = 0;
  public seqID_39 = 0;
  public seqID_40 = 0;
  public seqID_41 = 0;
  public seqID_42 = 0;
  public seqID_43 = 0;
  public seqID_44 = 0;
  public seqID_45 = 0;
  
  private textSample : number;

  ngAfterViewInit() {
    
  }

  //*********************File uploading *********************** */

  changeListener($event: any): void {
    this.disableFlag = true;
    this.readThis($event.target);
  }

  runChart(seq1:any) {
    this.options = {
      chart: {
         type: 'column'
        },
      title: { text: 'Patterns' },
      xAxis: {
        categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        title: {
          text: 'Sequence ID'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Count',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      series: [{
        name: 'Count',
        data: seq1
      }]
    }
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var self = this;
    myReader.onloadend = function (e) {

      // you can perform an action with readed data here
      self.textAreaValue1 = myReader.result;
    }
    // waits(5000);

    // console.log(textFileData);
    console.dir(myReader);

    myReader.readAsText(file);
    console.log(file);
  }

  //*************************************************************** */

  //  Step 1: To count the number of instructions
  //  Imports: Instructions string Array
  //  updates the output value of results area


  countlines(lines: any[]) {
    var counter = 0;

    for (var i = 0; i < lines.length; i++) {
      if (lines[i] === "") {
        lines.splice(i, 1);
      } else {
        counter = counter + 1;
      }
    }
    console.log(counter);
    return counter.toString();


  }

  getFirstLineCounts() {
    var lines = new Array;
    lines = this.textAreaValue1.split('\n');
    console.log('lines 2 ' + this.countlines(lines));
    return this.countlines(lines);
  }

  updateResults() {
    //Populate ouputlines
    //write output value

    this.populateOutputLines();
    this.writeOutput();

  }

  populateOutputLines() {

    if (this.outputLineLength === 0) {
      this.outputLines[0] = 'Original Count: ' + this.getFirstLineCounts();
      this.outputLineLength = 1;
    }
    /* else if(this.outputLineLength === 1){
       this.outputLines[0] = 'Original Count: ' + this.getFirstLineCounts();
       this.outputLines[1] = 'Reduced Count: ' + this.countlines(this.finalLines);
       
       this.outputLineLength = 0;
       
       }*/

  }

  writeOutput() {
    var outputLength = this.outputLines.length;
    var outputString = '';
 
    if (outputLength === 1){
      this.outputValue = "\n"+"---------Summary----------"+"\n"+
      'Original Count: ' +this.getFirstLineCounts() + 
      '\n'+ 'Reduced instruction Count:' +this.finalLines.length+ '\n'+
      'Number of sequences identified: '+ this.countSequences+'\n'+ '\n'+
      

         +'\n'+"----------Sequence ID count-----------"+"\n"+
      'Seq_ID_1  count -  '+this.seqID_1+'\n'+
      'Seq_ID_2  count -  '+this.seqID_2+'\n'+
      'Seq_ID_3  count -  '+this.seqID_3+'\n'+
      'Seq_ID_4  count -  '+this.seqID_4+'\n'+
      'Seq_ID_5  count -  '+this.seqID_5+'\n'+
      'Seq_ID_6  count -  '+this.seqID_6+'\n'+
      'Seq_ID_7  count -  '+this.seqID_7+'\n'+
      'Seq_ID_8  count -  '+this.seqID_8+'\n'+
      'Seq_ID_9  count -  '+this.seqID_9+'\n'+
      'Seq_ID_10 count -  '+this.seqID_10+'\n'+
      'Seq_ID_11 count -  '+this.seqID_11+'\n'+
      'Seq_ID_12 count -  '+this.seqID_12+'\n'+
      'Seq_ID_13 count -  '+this.seqID_13+'\n'+
      'Seq_ID_14 count -  '+this.seqID_14+'\n'+
      'Seq_ID_15 count -  '+this.seqID_15+'\n'+
      'Seq_ID_16 count -  '+this.seqID_16+'\n'+   
      'Seq_ID_17 count -  '+this.seqID_17+'\n'+
      'Seq_ID_18 count -  '+this.seqID_18+'\n'+
      'Seq_ID_19 count -  '+this.seqID_19+'\n'+
      'Seq_ID_20 count -  '+this.seqID_20+'\n'+
      'Seq_ID_21 count -  '+this.seqID_21+'\n'+
      'Seq_ID_22 count -  '+this.seqID_22+'\n'+
      'Seq_ID_23 count -  '+this.seqID_23+'\n'+
      'Seq_ID_24 count -  '+this.seqID_24+'\n'+
      'Seq_ID_25 count -  '+this.seqID_25+'\n'+
      'Seq_ID_26 count -  '+this.seqID_26+'\n'+
      'Seq_ID_27 count -  '+this.seqID_27+'\n'+
      'Seq_ID_28 count -  '+this.seqID_28+'\n'+
      'Seq_ID_29 count -  '+this.seqID_29+'\n'+
      'Seq_ID_30 count -  '+this.seqID_30+'\n'+
      'Seq_ID_31 count -  '+this.seqID_31+'\n'+
      'Seq_ID_32 count -  '+this.seqID_32+'\n'+
      'Seq_ID_33 count -  '+this.seqID_33+'\n'+
      'Seq_ID_34 count -  '+this.seqID_34+'\n'+
      'Seq_ID_35 count -  '+this.seqID_35+'\n'+
      'Seq_ID_36 count -  '+this.seqID_36+'\n'+
      'Seq_ID_37 count -  '+this.seqID_37+'\n'+
      'Seq_ID_38 count -  '+this.seqID_38+'\n'+
      'Seq_ID_39 count -  '+this.seqID_39+'\n'+
      'Seq_ID_40 count -  '+this.seqID_40+'\n'+
      'Seq_ID_41 count -  '+this.seqID_41+'\n'+
      'Seq_ID_42 count -  '+this.seqID_42+'\n'+
      'Seq_ID_43 count -  '+this.seqID_43+'\n'+
      'Seq_ID_44 count -  '+this.seqID_44+'\n'+
      'Seq_ID_45 count -  '+this.seqID_45+'\n'+


      '**********************************Table format****************************' + "\n"+'\n'+
      'Count'+ '\t'+ 'Seq_ID' + '\t'+'line numbers'+'\t'+'instruction'+'\t'+'\t'+'\t'+'Meaning'+'\n'+
      '___________________________________________________________________________'+'\n'+
      this.print4+"\n"+

      '********************************Sequences List in Detail*******************'+ '\n'+ 
      this.print2+'\n'+"\n"+'___________________________________________________________________________'+"\n";

        this.seqCount = [this.seqID_1,this.seqID_2,
                        this.seqID_3,this.seqID_4,
                        this.seqID_5,this.seqID_6,
                        this.seqID_7,this.seqID_8,
                        this.seqID_9,this.seqID_10,
                        this.seqID_11,this.seqID_12,
                        this.seqID_13,this.seqID_14,
                        this.seqID_15,this.seqID_16,
                        this.seqID_17,this.seqID_18,
                        this.seqID_19,this.seqID_20,
                        this.seqID_21,this.seqID_22,
                        this.seqID_23,this.seqID_24,
                        this.seqID_25,this.seqID_26,
                        this.seqID_27,this.seqID_28,
                        this.seqID_29,this.seqID_30,
                        this.seqID_31,this.seqID_32,
                        this.seqID_33,this.seqID_34,
                        this.seqID_35,this.seqID_36,
                        this.seqID_37,this.seqID_38,
                        this.seqID_39,this.seqID_40,
                        this.seqID_41,this.seqID_42,
                        this.seqID_43,this.seqID_44,
                        this.seqID_45];

      this.print4;
      this.outer = this.print3;
      console.log(this.outer);
      console.log("___________________________________");
      console.log("seq1", this.print2);
      this.patternsEnable = true;
      this.runChart(this.seqCount);
            
    }
    else {
      for (var i = 0; i < outputLength; i++) {

        outputString = outputString + '\n' + this.outputLines[i] + '\n';
      }

      this.outputValue = outputString;
    }

  }

  updateResults1() {

    this.countlines(this.finalLines);

    for (var i = 0; i < this.finalLines.length; i++) {

      if (this.finalLines[i].includes('push')) {

        var pushString = this.getPatternForPush(i);


      }



    }

  }

  outputAreaPopulate() {
    var lines = this.textAreaValue1.split('\n');
    //console.log(lines);
    this.print2 = '';
    this.print4 = '';
    this.seqID_1 = 0;
    this.seqID_2 = 0;
    this.seqID_3 = 0;
    this.seqID_4 = 0;
    this.seqID_5 = 0;
    this.seqID_6 = 0;
    this.seqID_7 = 0;
    this.seqID_8 = 0;
    this.seqID_9 = 0;
    this.seqID_10 = 0;
    this.seqID_11 = 0;
    this.seqID_12 = 0;
    this.seqID_13 = 0;
    this.seqID_14 = 0;
    this.seqID_15 = 0;
    this.seqID_16 = 0;
    this.seqID_17 = 0;
    this.seqID_18 = 0;
    this.seqID_19 = 0;
    this.seqID_20 = 0;
    this.seqID_21 = 0;
    this.seqID_22 = 0;
    this.seqID_23 = 0;
    this.seqID_24 = 0;
    this.seqID_25 = 0;
    this.seqID_26 = 0;
    this.seqID_27 = 0;
    this.seqID_28 = 0;
    this.seqID_29 = 0;
    this.seqID_30 = 0;
    this.seqID_31 = 0;
    this.seqID_32 = 0;
    this.seqID_33 = 0;
    this.seqID_34 = 0;
    this.seqID_35 = 0;
    this.seqID_36 = 0;
    this.seqID_37 = 0;
    this.seqID_38 = 0;
    this.seqID_39 = 0;
    this.seqID_40 = 0;
    this.seqID_41 = 0;
    this.seqID_42 = 0;
    this.seqID_43 = 0;
    this.seqID_44 = 0;
    this.seqID_45 = 0;
    
    var newLines = this.unwantedInstructionsRemoval1(lines);

    this.finalLines = this.unwantedInstructionsRemoval2(newLines);  

    this.countSequences = 0;
    for (var i = 0; i<(this.finalLines.length-1); i++)
    {
      
      console.log('Final Lines' +this.finalLines.length);
      // Push Logic Starts here*******************************************************



      if(this.finalLines[i].instructions.trim().startsWith("push ebp"))
      {
       // console.log(this.finalLines[i].instructions);
        if(this.finalLines[i+1].instructions.trim().startsWith("mov ebp,esp"))
        {          
          if(this.finalLines[i+2].instructions.trim().startsWith("sub esp"))
          {
            console.log("Variables are declared");
            this.countSequences++;
            this.seqID_5++;
            let printSeq = "Open brace { - Function Start variables declared"
            let printSeq2 = "push ebp' saves the value of ebp in the stack;" +"\n"+
            "'mov ebp,esp' points to the top of the stack"+"\n"

            this.print2 += "\n"+'___________________________________________________________________________'+"\n"+  
            'Sequence ID: 5'+ "\n"+ "Count: "+ this.countSequences+ '\n' +  
            "In the lines: " +(i+1)+ ", " +(i+2)+ ", "+(i+3)+ "\n"+ printSeq+"\n"+printSeq2+"\n"+
            this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
            this.print4 += this.countSequences+'\t'+"5"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + 
                          this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+
                          printSeq+'\n'+
            '______________________________________________________________________________________________________________________'+'\n';
          }

          else
          {
            console.log("{");
            this.countSequences++;
            this.seqID_1++;
            //let printSeq = "{"
            let printSeq = "Open brace { - Function Start "
                           
            let printSeq2 = "The value of ebp is saved (push ebp) and is pointed to the top of the stack (mov ebp, esp)"
            this.seqID = this.countSequences;
            this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
            'Sequence ID: 1'+"\n"+ "Count: "+ this.countSequences + '\n'+ 
            "In the lines: "+ (i+1)+", " +(i+2)+ "\n" +this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+
            printSeq+"\n"+ printSeq2+"\n";

            this.print4 += this.countSequences+'\t'+"1"+'\t'+(i+1)+"," +(i+2)+"\t" +
                          this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq+'\n'+
            '______________________________________________________________________________________________________________________'+'\n';
          }
        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("call"))
        {
          
            console.log("Prints to output");
            this.countSequences++;
            this.seqID_3++;
            let printSeq = "Print to the output"
            let printSeq2 = "When push instruction with file name.address1 followed by call with filename.address2, some text or numeric is printed to the output; "+'\n'+
            "This text can be seen in the 4th coloumn of the x32debugger ; "
            this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
            'Sequence ID: 3'+"\n"+ "Count: "+ this.countSequences + '\n'+
             '\n'+"In the lines: "+ (i+1)+", " +(i+2)+", "+"\n" +
             this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+printSeq+"\n"+printSeq2+'\n';
           
             this.print4 += this.countSequences+'\t'+"3"+'\t'+(i+1)+"," +(i+2)+"\t" +this.finalLines[i].instructions+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq+'\n'+
             '______________________________________________________________________________________________________________________'+'\n';

        }      

      }
 // Push Logic Ends here*******************************************************

 
     else if(this.finalLines[i].instructions.trim().startsWith("pop"))
      {
        if(this.finalLines[i+1].instructions.trim().startsWith("ret"))
        {
          if (this.finalLines[i-1].instructions.trim().startsWith("mov esp,ebp"))
          {
            this.countSequences++;
            this.seqID_4++;
            let printSeq3 = "Close brace } - Variables cleared"
            let printSeq2 = "mov ebp,exp removes the space of local variables, by reverting esp to its old value."+"\n"+
           "pop ebp restores ebp to its previous value which is on top of the stack and 'ret' returns the to the calling function; Usually in C," + "\n"
           +" it means the close of the function (main function or normal function)"
            this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
            'Sequence ID: 4'+"\n"+ "Count: "+ this.countSequences+ '\n' +
             "\n"+ "In the lines: " +(i-1)+ ", " +(i+1)+ "\n"+ (i+2)+"\n"+
             this.finalLines[i-1].instructions+'\n'+this.finalLines[i].instructions+"\n"+this.finalLines[i+1].instructions+'\n'+printSeq3+'\n'+printSeq2+'\n';
  
             this.print4 += this.countSequences+'\t'+"4"+'\t'+(i-1)+"," +(i)+ ','+ (i+1)+"\t" + 
             this.finalLines[i-1].instructions+'\n'+'\t'+'\t'+'\t'+
             this.finalLines[i].instructions+'\t'+'\t'+'\t'+
             this.finalLines[i].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+
             printSeq3+'\n'+
             '______________________________________________________________________________________________________________________'+'\n';
          }
          else{
          this.countSequences++;
          this.seqID_2++;
          let printSeq3 = "Close brace } - Function end"
          let printSeq2 = "pop ebp' restores ebp to its previous value which is on top of the stack and 'ret' returns the to the calling function; " + '\n'+
          "Usually in C, it means the close of the function (main function or normal function)"
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 2'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           "\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ 
           this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+printSeq3+'\n'+printSeq2+'\n';

           this.print4 += this.countSequences+'\t'+"2"+'\t'+(i+1)+"," +(i+2)+"\t" +this.finalLines[i].instructions+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n';
          }
        }
        }
     
// Pop logic ends here************************

// cmp operations***************************
      else if(this.finalLines[i].instructions.trim().startsWith("cmp"))
      {
        if(this.finalLines[i+1].instructions.trim().startsWith("je"))
        {
          this.countSequences++;
          this.seqID_34++;
          let printSeq3 = "Compare and jump if equal"
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 34'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ 
           this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n';

           this.print4 += this.countSequences+'\t'+"34"+'\t'+(i+1)+"," +(i+2)+"\t" +
                          this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n';

        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("jne"))
        {
          this.countSequences++;
          this.seqID_35++;
          let printSeq3 = "compare and jump if not equal"
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 35'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ 
           this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n';

           this.print4 += this.countSequences+'\t'+"35"+'\t'+(i+1)+"," +(i+2)+"\t" +
                          this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n';
        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("jz"))
        {
          this.countSequences++;
          this.seqID_36++;
          let printSeq3 = "Compare and jump if equal to zero"
          this.print2 +='___________________________________________________________________________'+"\n"+
          'Sequence ID: 36'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ 
           this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n';

           this.print4 += this.countSequences+'\t'+"36"+'\t'+(i+1)+"," +(i+2)+"\t" +
                          this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n';
        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("jnz"))
        {
          this.countSequences++;
          this.seqID_37++;
          let printSeq3 = "Compare and jump if not zero"
          this.print2 += "___________________________________"+"\n"+
          'Sequence ID: 37'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ 
           this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n';

           this.print4 += this.countSequences+'\t'+"37"+'\t'+(i+1)+"," +(i+2)+"\t" +
                          this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n';
        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("jl "))
        {
          this.countSequences++;
          this.seqID_38++;
          let printSeq3 = "Compare and jump if less than "
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 38'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ 
           this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n';

           this.print4 += this.countSequences+'\t'+"38"+'\t'+(i+1)+"," +(i+2)+"\t" +
                          this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n';
        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("jle"))
        {
          this.countSequences++;
          this.seqID_39++;
          let printSeq3 = "Compare and jump if less than or equal"
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 39'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ 
           this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n';

           this.print4 += this.countSequences+'\t'+"39"+'\t'+(i+1)+"," +(i+2)+"\t" +
                          this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n';
        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("jg "))
        {
          this.countSequences++;
          this.seqID_40++;
          let printSeq3 = "Compare and jump if greater than"
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 40'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ 
           this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n';

           this.print4 += this.countSequences+'\t'+"40"+'\t'+(i+1)+"," +(i+2)+"\t" +
                          this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n';
        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("jge"))
        {
          this.countSequences++;
          this.seqID_41++;
          let printSeq3 = "Compare and jump if greater than equal"
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 41'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ 
           this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n';

           this.print4 += this.countSequences+'\t'+"41"+'\t'+(i+1)+"," +(i+2)+"\t" +
                          this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n'; 
        }

        else if(this.finalLines[i+1].instructions.trim().startsWith("jb "))
        {
          this.countSequences++;
          this.seqID_42++;
          let printSeq3 = "Compare and jump if below "
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 42'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ 
           this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n';

           this.print4 += this.countSequences+'\t'+"42"+'\t'+(i+1)+"," +(i+2)+"\t" +
                          this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                          this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n'; 
        }
        
      }


      else if(this.finalLines[i].instructions.trim().startsWith("cdq"))
      {
        if(this.finalLines[i+1].instructions.trim().startsWith("sub"))
        {
        if(this.finalLines[i+2].instructions.trim().startsWith("sar"))
         {
            this.countSequences++;
            this.seqID_43++;
            let printSeq3 = "Division with an immediate numeric value"
            let printSeq2 = "cdq' converts double to quad word and extend the sign bit of 'eax' into 'edx'." + "\n"+
             " sar instruction is used to shift the bits of the operand destination to the right, by the number of bits specified in the count operand."
            this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
            'Sequence ID: 43'+"\n"+ "Count: "+ this.countSequences+ '\n' +
              "In the lines: " +(i+1)+ ", " +(i+2)+ "," + (i+3)+ ","+'\t'+ printSeq3+"\n"+printSeq2+"n"+
             this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
             this.print4 += this.countSequences+'\t'+"43"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+","+ 
                            this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                            this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                            this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                            printSeq3+'\n'+
             '______________________________________________________________________________________________________________________'+'\n';
         }
        }
      }

      else if(this.finalLines[i].instructions.trim().startsWith("fild"))
      {
        if(this.finalLines[i+1].instructions.trim().startsWith("fmul"))
        {
        if(this.finalLines[i+2].instructions.trim().startsWith("fstp"))
         {
            this.countSequences++;
            this.seqID_44++;
            let printSeq3 = "float multiplication with integer type variable"
            let printSeq2 = "Fild instruction converts the integer operand (signed) into extended-real and" +"\n"+
             "load it onto the floating-point stack."
            this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
            'Sequence ID: 44'+"\n"+ "Count: "+ this.countSequences+ '\n' +
             printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "," + (i+3)+ ","+'\t'+
             this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
             this.print4 += this.countSequences+'\t'+"44"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+","+ 
                            this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                            this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                            this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                            printSeq3+'\n'+
             '______________________________________________________________________________________________________________________'+'\n';
         }
        }
      }

      else if(this.finalLines[i].instructions.trim().startsWith("mov dword"))
      {
          this.countSequences++;
          this.seqID_6++;
          let printSeq3 = "Declare and assign value to integer variable"
          let printSeq2 = "The integer value assigned is saved into the stack"
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 6'+"\n"+ "Count: "+ this.countSequences+ '\n' +
           "\n"+ "In the lines: " +(i+1)+ "\n"+ this.finalLines[i].instructions+'\n'+printSeq3+'\n'+printSeq2;

           this.print4 += this.countSequences+'\t'+"6"+'\t'+(i+1)+"\t" +this.finalLines[i].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n';

        
      }
     
      else if(this.finalLines[i].instructions.trim().startsWith("fld dword"))
      {
        if(this.finalLines[i+1].instructions.trim().startsWith("fstp dword"))
        { 
          this.countSequences++;
          this.seqID_7++;
          let printSeq3 = "Declare and assign a float variable"
          let printSeq2 = "fld instruction loads the floating point value onto the stack (floating point stack);" + "\n"+
          "FSTP stores a floating point number from the top of the floating-point register stack to the designated memory region." + "\n"+ 
          "Here dword means 32-bit and is usually floating point type in C; SS - Stack segment"+
          "\n"+"fld - floating point load one; fstp - Store floating point value"
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 7'+"\n"+ "Count: "+ this.countSequences+ '\n' + 
          "\n"+ "In the lines: " +(i+1)+ ","+ (i+2)+"\n"+ this.finalLines[i].instructions+'\n'+
                            this.finalLines[i+1].instructions+ "\n"+printSeq3+ "\n"+printSeq2;
          this.print4 += this.countSequences+'\t'+"7"+'\t'+(i+1)+"\t" +
                         this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                         this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+
                         printSeq3+'\n'+
          '______________________________________________________________________________________________________________________'+'\n';
         }
      }
      else if(this.finalLines[i].instructions.trim().startsWith("fld qword"))
      {
        if(this.finalLines[i+1].instructions.trim().startsWith("fstp dword"))
        {
          this.countSequences++;
          this.seqID_8++;
          let printSeq3 = "Double variable is moved into the register"
          let printSeq2 = "fld instruction loads the floating point value onto the stack (floating point stack);"+ "\n" +
           "FSTP stores a floating point number from the top of the floating-point register stack to the designated memory region." + "\n"+ 
          "Here qword means 64-bit and is usually double in C"+ "\n"+
          "fld - floating point load one; fstp - Store floating point value"
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 8'+"\n"+ "Count: "+  this.countSequences+ '\n' + 
          "\n"+ "In the lines: " +(i+1)+ ","+ (i+2)+ "\n"+ this.finalLines[i].instructions+
                                 this.finalLines[i+1].instructions+'\n'+printSeq3+ "\n"+printSeq2;
          this.print4 += this.countSequences+'\t'+"8"+'\t'+(i+1)+"\t" +
                         this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                         this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
          '______________________________________________________________________________________________________________________'+'\n';
        } 
      }
      else if(this.finalLines[i].instructions.trim().startsWith("mov byte"))
      {
          this.countSequences++;
          this.seqID_9++;
          let printSeq3 = "Character type variable is moved into the register"
          this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
          'Sequence ID: 9'+"\n"+ "Count: "+this.countSequences+ '\n' +
           printSeq3+"\n"+ "In the lines: " +(i+1)+ "\n"+ this.finalLines[i].instructions+'\n';
           this.print4 += this.countSequences+'\t'+"9"+'\t'+(i+1)+"," +"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'
           +printSeq3+'\n'+
           '______________________________________________________________________________________________________________________'+'\n';
      }

      else if(this.finalLines[i].instructions.trim().startsWith("lea"))
      {
        if(this.finalLines[i+1].instructions.trim().startsWith("push"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("push"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("call"))
            {
              console.log("Reading a single variable - any data type");
              this.countSequences++;
              this.seqID_10++;
              let printSeq3 = "Reading a single variable - any data type"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 10'+"\n"+ "Count: "+ this.countSequences+ '\n' +
               printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ (i+3)+ ","+ (i+4)+ ","+ "\n"+
               this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
               this.print4 += this.countSequences+'\t'+"10"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+ (i+4) +"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
               '______________________________________________________________________________________________________________________'+'\n';
            }
          }
        }
      }
     /**************************Integer airthmetic*******************************************/ 
      else if(this.finalLines[i].instructions.trim().startsWith("mov"))
      {
        if(this.finalLines[i+1].instructions.trim().startsWith("add"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("add"))
          {
          if(this.finalLines[i+3].instructions.trim().startsWith("mov"))
           {
              this.countSequences++;
              this.seqID_22++;
              let printSeq3 = "Addition of three integer variables"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 22'+"\n"+ "Count: "+ this.countSequences+ '\n' +
               printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "," + (i+3)+ ","+(i+4)+ "\n"+
               this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';

               this.print4 += this.countSequences+'\t'+"22"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+","+(i+4)+"\t" + 
               this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
               this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
               this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
               this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
               printSeq3+'\n'+
               '______________________________________________________________________________________________________________________'+'\n';
           }
          }
          else if(this.finalLines[i+2].instructions.trim().startsWith("mov"))
          {
              this.countSequences++;
              this.seqID_11++;
              let printSeq3 = "Addition of two integers"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 11'+"\n"+ "Count: "+ this.countSequences+ '\n' +
               printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ (i+3)+ ","+ "\n"+
               this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
               
               this.print4 += this.countSequences+'\t'+"11"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" +
                              this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                              this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                              this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+                            
                              printSeq3+'\n'+
               '______________________________________________________________________________________________________________________'+'\n';
   
          }
         }
             
        
        
          else if(this.finalLines[i+1].instructions.trim().startsWith("sub"))
          {
            if(this.finalLines[i+2].instructions.trim().startsWith("sub"))
            {
            if(this.finalLines[i+3].instructions.trim().startsWith("mov"))
             {
                this.countSequences++;
                this.seqID_23++;
                let printSeq3 = "Substraction of three integer variables"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 23'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                 printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "," + (i+3)+ ","+(i+4)+'\t'+
                 this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
                 this.print4 += this.countSequences+'\t'+"23"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+","+(i+4)+ 
                                this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                                this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                                this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                                this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
                                printSeq3+'\n'+
                 '______________________________________________________________________________________________________________________'+'\n';
             }
            }
          }
          

        else if(this.finalLines[i+1].instructions.trim().startsWith("imul"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("imul"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("mov"))
            {
                this.countSequences++;
                this.seqID_24++;
                let printSeq3 = "Multiplication of three integer variables"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 24'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                 printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
                 this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
  
                 this.print4 += this.countSequences+'\t'+"24"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+(i+4)+
                 this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                 this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
                 printSeq3+'\n'+
                 '______________________________________________________________________________________________________________________'+'\n';
            }
          }
          else if(this.finalLines[i+2].instructions.trim().startsWith("mov"))
          {
              this.countSequences++;
              this.seqID_12++;
              let printSeq3 = "integer multiplication"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 12'+"\n"+ "Count: "+ this.countSequences+ '\n' +
               printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
               this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';

               this.print4 += this.countSequences+'\t'+"12"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + 
               this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
               this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
               this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+
               printSeq3+'\n'+
               '______________________________________________________________________________________________________________________'+'\n';
          }
        }
        
        else if(this.finalLines[i+1].instructions.trim().startsWith("cdq"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("idiv"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("cdq"))
            {
              if(this.finalLines[i+4].instructions.trim().startsWith("idiv"))
              {
              if(this.finalLines[i+5].instructions.trim().startsWith("mov"))
              {
                this.countSequences++;
                this.seqID_25++;
                let printSeq3 = "Division of three integer variables"
                this.print2 +='___________________________________________________________________________'+"\n"+
                'Sequence ID: 25'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ (i+4)+','+ (i+5)+','+(i+6)+ "\n"+
                this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n'+this.finalLines[i+4].instructions+'\n'+this.finalLines[i+5].instructions+'\n';

                this.print4 += this.countSequences+'\t'+"25"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+(i+4)+ ','+ (i+5)+','+(i+6)+
                this.finalLines[i].instructions+'\t'+'\t'+'\t'+
                this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+
                this.finalLines[i+4].instructions+'\t'+'\t'+'\t'+
                this.finalLines[i+5].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+
                printSeq3+'\n'+
                '______________________________________________________________________________________________________________________'+'\n';
               }
              }
             }
           }
          else if(this.finalLines[i+3].instructions.trim().startsWith("mov"))
          {
              this.countSequences++;
              this.seqID_13++;
              let printSeq3 = "integer divison or modulus"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 13'+"\n"+ "Count: "+ this.countSequences+ '\n' +
              printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ (i+4)+ "\n"+
              this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+2].instructions+'\n';

              this.print4 += this.countSequences+'\t'+"13"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" +
               this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
               this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
               this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+
               printSeq3+'\n'+
              '______________________________________________________________________________________________________________________'+'\n';
          }
         
        }
      }  
/***********************************Float Numbers************************************************** */

      else if(this.finalLines[i].instructions.trim().startsWith("fld dword"))
      {
        if(this.finalLines[i+1].instructions.trim().startsWith("fadd"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("fadd"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("fstp"))
            {
                this.countSequences++;
                this.seqID_26++;
                let printSeq3 = "Addtion of three float variables"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 26'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                 printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
                 this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
  
                 this.print4 += this.countSequences+'\t'+"26"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+(i+4)+
                 this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                 this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
                 printSeq3+'\n'+
                 '______________________________________________________________________________________________________________________'+'\n';
            }
          }
          else if(this.finalLines[i+2].instructions.trim().startsWith("fstp"))
          {
              this.countSequences++;
              this.seqID_14++;
              let printSeq3 = "float addition"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 14'+"\n"+ "Count: "+ this.countSequences+ '\n' +
               printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ (i+3)+ ","+ "\n"+
               this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
               this.print4 += this.countSequences+'\t'+"14"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
               '______________________________________________________________________________________________________________________'+'\n';
          }
        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("fsub"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("fsub"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("fstp"))
            {
                this.countSequences++;
                this.seqID_27++;
                let printSeq3 = "Substraction of three float variables"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 27'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                 printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
                 this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
  
                 this.print4 += this.countSequences+'\t'+"27"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+(i+4)+
                 this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                 this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
                 printSeq3+'\n'+
                 '______________________________________________________________________________________________________________________'+'\n';
            }
          }
          else if(this.finalLines[i+2].instructions.trim().startsWith("fstp"))
          {
              this.countSequences++;
              this.seqID_15++;
              let printSeq3 = "float variable substraction"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 15'+"\n"+ "Count: "+ this.countSequences+ '\n' +
               printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
               this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
               this.print4 += this.countSequences+'\t'+"15"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
               '______________________________________________________________________________________________________________________'+'\n';
          }
        }
        
        else if(this.finalLines[i+1].instructions.trim().startsWith("fmul"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("fmul"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("fstp"))
            {
                this.countSequences++;
                this.seqID_28++;
                let printSeq3 = "Multiplication of three float variables"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 28'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                 printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
                 this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
  
                 this.print4 += this.countSequences+'\t'+"28"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+(i+4)+
                 this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                 this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
                 printSeq3+'\n'+
                 '______________________________________________________________________________________________________________________'+'\n';
            }
          }

          else if(this.finalLines[i+2].instructions.trim().startsWith("fstp"))
          {
              this.countSequences++;
              this.seqID_16++;
              let printSeq3 = "float multiplication"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 16'+"\n"+ "Count: "+ this.countSequences+ '\n' +
               printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
               this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
               this.print4 += this.countSequences+'\t'+"16"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
               '______________________________________________________________________________________________________________________'+'\n';
          }
        }
        
        else if(this.finalLines[i+1].instructions.trim().startsWith("fdiv"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("fdiv"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("fstp"))
            {
                this.countSequences++;
                this.seqID_29++;
                let printSeq3 = "Divison of three float variables"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 29'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                 printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
                 this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
  
                 this.print4 += this.countSequences+'\t'+"29"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+(i+4)+
                 this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                 this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
                 printSeq3+'\n'+
                 '______________________________________________________________________________________________________________________'+'\n';
            }
          }

          else if(this.finalLines[i+2].instructions.trim().startsWith("fstp"))
          {
                this.countSequences++;
                this.seqID_17++;
                let printSeq3 = "integer divison or modulus"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 17'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ (i+4)+ "\n"+
                this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
                this.print4 += this.countSequences+'\t'+"17"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
                '______________________________________________________________________________________________________________________'+'\n';
          }
        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("sub"))
        {
         if(this.finalLines[i+2].instructions.trim().startsWith("fstp"))
          {
              this.countSequences++;
              this.seqID_45++;
              let printSeq3 = "Printing the float value to the output"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 45'+"\n"+ "Count: "+ this.countSequences+ '\n' +
              printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ (i+4)+ "\n"+
              this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
              this.print4 += this.countSequences+'\t'+"45"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
              '______________________________________________________________________________________________________________________'+'\n';
          }
        }

      }

/**********************************************Double data type***************************************************** */

      else if(this.finalLines[i].instructions.trim().startsWith("fld qword"))
      {
        if(this.finalLines[i+1].instructions.trim().startsWith("fadd"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("fadd"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("fstp"))
            {
                this.countSequences++;
                this.seqID_30++;
                let printSeq3 = "Addition of three double type variables"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 30'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                 printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
                 this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
  
                 this.print4 += this.countSequences+'\t'+"30"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+(i+4)+
                 this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                 this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
                 printSeq3+'\n'+
                 '______________________________________________________________________________________________________________________'+'\n';
            }
          }
           else if(this.finalLines[i+2].instructions.trim().startsWith("fstp"))
           {
               this.countSequences++;
               this.seqID_18++;
               let printSeq3 = "float addition of two variables"
               this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
               'Sequence ID: 18'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ "\n"+ (i+3)+ ","+ "\n"+
                this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
                this.print4 += this.countSequences+'\t'+"18"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
                '______________________________________________________________________________________________________________________'+'\n';  
           }
        }
        else if(this.finalLines[i+1].instructions.trim().startsWith("fsub"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("fsub"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("fstp"))
            {
                this.countSequences++;
                this.seqID_31++;
                let printSeq3 = "Substraction of three double type variables"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 31'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                 printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
                 this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
  
                 this.print4 += this.countSequences+'\t'+"31"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+(i+4)+
                 this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                 this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
                 printSeq3+'\n'+
                 '______________________________________________________________________________________________________________________'+'\n';
            }
          }
        else if(this.finalLines[i+2].instructions.trim().startsWith("fstp"))
          {
              this.countSequences++;
              this.seqID_19++;
              let printSeq3 = "float substaction"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 19'+"\n"+ "Count: "+ this.countSequences+ '\n' +
               printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
               this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
               this.print4 += this.countSequences+'\t'+"19"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
               '______________________________________________________________________________________________________________________'+'\n';  
          }
        }
        
        else if(this.finalLines[i+1].instructions.trim().startsWith("fmul"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("fmul"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("fstp"))
            {
                this.countSequences++;
                this.seqID_32++;
                let printSeq3 = "Multiplication of three double type variables"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 32'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                 printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
                 this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
  
                 this.print4 += this.countSequences+'\t'+"32"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+(i+4)+
                 this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                 this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
                 printSeq3+'\n'+
                 '______________________________________________________________________________________________________________________'+'\n';
            }
          }
          else if(this.finalLines[i+2].instructions.trim().startsWith("fstp"))
          {
              this.countSequences++;
              this.seqID_20++;
              let printSeq3 = "float multiplication"
              this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
              'Sequence ID: 20'+"\n"+ "Count: "+ this.countSequences+ '\n' +
               printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
               this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
               this.print4 += this.countSequences+'\t'+"20"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
               '______________________________________________________________________________________________________________________'+'\n';  
          }
        }
        
        else if(this.finalLines[i+1].instructions.trim().startsWith("fdiv"))
        {
          if(this.finalLines[i+2].instructions.trim().startsWith("fdiv"))
          {
            if(this.finalLines[i+3].instructions.trim().startsWith("fstp"))
            {
                this.countSequences++;
                this.seqID_33++;
                let printSeq3 = "Division of three double type variables"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 33'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                 printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ "\n"+
                 this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n'+this.finalLines[i+3].instructions+'\n';
  
                 this.print4 += this.countSequences+'\t'+"33"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+','+(i+4)+
                 this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+
                 this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+
                 this.finalLines[i+3].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+   
                 printSeq3+'\n'+
                 '______________________________________________________________________________________________________________________'+'\n';
            }
          }
         else  if(this.finalLines[i+2].instructions.trim().startsWith("fstp"))
          {
                this.countSequences++;
                this.seqID_21++;
                let printSeq3 = "integer divison or modulus"
                this.print2 += "\n"+'___________________________________________________________________________'+"\n"+
                'Sequence ID: 21'+"\n"+ "Count: "+ this.countSequences+ '\n' +
                printSeq3+"\n"+ "In the lines: " +(i+1)+ ", " +(i+2)+ ","+ (i+3)+ ","+ (i+4)+ "\n"+
                this.finalLines[i].instructions+'\n'+this.finalLines[i+1].instructions+'\n'+this.finalLines[i+2].instructions+'\n';
                this.print4 += this.countSequences+'\t'+"21"+'\t'+(i+1)+"," +(i+2)+ ','+ (i+3)+"\t" + this.finalLines[i].instructions+'\n'+'\t'+'\t'+'\t'+this.finalLines[i+1].instructions+'\t'+'\t'+'\t'+this.finalLines[i+2].instructions+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+'\t'+printSeq3+'\n'+
                '______________________________________________________________________________________________________________________'+'\n';  
          }
        }
      }
           
    }
    //Counting the number of patterns
    console.log(this.countSequences);
    this.outputValue = this.outputValue+"\n"+this.countSequences;

    //console.log(this.textAreaValue2);

   // console.log(this.finalLines[0].instructions);
    this.updateResults( );

  }

  getPatternForPush(lineIndex: number) {

    // If mov instruction comes after push '
    // then update the meaning of the console and 
    // update the number of such pair of instructions in output area

    // var json = { meaning: "", countInstructions: 0 };

    
    var consoleString;
    var patternNumber = 0;

    if (this.finalLines[lineIndex + 1].instructions.includes('mov')) {
      //Check if the sub follows
      if (this.finalLines[lineIndex + 2].instructions.includes('sub')) {
        //Pattern 4 of push detected, print 'Start of the function; Variables are declared and memory is allocated'
        
        var patternNumber = 4;

      }
      else {
        patternNumber = 1;
      }


    } else if (this.finalLines[lineIndex + 1].instructions.includes('call')) {

      //Check if add follows
      if (this.finalLines[lineIndex + 2].instructions.includes('add')) {
        //Pattern 4 of push detected, print 'Start of the function; Variables are declared and memory is allocated'

        var patternNumber = 2;

      }
      else {
        patternNumber = 3;
      }

    }
    
    switch (patternNumber) {
      case 1:
        consoleString = 'open brace {  start of the main function'

        break;

      case 2:
        consoleString = 'Prints Output';
        break;
      case 3:
        consoleString = 'Prints Output';
        break;
      case 4:
        consoleString = 'Start of the function; Variables are declared and memory is allocated';
        break;

      default:
        break;
    } {

    }






    return consoleString;

  }
  populateOutput() {

  }

  populateConsole(consoleString: string) {

  }

  unwantedInstructionsRemoval1(lines: string[]) {
    var outputString: string = '';
    var checkString: string = '';
    var i = 0;

    for (i = 0; i < lines.length; i++) {

      checkString = lines[i].toString();

      if (checkString.includes("nop") || checkString.includes("add byte ptr ds:[eax],al")) {
        lines.splice(i, 1);
        i--;
      }

    }

    return lines;

  }

  unwantedInstructionsRemoval2(lines: string[]) {

    var newLines = new Array;
    var i = 0;
    var outputString: string = '';
    var callLines = new Array;
    var retFlag = 0;
    var callString = "";
    var callAddress = "";
    var highestAddressCall = "";

    // Divide the lines into object array
    for (i = 0; i < lines.length; i++) {
      var json = { address: "", instructions: "" };
      json.address = lines[i].slice(0, 8);
      json.instructions = lines[i].slice(9, lines[i].length);
      newLines.push(json);
    }

    // clear object
    json = { address: "", instructions: "" };


    // Get all the call instructions before ret into another array
    for (i = 0; i < newLines.length; i++) {
      var newJson = { index: 0, address: "", instructions: "" };
      var inst = newLines[i].instructions;
      if (inst.includes("ret") && retFlag === 0) {
        retFlag = 1;

      }
      if (inst.includes("call") && retFlag === 0) {
        newJson.index = i;
        newJson.address = newLines[i].address;
        newJson.instructions = newLines[i].instructions;
        callLines.push(newJson);
      }

    }

    //  Find the highest call address
    for (i = 0; i < callLines.length; i++) {
      var spliceString = "";
      //callString = callLines[i].instructions.toString();
      //spliceString = callString.slice(callString.indexOf(".") + 1, callString.length);
      //callAddress = spliceString;
      callString = callLines[i].instructions.toString();
      spliceString = callString.slice(callString.indexOf(".") + 1, 6);
      //callAddress = parseInt(spliceString , 10);
      callAddress = spliceString;

      if (callAddress > highestAddressCall) {
        highestAddressCall = callAddress;
      }
    }

    highestAddressCall = callAddress;

    // output and remove all the lines until push C;
    for (i = 0; i < newLines.length; i++) {

      outputString =  outputString +" "+((i+1)+" --> "+" "+ newLines[i].address) + " " + newLines[i].instructions + '\n';
      this.textAreaValue2 =  outputString;
      this.textSample = i;

      if (i > 0) {
        var instr = newLines[i].instructions;
        var previnstr = newLines[i - 1].instructions;
        var addres = newLines[i].address;
        if (addres.includes(highestAddressCall) && instr.includes("push C") && previnstr.includes("ret")) {
          newLines.splice(i + 1, newLines.length);
          break;
        }

      }
    }

    return newLines;


  }


}