import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BrainCircuit, Binary, Database, ShieldAlert, ChevronDown } from 'lucide-react';
import Header from '../../../components/Header';

export default function AiMlFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const maswali = [
    /* I. Mathematical and Statistical Foundations (1–15) */
    { id: 1, cat: "Math", q: "Explain the relevance of the Central Limit Theorem (CLT) when analyzing mobile money transaction volumes across different Tanzanian regions.", a: "The Central Limit Theorem states that as the sample size n increases, the distribution of the sample mean will approximate a normal distribution, regardless of the population's original distribution. For a Tanzanian data scientist, this allows the use of parametric tests to estimate national transaction averages from regional samples." },
    { id: 2, cat: "Math", q: "How does the concept of conditional probability assist in fraud detection within the Tanzanian fintech ecosystem?", a: "Conditional probability, P(A|B) = P(A ∩ B) / P(B), measures the likelihood of a fraudulent transaction (A) given specific behavioral markers (B), such as a midnight transaction from a new device. By identifying high-risk conditions (B), platforms can trigger automated security checks." },
    { id: 3, cat: "Math", q: "Differentiate between correlation and causation in the context of agricultural yields and fertilizer use in the Southern Highlands.", a: "Correlation measures the degree of linear association between two variables, while causation implies that one variable directly influences the other. A data scientist must control for confounding variables like rainfall and soil quality to establish a causal link." },
    { id: 4, cat: "Math", q: "Describe the use of Bayes' Theorem in clinical diagnosis using tools like XSense AI for breast cancer detection.", a: "Bayes' Theorem integrates prior probability with new evidence: P(H|E) = [P(E|H)P(H)] / P(E). It helps clinicians calculate the posterior probability of cancer given a positive test, accounting for the prevalence of the disease in the local population." },
    { id: 5, cat: "Math", q: "Explain the significance of p-values in determining the success of a new educational tech intervention in Dar es Salaam.", a: "A p-value is the probability of obtaining results as extreme as those observed, assuming the null hypothesis is true. A p-value ≤ 0.05 typically indicates that the improvement in student math scores is statistically significant." },
    { id: 6, cat: "Math", q: "What are Eigenvectors and Eigenvalues, and why are they used in Principal Component Analysis (PCA)?", a: "Eigenvectors are unit vectors representing the directions of maximum variance in a dataset, while Eigenvalues represent the magnitude of that variance. PCA uses these to reduce the dimensionality of data while preserving critical information." },
    { id: 7, cat: "Math", q: "Explain the Bias-Variance Tradeoff in the context of predicting coffee prices in Moshi.", a: "Bias is the error from overly simplistic assumptions (underfitting), while variance is the error from sensitivity to small fluctuations in training data (overfitting). The goal is to minimize total error by finding optimal model complexity." },
    { id: 8, cat: "Math", q: "Define the standard deviation and explain its role in assessing the volatility of the Dar es Salaam Stock Exchange (DSE).", a: "Standard deviation measures the dispersion of data points from the mean. In the DSE context, a high standard deviation in annual growth (e.g., around 22.23%) indicates high volatility and higher risk for investors." },
    { id: 9, cat: "Math", q: "How do the Mean, Median, and Mode differ when analyzing income distribution in Tanzania's informal sector?", a: "The mean is the average, sensitive to outliers; the median is the middle value, better representing the 'typical' person in a skewed distribution; the mode is the most frequent value." },
    { id: 10, cat: "Math", q: "What is the Bernoulli Distribution, and how does it relate to loan default prediction?", a: "The Bernoulli distribution models a single trial with two outcomes (success/failure). In credit risk, a loan either defaults (1) or does not (0), forming the basis for logistic regression models." },
    { id: 11, cat: "Math", q: "Describe the Poisson Distribution in the context of network traffic for a Tanzanian ISP.", a: "The Poisson distribution models the number of events occurring in a fixed interval. This helps ISPs like Flashnet manage server capacity to avoid downtime, which affects 37% of Tanzanian users." },
    { id: 12, cat: "Math", q: "Explain the Normalization Axiom in probability.", a: "The Normalization Axiom states that the probability of the entire sample space is 1. If financial access is categorized into mutually exclusive categories, the sum of their probabilities must equal 1." },
    { id: 13, cat: "Math", q: "What is the difference between a parametric and a non-parametric algorithm?", a: "Parametric algorithms (e.g., Linear Regression) assume a specific functional form for the data, whereas non-parametric algorithms (e.g., k-Nearest Neighbors) do not make such assumptions." },
    { id: 14, cat: "Math", q: "Define Covariance and its relationship with Correlation.", a: "Covariance indicates the direction of the linear relationship between two variables. Correlation is the standardized version of covariance, providing a value between -1 and 1." },
    { id: 15, cat: "Math", q: "Explain the concept of 'Survivorship Bias' in Tanzanian business research.", a: "Survivorship bias occurs when the researcher focuses only on companies that 'survived' a certain period, ignoring those that failed. This leads to overly optimistic conclusions." },

    /* II. Machine Learning Foundations and Algorithms (16–40) */
    { id: 16, cat: "ML", q: "Differentiate between Supervised, Unsupervised, and Reinforcement Learning with Tanzanian examples.", a: "Supervised: Labeled data (e.g., identifying poachers). Unsupervised: Hidden patterns (e.g., borrower segmentation). Reinforcement: Learning through trial and error (e.g., supply chain optimization)." },
    { id: 17, cat: "ML", q: "How does a Random Forest algorithm improve upon a single Decision Tree for credit scoring?", a: "A single Decision Tree is prone to overfitting. A Random Forest builds multiple trees and averages their results (bagging), improving generalization and robustness." },
    { id: 18, cat: "ML", q: "Explain Gradient Descent and its application in training deep learning models at SUA.", a: "Gradient Descent is an optimization algorithm used to minimize a model's loss function by iteratively adjusting weights. At SUA, it is used for crop monitoring vision models." },
    { id: 19, cat: "ML", q: "What is the difference between L1 (Lasso) and L2 (Ridge) regularization?", a: "L1 adds a penalty equal to the absolute value of coefficients (feature selection). L2 adds a penalty equal to the square of the magnitude (discouraging large weights)." },
    { id: 20, cat: "ML", q: "Describe the architecture of a Convolutional Neural Network (CNN) and its use in malaria diagnosis.", a: "CNNs consist of convolutional layers, pooling layers, and fully connected layers. In Tanzania, they recognize malaria parasites in blood smear images." },
    { id: 21, cat: "ML", q: "What is Transfer Learning, and why is it crucial for African-centric medical AI?", a: "Transfer Learning involves fine-tuning a pre-trained model on a smaller, specific dataset. This allows models to be adapted to local conditions without requiring millions of local images." },
    { id: 22, cat: "ML", q: "Explain the concept of 'Overfitting' and how to combat it in Tanzanian fintech models.", a: "Overfitting occurs when a model learns noise in the training data. It is combated via cross-validation, regularization, and feature selection." },
    { id: 23, cat: "ML", q: "What is a 'Confusion Matrix,' and what metrics can be derived from it?", a: "It compares actual vs. predicted values. Metrics include Precision, Recall (Sensitivity), Accuracy, and the F1-Score." },
    { id: 24, cat: "ML", q: "Define 'Precision' and 'Recall' in the context of a Tanzanian TB screening AI.", a: "Precision: Accuracy of positive predictions. Recall: Ability to find all positive cases. In screening, high Recall is prioritized to avoid missing patients." },
    { id: 25, cat: "ML", q: "What is 'Feature Engineering,' and provide an example from Tanzanian mobile money data.", a: "Transforming raw data into features. Example: Calculating the 'Nighttime Transaction Ratio' as a behavioral anomaly signal for fraud detection." },
    { id: 26, cat: "ML", q: "Explain the difference between Bagging and Boosting.", a: "Bagging (Random Forest) builds models in parallel to reduce variance. Boosting (XGBoost) builds models sequentially to reduce bias." },
    { id: 27, cat: "ML", q: "What is a 'Support Vector Machine' (SVM), and how does it handle non-linear data?", a: "SVM finds the hyperplane that separates classes with max margin. For non-linear data, it uses the 'kernel trick' to map data into higher-dimensional spaces." },
    { id: 28, cat: "ML", q: "Describe k-Means Clustering and its use in market segmentation in Dar es Salaam.", a: "k-Means groups data into k clusters based on similarity. It helps retailers segment customers based on spending patterns and location." },
    { id: 29, cat: "ML", q: "What is the 'Elbow Method'?", a: "A heuristic used to determine the optimal number of clusters (k) by plotting the sum of squared distances." },
    { id: 30, cat: "ML", q: "Explain the 'Bias-Variance Tradeoff' visually.", a: "Imagine a bullseye; low bias/low variance hits the center; high bias/low variance hits a tight group far from center; low bias/high variance is scattered." },
    { id: 31, cat: "ML", q: "Define 'Logistic Regression' and explain why its name includes 'Regression' despite being a classification tool.", a: "It uses a sigmoid function to model probability. It is called regression because it estimates a continuous probability (0-1) before thresholding." },
    { id: 32, cat: "ML", q: "What are 'Neural Networks,' and what are their three main layers?", a: "Algorithms inspired by the brain. Layers: Input (data ingestion), Hidden (feature processing), and Output (final prediction)." },
    { id: 33, cat: "ML", q: "What is 'Deep Learning'?", a: "A subfield of ML focusing on neural networks with many hidden layers for automatic extraction of hierarchical features." },
    { id: 34, cat: "ML", q: "Explain 'Activation Functions' like ReLU and Sigmoid.", a: "They introduce non-linearity. ReLU is preferred in hidden layers to avoid vanishing gradients; Sigmoid is for output binary classification." },
    { id: 35, cat: "ML", q: "What is 'Batch Normalization'?", a: "A technique to normalize inputs to each layer, stabilizing and accelerating the training process." },
    { id: 36, cat: "ML", q: "Describe 'Dropout' in neural network training.", a: "A regularization technique where neurons are randomly 'dropped' during training to prevent overfitting." },
    { id: 37, cat: "ML", q: "What is 'Stochastic Gradient Descent' (SGD) vs. 'Batch Gradient Descent'?", a: "Batch uses the entire dataset (stable/slow); SGD uses a single random sample per iteration (fast/noisy)." },
    { id: 38, cat: "ML", q: "Explain the concept of 'Backpropagation.'", a: "The algorithm for training neural networks where output error is propagated backward to update weights." },
    { id: 39, cat: "ML", q: "What is an 'Autoencoder'?", a: "An unsupervised neural network that learns to compress input into a lower-dimensional latent space and then reconstructs it." },
    { id: 40, cat: "ML", q: "Define 'Principal Component Analysis' (PCA) simply.", a: "A dimensionality reduction technique that transforms a large set of variables into a smaller one containing most of the information." },

    /* III. Data Engineering, SQL, and Infrastructure (41–65) */
    { id: 41, cat: "DataEng", q: "What is a 'Primary Key' vs. a 'Foreign Key'?", a: "Primary Key uniquely identifies each record. Foreign Key links two tables by referencing the primary key of another table." },
    { id: 42, cat: "DataEng", q: "Write a SQL query to find the second-highest salary from a Tanzanian corporate 'Employees' table.", a: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);" },
    { id: 43, cat: "DataEng", q: "Explain the 'ACID' properties in database transactions.", a: "Atomicity (all-or-nothing), Consistency (data validity), Isolation (concurrent safety), and Durability (persistence). Critical for mobile money transactions." },
    { id: 44, cat: "DataEng", q: "Differentiate between 'DELETE' and 'TRUNCATE' in SQL.", a: "DELETE removes rows one by one (can be rolled back); TRUNCATE removes all rows at once (faster, cannot be rolled back)." },
    { id: 45, cat: "DataEng", q: "What is 'Data Wrangling' or 'Data Munging'?", a: "The process of cleaning, transforming, and mapping raw data into a format suitable for analysis." },
    { id: 46, cat: "DataEng", q: "Explain 'Normalization' in database design (1NF, 2NF, 3NF).", a: "Organizing tables to minimize redundancy. 1NF: Atomic values; 2NF: No partial dependencies; 3NF: No transitive dependencies." },
    { id: 47, cat: "DataEng", q: "What is a 'Common Table Expression' (CTE) in SQL?", a: "A temporary named result set existing only during a single query execution, improving readability." },
    { id: 48, cat: "DataEng", q: "Describe the difference between a 'JOIN' and a 'UNION.'", a: "JOIN combines columns from two tables based on a relation. UNION combines rows of two SELECT statements into one result set." },
    { id: 49, cat: "DataEng", q: "What are 'Window Functions' in SQL, and provide an example.", a: "Calculations across rows related to the current row. Example: RANK() OVER (ORDER BY amount DESC)." },
    { id: 50, cat: "DataEng", q: "What is a 'Stored Procedure'?", a: "Prepared SQL code that can be saved and reused for consistent business logic." },
    { id: 51, cat: "DataEng", q: "Define 'ETL' and its significance in Tanzanian banking.", a: "Extract, Transform, Load. Moving data from core banking into a data warehouse for analysis." },
    { id: 52, cat: "DataEng", q: "Explain 'RDBMS' vs. 'DBMS.'", a: "DBMS manages data. RDBMS specifically organizes data into related tables using shared keys." },
    { id: 53, cat: "DataEng", q: "What is a 'Subquery,' and what are its types?", a: "A query nested inside another. Types: Single-row, multi-row, multi-column, and correlated." },
    { id: 54, cat: "DataEng", q: "Describe 'Cloud Computing' and its benefit to Tanzanian tech startups.", a: "On-demand computing access over internet. Allows startups to scale without heavy upfront hardware investment." },
    { id: 55, cat: "DataEng", q: "What is 'TensorFlow'?", a: "Open-source platform by Google for numerical computation and deep learning models." },
    { id: 56, cat: "DataEng", q: "Explain 'NoSQL' and when it might be preferred over SQL in Tanzania.", a: "Non-relational databases for unstructured data. Preferred for real-time applications where schema is dynamic." },
    { id: 57, cat: "DataEng", q: "What is a 'Data Warehouse'?", a: "Centralized repository storing integrated data from multiple sources for analysis." },
    { id: 58, cat: "DataEng", q: "Define 'OLTP' and 'OLAP.'", a: "OLTP: High-speed transactions (mobile money). OLAP: Complex historical queries and reporting." },
    { id: 59, cat: "DataEng", q: "What is 'Edge Computing'?", a: "Processing data closer to the source (e.g., IoT sensor) to handle poor rural connectivity." },
    { id: 60, cat: "DataEng", q: "Explain 'Containerization' (e.g., Docker).", a: "Packaging an app and dependencies into a single container for consistent execution." },
    { id: 61, cat: "DataEng", q: "What is 'Model Deployment'?", a: "Integrating a trained model into a production environment for real-time predictions." },
    { id: 62, cat: "DataEng", q: "Describe 'Scalability' in a database context.", a: "Ability to handle increasing work by adding power to a server (vertical) or adding more servers (horizontal)." },
    { id: 63, cat: "DataEng", q: "What is an 'API' (Application Programming Interface)?", a: "Protocols allowing applications to communicate, e.g., mobile money apps requesting credit scores." },
    { id: 64, cat: "DataEng", q: "Define 'Latency.'", a: "The delay between a request and its response. Crucial for real-time fraud detection." },
    { id: 65, cat: "DataEng", q: "What is 'Microservices Architecture'?", a: "Design approach where an app is built as independent services communicating via APIs." },

    /* IV. NLP, LLMs, and Generative AI (66–80) */
    { id: 66, cat: "AI", q: "Explain the 'Attention Mechanism' in Transformer models.", a: "Allows a model to weigh the importance of different words in a sentence relative to each other." },
    { id: 67, cat: "AI", q: "What is 'Retrieval-Augmented Generation' (RAG)?", a: "Combines an LLM with external knowledge retrieval to significantly reduce 'hallucinations'." },
    { id: 68, cat: "AI", q: "Describe 'Few-Shot Learning' in the context of LLMs.", a: "The ability of an LLM to perform a task after being given only a small number of examples." },
    { id: 69, cat: "AI", q: "What are 'Hallucinations' in LLMs, and how can they be mitigated?", a: "Incorrect or nonsensical generated info. Mitigated via RAG and grounding prompts." },
    { id: 70, cat: "AI", q: "Explain 'Fine-Tuning' vs. 'Pre-Training.'", a: "Pre-training: Learning from a massive dataset. Fine-tuning: Adapting to a specific task (e.g., Swahili legal docs)." },
    { id: 71, cat: "AI", q: "What is 'Self-Attention' vs. 'Cross-Attention'?", a: "Self: Relates parts of same sequence. Cross: Relates parts of two different sequences." },
    { id: 72, cat: "AI", q: "Define 'Tokenization' and its impact on Swahili NLP.", a: "Breaking text into tokens. Must handle Swahili's agglutinative nature (prefixes/suffixes)." },
    { id: 73, cat: "AI", q: "What is 'RLHF' (Reinforcement Learning from Human Feedback)?", a: "Technique where humans rank outputs to align model with human preferences/safety." },
    { id: 74, cat: "AI", q: "Describe 'Embeddings' in LLMs.", a: "Numerical (vector) representations where semantically similar words are close in high-dimensional space." },
    { id: 75, cat: "AI", q: "What is 'Generative AI'?", a: "Models that create new content (text, images, music) by learning patterns of training data." },
    { id: 76, cat: "AI", q: "Explain 'Prompt Engineering.'", a: "Crafting inputs to an LLM to elicit the most accurate and useful responses." },
    { id: 77, cat: "AI", q: "What is 'Agentic AI'?", a: "Models acting as autonomous agents—breaking goals into tasks and using external tools." },
    { id: 78, cat: "AI", q: "Describe 'Diffusion Models' and their primary use.", a: "Generative models creating images by reversing random noise addition." },
    { id: 79, cat: "AI", q: "What is 'Constitutional AI'?", a: "Training AI to follow high-level principles to ensure helpful and safe behavior." },
    { id: 80, cat: "AI", q: "Define 'Large Language Models' (LLMs).", a: "Models with billions of parameters trained to understand and generate human language." },

    /* V. Ethics, Law, and Social Context (81–100) */
    { id: 81, cat: "Ethics", q: "What is the 'Personal Data Protection Act (PDPA) 2022'?", a: "The legal framework for collection, use, and storage of personal data in Tanzania." },
    { id: 82, cat: "Ethics", q: "Explain the 'Right to Human Intervention' under Section 36 of the PDPA.", a: "Individual right to request that automated decisions (e.g., loan rejection) are reviewed by a human." },
    { id: 83, cat: "Ethics", q: "What are the 'Principles of Data Protection' in Section 5 of the PDPA?", a: "Lawfulness, purpose limitation, data minimization, accuracy, security, and restricted cross-border transfers." },
    { id: 84, cat: "Ethics", q: "How does the PDPA define 'Sensitive Personal Data'?", a: "Data on race, ethnic origin, political opinions, religious beliefs, health status, genetic or biometric data." },
    { id: 85, cat: "Ethics", q: "Describe the 'Personal Data Protection Commission' (PDPC) and its role.", a: "Regulatory body for monitoring compliance, investigating complaints, and registering data controllers." },
    { id: 86, cat: "Ethics", q: "What is 'Algorithmic Bias,' and how can it impact Tanzanian society?", a: "Prejudiced results from biased data. Could lead to unfair credit scoring or medical neglect." },
    { id: 87, cat: "Ethics", q: "Explain 'Explainability' in AI.", a: "Ability to communicate reasons behind AI decisions, crucial for accountability under PDPA." },
    { id: 88, cat: "Ethics", q: "What is 'Data Sovereignty'?", a: "Idea that data is subject to laws where collected. PDPA restricts cross-border transfer without safeguards." },
    { id: 89, cat: "Ethics", q: "Describe the ethical challenge of 'Job Displacement' by AI in Tanzania.", a: "AI risks displacing low-skilled workers but creates high-skilled roles (data analysts, ML engineers)." },
    { id: 90, cat: "Ethics", q: "What is the role of AI in 'Linguistic Preservation' for Swahili?", a: "Building NLP tools and datasets for Swahili (including slang) to ensure digital survival." },
    { id: 91, cat: "Ethics", q: "Define 'Data Ethics.'", a: "Moral framework for responsible data use prioritizing fairness and privacy over technical utility." },
    { id: 92, cat: "Ethics", q: "What is 'Synthetic Data,' and how can it help with privacy?", a: "Generated data mimicking real statistical properties without actual personal info." },
    { id: 93, cat: "Ethics", q: "Explain 'Differential Privacy.'", a: "Mathematical technique adding 'noise' to gain statistical insights without revealing individual info." },
    { id: 94, cat: "Ethics", q: "Why is 'Digital Literacy' a prerequisite for ethical AI adoption in rural Tanzania?", a: "Required for meaningful consent and understanding how data is used." },
    { id: 95, cat: "Ethics", q: "What is 'Fairness' in Machine Learning?", a: "Goal of ensuring model predictions don't result in disparate impacts on demographic groups." },
    { id: 96, cat: "Ethics", q: "Describe 'Accountability' in automated decision systems.", a: "Principle that a clearly identified person or org is responsible for AI system outcomes." },
    { id: 97, cat: "Ethics", q: "What are the risks of 'Data Silos'?", a: "Isolation of info within departments preventing national AI policy integration." },
    { id: 98, cat: "Ethics", q: "Explain 'Transparency' in the context of the Tanzanian health sector.", a: "Communicating how AI diagnostics work and their limitations to build patient trust." },
    { id: 99, cat: "Ethics", q: "What is the significance of the 'YEESI Lab' at SUA?", a: "Pioneer in local high-computing hardware necessary for advanced ML research in agriculture." },
    { id: 100, cat: "Ethics", q: "What is the 'Future of AI in Tanzania'?", a: "A shift where technologies boost economic growth and livelihoods under competitive policy frameworks." }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getCatStyles = (cat) => {
    switch(cat) {
      case 'Math': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'ML': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'DataEng': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'AI': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'Ethics': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      default: return 'bg-slate-50 text-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta text-deep-blue">
      <Header />
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        
        {/* BACK BUTTON */}
        <Link 
          to="/faq/it" 
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-deep-blue text-deep-blue font-bold rounded-xl mb-10 hover:bg-deep-blue hover:text-white transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-white rounded-3xl shadow-sm border border-slate-100 mb-6">
            <BrainCircuit size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            AI, ML & Data Science
          </h1>
          <p className="text-slate-500 font-medium max-w-3xl mx-auto italic leading-relaxed">
            Strategic Evaluation: Data Science & AI Context (TZ). <br />
            Mkusanyiko kamili wa maswali 100 ya usaili yanayohusu misingi ya takwimu, algorithms, na sheria za data.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {maswali.map((m, index) => (
            <div 
              key={m.id} 
              className={`bg-white rounded-[32px] border transition-all duration-300 ${activeIndex === index ? 'border-neo-mint shadow-xl' : 'border-slate-100 shadow-sm'}`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <div className="flex items-center gap-5">
                  <span className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-inner transition-colors ${activeIndex === index ? 'bg-neo-mint text-deep-blue' : 'bg-slate-50 text-slate-400'}`}>
                    {m.id}
                  </span>
                  <div>
                    <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full border mb-2 inline-block ${getCatStyles(m.cat)}`}>
                      {m.cat}
                    </span>
                    <h3 className="font-bold text-deep-blue text-lg leading-snug group-hover:text-neo-mint transition-colors">
                      {m.q}
                    </h3>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className={activeIndex === index ? 'text-neo-mint' : 'text-slate-300'} />
                </div>
              </button>

              {activeIndex === index && (
                <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-3 duration-500">
                  <div className="p-6 bg-slate-50 rounded-[24px] border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-deep-blue/20"></div>
                    <small className="font-black text-[10px] text-deep-blue uppercase tracking-widest mb-2 block">TECHNICAL ANSWER:</small>
                    <p className="text-deep-blue text-sm leading-relaxed italic font-medium">
                      {m.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}