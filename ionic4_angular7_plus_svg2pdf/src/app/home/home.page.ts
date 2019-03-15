import { Component } from '@angular/core';
import * as jsPDF from 'jspdf-yworks';
import * as svg2pdf from 'svg2pdf.js';

//NOTE: to run npm install for jsPDF and svg2pdf follow the steps:
//npm install jspdf-yworks --save
//npm install svg2pdf.js --save

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


public download() {
		var doc = new jsPDF();
		doc.text(20, 20, 'Hello world!');
		doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
		doc.addPage();
		doc.text(20, 20, 'Do you like that?');

		// Save the PDF
		doc.save('Test.pdf');
}


public download2() {

      var svgElement = document.getElementById('svg');
      var width = 300;
      var height = 200;

      // create a new jsPDF instance
      var pdf = new jsPDF('l', 'pt', [width, height]);

	alert('teste 3');

      // render the svg element
      svg2pdf(svgElement, pdf, {
        xOffset: 0,
        yOffset: 0,
        scale: 1
      });
	alert('teste 4');

      // get the data URI
      const uri = pdf.output('datauristring');

      // or simply save the created pdf
      pdf.save('myPDF.pdf');
}



}
