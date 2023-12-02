document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <!-- Add sections with respective IDs and content -->
        <div id="contact" class="content">
            <!-- Contact Information -->
        </div>
        <div id="summary" class="content">
            <!-- Professional Summary -->
        </div>
        <div id="skills" class="content">
            <!-- Skills -->
        </div>
        <div id="work" class="content">
            <!-- Work Experience -->
        </div>
        <!-- Add other content sections -->
    `;
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

