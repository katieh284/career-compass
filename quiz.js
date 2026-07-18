// Scoring algorithm and quiz logic
const careerDatabase = {
  consulting: {
    name: "Consulting",
    description: "Strategy, problem-solving, and client-facing roles",
    longDescription: "Consultants help organizations solve complex business problems, improve operations, and drive growth. You'll work on diverse projects across industries, presenting insights to senior executives and leading teams.",
    traits: {
      peopleFocus: 8,
      analyticalFocus: 7,
      variety: 9,
      pressure: 8,
      autonomy: 6,
      workLifeBalance: 4,
      earnings: 8,
      stability: 6,
      qualifications: 5
    },
    companies: ["McKinsey & Company", "Boston Consulting Group", "Bain & Company", "Deloitte Consulting", "PwC Strategy&"],
    avgSalary: "£65,000 - £150,000+",
    keySkills: ["Problem-solving", "Communication", "Client management", "Analytics", "Leadership"],
    typicalActivities: ["advising", "problemSolving", "presenting", "analysis", "managing"],
    typicalIndustries: ["consulting"],
    typicalStrengths: ["strategic", "analytical", "communicator", "competitive"]
  },

  finance: {
    name: "Finance",
    description: "Investment banking, corporate finance, and trading",
    longDescription: "Finance careers involve managing money, analyzing investments, and executing complex financial transactions. Roles range from investment banking and trading to corporate finance and private equity.",
    traits: {
      earnings: 9,
      analyticalFocus: 9,
      pressure: 9,
      peopleFocus: 6,
      workLifeBalance: 2,
      autonomy: 7,
      variety: 7,
      stability: 6,
      qualifications: 7
    },
    companies: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "Barclays", "HSBC", "Citi", "Bank of America"],
    avgSalary: "£80,000 - £200,000+",
    keySkills: ["Financial modeling", "Data analysis", "Risk management", "Attention to detail", "Trading acumen"],
    typicalActivities: ["analysis", "models", "research", "negotiating"],
    typicalIndustries: ["finance"],
    typicalStrengths: ["analytical", "detailed", "competitive", "strategic"]
  },

  tax: {
    name: "Accounting & Tax",
    description: "Tax advisory and compliance expertise",
    longDescription: "Tax professionals help clients minimize tax liabilities, ensure compliance, and optimize their financial positions. Work includes tax planning, compliance, and advisory for individuals and corporations.",
    traits: {
      analyticalFocus: 8,
      stability: 8,
      qualifications: 9,
      peopleFocus: 6,
      pressure: 6,
      workLifeBalance: 6,
      earnings: 7,
      autonomy: 5,
      variety: 5
    },
    companies: ["Deloitte", "PwC", "EY", "KPMG", "Grant Thornton", "BDO", "Crowe"],
    avgSalary: "£50,000 - £120,000",
    keySkills: ["Tax knowledge", "Attention to detail", "Client service", "Compliance expertise", "Problem-solving"],
    typicalActivities: ["analysis", "research", "models", "advising"],
    typicalIndustries: ["tax", "consulting"],
    typicalStrengths: ["analytical", "detailed", "organized", "curious"]
  },

  economics: {
    name: "Economics",
    description: "Economic research and policy analysis",
    longDescription: "Economists analyze economic trends, conduct research, and inform policy decisions. Roles span central banks, government, international organizations, and think tanks.",
    traits: {
      analyticalFocus: 9,
      autonomy: 8,
      variety: 7,
      pressure: 5,
      workLifeBalance: 7,
      stability: 8,
      earnings: 6,
      peopleFocus: 5,
      qualifications: 8
    },
    companies: ["Bank of England", "Office for National Statistics", "World Bank", "IMF", "Institute for Fiscal Studies", "Resolution Foundation", "LSE"],
    avgSalary: "£45,000 - £100,000",
    keySkills: ["Research", "Data analysis", "Critical thinking", "Econometrics", "Policy understanding"],
    typicalActivities: ["analysis", "research", "problemSolving"],
    typicalIndustries: ["government"],
    typicalStrengths: ["analytical", "curious", "strategic", "organized"]
  },

  professionalServices: {
    name: "Professional Services",
    description: "Audit, advisory, and business services",
    longDescription: "Professional services firms offer audit, tax, and advisory services to organizations. You'll develop deep client relationships, lead projects, and specialize in your area of expertise.",
    traits: {
      analyticalFocus: 7,
      stability: 7,
      qualifications: 8,
      peopleFocus: 7,
      pressure: 6,
      workLifeBalance: 6,
      earnings: 7,
      autonomy: 5,
      variety: 6
    },
    companies: ["Big 4 (Deloitte, PwC, EY, KPMG)", "BDO", "Grant Thornton", "Crowe", "Mazars", "Haysmacintyre"],
    avgSalary: "£50,000 - £130,000",
    keySkills: ["Audit", "Advisory", "Client management", "Problem-solving", "Leadership"],
    typicalActivities: ["advising", "analysis", "managing", "research", "presenting"],
    typicalIndustries: ["consulting", "tax"],
    typicalStrengths: ["analytical", "organized", "communicator", "empathetic"]
  }
};

let currentQuestion = 1;
const totalQuestions = 21;

// Initialize quiz
document.addEventListener('DOMContentLoaded', function() {
  updateQuestionDisplay();
  setupSliderListeners();
  setupCheckboxLimits();
});

// Update slider values display
function setupSliderListeners() {
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    slider.addEventListener('input', function() {
      const valueSpan = document.getElementById(this.name + 'Value');
      if (valueSpan) {
        valueSpan.textContent = this.value;
      }
    });
  });
}

// Limit checkboxes to 5 for activities and industries, 3 for priorities
function setupCheckboxLimits() {
  const activityCheckboxes = document.querySelectorAll('input[name="activities"]');
  const industryCheckboxes = document.querySelectorAll('input[name="industries"]');
  const priorityCheckboxes = document.querySelectorAll('input[name="priorities"]');

  setupCheckboxGroup(activityCheckboxes, 5);
  setupCheckboxGroup(industryCheckboxes, 5);
  setupCheckboxGroup(priorityCheckboxes, 3);
}

function setupCheckboxGroup(checkboxes, maxSelections) {
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
      if (checkedCount > maxSelections) {
        this.checked = false;
      }
    });
  });
}

// Show/hide questions
function updateQuestionDisplay() {
  // Hide all questions
  for (let i = 1; i <= totalQuestions; i++) {
    const question = document.getElementById('question' + i);
    if (question) {
      question.style.display = 'none';
    }
  }

  // Show current question
  const currentQ = document.getElementById('question' + currentQuestion);
  if (currentQ) {
    currentQ.style.display = 'block';
  }

  // Update progress
  document.getElementById('currentQuestion').textContent = currentQuestion;
  document.getElementById('progressFill').style.width = ((currentQuestion / totalQuestions) * 100) + '%';

  // Update buttons
  document.getElementById('prevBtn').style.display = currentQuestion > 1 ? 'inline-block' : 'none';
  document.getElementById('nextBtn').style.display = currentQuestion < totalQuestions ? 'inline-block' : 'none';
  document.getElementById('submitBtn').style.display = currentQuestion === totalQuestions ? 'inline-block' : 'none';

  // Scroll to top
  window.scrollTo(0, 0);
}

function nextQuestion() {
  if (validateCurrentQuestion()) {
    if (currentQuestion < totalQuestions) {
      currentQuestion++;
      updateQuestionDisplay();
    }
  }
}

function previousQuestion() {
  if (currentQuestion > 1) {
    currentQuestion--;
    updateQuestionDisplay();
  }
}

function validateCurrentQuestion() {
  const requiredFields = {
    1: 'stage',
    2: 'subject',
    3: 'grades',
    15: 'location',
    20: 'considering'
  };

  if (requiredFields[currentQuestion]) {
    const field = document.querySelector(`[name="${requiredFields[currentQuestion]}"]`);
    if (!field || !field.value) {
      alert('Please select an option before continuing.');
      return false;
    }
  }

  return true;
}

// Calculate career scores
function calculateCareerScores(formData) {
  const scores = {};

  for (let career in careerDatabase) {
    scores[career] = 0;
  }

  const workLifeBalance = parseInt(formData.get('workLifeBalance')) || 5;
  const earnings = parseInt(formData.get('earnings')) || 5;
  const peopleFocus = parseInt(formData.get('peopleFocus')) || 5;
  const analyticalFocus = parseInt(formData.get('analyticalFocus')) || 5;
  const variety = parseInt(formData.get('variety')) || 5;
  const pressure = parseInt(formData.get('pressure')) || 5;
  const stability = parseInt(formData.get('stability')) || 5;
  const qualifications = parseInt(formData.get('qualifications')) || 5;
  const autonomy = parseInt(formData.get('autonomy')) || 5;

  // Score based on trait compatibility
  for (let career in careerDatabase) {
    const traits = careerDatabase[career].traits;
    scores[career] += 10 - Math.abs(workLifeBalance - traits.workLifeBalance);
    scores[career] += 10 - Math.abs(earnings - traits.earnings);
    scores[career] += 10 - Math.abs(peopleFocus - traits.peopleFocus);
    scores[career] += 10 - Math.abs(analyticalFocus - traits.analyticalFocus);
    scores[career] += 10 - Math.abs(variety - traits.variety);
    scores[career] += 10 - Math.abs(pressure - traits.pressure);
    scores[career] += 10 - Math.abs(stability - traits.stability);
    scores[career] += 10 - Math.abs(qualifications - traits.qualifications);
    scores[career] += 10 - Math.abs(autonomy - traits.autonomy);
  }

  // Bonus for activities
  const activities = formData.getAll('activities');
  activities.forEach(activity => {
    for (let career in careerDatabase) {
      if (careerDatabase[career].typicalActivities.includes(activity)) {
        scores[career] += 15;
      }
    }
  });

  // Bonus for industries
  const industries = formData.getAll('industries');
  industries.forEach(industry => {
    for (let career in careerDatabase) {
      if (careerDatabase[career].typicalIndustries.includes(industry)) {
        scores[career] += 20;
      }
    }
  });

  // Bonus for strengths
  const strengths = formData.getAll('strengths');
  strengths.forEach(strength => {
    for (let career in careerDatabase) {
      if (careerDatabase[career].typicalStrengths.includes(strength)) {
        scores[career] += 10;
      }
    }
  });

  // Bonus for considering career
  const considering = formData.get('considering');
  const careerMapping = {
    'consulting': 'consulting',
    'finance': 'finance',
    'tax': 'tax',
    'economics': 'economics',
    'entrepreneurship': 'consulting'
  };
  if (careerMapping[considering]) {
    scores[careerMapping[considering]] += 25;
  }

  return scores;
}

// Get top recommendations
function getTopRecommendations(scores, count = 3) {
  const sorted = Object.entries(scores)
    .map(([career, score]) => ({ career, score }))
    .sort((a, b) => b.score - a.score);

  return sorted.slice(0, count);
}

// Display results
function displayResults(topCareers, formData) {
  const resultsHTML = `
    <div class="results-container">
      <div class="results-header">
        <h1>Your Career Matches 🎯</h1>
        <p>Based on your responses, here are your best-matched careers:</p>
      </div>

      <div class="results-grid">
        ${topCareers.map((item, index) => {
          const career = careerDatabase[item.career];
          const percentage = Math.round((item.score / 1000) * 100);
          
          return `
            <div class="result-card rank-${index + 1}">
              <div class="rank-badge">TOP #${index + 1}</div>
              <h2>${career.name}</h2>
              <div class="match-percentage">
                <div class="progress-bar-result">
                  <div class="progress-fill-result" style="width: ${percentage}%"></div>
                </div>
                <p class="percentage-text">${percentage}% Match</p>
              </div>
              <p class="description">${career.longDescription}</p>
              
              <div class="career-details">
                <div class="detail-section">
                  <h4>💼 Top Companies</h4>
                  <ul>
                    ${career.companies.map(company => `<li>${company}</li>`).join('')}
                  </ul>
                </div>
                
                <div class="detail-section">
                  <h4>💰 Salary Range</h4>
                  <p class="salary">${career.avgSalary}</p>
                </div>
                
                <div class="detail-section">
                  <h4>🎯 Key Skills</h4>
                  <div class="skills-list">
                    ${career.keySkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      ${formData.get('idealCareer') ? `
        <div class="user-vision">
          <h3>💭 Your Vision for 10 Years</h3>
          <p>"${formData.get('idealCareer')}"</p>
        </div>
      ` : ''}

      <div class="results-actions">
        <button class="btn btn-primary" onclick="location.href='index.html'">← Back to Home</button>
        <button class="btn btn-secondary" onclick="location.href='quiz.html'">🔄 Retake Quiz</button>
      </div>
    </div>
  `;

  return resultsHTML;
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('quizForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(form);
      const scores = calculateCareerScores(formData);
      const topCareers = getTopRecommendations(scores, 3);

      // Display results
      const quizContainer = document.querySelector('.quiz-container');
      quizContainer.innerHTML = displayResults(topCareers, formData);
    });
  }
});
