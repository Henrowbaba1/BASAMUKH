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

    // PDF Download Button (Trigger Browser Print for PDF Export)
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

// Text Data for Projects and Partnerships
const textData = {
    'project_kaduna': {
        title: 'Kaduna State ADP Project',
        text: 'The Company was engaged as a contracted seed supplier under the Kaduna State Agricultural Development Programme (KADP), specifically focusing on the Ruwan Sanyi and Ludduga Clusters. We supplied certified, high-quality seeds in large quantities to support cluster-based farming initiatives. Our delivery contributed significantly to improved crop productivity within these agricultural clusters. The contract was executed successfully, with all supply obligations fulfilled and payments duly completed.'
    },
    'project_kebbi': {
        title: 'Kebbi State ADP Project',
        text: 'Under a formal supply arrangement with the Kebbi State Agricultural Development Programme, we provided bulk quantities of improved seeds to support state-wide agricultural production programs. Our seeds met rigorous quality and certification standards, ensuring enhanced crop performance for beneficiary farmers. The contract was delivered efficiently, and all financial obligations were honoured upon completion, demonstrating our reliability as a state-level partner.'
    },
    'project_pyxera': {
        title: 'Pyxera Global – Rayuwa Project',
        text: 'The Company served as a contracted supplier for the Rayuwa Project implemented by Pyxera Global in Katsina State. We delivered large volumes of certified seeds to project beneficiaries, ensuring timely availability of quality inputs to farmers participating in the program. The contract was executed precisely to specification, with successful delivery confirmed and payment received, highlighting our capacity for NGO-led development projects.'
    },
    'project_nuru': {
        title: 'Nuru International Initiative',
        text: 'In partnership with Nuru International, we supplied high-quality agricultural seeds at a large scale to support community-based agricultural interventions in Adamawa State. Our seeds contributed directly to improved farm yields and enhanced livelihoods within the target communities. The supply contract was completed successfully, with all deliverables met and payments received as agreed.'
    },
    'project_gombe': {
        title: 'Gombe State Input Programme',
        text: 'The company successfully executed a contract for the supply of bulk quantities of certified, high-quality seeds to the Gombe State Government. This project supported agricultural development and food security initiatives, including the wet season input distribution programmes. Our participation aligned with broader interventions such as the Rural Access and Agricultural Marketing Project (RAAMP), facilitating grassroots access to essential agricultural inputs.'
    },
    'partner_nasc': {
        title: 'NASC Partnership',
        text: 'We operate under the strict regulatory oversight of the National Agricultural Seed Council (NASC). This partnership ensures that all our production processes comply with national seed certification standards, maintaining high levels of quality control and genetic purity from field to market.'
    },
    'partner_iar': {
        title: 'IAR Collaboration',
        text: 'Our collaboration with the Institute for Agricultural Research (IAR) provides us with critical access to breeder and foundation seeds. Additionally, we leverage their technical expertise in seed cleaning, processing, and quality assurance, which forms the backbone of our seed multiplication system.'
    },
    'partner_ncri': {
        title: 'NCRI Badeggi Sourcing',
        text: 'We source high-quality foundation seeds for key crops, including rice and soybean, from the National Cereals Research Institute (NCRI), Badeggi. This ensures our farmers have access to scientifically developed, high-yielding, and adaptable seed varieties that are proven to perform in Nigerian climates.'
    },
    'partner_ecobasic': {
        title: 'Eco-Basic Seeds Partnership',
        text: 'We partner with Eco-Basic Seed Company to provide improved varieties such as PBR Cowpea and hybrid maize. This partnership enables us to supply climate-resilient and high-yielding seed options that are at the forefront of agricultural biotechnology in Nigeria.'
    },
    'partner_valueseeds': {
        title: 'Value Seeds Foundation Sourcing',
        text: 'Value Seeds Limited supports our operations through the provision of foundation seeds across multiple crop categories. This strategic relationship ensures continuity and consistency in our production pipeline, allowing us to maintain a steady supply of certified seeds for our clients.'
    },
    'partner_aatf': {
        title: 'AATF Technology Partnership',
        text: 'Through our partnership with the African Agricultural Technology Foundation (AATF), we participate in the production of certified PBR seeds, including advanced and biotech varieties. This strengthens our contribution to agricultural innovation and national food security.'
    }
};

function openTextModal(dataId) {
    const data = textData[dataId];
    if (data) {
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-text').innerText = data.text;
        
        // Hide previews for text-only modals
        document.getElementById('modal-img-preview').style.display = 'none';
        document.getElementById('modal-pdf-embed').style.display = 'none';
        
        // Hide "Open in New Tab" button as there's no file
        const footerBtn = document.querySelector('.modal-footer .btn-primary');
        if (footerBtn) footerBtn.style.display = 'none';
        
        const modal = document.getElementById('cert-modal');
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
        
        document.body.style.overflow = 'hidden';
    }
}

// Modify existing openCertModal to show the button again
const originalOpenCertModal = openCertModal;
openCertModal = function(certId) {
    const footerBtn = document.querySelector('.modal-footer .btn-primary');
    if (footerBtn) footerBtn.style.display = 'inline-block';
    originalOpenCertModal(certId);
};
