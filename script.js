document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.fade-up, .pillar-card, .product-item, .project-card, .partner-item');
    animateElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    // Navbar background change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.8rem 4%';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '1.5rem 4%';
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // PDF Download Button (Print to PDF)
    const pdfBtn = document.getElementById('pdf-btn');
    pdfBtn.addEventListener('click', () => {
        window.print();
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Certificate Data (Extracted from documents)
const certData = {
    'cac': {
        title: 'CAC Registration Details',
        text: 'Company Name: BASAMUKH INTEGRATED SERVICES NIG LTD\nRC Number: 1415546\nDate of Incorporation: 26th May 2017\n\nRegistered as a Private Company Limited by Shares with a share capital of N10,000,000.00. The company is authorized to carry on business as general merchants, agricultural services providers, and seed production specialists.',
        link: 'CAC.jpeg'
    },
    'receipts': {
        title: 'Payment Receipts & Evidence',
        text: 'Official payment receipts for regulatory filings and annual returns. This confirms that the company maintains up-to-date financial compliance with the Corporate Affairs Commission and other relevant tax authorities.',
        link: 'Receipts.jpeg'
    },
    'nasc': {
        title: 'NASC Seed License Details',
        text: 'Regulatory Body: National Agricultural Seed Council (NASC)\nRegistration No: 0006\n\nThis license authorizes Basamukh Seed Integrated Services to operate as a Licensed Seed Producer and Processor in Nigeria. It confirms compliance with the National Agricultural Seed Act, ensuring all seeds produced meet the highest standards of germination and purity.',
        link: 'NASC.pdf'
    },
    'reg1': {
        title: 'Business Registration I',
        text: 'Official registration document certifying the legal operations of Basamukh Seed Integrated Services within the agricultural sector. This document supports our standing as a verified supplier of high-quality agricultural inputs.',
        link: 'registration 1.jpeg'
    },
    'reg2': {
        title: 'Business Registration II',
        text: 'State-level compliance certificate and tax identification documentation. This confirms our status as a law-abiding corporate entity, fully registered for agricultural development programs and government contract eligibility.',
        link: 'registration 2.jpeg'
    },
    'award': {
        title: 'Letter of Award Details',
        text: 'Issuing Authority: Kebbi State Fadama Coordination Office (World Bank Assisted)\nDate: May 2022\n\nProject: Supply of Certified Seeds (Sorghum, Millet, and Maize)\nTotal Contract Value: N32,231,250.00\n\nThis award recognizes our capacity to deliver large-scale agricultural inputs for international development projects.',
        link: 'LETTER OF AWARD.jpeg'
    }
};

// Modal Functions
let currentFileUrl = '';

function openCertModal(certId) {
    const data = certData[certId];
    if (data) {
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-text').innerText = data.text;
        
        currentFileUrl = data.link;
        
        // Handle Previews
        const imgPreview = document.getElementById('modal-img-preview');
        const pdfEmbed = document.getElementById('modal-pdf-embed');
        
        if (data.link.toLowerCase().endsWith('.pdf')) {
            imgPreview.style.display = 'none';
            pdfEmbed.src = data.link;
            pdfEmbed.style.display = 'block';
        } else {
            imgPreview.src = data.link;
            imgPreview.style.display = 'block';
            pdfEmbed.style.display = 'none';
            pdfEmbed.src = '';
        }
        
        const modal = document.getElementById('cert-modal');
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
        
        document.body.style.overflow = 'hidden';
    }
}

function openCurrentFile() {
    if (currentFileUrl) {
        window.open(currentFileUrl, '_blank');
    }
}

function closeCertModal() {
    const modal = document.getElementById('cert-modal');
    modal.classList.remove('active');
    
    // Clear previews
    document.getElementById('modal-pdf-embed').src = '';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
    document.body.style.overflow = 'auto';
}

// Print handling
window.onbeforeprint = () => {
    closeCertModal();
};
