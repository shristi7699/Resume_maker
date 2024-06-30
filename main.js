document.addEventListener('DOMContentLoaded', function () {
    var selectedTemplate = 'template1';
  
    var form = document.getElementById('resume-form');
    form.addEventListener('input', updatePreview);
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      updatePreview();
    });
  
    document.querySelectorAll('.template').forEach(function (template) {
      template.addEventListener('click', function () {
        document.querySelectorAll('.template').forEach(function (t) {
          t.classList.remove('selected');
        });
        this.classList.add('selected');
        selectedTemplate = this.getAttribute('data-template-id');
        updatePreview();
      });
    });
  
    function updatePreview() {
      var preview = document.getElementById('resume-preview');
      var name = document.getElementById('name').value;
      var contact = document.getElementById('contact').value;
      var summary = document.getElementById('summary').value;
      var skills = document.getElementById('skills').value;
      var education = document.getElementById('education').value;
      var experience = document.getElementById('experience').value;
      var projects = document.getElementById('projects').value;
      var certifications = document.getElementById('certifications').value;
      var languages = document.getElementById('languages').value;
      var references = document.getElementById('references').value;
  
      var templateHtml = `
        <div class="${selectedTemplate}">
          <h1>${name}</h1>
          <p>${contact}</p>
          <h2>Professional Summary</h2>
          <p>${summary}</p>
          <h2>Skills</h2>
          <p>${skills}</p>
          <h2>Education</h2>
          <p>${education}</p>
          <h2>Experience</h2>
          <p>${experience}</p>
          <h2>Projects</h2>
          <p>${projects}</p>
          <h2>Certifications</h2>
          <p>${certifications}</p>
          <h2>Languages</h2>
          <p>${languages}</p>
          <h2>References</h2>
          <p>${references}</p>
        </div>
      `;
  
      preview.innerHTML = templateHtml;
    }
  
    document.getElementById('export-pdf').addEventListener('click', function() {
      var content = document.getElementById('resume-preview').innerText;
      var blob = new Blob([content], { type: 'application/pdf' });
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'resume.pdf';
      link.click();
    });
  
    document.getElementById('export-docx').addEventListener('click', function() {
      var content = document.getElementById('resume-preview').innerText;
      var blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'resume.docx';
      link.click();
    });
  
    document.getElementById('export-txt').addEventListener('click', function() {
      var content = document.getElementById('resume-preview').innerText;
      var blob = new Blob([content], { type: 'text/plain' });
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'resume.txt';
      link.click();
    });
  });
  